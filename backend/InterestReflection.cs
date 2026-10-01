using System.Text.Json;
using System.Text.RegularExpressions;

static class InterestReflection
{
    private static readonly string[][] Sections =
    [
        ["saturday", "subjects", "activities", "project", "ranking"],
        ["creative-energy", "problem-solving", "logic-energy", "team-style", "team-role"],
        ["team-conflict", "curiosity", "motivation", "dislikes", "future-interest"],
        ["pressure-free", "learning", "skills", "repeat-choice", "actual-time"]
    ];

    private static readonly HashSet<string> TextQuestionIds = new(StringComparer.Ordinal)
    {
        "saturday", "curiosity", "future-interest", "actual-time"
    };

    private static readonly HashSet<string> MultiQuestionIds = new(StringComparer.Ordinal)
    {
        "subjects", "activities", "dislikes", "skills"
    };

    private static readonly HashSet<string> SingleQuestionIds = new(StringComparer.Ordinal)
    {
        "project", "problem-solving", "team-role", "team-conflict", "motivation",
        "pressure-free", "learning", "repeat-choice"
    };

    private static readonly HashSet<string> ScaleQuestionIds = new(StringComparer.Ordinal)
    {
        "creative-energy", "logic-energy", "team-style"
    };

    private static readonly HashSet<string> BehaviorQuestionIds = new(StringComparer.Ordinal)
    {
        "subjects", "activities", "project", "ranking", "problem-solving", "team-role",
        "team-conflict", "pressure-free", "learning", "skills", "repeat-choice", "actual-time"
    };

    private static readonly string[] RankingOptions = ["rank-investigate", "rank-design", "rank-explain", "rank-organize"];

    private static readonly Dictionary<string, string[]> OptionSignals = new(StringComparer.Ordinal)
    {
        ["sub-math"] = ["analytical"], ["sub-science"] = ["analytical", "hands-on"],
        ["sub-tech"] = ["analytical"], ["sub-writing"] = ["communication", "creative"],
        ["sub-arts"] = ["creative"], ["sub-history"] = ["communication", "analytical"],
        ["sub-business"] = ["leadership", "analytical"], ["sub-nature"] = ["hands-on", "care"],
        ["act-code"] = ["analytical"], ["act-design"] = ["creative"],
        ["act-help"] = ["care", "communication"], ["act-organize"] = ["leadership", "communication"],
        ["act-outdoors"] = ["hands-on"], ["act-perform"] = ["creative", "communication"],
        ["act-repair"] = ["hands-on"], ["act-read"] = ["communication", "analytical"],
        ["proj-research"] = ["analytical", "hands-on"], ["proj-guide"] = ["creative", "communication", "care"],
        ["proj-event"] = ["leadership", "communication"], ["proj-tutor"] = ["care", "communication"],
        ["proj-prototype"] = ["hands-on", "creative"],
        ["rank-investigate"] = ["analytical"], ["rank-design"] = ["creative"],
        ["rank-explain"] = ["communication", "care"], ["rank-organize"] = ["leadership"],
        ["solve-map"] = ["analytical"], ["solve-try"] = ["hands-on", "creative"],
        ["solve-ask"] = ["communication", "care"], ["solve-research"] = ["analytical", "communication"],
        ["role-explain"] = ["communication"], ["role-coordinate"] = ["leadership"],
        ["role-research"] = ["analytical"], ["role-make"] = ["hands-on", "creative"],
        ["role-support"] = ["care"],
        ["conflict-clarify"] = ["communication"], ["conflict-evidence"] = ["analytical"],
        ["conflict-prototype"] = ["hands-on", "creative"], ["conflict-mediate"] = ["care", "leadership"],
        ["mot-master"] = ["analytical"], ["mot-impact"] = ["care", "communication"],
        ["mot-craft"] = ["creative", "hands-on"], ["mot-freedom"] = ["creative", "leadership"],
        ["mot-recognition"] = [],
        ["dislike-routine"] = [], ["dislike-public"] = [], ["dislike-abstract"] = [],
        ["dislike-screen"] = [], ["dislike-conflict"] = [], ["dislike-uncertain"] = [],
        ["free-investigate"] = ["analytical"], ["free-create"] = ["creative"],
        ["free-community"] = ["care", "communication"], ["free-build"] = ["hands-on"],
        ["free-organize"] = ["leadership"], ["free-explain"] = ["communication"],
        ["learn-project"] = ["hands-on", "creative"], ["learn-people"] = ["communication", "care"],
        ["learn-independent"] = ["analytical"], ["learn-mentor"] = ["care", "communication"],
        ["skill-data"] = ["analytical"], ["skill-design"] = ["creative"],
        ["skill-speaking"] = ["communication"], ["skill-leading"] = ["leadership"],
        ["skill-caring"] = ["care"], ["skill-making"] = ["hands-on"],
        ["again-solve"] = ["analytical"], ["again-create"] = ["creative"],
        ["again-help"] = ["care", "communication"], ["again-make"] = ["hands-on"],
        ["again-organize"] = ["leadership"]
    };

