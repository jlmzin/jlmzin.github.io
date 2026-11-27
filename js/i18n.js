/* JLM.DEV — internationalization (pt / en) */
const I18N = {
  pt: {
    // UI
    statusOnline: "SYSTEM ONLINE",
    clearBtn: "CLEAR",
    execBtn: "EXECUTAR",
    inputPlaceholder: "Digite um comando...",
    hintKeys: "help · ↑/↓ histórico · Tab autocomplete",
    hintTouch: "toque nos atalhos acima",
    techPrompt: "root@jlm-dev:~$ ls ./tecnologias",
    techTitle: "Minhas ",
    techAccent: "tecnologias",
    socialPrompt: "root@jlm-dev:~$ ls ./social-links",
    socialTitle: "Conecte-se ",
    socialAccent: "comigo",
    footerBuilt: "Construído com curiosidade e código.",
    eyebrow: "HELLO, WORLD. I'M",
    role1: "Computer Science",
    role2: "Developer in Progress",
    summary: "Desenvolvimento · Redes · Infraestrutura · Suporte · DevOps",

    // Tech cards
    tech: {
      python: "Automação, scripts e análise de dados",
      javascript: "Lógica e interatividade na web",
      html: "Estrutura e semântica de páginas",
      css: "Layout, responsividade e animações",
      linux: "Terminal, administração e servidores",
      redes: "Monitoramento, configuração e diagnóstico",
      postgresql: "Gerenciamento e manipulação de dados",
      docker: "Contêineres, virtualização e DevOps",
      ansible: "Automação de configuração e deploy",
      git: "Controle de versão e colaboração",
    },

    // Social cards
    socialCards: {
      github: "Projetos, códigos e experimentos",
      email: "Contato profissional",
      instagram: "Contato e conteúdo",
      linkedin: "Perfil e trajetória profissional",
    },

    // Identity animation
    idIdentifying: "[SYSTEM] Identifying user...",
    idError: "[ERROR] Identity mismatch detected.",
    idCorrecting: "[SYSTEM] Correcting identity...",
    idSuccess: "[SUCCESS] Identity corrected.",

    // Boot
    boot: [
      ["muted", "JLM.DEV BIOS v2.2"],
      ["muted", "Initializing modules..."],
      ["yellow", "✓ network stack"],
      ["yellow", "✓ particle engine"],
      ["yellow", "✓ matrix renderer"],
      ["yellow", "✓ github client"],
      ["yellow", "✓ i18n (pt/en)"],
      ["yellow", "✓ terminal shell"],
      ["green", "System ready."],
      ["muted", ""],
      ["normal", "Bem-vindo ao meu espaço na web."],
      ["yellow", "Digite help para ver os comandos. Use lang en para inglês."],
    ],

    // Commands meta
    cmdNotFound: (v) => `Comando não encontrado: ${v}. Digite help para ver as opções.`,
    promptVisitor: (v) => `visitor@jlm-dev:~$ ${v}`,
    suggestions: (list) => `Sugestões: ${list}`,
    historyEmpty: "Histórico vazio.",

    help: [
      ["output-title", "COMANDOS DISPONÍVEIS"],
      ["yellow", "about       — consulta meu perfil completo"],
      ["yellow", "projects    — repositórios (GitHub ao vivo + destaques)"],
      ["yellow", "skills      — tecnologias com níveis"],
      ["yellow", "social      — links profissionais"],
      ["yellow", "contact     — informações de contato"],
      ["yellow", "curriculum  — baixa meu currículo em PDF"],
      ["yellow", "neofetch    — informações do sistema (estilo)"],
      ["yellow", "whoami      — identidade do usuário"],
      ["yellow", "lang        — troca o idioma (pt | en)"],
      ["yellow", "theme       — muda o tema (green|cyan|purple|amber)"],
      ["yellow", "matrix      — controla o efeito matrix (on|off|boost)"],
      ["yellow", "fortune     — uma citação aleatória"],
      ["yellow", "clear       — limpa o terminal"],
      ["muted", ""],
      ["muted", "Extras: ls · pwd · date · uptime · echo · history · version · sudo"],
      ["muted", "↑/↓ histórico · Tab autocomplete · clique nos atalhos"],
    ],

    about: [
      ["muted", "[ profile.service ] iniciando consulta..."],
      ["muted", "GET /api/profile/juan-lima-machado"],
      ["yellow", "200 OK — perfil localizado"],
      ["output-title", "IDENTIFICAÇÃO"],
      [
        "normal",
        "Juan Lima Machado — Cientista da Computação em formação, com interesse em desenvolvimento de software, infraestrutura de TI, redes e automação.",
      ],
      ["output-title", "EXPERIÊNCIA"],
      [
        "normal",
        "Experiência prática em suporte técnico, montagem e manutenção de computadores, configuração de dispositivos, monitoramento de redes, diagnóstico e resolução de problemas técnicos.",
      ],
      ["output-title", "STACK & FERRAMENTAS"],
      ["normal", "Python · JavaScript · HTML · CSS · Git"],
      ["normal", "PostgreSQL · Docker · Ansible · Linux"],
      ["output-title", "ÁREAS DE INTERESSE"],
      ["normal", "DevOps · Computação em nuvem · Infraestrutura como Código (IaC)"],
      ["normal", "Automação de infraestrutura · Redes · Suporte e operações"],
      ["muted", "[ profile.service ] consulta concluída."],
    ],

    skillsTitle: "TECNOLOGIAS & NÍVEIS",
    skillsAreas: "Áreas: Desenvolvimento · Infraestrutura · Redes · Automação · DevOps",
    skillNames: {
      Python: "Python",
      JavaScript: "JavaScript",
      "HTML / CSS": "HTML / CSS",
      Linux: "Linux",
      Git: "Git",
      PostgreSQL: "PostgreSQL",
      Docker: "Docker",
      Ansible: "Ansible",
      Redes: "Redes",
    },

    socialTitle: "LINKS PROFISSIONAIS",
    contactTitle: "CONTATO PROFISSIONAL",
    contactHint: "Sinta-se à vontade para entrar em contato!",

    curriculum: [
      ["muted", "[ curriculum.service ] preparando download..."],
      ["yellow", "200 OK — arquivo gerado"],
      ["output-title", "CURRÍCULO"],
      ["normal", "Juan_Lima_Machado_Curriculum.pdf"],
      ["green", "Download iniciado no navegador."],
      ["muted", "Se não baixou automaticamente, use o link abaixo:"],
      ["link", "assets/Juan_Lima_Machado_Curriculum.pdf"],
    ],

    projectsLoading: "[ github.service ] consultando repositórios públicos...",
    projectsOk: (n) => `200 OK — ${n} repositório(s) encontrado(s)`,
    projectsFallback: "200 OK — usando cache local (API indisponível)",
    projectsFeatured: "PROJETOS EM DESTAQUE",
    projectsRecent: "REPOSITÓRIOS RECENTES (GitHub)",
    projectsViewAll: "Ver todos → https://github.com/jlmzin?tab=repositories",
    projectsOffline: "Conecte-se à internet para listar repositórios ao vivo.",
    projectsFallbackItems: [
      ["normal", "• Experimentos — Scripts de automação, redes e Linux"],
      ["normal", "• Estudos — Projetos acadêmicos e protótipos"],
    ],
    featured: [
      {
        name: "JLM.DEV",
        desc: "Portfólio interativo com interface de terminal, temas, matrix rain e navegação por comandos.",
        stack: "HTML · CSS · JavaScript",
        url: "https://github.com/jlmzin/jlmzin.github.io",
      },
    ],
    noDesc: "Sem descrição",
    stackLabel: "Stack:",

    whoami: [
      ["normal", "visitor@jlm-dev"],
      ["muted", "Você está navegando no portfólio de Juan Lima Machado."],
      ["muted", "Digite about para saber mais sobre o host."],
    ],

    fortuneTitle: "FORTUNE",
    quotes: [
      "O melhor código é aquele que você não precisa escrever.",
      "Primeiro resolva o problema. Depois escreva o código.",
      "Simplicidade é a sofisticação máxima. — Leonardo da Vinci",
      "Talk is cheap. Show me the code. — Linus Torvalds",
      "A melhor maneira de prever o futuro é implementá-lo.",
      "Código legível é código que você consegue entender daqui a 6 meses.",
      "Automação: porque humanos têm coisas melhores para fazer.",
      "DevOps não é uma ferramenta. É uma cultura.",
      "Se funciona, não mexa... a menos que você tenha testes.",
      "Root é poder. Use com responsabilidade.",
    ],

    langUsage: "Uso: lang <pt|en>",
    langCurrent: (l) => `Idioma atual: ${l}`,
    langChanged: (l) => `Idioma alterado para → ${l}`,
    langUnknown: (l) => `Idioma desconhecido: ${l}. Opções: pt, en`,

    themeUsage: "Uso: theme <green|cyan|purple|amber>",
    themeCurrent: (t) => `Tema atual: ${t}`,
    themeChanged: (t) => `Tema alterado para → ${t}`,
    themeUnknown: (t) => `Tema desconhecido: ${t}. Opções: green, cyan, purple, amber`,

    matrixOn: "Matrix rain: ativo",
    matrixOff: "Matrix rain: desativado",
    matrixBoost: "Matrix rain: BOOST mode ⚡",
    matrixUsage: "Uso: matrix [on|off|boost]",

    sudo: [
      ["output-error", "visitor is not in the sudoers file."],
      ["muted", "This incident will be reported... just kidding 😄"],
      ["yellow", "Dica: você já tem todos os privilégios neste terminal."],
    ],

    neofetch: {
      os: "JLM.DEV Shell 2.2",
      host: "Juan Lima Machado",
      kernel: "HTML5 + CSS3 + Vanilla JS",
      shell: "interactive-terminal",
    },

    version: [
      ["output-title", "JLM.DEV Shell"],
      ["normal", "versão 2.2.0 — multilingual edition"],
      ["muted", "Built with curiosity and code."],
    ],

    ls: [
      ["normal", "about.md   projects/   skills.json   social/"],
      ["normal", "contact.txt  curriculum.pdf   README.md   secrets/"],
    ],

    projectsSectionPrompt: "root@jlm-dev:~$ ls ./projects",
    projectsSectionTitle: "Meus ",
    projectsSectionAccent: "projetos",
    projectsSectionSub: "Catálogo com filtros, status e detalhes",
    projectsFilterCategory: "Categoria",
    projectsFilterTech: "Tecnologia",
    projectsCode: "Código",
    projectsDemo: "Demo",
    projectsDetails: "Detalhes",
    projectsEmpty: "Nenhum projeto corresponde a estes filtros.",
    projectsGoals: "Objetivos",
    projectsFeatures: "Funcionalidades",
    projectStatus: { live: "No ar", wip: "Em desenvolvimento", concept: "Conceito" },
    projectCategories: {
      all: "Todos",
      web: "Web",
      database: "Banco de dados",
    },
  },

  en: {
    statusOnline: "SYSTEM ONLINE",
    clearBtn: "CLEAR",
    execBtn: "RUN",
    inputPlaceholder: "Type a command...",
    hintKeys: "help · ↑/↓ history · Tab autocomplete",
    hintTouch: "tap the shortcuts above",
    techPrompt: "root@jlm-dev:~$ ls ./technologies",
    techTitle: "My ",
    techAccent: "technologies",
    socialPrompt: "root@jlm-dev:~$ ls ./social-links",
    socialTitle: "Connect ",
    socialAccent: "with me",
    footerBuilt: "Built with curiosity and code.",
    eyebrow: "HELLO, WORLD. I'M",
    role1: "Computer Science",
    role2: "Developer in Progress",
    summary: "Development · Networking · Infrastructure · Support · DevOps",

    tech: {
      python: "Automation, scripting and data analysis",
      javascript: "Logic and web interactivity",
      html: "Page structure and semantics",
      css: "Layout, responsiveness and animations",
      linux: "Terminal, administration and servers",
      redes: "Monitoring, configuration and diagnostics",
      postgresql: "Data management and manipulation",
      docker: "Containers, virtualization and DevOps",
      ansible: "Configuration automation and deploy",
      git: "Version control and collaboration",
    },

    socialCards: {
      github: "Projects, code and experiments",
      email: "Professional contact",
      instagram: "Contact and content",
      linkedin: "Profile and professional path",
    },

    idIdentifying: "[SYSTEM] Identifying user...",
    idError: "[ERROR] Identity mismatch detected.",
    idCorrecting: "[SYSTEM] Correcting identity...",
    idSuccess: "[SUCCESS] Identity corrected.",

    boot: [
      ["muted", "JLM.DEV BIOS v2.2"],
      ["muted", "Initializing modules..."],
      ["yellow", "✓ network stack"],
      ["yellow", "✓ particle engine"],
      ["yellow", "✓ matrix renderer"],
      ["yellow", "✓ github client"],
      ["yellow", "✓ i18n (pt/en)"],
      ["yellow", "✓ terminal shell"],
      ["green", "System ready."],
      ["muted", ""],
      ["normal", "Welcome to my space on the web."],
      ["yellow", "Type help to see commands. Use lang pt for Portuguese."],
    ],

    cmdNotFound: (v) => `Command not found: ${v}. Type help to see options.`,
    promptVisitor: (v) => `visitor@jlm-dev:~$ ${v}`,
    suggestions: (list) => `Suggestions: ${list}`,
    historyEmpty: "History is empty.",

    help: [
      ["output-title", "AVAILABLE COMMANDS"],
      ["yellow", "about       — view my full profile"],
      ["yellow", "projects    — repositories (live GitHub + featured)"],
      ["yellow", "skills      — technologies with levels"],
      ["yellow", "social      — professional links"],
      ["yellow", "contact     — contact information"],
      ["yellow", "curriculum  — download my résumé as PDF"],
      ["yellow", "neofetch    — system information (style)"],
      ["yellow", "whoami      — user identity"],
      ["yellow", "lang        — switch language (pt | en)"],
      ["yellow", "theme       — change theme (green|cyan|purple|amber)"],
      ["yellow", "matrix      — control matrix effect (on|off|boost)"],
      ["yellow", "fortune     — a random quote"],
      ["yellow", "clear       — clear the terminal"],
      ["muted", ""],
      ["muted", "Extras: ls · pwd · date · uptime · echo · history · version · sudo"],
      ["muted", "↑/↓ history · Tab autocomplete · click the shortcuts"],
    ],

    about: [
      ["muted", "[ profile.service ] starting query..."],
      ["muted", "GET /api/profile/juan-lima-machado"],
      ["yellow", "200 OK — profile found"],
      ["output-title", "IDENTIFICATION"],
      [
        "normal",
        "Juan Lima Machado — Computer Science student with interest in software development, IT infrastructure, networking and automation.",
      ],
      ["output-title", "EXPERIENCE"],
      [
        "normal",
        "Hands-on experience in technical support, computer assembly and maintenance, device configuration, network monitoring, diagnostics and troubleshooting.",
      ],
      ["output-title", "STACK & TOOLS"],
      ["normal", "Python · JavaScript · HTML · CSS · Git"],
      ["normal", "PostgreSQL · Docker · Ansible · Linux"],
      ["output-title", "AREAS OF INTEREST"],
      ["normal", "DevOps · Cloud computing · Infrastructure as Code (IaC)"],
      ["normal", "Infrastructure automation · Networking · Support and operations"],
      ["muted", "[ profile.service ] query completed."],
    ],

    skillsTitle: "TECHNOLOGIES & LEVELS",
    skillsAreas: "Areas: Development · Infrastructure · Networking · Automation · DevOps",
    skillNames: {
      Python: "Python",
      JavaScript: "JavaScript",
      "HTML / CSS": "HTML / CSS",
      Linux: "Linux",
      Git: "Git",
      PostgreSQL: "PostgreSQL",
      Docker: "Docker",
      Ansible: "Ansible",
      Redes: "Networking",
    },

    socialTitle: "PROFESSIONAL LINKS",
    contactTitle: "PROFESSIONAL CONTACT",
    contactHint: "Feel free to reach out!",

    curriculum: [
      ["muted", "[ curriculum.service ] preparing download..."],
      ["yellow", "200 OK — file ready"],
      ["output-title", "RÉSUMÉ"],
      ["normal", "Juan_Lima_Machado_Curriculum.pdf"],
      ["green", "Download started in your browser."],
      ["muted", "If it didn't start automatically, use the link below:"],
      ["link", "assets/Juan_Lima_Machado_Curriculum.pdf"],
    ],

    projectsLoading: "[ github.service ] fetching public repositories...",
    projectsOk: (n) => `200 OK — ${n} repository(ies) found`,
    projectsFallback: "200 OK — using local cache (API unavailable)",
    projectsFeatured: "FEATURED PROJECTS",
    projectsRecent: "RECENT REPOSITORIES (GitHub)",
    projectsViewAll: "View all → https://github.com/jlmzin?tab=repositories",
    projectsOffline: "Connect to the internet to list live repositories.",
    projectsFallbackItems: [
      ["normal", "• Experiments — Automation, networking and Linux scripts"],
      ["normal", "• Studies — Academic projects and prototypes"],
    ],
    featured: [
      {
        name: "JLM.DEV",
        desc: "Interactive portfolio with terminal UI, themes, matrix rain and command-based navigation.",
        stack: "HTML · CSS · JavaScript",
        url: "https://github.com/jlmzin/jlmzin.github.io",
      },
    ],
    noDesc: "No description",
    stackLabel: "Stack:",

    whoami: [
      ["normal", "visitor@jlm-dev"],
      ["muted", "You are browsing Juan Lima Machado's portfolio."],
      ["muted", "Type about to learn more about the host."],
    ],

    fortuneTitle: "FORTUNE",
    quotes: [
      "The best code is the code you don't have to write.",
      "First solve the problem. Then write the code.",
      "Simplicity is the ultimate sophistication. — Leonardo da Vinci",
      "Talk is cheap. Show me the code. — Linus Torvalds",
      "The best way to predict the future is to implement it.",
      "Readable code is code you can understand in 6 months.",
      "Automation: because humans have better things to do.",
      "DevOps is not a tool. It's a culture.",
      "If it works, don't touch it... unless you have tests.",
      "Root is power. Use it responsibly.",
    ],

    langUsage: "Usage: lang <pt|en>",
    langCurrent: (l) => `Current language: ${l}`,
    langChanged: (l) => `Language switched to → ${l}`,
    langUnknown: (l) => `Unknown language: ${l}. Options: pt, en`,

    themeUsage: "Usage: theme <green|cyan|purple|amber>",
    themeCurrent: (t) => `Current theme: ${t}`,
    themeChanged: (t) => `Theme changed to → ${t}`,
    themeUnknown: (t) => `Unknown theme: ${t}. Options: green, cyan, purple, amber`,

    matrixOn: "Matrix rain: on",
    matrixOff: "Matrix rain: off",
    matrixBoost: "Matrix rain: BOOST mode ⚡",
    matrixUsage: "Usage: matrix [on|off|boost]",

    sudo: [
      ["output-error", "visitor is not in the sudoers file."],
      ["muted", "This incident will be reported... just kidding 😄"],
      ["yellow", "Hint: you already have full privileges in this terminal."],
    ],

    neofetch: {
      os: "JLM.DEV Shell 2.2",
      host: "Juan Lima Machado",
      kernel: "HTML5 + CSS3 + Vanilla JS",
      shell: "interactive-terminal",
    },

    version: [
      ["output-title", "JLM.DEV Shell"],
      ["normal", "version 2.2.0 — multilingual edition"],
      ["muted", "Built with curiosity and code."],
    ],

    ls: [
      ["normal", "about.md   projects/   skills.json   social/"],
      ["normal", "contact.txt  curriculum.pdf   README.md   secrets/"],
    ],

    projectsSectionPrompt: "root@jlm-dev:~$ ls ./projects",
    projectsSectionTitle: "Meus ",
    projectsSectionAccent: "projetos",
    projectsSectionSub: "Catálogo com filtros, status e detalhes",
    projectsFilterCategory: "Categoria",
    projectsFilterTech: "Tecnologia",
    projectsCode: "Código",
    projectsDemo: "Demo",
    projectsDetails: "Detalhes",
    projectsEmpty: "Nenhum projeto corresponde a estes filtros.",
    projectsGoals: "Objetivos",
    projectsFeatures: "Funcionalidades",
    projectStatus: { live: "No ar", wip: "Em desenvolvimento", concept: "Conceito" },
    projectCategories: {
      all: "Todos",
      web: "Web",
      database: "Banco de dados",
    },
  },
};

