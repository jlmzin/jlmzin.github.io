/* Real projects from https://github.com/jlmzin?tab=repositories */
const PROJECTS = [
  {
    id: "jlm-dev",
    name: "JLM.DEV",
    status: "live",
    category: "web",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/jlmzin/jlmzin.github.io",
    demo: "https://jlmzin.github.io/",
    image: null,
    i18n: {
      pt: {
        tagline: "Portfólio interativo estilo terminal",
        description:
          "Portfólio pessoal com navegação por comandos, temas dinâmicos, efeitos visuais, suporte multilíngue, catálogo de projetos e download de currículo.",
        goals: [
          "Apresentar trajetória e skills de forma memorável",
          "Explorar front-end interativo sem frameworks pesados",
          "Manter estética cyber/terminal coerente",
        ],
        features: [
          "Terminal interativo com histórico e autocomplete",
          "Temas de cor e efeito matrix configuráveis",
          "i18n português / inglês",
          "Catálogo de projetos com filtros",
          "Integração com API pública do GitHub",
        ],
      },
      en: {
        tagline: "Interactive terminal-style portfolio",
        description:
          "Personal portfolio with command-based navigation, dynamic themes, visual effects, multilingual support, project catalog and résumé download.",
        goals: [
          "Present path and skills in a memorable way",
          "Explore interactive front-end without heavy frameworks",
          "Keep a coherent cyber/terminal aesthetic",
        ],
        features: [
          "Interactive terminal with history and autocomplete",
          "Color themes and configurable matrix effect",
          "Portuguese / English i18n",
          "Project catalog with filters",
          "Public GitHub API integration",
        ],
      },
    },
  },
  {
    id: "loja-de-tenis",
    name: "JUNOIR — Loja de Tênis",
    status: "live",
    category: "web",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/jlmzin/loja-de-Tenis",
    demo: "https://jlmzin.github.io/loja-de-Tenis/",
    image: null,
    i18n: {
      pt: {
        tagline: "Landing page de loja de tênis Nike",
        description:
          "Vitrine de produtos com filtros por tamanho e cor, carrinho de compras persistente, modo claro/escuro e experiência de compra interativa — sem frameworks.",
        goals: [
          "Praticar DOM, eventos e estado no front-end",
          "Construir uma vitrine completa e responsiva",
          "Aplicar UX de e-commerce em HTML/CSS/JS puro",
        ],
        features: [
          "Hero interativo com troca de produto",
          "Filtros combinados por tamanho e cor",
          "Carrinho lateral com total e frete grátis",
          "Persistência do carrinho no navegador",
          "Modo claro e escuro",
        ],
      },
      en: {
        tagline: "Nike sneaker store landing page",
        description:
          "Product showcase with size and color filters, persistent shopping cart, light/dark mode and interactive shopping experience — no frameworks.",
        goals: [
          "Practice DOM, events and front-end state",
          "Build a complete responsive product grid",
          "Apply e-commerce UX with plain HTML/CSS/JS",
        ],
        features: [
          "Interactive hero with product switching",
          "Combined size and color filters",
          "Side cart with totals and free-shipping notice",
          "Cart persistence in the browser",
          "Light and dark mode",
        ],
      },
    },
  },
  {
    id: "pweb-ts-estruturas",
    name: "Estruturas em TypeScript",
    status: "live",
    category: "web",
    tech: ["TypeScript", "HTML", "CSS"],
    github: "https://github.com/jlmzin/pweb-ts-estruturas",
    demo: "https://jlmzin.github.io/pweb-ts-estruturas/",
    image: null,
    i18n: {
      pt: {
        tagline: "Exercícios de estruturas com TypeScript",
        description:
          "Atividade de Programação Web com exercícios práticos: situação do aluno, conta de luz, simulador de parcelamento, meta de economia e caixa de mercado.",
        goals: [
          "Aplicar tipos e estruturas em TypeScript",
          "Resolver problemas do cotidiano com código tipado",
          "Publicar a atividade na web",
        ],
        features: [
          "Situação do aluno no semestre",
          "Cálculo de conta de luz",
          "Simulador de parcelamento",
          "Meta de economia",
          "Caixa do mercado",
        ],
      },
      en: {
        tagline: "Structure exercises with TypeScript",
        description:
          "Web Programming activity with practical exercises: student status, electricity bill, installment simulator, savings goal and market checkout.",
        goals: [
          "Apply types and structures in TypeScript",
          "Solve everyday problems with typed code",
          "Publish the activity on the web",
        ],
        features: [
          "Student semester status",
          "Electricity bill calculation",
          "Installment simulator",
          "Savings goal",
          "Market checkout",
        ],
      },
    },
  },
  {
    id: "tipos-typescript",
    name: "Tipos em TypeScript",
    status: "live",
    category: "web",
    tech: ["TypeScript"],
    github: "https://github.com/jlmzin/Tipos-em-TypeScript",
    demo: null,
    image: null,
    i18n: {
      pt: {
        tagline: "Prática de tipagem em TypeScript",
        description:
          "Repositório focado em tipos, interfaces e padrões de tipagem em TypeScript, reforçando fundamentos da linguagem.",
        goals: [
          "Dominar tipos básicos e avançados",
          "Praticar interfaces e contratos",
          "Consolidar TypeScript sem UI pesada",
        ],
        features: [
          "Exemplos de tipagem estática",
          "Uso de interfaces e types",
          "Exercícios de consolidação",
        ],
      },
      en: {
        tagline: "TypeScript typing practice",
        description:
          "Repository focused on types, interfaces and typing patterns in TypeScript, reinforcing language fundamentals.",
        goals: [
          "Master basic and advanced types",
          "Practice interfaces and contracts",
          "Consolidate TypeScript without heavy UI",
        ],
        features: [
          "Static typing examples",
          "Interfaces and type aliases",
          "Consolidation exercises",
        ],
      },
    },
  },
  {
    id: "afya-admin",
    name: "Afya Admin Dashboard",
    status: "live",
    category: "web",
    tech: ["C#", "HTML", "CSS", "Blazor"],
    github: "https://github.com/jlmzin/afya-admin",
    demo: null,
    image: null,
    i18n: {
      pt: {
        tagline: "Dashboard admin com Blazor e MudBlazor",
        description:
          "Dashboard administrativo responsivo com Blazor WebAssembly e MudBlazor: componentes reutilizáveis, organização de projeto e visualização de dados.",
        goals: [
          "Aplicar Blazor WebAssembly em um painel real",
          "Usar componentes MudBlazor",
          "Praticar C# e .NET no front-end",
        ],
        features: [
          "Interface administrativa responsiva",
          "Componentes reutilizáveis",
          "Visualização de dados",
          "Stack C# / .NET / MudBlazor",
        ],
      },
      en: {
        tagline: "Admin dashboard with Blazor and MudBlazor",
        description:
          "Responsive admin dashboard with Blazor WebAssembly and MudBlazor: reusable components, project structure and data visualization.",
        goals: [
          "Apply Blazor WebAssembly in a real panel",
          "Use MudBlazor components",
          "Practice C# and .NET on the front-end",
        ],
        features: [
          "Responsive admin UI",
          "Reusable components",
          "Data visualization",
          "C# / .NET / MudBlazor stack",
        ],
      },
    },
  },
  {
    id: "pweb-atividades-js",
    name: "Atividades JavaScript",
    status: "live",
    category: "web",
    tech: ["HTML", "JavaScript"],
    github: "https://github.com/jlmzin/pweb-atividades-js",
    demo: null,
    image: null,
    i18n: {
      pt: {
        tagline: "Exercícios de Programação Web em JS",
        description:
          "Conjunto de atividades de Programação Web focadas em JavaScript e HTML, praticando lógica e manipulação de página.",
        goals: [
          "Praticar JavaScript básico e intermediário",
          "Integrar lógica com HTML",
          "Cumprir exercícios da disciplina",
        ],
        features: [
          "Exercícios de lógica em JS",
          "Páginas HTML de apoio",
          "Prática de interatividade no navegador",
        ],
      },
      en: {
        tagline: "Web Programming exercises in JS",
        description:
          "Set of Web Programming activities focused on JavaScript and HTML, practicing logic and page manipulation.",
        goals: [
          "Practice basic and intermediate JavaScript",
          "Integrate logic with HTML",
          "Complete course exercises",
        ],
        features: [
          "JS logic exercises",
          "Supporting HTML pages",
          "Browser interactivity practice",
        ],
      },
    },
  },
  {
    id: "meu-portifolio-html",
    name: "Meu Portfólio HTML",
    status: "live",
    category: "web",
    tech: ["HTML", "CSS"],
    github: "https://github.com/jlmzin/Meu-Portifolio-Html",
    demo: null,
    image: null,
    i18n: {
      pt: {
        tagline: "Primeiro portfólio em HTML e CSS",
        description:
          "Versão inicial do portfólio pessoal construída com HTML e CSS, marcando o início da presença digital como desenvolvedor.",
        goals: [
          "Criar a primeira página de apresentação",
          "Praticar estrutura semântica e estilo",
          "Publicar um site estático no GitHub",
        ],
        features: [
          "Layout em HTML/CSS",
          "Apresentação pessoal",
          "Base para o JLM.DEV atual",
        ],
      },
      en: {
        tagline: "First portfolio in HTML and CSS",
        description:
          "Initial version of the personal portfolio built with HTML and CSS, marking the start of a digital presence as a developer.",
        goals: [
          "Create the first presentation page",
          "Practice semantic structure and styling",
          "Publish a static site on GitHub",
        ],
        features: [
          "HTML/CSS layout",
          "Personal introduction",
          "Foundation for the current JLM.DEV",
        ],
      },
    },
  },
  {
    id: "copa-2026",
    name: "Modelagem Copa 2026",
    status: "live",
    category: "database",
    tech: ["SQL"],
    github: "https://github.com/jlmzin/Modelagem-Copa-do-Mundo-2026",
    demo: null,
    image: null,
    i18n: {
      pt: {
        tagline: "Banco de dados da Copa do Mundo 2026",
        description:
          "Modelagem relacional para a Copa do Mundo FIFA 2026: países, seleções, jogadores, grupos, partidas e classificação, com schema normalizado até a BCNF.",
        goals: [
          "Aplicar modelagem relacional e normalização",
          "Representar o domínio da competição",
          "Documentar entidades, relacionamentos e cardinalidades",
        ],
        features: [
          "Schema normalizado até BCNF",
          "Países, seleções, jogadores e comissão técnica",
          "Estádios, jogos, árbitros e classificação",
          "Diagrama e documentação de modelagem",
        ],
      },
      en: {
        tagline: "World Cup 2026 database modeling",
        description:
          "Relational modeling for the FIFA World Cup 2026: countries, teams, players, groups, matches and standings, with a schema normalized up to BCNF.",
        goals: [
          "Apply relational modeling and normalization",
          "Represent the competition domain",
          "Document entities, relationships and cardinalities",
        ],
        features: [
          "Schema normalized up to BCNF",
          "Countries, teams, players and staff",
          "Stadiums, matches, referees and standings",
          "Modeling diagram and documentation",
        ],
      },
    },
  },
  {
    id: "sga-atendimento",
    name: "SGA — Atendimento Gamificado",
    status: "live",
    category: "database",
    tech: ["PLpgSQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/jlmzin/Projeto-Banco-de-Dadoos-Atendimento-aos-Clientes",
    demo: null,
    image: null,
    i18n: {
      pt: {
        tagline: "Sistema de gestão de atendimento com gamificação",
        description:
          "Sistema de gestão de atendimento com filas, controle de atendimentos e gamificação (pontuação, ranking e recompensas) para motivar atendentes.",
        goals: [
          "Gerenciar clientes, atendentes e filas",
          "Avaliar serviços prestados",
          "Aplicar pontuação, ranking e recompensas",
        ],
        features: [
          "Controle de início e fim de atendimento",
          "Pontuação e evolução de nível",
          "Ranking de atendentes",
          "Estoque de recompensas",
          "Scripts PLpgSQL e interface web de apoio",
        ],
      },
      en: {
        tagline: "Gamified customer service management system",
        description:
          "Customer service management system with queues, attendance control and gamification (scores, ranking and rewards) to motivate agents.",
        goals: [
          "Manage customers, agents and queues",
          "Evaluate services provided",
          "Apply scores, ranking and rewards",
        ],
        features: [
          "Start/end attendance control",
          "Scoring and level progression",
          "Agent ranking",
          "Reward inventory",
          "PLpgSQL scripts and supporting web UI",
        ],
      },
    },
  },
];

const PROJECT_CATEGORIES = ["all", "web", "database"];

const PROJECT_TECH_FILTERS = [
  "all",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "C#",
  "Blazor",
  "PLpgSQL",
  "SQL",
];
