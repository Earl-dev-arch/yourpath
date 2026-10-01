const sectionData = [
    {
        title: "What draws you in",
        subtitle: "Start with what catches your attention when nobody is grading you.",
        questions: [
            { id: "saturday", kind: "text", title: "You have an entire Saturday free and nobody tells you what to do. What would you naturally spend several hours doing?", hint: "A real answer can be ordinary. Include what you would choose first, not what sounds impressive.", placeholder: "I would probably…", label: "Your Saturday" },
            { id: "subjects", kind: "multi", title: "Which subjects have held your attention, even on a day when the assignment was over?", hint: "Choose up to four that you genuinely return to.", options: [["sub-math", "Math & patterns"], ["sub-science", "Science & experiments"], ["sub-tech", "Computing & technology"], ["sub-writing", "Reading, writing & languages"], ["sub-arts", "Art, music & making"], ["sub-history", "History & society"], ["sub-business", "Business & economics"], ["sub-nature", "Nature & living things"]], max: 4 },
            { id: "activities", kind: "multi", title: "When free time appears, what do you actually choose to do?", hint: "Pick up to four. It is fine if the answer is a mix of online and offline things.", options: [["act-code", "Solve puzzles, code or take things apart"], ["act-design", "Draw, design, make music or edit video"], ["act-help", "Help someone learn or work through a problem"], ["act-organize", "Plan a group activity or bring people together"], ["act-outdoors", "Be outside, explore or care for plants and animals"], ["act-perform", "Write, perform, tell stories or share ideas"], ["act-repair", "Build, fix, cook or make something useful"], ["act-read", "Read, research or follow a question online"]], max: 4 },
            { id: "project", kind: "single", title: "A community center offers you one small project to try. Which one would you pick first?", hint: "Choose the work you would be curious to start, not the one that sounds most prestigious.", options: [["proj-research", "Find out why a local stream has changed and share what the evidence shows"], ["proj-guide", "Design a visual guide that makes a confusing service easier to use"], ["proj-event", "Organize a weekend event with a tiny budget and a few volunteers"], ["proj-tutor", "Help a younger student find a way into a subject they find difficult"], ["proj-prototype", "Build and test a simple object that solves an everyday annoyance"]] },
            { id: "ranking", kind: "ranking", title: "Rank the kinds of activity you would most want to do again.", hint: "Give each one a different rank. First means ‘most likely to choose again,’ not ‘best at.’", options: [["rank-investigate", "Investigate a question and work out what the evidence means"], ["rank-design", "Make or improve something people can see, hear or use"], ["rank-explain", "Help someone understand an idea or feel included"], ["rank-organize", "Coordinate people and make a shared plan happen"]] }
        ]
    },
    {
        title: "How you like to work",
        subtitle: "There is no preferred personality here. Think about the process, not the label.",
        questions: [
            { id: "creative-energy", kind: "scale", title: "How much do you enjoy making a new version when the first idea does not work?", low: "I would rather follow a clear example", high: "I like inventing another approach" },
            { id: "problem-solving", kind: "single", title: "Your group’s project is stuck and the deadline is close. What would you most naturally do first?", hint: "All four are useful moves. Pick the one you tend to reach for.", options: [["solve-map", "Break the problem into parts and check what you know"], ["solve-try", "Make a quick rough version and learn by testing it"], ["solve-ask", "Ask the people involved what is getting in their way"], ["solve-research", "Look for examples or information that could change the plan"]] },
            { id: "logic-energy", kind: "scale", title: "How satisfying is it to spot a pattern, compare evidence or work through a tricky puzzle?", low: "Not usually what I choose", high: "I can lose track of time doing that" },
            { id: "team-style", kind: "scale", title: "For a task you care about, where do you usually do your best thinking?", low: "Mostly on my own", high: "Mostly with other people" },
            { id: "team-role", kind: "single", title: "In a group with no assigned roles, which part do you find yourself taking on?", options: [["role-explain", "Make sure people understand the idea"], ["role-coordinate", "Keep track of the plan and next steps"], ["role-research", "Find facts, examples or a way to check the idea"], ["role-make", "Build, sketch or try the thing out"], ["role-support", "Notice who needs help and make room for them"]] }
        ]
    },
    {
        title: "What keeps you going",
        subtitle: "Notice what gives you energy, and what quietly drains it.",
        questions: [
            { id: "team-conflict", kind: "single", title: "Two people on your team disagree about what to do next. Which response feels most like you?", options: [["conflict-clarify", "Ask each person what outcome they are hoping for"], ["conflict-evidence", "Suggest a quick way to compare the two ideas"], ["conflict-prototype", "Try a small version of one idea so the group has something concrete"], ["conflict-mediate", "Help the group find a plan everyone can contribute to"]] },
            { id: "curiosity", kind: "text", title: "What is something you have looked up, watched or asked about just because you wanted to know?", hint: "It can be from yesterday or years ago. What part made you keep going?", placeholder: "I started wondering about…", label: "A question you followed" },
            { id: "motivation", kind: "single", title: "Which feeling makes a project most worth your time?", options: [["mot-master", "Getting better at something that was hard"], ["mot-impact", "Seeing that it helped a real person or community"], ["mot-craft", "Making something thoughtful and well-finished"], ["mot-freedom", "Having room to choose how to approach it"], ["mot-recognition", "Having the work noticed or recognized"]] },
            { id: "dislikes", kind: "multi", title: "Which parts of school or projects tend to drain you?", hint: "Choose up to three. A dislike is useful information, not a flaw.", options: [["dislike-routine", "Repeating the same step for a long time"], ["dislike-public", "Speaking in front of a large group"], ["dislike-abstract", "Working with ideas that never connect to an example"], ["dislike-screen", "Spending most of the day at a screen"], ["dislike-conflict", "Negotiating tension between people"], ["dislike-uncertain", "Starting when the instructions are very open-ended"]], max: 3 },
            { id: "future-interest", kind: "text", title: "What is an interest you could imagine still exploring two years from now? What makes it stick?", hint: "You do not need to turn it into a job title.", placeholder: "I could see myself still exploring…", label: "An interest with staying power" }
        ]
    },
    {
        title: "What feels like yours",
        subtitle: "Imagine the pressure dial turned down. What would you test in real life?",
        questions: [
            { id: "pressure-free", kind: "single", title: "If money, status and other people’s expectations were not part of the decision, what would you want to explore for a month?", hint: "Pick a starting point, not a permanent choice.", options: [["free-investigate", "Investigate a question about how something works"], ["free-create", "Make a creative project and share it with someone"], ["free-community", "Contribute to a cause or help a person directly"], ["free-build", "Build, repair, grow or test something physical"], ["free-organize", "Start a small project and bring a few people together"], ["free-explain", "Learn a subject deeply and make it clearer for others"]] },
            { id: "learning", kind: "single", title: "Which learning setup helps you stay curious when a subject gets challenging?", options: [["learn-project", "A hands-on project with room to try and revise"], ["learn-people", "Discussion where different people explain their thinking"], ["learn-independent", "Quiet time, clear resources and space to work it through"], ["learn-mentor", "A patient mentor who can answer questions as they come up"]] },
            { id: "skills", kind: "multi", title: "Which skills would you be glad to practice, even if you are not confident in them yet?", hint: "Choose up to four. These are growth interests, not claims about what you can already do.", options: [["skill-data", "Working with data, logic or technical tools"], ["skill-design", "Designing, writing or making creative work"], ["skill-speaking", "Explaining ideas, listening or speaking up"], ["skill-leading", "Planning, coordinating or starting a project"], ["skill-caring", "Supporting people and understanding what they need"], ["skill-making", "Building, repairing or learning practical tools"]], max: 4 },
            { id: "repeat-choice", kind: "single", title: "Next week, which one-hour activity would you be most likely to choose again?", hint: "This checks whether an idea also sounds appealing as an actual activity.", options: [["again-solve", "Work through a puzzle, dataset or question"], ["again-create", "Make a sketch, story, design, song or prototype"], ["again-help", "Help someone practice or talk through a challenge"], ["again-make", "Fix, grow or build something with your hands"], ["again-organize", "Plan a small event or coordinate a shared task"]] },
            { id: "actual-time", kind: "text", title: "Looking at the last month, what did you choose to spend time on when no one was checking?", hint: "Concrete details help separate a current habit from an interest you are still curious about.", placeholder: "In the last month I kept choosing…", label: "What you actually made time for" }
        ]
    }
];

const state = { connected: false, profile: null, answers: {}, currentSection: 0, analysis: null, feedback: null, savedPathways: [], compareIds: [], selectedCareerId: null, careerSearch: "", view: "dashboard", privacyAcknowledged: false, previousFocus: null };
const screen = document.querySelector("#screen");
const guidePanel = document.querySelector("#guide-panel");
const journeyNav = document.querySelector("#journey-nav");
const guideNote = document.querySelector("#guide-note");
const sessionCaption = document.querySelector("#session-caption");
const accountMark = document.querySelector("#account-mark");
const authTrigger = document.querySelector("#auth-trigger");
const authSignup = document.querySelector("#auth-signup");
const logoutButton = document.querySelector("#logout-button");
const publicNav = document.querySelector("#public-nav");
const mobileNav = document.querySelector("#mobile-nav");
const privacyDialog = document.querySelector("#privacy-dialog");
const privacyCheckbox = document.querySelector("#privacy-acknowledged");
const authChoices = document.querySelector("#auth-choices");
const loginPanel = document.querySelector("#login-panel");
const toast = document.querySelector("#toast");
let toastTimer;

async function request(path, options = {}) {
    const response = await fetch(path, {
        credentials: "same-origin",
        ...options,
        headers: { ...(options.body ? { "Content-Type": "application/json" } : {}), ...options.headers }
    });
    if (response.status === 204) return null;
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(payload.error || "That did not work. Please try again.");
    return payload;
}

function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

function showToast(message) {
    toast.textContent = message;
    toast.dataset.visible = "true";
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => delete toast.dataset.visible, 3000);
}

function renderNavigation() {
    guidePanel.classList.toggle("hidden", !state.profile);
    publicNav.classList.toggle("hidden", window.innerWidth < 1024);
    mobileNav.classList.toggle("hidden", !state.profile);
    if (!state.profile) {
        accountMark.classList.add("hidden");
        authTrigger.classList.remove("hidden");
        authSignup.classList.remove("hidden");
        logoutButton.classList.add("hidden");
        sessionCaption.textContent = "A private space to think out loud";
        return;
    }

    accountMark.classList.remove("hidden");
    authTrigger.classList.add("hidden");
    authSignup.classList.add("hidden");
    logoutButton.classList.remove("hidden");
    accountMark.textContent = state.profile.fullName.split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
    sessionCaption.textContent = `A session for ${state.profile.fullName}`;
    const items = [
        ["dashboard", "Dashboard", "▦"], ["questionnaire", "Questionnaire", "☷"],
        ["analysis", "Analysis", "✳"], ["pathways", "Pathways", "◇"], ["roadmap", "Roadmaps", "⌁"],
        ["saved", "Saved", "♡"], ["compare", "Compare", "⇄"], ["universities", "Universities", "⌂"],
        ["resources", "Resources", "▤"], ["feedback", "Feedback", "✉"], ["profile", "Profile", "○"]
    ];
    journeyNav.innerHTML = items.map(([view, label, icon]) => {
        const active = state.view === view || (view === "pathways" && state.view === "pathway-detail");
        const disabled = ["analysis", "pathways", "roadmap", "compare"].includes(view) && !state.analysis;
        return `<button class="group flex min-h-10 w-full items-center gap-3 rounded-lg px-3 text-left text-xs font-medium transition ${active ? "bg-[#6d58ed] text-white shadow-sm" : "text-white/70 hover:bg-white/10 hover:text-white"} disabled:cursor-not-allowed disabled:opacity-35" type="button" data-view="${view}" ${disabled ? "disabled" : ""}><span class="grid h-5 w-5 place-items-center text-sm ${active ? "text-white" : "text-white/65"}" aria-hidden="true">${icon}</span><span>${label}</span>${view === "saved" && state.savedPathways.length ? `<span class="ml-auto text-[10px] text-white/60">${state.savedPathways.length}</span>` : ""}</button>`;
    }).join("");
    mobileNav.querySelectorAll("[data-view]").forEach(button => {
        const active = state.view === button.dataset.view || (button.dataset.view === "pathways" && state.view === "pathway-detail");
        button.className = `mobile-nav-link flex min-w-0 cursor-pointer flex-col items-center gap-1 border-0 bg-transparent py-1 text-[9px] font-medium ${active ? "text-forest" : "text-[#858899]"}`;
        button.setAttribute("aria-current", active ? "page" : "false");
    });

    guideNote.innerHTML = `<div class="rounded-xl border border-white/10 bg-white/[.06] px-3 py-3"><p class="text-[9px] font-bold tracking-[1.2px] text-white/45">FIELDNOTE</p><p class="mt-2 text-[11px] leading-5 text-white/75">${state.analysis ? "Your interests can change as you get more chances to try things." : "There are no impressive answers. There are only useful clues."}</p></div>`;
}

