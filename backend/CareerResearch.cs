using System.Text.RegularExpressions;

static class CareerResearch
{
    private static readonly CareerDefinition[] Careers =
    [
        new("computer-science", "Computer science", "analytical", "Foundations in computation, algorithms, software and systems; it can lead toward research, product or infrastructure work.", "Look at two computer science program outlines. Circle the topics you would like to try, not just the job titles.", ["bls-software", "wef-global"]),
        new("software-engineering", "Software engineering", "analytical", "Designing, building, testing and maintaining software with other people.", "Build a small tool that solves a real annoyance, then ask someone to try it and note what breaks.", ["bls-software"]),
        new("data-science", "Data science", "analytical", "Using statistics, computing and subject knowledge to find patterns in data and explain their limits.", "Choose a public dataset, graph one question and write down one conclusion the data cannot support.", ["bls-data"]),
        new("ai-machine-learning", "AI and machine learning", "analytical", "A specialization combining computing, mathematics and domain knowledge; job titles and entry routes vary widely.", "Try a beginner model or classification demo, then compare its errors and assumptions with a simple baseline.", ["bls-data", "wef-global"]),
        new("cybersecurity", "Cybersecurity", "analytical", "Protecting systems and information through risk analysis, secure design, monitoring and response.", "Use a legal beginner security lab or a school-approved capture-the-flag activity; never test on systems you do not own.", ["bls-security"]),
        new("computational-science", "Computational science", "analytical", "Combining programming and mathematics with fields such as climate, biology, physics or engineering.", "Model a small real-world system and compare your assumptions with published measurements.", ["bls-data", "bls-operations", "wef-global"]),
        new("quantitative-fields", "Quantitative fields and operations research", "analytical", "Applying mathematics, statistics and optimization to decisions in logistics, health, energy, finance or public services.", "Map a scheduling or resource problem and test how the result changes when one constraint changes.", ["bls-operations"]),
        new("computer-research", "Computing research", "analytical", "Exploring new computing methods; research roles often require advanced study, but school projects can help test the interest.", "Read an accessible research summary and recreate one small result with a teacher or mentor.", ["bls-software", "wef-global"]),
        new("product-design", "Product and digital design", "creative", "Shaping how a product looks, works and responds to the people using it.", "Redesign one confusing everyday task; show the prototype to two people and observe how they use it.", ["bls-software", "wef-global"]),
        new("visual-communication", "Visual communication and media", "creative", "Using image, sound, writing or interaction to make ideas engaging and understandable.", "Make two versions of a short explainer for different audiences and compare what each makes clear.", ["wef-global"]),
        new("architecture", "Architecture and the built environment", "creative", "Connecting design with structures, materials, sustainability, accessibility and local planning rules.", "Sketch a small shared space and annotate how light, access and materials affect different people.", ["wef-global"]),
        new("education", "Education and learning design", "communication", "Helping people learn through teaching, communication, curriculum or learning resources.", "Teach a five-minute concept, ask what remained confusing and revise your explanation.", ["wef-global"]),
        new("journalism", "Journalism and public communication", "communication", "Researching, checking and explaining information for an audience in text, audio or video.", "Create a short source-checked explainer and ask a reader what they understood and what they still question.", ["wef-global"]),
        new("technical-writing", "Technical writing and information design", "communication", "Making complex tools, processes or evidence easier for people to understand and use.", "Rewrite a confusing instruction sheet; test it with someone who has not seen the original.", ["bls-software"]),
        new("public-health", "Public health and community wellbeing", "care", "Using evidence, services and community partnerships to improve health beyond one-to-one care.", "Explore a supervised school or community health project and note the mix of people, evidence and logistics involved.", ["wef-global"]),
        new("health-sciences", "Health and life sciences", "care", "Studying living systems and applying that knowledge in laboratories, healthcare or research.", "Try a safe, teacher-approved biology investigation and document how you checked your observations.", ["wef-global"]),
        new("psychology", "Psychology and human development", "care", "Studying how people think, learn and develop; many professional roles require additional accredited study.", "Compare a popular claim about behavior with an introductory research summary and identify the evidence limits.", ["wef-global"]),
        new("environmental-science", "Environmental and earth science", "hands-on", "Investigating natural systems using field observations, measurement and analysis.", "Measure one local environmental pattern over a few weeks with permission and compare it to a public dataset.", ["wef-global"]),
        new("engineering", "Engineering and applied design", "hands-on", "Applying science and mathematics to design, build, test and improve systems or structures.", "Prototype a small device or structure, test it against one measurable requirement and iterate.", ["bls-software", "bls-operations"]),
        new("skilled-trades", "Skilled trades and technical work", "hands-on", "Practical careers in areas such as electrical, construction, manufacturing, maintenance and transport systems.", "Ask a trusted adult about a safe supervised workshop, technical club or trade taster in your area.", ["wef-global"]),
        new("agriculture-food", "Agriculture and food systems", "hands-on", "Working with plants, animals, soil, food production, technology and supply systems.", "Grow, prepare or track one food-system project and keep notes on the changing conditions.", ["wef-global"]),
        new("operations", "Operations and project coordination", "leadership", "Coordinating people, time and resources so a service or project can work reliably.", "Plan a small event with a budget and task list, then review where the plan needed to change.", ["bls-operations"]),
        new("entrepreneurship", "Entrepreneurship and social enterprise", "leadership", "Testing whether a product, service or community idea creates value for people and can be sustained.", "Interview three potential users about a problem before proposing a solution; do not spend money to prove an idea.", ["wef-global"]),
        new("policy", "Policy, civics and public service", "leadership", "Using research, consultation and implementation to improve public or community decisions.", "Compare two proposals on a local issue and trace what evidence each one uses.", ["wef-global"])
    ];