    private static readonly Dictionary<string, string[]> Keywords = new(StringComparer.Ordinal)
    {
        ["analytical"] = ["code", "coding", "programming", "math", "puzzle", "logic", "data", "science", "research", "experiment", "patterns", "statistics", "robotics"],
        ["creative"] = ["draw", "drawing", "art", "design", "designing", "create", "creating", "music", "write", "writing", "story", "film", "photo", "fashion", "animation"],
        ["communication"] = ["teach", "teaching", "explain", "talk", "debate", "speak", "present", "mentor", "writing", "persuade", "language", "journalism"],
        ["care"] = ["help", "support", "care", "health", "patient", "volunteer", "listen", "counsel", "wellbeing", "animals"],
        ["hands-on"] = ["make", "making", "build", "building", "repair", "outdoors", "nature", "garden", "cook", "machine", "physical", "field", "tools"],
        ["leadership"] = ["lead", "plan", "organize", "manage", "start", "event", "business", "project", "coordinate", "community", "initiative"]
    };

    private static readonly Dictionary<string, PathwayDefinition> Pathways = new(StringComparer.Ordinal)
    {
        ["analytical"] = new("Investigate & solve", "Math, sciences, computing, economics, or research", "Try a small question you can test: gather evidence, make a simple chart, and explain what changed your mind."),
        ["creative"] = new("Create & design", "Art, design, architecture, media, or product development", "Make two versions of something for a real person, then ask which one works better and why."),
        ["communication"] = new("Explain & connect", "Languages, humanities, education, journalism, or law", "Teach a topic you enjoy in three minutes. Notice which part you most wanted to clarify."),
        ["care"] = new("Support & improve lives", "Biology, public health, psychology, counseling, or community work", "Talk with a trusted adult about a supervised way to learn what support work looks like day to day."),
        ["hands-on"] = new("Build, make & explore", "Environmental studies, engineering, skilled trades, agriculture, or lab work", "Repair, grow, or prototype something small. Keep notes on the parts that held your attention."),
        ["leadership"] = new("Organize & make things happen", "Business, operations, civics, entrepreneurship, or event production", "Plan a small group activity with a clear budget and deadline; notice which responsibilities you choose." )
    };

    public static string? ValidateAnswerShapes(IReadOnlyDictionary<string, JsonElement> answers)
    {
        if (answers.Count > 20)
            return "There are too many questionnaire answers.";

        foreach (var (questionId, value) in answers)
        {
            if (!Sections.SelectMany(section => section).Contains(questionId, StringComparer.Ordinal))
                return "An unknown questionnaire field was sent.";
            if (!HasValidShape(questionId, value))
                return "One of your answers has an invalid format. Please review the questionnaire.";
        }

        return null;
    }

    public static bool IsComplete(IReadOnlyDictionary<string, JsonElement> answers) =>
        ValidateAnswerShapes(answers) is null
        && Sections.SelectMany(section => section).All(id => answers.TryGetValue(id, out var value) && IsCompleteValue(id, value));

    public static bool IsSectionComplete(IReadOnlyDictionary<string, JsonElement> answers, int section) =>
        section >= 0 && section < Sections.Length
        && Sections[section].All(id => answers.TryGetValue(id, out var value) && IsCompleteValue(id, value));