function render() {
    renderNavigation();
    if (!state.profile) renderHome();
    else if (!state.connected) renderConnectionProblem();
    else if (state.view === "dashboard") renderDashboard();
    else if (state.view === "questionnaire") renderAssessment();
    else if (state.view === "analysis" && state.analysis) renderAnalysis();
    else if (state.view === "pathways" || state.view === "pathway-detail") renderPathways();
    else if (state.view === "compare") renderCompare();
    else if (state.view === "universities") renderUniversities();
    else if (state.view === "roadmap") renderRoadmapView();
    else if (state.view === "saved") renderSavedPathways();
    else if (state.view === "resources") renderResources();
    else if (state.view === "feedback") renderFeedbackView();
    else if (state.view === "about") renderAbout();
    else renderProfile();
}

function renderConnectionProblem() {
    screen.innerHTML = `<section class="mx-auto max-w-2xl border-l-4 border-coral bg-white px-6 py-8 sm:px-10"><p class="text-[10px] font-bold tracking-[1.5px] text-coral">YOURPATH IS NOT CONNECTED</p><h1 class="mt-3 font-display text-3xl font-semibold">Open the YourPath app server.</h1><p class="mt-4 max-w-xl leading-6 text-[#68776f]">This page is running through a static file server, so its API is unavailable. Start the app server, then use its address in your browser:</p><code class="mt-5 block overflow-x-auto rounded bg-[#20372e] px-4 py-3 text-xs text-white">dotnet run --project backend</code><a class="mt-3 inline-flex text-xs font-bold text-forest underline underline-offset-2" href="http://localhost:5080/">Open YourPath at http://localhost:5080 ↗</a><button class="mt-6 inline-flex cursor-pointer items-center gap-2 rounded bg-forest px-5 py-3 text-xs font-bold text-white hover:bg-[#234637]" type="button" id="retry-connection">Retry connection <span aria-hidden="true">↗</span></button><p class="mt-6 text-[11px] leading-5 text-[#8a968e]">This prototype keeps student records in server memory only. Do not use it for real student records or sensitive personal information.</p></section>`;
    document.querySelector("#retry-connection").addEventListener("click", initialize);
}

function renderHome() {
    screen.innerHTML = `<div class="mx-auto max-w-6xl">
        <section class="grid overflow-hidden border border-line bg-white md:grid-cols-[.9fr_1.1fr]">
            <div class="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-12 lg:px-14">
                <p class="text-[10px] font-bold tracking-[1.6px] text-coral">YOUR INTERESTS. YOUR EVIDENCE.</p>
                <h1 class="mt-4 max-w-xl font-display text-[38px] font-semibold leading-[1.08] sm:text-[48px]">Your Path starts with what feels like you.</h1>
                <p class="mt-5 max-w-lg text-sm leading-6 text-[#68776f]">A private reflection for students who want to understand what holds their attention, compare real study routes, and try a next step before choosing a future.</p>
                <div class="mt-7 flex flex-wrap items-center gap-4"><button class="cursor-pointer bg-forest px-5 py-3.5 text-xs font-bold text-white transition hover:bg-[#234637] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest" id="home-start" type="button">Log in / Sign up <span class="ml-2" aria-hidden="true">→</span></button><span class="text-[10px] text-[#849087]">20 prompts · no career verdicts</span></div>
            </div>
            <div class="relative min-h-[290px] overflow-hidden bg-[#314b3d] sm:min-h-[360px]"><img class="absolute inset-0 h-full w-full object-cover object-center" src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=85" alt="Students sharing ideas around a table"><div class="absolute inset-0 bg-gradient-to-r from-[#1d392c]/35 via-transparent to-[#1d392c]/5"></div><div class="absolute bottom-5 left-5 border-l-2 border-[#e1b264] bg-[#193328]/75 px-4 py-3 text-white backdrop-blur-sm"><p class="text-[9px] font-bold tracking-[1.2px] text-[#e3e8de]">NOTICE · EXPLORE · TRY</p><p class="mt-1 font-display text-sm font-semibold">Curiosity is a place to begin.</p></div></div>
        </section>
        <section class="mt-7 grid divide-y divide-line border-y border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <article class="py-5 sm:px-5"><span class="text-[10px] font-bold tracking-[1.3px] text-coral">01 / NOTICE</span><h2 class="mt-2 font-display text-base font-semibold">Look for what repeats</h2><p class="mt-1 text-xs leading-5 text-[#728078]">Explore interests, choices, working style and the things you would try without outside pressure.</p></article>
            <article class="py-5 sm:px-5"><span class="text-[10px] font-bold tracking-[1.3px] text-coral">02 / EXPLORE</span><h2 class="mt-2 font-display text-base font-semibold">Compare real routes</h2><p class="mt-1 text-xs leading-5 text-[#728078]">See several related careers, official research sources and local study questions, not one imposed answer.</p></article>
            <article class="py-5 sm:px-5"><span class="text-[10px] font-bold tracking-[1.3px] text-coral">03 / TRY</span><h2 class="mt-2 font-display text-base font-semibold">Choose a small next step</h2><p class="mt-1 text-xs leading-5 text-[#728078]">Build a grade-aware roadmap with actions for the next month, six months and one to two years.</p></article>
        </section>
        <p class="mt-5 max-w-3xl text-[10px] leading-5 text-[#87938b]">YourPath is a prototype, not an assessment of ability. Profiles and answers are held in local server memory; do not enter real student details.</p>
    </div>`;
    document.querySelector("#home-start").addEventListener("click", () => openPrivacyDialog());
}

function openPrivacyDialog() {
    state.previousFocus = document.activeElement;
    privacyCheckbox.checked = false;
    privacyDialog.classList.remove("hidden");
    privacyDialog.classList.add("flex");
    privacyDialog.setAttribute("aria-hidden", "false");
    authChoices.classList.remove("hidden");
    loginPanel.classList.add("hidden");
    document.querySelector("#privacy-error").classList.add("hidden");
    document.querySelector("#login-error").classList.add("hidden");
    document.querySelector("#choose-signup").disabled = true;
    document.querySelector("#choose-login").disabled = true;
    document.querySelector("#auth-unavailable").classList.toggle("hidden", state.connected);
    privacyCheckbox.focus();
}

function closePrivacyDialog() {
    privacyDialog.classList.add("hidden");
    privacyDialog.classList.remove("flex");
    privacyDialog.setAttribute("aria-hidden", "true");
    state.previousFocus?.focus?.();
}

function setView(view) {
    state.view = view;
    render();
    screen.focus();
}

