using System.Collections.Concurrent;
using System.Net.Mail;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;

const string SessionCookie = "yourpath.session";
var frontendPath = Path.GetFullPath(Path.Combine(AppContext.BaseDirectory, "..", "..", "..", "..", "frontend"));
var builder = WebApplication.CreateBuilder(new WebApplicationOptions { Args = args, WebRootPath = frontendPath });
builder.WebHost.ConfigureKestrel(options => options.Limits.MaxRequestBodySize = 64 * 1024);
var app = builder.Build();
var students = new ConcurrentDictionary<string, StudentRecord>();
var accounts = new ConcurrentDictionary<string, StudentAccount>(StringComparer.OrdinalIgnoreCase);

app.Use(async (context, next) =>
{
	if (context.Request.Path.StartsWithSegments("/api"))
		context.Response.Headers.CacheControl = "no-store";

	await next();
});
app.UseDefaultFiles();
app.UseStaticFiles();

app.MapGet("/api/session", (HttpContext context) =>
{
	var student = GetCurrentStudent(context);
	if (student is null)
		return Results.Ok(new SessionPayload(false, null, null, 0, null, null));

	lock (student.SyncRoot)
	{
		return Results.Ok(new SessionPayload(
			true,
			student.Profile,
			student.Answers,
			student.CurrentSection,
			student.Analysis,
			student.Feedback));
	}
});

app.MapPost("/api/register", (RegistrationRequest request, HttpContext context) =>
{
	var fullName = request.FullName?.Trim();
	var email = request.Email?.Trim();
	var phone = request.Phone?.Trim();
	var country = request.Country?.Trim();
	var countryCode = request.CountryCode?.Trim();
	var grade = request.Grade?.Trim();
	var location = request.Location?.Trim();
	var password = request.Password;

	if (string.IsNullOrWhiteSpace(fullName) || fullName.Length > 100)
		return Results.BadRequest(new ErrorPayload("Enter your full name (100 characters or fewer)."));
	if (!MailAddress.TryCreate(email, out _) || email!.Length > 254)
		return Results.BadRequest(new ErrorPayload("Enter a valid email address."));
	if (password is null || password.Length is < 12 or > 256)
		return Results.BadRequest(new ErrorPayload("Use a password or passphrase between 12 and 256 characters."));
	if (!request.PrivacyAcknowledged)
		return Results.BadRequest(new ErrorPayload("Review the privacy and cookie notice before creating an account."));
	if (string.IsNullOrWhiteSpace(phone) || phone.Length > 32 || phone.Count(char.IsDigit) is < 6 or > 15)
		return Results.BadRequest(new ErrorPayload("Enter a phone number with 6 to 15 digits."));
	if (string.IsNullOrWhiteSpace(country) || country.Length > 100)
		return Results.BadRequest(new ErrorPayload("Enter your country."));
	if (countryCode is null || !System.Text.RegularExpressions.Regex.IsMatch(countryCode, @"^\+[1-9][0-9]{0,3}$"))
		return Results.BadRequest(new ErrorPayload("Use an international dialing code, such as +1 or +44."));
	if (string.IsNullOrWhiteSpace(grade) || grade.Length > 64)
		return Results.BadRequest(new ErrorPayload("Enter your grade or class."));
	if (request.Age is < 13 or > 22)
		return Results.BadRequest(new ErrorPayload("Online registration is available for students aged 13 to 22."));
	if (request.Age < 18 && !request.GuardianConsent)
		return Results.BadRequest(new ErrorPayload("Ask a parent or guardian to review this prototype before continuing."));
	if (location?.Length > 160)
		return Results.BadRequest(new ErrorPayload("School or location must be 160 characters or fewer."));
	if (accounts.ContainsKey(email!.ToLowerInvariant()))
		return Results.Conflict(new ErrorPayload("An account already exists for this email. Sign in instead."));

	var previousToken = context.Request.Cookies[SessionCookie];
	if (!string.IsNullOrEmpty(previousToken))
		students.TryRemove(HashToken(previousToken), out _);

	var profile = new StudentProfile(
		Guid.NewGuid().ToString("N"),
		fullName,
		email!.ToLowerInvariant(),
		phone,
		country,
		countryCode,
		grade,
		request.Age,
		string.IsNullOrWhiteSpace(location) ? null : location,
		request.Age < 18 && request.GuardianConsent);
	var token = Convert.ToBase64String(RandomNumberGenerator.GetBytes(32))
		.TrimEnd('=')
		.Replace('+', '-')
		.Replace('/', '_');
	var student = new StudentRecord(profile, DateTimeOffset.UtcNow.AddHours(8));
	var salt = RandomNumberGenerator.GetBytes(16);
	var passwordHash = HashPassword(password, salt);
	if (!accounts.TryAdd(profile.Email, new StudentAccount(salt, passwordHash, DateTimeOffset.UtcNow, student)))
		return Results.Conflict(new ErrorPayload("An account already exists for this email. Sign in instead."));
	CreateSession(context, students, student);

	return Results.Created("/api/session", new { profile });
});