    private static readonly ResearchSource[] CoreSources =
    [
        new("bls-software", "U.S. Bureau of Labor Statistics · software developers", "U.S. Department of Labor; 2025 median wage and 2025–35 projection; page last modified August 27, 2026.", "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm", "U.S. data"),
        new("bls-data", "U.S. Bureau of Labor Statistics · data scientists", "U.S. Department of Labor; 2025 median wage and 2025–35 projection; page last modified August 27, 2026.", "https://www.bls.gov/ooh/math/data-scientists.htm", "U.S. data"),
        new("bls-security", "U.S. Bureau of Labor Statistics · information security analysts", "U.S. Department of Labor; 2025 median wage and 2025–35 projection; page last modified August 27, 2026.", "https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm", "U.S. data"),
        new("bls-operations", "U.S. Bureau of Labor Statistics · operations research analysts", "U.S. Department of Labor; 2025 median wage and 2025–35 projection; page last modified August 27, 2026.", "https://www.bls.gov/ooh/math/operations-research-analysts.htm", "U.S. data"),
        new("wef-global", "World Economic Forum · Future of Jobs Report 2025", "Global employer survey on job and skill trends, covering 2025–2030; published January 7, 2025.", "https://www.weforum.org/publications/the-future-of-jobs-report-2025/", "Global employer survey")
    ];

    public static CareerResearchResult Build(
        StudentProfile profile,
        IReadOnlyList<ReflectionPathway> pathways,
        IReadOnlyDictionary<string, double> scores)
    {
        var activeDomains = pathways.Select(path => path.Id).ToHashSet(StringComparer.Ordinal);
        var options = Careers
            .Where(career => activeDomains.Contains(career.Domain))
            .Select(career => new CareerOption(
                career.Id,
                career.Title,
                career.Overview,
                career.Experiment,
                CareersScore: scores[career.Domain],
                MarketContext(career.SourceIds),
                career.SourceIds))
            .OrderByDescending(career => career.CareersScore)
            .ThenBy(career => career.Title, StringComparer.Ordinal)
            .Take(9)
            .ToArray();

        var grade = ParseGrade(profile.Grade);
        var roadmap = BuildRoadmap(profile, pathways, options, grade);
        var relevantIds = options.SelectMany(option => option.SourceIds).ToHashSet(StringComparer.Ordinal);
        var sources = CoreSources.Where(source => relevantIds.Contains(source.Id)).ToList();
        sources.AddRange(GetCountrySources(profile.Country));

        return new CareerResearchResult(grade.Label, grade.Description, roadmap, options, sources.ToArray(), DateOnly.FromDateTime(DateTime.UtcNow));
    }