function renderDashboard() {
    const careers = state.analysis?.careers || [];
    const progress = Math.round(Object.keys(state.answers).length / 20 * 100);
    const nextView = state.analysis ? "pathways" : "questionnaire";
    const greeting = state.profile.fullName.split(/\s+/)[0];
    const topCareers = careers.slice(0, 4);
    const stats = [
        ["Questionnaire", state.analysis ? "Complete" : `${progress}%`, state.analysis ? "Your reflection is ready" : "Keep exploring your answers", "▣", "text-[#6c55e9]", state.analysis ? "analysis" : "questionnaire"],
        ["Pathways found", state.analysis ? String(careers.length) : "—", state.analysis ? "Explore your options" : "Complete your questionnaire", "▧", "text-[#3284d8]", "pathways"],
        ["Saved pathways", String(state.savedPathways.length), state.savedPathways.length ? "View your saved list" : "Save options to revisit", "▣", "text-[#e89135]", "saved"],
        ["Action items", state.analysis ? String(state.analysis.roadmap.horizons.reduce((total, horizon) => total + horizon.actions.length, 0)) : "—", state.analysis ? "From your personal roadmap" : "Build a plan after analysis", "▣", "text-[#d653a0]", "roadmap"]
    ];
    screen.innerHTML = `<div class="mx-auto max-w-[1400px] px-4 py-6 sm:px-6 lg:px-8">
        <div class="flex flex-wrap items-end justify-between gap-4"><div><p class="text-[10px] font-bold tracking-[1.3px] text-forest">STUDENT DASHBOARD</p><h1 class="mt-1 font-display text-[28px] font-semibold sm:text-[32px]">Welcome back, ${escapeHtml(greeting)} <span aria-hidden="true">👋</span></h1><p class="mt-1 text-xs text-[#73778b]">You don't have to fit in. You have time to figure out your path.</p></div><button class="cursor-pointer border border-[#e7e2fb] bg-white px-3 py-2 text-[10px] font-semibold text-forest hover:bg-mint" data-view="profile" type="button">Profile settings →</button></div>
        <section class="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4" aria-label="Progress overview">${stats.map(([label, value, detail, icon, color, view]) => `<button class="group flex min-h-[90px] cursor-pointer items-start gap-3 border border-line bg-white px-4 py-4 text-left shadow-[0_3px_14px_rgba(37,39,71,.04)] transition hover:border-[#cfc8fa] hover:shadow-[0_6px_20px_rgba(37,39,71,.08)]" type="button" data-view="${view}"><span class="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#f3f1ff] text-base ${color}">${icon}</span><span class="min-w-0"><span class="block text-[10px] font-semibold text-[#7e8192]">${label}</span><strong class="mt-1 block font-display text-xl font-semibold leading-none">${value}</strong><small class="mt-1.5 block text-[9px] text-[#9092a0]">${detail}</small></span><span class="ml-auto text-xs text-forest opacity-0 transition group-hover:opacity-100" aria-hidden="true">↗</span></button>`).join("")}</section>
        <section class="mt-4 grid gap-4 xl:grid-cols-[1.05fr_1fr_.8fr]">
            <article class="border border-line bg-white p-4 sm:p-5"><div class="flex items-start justify-between gap-3"><div><p class="text-[9px] font-bold tracking-[1.2px] text-[#7f8191]">YOUR TOP PATHWAYS</p><h2 class="mt-1 font-display text-lg font-semibold">Where your answers point</h2></div><button class="cursor-pointer text-[10px] font-bold text-forest hover:underline" type="button" data-view="pathways">View all →</button></div>
                ${topCareers.length ? `<div class="mt-3 divide-y divide-line">${topCareers.map((career, index) => `<button class="flex w-full cursor-pointer items-center gap-3 py-3 text-left hover:bg-[#faf9ff]" type="button" data-career="${escapeHtml(career.id)}"><span class="grid h-8 w-8 place-items-center rounded-lg bg-[#f0edff] text-[10px] font-bold text-forest">${String(index + 1).padStart(2, "0")}</span><span class="min-w-0 flex-1"><strong class="block truncate text-xs font-semibold">${escapeHtml(career.title)}</strong><small class="mt-1 block truncate text-[9px] text-[#858799]">${escapeHtml(career.overview)}</small></span><span class="rounded-full bg-[#edf8f2] px-2 py-1 text-[8px] font-bold text-[#3b9a70]">${escapeHtml(career.signalLevel || "Explore")}</span></button>`).join("")}</div>` : `<div class="mt-4 border-t border-line py-5"><p class="text-xs font-medium">Start with the questionnaire to find pathways shaped by your answers.</p><button class="mt-3 cursor-pointer rounded-lg bg-forest px-3 py-2.5 text-[10px] font-bold text-white hover:bg-forest-dark" data-view="questionnaire" type="button">Continue questionnaire →</button></div>`}
            </article>
            <article class="border border-line bg-white p-4 sm:p-5"><div class="flex items-start justify-between"><div><p class="text-[9px] font-bold tracking-[1.2px] text-[#7f8191]">YOUR INTEREST MAP</p><h2 class="mt-1 font-display text-lg font-semibold">A snapshot, not a score</h2></div><span class="rounded-full bg-[#f3f1ff] px-2 py-1 text-[8px] font-bold text-forest">${state.analysis ? "From your answers" : "Not started"}</span></div>${renderInterestRadar()}</article>
            <article class="border border-line bg-white p-4 sm:p-5"><p class="text-[9px] font-bold tracking-[1.2px] text-[#7f8191]">OUTSIDE PRESSURE CHECK</p><h2 class="mt-1 font-display text-lg font-semibold">Make room for your own signal</h2><p class="mt-2 text-[10px] leading-5 text-[#7c8090]">Your answers can disagree. That's a prompt to explore, not a problem to fix.</p>${state.analysis?.contrasts.length ? `<div class="mt-3 border-l-2 border-[#f1a1bb] bg-[#fff6fa] px-3 py-3"><p class="text-[9px] font-bold text-[#c54c86]">A DIFFERENCE TO EXPLORE</p><p class="mt-1 text-[10px] leading-4 text-[#65697a]">${escapeHtml(state.analysis.contrasts[0].observation)}</p><button class="mt-2 cursor-pointer text-[9px] font-bold text-forest underline" data-view="analysis" type="button">Read reflection →</button></div>` : `<div class="mt-4 border-t border-line pt-3"><div class="flex justify-between text-[9px]"><span class="text-[#6f7384]">Pressure is not scored</span><span class="font-semibold text-[#9b9dad]">Reflect privately</span></div><p class="mt-2 text-[9px] leading-4 text-[#8a8d9b]">YourPath won't infer family or social pressure from a single answer.</p></div>`}</article>
        </section>
        <section class="mt-4 border border-line bg-white p-4 sm:p-5"><div class="flex flex-wrap items-end justify-between gap-3"><div><p class="text-[9px] font-bold tracking-[1.2px] text-[#7f8191]">CONTINUE YOUR JOURNEY</p><h2 class="mt-1 font-display text-lg font-semibold">Pick up where curiosity leads</h2></div><span class="text-[9px] text-[#898c9a]">No deadline to choose a direction</span></div><div class="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">${[["questionnaire", "Retake questionnaire", "Update your answers anytime.", "▣", "#785ced"], ["compare", "Compare pathways", "See how different routes fit.", "▤", "#df579b"], ["pathways", "Explore careers", "Discover more options.", "◇", "#438ad7"], ["roadmap", "Build roadmap", "Take the next step by step.", "⌁", "#e99236"]].map(([view, title, detail, icon, color]) => `<button class="flex min-h-[84px] cursor-pointer items-start gap-3 border border-[#eeedf4] bg-[#fcfbff] px-3 py-3 text-left transition hover:border-[#cfc8fa] hover:bg-[#f8f6ff]" data-view="${view}" type="button"><span class="grid h-9 w-9 place-items-center rounded-lg bg-white text-base shadow-sm" style="color:${color}">${icon}</span><span><strong class="block text-[11px] font-semibold">${title}</strong><small class="mt-1 block text-[9px] leading-4 text-[#858799]">${detail}</small></span></button>`).join("")}</div></section>
    </div>`;
}

function renderInterestRadar() {
    const dimensions = state.analysis?.dimensions || [];
    const values = dimensions.length ? dimensions : ["Analytical thinking", "Creativity", "Problem solving", "Leadership", "Communication", "Curiosity"].map((label) => ({ label, value: 0 }));
    const center = 130;
    const radius = 76;
    const point = (index, scale) => {
        const angle = (Math.PI * 2 * index / values.length) - Math.PI / 2;
        return [center + Math.cos(angle) * radius * scale, center + Math.sin(angle) * radius * scale];
    };
    const grid = [0.25, 0.5, 0.75, 1].map(scale => `<polygon points="${values.map((_, index) => point(index, scale).join(",")).join(" ")}" fill="none" stroke="#eceaf4" stroke-width="1"/>`).join("");
    const axes = values.map((_, index) => `<line x1="${center}" y1="${center}" x2="${point(index, 1)[0]}" y2="${point(index, 1)[1]}" stroke="#eceaf4" stroke-width="1"/>`).join("");
    const polygon = `<polygon points="${values.map((dimension, index) => point(index, Math.max(.04, dimension.value / 100)).join(",")).join(" ")}" fill="#8773f2" fill-opacity=".22" stroke="#7058e9" stroke-width="2"/>`;
    const labels = values.map((dimension, index) => {
        const [x, y] = point(index, 1.22);
        return `<text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="middle" fill="#77798b" font-size="8">${escapeHtml(dimension.label)}</text>`;
    }).join("");
    return `<svg class="mt-2 mx-auto block h-[238px] w-full max-w-[290px]" viewBox="0 0 260 260" role="img" aria-label="Interest map across six areas">${grid}${axes}${polygon}${labels}</svg><div class="flex justify-between border-t border-line pt-2 text-[9px] text-[#858799]"><span>Derived from patterns in your answers</span><span>${state.analysis ? "Revisit anytime" : "Complete questionnaire"}</span></div>`;
}

function renderPathways() {
    if (!state.analysis) {
        screen.innerHTML = `<section class="mx-auto max-w-3xl border border-line bg-white px-6 py-8"><p class="text-[9px] font-bold tracking-[1.2px] text-forest">PATHWAYS</p><h1 class="mt-2 font-display text-2xl font-semibold">Start with your answers</h1><p class="mt-2 text-xs leading-5 text-[#76798b]">Career options are selected from your interests and choices. Complete the questionnaire to see pathways worth exploring.</p><button class="mt-4 cursor-pointer rounded-lg bg-forest px-4 py-3 text-xs font-bold text-white" data-view="questionnaire" type="button">Open questionnaire →</button></section>`;
        return;
    }
    if (state.view === "pathway-detail") {
        renderCareerDetail();
        return;
    }
    const careers = state.analysis.careers.filter(career => {
        const query = state.careerSearch.trim().toLowerCase();
        return !query || `${career.title} ${career.overview} ${career.marketContext}`.toLowerCase().includes(query);
    });
    screen.innerHTML = `<div class="mx-auto max-w-[1400px] px-4 py-6 sm:px-6 lg:px-8"><div class="flex flex-wrap items-end justify-between gap-4"><div><p class="text-[9px] font-bold tracking-[1.2px] text-forest">PATHWAY EXPLORER</p><h1 class="mt-1 font-display text-2xl font-semibold sm:text-[30px]">Several ways to use your interests</h1><p class="mt-1 text-xs text-[#7d8091]">${careers.length} options from your answers · nothing here is a fixed recommendation</p></div><label class="flex min-h-10 w-full max-w-sm items-center gap-2 border border-line bg-white px-3 text-xs text-[#7a7e8f]"><span aria-hidden="true">⌕</span><input class="min-w-0 flex-1 border-0 bg-transparent text-xs text-ink outline-none" id="career-search" type="search" value="${escapeHtml(state.careerSearch)}" placeholder="Search pathways" aria-label="Search pathways"></label></div><div class="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">${careers.map(career => renderCareerCard(career)).join("")}</div><p class="mt-5 border-t border-line pt-4 text-[10px] leading-5 text-[#858899]">Interest fit is not an aptitude score. Market information is cited separately and varies by country. Talk through prerequisites with a school counselor or institution.</p></div>`;
    document.querySelector("#career-search").addEventListener("input", event => {
        state.careerSearch = event.currentTarget.value;
        const cursor = event.currentTarget.selectionStart;
        renderPathways();
        const next = document.querySelector("#career-search");
        next.focus();
        next.setSelectionRange(cursor, cursor);
    });
    bindCareerActions();
}

function renderCareerCard(career) {
    const saved = state.savedPathways.some(item => item.id === career.id);
    const selected = state.compareIds.includes(career.id);
    return `<article class="flex min-h-[215px] flex-col border border-line bg-white p-4 shadow-[0_3px_14px_rgba(37,39,71,.04)]"><div class="flex items-start justify-between gap-3"><div><span class="inline-flex rounded-full bg-[#f0edff] px-2 py-1 text-[8px] font-bold text-forest">${escapeHtml(career.signalLevel || "Worth exploring")}</span><h2 class="mt-2 font-display text-base font-semibold">${escapeHtml(career.title)}</h2></div><button class="grid h-8 w-8 shrink-0 cursor-pointer place-items-center border border-line text-sm ${saved ? "bg-mint text-forest" : "bg-white text-[#77798b]"}" type="button" data-save="${escapeHtml(career.id)}" aria-label="${saved ? "Remove saved pathway" : "Save pathway"}">${saved ? "♥" : "♡"}</button></div><p class="mt-2 line-clamp-3 text-[10px] leading-5 text-[#74788a]">${escapeHtml(career.overview)}</p><p class="mt-3 text-[9px] leading-4 text-[#858899]">${escapeHtml(career.marketContext)}</p><div class="mt-auto flex items-center justify-between gap-3 border-t border-line pt-3"><button class="cursor-pointer text-[10px] font-bold text-forest hover:underline" type="button" data-career="${escapeHtml(career.id)}">Why it matches →</button><label class="flex cursor-pointer items-center gap-1.5 text-[9px] font-semibold text-[#74788a]"><input class="accent-forest" type="checkbox" data-compare="${escapeHtml(career.id)}" ${selected ? "checked" : ""}> Compare</label></div></article>`;
}

function bindCareerActions() {
    document.querySelectorAll("[data-career]").forEach(button => button.addEventListener("click", () => {
        state.selectedCareerId = button.dataset.career;
        state.view = "pathway-detail";
        render();
    }));
    document.querySelectorAll("[data-save]").forEach(button => button.addEventListener("click", () => toggleSaved(button.dataset.save)));
    document.querySelectorAll("[data-compare]").forEach(input => input.addEventListener("change", () => {
        if (input.checked && state.compareIds.length >= 4) {
            input.checked = false;
            showToast("Compare up to four pathways at once.");
            return;
        }
        state.compareIds = input.checked
            ? [...state.compareIds, input.dataset.compare]
            : state.compareIds.filter(id => id !== input.dataset.compare);
        renderNavigation();
    }));
}

async function toggleSaved(id) {
    const saved = state.savedPathways.some(item => item.id === id);
    try {
        state.savedPathways = await request(`/api/saved/${encodeURIComponent(id)}`, { method: "PUT", body: JSON.stringify({ saved: !saved }) });
        render();
        showToast(saved ? "Removed from your saved pathways." : "Pathway saved for later.");
    } catch (failure) {
        showToast(failure.message);
    }
}

function renderCareerDetail() {
    const career = [...(state.analysis?.careers || []), ...state.savedPathways].find(item => item.id === state.selectedCareerId);
    if (!career) {
        state.view = "pathways";
        renderPathways();
        return;
    }
    const saved = state.savedPathways.some(item => item.id === career.id);
    const sources = career.sourceIds.map(id => state.analysis.sources.find(source => source.id === id)).filter(Boolean);
    const stage = state.analysis.roadmap.stages;
    screen.innerHTML = `<div class="mx-auto max-w-[1200px] px-4 py-6 sm:px-6 lg:px-8"><button class="mb-4 cursor-pointer text-[10px] font-bold text-forest" id="back-to-pathways" type="button">← All pathways</button><div class="grid gap-4 xl:grid-cols-[1fr_300px]"><article class="border border-line bg-white p-5 sm:p-7"><span class="rounded-full bg-[#f0edff] px-2 py-1 text-[8px] font-bold text-forest">${escapeHtml(career.signalLevel || "Worth exploring")}</span><h1 class="mt-3 font-display text-[26px] font-semibold">${escapeHtml(career.title)}</h1><p class="mt-3 max-w-3xl text-sm leading-6 text-[#666a7c]">${escapeHtml(career.overview)}</p><div class="mt-5 grid gap-4 sm:grid-cols-2"><div class="border-t border-line pt-3"><p class="text-[9px] font-bold tracking-[1px] text-[#838697]">WHY IT APPEARED</p><p class="mt-2 text-xs leading-5">Your questionnaire answers include repeated signals related to ${escapeHtml(career.domain || state.analysis.roadmap.interestTrack.toLowerCase())}. Treat that as a question to test, not a conclusion.</p></div><div class="border-t border-line pt-3"><p class="text-[9px] font-bold tracking-[1px] text-[#838697]">TRY IT SMALL</p><p class="mt-2 text-xs leading-5">${escapeHtml(career.experiment)}</p></div></div><div class="mt-5 border-t border-line pt-3"><p class="text-[9px] font-bold tracking-[1px] text-[#838697]">EDUCATION CHECKPOINTS</p><ol class="mt-2 grid gap-2 sm:grid-cols-2">${stage.filter(item => ["Subjects or stream", "Skills", "Projects", "University or training"].includes(item.title)).map(item => `<li class="border-l-2 border-[#b8adfa] bg-[#faf9ff] px-3 py-2"><strong class="block text-[10px]">${escapeHtml(item.title)}</strong><span class="mt-1 block text-[9px] leading-4 text-[#76798b]">${escapeHtml(item.detail)}</span></li>`).join("")}</ol></div><p class="mt-5 border-t border-line pt-3 text-[10px] leading-5 text-[#7b7e90]">${escapeHtml(career.marketContext)}</p><div class="mt-3 flex flex-wrap gap-3">${sources.map(source => `<a class="text-[10px] font-semibold text-forest underline underline-offset-2" href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.title)} ↗</a>`).join("")}</div></article><aside class="h-fit border border-line bg-white p-4"><p class="text-[9px] font-bold tracking-[1.1px] text-[#818496]">YOUR PATHWAY TOOLS</p><button class="mt-3 w-full cursor-pointer rounded-lg bg-forest px-3 py-3 text-xs font-bold text-white" data-save="${escapeHtml(career.id)}" type="button">${saved ? "♥ Saved · remove" : "♡ Save this pathway"}</button><button class="mt-2 w-full cursor-pointer border border-line px-3 py-3 text-xs font-semibold text-forest" id="detail-compare" type="button">${state.compareIds.includes(career.id) ? "Remove from compare" : "Add to comparison"}</button><button class="mt-2 w-full cursor-pointer border border-line px-3 py-3 text-xs font-semibold text-[#5e6375]" data-view="universities" type="button">Research university routes</button></aside></div></div>`;
    document.querySelector("#back-to-pathways").addEventListener("click", () => setView("pathways"));
    document.querySelector("[data-save]").addEventListener("click", () => toggleSaved(career.id));
    document.querySelector("#detail-compare").addEventListener("click", () => {
        if (state.compareIds.includes(career.id)) state.compareIds = state.compareIds.filter(id => id !== career.id);
        else if (state.compareIds.length < 4) state.compareIds.push(career.id);
        else return showToast("Compare up to four pathways at once.");
        setView("compare");
    });
}

