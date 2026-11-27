const output = document.querySelector("#terminal-output");
const form = document.querySelector("#terminal-form");
const input = document.querySelector("#terminal-input");
const clearButton = document.querySelector("#clear-button");
const yearEl = document.querySelector("#year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const cmdHistory = [];
let historyIndex = 0;

/* GitHub cache */
let githubCache = null;
let githubCacheTime = 0;
const GITHUB_CACHE_MS = 5 * 60 * 1000;

const skillsData = [
  { key: "Python", level: 78 },
  { key: "JavaScript", level: 72 },
  { key: "HTML / CSS", level: 85 },
  { key: "Linux", level: 80 },
  { key: "Git", level: 82 },
  { key: "PostgreSQL", level: 65 },
  { key: "Docker", level: 60 },
  { key: "Ansible", level: 55 },
  { key: "Redes", level: 70 },
];

function bar(level) {
  const filled = Math.round(level / 5);
  const empty = 20 - filled;
  return "█".repeat(filled) + "░".repeat(empty) + ` ${level}%`;
}

/* ---------- Output helpers ---------- */
function line(kind, text) {
  const p = document.createElement("p");
  p.className = kind === "normal" ? "" : kind;

  const m = text.match(/(https?:\/\/\S+|mailto:\S+)/);
  const email =
    !m && kind === "link"
      ? text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)
      : null;

  if (kind === "link" && (m || email)) {
    const match = m || email;
    p.append(document.createTextNode(text.slice(0, match.index)));
    const a = document.createElement("a");
    a.href = m
      ? m[0]
      : `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email[0])}`;
    a.textContent = match[0];
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    p.append(a);
    if (match.index + match[0].length < text.length) {
      p.append(document.createTextNode(text.slice(match.index + match[0].length)));
    }
  } else {
    p.textContent = text;
  }

  output.append(p);
  output.scrollTop = output.scrollHeight;
}

function print(lines, delay = 42) {
  lines.forEach(([k, txt], i) => setTimeout(() => line(k, txt), i * delay));
}

