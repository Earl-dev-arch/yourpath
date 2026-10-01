const pathDetails = {
    "Find work that feels like you": {
        category: "CAREER & GROWTH",
        steps: ["Get to know yourself", "Explore what’s out there", "Try something small", "Make your next move"]
    },
    "Learn something new": {
        category: "LEARNING",
        steps: ["Choose what sparks your curiosity", "Find a way to learn", "Make time to practice", "Celebrate what you can do"]
    },
    "Make space for a big idea": {
        category: "JUST FOR YOU",
        steps: ["Name the idea that matters", "Give it a little space", "Make your first small thing", "Share it with the world"]
    }
};

const storageKey = "yourpath-dashboard";
const milestonesElement = document.querySelector("#milestones");
const progressCount = document.querySelector("#progress-count");
const progressBar = document.querySelector("#progress-bar");
const progressTrack = document.querySelector(".progress-track");
const activePathTitle = document.querySelector("#active-path-title");
const pathCategory = document.querySelector(".path-category");
const toast = document.querySelector("#toast");
let toastTimer;

function loadSavedState() {
    try {
        return JSON.parse(localStorage.getItem(storageKey) || "null");
    } catch {
        return null;
    }
}

let savedState = loadSavedState();
let activePath = pathDetails[savedState?.path] ? savedState.path : "Find work that feels like you";

function saveState() {
    try {
        localStorage.setItem(storageKey, JSON.stringify({
            path: activePath,
            completed: Array.from(milestonesElement.querySelectorAll("input[type='checkbox']"), (input) => input.checked)
        }));
    } catch {
        showToast("Your progress is saved for this visit.");
    }
}

function renderMilestones(completed = []) {
    const steps = pathDetails[activePath].steps;
    milestonesElement.replaceChildren(...steps.map((step, index) => {
        const label = document.createElement("label");
        label.className = "milestone relative flex min-h-[38px] cursor-pointer items-center gap-2 border-b border-[#eff1ee] min-[601px]:min-h-[39px] min-[601px]:gap-2.5";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = Boolean(completed[index]);
        checkbox.className = "peer absolute h-px w-px opacity-0 focus-visible:ring-2 focus-visible:ring-[#a5c3a8]";
        checkbox.setAttribute("aria-label", `${step} complete`);

        const checkmark = document.createElement("span");
        checkmark.className = "grid h-4 w-4 shrink-0 place-items-center rounded-full border border-[#d4ddd5] text-[9px] text-transparent transition peer-checked:border-[#6e9476] peer-checked:bg-[#6e9476] peer-checked:text-white";
        checkmark.setAttribute("aria-hidden", "true");
        checkmark.textContent = "✓";

        const title = document.createElement("span");
        title.className = "text-[9px] text-[#59675f] peer-checked:text-[#9aa59d] min-[601px]:text-[10px]";
        title.textContent = step;

        const status = document.createElement("span");
        status.className = "milestone-status ml-auto text-[6px] font-bold tracking-[1.15px] text-[#adb6af] min-[601px]:text-[7px]";
        status.textContent = checkbox.checked ? "DONE" : "AHEAD";

        label.append(checkbox, checkmark, title, status);
        return label;
    }));
    updateProgress();
}

function updateProgress() {
    const milestones = Array.from(milestonesElement.querySelectorAll(".milestone"));
    const complete = milestones.filter((milestone) => milestone.querySelector("input").checked).length;
    const next = milestones.find((milestone) => !milestone.querySelector("input").checked);
    const percentage = Math.round((complete / milestones.length) * 100);

    milestones.forEach((milestone) => {
        const checkbox = milestone.querySelector("input");
        const status = milestone.querySelector(".milestone-status");
        status.textContent = checkbox.checked ? "DONE" : milestone === next ? "UP NEXT" : "AHEAD";
    });

    progressCount.textContent = `${complete} of ${milestones.length} steps`;
    progressBar.style.width = `${percentage}%`;
    progressTrack.setAttribute("aria-label", `${percentage} percent complete`);
}

function showToast(message) {
    toast.textContent = message;
    toast.dataset.visible = "true";
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => delete toast.dataset.visible, 2600);
}

function selectPath(path) {
    if (!pathDetails[path]) return;
    activePath = path;
    activePathTitle.textContent = path;
    pathCategory.textContent = pathDetails[path].category;
    renderMilestones();
    saveState();
    showToast(`Your path is now “${path}”.`);
    document.querySelector("#roadmap").scrollIntoView({ behavior: "smooth", block: "start" });
}

function filterPaths(query) {
    const normalizedQuery = query.trim().toLowerCase();
    let visibleCount = 0;

    document.querySelectorAll(".direction-card").forEach((card) => {
        const matches = card.dataset.search.includes(normalizedQuery)
            || card.textContent.toLowerCase().includes(normalizedQuery);
        card.hidden = !matches;
        if (matches) visibleCount += 1;
    });

    document.querySelector("#empty-search").hidden = visibleCount !== 0;
}

const savedCompleted = savedState?.path === activePath && Array.isArray(savedState.completed)
    ? savedState.completed
    : [true, false, false, false];
activePathTitle.textContent = activePath;
pathCategory.textContent = pathDetails[activePath].category;
renderMilestones(savedCompleted);

milestonesElement.addEventListener("change", (event) => {
    if (event.target.matches("input[type='checkbox']")) {
        updateProgress();
        saveState();
    }
});

document.querySelectorAll("[data-path]").forEach((button) => {
    button.addEventListener("click", () => selectPath(button.dataset.path));
});

document.querySelector("#path-search").addEventListener("input", (event) => filterPaths(event.target.value));
document.querySelector("#edit-path").addEventListener("click", () => {
    document.querySelector("#explore").scrollIntoView({ behavior: "smooth", block: "start" });
    document.querySelector("#path-search").focus({ preventScroll: true });
});

document.querySelector("#continue-path").addEventListener("click", () => {
    const nextMilestone = milestonesElement.querySelector("input:not(:checked)");
    if (!nextMilestone) {
        showToast("You’ve completed every step. Take a moment to celebrate.");
        return;
    }
    nextMilestone.checked = true;
    updateProgress();
    saveState();
    showToast("A little more progress, made.");
});

document.querySelector(".icon-button").addEventListener("click", () => showToast("You’re all caught up. Keep going at your own pace."));
document.querySelector(".profile-button").addEventListener("click", () => showToast("Welcome back, Alex. This is your space."));

document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
        document.querySelectorAll(".nav-link").forEach((item) => {
            if (item === link) item.setAttribute("aria-current", "page");
            else item.removeAttribute("aria-current");
        });
    });
});

const today = new Intl.DateTimeFormat("en", { weekday: "long", month: "long", day: "numeric" }).format(new Date());
document.querySelector("#today-date").textContent = today.toUpperCase();