    public static ReflectionSummary Analyze(IReadOnlyDictionary<string, JsonElement> answers, StudentProfile profile)
    {
        var scores = Pathways.Keys.ToDictionary(key => key, _ => 0d, StringComparer.Ordinal);
        var observed = Pathways.Keys.ToDictionary(key => key, _ => 0d, StringComparer.Ordinal);
        var stated = Pathways.Keys.ToDictionary(key => key, _ => 0, StringComparer.Ordinal);

        foreach (var (questionId, answer) in answers)
        {
            if (answer.ValueKind == JsonValueKind.String)
            {
                AddChoice(answer.GetString(), questionId, 1, scores, observed);
                AddTextSignals(questionId, answer.GetString() ?? "", scores, observed, stated);
            }
            else if (answer.ValueKind == JsonValueKind.Array)
            {
                foreach (var option in answer.EnumerateArray())
                    AddChoice(option.GetString(), questionId, 1, scores, observed);
            }
            else if (questionId == "ranking" && answer.ValueKind == JsonValueKind.Object)
            {
                foreach (var option in answer.EnumerateObject())
                {
                    var rank = option.Value.GetInt32();
                    AddChoice(option.Name, questionId, 2.5 - ((rank - 1) * 0.5), scores, observed);
                }
            }
            else if (ScaleQuestionIds.Contains(questionId) && answer.ValueKind == JsonValueKind.Number)
            {
                var rating = answer.GetInt32();
                if (questionId == "creative-energy" && rating >= 4)
                    scores["creative"] += 0.8;
                if (questionId == "logic-energy" && rating >= 4)
                    scores["analytical"] += 0.8;
                if (questionId == "team-style" && rating >= 4)
                    scores["communication"] += 0.8;
            }
        }

        var rankedDomains = scores.OrderByDescending(pair => pair.Value).ToArray();
        var maximumScore = Math.Max(1, rankedDomains[0].Value);
        var dimensions = rankedDomains.Select(pair => new ReflectionDimension(
            pair.Key,
            pair.Key switch
            {
                "analytical" => "Analytical thinking",
                "creative" => "Creativity",
                "communication" => "Communication",
                "care" => "People & care",
                "hands-on" => "Hands-on",
                "leadership" => "Leadership",
                _ => pair.Key
            },
            Math.Clamp((int)Math.Round(pair.Value / maximumScore * 100), 0, 100)))
            .ToArray();
        var reflectionPaths = rankedDomains.Take(3).Select(pair =>
        {
            var definition = Pathways[pair.Key];
            var level = pair.Value >= 5 ? "Repeated signal" : pair.Value >= 2.5 ? "Emerging signal" : "Worth testing";
            return new ReflectionPathway(pair.Key, definition.Title, level, definition.Focus, definition.Experiment, pair.Value);
        }).ToArray();

        var contrasts = new List<ReflectionContrast>();
        foreach (var (domain, claimCount) in stated.OrderByDescending(pair => pair.Value))
        {
            var other = rankedDomains.FirstOrDefault(pair => pair.Key != domain && observed[pair.Key] >= 2);
            if (claimCount < 2 || observed[domain] >= 1.5 || other.Value < 2)
                continue;

            var interest = Pathways[domain].Title;
            var action = Pathways[other.Key].Title;
            contrasts.Add(new ReflectionContrast(
                $"Your written answers return to {interest.ToLowerInvariant()}, while your choices more often point toward {action.ToLowerInvariant()}.",
                "Neither answer is more true. The interest may be new, the choices may not have fit, or you may enjoy the idea more than the activity. A small real-world experiment can help you tell."));
            if (contrasts.Count == 2)
                break;
        }

        var lead = rankedDomains.FirstOrDefault(pair => pair.Value > 0);
        var summary = lead.Value >= 2.5
            ? $"A repeated thread in your answers is {Pathways[lead.Key].Title.ToLowerInvariant()}. Treat it as a direction to investigate, not a label you have to keep."
            : "Your answers are spread across several kinds of work. That can be a useful starting point: test a few small activities before narrowing anything down.";

        var careerResearch = CareerResearch.Build(profile, reflectionPaths, scores);
        return new ReflectionSummary(
            summary,
            "This is a rule-based reflection, not an AI diagnosis, aptitude test, or career decision. It uses only this session's answers; you stay in charge of what feels right.",
            reflectionPaths,
            contrasts.ToArray(),
            DateTimeOffset.UtcNow,
            dimensions,
            careerResearch.Careers,
            careerResearch.Roadmap,
            careerResearch.Sources,
            careerResearch.CheckedOn);
    }