function detectLang() {
  try {
    const saved = localStorage.getItem("jlm-lang");
    if (saved === "pt" || saved === "en") return saved;
  } catch (_) {}
  const nav = (navigator.language || "pt").toLowerCase();
  return nav.startsWith("en") ? "en" : "pt";
}

let currentLang = detectLang();

function t() {
  return I18N[currentLang] || I18N.pt;
}

function setLang(lang) {
  if (lang !== "pt" && lang !== "en") return false;
  currentLang = lang;
  try {
    localStorage.setItem("jlm-lang", lang);
  } catch (_) {}
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  applyUiTranslations();
  return true;
}

function applyUiTranslations() {
  const L = t();

  const map = [
    [".status", (el) => { el.innerHTML = `<i></i> ${L.statusOnline}`; }],
    ["#clear-button", (el) => { el.textContent = L.clearBtn; }],
    ['#terminal-form button[type="submit"]', (el) => { el.textContent = L.execBtn; }],
    ["#terminal-input", (el) => { el.placeholder = L.inputPlaceholder; }],
    [".hint-keys", (el) => { el.textContent = L.hintKeys; }],
    [".hint-touch", (el) => { el.textContent = L.hintTouch; }],
    [".footer span:last-child", (el) => { el.textContent = L.footerBuilt; }],
    [".eyebrow", (el) => { el.textContent = L.eyebrow; }],
    [".summary", (el) => {
      el.innerHTML = L.summary
        .split(" · ")
        .map((part, i, arr) =>
          i < arr.length - 1 ? `${part} <b>·</b> ` : part,
        )
        .join("");
    }],
  ];

  map.forEach(([sel, fn]) => {
    const el = document.querySelector(sel);
    if (el) fn(el);
  });

  // Section headings
  const techPrompt = document.querySelector(".tech .prompt-label");
  if (techPrompt) techPrompt.textContent = L.techPrompt;
  const techH2 = document.querySelector(".tech h2");
  if (techH2) techH2.innerHTML = `${L.techTitle}<span class="accent">${L.techAccent}</span>`;

  const socialPrompt = document.querySelector(".quick-links .prompt-label");
  if (socialPrompt) socialPrompt.textContent = L.socialPrompt;
  const socialH2 = document.querySelector(".quick-links h2");
  if (socialH2) socialH2.innerHTML = `${L.socialTitle}<span class="accent">${L.socialAccent}</span>`;

  // Tech card descriptions (order matches HTML)
  const techKeys = [
    "python",
    "javascript",
    "html",
    "css",
    "linux",
    "redes",
    "postgresql",
    "docker",
    "ansible",
    "git",
  ];
  document.querySelectorAll(".tech-card").forEach((card, i) => {
    const small = card.querySelector("small");
    const key = techKeys[i];
    if (small && key && L.tech[key]) small.textContent = L.tech[key];
  });

  // Social card descriptions
  const socialKeys = ["github", "email", "instagram", "linkedin"];
  document.querySelectorAll(".link-card").forEach((card, i) => {
    const small = card.querySelector("small");
    const key = socialKeys[i];
    if (small && key && L.socialCards[key]) small.textContent = L.socialCards[key];
  });

  // Projects section headings
  const projPrompt = document.querySelector("#projects .prompt-label");
  if (projPrompt) projPrompt.textContent = L.projectsSectionPrompt || projPrompt.textContent;
  const projH2 = document.querySelector("#projects h2");
  if (projH2 && L.projectsSectionTitle) {
    projH2.innerHTML = `${L.projectsSectionTitle}<span class="accent">${L.projectsSectionAccent}</span>`;
  }
  const projSub = document.querySelector("#projects .section-sub");
  if (projSub && L.projectsSectionSub) projSub.textContent = L.projectsSectionSub;

  // re-render project cards with new language
  if (window.JLMProjects && typeof window.JLMProjects.render === "function") {
    window.JLMProjects.render();
  }
}

// apply as early as possible when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.lang = currentLang === "pt" ? "pt-BR" : "en";
    applyUiTranslations();
  });
} else {
  document.documentElement.lang = currentLang === "pt" ? "pt-BR" : "en";
  applyUiTranslations();
}