app.MapPost("/api/login", (LoginRequest request, HttpContext context) =>
{
	var email = request.Email?.Trim().ToLowerInvariant();
	if (email is null || request.Password is null || !request.PrivacyAcknowledged || !accounts.TryGetValue(email, out var account))
		return Results.Unauthorized();

	var candidateHash = HashPassword(request.Password, account.Salt);
	if (!CryptographicOperations.FixedTimeEquals(candidateHash, account.PasswordHash))
		return Results.Unauthorized();

	account.Student.ExpiresAt = DateTimeOffset.UtcNow.AddHours(8);
	CreateSession(context, students, account.Student);
	return Results.Ok(new { profile = account.Student.Profile });
});

app.MapPut("/api/assessment", (AssessmentSaveRequest request, HttpContext context) =>
{
	var student = GetCurrentStudent(context);
	if (student is null)
		return Results.Unauthorized();
	if (request.CurrentSection is < 0 or > 3 || request.Answers is null)
		return Results.BadRequest(new ErrorPayload("The questionnaire progress is invalid."));

	var validationError = InterestReflection.ValidateAnswerShapes(request.Answers);
	if (validationError is not null)
		return Results.BadRequest(new ErrorPayload(validationError));

	lock (student.SyncRoot)
	{
		student.Answers = request.Answers.ToDictionary(pair => pair.Key, pair => pair.Value.Clone());
		student.CurrentSection = request.CurrentSection;
		student.Analysis = null;
		student.Feedback = null;
	}

	return Results.NoContent();
});

app.MapPost("/api/assessment/reset", (HttpContext context) =>
{
	var student = GetCurrentStudent(context);
	if (student is null)
		return Results.Unauthorized();

	lock (student.SyncRoot)
	{
		student.Answers.Clear();
		student.CurrentSection = 0;
		student.Analysis = null;
		student.Feedback = null;
	}

	return Results.NoContent();
});

app.MapPost("/api/analysis", (HttpContext context) =>
{
	var student = GetCurrentStudent(context);
	if (student is null)
		return Results.Unauthorized();

	lock (student.SyncRoot)
	{
		if (!InterestReflection.IsComplete(student.Answers))
			return Results.BadRequest(new ErrorPayload("Complete all four sections before viewing your reflection."));

		student.Analysis = InterestReflection.Analyze(student.Answers, student.Profile);
		return Results.Ok(student.Analysis);
	}
});

app.MapPost("/api/feedback", (FeedbackRequest request, HttpContext context) =>
{
	var student = GetCurrentStudent(context);
	if (student is null)
		return Results.Unauthorized();
	if (request.Rating is < 1 or > 5 || request.Note?.Length > 800)
		return Results.BadRequest(new ErrorPayload("Choose a rating from 1 to 5. Notes must be 800 characters or fewer."));

	lock (student.SyncRoot)
	{
		if (student.Analysis is null)
			return Results.BadRequest(new ErrorPayload("View your reflection before sending feedback."));

		student.Feedback = new StudentFeedback(request.Rating, request.Note?.Trim() ?? "", DateTimeOffset.UtcNow);
	}

	return Results.NoContent();
});

app.MapGet("/api/saved", (HttpContext context) =>
{
	var student = GetCurrentStudent(context);
	if (student is null) return Results.Unauthorized();
	lock (student.SyncRoot) return Results.Ok(student.SavedPathways.Values.ToArray());
});

app.MapPut("/api/saved/{id}", (string id, SavePathwayRequest request, HttpContext context) =>
{
	var student = GetCurrentStudent(context);
	if (student is null) return Results.Unauthorized();
	lock (student.SyncRoot)
	{
		if (request.Saved)
		{
			var career = student.Analysis?.Careers.FirstOrDefault(item => item.Id == id);
			if (career is null) return Results.BadRequest(new ErrorPayload("Explore this pathway in your latest reflection before saving it."));
			student.SavedPathways[id] = career;
		}
		else
		{
			student.SavedPathways.Remove(id);
		}
		return Results.Ok(student.SavedPathways.Values.ToArray());
	}
});

app.MapPost("/api/session/end", (HttpContext context) =>
{
	var token = context.Request.Cookies[SessionCookie];
	var student = GetCurrentStudent(context);
	if (!string.IsNullOrEmpty(token)) students.TryRemove(HashToken(token), out _);
	if (student is not null) accounts.TryRemove(student.Profile.Email, out _);
	DeleteSessionCookie(context);
	return Results.NoContent();
});

