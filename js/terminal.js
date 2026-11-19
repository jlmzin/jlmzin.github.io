const output = document.querySelector("#terminal-output"),
  form = document.querySelector("#terminal-form"),
  input = document.querySelector("#terminal-input"),
  clearButton = document.querySelector("#clear-button");
document.querySelector("#year").textContent = new Date().getFullYear();
const cmdHistory = [];
let historyIndex = 0;
const about = [
  ["muted", "[ profile.service ] iniciando consulta..."],
  ["muted", "GET /api/profile/juan-lima-machado"],
  ["yellow", "200 OK — perfil localizado"],
  ["output-title", "IDENTIFICAÇÃO"],
  [
    "normal",
    "Cientista da Computação, com interesse em desenvolvimento de software, infraestrutura de TI, redes e automação.",
  ],
  ["output-title", "EXPERIÊNCIA"],
  [
    "normal",
    "Possuo experiência prática em suporte técnico, montagem e manutenção de computadores, configuração de dispositivos, monitoramento de redes, diagnóstico e resolução de problemas técnicos.",
  ],
  ["output-title", "STACK & FERRAMENTAS"],
  ["normal", "Python · Java · C# · JavaScript · HTML · CSS"],
  ["normal", ".NET · Git · PostgreSQL · Docker"],
  ["output-title", "ÁREAS DE INTERESSE"],
  ["normal", "DevOps · Computação em nuvem · Infraestrutura como código (IaC)"],
  [
    "normal",
    "Contato com ferramentas de automação e gerenciamento de configuração, como Ansible.",
  ],
  ["muted", "[ profile.service ] consulta concluída."],
];
const commands = {
  help: () => [
    ["output-title", "COMANDOS DISPONÍVEIS"],
    ["yellow", "about — consulta meu perfil"],
    ["yellow", "projects — abre meus repositórios"],
    ["yellow", "social — exibe links profissionais"],
    ["yellow", "skills — tecnologias e áreas de interesse"],
    ["yellow", "contact — informações de contato"],
    ["yellow", "clear — limpa o terminal"],
    [
      "muted",
      "Use ↑/↓ para navegar pelo histórico e Tab para completar comandos.",
    ],
  ],
  about: () => about,
  projects: () => [
    ["muted", "[ github.service ] consultando repositórios públicos..."],
    ["yellow", "200 OK — repositórios localizados"],
    [
      "link",
      "Abrir todos os repositórios: https://github.com/jlmzin?tab=repositories",
    ],
  ],
  social: () => [
    ["output-title", "LINKS PROFISSIONAIS"],
    ["link", "GitHub: https://github.com/jlmzin"],
    ["link", "LinkedIn: https://www.linkedin.com/in/juan-lima-machado/"],
    ["link", "Instagram: https://www.instagram.com/jlm.rss/"],
  ],
  skills: () => [
    ["output-title", "TECNOLOGIAS & FERRAMENTAS"],
    ["normal", "Python · Java · C# · JavaScript · HTML · CSS"],
    ["normal", ".NET · Git · PostgreSQL · Docker · Ansible"],
    ["normal", "Desenvolvimento · Infraestrutura · Redes · Automação"],
  ],
  contact: () => [
    ["output-title", "CONTATO PROFISSIONAL"],
    ["link", "E-mail: juanllimacont1@gmail.com"],
    ["link", "Instagram: https://www.instagram.com/jlm.rss/"],
    ["link", "LinkedIn: https://www.linkedin.com/in/juan-lima-machado/"],
  ],
};
const names = [...Object.keys(commands), "clear"];

function line(kind, text) {
    const p = document.createElement('p');
    p.className = kind === 'normal' ? '' : kind;

    const m = text.match(/(https?:\/\/\S+|mailto:\S+)/);
    const email = !m && kind === 'link'
        ? text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)
        : null;

    if (kind === 'link' && (m || email)) {
        const match = m || email;

        p.append(document.createTextNode(text.slice(0, match.index)));

        const a = document.createElement('a');

        a.href = m
            ? m[0]
            : `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email[0])}`;

        a.textContent = match[0];
        a.target = '_blank';
        a.rel = 'noopener noreferrer';

        p.append(a);
    } else {
        p.textContent = text;
    }

    output.append(p);
    output.scrollTop = output.scrollHeight;
}

function print(lines, delay = 65) {
  lines.forEach(([k, t], i) => setTimeout(() => line(k, t), i * delay));
}
function run(raw) {
  const v = raw.trim();
  if (!v) return;
  line("muted", `visitor@jlm-dev:~$ ${v}`);
  const c = v.toLowerCase().replace(/^\/+/, "");
  if (c === "clear") {
    output.replaceChildren();
    return;
  }
  if (commands[c]) {
    print(commands[c](), c === "about" ? 75 : 65);
    return;
  }
  line(
    "output-error",
    `Comando não encontrado: ${v}. Digite help para ver as opções.`,
  );
}
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
    if (historyIndex < cmdHistory.length - 1)
      input.value = cmdHistory[++historyIndex];
    else {
      historyIndex = cmdHistory.length;
      input.value = "";
    }
  } else if (e.key === "Tab") {
    e.preventDefault();
    const q = input.value.toLowerCase().trim().replace(/^\/+/, ""),
      matches = names.filter((n) => n.startsWith(q));
    if (matches.length === 1) input.value = matches[0];
    else if (matches.length > 1)
      line("muted", `Sugestões: ${matches.join(" · ")}`);
  }
});
clearButton.addEventListener("click", () => output.replaceChildren());

/* Relógio em tempo real (horário e data locais do visitante) */
const clockEl = document.querySelector("#terminal-clock"),
  dateFmt = new Intl.DateTimeFormat("pt-BR", {
    weekday: "short",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }),
  timeFmt = new Intl.DateTimeFormat("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZoneName: "short",
  });
function tickClock() {
  const n = new Date();
  clockEl.dateTime = n.toISOString();
  clockEl.textContent = `${dateFmt.format(n)} · ${timeFmt.format(n)}`;
  setTimeout(tickClock, 1000 - n.getMilliseconds());
}
tickClock();

/* Atalhos de comandos (toque/clique) — não abrem o teclado do celular */
document.querySelectorAll("[data-cmd]").forEach((b) =>
  b.addEventListener("click", () => {
    const v = b.dataset.cmd;
    cmdHistory.push(v);
    historyIndex = cmdHistory.length;
    run(v);
  }),
);
