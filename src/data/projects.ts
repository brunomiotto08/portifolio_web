import type { Project } from "./types";

const h = "/assets/portfolio/habilita-website";
const s = "/assets/portfolio/stellamaris-website";
const v = "/assets/portfolio/vektor-website";
const n = "/assets/portfolio/nelci-website";

export const projects: Project[] = [
  {
    id: "stellamaris",
    index: "01",
    name: "Stellamaris Cidadania",
    titleLead: "Stellamaris",
    titleAccent: "Cidadania",
    badge: "Case · Jurídico",
    type: "SPA · Cidadania italiana",
    year: "2026",
    layout: "bleed",
    live: "https://www.stellamariscidadania.com.br/",
    hubDesc:
      "Site premium para assessoria de cidadania italiana: hero bordô e dourado, globo 3D, timeline de processo, galeria do escritório e depoimentos Google.",
    subtitle:
      "Site institucional premium para assessoria de cidadania italiana: hero cinematográfico em bordô e dourado, serviços em cards editoriais, timeline de processo, equipe jurídica, galeria do escritório, parceiros e depoimentos reais do Google.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Three.js"],
    impact: {
      before:
        "Escritório de cidadania sem presença digital que transmitisse confiança jurídica e sofisticação para famílias brasileiras.",
      solution:
        "One-page editorial com narrativa emocional, processo em 6 etapas, globo 3D interativo e prova social integrada.",
      result:
        "Marca digital premium ao vivo, com CTA claro para captação de leads qualificados em cidadania italiana.",
    },
    metrics: [
      { value: "Live", label: "site em produção" },
      { value: "5.0★", label: "avaliações Google" },
    ],
    about: [
      "O Stellamaris Cidadania conecta brasileiros às suas raízes italianas com assessoria jurídica especializada. O site traduz essa proposta em uma experiência visual sofisticada: paleta bordô e dourado, tipografia serifada nos destaques e fotografia real do escritório.",
      "Construído como SPA com React e Vite, combina animações de scroll, cards assimétricos, timeline vertical de processo, globo 3D rotativo para mobilidade europeia e seção de depoimentos com avaliações reais do Google.",
    ],
    highlights: [
      "Hero com slider de escritório e barra de estatísticas (+100 cidadanias, 5.0★)",
      "Globo 3D interativo com destaque Schengen e passaporte europeu",
      "Timeline de 6 etapas do processo com cards alternados",
    ],
    features: [
      {
        num: "01",
        title: "Hero cinematográfico",
        desc: "Headline em dourado, slider de fotos do escritório, CTA principal e faixa de métricas (+100 cidadanias, 50+ clientes, 5.0★, +8 anos).",
      },
      {
        num: "02",
        title: "Serviços editoriais",
        desc: "Grid assimétrico com cards de cidadania italiana, direito de cidadania e CTAs de conversão, com renders 3D de passaportes.",
      },
      {
        num: "03",
        title: "Mobilidade europeia",
        desc: "Seção imersiva com globo 3D rotativo, lista de benefícios Schengen e narrativa sobre liberdade de circulação na Europa.",
      },
      {
        num: "04",
        title: "Equipe e processo",
        desc: "Apresentação da Dra. Edi Martini, equipe jurídica especializada e timeline vertical com 6 etapas, da avaliação inicial à cidadania reconhecida.",
      },
      {
        num: "05",
        title: "Galeria e parceiros",
        desc: "Bento grid com fotos do escritório, cards de compromisso, logos de parceiros em grid monocromático e slider de depoimentos Google.",
      },
      {
        num: "06",
        title: "Oportunidades e CTA",
        desc: "Seção de benefícios (viagens, trabalho, estudo, família), métricas de aprovação e banner final de conversão com WhatsApp flutuante.",
      },
    ],
    arch: "Componentes por seção com React e Tailwind. O globo 3D usa Three.js com interação de arrastar. Depoimentos e parceiros são dados estáticos tipados; animações de entrada via Intersection Observer e transições CSS customizadas.",
    flow: ["Hero", "Serviços", "Mobilidade", "Equipe", "Processo", "Galeria", "Contato"],
    stack: [
      { name: "React + TypeScript", role: "SPA tipada com componentes por seção" },
      { name: "Tailwind CSS", role: "Design system com paleta bordô e dourado" },
      { name: "Three.js", role: "Globo 3D interativo para mobilidade europeia" },
      { name: "Vite", role: "Build otimizado para deploy estático" },
      { name: "Animações", role: "Scroll reveal, sliders e microinterações" },
    ],
    shots: [
      {
        src: `${s}/page-01.webp`,
        alt: "Hero Stellamaris Cidadania",
        caption: "Hero: cidadania italiana com estatísticas.",
        stripLabel: "01",
        inGallery: true,
        variant: "hero",
      },
      {
        src: `${s}/page-02.webp`,
        alt: "Serviços",
        caption: "Serviços: cards editoriais com passaportes.",
        stripLabel: "02",
        inGallery: true,
        variant: "tall",
        objectTop: true,
      },
      {
        src: `${s}/page-03.webp`,
        alt: "Mobilidade europeia",
        caption: "Mobilidade: globo 3D e benefícios Schengen.",
        stripLabel: "Mobilidade",
        inGallery: true,
        variant: "default",
      },
      {
        src: `${s}/page-04.webp`,
        alt: "Equipe jurídica",
        caption: "Equipe: assessoria jurídica especializada.",
        stripLabel: "04",
        inGallery: true,
        variant: "default",
      },
      {
        src: `${s}/page-05.webp`,
        alt: "Processo",
        caption: "Processo: timeline em 6 etapas.",
        stripLabel: "Processo",
        inGallery: true,
        variant: "wide",
        objectTop: true,
      },
      {
        src: `${s}/page-06.webp`,
        alt: "Galeria do escritório",
        caption: "Galeria: por dentro da Stellamaris.",
        stripLabel: "Galeria",
        inGallery: true,
        variant: "default",
        objectTop: true,
      },
      {
        src: `${s}/page-07.webp`,
        alt: "Parceiros",
        caption: "Parceiros: alianças de confiança.",
        stripLabel: "07",
        inGallery: true,
        variant: "default",
      },
      {
        src: `${s}/page-08.webp`,
        alt: "Depoimentos",
        caption: "Depoimentos: avaliações reais do Google.",
        stripLabel: "08",
        inGallery: true,
        variant: "wide",
      },
      {
        src: `${s}/page-09.webp`,
        alt: "Stellamaris tela 09",
        caption: "Dobra 09 do site Stellamaris.",
        stripLabel: "09",
      },
      {
        src: `${s}/page-10.webp`,
        alt: "Oportunidades",
        caption: "Oportunidades: benefícios da cidadania europeia.",
        stripLabel: "Oportunidades",
        inGallery: true,
        variant: "default",
      },
    ],
  },
  {
    id: "nelci",
    index: "02",
    name: "Nelci Advocacia",
    titleLead: "Nelci",
    titleAccent: "Advocacia",
    badge: "Case · Jurídico",
    type: "SPA · Advocacia",
    year: "2026",
    layout: "quiet",
    live: "https://www.nelciraimundoadvocacia.com.br/",
    hubDesc:
      "Landing page dark premium para advocacia trabalhista e previdenciária em Caxias do Sul: hero editorial, áreas de atuação, contato WhatsApp e galeria do escritório.",
    subtitle:
      "Landing page dark premium para advocacia trabalhista e previdenciária em Caxias do Sul: hero editorial em marrom e dourado, áreas de atuação, contato via WhatsApp e galeria do escritório.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    impact: {
      before:
        "Advogado individual sem presença digital que transmitisse clareza, confiança e proximidade para clientes trabalhistas e previdenciários.",
      solution:
        "One-page dark com tipografia editorial, áreas de atuação organizadas, formulário WhatsApp e prova visual do escritório.",
      result:
        "Marca digital premium com CTA direto ao WhatsApp e narrativa clara de orientação jurídica em Caxias do Sul.",
    },
    metrics: [
      { value: "Live", label: "site em produção" },
      { value: "7+6", label: "temas de atuação" },
    ],
    about: [
      "O Nelci Raimundo Bergozza, Sociedade Individual de Advocacia, atua em Direito do Trabalho e Previdenciário em Caxias do Sul. O site traduz a proposta de clareza e compromisso em uma experiência dark premium: paleta marrom e dourado, tipografia serifada nos destaques e navegação enxuta.",
      "A landing organiza áreas de atuação (7 temas trabalhistas e 6 previdenciários), canais de contato, formulário que envia pelo WhatsApp, endereço no Centro Empresarial Tonin e galeria do espaço físico, com atendimento presencial ou online.",
    ],
    highlights: [
      "Hero dark com ícone de balança e CTAs Contato e WhatsApp",
      "Cards Trabalhista e Previdenciário com listas de temas",
      "Contato com formulário WhatsApp, localização e galeria do escritório",
    ],
    features: [
      {
        num: "01",
        title: "Hero editorial",
        desc: "Fundo marrom com spotlight, kicker Trabalhista e Previdenciário · Caxias do Sul, headline dourada e CTAs Contato e WhatsApp.",
      },
      {
        num: "02",
        title: "Áreas de atuação",
        desc: "Dois cards contrastantes, Trabalhista (7 temas) e Previdenciário (6 temas), com listas claras de casos e benefícios.",
      },
      {
        num: "03",
        title: "Contato e formulário",
        desc: "Seção “Seu direito merece clareza” com canais, endereço, telefone, horário e formulário que envia pelo WhatsApp.",
      },
      {
        num: "04",
        title: "Localização",
        desc: "Card de endereço e contato no Centro Empresarial Tonin, Rua Sinimbu, 1209, com link para Google Maps.",
      },
      {
        num: "05",
        title: "Nosso espaço",
        desc: "Galeria com sala de reuniões e atendimento e fachada do Centro Empresarial Tonin, prova visual de privacidade e conforto.",
      },
      {
        num: "06",
        title: "WhatsApp flutuante",
        desc: "Botão flutuante e CTAs repetidos ao longo da página, conversão direta para atendimento em Caxias do Sul ou online.",
      },
    ],
    arch: "One-page em React e Tailwind com seções modulares. Paleta marrom e dourado e tipografia serifada nos headlines. Listas de temas trabalhistas e previdenciários como dados tipados; formulário redireciona para WhatsApp; animações de entrada via Intersection Observer.",
    flow: ["Hero", "Áreas", "Contato", "Sobre", "Espaço", "Footer"],
    stack: [
      { name: "React + TypeScript", role: "SPA tipada com seções modulares" },
      { name: "Tailwind CSS", role: "Design system marrom e dourado e tipografia editorial" },
      { name: "Vite", role: "Build otimizado para deploy estático" },
      { name: "WhatsApp CTA", role: "Formulário e botão flutuante para conversão" },
      { name: "Animações", role: "Scroll reveal e microinterações" },
    ],
    coverObjectTop: true,
    shots: [
      {
        src: `${n}/page-01.png`,
        alt: "Hero Nelci Advocacia",
        caption: "Hero: advocacia com clareza e compromisso.",
        stripLabel: "01",
        inGallery: true,
        variant: "hero",
        objectTop: true,
      },
      {
        src: `${n}/page-02.png`,
        alt: "Áreas de atuação",
        caption: "Áreas: Trabalhista e Previdenciário.",
        stripLabel: "Áreas",
        inGallery: true,
        variant: "tall",
        objectTop: true,
      },
      {
        src: `${n}/page-03.png`,
        alt: "Contato",
        caption: "Contato: canais, localização e formulário WhatsApp.",
        stripLabel: "Contato",
        inGallery: true,
        variant: "wide",
        objectTop: true,
      },
      {
        src: `${n}/page-04.png`,
        alt: "Endereço e contato",
        caption: "Sobre: endereço no Centro Empresarial Tonin.",
        stripLabel: "Sobre",
        inGallery: true,
        variant: "default",
        objectTop: true,
      },
      {
        src: `${n}/page-05.png`,
        alt: "Nosso espaço",
        caption: "Espaço: sala de atendimento e fachada.",
        stripLabel: "Espaço",
        inGallery: true,
        variant: "wide",
        objectTop: true,
      },
    ],
  },
  {
    id: "habilita",
    index: "03",
    name: "Habilita Website",
    titleLead: "Habilita",
    titleAccent: "Website",
    badge: "Case · Marketing",
    type: "SPA · Site institucional",
    year: "2026",
    layout: "split",
    live: "https://habilita-site.vercel.app/",
    github: "https://github.com/brunomiotto08/habilita_site",
    hubDesc:
      "Site institucional one-page para empresa de automação industrial: hero animado, serviços, portfólio, trajetória, processo e contato com cursor customizado.",
    subtitle:
      "Site one-page para a Habilita, empresa de automação industrial, painéis elétricos e conformidade NR10/NR12. Apresenta serviços, portfólio de projetos, trajetória, processo de trabalho, tecnologias parceiras e formulário de contato em uma experiência visual premium.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    impact: {
      before:
        "Empresa de automação industrial sem presença digital que transmitisse credibilidade técnica para decisores.",
      solution:
        "Site one-page premium com narrativa de serviços, cases, trajetória e formulário de contato, deploy em produção.",
      result:
        "Presença digital profissional ao vivo, com narrativa clara para decisores industriais e formulário de conversão.",
    },
    metrics: [
      { value: "Live", label: "site em produção" },
      { value: "<2s", label: "carregamento" },
    ],
    about: [
      "O Habilita Website foi desenvolvido como vitrine digital da empresa, traduzindo credibilidade técnica em uma interface moderna, com narrativa clara para decisores industriais que buscam automação, painéis elétricos e engenharia de precisão.",
      "Construído como SPA estática com React e Vite, o site prioriza performance, animações suaves e componentes reutilizáveis: cursor customizado, contadores animados, text reveal e cards interativos, sem backend, ideal para hospedagem estática.",
    ],
    highlights: [
      "Hero com slider de produtos e CTAs para serviços e contato",
      "Contadores animados (+6 anos, 150+ projetos, 100% conformidade)",
      "Cursor customizado e microinterações em toda a navegação",
    ],
    features: [
      {
        num: "01",
        title: "Hero interativo",
        desc: "Slides alternando painéis elétricos, CLPs e visão explodida de quadros, com badge de engenharia, headline em destaque e botões de conversão.",
      },
      {
        num: "02",
        title: "Serviços em bento grid",
        desc: "Cards para automação industrial, painéis elétricos, NR10/NR12 e integração de chão de fábrica, com ícones, descrições e links de aprofundamento.",
      },
      {
        num: "03",
        title: "Portfólio de projetos",
        desc: "Grid de cases reais (NR12, QGBT, EtherCAT, SCADA) com tags técnicas, destaque editorial e estatísticas da empresa.",
      },
      {
        num: "04",
        title: "Trajetória e processo",
        desc: "Timeline vertical com marcos de 2020 a 2024 e fluxo horizontal em 5 etapas, do diagnóstico técnico ao suporte contínuo.",
      },
      {
        num: "05",
        title: "Tecnologia e parceiros",
        desc: "Seção de equipamentos e plataformas, OMRON, EtherCAT, Siemens, reforçando credibilidade com fabricantes líderes do mercado.",
      },
      {
        num: "06",
        title: "Contato e UX premium",
        desc: "Formulário institucional, navbar flutuante com glassmorphism, scroll suave entre seções e animações de entrada no viewport.",
      },
    ],
    arch: "A arquitetura segue o padrão de componentes por seção: cada bloco da página (Hero, Serviços, Projetos) é um componente React independente, estilizado com Tailwind e animações customizadas, compilado pelo Vite em assets estáticos prontos para deploy.",
    flow: ["Hero", "Serviços", "Projetos", "Trajetória", "Processo", "Tecnologia", "Contato"],
    stack: [
      { name: "React + TypeScript", role: "SPA tipada com hot reload e build otimizado" },
      { name: "Tailwind CSS", role: "Design system utilitário e responsivo" },
      { name: "Vite", role: "Bundler rápido com tree-shaking de assets" },
      { name: "Animações customizadas", role: "Text reveal, contadores e transições de scroll" },
      { name: "Custom Cursor", role: "Hook useMousePosition e cursor circular customizado" },
      { name: "UI Components", role: "BentoCard, CountUp, SpotlightCard reutilizáveis" },
    ],
    shots: [
      {
        src: `${h}/page-01.webp`,
        alt: "Hero do site institucional Habilita",
        caption: "Hero: automação industrial no mais alto nível.",
        stripLabel: "01",
        inGallery: true,
        variant: "hero",
      },
      {
        src: `${h}/page-02.webp`,
        alt: "Painel elétrico",
        caption: "Painel: projetos de automação elétrica.",
        stripLabel: "CLP",
        inGallery: true,
        variant: "tall",
      },
      {
        src: `${h}/page-03.webp`,
        alt: "Seção CLP",
        caption: "CLP: controlador lógico programável.",
        stripLabel: "03",
        inGallery: true,
        variant: "default",
      },
      {
        src: `${h}/page-04.webp`,
        alt: "Habilita tela 04",
        caption: "Dobra 04 do site Habilita.",
        stripLabel: "04",
      },
      {
        src: `${h}/page-05.webp`,
        alt: "Portfólio de projetos",
        caption: "Trajetória: timeline de experiência.",
        stripLabel: "Trajetória",
        inGallery: true,
        variant: "wide",
      },
      {
        src: `${h}/page-06.webp`,
        alt: "Habilita tela 06",
        caption: "Dobra 06 do site Habilita.",
        stripLabel: "06",
      },
      {
        src: `${h}/page-07.webp`,
        alt: "Seção processo",
        caption: "Processo: fluxo em 5 etapas.",
        stripLabel: "Processo",
        inGallery: true,
        variant: "default",
      },
      {
        src: `${h}/page-08.webp`,
        alt: "Habilita tela 08",
        caption: "Tecnologia: OMRON, EtherCAT e Siemens.",
        stripLabel: "08",
      },
      {
        src: `${h}/page-09.webp`,
        alt: "Seção métricas",
        caption: "Métricas: excelência em números.",
        stripLabel: "Contato",
        inGallery: true,
        variant: "full",
      },
    ],
  },
  {
    id: "vektor",
    index: "04",
    name: "Vektor",
    titleLead: "Vektor",
    badge: "Case · Fintech",
    type: "SPA · Fintech institucional",
    year: "2026",
    layout: "terminal",
    hubDesc:
      "Landing page dark premium para infraestrutura institucional de trading: terminal privado, roteamento global, métricas de performance e onboarding por convite.",
    subtitle:
      "Landing page dark premium para infraestrutura de trading institucional: ticker de mercados ao vivo, bento de capacidades, terminal privado, mapa de roteamento global e onboarding por convite.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    impact: {
      before:
        "Produto fintech institucional sem presença digital que transmitisse discrição, performance e confiança soberana.",
      solution:
        "One-page dark com tipografia editorial, dados ao vivo, mockups de terminal e narrativa de infraestrutura privada.",
      result:
        "Marca digital institucional com CTA de acesso privado e prova visual de latência, volume e cobertura global.",
    },
    metrics: [
      { value: "0.4ms", label: "latência mediana" },
      { value: "$50B+", label: "volume mensal" },
    ],
    about: [
      "O Vektor posiciona infraestrutura de capital privado, execução, custódia e roteamento, em uma experiência visual discreta e institucional, com tipografia serifada, paleta preta e dourada e dados de mercado em destaque.",
      "Construído como SPA com React e Vite, o site combina ticker ao vivo, grids bento, mockups de terminal de trading, mapa de liquidez global e CTA de acesso por convite, sem backend, pronto para deploy estático.",
    ],
    highlights: [
      "Hero editorial com ticker de mercados e bento de capacidades",
      "Terminal privado com order book, candles e posição em tempo real",
      "Mapa de roteamento global e métricas de performance ($50B+, 0.4ms)",
    ],
    features: [
      {
        num: "01",
        title: "Hero institucional",
        desc: "Ticker de mercados, headline serifada e grid bento com custódia, execução sub-ms e liquidez global, tipografia editorial sobre fundo preto.",
      },
      {
        num: "02",
        title: "Platform e throughput",
        desc: "Dashboard de execução com chart de lit/dark/internalizer, nós NY4 · LD4 · TY3 e bloco de segurança HSM com zero-trust.",
      },
      {
        num: "03",
        title: "Global routing",
        desc: "Mapa interativo de malha privada com lanes ativas, hop mediano e uptime, fiber e microwave entre hubs financeiros.",
      },
      {
        num: "04",
        title: "Private terminal",
        desc: "Mockup de terminal com candles, order book, posição e abas de risk/alerts, visual de produto real para alocadores.",
      },
      {
        num: "05",
        title: "Portfolio e performance",
        desc: "Alocação por classe, fluxo de capital, sinal de IA e KPIs de volume, latência e SLA com citação institucional.",
      },
      {
        num: "06",
        title: "Private access CTA",
        desc: "Seção de onboarding por convite com captura de e-mail e narrativa de legacy, conversão discreta para family offices.",
      },
    ],
    arch: "Componentes React por seção com tema dark consistente e tipografia serifada nos headlines. Dados de mercado, métricas e cards em arrays tipados; charts e mockups como UI estática otimizada; build Vite para deploy estático.",
    flow: ["Hero", "Platform", "Routing", "Terminal", "Showcase", "Performance", "Access"],
    stack: [
      { name: "React + TypeScript", role: "SPA tipada com seções modulares" },
      { name: "Tailwind CSS", role: "Tema dark, bento grids e tipografia editorial" },
      { name: "Vite", role: "Build rápido para deploy estático" },
      { name: "Data UI", role: "Charts, tickers e mockups de terminal" },
      { name: "Motion", role: "Reveals sutis e microinterações" },
    ],
    coverObjectTop: true,
    shots: [
      {
        src: `${v}/page-01.webp`,
        alt: "Hero Vektor",
        caption: "Hero: power without spectacle.",
        stripLabel: "01",
        inGallery: true,
        variant: "hero",
        objectTop: true,
      },
      {
        src: `${v}/page-02.webp`,
        alt: "Vektor tela 02",
        caption: "Dobra 02 do site Vektor.",
        stripLabel: "02",
      },
      {
        src: `${v}/page-03.webp`,
        alt: "Platform",
        caption: "Platform: infrastructure and throughput.",
        stripLabel: "Platform",
        inGallery: true,
        variant: "tall",
        objectTop: true,
      },
      {
        src: `${v}/page-04.webp`,
        alt: "Routing",
        caption: "Routing: liquidez global com discrição.",
        stripLabel: "Routing",
        inGallery: true,
        variant: "wide",
        objectTop: true,
      },
      {
        src: `${v}/page-05.webp`,
        alt: "Terminal",
        caption: "Terminal: private trading desk.",
        stripLabel: "Terminal",
        inGallery: true,
        variant: "default",
        objectTop: true,
      },
      {
        src: `${v}/page-06.webp`,
        alt: "Showcase",
        caption: "Showcase: portfolio soberano.",
        stripLabel: "06",
        inGallery: true,
        variant: "default",
        objectTop: true,
      },
      {
        src: `${v}/page-07.webp`,
        alt: "Performance",
        caption: "Performance: escala em bilhões.",
        stripLabel: "Performance",
        inGallery: true,
        variant: "wide",
        objectTop: true,
      },
      {
        src: `${v}/page-08.webp`,
        alt: "Vektor tela 08",
        caption: "Dobra 08 do site Vektor.",
        stripLabel: "08",
      },
      {
        src: `${v}/page-09.webp`,
        alt: "Vektor tela 09",
        caption: "Dobra 09 do site Vektor.",
        stripLabel: "09",
      },
    ],
  },
];

function heroLabel(project: Project) {
  const accent = project.titleAccent && project.titleAccent !== "Website" ? project.titleAccent : "";
  return [project.titleLead, accent].filter(Boolean).join(" ").toUpperCase();
}

export const covers = projects.map((p) => ({
  id: p.id,
  src: p.shots[0].src,
  alt: p.shots[0].alt,
  name: p.name,
  label: heroLabel(p),
  badge: p.badge,
  objectTop: p.coverObjectTop ?? p.shots[0].objectTop,
}));