function renderCompare() {
    const all = state.analysis?.careers || [];
    const compare = all.filter(career => state.compareIds.includes(career.id));
    screen.innerHTML = `<div class="mx-auto max-w-[1400px] px-4 py-6 sm:px-6 lg:px-8"><p class="text-[9px] font-bold tracking-[1.2px] text-forest">SIDE-BY-SIDE</p><h1 class="mt-1 font-display text-2xl font-semibold">Compare pathways</h1><p class="mt-1 text-xs text-[#7d8091]">Select two to four options. This compares routes, not your potential.</p><div class="mt-4 flex flex-wrap gap-2">${all.map(career => `<label class="flex cursor-pointer items-center gap-2 border border-line bg-white px-3 py-2 text-[10px] font-semibold ${state.compareIds.includes(career.id) ? "border-forest bg-mint text-forest" : "text-[#75798b]"}"><input class="accent-forest" type="checkbox" data-compare="${escapeHtml(career.id)}" ${state.compareIds.includes(career.id) ? "checked" : ""}>${escapeHtml(career.title)}</label>`).join("")}</div>${compare.length < 2 ? `<p class="mt-5 border border-dashed border-[#cfc8fa] bg-white px-4 py-6 text-xs text-[#777a8c]">Choose at least two pathways to compare.</p>` : `<div class="mt-5 overflow-x-auto border border-line bg-white"><table class="min-w-[700px] w-full border-collapse text-left text-xs"><thead><tr><th class="w-40 border-b border-line bg-[#faf9ff] px-3 py-3 text-[9px] font-bold uppercase text-[#7b7e90]">Compare</th>${compare.map(item => `<th class="border-b border-line px-3 py-3 font-display text-sm">${escapeHtml(item.title)}</th>`).join("")}</tr></thead><tbody>${[["Why it matches", item => item.overview], ["Working style", item => item.experiment], ["Education", () => state.analysis.roadmap.stages.find(stage => stage.title === "University or training").detail], ["Market context", item => item.marketContext], ["Signal", item => item.signalLevel]].map(([label, renderValue]) => `<tr><th class="border-b border-line bg-[#faf9ff] px-3 py-3 text-[9px] font-bold text-[#74788a]">${label}</th>${compare.map(item => `<td class="border-b border-line px-3 py-3 align-top text-[10px] leading-5 text-[#676b7d]">${escapeHtml(renderValue(item))}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`}</div>`;
    document.querySelectorAll("[data-compare]").forEach(input => input.addEventListener("change", () => {
        if (input.checked && state.compareIds.length >= 4) { input.checked = false; return showToast("Compare up to four pathways at once."); }
        state.compareIds = input.checked ? [...state.compareIds, input.dataset.compare] : state.compareIds.filter(id => id !== input.dataset.compare);
        renderCompare();
    }));
}

function renderSavedPathways() {
    screen.innerHTML = `<div class="mx-auto max-w-[1400px] px-4 py-6 sm:px-6 lg:px-8"><p class="text-[9px] font-bold tracking-[1.2px] text-forest">YOUR SHORTLIST</p><h1 class="mt-1 font-display text-2xl font-semibold">Saved pathways</h1><p class="mt-1 text-xs text-[#7d8091]">Options you chose to keep nearby.</p>${state.savedPathways.length ? `<div class="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">${state.savedPathways.map(renderCareerCard).join("")}</div>` : `<div class="mt-5 border border-dashed border-[#cfc8fa] bg-white px-5 py-8"><h2 class="font-display text-lg font-semibold">Your list is ready when you are.</h2><p class="mt-2 text-xs text-[#797c8e]">Save a pathway while exploring your results to compare or revisit it later.</p><button class="mt-4 cursor-pointer rounded-lg bg-forest px-4 py-2.5 text-[10px] font-bold text-white" data-view="pathways" type="button">Explore pathways →</button></div>`}</div>`;
    bindCareerActions();
}

function renderRoadmapView() {
    if (!state.analysis) return setView("dashboard");
    const plan = state.analysis.roadmap;
    screen.innerHTML = `<div class="mx-auto max-w-[1200px] px-4 py-6 sm:px-6 lg:px-8"><p class="text-[9px] font-bold tracking-[1.2px] text-forest">YOUR NEXT STEPS</p><h1 class="mt-1 font-display text-2xl font-semibold">Roadmap for ${escapeHtml(plan.grade)}</h1><p class="mt-1 text-xs text-[#7d8091]">${escapeHtml(plan.gradeContext)} · ${escapeHtml(plan.country)} · ${escapeHtml(plan.interestTrack)}</p><section class="mt-5 grid gap-3 lg:grid-cols-2">${plan.stages.map((stage, index) => `<article class="flex gap-3 border border-line bg-white p-4"><span class="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-mint text-[9px] font-bold text-forest">${String(index + 1).padStart(2, "0")}</span><div><h2 class="font-display text-sm font-semibold">${escapeHtml(stage.title)}</h2><p class="mt-1 text-[10px] leading-5 text-[#717588]">${escapeHtml(stage.detail)}</p></div></article>`).join("")}</section><div class="mt-6 grid gap-3 md:grid-cols-3">${plan.horizons.map(horizon => `<article class="border border-line bg-white p-4"><p class="text-[9px] font-bold tracking-[1px] text-forest">ACTION WINDOW</p><h2 class="mt-1 font-display text-base font-semibold">${escapeHtml(horizon.title)}</h2><ul class="mt-3 grid gap-2">${horizon.actions.map(action => `<li class="flex gap-2 text-[10px] leading-5 text-[#676b7d]"><span class="text-coral">•</span>${escapeHtml(action)}</li>`).join("")}</ul></article>`).join("")}</div><p class="mt-4 border-l-2 border-[#e5a0ba] bg-white px-4 py-3 text-[10px] leading-5 text-[#73778a]">${escapeHtml(plan.caveat)}</p></div>`;
}

function renderUniversities() {
    const plan = state.analysis?.roadmap;
    const sources = state.analysis?.sources || [];
    const countrySource = sources.find(source => source.scope === plan?.country) || sources.find(source => source.id === "country-careers");
    const checkpoints = plan?.stages.filter(stage => ["Subjects or stream", "University or training", "Degree or qualification"].includes(stage.title)) || [];
    screen.innerHTML = `<div class="mx-auto max-w-[1200px] px-4 py-6 sm:px-6 lg:px-8"><p class="text-[9px] font-bold tracking-[1.2px] text-forest">EDUCATION RESEARCH</p><h1 class="mt-1 font-display text-2xl font-semibold">University &amp; course planning</h1><p class="mt-2 max-w-3xl text-xs leading-5 text-[#777b8e]">YourPath does not invent admission requirements or rank schools. Verify every subject, grade, fee and deadline with the institution and your national education service.</p><div class="mt-5 grid gap-4 xl:grid-cols-[1fr_340px]"><article class="border border-line bg-white p-5"><p class="text-[9px] font-bold tracking-[1.1px] text-[#828597]">CHECK AGAINST YOUR CURRENT GRADE</p><h2 class="mt-1 font-display text-lg font-semibold">${escapeHtml(plan?.grade || state.profile.grade)} · ${escapeHtml(plan?.country || state.profile.country)}</h2><div class="mt-3 grid gap-2">${checkpoints.map(item => `<div class="border-l-2 border-[#b8adfa] bg-[#faf9ff] px-3 py-3"><h3 class="text-[10px] font-bold">${escapeHtml(item.title)}</h3><p class="mt-1 text-[10px] leading-5 text-[#72768a]">${escapeHtml(item.detail)}</p></div>`).join("")}</div></article><aside class="h-fit border border-line bg-white p-5"><p class="text-[9px] font-bold tracking-[1.1px] text-[#828597]">OFFICIAL STARTING POINT</p>${countrySource ? `<h2 class="mt-2 font-display text-base font-semibold">${escapeHtml(countrySource.title)}</h2><p class="mt-2 text-[10px] leading-5 text-[#76798b]">${escapeHtml(countrySource.note)}</p><a class="mt-4 inline-flex rounded-lg bg-forest px-4 py-2.5 text-[10px] font-bold text-white" href="${escapeHtml(countrySource.url)}" target="_blank" rel="noopener noreferrer">Open official source ↗</a>` : `<p class="mt-2 text-xs leading-5 text-[#76798b]">Ask a school counselor which official university and course directories are current in ${escapeHtml(state.profile.country)}.</p>`}<p class="mt-4 border-t border-line pt-3 text-[9px] leading-4 text-[#888b9b]">Confirm accreditation, entry requirements, tuition, financial aid, accessibility and application dates directly with each institution.</p></aside></div></div>`;
}

function renderResources() {
    const sources = state.analysis?.sources || [];
    screen.innerHTML = `<div class="mx-auto max-w-[1200px] px-4 py-6 sm:px-6 lg:px-8"><p class="text-[9px] font-bold tracking-[1.2px] text-forest">REFERENCE DESK</p><h1 class="mt-1 font-display text-2xl font-semibold">Research sources</h1><p class="mt-2 text-xs text-[#777b8e]">Primary sources for career facts and further exploration.</p><div class="mt-5 divide-y divide-line border-y border-line bg-white px-4">${sources.map(source => `<article class="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between"><div><h2 class="text-xs font-semibold">${escapeHtml(source.title)}</h2><p class="mt-1 text-[10px] leading-4 text-[#797c8e]">${escapeHtml(source.note)}</p></div><a class="shrink-0 text-[10px] font-bold text-forest underline underline-offset-2" href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">Open source ↗</a></article>`).join("")}</div><p class="mt-4 text-[10px] leading-5 text-[#858899]">Source coverage depends on your country and selected pathway. U.S. Bureau of Labor Statistics figures are U.S.-specific; the WEF source is a global employer survey, not an individual job guarantee.</p></div>`;
}

function renderFeedbackView() {
    if (!state.analysis) {
        screen.innerHTML = `<div class="mx-auto max-w-3xl border border-line bg-white p-5"><p class="text-[9px] font-bold tracking-[1.2px] text-forest">FEEDBACK</p><h1 class="mt-1 font-display text-xl font-semibold">Help us make this reflection clearer</h1><p class="mt-2 text-xs text-[#777b8e]">Complete the questionnaire and review your analysis before leaving feedback.</p><button class="mt-4 cursor-pointer rounded-lg bg-forest px-4 py-2.5 text-[10px] font-bold text-white" data-view="questionnaire" type="button">Start questionnaire →</button></div>`;
        return;
    }
    screen.innerHTML = `<div class="mx-auto max-w-3xl border border-line bg-white p-5 sm:p-7"><p class="text-[9px] font-bold tracking-[1.2px] text-forest">FEEDBACK</p><h1 class="mt-1 font-display text-2xl font-semibold">Did this reflection feel useful?</h1><p class="mt-2 text-xs leading-5 text-[#777b8e]">Tell us what felt accurate, confusing or missing. Your feedback stays attached to this session.</p>${state.feedback ? `<div class="mt-5 border-l-2 border-forest bg-mint px-4 py-4"><p class="font-display text-base font-semibold">Thanks for helping us improve Your Path.</p><p class="mt-1 text-xs text-[#68776f]">Your ${state.feedback.rating}/5 feedback has been saved to your profile.</p></div>` : `<form id="feedback-page-form" class="mt-5 grid gap-4"><fieldset><legend class="text-xs font-semibold">How useful was this reflection?</legend><div class="mt-2 flex gap-2">${[1, 2, 3, 4, 5].map(rating => `<label class="cursor-pointer"><input class="peer sr-only" type="radio" name="rating" value="${rating}" ${rating === 3 ? "required" : ""}><span class="grid h-10 w-11 place-items-center border border-line bg-white text-xs font-semibold text-[#6e7183] peer-checked:border-forest peer-checked:bg-mint peer-checked:text-forest">${rating}</span></label>`).join("")}</div><div class="mt-1 flex max-w-[250px] justify-between text-[9px] text-[#858899]"><span>Not yet</span><span>Very useful</span></div></fieldset><label class="grid gap-1.5 text-xs font-semibold">What would you change or add?<textarea class="min-h-[110px] w-full border border-line px-3 py-2 text-xs leading-5 outline-none focus:border-forest focus:ring-2 focus:ring-forest/15" name="note" maxlength="800" placeholder="A missing pathway, a confusing match, or something we got right…"></textarea></label><p class="hidden text-[10px] text-[#b34472]" id="feedback-page-error" role="alert"></p><button class="cursor-pointer self-start rounded-lg bg-forest px-5 py-3 text-[10px] font-bold text-white hover:bg-forest-dark" type="submit">Submit feedback →</button></form>`}</div>`;
    document.querySelector("#feedback-page-form")?.addEventListener("submit", event => {
        event.preventDefault();
        const form = event.currentTarget;
        const values = new FormData(form);
        const rating = Number(values.get("rating"));
        if (!rating) {
            const error = document.querySelector("#feedback-page-error");
            error.textContent = "Select a rating first.";
            error.classList.remove("hidden");
            return;
        }
        submitFeedbackPayload(rating, values.get("note") || "", "#feedback-page-error");
    });
}

function renderAbout() {
    screen.innerHTML = `<div class="mx-auto max-w-3xl border border-line bg-white p-6 sm:p-8"><p class="text-[9px] font-bold tracking-[1.2px] text-forest">ABOUT YOUR PATH</p><h1 class="mt-1 font-display text-2xl font-semibold">Explore without pressure.</h1><p class="mt-3 text-sm leading-6 text-[#6f7386]">YourPath helps students notice patterns in their interests, compare several realistic study and career directions, and choose small experiments. It does not score your ability, diagnose you, or choose a career for you.</p><p class="mt-3 text-xs leading-5 text-[#7d8090]">The current reflection is rule-based, transparent and uses cited research sources. It is not sent to an AI service. Study prerequisites and job-market facts vary by location; verify them with current local institutions and official sources.</p><div class="mt-5 border-t border-line pt-4 text-[10px] leading-5 text-[#858899]">Prototype notice: profile details, answers and account password hashes live in process memory and are erased when the server restarts. This is not ready for real student data.</div></div>`;
}

async function renderSavedPathways() {
    if (!state.savedPathways.length) {
        try { state.savedPathways = await request("/api/saved"); } catch { state.savedPathways = []; }
    }
    renderSavedPathwaysScreen();
}

function renderSavedPathwaysScreen() {
    screen.innerHTML = `<div class="mx-auto max-w-[1400px] px-4 py-6 sm:px-6 lg:px-8"><p class="text-[9px] font-bold tracking-[1.2px] text-forest">YOUR SHORTLIST</p><h1 class="mt-1 font-display text-2xl font-semibold">Saved pathways</h1><p class="mt-1 text-xs text-[#7d8091]">Options you chose to keep nearby.</p>${state.savedPathways.length ? `<div class="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">${state.savedPathways.map(renderCareerCard).join("")}</div>` : `<div class="mt-5 border border-dashed border-[#cfc8fa] bg-white px-5 py-8"><h2 class="font-display text-lg font-semibold">Your list is ready when you are.</h2><p class="mt-2 text-xs text-[#797c8e]">Save a pathway while exploring your results to compare or revisit it later.</p><button class="mt-4 cursor-pointer rounded-lg bg-forest px-4 py-2.5 text-[10px] font-bold text-white" data-view="pathways" type="button">Explore pathways →</button></div>`}</div>`;
    bindCareerActions();
}

function renderRegistration() {
    screen.innerHTML = `<div class="grid overflow-hidden border border-line bg-white lg:grid-cols-[.83fr_1.17fr]"><section class="relative min-h-[210px] overflow-hidden bg-[#263d34] lg:min-h-[710px]" aria-label="Students collaborating on a project"><img class="absolute inset-0 h-full w-full object-cover object-center opacity-70" src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85" alt="A group of students working together around a table"><div class="absolute inset-0 bg-gradient-to-t from-[#172d24]/90 via-[#172d24]/15 to-transparent"></div><div class="absolute bottom-0 left-0 max-w-xl p-6 text-white sm:p-9"><p class="text-[10px] font-bold tracking-[1.6px] text-[#d9e3d7]">YOUR LIFE, YOUR EVIDENCE</p><p class="mt-3 font-display text-2xl font-semibold leading-tight sm:text-[32px]">A good next step starts with noticing what feels like you.</p><p class="mt-3 max-w-md text-xs leading-5 text-white/80">Explore interests, working styles and real education routes without having to pick your whole future today.</p></div></section>
        <section class="px-5 py-7 sm:px-9 sm:py-9 lg:px-10 lg:py-10"><p class="text-[10px] font-bold tracking-[1.5px] text-forest">FIRST, A LITTLE ABOUT YOU</p><h1 class="mt-2 font-display text-[30px] font-semibold leading-tight sm:text-[34px]">Make this space yours.</h1><p class="mt-3 max-w-xl text-sm leading-6 text-[#6d7b73]">Your details will be connected to your answers and reflection through a private session on this server.</p>
            <form class="mt-7 grid gap-x-4 gap-y-4 sm:grid-cols-2" id="registration-form" novalidate>
                <label class="grid gap-1.5 text-xs font-semibold">Full name<input class="w-full min-h-11 border border-line bg-white px-3 py-2 text-sm text-ink placeholder:text-[#9aa49e] focus:border-forest focus:outline-none focus:ring-2 focus:ring-[#315d4c]/20" name="fullName" autocomplete="name" maxlength="100" required placeholder="Your name"></label>
                <label class="grid gap-1.5 text-xs font-semibold">Email address<input class="w-full min-h-11 border border-line bg-white px-3 py-2 text-sm text-ink placeholder:text-[#9aa49e] focus:border-forest focus:outline-none focus:ring-2 focus:ring-[#315d4c]/20" name="email" type="email" autocomplete="email" maxlength="254" required placeholder="you@example.com"></label>
                <label class="grid gap-1.5 text-xs font-semibold sm:col-span-2">Password or passphrase<input class="w-full min-h-11 border border-line bg-white px-3 py-2 text-sm text-ink placeholder:text-[#9aa49e] focus:border-forest focus:outline-none focus:ring-2 focus:ring-[#315d4c]/20" name="password" type="password" autocomplete="new-password" minlength="12" maxlength="256" required placeholder="Use 12 or more characters"><span class="text-[10px] font-normal text-[#86928a]">Use a unique password or passphrase; don’t reuse an important password on this prototype.</span></label>
                <label class="grid gap-1.5 text-xs font-semibold sm:col-span-2">Country or region and phone number<input class="w-full min-h-12 border border-line bg-white px-3 py-2 text-sm text-ink placeholder:text-[#9aa49e] focus:border-forest focus:outline-none focus:ring-2 focus:ring-[#674ee5]/20" id="student-phone" name="phone" type="tel" autocomplete="tel-national" required placeholder="Choose a country, then enter your number"><span class="text-[10px] font-normal text-[#858899]">Search by country name or calling code. The country and international prefix stay together.</span></label>
                <input id="student-country" name="country" type="hidden" required>
                <input id="student-country-code" name="countryCode" type="hidden" required>
                <label class="grid gap-1.5 text-xs font-semibold">Grade or class<input class="w-full min-h-11 border border-line bg-white px-3 py-2 text-sm text-ink placeholder:text-[#9aa49e] focus:border-forest focus:outline-none focus:ring-2 focus:ring-[#315d4c]/20" name="grade" maxlength="64" required placeholder="For example, Grade 10"></label>
                <label class="grid gap-1.5 text-xs font-semibold">Age<input class="w-full min-h-11 border border-line bg-white px-3 py-2 text-sm text-ink placeholder:text-[#9aa49e] focus:border-forest focus:outline-none focus:ring-2 focus:ring-[#315d4c]/20" name="age" id="student-age" type="number" min="13" max="22" required placeholder="13–22"></label>
                <label class="grid gap-1.5 text-xs font-semibold sm:col-span-2">School or location <span class="font-normal text-[#859188]">Optional</span><input class="w-full min-h-11 border border-line bg-white px-3 py-2 text-sm text-ink placeholder:text-[#9aa49e] focus:border-forest focus:outline-none focus:ring-2 focus:ring-[#315d4c]/20" name="location" maxlength="160" placeholder="School, town or region"></label>
                <div class="hidden border-l-2 border-[#dfa779] bg-[#fbf5ef] px-4 py-3 sm:col-span-2" id="guardian-consent-wrap"><label class="flex cursor-pointer items-start gap-3 text-xs leading-5 text-[#574b40]"><input class="mt-1 h-4 w-4 accent-[#315d4c]" name="guardianConsent" type="checkbox"><span>My parent or guardian has reviewed this prototype and agreed that I can continue.</span></label><p class="ml-7 mt-1.5 text-[10px] leading-4 text-[#817469]">This acknowledgment is not verified guardian consent or a substitute for school or family guidance.</p></div>
                <p class="hidden text-xs text-[#a44d36] sm:col-span-2" id="registration-error" role="alert"></p>
                <div class="border-y border-line py-3 text-[11px] leading-5 text-[#68776f] sm:col-span-2"><strong class="text-ink">Prototype privacy:</strong> your contact details, answers and feedback are held in this server's memory and linked by an HttpOnly session cookie. Data clears when the server restarts or you end the session. No database or external AI service is used. Use HTTPS and reviewed consent flows before any real deployment.</div>
                <button class="inline-flex min-h-12 cursor-pointer items-center justify-center gap-3 bg-forest px-5 text-xs font-bold text-white transition hover:bg-[#234637] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest sm:col-span-2 sm:justify-self-start" type="submit">Start the reflection <span class="text-base" aria-hidden="true">→</span></button>
            </form>
        </section></div>`;

    const form = document.querySelector("#registration-form");
    const phoneInput = document.querySelector("#student-phone");
    const phonePicker = window.intlTelInput ? window.intlTelInput(phoneInput, {
        countrySearch: true,
        countrySelectorMode: "AUTO",
        separateDialCode: true,
        strictMode: true,
        loadUtils: () => import("https://cdn.jsdelivr.net/npm/intl-tel-input@29.5.3/dist/js/utils.js"),
        classNames: {
            container: "w-full",
            input: "!min-h-12 !w-full !border-line !bg-white !px-3 !py-2 !text-sm !text-ink focus:!border-forest focus:!ring-2 focus:!ring-[#674ee5]/20",
            selectedCountry: "!border-r !border-line",
            countrySelector: "!border !border-line !bg-white !shadow-xl",
            countryList: "!max-h-60",
            countryListItem: "!px-3 !py-2"
        }
    }) : null;
    const age = document.querySelector("#student-age");
    const consentWrap = document.querySelector("#guardian-consent-wrap");
    age.addEventListener("input", () => consentWrap.classList.toggle("hidden", !(Number(age.value) >= 13 && Number(age.value) < 18)));
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const error = document.querySelector("#registration-error");
        error.textContent = "";
        if (!form.reportValidity()) return;
        const selectedCountry = phonePicker?.getSelectedCountry();
        if (!selectedCountry) {
            error.textContent = "Choose your country or region from the phone field before continuing.";
            error.classList.remove("hidden");
            return;
        }
        const nationalPhone = phoneInput.value.replace(/\D/g, "");
        if (nationalPhone.length < 6 || nationalPhone.length > 15) {
            error.textContent = "Enter a phone number with 6 to 15 digits for the selected region.";
            error.classList.remove("hidden");
            phoneInput.focus();
            return;
        }
        const values = Object.fromEntries(new FormData(form).entries());
        values.age = Number(values.age);
        values.phone = nationalPhone;
        values.country = selectedCountry.name;
        values.countryCode = `+${selectedCountry.dialCode}`;
        values.guardianConsent = form.elements.guardianConsent.checked;
        values.privacyAcknowledged = state.privacyAcknowledged;
        const button = form.querySelector("button[type=submit]");
        button.disabled = true;
        button.textContent = "Opening your session…";
        try {
            const response = await request("/api/register", { method: "POST", body: JSON.stringify(values) });
            state.profile = response.profile;
            state.answers = {};
            state.currentSection = 0;
            state.analysis = null;
            state.feedback = null;
            state.savedPathways = [];
            state.view = "dashboard";
            render();
            screen.focus();
        } catch (failure) {
            error.textContent = failure.message;
            error.classList.remove("hidden");
            button.disabled = false;
            button.innerHTML = `Start the reflection <span class="text-base" aria-hidden="true">→</span>`;
        }
    });
}