    private static RoadmapPlan BuildRoadmap(
        StudentProfile profile,
        IReadOnlyList<ReflectionPathway> pathways,
        IReadOnlyList<CareerOption> careers,
        GradeStage grade)
    {
        var lead = pathways.FirstOrDefault();
        var track = lead?.Title ?? "a broad set of interests";
        var options = string.Join(", ", pathways.Select(path => path.Title.ToLowerInvariant()));
        var careerTitles = careers.Take(3).Select(career => career.Title).ToArray();
        var preferredFields = string.Join(", ", careerTitles.Length > 0 ? careerTitles : ["related programs"]);
        var subjects = lead?.Id switch
        {
            "analytical" => "Mathematics at the strongest level that remains manageable, plus computing and a science or statistics subject where available.",
            "creative" => "Art or design, language and communication, plus mathematics or technology options that keep digital and built-environment routes open.",
            "communication" => "Language and writing, humanities or social science, plus a subject area you would like to explain to others.",
            "care" => "Biology or health-related subjects where available, plus social science, statistics or communication options.",
            "hands-on" => "Science, mathematics and practical technology or vocational subjects that fit local engineering, environment or technical programs.",
            "leadership" => "Mathematics, economics or business where available, plus communication, civics or a subject connected to the people you want to serve.",
            _ => "Keep a balanced mix of mathematics, language, sciences, humanities and practical subjects while you test interests."
        };

        var school = grade.Band switch
        {
            "early" => $"At {profile.Grade}, keep core subjects broad and build confidence in reading, mathematics and science. Sample {track.ToLowerInvariant()} through low-cost activities before narrowing a stream.",
            "middle" => $"At {profile.Grade}, compare school subject choices that keep {track.ToLowerInvariant()} options open. Check prerequisites for local programs before dropping a subject; requirements vary by institution.",
            "senior" => $"At {profile.Grade}, shortlist two or three relevant programs and verify required subjects, grades, exams and dates directly with the institutions in {profile.Country}.",
            "transition" => $"At {profile.Grade}, check current application dates, prerequisites, costs and alternative entry routes for programs in {profile.Country}. Ask admissions staff to confirm anything unclear.",
            _ => $"For {profile.Grade}, keep options open while checking how your local school system labels subject streams. Verify current prerequisites with each institution in {profile.Country}."
        };

        RoadmapStage[] stages =
        [
            new("School", school),
            new("Subjects or stream", subjects + " These are options to investigate, not requirements; confirm with local institutions."),
            new("Skills", $"Start with one skill from your answers that supports {options}. Add practice in explaining your process and checking evidence."),
            new("Projects", careers.FirstOrDefault()?.Experiment ?? "Choose one small project connected to a question you care about; document what you tried and changed."),
            new("Competitions and activities", "Look for a school club, science fair, coding/design challenge, debate, volunteering role or community project that is accessible to you. Participation is optional; a small independent project counts too."),
            new("University or training", $"Compare at least two local universities, colleges or accredited training routes related to {preferredFields}. Check entry prerequisites, accreditation, total cost, support and application dates on official institution pages."),
            new("Degree or qualification", "Compare course modules, practical work, internships, recognition and transfer routes. Choose a program for its fit and verified requirements, not its label alone."),
            new("Career exploration", $"Use the role cards below as starting points: {preferredFields}. Talk with a teacher, counselor or professional and compare actual day-to-day work.")
        ];

        var firstAction = grade.Band switch
        {
            "early" => $"Try one free activity related to {track.ToLowerInvariant()} and write down what held your attention.",
            "middle" => $"Compare next-year subject choices with prerequisites for two local courses linked to {track.ToLowerInvariant()}.",
            "senior" => "Build a shortlist of three programs and record each one's verified subject, grade, exam and application requirements.",
            "transition" => "Check each shortlisted program's application calendar, entry route, total cost and who can answer admissions questions.",
            _ => $"Choose one small, low-cost experiment related to {track.ToLowerInvariant()} and compare two local course prerequisites."
        };
        var sixMonthAction = grade.Band switch
        {
            "early" => "Complete a small project and share it with a teacher, club or trusted adult; ask what you could try next.",
            "middle" => "Finish one portfolio-sized project, try a club or community activity and review your subject choices with a school counselor.",
            "senior" => "Finish one relevant project or activity, request feedback and track verified application, test and financial-aid deadlines.",
            "transition" => "Prepare required materials, request references early and compare scholarships, bridge programs or lower-cost alternatives.",
            _ => "Build one project or activity into a small portfolio and ask for feedback from someone familiar with the field."
        };
        var twoYearAction = grade.Band switch
        {
            "early" => "Keep sampling different activities and revisit your subject interests each term; there is no need to commit to a career now.",
            "middle" => "Deepen one or two skills, build a stronger project and revisit course prerequisites as your interests change.",
            "senior" => "Strengthen grades and projects in relevant subjects, make a balanced program shortlist and prepare applications with trusted guidance.",
            "transition" => "Develop deeper skills in the selected route, complete stronger work samples and review progress with a mentor at least once each term.",
            _ => "Develop deeper skills through coursework or supervised practice, build stronger projects and revisit the route after real experience."
        };
        var horizons = new[]
        {
            new ActionHorizon("Next 30 days", new[] { firstAction, careers.FirstOrDefault()?.Experiment ?? "Speak with one person who studies or works in a related area.", "Write a short note on what you enjoyed, what drained you and what you want to test next." }),
            new ActionHorizon("Next 6 months", new[] { sixMonthAction, "Practice one relevant skill in a steady, manageable weekly routine.", "Explore a relevant competition, research activity or community project if one is accessible and enjoyable." }),
            new ActionHorizon("Next 1–2 years", new[] { twoYearAction, "Compare real course modules, entry rules, costs and support at more than one institution.", "Keep at least one adjacent pathway open until you have tried more of the day-to-day work." })
        };

        return new RoadmapPlan(
            grade.Label,
            grade.Description,
            profile.Country,
            track,
            stages,
            horizons,
            "Grade labels differ across school systems. Treat this as a checklist of questions, not admissions advice; confirm every prerequisite with the relevant school or institution.");
    }