    private static bool HasValidShape(string questionId, JsonElement value)
    {
        if (TextQuestionIds.Contains(questionId))
            return value.ValueKind == JsonValueKind.String && value.GetString()!.Length <= 1600;
        if (MultiQuestionIds.Contains(questionId))
            return value.ValueKind == JsonValueKind.Array
                && value.GetArrayLength() <= 12
                && value.EnumerateArray().All(item => item.ValueKind == JsonValueKind.String && item.GetString()!.Length <= 80)
                && value.EnumerateArray().Select(item => item.GetString()).Distinct(StringComparer.Ordinal).Count() == value.GetArrayLength();
        if (SingleQuestionIds.Contains(questionId))
            return value.ValueKind == JsonValueKind.String && value.GetString()!.Length <= 80;
        if (ScaleQuestionIds.Contains(questionId))
            return value.ValueKind == JsonValueKind.Number && value.TryGetInt32(out var rating) && rating is >= 1 and <= 5;
        if (questionId == "ranking")
        {
            if (value.ValueKind != JsonValueKind.Object || value.EnumerateObject().Count() > RankingOptions.Length)
                return false;
            var properties = value.EnumerateObject().ToArray();
            return properties.All(property => RankingOptions.Contains(property.Name, StringComparer.Ordinal)
                    && property.Value.ValueKind == JsonValueKind.Number
                    && property.Value.TryGetInt32(out var rank)
                    && rank is >= 1 and <= 4)
                && properties.Select(property => property.Value.GetInt32()).Distinct().Count() == properties.Length;
        }

        return false;
    }

    private static bool IsCompleteValue(string questionId, JsonElement value)
    {
        if (!HasValidShape(questionId, value))
            return false;
        if (TextQuestionIds.Contains(questionId))
            return value.GetString()!.Trim().Length >= 8;
        if (MultiQuestionIds.Contains(questionId))
            return value.GetArrayLength() > 0;
        if (SingleQuestionIds.Contains(questionId) || ScaleQuestionIds.Contains(questionId))
            return true;
        return questionId == "ranking" && value.EnumerateObject().Count() == RankingOptions.Length;
    }

    private static void AddChoice(
        string? option,
        string questionId,
        double weight,
        IDictionary<string, double> scores,
        IDictionary<string, double> observed)
    {
        if (option is null || !OptionSignals.TryGetValue(option, out var domains))
            return;
        foreach (var domain in domains)
        {
            scores[domain] += weight;
            if (BehaviorQuestionIds.Contains(questionId))
                observed[domain] += weight;
        }
    }

    private static void AddTextSignals(
        string questionId,
        string text,
        IDictionary<string, double> scores,
        IDictionary<string, double> observed,
        IDictionary<string, int> stated)
    {
        if (!TextQuestionIds.Contains(questionId) || string.IsNullOrWhiteSpace(text))
            return;

        var mentioned = Keywords
            .Where(pair => pair.Value.Any(keyword => ContainsWord(text, keyword)))
            .Select(pair => pair.Key)
            .ToArray();
        foreach (var domain in mentioned)
        {
            scores[domain] += 0.75;
            if (questionId is "saturday" or "curiosity" or "future-interest")
                stated[domain] += 1;
            if (questionId == "actual-time")
                observed[domain] += 0.75;
        }
    }

    private static bool ContainsWord(string text, string term)
    {
        var pattern = $@"(?<![\p{{L}}\p{{N}}]){Regex.Escape(term)}(?![\p{{L}}\p{{N}}])";
        return Regex.IsMatch(text, pattern, RegexOptions.IgnoreCase | RegexOptions.CultureInvariant);
    }
}

sealed record PathwayDefinition(string Title, string Focus, string Experiment);
sealed record ReflectionPathway(string Id, string Title, string SignalLevel, string Focus, string Experiment, double Score);
sealed record ReflectionContrast(string Observation, string Context);
sealed record ReflectionSummary(
    string Summary,
    string Caveat,
    ReflectionPathway[] Pathways,
    ReflectionContrast[] Contrasts,
    DateTimeOffset CreatedAt,
    ReflectionDimension[] Dimensions,
    CareerOption[] Careers,
    RoadmapPlan Roadmap,
    ResearchSource[] Sources,
    DateOnly CheckedOn);

sealed record ReflectionDimension(string Id, string Label, int Value);