function renderAssessment() {
    const section = sectionData[state.currentSection];
    const firstQuestion = state.currentSection * 5 + 1;
    const progress = Math.round((firstQuestion - 1) / 20 * 100);
    screen.innerHTML = `<div class="mx-auto max-w-4xl"><div class="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-5"><div><p class="text-[10px] font-bold tracking-[1.4px] text-coral">SECTION 0${state.currentSection + 1} / 04 · QUESTIONS ${firstQuestion}–${firstQuestion + 4}</p><h1 class="mt-2 font-display text-[30px] font-semibold sm:text-[36px]">${escapeHtml(section.title)}</h1><p class="mt-2 max-w-2xl text-sm leading-6 text-[#6d7b73]">${escapeHtml(section.subtitle)}</p></div><p class="text-[11px] font-semibold text-[#728078]">${firstQuestion - 1} of 20 complete</p></div>
        <div class="mt-5 h-1 overflow-hidden bg-[#e4e9e2]" role="progressbar" aria-label="Questionnaire progress" aria-valuemin="0" aria-valuemax="20" aria-valuenow="${firstQuestion - 1}"><div class="h-full bg-forest transition-all" style="width:${progress}%"></div></div>
        <form class="mt-2" id="assessment-form" novalidate>${section.questions.map((question, index) => renderQuestion(question, firstQuestion + index)).join("")}<p class="hidden border-l-2 border-coral bg-[#fbf2ed] px-4 py-3 text-xs leading-5 text-[#8e4d3a]" id="assessment-error" role="alert" tabindex="-1"></p><div class="mt-7 flex flex-col-reverse justify-between gap-3 border-t border-line pt-5 sm:flex-row sm:items-center"><button class="cursor-pointer px-2 py-3 text-xs font-semibold text-[#66746d] hover:text-ink disabled:cursor-not-allowed disabled:opacity-40" type="button" id="previous-section" ${state.currentSection === 0 ? "disabled" : ""}>← Previous section</button><button class="inline-flex min-h-12 cursor-pointer items-center justify-center gap-3 bg-forest px-5 text-xs font-bold text-white transition hover:bg-[#234637] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest" type="submit">${state.currentSection === 3 ? "Build my reflection" : "Save and continue"}<span class="text-base" aria-hidden="true">→</span></button></div></form></div>`;

    const form = document.querySelector("#assessment-form");
    form.addEventListener("submit", (event) => submitSection(event, form));
    document.querySelector("#previous-section").addEventListener("click", () => moveSection(-1, form));
    for (const question of section.questions.filter((item) => item.kind === "multi")) {
        const group = form.querySelector(`[data-multi="${question.id}"]`);
        group.addEventListener("change", (event) => {
            if (event.target.checked && group.querySelectorAll("input:checked").length > question.max) {
                event.target.checked = false;
                showToast(`Choose up to ${question.max} options.`);
            }
        });
    }
}