    private static ResearchSource[] GetCountrySources(string country)
    {
        var normalized = country.Trim().ToLowerInvariant();
        if (normalized is "united states" or "united states of america" or "usa" or "u.s.")
            return [new("country-careers", "U.S. Bureau of Labor Statistics · Occupational Outlook Handbook", "Official U.S. descriptions, preparation, wage and employment-projection information by occupation.", "https://www.bls.gov/ooh/", "United States")];
        if (normalized is "canada")
            return [new("country-careers", "Government of Canada · Job Bank", "Official Canadian job profiles and regional labour-market information.", "https://www.jobbank.gc.ca/trend-analysis/search-occupations", "Canada")];
        if (normalized is "united kingdom" or "uk" or "great britain")
            return [new("country-careers", "UK National Careers Service", "Official job profiles, qualifications, progression information and course search.", "https://nationalcareers.service.gov.uk/explore-careers", "United Kingdom")];
        if (normalized is "australia")
            return [new("country-careers", "Jobs and Skills Australia · OSCA occupation profiles", "Australian Government occupation information. OSCA is in its initial release; coverage and content are expanding.", "https://www.jobsandskills.gov.au/data/occupation-and-industry-profiles/occupations-osca", "Australia")];
        if (normalized is "india")
            return [new("country-careers", "Government of India · National Career Service", "Official career, skill-course and career-center resources.", "https://www.ncs.gov.in/", "India")];
        return [new("country-careers", "World Economic Forum · Future of Jobs Report 2025", "Global employer trends only; this is not a substitute for local wage, admissions or labour-market data.", "https://www.weforum.org/publications/the-future-of-jobs-report-2025/", "Global context")];
    }

    private static string MarketContext(string[] sourceIds) => string.Join(" ", sourceIds.Select(id => id switch
    {
        "bls-software" => "BLS U.S. software developers: 2025 median wage $135,980; projected 10% growth for 2025–35.",
        "bls-data" => "BLS U.S. data scientists: 2025 median wage $120,230; projected 35% growth for 2025–35.",
        "bls-security" => "BLS U.S. information security analysts: 2025 median wage $129,180; projected 21% growth for 2025–35.",
        "bls-operations" => "BLS U.S. operations research analysts: 2025 median wage $88,940; projected 12% growth for 2025–35.",
        _ => "The cited global report covers employer-reported job and skill trends, not a guaranteed forecast for this role."
    }).Distinct(StringComparer.Ordinal));

    private static GradeStage ParseGrade(string grade)
    {
        var match = Regex.Match(grade, @"\b(?:grade|class|year|yr\.?|standard|std\.?)\s*(\d{1,2})(?:st|nd|rd|th)?\b|\b(\d{1,2})(?:st|nd|rd|th)\s*(?:grade|class|year)\b", RegexOptions.IgnoreCase | RegexOptions.CultureInvariant);
        var numberText = match.Success ? (match.Groups[1].Success ? match.Groups[1].Value : match.Groups[2].Value) : "";
        if (!int.TryParse(numberText, out var number))
            return new(grade, "Your school-system label", "unknown");
        if (number <= 8)
            return new(grade, "Exploration and broad foundations", "early");
        if (number <= 10)
            return new(grade, "Subject choices and early experiments", "middle");
        if (number == 11)
            return new(grade, "Program prerequisites and preparation", "senior");
        return new(grade, "Applications, transition and verified entry routes", "transition");
    }

    private sealed record CareerDefinition(string Id, string Title, string Domain, string Overview, string Experiment, string[] SourceIds);
    private sealed record GradeStage(string Label, string Description, string Band);
}

sealed record CareerResearchResult(
    string GradeLabel,
    string GradeContext,
    RoadmapPlan Roadmap,
    CareerOption[] Careers,
    ResearchSource[] Sources,
    DateOnly CheckedOn);

sealed record CareerOption(
    string Id,
    string Title,
    string Overview,
    string Experiment,
    double CareersScore,
    string MarketContext,
    string[] SourceIds);

sealed record ResearchSource(string Id, string Title, string Note, string Url, string Scope);
sealed record RoadmapPlan(
    string Grade,
    string GradeContext,
    string Country,
    string InterestTrack,
    RoadmapStage[] Stages,
    ActionHorizon[] Horizons,
    string Caveat);
sealed record RoadmapStage(string Title, string Detail);
sealed record ActionHorizon(string Title, string[] Actions);