export const WHATSAPP = "https://wa.me/5554999252321";
export const PHONE_TEL = "tel:+5554999252321";
export const PHONE_LABEL = "+55 (54) 99925-2321";
export const LINKEDIN = "https://linkedin.com/in/brunomiotto08";
export const GITHUB = "https://github.com/brunomiotto08";

export const nav = [
  { href: "#inicio", label: "Início" },
  { href: "#projetos", label: "Projetos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#stack", label: "Stack" },
  { href: "#contato", label: "Contato" },
] as const;

export const hero = {
  kicker: "Portfólio especializado",
  title: "Portfólio de Websites",
  sub: "Sites Institucionais, landing pages e experiências web globais!",
  pitch:
    "Cada projeto combina narrativa visual, performance e conversão, do wireframe ao deploy, com foco em credibilidade e resultado de negócio.",
  ctaProjects: "Ver projetos",
  ctaQuote: "Solicitar orçamento",
};

export const proof = [
  { value: "03", label: "sites ao vivo" },
  { value: "2026", label: "ano dos cases" },
  { value: "RS", label: "Caxias do Sul" },
];

export const projectsSection = {
  title: "Projetos entregues",
  sub: "Websites reais, em produção, com case completo, screenshots e stack técnica.",
};

export const services = {
  title: "O que construímos",
  sub: "Websites pensados para converter visitantes em clientes, não apenas páginas bonitas.",
  items: [
    {
      num: "01",
      title: "Sites institucionais",
      desc: "Presença digital profissional para empresas B2B: narrativa de serviços, cases, trajetória e formulário de contato integrado.",
    },
    {
      num: "02",
      title: "Landing pages",
      desc: "Páginas focadas em conversão para campanhas, lançamentos e captura de leads, com animações, SEO e performance otimizada.",
    },
    {
      num: "03",
      title: "Redesign e migração",
      desc: "Modernização de sites legados: nova identidade visual, stack atualizada, responsividade e deploy com zero downtime.",
    },
  ],
};

export const stack = {
  title: "Stack web",
  sub: "Tecnologias que uso para entregar sites rápidos, acessíveis e fáceis de manter.",
  groups: [
    {
      num: "01",
      label: "Frontend",
      tags: ["React", "TypeScript", "HTML / CSS", "Tailwind CSS"],
    },
    {
      num: "02",
      label: "Build e deploy",
      tags: ["Vite", "Vercel", "GitHub Actions"],
    },
    {
      num: "03",
      label: "UX e performance",
      tags: ["GSAP", "SEO", "Core Web Vitals", "Responsive"],
    },
  ],
};

export const contact = {
  title: "Quer um website como estes?",
  sub: "Me conte sobre seu projeto. Respondo em até 24h.",
  copy: "© 2026 Bruno Miotto",
};

export const labels = {
  live: "Ver site ao vivo",
  github: "GitHub",
  scroll: "Scroll completo",
  scrollSub: "Captura contínua do site. Role para ver cada dobra da página.",
  scrollAria: "Capturas sequenciais do site",
  gallery: "Galeria visual",
  gallerySub: "Telas do site em produção. Clique para ampliar.",
  about: "Sobre",
  arch: "Arquitetura",
  stack: "Stack",
  features: "Principais funcionalidades",
  before: "Antes",
  solution: "Solução",
  result: "Resultado",
  close: "Fechar",
  prev: "Anterior",
  next: "Próxima",
};