function renderQuestion(question, number) {
    const saved = state.answers[question.id];
    let control = "";
    if (question.kind === "text") {
        control = `<label class="mt-4 grid gap-2 text-xs font-semibold" for="answer-${question.id}">${escapeHtml(question.label)}<textarea class="w-full min-h-[100px] resize-y border border-line bg-white px-3 py-2 text-sm leading-5 text-ink placeholder:text-[#9aa49e] focus:border-forest focus:outline-none focus:ring-2 focus:ring-[#315d4c]/20" id="answer-${question.id}" name="${question.id}" maxlength="1600" minlength="8" required placeholder="${escapeHtml(question.placeholder)}">${escapeHtml(saved || "")}</textarea><span class="text-[10px] font-normal text-[#86928a]">A few concrete words is enough. Skip names or details that identify someone else.</span></label>`;
    } else if (question.kind === "multi") {
        const selected = Array.isArray(saved) ? saved : [];
        control = `<div class="mt-4 grid gap-2 sm:grid-cols-2" role="group" aria-label="${escapeHtml(question.title)}" data-multi="${question.id}">${question.options.map(([id, label]) => `<label class="relative cursor-pointer"><input class="peer sr-only" type="checkbox" name="${question.id}" value="${id}" ${selected.includes(id) ? "checked" : ""}><span class="flex min-h-12 items-center gap-3 border border-line bg-white px-3 py-2.5 text-xs leading-5 text-[#526158] transition peer-checked:border-forest peer-checked:bg-[#eef4ef] peer-checked:text-forest peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-forest"><span class="grid h-4 w-4 shrink-0 place-items-center border border-[#cbd5cb] text-[10px]">✓</span>${escapeHtml(label)}</span></label>`).join("")}</div><p class="mt-2 text-[10px] text-[#86928a]">Choose up to ${question.max}.</p>`;
    } else if (question.kind === "single") {
        control = `<div class="mt-4 grid gap-2" role="radiogroup" aria-label="${escapeHtml(question.title)}">${question.options.map(([id, label], index) => `<label class="relative cursor-pointer"><input class="peer sr-only" type="radio" name="${question.id}" value="${id}" ${saved === id ? "checked" : ""} ${index === 0 ? "required" : ""}><span class="flex min-h-12 items-center gap-3 border border-line bg-white px-3 py-2.5 text-xs leading-5 text-[#526158] transition peer-checked:border-forest peer-checked:bg-[#eef4ef] peer-checked:text-forest peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-forest"><span class="grid h-4 w-4 shrink-0 place-items-center rounded-full border border-[#cbd5cb] text-[9px]">●</span>${escapeHtml(label)}</span></label>`).join("")}</div>`;
    } else if (question.kind === "scale") {
        control = `<div class="mt-4 grid grid-cols-5 gap-2" role="radiogroup" aria-label="${escapeHtml(question.title)}">${[1, 2, 3, 4, 5].map((value) => `<label class="relative cursor-pointer"><input class="peer sr-only" type="radio" name="${question.id}" value="${value}" ${Number(saved) === value ? "checked" : ""} ${value === 1 ? "required" : ""}><span class="flex min-h-12 items-center justify-center border border-line bg-white text-sm font-semibold text-[#647269] transition peer-checked:border-forest peer-checked:bg-[#eef4ef] peer-checked:text-forest peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-forest">${value}</span></label>`).join("")}</div><div class="mt-2 flex justify-between gap-4 text-[10px] text-[#86928a]"><span>${escapeHtml(question.low)}</span><span class="text-right">${escapeHtml(question.high)}</span></div>`;
    } else if (question.kind === "ranking") {
        const ranks = saved && typeof saved === "object" ? saved : {};
        control = `<div class="mt-4 divide-y divide-line border-y border-line">${question.options.map(([id, label]) => `<label class="grid min-h-[58px] grid-cols-[1fr_110px] items-center gap-4 py-2 text-xs leading-5"><span>${escapeHtml(label)}</span><select class="min-h-10 w-full border border-line bg-white px-2 text-xs text-ink focus:border-forest focus:outline-none focus:ring-2 focus:ring-[#315d4c]/20" name="${id}" aria-label="Rank: ${escapeHtml(label)}"><option value="">Rank…</option>${[1, 2, 3, 4].map((rank) => `<option value="${rank}" ${Number(ranks[id]) === rank ? "selected" : ""}>${rank}${rank === 1 ? " · first" : rank === 4 ? " · last" : ""}</option>`).join("")}</select></label>`).join("")}</div>`;
    }

    return `<fieldset class="border-b border-line py-6 sm:py-7"><legend class="max-w-3xl font-display text-[16px] font-semibold leading-6 sm:text-[18px]"><span class="mr-2 text-[10px] font-bold tracking-[1px] text-coral">${String(number).padStart(2, "0")}</span>${escapeHtml(question.title)}</legend>${question.hint ? `<p class="mt-2 max-w-2xl text-xs leading-5 text-[#7b8981]">${escapeHtml(question.hint)}</p>` : ""}${control}</fieldset>`;
}