app.MapPost("/api/logout", (HttpContext context) =>
{
	var token = context.Request.Cookies[SessionCookie];
	if (!string.IsNullOrEmpty(token)) students.TryRemove(HashToken(token), out _);
	DeleteSessionCookie(context);
	return Results.NoContent();
});

app.MapFallbackToFile("index.html");
app.Lifetime.ApplicationStopping.Register(() =>
{
	students.Clear();
	accounts.Clear();
});
app.Run();

StudentRecord? GetCurrentStudent(HttpContext context)
{
	var token = context.Request.Cookies[SessionCookie];
	if (string.IsNullOrEmpty(token))
		return null;

	var key = HashToken(token);
	if (students.TryGetValue(key, out var student) && student.ExpiresAt > DateTimeOffset.UtcNow)
		return student;

	students.TryRemove(key, out _);
	context.Response.Cookies.Delete(SessionCookie, new CookieOptions
	{
		HttpOnly = true,
		Secure = context.Request.IsHttps,
		SameSite = SameSiteMode.Strict,
		Path = "/"
	});
	return null;
}

string HashToken(string token) => Convert.ToHexString(SHA256.HashData(Encoding.UTF8.GetBytes(token)));

byte[] HashPassword(string password, byte[] salt) =>
	Rfc2898DeriveBytes.Pbkdf2(password, salt, 310_000, HashAlgorithmName.SHA256, 32);

void CreateSession(HttpContext context, ConcurrentDictionary<string, StudentRecord> sessionStore, StudentRecord student)
{
	var previousToken = context.Request.Cookies[SessionCookie];
	if (!string.IsNullOrEmpty(previousToken)) sessionStore.TryRemove(HashToken(previousToken), out _);
	var token = Convert.ToBase64String(RandomNumberGenerator.GetBytes(32))
		.TrimEnd('=')
		.Replace('+', '-')
		.Replace('/', '_');
	sessionStore[HashToken(token)] = student;
	context.Response.Cookies.Append(SessionCookie, token, new CookieOptions
	{
		HttpOnly = true,
		Secure = context.Request.IsHttps,
		SameSite = SameSiteMode.Strict,
		IsEssential = true,
		MaxAge = TimeSpan.FromHours(8),
		Path = "/"
	});
}

void DeleteSessionCookie(HttpContext context) => context.Response.Cookies.Delete(SessionCookie, new CookieOptions
{
	HttpOnly = true,
	Secure = context.Request.IsHttps,
	SameSite = SameSiteMode.Strict,
	Path = "/"
});

sealed record RegistrationRequest(
	string? FullName,
	string? Email,
	string? Phone,
	string? Country,
	string? CountryCode,
	string? Grade,
	int Age,
	string? Location,
	bool GuardianConsent,
	string? Password,
	bool PrivacyAcknowledged);
sealed record LoginRequest(string? Email, string? Password, bool PrivacyAcknowledged);

sealed record AssessmentSaveRequest(int CurrentSection, Dictionary<string, JsonElement>? Answers);
sealed record FeedbackRequest(int Rating, string? Note);
sealed record SavePathwayRequest(bool Saved);
sealed record ErrorPayload(string Error);
sealed record SessionPayload(
	bool Registered,
	StudentProfile? Profile,
	Dictionary<string, JsonElement>? Answers,
	int CurrentSection,
	ReflectionSummary? Analysis,
	StudentFeedback? Feedback);

sealed record StudentProfile(
	string Id,
	string FullName,
	string Email,
	string Phone,
	string Country,
	string CountryCode,
	string Grade,
	int Age,
	string? Location,
	bool GuardianConsentAcknowledged);

sealed record StudentFeedback(int Rating, string Note, DateTimeOffset SubmittedAt);

sealed class StudentRecord(StudentProfile profile, DateTimeOffset expiresAt)
{
	public object SyncRoot { get; } = new();
	public StudentProfile Profile { get; } = profile;
	public DateTimeOffset ExpiresAt { get; set; } = expiresAt;
	public Dictionary<string, JsonElement> Answers { get; set; } = new(StringComparer.Ordinal);
	public int CurrentSection { get; set; }
	public ReflectionSummary? Analysis { get; set; }
	public StudentFeedback? Feedback { get; set; }
	public Dictionary<string, CareerOption> SavedPathways { get; } = new(StringComparer.Ordinal);
}

sealed class StudentAccount(byte[] salt, byte[] passwordHash, DateTimeOffset privacyAcknowledgedAt, StudentRecord student)
{
	public byte[] Salt { get; } = salt;
	public byte[] PasswordHash { get; } = passwordHash;
	public DateTimeOffset PrivacyAcknowledgedAt { get; } = privacyAcknowledgedAt;
	public StudentRecord Student { get; } = student;
}