/* ---------- GitHub ---------- */
async function fetchGithubRepos() {
  const now = Date.now();
  if (githubCache && now - githubCacheTime < GITHUB_CACHE_MS) return githubCache;

  try {
    const res = await fetch(
      "https://api.github.com/users/jlmzin/repos?sort=updated&per_page=12&type=owner",
      { headers: { Accept: "application/vnd.github+json" } },
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const repos = data
      .filter((r) => !r.fork)
      .map((r) => ({
        name: r.name,
        desc: r.description || null,
        lang: r.language || "—",
        stars: r.stargazers_count,
        url: r.html_url,
      }));
    githubCache = repos;
    githubCacheTime = now;
    return repos;
  } catch (err) {
    console.warn("GitHub API:", err);
    return null;
  }
}

async function showProjects() {
  const L = t();
  line("muted", L.projectsLoading);

  // Catalog summary from curated projects
  if (typeof PROJECTS !== "undefined" && PROJECTS.length) {
    line("output-title", L.projectsFeatured || "FEATURED");
    PROJECTS.forEach((p) => {
      const info = p.i18n[currentLang] || p.i18n.pt;
      const status = (L.projectStatus && L.projectStatus[p.status]) || p.status;
      line("normal", `★ ${p.name}  [${status}]`);
      line("muted", `  ${info.tagline}`);
      line("muted", `  ${L.stackLabel} ${p.tech.join(" · ")}`);
      if (p.github) line("link", `  ${p.github}`);
      line("muted", "");
    });
    line("yellow", currentLang === "pt"
      ? "Catálogo visual abaixo — use os filtros e abra os detalhes."
      : "Visual catalog below — use filters and open details.");
    if (window.JLMProjects) {
      setTimeout(() => window.JLMProjects.scrollTo(), 400);
    }
  }

  const repos = await fetchGithubRepos();

  if (repos && repos.length > 0) {
    line("yellow", L.projectsOk(repos.length));
    line("output-title", L.projectsRecent);
    repos.slice(0, 8).forEach((r) => {
      const star = r.stars > 0 ? ` ★${r.stars}` : "";
      line("normal", `• ${r.name}${star}  [${r.lang}]`);
      if (r.desc) line("muted", `  ${r.desc}`);
      else line("muted", `  ${L.noDesc}`);
      line("link", `  ${r.url}`);
    });
    line("muted", "");
    line("link", L.projectsViewAll);
  } else {
    line("yellow", L.projectsFallback);
    line("link", L.projectsViewAll);
    line("muted", L.projectsOffline);
  }
}

/* ---------- Theme ---------- */
function applyTheme(name) {
  const root = document.documentElement;
  const themes = {
    green: { "--green": "#43e69a", "--accent-glow": "rgba(67,230,154,0.35)" },
    cyan: { "--green": "#3ecfcf", "--accent-glow": "rgba(62,207,207,0.35)" },
    purple: { "--green": "#b388ff", "--accent-glow": "rgba(179,136,255,0.35)" },
    amber: { "--green": "#ffb74d", "--accent-glow": "rgba(255,183,77,0.35)" },
  };
  const th = themes[name];
  if (!th) return false;
  Object.entries(th).forEach(([k, v]) => root.style.setProperty(k, v));
  root.dataset.theme = name;
  return true;
}

/* ---------- Curriculum download ---------- */
function downloadCurriculum() {
  const a = document.createElement("a");
  a.href = "assets/Juan_Lima_Machado_Curriculum.pdf";
  a.download = "Juan_Lima_Machado_Curriculum.pdf";
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

/* ---------- Commands ---------- */
const commandFns = {
  help: () => t().help,
  about: () => t().about,
  projects: null, // async
  skills: () => {
    const L = t();
    const lines = [["output-title", L.skillsTitle], ["muted", ""]];
    skillsData.forEach((s) => {
      const name = (L.skillNames && L.skillNames[s.key]) || s.key;
      lines.push(["normal", `${name.padEnd(12)} ${bar(s.level)}`]);
    });
    lines.push(["muted", ""]);
    lines.push(["normal", L.skillsAreas]);
    return lines;
  },
  social: () => {
    const L = t();
    return [
      ["output-title", L.socialTitle],
      ["link", "GitHub     → https://github.com/jlmzin"],
      ["link", "LinkedIn   → https://www.linkedin.com/in/juan-lima-machado/"],
      ["link", "Instagram  → https://www.instagram.com/jlm.rss/"],
    ];
  },
  contact: () => {
    const L = t();
    return [
      ["output-title", L.contactTitle],
      ["link", "E-mail     → juanllimacont1@gmail.com"],
      ["link", "LinkedIn   → https://www.linkedin.com/in/juan-lima-machado/"],
      ["link", "Instagram  → https://www.instagram.com/jlm.rss/"],
      ["muted", L.contactHint],
    ];
  },
  curriculum: () => {
    downloadCurriculum();
    return t().curriculum;
  },
  neofetch: () => {
    const L = t();
    const up = Math.floor(
      (Date.now() - (performance.timing?.navigationStart || Date.now())) / 1000,
    );
    const mins = Math.floor(up / 60);
    const secs = up % 60;
    return [
      ["green", "          jlm@portfolio"],
      ["green", "          -------------"],
      ["normal", "OS       " + L.neofetch.os],
      ["normal", "Host     " + L.neofetch.host],
      ["normal", "Kernel   " + L.neofetch.kernel],
      ["normal", "Shell    " + L.neofetch.shell],
      ["normal", "Theme    " + (document.documentElement.dataset.theme || "green")],
      ["normal", "Lang     " + currentLang],
      ["normal", "Uptime   " + (mins ? `${mins}m ${secs}s` : `${secs}s`)],
      ["normal", "Packages Python, JS, Docker, Ansible, Git..."],
      ["normal", "Resolution " + window.innerWidth + "x" + window.innerHeight],
      ["muted", ""],
      ["yellow", "███  ███  ███  ███"],
      ["yellow", "green cyan purple amber"],
    ];
  },
  whoami: () => t().whoami,
  fortune: () => {
    const L = t();
    const q = L.quotes[Math.floor(Math.random() * L.quotes.length)];
    return [
      ["output-title", L.fortuneTitle],
      ["yellow", `"${q}"`],
    ];
  },
  ls: () => t().ls,
  pwd: () => [["normal", "/home/jlm/portfolio"]],
  date: () => {
    const locale = currentLang === "pt" ? "pt-BR" : "en-US";
    return [
      [
        "normal",
        new Date().toLocaleString(locale, {
          dateStyle: "full",
          timeStyle: "medium",
        }),
      ],
    ];
  },
  uptime: () => {
    const up = Math.floor(
      (Date.now() - (performance.timing?.navigationStart || Date.now())) / 1000,
    );
    const h = Math.floor(up / 3600);
    const m = Math.floor((up % 3600) / 60);
    const s = up % 60;
    return [["normal", `up ${h}h ${m}m ${s}s`]];
  },
  history: () => {
    if (cmdHistory.length === 0) return [["muted", t().historyEmpty]];
    return cmdHistory.map((c, i) => ["normal", `  ${i + 1}  ${c}`]);
  },
  version: () => t().version,
};

const names = [
  ...Object.keys(commandFns),
  "lang",
  "theme",
  "matrix",
  "echo",
  "sudo",
  "clear",
  "projects",
];

/* ---------- Runner ---------- */
function run(raw) {
  const v = raw.trim();
  if (!v) return;

  const L = t();
  line("muted", L.promptVisitor(v));

  const parts = v.toLowerCase().replace(/^\/+/, "").split(/\s+/);
  const c = parts[0];
  const arg = parts.slice(1).join(" ");

  if (c === "clear") {
    output.replaceChildren();
    return;
  }

  if (c === "projects") {
    showProjects();
    return;
  }

  if (c === "lang" || c === "language" || c === "idioma") {
    if (!arg) {
      print([
        ["yellow", L.langUsage],
        ["muted", L.langCurrent(currentLang)],
      ]);
      return;
    }
    if (setLang(arg)) {
      print([["green", t().langChanged(arg)]]);
    } else {
      print([["output-error", L.langUnknown(arg)]]);
    }
    return;
  }

  if (c === "theme") {
    if (!arg) {
      print([
        ["yellow", L.themeUsage],
        [
          "muted",
          L.themeCurrent(document.documentElement.dataset.theme || "green"),
        ],
      ]);
      return;
    }
    if (applyTheme(arg)) {
      print([["green", L.themeChanged(arg)]]);
    } else {
      print([["output-error", L.themeUnknown(arg)]]);
    }
    return;
  }

  if (c === "matrix") {
    const canvas = document.querySelector("#matrix-canvas");
    if (!arg || arg === "on") {
      canvas.style.opacity = "";
      document.documentElement.dataset.matrixBoost = "0";
      print([["green", L.matrixOn]]);
    } else if (arg === "off") {
      canvas.style.opacity = "0";
      print([["muted", L.matrixOff]]);
    } else if (arg === "boost") {
      canvas.style.opacity = "0.22";
      document.documentElement.dataset.matrixBoost = "1";
      print([["yellow", L.matrixBoost]]);
    } else {
      print([["yellow", L.matrixUsage]]);
    }
    return;
  }

  if (c === "echo") {
    print([["normal", arg || ""]]);
    return;
  }

  if (c === "sudo") {
    print(L.sudo);
    return;
  }

  if (commandFns[c]) {
    const result = commandFns[c]();
    if (result) print(result, c === "about" || c === "skills" ? 55 : 40);
    return;
  }

  line("output-error", L.cmdNotFound(v));
}

/* ---------- Events ---------- */
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const v = input.value;
  if (!v.trim()) return;
  cmdHistory.push(v);
  historyIndex = cmdHistory.length;
  run(v);
  input.value = "";
});