async function moveSection(direction, form) {
    const answers = collectAnswers(form, state.currentSection);
    try {
        await request("/api/assessment", { method: "PUT", body: JSON.stringify({ currentSection: state.currentSection, answers }) });
        state.answers = answers;
        state.currentSection = Math.max(0, Math.min(3, state.currentSection + direction));
        state.analysis = null;
        state.feedback = null;
        state.savedPathways = [];
        state.view = "questionnaire";
        render();
        screen.focus();
    } catch (failure) {
        showFormError("assessment-error", failure.message);
    }
}

async function submitSection(event, form) {
    event.preventDefault();
    const error = document.querySelector("#assessment-error");
    error.classList.add("hidden");
    const answers = collectAnswers(form, state.currentSection);
    const section = sectionData[state.currentSection];
    const missing = section.questions.find((question) => !isAnswerComplete(question, answers[question.id]));
    if (missing) {
        showFormError("assessment-error", missing.kind === "multi"
            ? `Choose at least one option for each question and no more than the stated limit (${missing.max}).`
            : missing.kind === "ranking"
                ? "Give each activity a different rank from 1 to 4."
                : `Complete question ${section.questions.indexOf(missing) + state.currentSection * 5 + 1} before continuing.`);
        form.querySelector(`[name="${missing.kind === "ranking" ? "rank-investigate" : missing.id}"]`)?.focus();
        return;
    }
    if (!form.reportValidity()) return;

    const finalSection = state.currentSection === 3;
    try {
        await request("/api/assessment", { method: "PUT", body: JSON.stringify({ currentSection: finalSection ? 3 : state.currentSection + 1, answers }) });
        state.answers = answers;
        if (!finalSection) {
            state.currentSection += 1;
            render();
            screen.focus();
            return;
        }
        state.analysis = await request("/api/analysis", { method: "POST" });
        state.view = "dashboard";
        render();
        screen.focus();
    } catch (failure) {
        showFormError("assessment-error", failure.message);
    }
}

function collectAnswers(form, sectionIndex) {
    const answers = { ...state.answers };
    for (const question of sectionData[sectionIndex].questions) {
        if (question.kind === "text") {
            answers[question.id] = form.elements.namedItem(question.id).value.trim();
        } else if (question.kind === "multi") {
            answers[question.id] = Array.from(form.querySelectorAll(`input[name="${question.id}"]:checked`), (input) => input.value);
        } else if (question.kind === "single") {
            answers[question.id] = form.querySelector(`input[name="${question.id}"]:checked`)?.value || "";
        } else if (question.kind === "scale") {
            const selected = form.querySelector(`input[name="${question.id}"]:checked`);
            if (selected) answers[question.id] = Number(selected.value);
            else delete answers[question.id];
        } else if (question.kind === "ranking") {
            answers[question.id] = Object.fromEntries(question.options.map(([id]) => [id, Number(form.elements.namedItem(id).value) || 0]).filter(([, rank]) => rank > 0));
        }
    }
    return answers;
}

function isAnswerComplete(question, value) {
    if (question.kind === "text") return typeof value === "string" && value.trim().length >= 8;
    if (question.kind === "multi") return Array.isArray(value) && value.length > 0 && value.length <= question.max;
    if (question.kind === "single") return typeof value === "string" && value.length > 0;
    if (question.kind === "scale") return Number.isInteger(value) && value >= 1 && value <= 5;
    if (question.kind === "ranking") return value && Object.keys(value).length === 4 && new Set(Object.values(value)).size === 4;
    return false;
}

function showFormError(id, message) {
    const target = document.getElementById(id);
    target.textContent = message;
    target.classList.remove("hidden");
    target.focus?.();
}

function renderAnalysis() {
    const result = state.analysis;
    const lead = result.pathways[0];
    const otherPaths = result.pathways.slice(1);
    screen.innerHTML = `<div class="mx-auto max-w-4xl"><div class="border-b border-line pb-6"><p class="text-[10px] font-bold tracking-[1.4px] text-coral">YOUR ANSWERS, REFLECTED BACK</p><h1 class="mt-2 max-w-3xl font-display text-[30px] font-semibold leading-tight sm:text-[38px]">What keeps showing up?</h1><p class="mt-4 max-w-3xl text-sm leading-6 text-[#64736b]">${escapeHtml(result.summary)}</p></div>
        <section class="mt-7 grid gap-6 border-b border-line pb-7 sm:grid-cols-[minmax(0,1fr)_220px] sm:items-start"><div><p class="text-[10px] font-bold tracking-[1.3px] text-forest">A DIRECTION TO EXPLORE</p><h2 class="mt-2 font-display text-2xl font-semibold">${escapeHtml(lead.title)}</h2><p class="mt-3 max-w-2xl text-sm leading-6 text-[#66756d]">${escapeHtml(lead.focus)}</p><div class="mt-5 border-l-2 border-[#7d9b75] pl-4"><p class="text-[10px] font-bold tracking-[1px] text-[#75847a]">A SMALL WAY TO TEST IT</p><p class="mt-1 text-sm leading-6">${escapeHtml(lead.experiment)}</p></div></div><div class="border-t border-line pt-4 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0"><p class="text-[10px] font-bold tracking-[1px] text-[#75847a]">SIGNAL</p><p class="mt-2 font-display text-lg font-semibold text-forest">${escapeHtml(lead.signalLevel)}</p><p class="mt-2 text-[11px] leading-5 text-[#7b8981]">A pattern in these answers, not a score or a prediction.</p></div></section>
        <section class="border-b border-line py-7"><div class="flex flex-wrap items-end justify-between gap-2"><div><p class="text-[10px] font-bold tracking-[1.3px] text-[#75847a]">OTHER THREADS</p><h2 class="mt-1 font-display text-xl font-semibold">More directions worth a look</h2></div><p class="text-[10px] text-[#87938b]">No ranking of your potential</p></div><div class="mt-4 divide-y divide-line">${otherPaths.map((path, index) => `<article class="grid gap-2 py-4 sm:grid-cols-[34px_1fr_150px]"><span class="font-display text-sm font-semibold text-coral">0${index + 2}</span><div><h3 class="font-display text-base font-semibold">${escapeHtml(path.title)}</h3><p class="mt-1 text-xs leading-5 text-[#718078]">${escapeHtml(path.focus)}</p><p class="mt-2 text-xs leading-5"><strong class="text-forest">Try:</strong> ${escapeHtml(path.experiment)}</p></div><span class="text-[10px] font-semibold text-[#7a897f] sm:text-right">${escapeHtml(path.signalLevel)}</span></article>`).join("")}</div></section>
        <section class="border-b border-line py-7"><p class="text-[10px] font-bold tracking-[1.3px] text-coral">PLACES TO GET CURIOUS</p><h2 class="mt-1 font-display text-xl font-semibold">When answers pull in different directions</h2>${result.contrasts.length ? `<div class="mt-4 grid gap-4">${result.contrasts.map((item) => `<article class="border-l-2 border-[#d89a69] bg-[#fbf5ef] px-4 py-4"><h3 class="text-sm font-semibold leading-6">${escapeHtml(item.observation)}</h3><p class="mt-2 text-xs leading-5 text-[#6f6a62]">${escapeHtml(item.context)}</p></article>`).join("")}</div>` : `<p class="mt-3 max-w-2xl text-sm leading-6 text-[#68776f]">Your choices and written answers are broadly pointing in similar directions so far. That does not make them permanent; notice what changes when you try a real activity.</p>`}</section>
        <section class="border-b border-line py-7"><p class="text-[10px] font-bold tracking-[1.3px] text-[#75847a]">HOW TO READ THIS</p><p class="mt-2 max-w-3xl text-xs leading-5 text-[#6d7b73]">${escapeHtml(result.caveat)}</p><p class="mt-2 text-[10px] text-[#87938b]">Built ${new Date(result.createdAt).toLocaleDateString(undefined, { month: "long", day: "numeric" })} · Nothing is sent to an AI provider.</p></section>
        <section class="py-7" aria-labelledby="feedback-title"><div class="grid gap-5 sm:grid-cols-[1fr_1fr] sm:items-start"><div><p class="text-[10px] font-bold tracking-[1.3px] text-forest">YOUR FEEDBACK</p><h2 class="mt-1 font-display text-xl font-semibold" id="feedback-title">Did this feel useful?</h2><p class="mt-2 text-xs leading-5 text-[#718078]">A thoughtful tool should leave room for your own judgment.</p></div>${state.feedback ? `<p class="border-l-2 border-forest bg-mint px-4 py-3 text-xs leading-5 text-forest">Thanks. Your feedback is attached to this private session.</p>` : `<form id="feedback-form" class="grid gap-3"><fieldset><legend class="text-xs font-semibold">Rate this reflection</legend><div class="mt-2 flex gap-2">${[1, 2, 3, 4, 5].map((rating) => `<label class="cursor-pointer"><input class="peer sr-only" type="radio" name="rating" value="${rating}" ${rating === 3 ? "required" : ""}><span class="grid h-9 w-10 place-items-center border border-line bg-white text-xs peer-checked:border-forest peer-checked:bg-mint peer-checked:text-forest">${rating}</span></label>`).join("")}</div><div class="mt-1 flex justify-between text-[10px] text-[#87938b]"><span>Not quite</span><span>Very useful</span></div></fieldset><label class="grid gap-1.5 text-xs font-semibold">Anything you would change? <span class="font-normal text-[#87938b]">Optional</span><textarea class="w-full min-h-[72px] border border-line bg-white px-3 py-2 text-sm text-ink placeholder:text-[#9aa49e] focus:border-forest focus:outline-none focus:ring-2 focus:ring-[#315d4c]/20" name="note" maxlength="800" placeholder="A question, gap or suggestion"></textarea></label><p class="hidden text-xs text-[#a44d36]" id="feedback-error" role="alert" tabindex="-1"></p><button class="min-h-10 cursor-pointer justify-self-start bg-[#20372e] px-4 text-xs font-bold text-white hover:bg-forest" type="submit">Send feedback</button></form>`}</div></section>
        <p class="border-t border-line pt-4 text-[10px] leading-5 text-[#87938b]">Possible subjects and pathways are examples to research with a school counselor, teacher or trusted adult. They are not admissions, employment or aptitude guarantees.</p></div>`;
    document.querySelector("#feedback-form")?.addEventListener("submit", submitFeedback);
    const researchAnchor = Array.from(screen.querySelectorAll("section")).find((section) => section.textContent.includes("HOW TO READ THIS"));
    researchAnchor?.insertAdjacentHTML("beforebegin", renderCareerAndRoadmap(result));
}

function renderCareerAndRoadmap(result) {
    const careerCards = result.careers.map((career) => {
        const sources = career.sourceIds.map((id) => result.sources.find((source) => source.id === id)).filter(Boolean);
        return `<article class="border-t border-line py-5"><div class="flex flex-wrap items-baseline justify-between gap-2"><h3 class="font-display text-lg font-semibold">${escapeHtml(career.title)}</h3><span class="text-[9px] font-bold uppercase tracking-[1px] text-[#77857b]">${escapeHtml(result.roadmap.interestTrack)}</span></div><p class="mt-2 text-xs leading-5 text-[#65746c]">${escapeHtml(career.overview)}</p><div class="mt-3 border-l-2 border-[#7d9b75] pl-3"><p class="text-[9px] font-bold tracking-[1px] text-forest">TRY IT SMALL</p><p class="mt-1 text-xs leading-5">${escapeHtml(career.experiment)}</p></div><p class="mt-3 text-[10px] leading-5 text-[#6d756e]">${escapeHtml(career.marketContext)}</p><div class="mt-2 flex flex-wrap gap-x-3 gap-y-1">${sources.map((source) => `<a class="text-[10px] font-semibold text-forest underline decoration-[#a8b9a9] underline-offset-2 hover:text-[#234637]" href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.title)} ↗</a>`).join("")}</div></article>`;
    }).join("");
    const stages = result.roadmap.stages.map((stage, index) => `<article class="relative border-t border-line py-4 pl-10 sm:pl-11"><span class="absolute left-0 top-4 grid h-6 w-6 place-items-center rounded-full border border-[#b8cbb8] bg-white text-[9px] font-bold text-forest">${String(index + 1).padStart(2, "0")}</span><h3 class="font-display text-sm font-semibold">${escapeHtml(stage.title)}</h3><p class="mt-1 text-xs leading-5 text-[#68776f]">${escapeHtml(stage.detail)}</p></article>`).join("");
    const horizons = result.roadmap.horizons.map((horizon) => `<article class="border-t border-line py-4"><h3 class="font-display text-base font-semibold text-forest">${escapeHtml(horizon.title)}</h3><ul class="mt-2 grid gap-2">${horizon.actions.map((action) => `<li class="flex gap-2 text-xs leading-5 text-[#5f6e65]"><span class="mt-1 text-[9px] text-coral" aria-hidden="true">✳</span><span>${escapeHtml(action)}</span></li>`).join("")}</ul></article>`).join("");
    const sourceList = result.sources.map((source) => `<li class="flex flex-col gap-1 border-t border-line py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-5"><a class="text-xs font-semibold text-forest underline decoration-[#a8b9a9] underline-offset-2 hover:text-[#234637]" href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.title)} ↗</a><span class="text-[10px] leading-4 text-[#7b8981]">${escapeHtml(source.scope)} · ${escapeHtml(source.note)}</span></li>`).join("");

    return `<section class="border-b border-line py-7"><div class="flex flex-wrap items-end justify-between gap-2"><div><p class="text-[10px] font-bold tracking-[1.3px] text-forest">REAL-WORLD CAREER RESEARCH</p><h2 class="mt-1 font-display text-xl font-semibold">More than one way to use these interests</h2></div><span class="text-[10px] text-[#7b8981]">Sources checked ${escapeHtml(result.checkedOn)}</span></div><p class="mt-3 max-w-3xl text-xs leading-5 text-[#68776f]">These options were selected from patterns in your answers, not from one keyword. Labor-market notes are source-specific, not promises about your country or future. Salary and outlook figures below are U.S. BLS data where labeled.</p><div class="mt-4">${careerCards || `<p class="border-t border-line py-4 text-xs text-[#718078]">There are not yet enough mapped signals to suggest specific roles. Review your answers and try another activity before narrowing your options.</p>`}</div><details class="mt-2 border-t border-line py-4"><summary class="cursor-pointer text-xs font-semibold text-forest">Research sources and scope</summary><ul class="mt-3">${sourceList}</ul></details></section>
        <section class="border-b border-line py-7"><p class="text-[10px] font-bold tracking-[1.3px] text-coral">YOUR EDUCATION ROADMAP</p><h2 class="mt-1 font-display text-xl font-semibold">From ${escapeHtml(result.roadmap.grade)} toward a next step</h2><p class="mt-2 text-xs leading-5 text-[#68776f]">${escapeHtml(result.roadmap.gradeContext)} · Country context: ${escapeHtml(result.roadmap.country)} · Starting interest: ${escapeHtml(result.roadmap.interestTrack)}</p><div class="mt-4">${stages}</div><p class="mt-2 border-l-2 border-[#d89a69] bg-[#fbf5ef] px-4 py-3 text-[11px] leading-5 text-[#6f6a62]">${escapeHtml(result.roadmap.caveat)}</p></section>
        <section class="border-b border-line py-7"><p class="text-[10px] font-bold tracking-[1.3px] text-forest">PERSONAL ACTION PLAN</p><h2 class="mt-1 font-display text-xl font-semibold">Small actions, with room to change course</h2><div class="mt-3 grid gap-2 sm:grid-cols-3">${horizons}</div></section>`;
}

async function submitFeedback(event) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const rating = Number(values.get("rating"));
    if (!rating) {
        showFormError("feedback-error", "Choose a rating first.");
        return;
    }
    await submitFeedbackPayload(rating, values.get("note") || "", "#feedback-error");
}

async function submitFeedbackPayload(rating, note, errorSelector) {
    try {
        await request("/api/feedback", { method: "POST", body: JSON.stringify({ rating, note }) });
        state.feedback = { rating, note };
        render();
        showToast("Your feedback is saved with this session.");
    } catch (failure) {
        const error = document.querySelector(errorSelector);
        error.textContent = failure.message;
        error.classList.remove("hidden");
    }
}

function renderProfile() {
    const profile = state.profile;
    const values = [["Email", profile.email], ["Phone", `${profile.countryCode} ${profile.phone}`], ["Country", profile.country], ["Grade or class", profile.grade], ["Age", profile.age], ["School or location", profile.location || "Not provided"]];
    screen.innerHTML = `<div class="mx-auto max-w-4xl"><div class="border-b border-line pb-6"><p class="text-[10px] font-bold tracking-[1.4px] text-coral">YOUR PRIVATE SESSION</p><h1 class="mt-2 font-display text-[30px] font-semibold sm:text-[36px]">${escapeHtml(profile.fullName)}</h1><p class="mt-2 text-sm text-[#718078]">Your profile, reflection and feedback are linked to this browser's HttpOnly session cookie.</p></div>
        <section class="mt-7"><p class="text-[10px] font-bold tracking-[1.3px] text-forest">STUDENT DETAILS</p><dl class="mt-3 grid divide-y divide-line border-y border-line sm:grid-cols-2">${values.map(([label, value]) => `<div class="border-b border-line py-4 sm:px-4"><dt class="text-[10px] font-semibold tracking-[.6px] text-[#87938b]">${escapeHtml(label)}</dt><dd class="mt-1 break-words text-sm">${escapeHtml(value)}</dd></div>`).join("")}</dl></section>
        <section class="mt-7 border-l-2 border-[#d89a69] bg-[#fbf5ef] px-4 py-4"><h2 class="font-display text-base font-semibold">Data and session</h2><p class="mt-2 text-xs leading-5 text-[#6f6a62]">This prototype has no database. Details, answers, reflection and feedback live in server memory for up to eight hours and are cleared when the server restarts. Ending this session deletes the record immediately. Production use needs HTTPS, durable encrypted storage, verified guardian consent and a reviewed privacy policy.</p></section>
        <div class="mt-7 flex flex-wrap gap-3"><button class="cursor-pointer border border-line bg-white px-4 py-3 text-xs font-semibold text-forest hover:bg-mint" type="button" id="retake-assessment">Retake the reflection</button><button class="cursor-pointer border border-[#d9b5a7] px-4 py-3 text-xs font-semibold text-[#a44d36] hover:bg-[#fbf2ed]" type="button" id="end-session">End session and erase profile</button></div></div>`;
    document.querySelector("#retake-assessment").addEventListener("click", resetAssessment);
    document.querySelector("#end-session").addEventListener("click", endSession);
}

async function resetAssessment() {
    try {
        await request("/api/assessment/reset", { method: "POST" });
        state.answers = {};
        state.currentSection = 0;
        state.analysis = null;
        state.feedback = null;
        state.view = "questionnaire";
        render();
        screen.focus();
    } catch (failure) {
        showToast(failure.message);
    }
}

async function endSession() {
    try {
        await request("/api/session/end", { method: "POST" });
        state.profile = null;
        state.answers = {};
        state.currentSection = 0;
        state.analysis = null;
        state.feedback = null;
        state.savedPathways = [];
        state.view = "dashboard";
        render();
        showToast("Your profile and answers have been erased from this session.");
    } catch (failure) {
        showToast(failure.message);
    }
}

async function logIn(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const error = document.querySelector("#login-error");
    error.textContent = "";
    error.classList.add("hidden");
    if (!form.reportValidity()) return;
    const values = Object.fromEntries(new FormData(form).entries());
    values.privacyAcknowledged = state.privacyAcknowledged;
    const button = form.querySelector("button[type=submit]");
    button.disabled = true;
    button.textContent = "Signing in…";
    try {
        await request("/api/login", { method: "POST", body: JSON.stringify(values) });
        const session = await request("/api/session");
        state.connected = true;
        state.profile = session.profile;
        state.answers = session.answers || {};
        state.currentSection = Math.min(3, session.currentSection || 0);
        state.analysis = session.analysis;
        state.feedback = session.feedback;
        state.view = "dashboard";
        state.savedPathways = await request("/api/saved");
        closePrivacyDialog();
        render();
        screen.focus();
    } catch (failure) {
        error.textContent = failure.message === "That did not work. Please try again."
            ? "We couldn’t sign you in with those details. Check your email and password, then try again."
            : failure.message;
        error.classList.remove("hidden");
        button.disabled = false;
        button.textContent = "Log in to YourPath";
    }
}

journeyNav.addEventListener("click", (event) => {
    const sectionButton = event.target.closest("[data-section]");
    if (sectionButton && !sectionButton.disabled) {
        state.currentSection = Number(sectionButton.dataset.section);
        state.view = "questionnaire";
        render();
        screen.focus();
    }
});

function acknowledgePrivacy() {
    state.privacyAcknowledged = privacyCheckbox.checked;
    document.querySelector("#choose-signup").disabled = !state.privacyAcknowledged || !state.connected;
    document.querySelector("#choose-login").disabled = !state.privacyAcknowledged || !state.connected;
    document.querySelector("#privacy-error").classList.add("hidden");
}

authTrigger.addEventListener("click", openPrivacyDialog);
privacyCheckbox.addEventListener("change", acknowledgePrivacy);
document.querySelector("#privacy-close").addEventListener("click", closePrivacyDialog);
privacyDialog.addEventListener("click", (event) => {
    if (event.target === privacyDialog) closePrivacyDialog();
});
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !privacyDialog.classList.contains("hidden")) closePrivacyDialog();
});
document.querySelector("#choose-signup").addEventListener("click", () => {
    if (!state.connected) return;
    if (!state.privacyAcknowledged) {
        document.querySelector("#privacy-error").textContent = "Read and acknowledge the privacy and cookie notice before continuing.";
        document.querySelector("#privacy-error").classList.remove("hidden");
        return;
    }
    closePrivacyDialog();
    renderRegistration();
    screen.focus();
});
document.querySelector("#choose-login").addEventListener("click", () => {
    if (!state.privacyAcknowledged || !state.connected) return;
    authChoices.classList.add("hidden");
    loginPanel.classList.remove("hidden");
    loginPanel.querySelector("input[name=email]").focus();
});
document.querySelector("#login-back").addEventListener("click", () => {
    loginPanel.classList.add("hidden");
    authChoices.classList.remove("hidden");
    document.querySelector("#choose-signup").focus();
});
document.querySelector("#login-form").addEventListener("submit", logIn);
authSignup.addEventListener("click", openPrivacyDialog);
document.addEventListener("click", event => {
    const viewButton = event.target.closest("[data-view]");
    const careerButton = event.target.closest("[data-career]");
    if (viewButton && !viewButton.disabled) {
        if (!state.profile) openPrivacyDialog();
        else setView(viewButton.dataset.view);
        return;
    }
    if (careerButton) {
        state.selectedCareerId = careerButton.dataset.career;
        setView("pathway-detail");
    }
});
window.addEventListener("resize", renderNavigation);
logoutButton.addEventListener("click", async () => {
    try {
        await request("/api/logout", { method: "POST" });
        state.profile = null;
        state.answers = {};
        state.currentSection = 0;
        state.analysis = null;
        state.feedback = null;
        state.savedPathways = [];
        state.view = "dashboard";
        render();
        showToast("You are logged out. Your in-memory account is still available to log back in.");
    } catch (failure) {
        showToast(failure.message);
    }
});

async function initialize() {
    try {
        const session = await request("/api/session");
        state.connected = true;
        state.profile = session.profile;
        state.answers = session.answers || {};
        state.currentSection = Math.min(3, session.currentSection || 0);
        state.analysis = session.analysis;
        state.feedback = session.feedback;
        state.view = "dashboard";
        state.savedPathways = session.registered ? await request("/api/saved") : [];
        render();
    } catch {
        state.connected = false;
        render();
    }
}

initialize();