input.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    e.preventDefault();
    if (historyIndex > 0) input.value = cmdHistory[--historyIndex];
  } else if (e.key === "ArrowDown") {
    e.preventDefault();
    if (historyIndex < cmdHistory.length - 1) {
      input.value = cmdHistory[++historyIndex];
    } else {
      historyIndex = cmdHistory.length;
      input.value = "";
    }
  } else if (e.key === "Tab") {
    e.preventDefault();
    const q = input.value.toLowerCase().trim().replace(/^\/+/, "");
    const matches = names.filter((n) => n.startsWith(q));
    if (matches.length === 1) input.value = matches[0];
    else if (matches.length > 1) line("muted", t().suggestions(matches.join(" · ")));
  }
});

clearButton.addEventListener("click", () => {
  output.replaceChildren();
});

/* Clock */
const clockEl = document.querySelector("#terminal-clock");
function tickClock() {
  const n = new Date();
  if (clockEl) {
    const locale = currentLang === "pt" ? "pt-BR" : "en-US";
    const dateFmt = new Intl.DateTimeFormat(locale, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    const timeFmt = new Intl.DateTimeFormat(locale, {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    clockEl.dateTime = n.toISOString();
    clockEl.textContent = `${dateFmt.format(n)} · ${timeFmt.format(n)}`;
  }
  setTimeout(tickClock, 1000 - n.getMilliseconds());
}
tickClock();

/* Quick shortcuts */
document.querySelectorAll("[data-cmd]").forEach((b) =>
  b.addEventListener("click", () => {
    const v = b.dataset.cmd;
    cmdHistory.push(v);
    historyIndex = cmdHistory.length;
    run(v);
  }),
);

/* Boot */
function bootSequence() {
  const bootLines = t().boot;
  output.replaceChildren();
  let i = 0;
  function next() {
    if (i >= bootLines.length) {
      input.focus();
      return;
    }
    line(bootLines[i][0], bootLines[i][1]);
    i++;
    setTimeout(next, i < 9 ? 100 : 70);
  }
  next();
}

setTimeout(bootSequence, 280);
