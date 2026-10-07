# Portfólio de websites

Inventário do hub de websites e dos cinco cases publicados neste repositório. Os textos em português são os da locale `pt-BR` em [i18n.js](../i18n.js). Os caminhos de imagem são relativos à raiz do repositório. Os previews usam caminho relativo a esta pasta `docs/`.

O código React de cada site cliente não está neste repositório. As seções e os componentes nomeados abaixo são os que as páginas de case já registram. O único repositório público linkado é o da Habilita.

Fora deste documento: Fleet Ops, e-commerce, Habilita I.M.P. e a pasta `assets/portfolio/nelci/` (prints de outro case, não do site Nelci Advocacia).

## Mapa rápido

| # | Projeto | Badge | Tipo | Ano | Case | Ao vivo | Telas |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 01 | Habilita Website | Case · Marketing | SPA · Site Institucional | 2026 | [projects/habilita-website.html](../projects/habilita-website.html) | https://habilita-site.vercel.app/ | 9 webp |
| 02 | Stellamaris Cidadania | Case · Jurídico | SPA · Cidadania Italiana | 2026 | [projects/stellamaris-website.html](../projects/stellamaris-website.html) | https://www.stellamariscidadania.com.br/ | 10 webp |
| 03 | Transmiotto Viagens | Case · Transporte | SPA · Transporte & Turismo | 2026 | [projects/transmiotto-website.html](../projects/transmiotto-website.html) | https://www.transmiotto.com.br/ | 12 webp |
| 04 | Vektor | Case · Fintech | SPA · Fintech Institucional | 2026 | [projects/vektor-website.html](../projects/vektor-website.html) | sem link ao vivo | 9 webp |
| 05 | Nelci Advocacia | Case · Jurídico | SPA · Advocacia | 2026 | [projects/nelci-website.html](../projects/nelci-website.html) | https://www.nelciraimundoadvocacia.com.br/ | 5 png |

GitHub do case: somente Habilita, em https://github.com/brunomiotto08/habilita_site.

Assets deste portfólio: 45 capturas de tela + 2 imagens de capa = 47 arquivos. O índice completo está no final.

## Hub — Portfólio de Websites

Arquivo: [websites/index.html](../websites/index.html)

| Campo | Valor |
| --- | --- |
| `<title>` | Websites — Bruno Miotto |
| Chave de título | `meta.websites.title` |
| Descrição | Portfólio de websites e landing pages — sites institucionais, one-page premium e experiências web em produção. |
| Chave de descrição | `meta.websites.desc` |
| Classe do body | `website-hub` |
| Idioma do HTML | `pt-BR` |
| CSS | [style.css](../style.css) |
| Scripts | [i18n.js](../i18n.js), [script.js](../script.js) |
| Fontes | Bricolage Grotesque (500, 700, 800), Sora (400, 500, 600), Geist Mono |
| Favicon | `assets/favicon/favicon.svg` e `assets/favicon/favicon.png` |

O hub não carrega `project-detail.js` nem lightbox. A navegação interna é por âncora.

### Shell do hub

| Peça | Classes | Função |
| --- | --- | --- |
| Topbar | `topbar`, `topbar__inner`, `topbar__inner--hub`, `topbar__brand`, `topbar__mark`, `topbar__home`, `topbar__actions` | Marca “Bruno Miotto” aponta para `../index.html`. Link “← Site principal” usa `websites.nav.main`. |
| Idioma | `lang-switch`, `lang-switch__btn`, `lang-switch--mobile` | Botões `data-lang`: `pt-BR`, `en-US`, `es`. |
| Menu mobile | `mobile-menu`, `mobile-menu__link`, `topbar__menu` | Âncoras `#inicio`, `#projetos`, `#servicos`, `#stack`, `#contato` e link para o site principal. |
| Dock | `dock`, `dock__item`, `dock__item--cta` | Atalhos fixos: Início, Projetos, Serviços, Stack, Contato. O item de contato usa a variante `--cta`. |

Âncoras do menu e do dock:

| `data-section` / href | Rótulo PT | Chave |
| --- | --- | --- |
| `#inicio` | início | `nav.home` |
| `#projetos` | projetos | `websites.nav.projects` |
| `#servicos` | serviços | `websites.nav.services` |
| `#stack` | stack | `websites.nav.stack` |
| `#contato` | contato | `nav.contact` |

### Hero (`#inicio`)

Componente: `wh-hero`.

| Peça | Classe | Texto PT | Chave |
| --- | --- | --- | --- |
| Mídia | `wh-hero__media` | imagem de fundo, `alt` vazio, `loading="eager"`, `fetchpriority="high"`, 2400×1350 | — |
| Véu | `wh-hero__veil` | overlay sobre a foto | — |
| Kicker | `wh-hero__kicker` | Portfólio especializado | `portfolio.hub.label` |
| Título | `wh-hero__title` | Portfólio de Websites | `websites.hero.title` |
| Subtítulo | `wh-hero__sub` | Sites institucionais, landing pages e experiências web em produção | `websites.hero.sub` |
| Pitch | `wh-hero__pitch` | Cada projeto combina narrativa visual, performance e conversão — do wireframe ao deploy, com foco em credibilidade e resultado de negócio. | `websites.hero.pitch` |
| CTA projetos | `btn btn--accent` | Ver projetos → `#projetos` | `websites.hero.cta.projects` |
| CTA orçamento | `btn btn--ghost` | Solicitar orçamento → WhatsApp | `websites.hero.cta.talk` |

Imagem do hero:

- Disco: `assets/portfolio/websites/capa_fundo.webp`
- `src` no hub: `../assets/portfolio/websites/capa_fundo.webp`

Chaves definidas em i18n e não renderizadas neste HTML: `websites.hero.back` (“← Voltar ao portfólio geral”), `websites.hero.stat1` (“sites ao vivo”), `websites.hero.stat2` (“tempo de carga”), `websites.hero.stat3` (“responsivo”).

![Fundo do hero do hub](../assets/portfolio/websites/capa_fundo.webp)

### Lista de projetos (`#projetos`)

Componente: `wh-cases` > `wh-cases__list`.

| Peça | Classe | Texto PT | Chave |
| --- | --- | --- | --- |
| Título | `wh-cases__title` | Projetos Entregues | `websites.projects.title` |
| Subtítulo | `wh-cases__sub` | Websites reais, em produção — com case completo, screenshots e stack técnica. | `websites.projects.sub` |

Cada projeto é um `article.wh-case`:

| Peça | Classe | Papel |
| --- | --- | --- |
| Cabeçalho | `wh-case__head`, `wh-case__index`, `wh-case__badge` | Número 01–05 e badge do case |
| Card principal | `wh-feature` | Link para a página do case. Contém mídia, nome, descrição, tags, métricas e CTA |
| Mídia | `wh-feature__media`, `wh-feature__shade` | Capa (sempre a tela 01 do projeto) |
| Corpo | `wh-feature__body`, `wh-feature__name`, `wh-feature__desc`, `wh-feature__tags`, `wh-feature__meta`, `wh-feature__cta` | Nome em texto fixo (sem i18n). Descrição, métricas e “Ver case completo →” (`portfolio.cta`) vêm do i18n |
| Ações | `wh-case__actions` | Botão ghost para o case e, quando existe, `btn btn--primary wh-live-btn` “Ver site ao vivo ↗” (`project.links.live`) |
| Seleção | `wh-case__gallery`, `wh-case__gallery-label`, `wh-shots`, `wh-shot` | Quatro thumbs. O rótulo da seção é “Seleção de telas” (`websites.gallery.label`) |

A Vektor não tem botão de site ao vivo.

Capas usadas no card (`wh-feature__media`):

| Projeto | Arquivo |
| --- | --- |
| Habilita | `assets/portfolio/habilita-website/page-01.webp` |
| Stellamaris | `assets/portfolio/stellamaris-website/page-01.webp` |
| Transmiotto | `assets/portfolio/transmiotto-website/page-01.webp` |
| Vektor | `assets/portfolio/vektor-website/page-01.webp` |
| Nelci | `assets/portfolio/nelci-website/page-01.png` (`object-position: top center`) |

A seleção de quatro telas de cada case está na seção do projeto, com o rótulo que o hub realmente aplica.

### Serviços (`#servicos`)

Componente: `wh-services` > `wh-services__grid`.

| Peça | Texto PT | Chave |
| --- | --- | --- |
| Título `wh-services__title` | O que eu construo | `websites.services.title` |
| Subtítulo `wh-services__sub` | Websites pensados para converter visitantes em clientes — não apenas páginas bonitas. | `websites.services.sub` |

| # | Card | Título | Descrição |
| --- | --- | --- | --- |
| 01 | `glass-card glass-card--accent` | Sites Institucionais (`websites.s1.title`) | Presença digital profissional para empresas B2B — narrativa de serviços, cases, trajetória e formulário de contato integrado. |
| 02 | `glass-card` | Landing Pages (`websites.s2.title`) | Páginas focadas em conversão para campanhas, lançamentos e captura de leads — com animações, SEO e performance otimizada. |
| 03 | `glass-card` | Redesign & Migração (`websites.s3.title`) | Modernização de sites legados — nova identidade visual, stack atualizada, responsividade e deploy com zero downtime. |

O número fica em `wh-services__num`. Título e texto usam `glass-card__title` e `glass-card__desc`.

### Stack (`#stack`)

Componente: `wh-stack` > `wh-stack__grid`.

| Peça | Texto PT | Chave |
| --- | --- | --- |
| Título | Stack Web | `websites.stack.title` |
| Subtítulo | Tecnologias que uso para entregar sites rápidos, acessíveis e fáceis de manter. | `websites.stack.sub` |

| # | Card | Rótulo | Tags (`wh-stack__tag`) |
| --- | --- | --- | --- |
| 01 | `wh-stack__card wh-stack__card--accent` | Frontend (`websites.stack.frontend`) | React, TypeScript, HTML / CSS, Tailwind CSS |
| 02 | `wh-stack__card` | Build & Deploy (`websites.stack.build`) | Vite, Vercel, GitHub Actions |
| 03 | `wh-stack__card` | UX & Performance (`websites.stack.ux`) | GSAP, SEO, Core Web Vitals, Responsive |

Cabeçalho do card: `wh-stack__card-head`, `wh-stack__num`, `wh-stack__label`. Lista: `wh-stack__tags`.

### Contato (`#contato`)

O footer do hub é a seção `contact`, não o `footer` simples das páginas de case.

| Peça | Classe | Conteúdo |
| --- | --- | --- |
| Título | `contact__title` | Quer um website como estes? (`websites.footer.title`) |
| Subtítulo | `contact__sub` | Me conte sobre seu projeto — respondo em até 24h. (`websites.footer.sub`) |
| CTA | `btn btn--dark btn--lg` | Solicitar orçamento (`websites.hero.cta.talk`) |
| Links | `contact__links` | WhatsApp, telefone, LinkedIn, GitHub, portfólio completo |
| Copyright | `contact__copy` | © 2026 Bruno Miotto — Caxias do Sul, RS (`footer.copy`) |

| Canal | URL |
| --- | --- |
| WhatsApp | https://wa.me/5554999252321 |
| Telefone | `tel:+5554999252321` — +55 (54) 99925-2321 |
| LinkedIn | https://linkedin.com/in/brunomiotto08 |
| GitHub | https://github.com/brunomiotto08 |
| Portfólio completo | `../index.html#contato` (`websites.footer.main`) |

### Capa usada fora do hub

`assets/portfolio/websites/websites_capa.webp` não entra em `websites/index.html`. Ela é o fundo do card de websites na home, em [index.html](../index.html), classe `web-showcase__bg`, 1600×900.

![Capa do card de websites na home](../assets/portfolio/websites/websites_capa.webp)

## Catálogo de componentes do case

As cinco páginas em `projects/*-website.html` repetem o mesmo template. Scripts: [i18n.js](../i18n.js), [script.js](../script.js), [project-detail.js](../project-detail.js). CSS compartilhado: [style.css](../style.css).

### Shell

| Peça | Classes | Notas |
| --- | --- | --- |
| Topbar | `topbar`, `topbar__inner`, `topbar__brand`, `topbar__link`, `topbar__actions` | “Projetos” aponta para `../websites/` (`websites.nav.projects`) |
| Menu mobile | `mobile-menu` | Mesmo destino de projetos |
| Voltar | `project-back` | “← Voltar ao portfólio de websites” (`project.back.websites`) |
| Footer | `footer`, `footer__copy` | Só o copyright (`footer.copy`). Sem dock e sem bloco de contato do hub |
| Lightbox | `lightbox`, `lightbox__backdrop`, `lightbox__close`, `lightbox__nav`, `lightbox__nav--prev`, `lightbox__nav--next`, `lightbox__figure`, `lightbox__img`, `lightbox__caption` | Aberto pelos itens `data-lightbox` da galeria visual. Controles: `aria.lightbox.close`, `aria.lightbox.prev`, `aria.lightbox.next` |

### Seções, nesta ordem

1. **Hero do case** — `header.project-hero`
   - `project-hero__inner`, `project-hero__cover` (imagem 01), `project-hero__meta`
   - `project-hero__type`, `project-hero__year` (2026 em todos)
   - `project-hero__title` com `case-word` (`case-word--ultra` ou `case-word--mono`)
   - `project-hero__subtitle` (`data-i18n-html`)
   - `project-hero__tags` > `portfolio-card__tag`
   - `project-links` com `btn btn--primary` (ao vivo) e, na Habilita, `btn btn--ghost` (GitHub)
2. **Impacto** — `project-impact`
   - Três colunas `project-impact__col`: Antes (`case.before`), Solução (`project-impact__label--solution`, `case.solution`), Resultado (`project-impact__label--result`, `case.result`)
   - Métricas `project-impact__metrics` > `metric-pill` > `metric-pill__value` + `metric-pill__label`
3. **Sobre** — `project-section` em grid `project-section__grid`
   - Rótulo `project-section__label`: Sobre (`project.about`)
   - Dois parágrafos `project-text` com HTML (`*.about.p1`, `*.about.p2`)
   - Três destaques `project-versions` > `project-versions__item` (`project-versions__ver` 01–03 + `project-versions__desc`)
4. **Funcionalidades** — `project-section`
   - Título visual “Principais funcionalidades” (a palavra “Principais” usa `case-word case-word--light`)
   - Grid `project-features`. Seis artigos `project-feature`, sempre nesta variante:
     - 01 `project-feature--lead project-feature--accent`
     - 02 `project-feature--side`
     - 03 `project-feature--cell`
     - 04 `project-feature--cell`
     - 05 `project-feature--cell`
     - 06 `project-feature--wide`
   - Dentro: `project-feature__num`, `project-feature__title`, `project-feature__desc`
5. **Arquitetura** — `project-section project-section--alt`
   - Rótulo Arquitetura (`project.arch`)
   - Parágrafo `*.arch.p`
   - Fluxo `project-flow` > `project-flow__line` + `project-flow__steps` > `project-flow__step` (`project-flow__num`, `project-flow__label`)
6. **Scroll completo** — `project-section project-section--alt`
   - Título “Scroll completo”
   - Subtítulo `project.scroll.sub`: “Captura contínua do site — role para ver cada dobra da página.”
   - Faixa `project-scroll` (`role="region"`, `project.scroll.aria`: “Capturas sequenciais do site”) > `project-scroll__strip` > `project-scroll__frame` + `project-scroll__label`
   - Inclui todas as telas do projeto, em ordem
7. **Galeria visual** — `project-section`
   - Título “Galeria visual”
   - Subtítulo `project.gallery.sub`: “Telas do site em produção — clique para ampliar.”
   - Grid `project-gallery` (`data-stagger`)
   - Item `project-gallery__item` com modificadores `--hero`, `--tall`, `--wide` ou `--full`
   - Botão `project-gallery__trigger` (às vezes `--tall`), zoom `project-gallery__zoom`, `figcaption`
   - Atributos `data-lightbox` e `data-i18n-caption`
   - Subconjunto das telas. As que ficam só na faixa de scroll estão marcadas em cada case
8. **Stack** — `project-section project-section--alt`
   - Rótulo Stack (`project.stack`)
   - Lista `project-stack` > `project-stack__item` (`project-stack__name` + `project-stack__role`)
9. **CTA** — `project-cta`
   - `project-cta__text`: “Quer ver mais projetos?” (`project.cta.text`)
   - `btn btn--primary` para `../websites/` (`project.cta.websites`: “Voltar ao portfólio de websites”)

Prefixo i18n da Habilita: `project.website.*` e `portfolio.website.*`. Os outros quatro usam o slug: `stellamaris`, `transmiotto`, `vektor`, `nelci`.

## 01 — Habilita Website

| Campo | Valor |
| --- | --- |
| Índice no hub | 01 |
| Badge | Case · Marketing (`portfolio.website.badge`) |
| Tipo | SPA · Site Institucional (`project.website.type`) |
| Ano | 2026 |
| Título na página | Habilita **Website** (`case-word--ultra`) |
| Meta título | Habilita Website — Bruno Miotto (`meta.project.website.title`) |
| Meta descrição | Site institucional one-page em React para empresa de automação industrial — serviços, projetos, trajetória e contato com animações e cursor customizado. |
| Página do case | [projects/habilita-website.html](../projects/habilita-website.html) |
| Ao vivo | https://habilita-site.vercel.app/ |
| GitHub | https://github.com/brunomiotto08/habilita_site |
| Pasta de imagens | `assets/portfolio/habilita-website/` |

**Subtítulo.** Site one-page para a Habilita — empresa de automação industrial, painéis elétricos e conformidade NR10/NR12. Apresenta serviços, portfólio de projetos, trajetória, processo de trabalho, tecnologias parceiras e formulário de contato em uma experiência visual premium. (`project.website.subtitle`)

**Card no hub.** Site institucional one-page para empresa de automação industrial — hero animado, serviços, portfólio, trajetória, processo e contato com cursor customizado. (`portfolio.website.desc`)

**Tags no hub:** React, TypeScript, Tailwind CSS, Vite.

**Tags no case:** React, TypeScript, Vite, Tailwind CSS.

### Impacto

| Coluna | Texto | Chave |
| --- | --- | --- |
| Antes | Empresa de automação industrial sem presença digital que transmitisse credibilidade técnica para decisores. | `portfolio.website.before` |
| Solução | Site one-page premium com narrativa de serviços, cases, trajetória e formulário de contato — deploy em produção. | `portfolio.website.solution` |
| Resultado | Presença digital profissional ao vivo, com narrativa clara para decisores industriais e formulário de conversão. | `project.website.result` |

| Valor | Rótulo | Chave |
| --- | --- | --- |
| Live | site em produção | `portfolio.website.m1` |
| &lt;2s | carregamento | `portfolio.website.m2` |

### Sobre

O **Habilita Website** foi desenvolvido como vitrine digital da empresa — traduzindo credibilidade técnica em uma interface moderna, com narrativa clara para decisores industriais que buscam automação, painéis elétricos e engenharia de precisão.

Construído como SPA estática com React e Vite, o site prioriza performance, animações suaves e componentes reutilizáveis — cursor customizado, contadores animados, text reveal e cards interativos — sem backend, ideal para hospedagem estática.

Destaques:

1. Hero com slider de produtos e CTAs para serviços e contato
2. Contadores animados (+6 anos, 150+ projetos, 100% conformidade)
3. Cursor customizado e microinterações em toda a navegação

### Funcionalidades

| # | Variante | Título | Descrição | Chaves |
| --- | --- | --- | --- | --- |
| 01 | lead + accent | Hero interativo | Slides alternando painéis elétricos, CLPs e visão explodida de quadros — com badge de engenharia, headline em destaque e botões de conversão. | `f01` |
| 02 | side | Serviços em bento grid | Cards para automação industrial, painéis elétricos, NR10/NR12 e integração de chão de fábrica — com ícones, descrições e links de aprofundamento. | `f02` |
| 03 | cell | Portfólio de projetos | Grid de cases reais (NR12, QGBT, EtherCAT, SCADA) com tags técnicas, destaque editorial e estatísticas da empresa. | `f03` |
| 04 | cell | Trajetória & processo | Timeline vertical com marcos de 2020 a 2024 e fluxo horizontal em 5 etapas — do diagnóstico técnico ao suporte contínuo. | `f04` |
| 05 | cell | Tecnologia & parceiros | Seção de equipamentos e plataformas — OMRON, EtherCAT, Siemens — reforçando credibilidade com fabricantes líderes do mercado. | `f05` |
| 06 | wide | Contato & UX premium | Formulário institucional, navbar flutuante com glassmorphism, scroll suave entre seções e animações de entrada no viewport. | `f06` |

### Arquitetura e componentes do site

A arquitetura segue o padrão de componentes por seção: cada bloco da página (Hero, Serviços, Projetos, etc.) é um componente React independente, estilizado com Tailwind e animações customizadas, compilado pelo Vite em assets estáticos prontos para deploy. (`project.website.arch.p`)

Fluxo da página: Hero → Serviços → Projetos → Trajetória → Processo → Tecnologia → Contato.

Componentes nomeados na stack do case (não há arquivos `.tsx` neste repositório):

| Nome na stack | Papel | Chave |
| --- | --- | --- |
| React + TypeScript | SPA tipada com hot reload e build otimizado | `project.website.stack.react` |
| Tailwind CSS | Design system utilitário e responsivo | `project.website.stack.tailwind` |
| Vite | Bundler rápido com tree-shaking de assets | `project.website.stack.vite` |
| Animações customizadas | Text reveal, contadores e transições de scroll | `project.website.stack.anim` |
| Custom Cursor | Hook `useMousePosition` e cursor circular customizado | `project.website.stack.cursor` |
| UI Components | `BentoCard`, `CountUp`, `SpotlightCard` reutilizáveis | `project.website.stack.components` |

### Imagens

`src` nas páginas: `../assets/portfolio/habilita-website/<arquivo>`.

| Arquivo | Capa do case | Card do hub | Seleção do hub | Faixa de scroll | Galeria visual | Legenda ligada ao arquivo |
| --- | --- | --- | --- | --- | --- | --- |
| `page-01.webp` | sim | capa | — | 01 | `--hero`, `c1` | Hero — automação industrial no mais alto nível. Alt da capa: “Hero do site institucional Habilita”. Alt da galeria: “Hero Habilita” |
| `page-02.webp` | — | — | rótulo curto `c4` “CLP” | 02 | `--tall`, `c2` | Galeria: Painel — projetos de automação elétrica. Alt: “Painel elétrico” |
| `page-03.webp` | — | — | — | 03 | item padrão, `c4` | CLP — controlador lógico programável. Alt: “Seção CLP” |
| `page-04.webp` | — | — | — | 04 | — | só na faixa de scroll |
| `page-05.webp` | — | — | rótulo curto `c6` “Trajetória” | 05 | `--wide`, `c5` | Trajetória — timeline de experiência. Alt: “Portfólio de projetos” |
| `page-06.webp` | — | — | — | 06 | — | só na faixa de scroll. A chave `c6` repete o texto de `c5` e é o rótulo do thumb `page-05` no hub |
| `page-07.webp` | — | — | rótulo curto `c7` “Processo” | 07 | item padrão, `c7` | Processo — fluxo em 5 etapas. Alt: “Seção processo” |
| `page-08.webp` | — | — | — | 08 | — | só na faixa de scroll. A chave `c8` (“Tecnologia — OMRON, EtherCAT e Siemens”) não está ligada a nenhuma figura |
| `page-09.webp` | — | — | rótulo curto `c10` “Contato” | 09 | `--full`, `c9` | Galeria: Métricas — excelência em números. Alt: “Seção métricas”. O hub chama este thumb de Contato (`c10`: “Contato — formulário institucional”) |

Chaves de galeria sem figura própria na galeria visual: `project.website.gallery.c3` (“Serviços — card de automação industrial”), `c6`, `c8` e `c10`.

Caminho no disco de cada arquivo: `assets/portfolio/habilita-website/page-01.webp` até `page-09.webp`.

![Habilita 01](../assets/portfolio/habilita-website/page-01.webp)

![Habilita 02](../assets/portfolio/habilita-website/page-02.webp)

![Habilita 03](../assets/portfolio/habilita-website/page-03.webp)

![Habilita 04](../assets/portfolio/habilita-website/page-04.webp)

![Habilita 05](../assets/portfolio/habilita-website/page-05.webp)

![Habilita 06](../assets/portfolio/habilita-website/page-06.webp)

![Habilita 07](../assets/portfolio/habilita-website/page-07.webp)

![Habilita 08](../assets/portfolio/habilita-website/page-08.webp)

![Habilita 09](../assets/portfolio/habilita-website/page-09.webp)

## 02 — Stellamaris Cidadania

| Campo | Valor |
| --- | --- |
| Índice no hub | 02 |
| Badge | Case · Jurídico (`portfolio.stellamaris.badge`) |
| Tipo | SPA · Cidadania Italiana (`project.stellamaris.type`) |
| Ano | 2026 |
| Título na página | Stellamaris **Cidadania** (`case-word--mono`) |
| Meta título | Stellamaris Cidadania — Bruno Miotto |
| Meta descrição | Site institucional premium para assessoria de cidadania italiana — hero cinematográfico, globo 3D, timeline de processo e depoimentos Google. |
| Página do case | [projects/stellamaris-website.html](../projects/stellamaris-website.html) |
| Ao vivo | https://www.stellamariscidadania.com.br/ |
| GitHub | sem link |
| Pasta de imagens | `assets/portfolio/stellamaris-website/` |

**Subtítulo.** Site institucional premium para assessoria de cidadania italiana — hero cinematográfico em bordô e dourado, serviços em cards editoriais, timeline de processo, equipe jurídica, galeria do escritório, parceiros e depoimentos reais do Google.

**Card no hub.** Site premium para assessoria de cidadania italiana — hero bordô/dourado, globo 3D, timeline de processo, galeria do escritório e depoimentos Google.

**Tags no hub e no case:** React, Three.js, Tailwind CSS no hub. No case: React, TypeScript, Tailwind CSS, Three.js.

### Impacto

| Coluna | Texto |
| --- | --- |
| Antes | Escritório de cidadania sem presença digital que transmitisse confiança jurídica e sofisticação para famílias brasileiras. |
| Solução | One-page editorial com narrativa emocional, processo em 6 etapas, globo 3D interativo e prova social integrada. |
| Resultado | Marca digital premium ao vivo, com CTA claro para captação de leads qualificados em cidadania italiana. |

| Valor | Rótulo |
| --- | --- |
| Live | site em produção |
| 5.0★ | avaliações Google |

### Sobre

O **Stellamaris Cidadania** conecta brasileiros às suas raízes italianas com assessoria jurídica especializada. O site traduz essa proposta em uma experiência visual sofisticada — paleta bordô e dourado, tipografia serifada nos destaques e fotografia real do escritório.

Construído como SPA com React e Vite, combina animações de scroll, cards assimétricos, timeline vertical de processo, globo 3D rotativo para mobilidade europeia e seção de depoimentos com avaliações reais do Google.

Destaques:

1. Hero com slider de escritório e barra de estatísticas (+100 cidadanias, 5.0★)
2. Globo 3D interativo com destaque Schengen e passaporte europeu
3. Timeline de 6 etapas do processo com cards alternados

### Funcionalidades

| # | Variante | Título | Descrição |
| --- | --- | --- | --- |
| 01 | lead + accent | Hero cinematográfico | Headline em dourado, slider de fotos do escritório, CTA principal e faixa de métricas (+100 cidadanias, 50+ clientes, 5.0★, +8 anos). |
| 02 | side | Serviços editoriais | Grid assimétrico com cards de cidadania italiana, direito de cidadania e CTAs de conversão — com renders 3D de passaportes. |
| 03 | cell | Mobilidade europeia | Seção imersiva com globo 3D rotativo, lista de benefícios Schengen e narrativa sobre liberdade de circulação na Europa. |
| 04 | cell | Equipe & processo | Apresentação da Dra. Edi Martini, equipe jurídica especializada e timeline vertical com 6 etapas — da avaliação inicial à cidadania reconhecida. |
| 05 | cell | Galeria & parceiros | Bento grid com fotos do escritório, cards de compromisso, logos de parceiros em grid monocromático e slider de depoimentos Google. |
| 06 | wide | Oportunidades & CTA | Seção de benefícios (viagens, trabalho, estudo, família), métricas de aprovação e banner final de conversão com WhatsApp flutuante. |

### Arquitetura e componentes do site

Componentes por seção com React + Tailwind. O globo 3D usa Three.js com interação de arrastar. Depoimentos e parceiros são dados estáticos tipados; animações de entrada via Intersection Observer e transições CSS customizadas.

Fluxo: Hero → Serviços → Mobilidade → Equipe → Processo → Galeria → Contato.

| Nome na stack | Papel |
| --- | --- |
| React + TypeScript | SPA tipada com componentes por seção |
| Tailwind CSS | Design system com paleta bordô/dourado |
| Three.js | Globo 3D interativo para mobilidade europeia |
| Vite | Build otimizado para deploy estático |
| Animações | Scroll reveal, sliders e microinterações |

### Imagens

`src`: `../assets/portfolio/stellamaris-website/<arquivo>`.

| Arquivo | Capa / card | Seleção do hub | Scroll | Galeria visual | Legenda |
| --- | --- | --- | --- | --- | --- |
| `page-01.webp` | capa do case e do hub. Alt da capa: “Hero Stellamaris Cidadania” | — | 01 | `--hero`, `c1`. Alt: “Hero Stellamaris” | Hero — cidadania italiana com estatísticas |
| `page-02.webp` | — | — | 02 | `--tall`, `c2`. Alt: “Serviços”. `object-position: top center` | Serviços — cards editoriais com passaportes |
| `page-03.webp` | — | rótulo `c3` “Mobilidade” | 03 | item padrão, `c3`. Alt: “Mobilidade europeia” | Mobilidade — globo 3D e benefícios Schengen |
| `page-04.webp` | — | — | 04 | item padrão, `c4`. Alt: “Equipe jurídica” | Equipe — assessoria jurídica especializada |
| `page-05.webp` | — | rótulo `c5` “Processo” | 05 | `--wide`, `c5`. Alt: “Processo”. `object-position: top center` | Processo — timeline em 6 etapas |
| `page-06.webp` | — | rótulo `c6` “Galeria” | 06 | item padrão, `c6`. Alt: “Galeria do escritório”. `object-position: top center` | Galeria — por dentro da Stellamaris |
| `page-07.webp` | — | — | 07 | item padrão, `c7`. Alt: “Parceiros” | Parceiros — alianças de confiança |
| `page-08.webp` | — | — | 08 | `--wide`, `c8`. Alt: “Depoimentos” | Depoimentos — avaliações reais do Google |
| `page-09.webp` | — | — | 09 | — | só na faixa de scroll |
| `page-10.webp` | — | rótulo `c9` “Oportunidades” | 10 | item padrão, `c9`. Alt: “Oportunidades” | Oportunidades — benefícios da cidadania europeia |

Não existe chave `project.stellamaris.gallery.c10`. A tela 09 não tem legenda.

Caminhos: `assets/portfolio/stellamaris-website/page-01.webp` até `page-10.webp`.

![Stellamaris 01](../assets/portfolio/stellamaris-website/page-01.webp)

![Stellamaris 02](../assets/portfolio/stellamaris-website/page-02.webp)

![Stellamaris 03](../assets/portfolio/stellamaris-website/page-03.webp)

![Stellamaris 04](../assets/portfolio/stellamaris-website/page-04.webp)

![Stellamaris 05](../assets/portfolio/stellamaris-website/page-05.webp)

![Stellamaris 06](../assets/portfolio/stellamaris-website/page-06.webp)

![Stellamaris 07](../assets/portfolio/stellamaris-website/page-07.webp)

![Stellamaris 08](../assets/portfolio/stellamaris-website/page-08.webp)

![Stellamaris 09](../assets/portfolio/stellamaris-website/page-09.webp)

![Stellamaris 10](../assets/portfolio/stellamaris-website/page-10.webp)

## 03 — Transmiotto Viagens

| Campo | Valor |
| --- | --- |
| Índice no hub | 03 |
| Badge | Case · Transporte (`portfolio.transmiotto.badge`) |
| Tipo | SPA · Transporte & Turismo (`project.transmiotto.type`) |
| Ano | 2026 |
| Título na página | Transmiotto **Viagens** (`case-word--ultra`) |
| Meta título | Transmiotto Viagens — Bruno Miotto |
| Meta descrição | Site institucional dark premium para transporte e turismo — frota executiva, roteiros da Serra Gaúcha e CTA para orçamento. |
| Página do case | [projects/transmiotto-website.html](../projects/transmiotto-website.html) |
| Ao vivo | https://www.transmiotto.com.br/ |
| GitHub | sem link |
| Pasta de imagens | `assets/portfolio/transmiotto-website/` |

**Subtítulo.** Site institucional dark premium para empresa de transporte e turismo da Serra Gaúcha — hero cinematográfico com frota em destaque, métricas de trajetória, serviços em accordion, showcase de veículos executivos, roteiros turísticos e depoimentos de clientes.

**Card no hub.** Site dark premium para transporte e turismo — frota executiva, serviços por ocasião, roteiros da Serra Gaúcha e CTA direto para orçamento.

**Tags no hub:** React, GSAP, Tailwind CSS.

**Tags no case:** React, TypeScript, Tailwind CSS, GSAP.

### Impacto

| Coluna | Texto |
| --- | --- |
| Antes | Transportadora com 25 anos de história sem site que transmitisse confiança, modernidade e qualidade da frota executiva. |
| Solução | One-page dark com narrativa visual da frota, serviços por ocasião, grid de roteiros e CTA direto para orçamento. |
| Resultado | Presença digital premium que posiciona a Transmiotto como referência em fretamento e turismo na Serra Gaúcha. |

O HTML estático do case acrescenta “via WhatsApp” no fim da solução. Com o i18n carregado, o texto publicado é o da tabela.

| Valor | Rótulo |
| --- | --- |
| 25 | anos de história |
| 100% | frota própria |

### Sobre

A **Transmiotto Viagens e Turismo** é uma empresa familiar de Vila Flores com 25 anos transportando passageiros na Serra Gaúcha. O site traduz essa trajetória em uma experiência visual dark e cinematográfica — frota própria, veículos executivos e atendimento personalizado.

Construído com React, TypeScript e Tailwind, o projeto combina glassmorphism, tipografia editorial, animações GSAP no scroll e grids assimétricos de fotografia real da frota — micro-ônibus, vans Mercedes e interiores em couro.

Destaques:

1. Hero com frota em perspectiva e card glassmorphism de orçamento
2. Métricas de impacto — 25 anos, 50k+ passageiros, frota própria
3. Showcase de frota com cards de micro-ônibus e van executiva

### Funcionalidades

| # | Variante | Título | Descrição |
| --- | --- | --- | --- |
| 01 | lead + accent | Hero cinematográfico | Frota em perspectiva com gradiente escuro, branding em destaque e card flutuante com CTAs de orçamento e frota — glassmorphism e tipografia editorial. |
| 02 | side | Métricas & serviços | Barra de clientes parceiros, números de impacto (25 anos, 50k+ passageiros) e lista de serviços em accordion — fretamento, executivo, escolar e linhas. |
| 03 | cell | Showcase de frota | Cards de micro-ônibus e van executiva com specs (ar-condicionado, USB, couro), fotos reais e grid de interiores premium. |
| 04 | cell | Modelos & detalhes | Seção clara com vans em perspectiva, grid de especificações (lugares, climatização, conforto) e masonry de fotos com labels executivo/premium. |
| 05 | cell | Roteiros turísticos | Grid de destinos da Serra Gaúcha — Gramado, Canela, Bento Gonçalves, Cambará — com fotos editoriais e links de exploração. |
| 06 | wide | Depoimentos & CTA | Testemunhos de clientes corporativos, escolares e eventos; CTA final com contato direto, WhatsApp flutuante e footer com composição da frota. |

### Arquitetura e componentes do site

Componentes React por seção com tema dark consistente. Animações GSAP no scroll para reveals e parallax sutil. Fotos otimizadas; dados de frota e roteiros em arrays tipados; CTA integrado com WhatsApp Business.

Fluxo: Hero → Serviços → Frota → Modelos → Roteiros → Depoimentos → Contato.

| Nome na stack | Papel |
| --- | --- |
| React + TypeScript | SPA tipada com tema dark consistente |
| Tailwind CSS | Glassmorphism, grids e tipografia editorial |
| GSAP | Scroll reveals, parallax e transições suaves |
| Vite | Build otimizado com assets comprimidos |
| WhatsApp CTA | Botão flutuante e links de orçamento direto |

### Imagens

`src`: `../assets/portfolio/transmiotto-website/<arquivo>`.

A galeria visual tem quatro figuras. As outras oito telas aparecem só na faixa de scroll, e a 11 também no hub.

| Arquivo | Capa / card | Seleção do hub | Scroll | Galeria visual | Legenda |
| --- | --- | --- | --- | --- | --- |
| `page-01.webp` | capa. Alt: “Hero Transmiotto Viagens” | — | 01 | `--hero`, `c1`. Alt: “Hero Transmiotto”. `object-position: top center` | Hero — frota executiva e card de orçamento |
| `page-02.webp` | — | — | 02 | — | só na faixa de scroll |
| `page-03.webp` | — | rótulo `c3` “Frota” | 03 | `--tall`, `c2`. Alt: “Serviços”. `object-position: top center` | Galeria: Serviços — accordion por ocasião de viagem. O hub rotula este arquivo como Frota |
| `page-04.webp` | — | — | 04 | — | só na faixa de scroll. Chave `c4` existe: “Detalhes — cada quilômetro com padrão executivo”, sem figura |
| `page-05.webp` | — | — | 05 | — | só na faixa de scroll |
| `page-06.webp` | — | rótulo `c5` “Modelos” | 06 | item padrão, `c5`. Alt: “Modelos de vans”. `object-position: top center` | Modelos — três vans, um padrão premium |
| `page-07.webp` | — | — | 07 | — | só na faixa de scroll. Chave `c7`: “Depoimentos — clientes corporativos e eventos”, sem figura |
| `page-08.webp` | — | rótulo `c6` “Roteiros” | 08 | `--wide`, `c6`. Alt: “Roteiros”. `object-position: top center` | Roteiros — destinos da Serra Gaúcha |
| `page-09.webp` | — | — | 09 | — | só na faixa de scroll |
| `page-10.webp` | — | — | 10 | — | só na faixa de scroll |
| `page-11.webp` | — | rótulo `c8` “CTA” | 11 | — | CTA — sua próxima viagem começa aqui (`c8`), usado só como rótulo do hub |
| `page-12.webp` | — | — | 12 | — | só na faixa de scroll |

Caminhos: `assets/portfolio/transmiotto-website/page-01.webp` até `page-12.webp`.

![Transmiotto 01](../assets/portfolio/transmiotto-website/page-01.webp)

![Transmiotto 02](../assets/portfolio/transmiotto-website/page-02.webp)

![Transmiotto 03](../assets/portfolio/transmiotto-website/page-03.webp)

![Transmiotto 04](../assets/portfolio/transmiotto-website/page-04.webp)

![Transmiotto 05](../assets/portfolio/transmiotto-website/page-05.webp)

![Transmiotto 06](../assets/portfolio/transmiotto-website/page-06.webp)

![Transmiotto 07](../assets/portfolio/transmiotto-website/page-07.webp)

![Transmiotto 08](../assets/portfolio/transmiotto-website/page-08.webp)

![Transmiotto 09](../assets/portfolio/transmiotto-website/page-09.webp)

![Transmiotto 10](../assets/portfolio/transmiotto-website/page-10.webp)

![Transmiotto 11](../assets/portfolio/transmiotto-website/page-11.webp)

![Transmiotto 12](../assets/portfolio/transmiotto-website/page-12.webp)

## 04 — Vektor

| Campo | Valor |
| --- | --- |
| Índice no hub | 04 |
| Badge | Case · Fintech (`portfolio.vektor.badge`) |
| Tipo | SPA · Fintech Institucional (`project.vektor.type`) |
| Ano | 2026 |
| Título na página | Vektor (sem `case-word`) |
| Meta título | Vektor — Bruno Miotto |
| Meta descrição | Landing page dark premium para infraestrutura institucional de trading — terminal privado, roteamento global e onboarding por convite. |
| Página do case | [projects/vektor-website.html](../projects/vektor-website.html) |
| Ao vivo | sem botão e sem URL nesta página |
| GitHub | sem link |
| Pasta de imagens | `assets/portfolio/vektor-website/` |

**Subtítulo.** Landing page dark premium para infraestrutura de trading institucional — ticker de mercados ao vivo, bento de capacidades, terminal privado, mapa de roteamento global e onboarding por convite.

**Card no hub.** Landing page dark premium para infraestrutura institucional de trading — terminal privado, roteamento global, métricas de performance e onboarding por convite.

**Tags no hub e no case:** React, TypeScript, Tailwind CSS, Vite.

### Impacto

| Coluna | Texto |
| --- | --- |
| Antes | Produto fintech institucional sem presença digital que transmitisse discrição, performance e confiança soberana. |
| Solução | One-page dark com tipografia editorial, dados ao vivo, mockups de terminal e narrativa de infraestrutura privada. |
| Resultado | Marca digital institucional com CTA de acesso privado e prova visual de latência, volume e cobertura global. |

| Valor | Rótulo |
| --- | --- |
| 0.4ms | latência mediana |
| $50B+ | volume mensal |

### Sobre

O **Vektor** posiciona infraestrutura de capital privado — execução, custódia e roteamento — em uma experiência visual discreta e institucional, com tipografia serifada, paleta preta/dourada e dados de mercado em destaque.

Construído como SPA com React e Vite, o site combina ticker ao vivo, grids bento, mockups de terminal de trading, mapa de liquidez global e CTA de acesso por convite — sem backend, pronto para deploy estático.

Destaques:

1. Hero editorial com ticker de mercados e bento de capacidades
2. Terminal privado com order book, candles e posição em tempo real
3. Mapa de roteamento global e métricas de performance ($50B+, 0.4ms)

### Funcionalidades

| # | Variante | Título | Descrição |
| --- | --- | --- | --- |
| 01 | lead + accent | Hero institucional | Ticker de mercados, headline serifada e grid bento com custódia, execução sub-ms e liquidez global — tipografia editorial sobre fundo preto. |
| 02 | side | Platform & throughput | Dashboard de execução com chart de lit/dark/internalizer, nós NY4·LD4·TY3 e bloco de segurança HSM com zero-trust. |
| 03 | cell | Global routing | Mapa interativo de malha privada com lanes ativas, hop mediano e uptime — fiber e microwave entre hubs financeiros. |
| 04 | cell | Private terminal | Mockup de terminal com candles, order book, posição e abas de risk/alerts — visual de produto real para alocadores. |
| 05 | cell | Portfolio & performance | Alocação por classe, fluxo de capital, sinal de IA e KPIs de volume/latência/SLA com citação institucional. |
| 06 | wide | Private access CTA | Seção de onboarding por convite com captura de e-mail e narrativa de legacy — conversão discreta para family offices. |

### Arquitetura e componentes do site

Componentes React por seção com tema dark consistente e tipografia serifada nos headlines. Dados de mercado, métricas e cards em arrays tipados; charts e mockups como UI estática otimizada; build Vite para deploy estático.

Fluxo: Hero → Platform → Routing → Terminal → Showcase → Performance → Access.

| Nome na stack | Papel |
| --- | --- |
| React + TypeScript | SPA tipada com seções modulares |
| Tailwind CSS | Tema dark, bento grids e tipografia editorial |
| Vite | Build rápido para deploy estático |
| Data UI | Charts, tickers e mockups de terminal |
| Motion | Reveals sutis e microinterações |

Não há chave `project.vektor.gallery.c2`, `c8` nem `c9`.

### Imagens

`src`: `../assets/portfolio/vektor-website/<arquivo>`.

| Arquivo | Capa / card | Seleção do hub | Scroll | Galeria visual | Legenda |
| --- | --- | --- | --- | --- | --- |
| `page-01.webp` | capa. Alt do card no hub: “Vektor” | — | 01 | `--hero`, `c1`. Alt: “Hero Vektor”. `object-position: top center` | Hero — power without spectacle |
| `page-02.webp` | — | — | 02 | — | só na faixa de scroll |
| `page-03.webp` | — | rótulo `c3` “Platform” | 03 | `--tall`, `c3`. Alt: “Platform”. `object-position: top center` | Platform — infrastructure & throughput |
| `page-04.webp` | — | rótulo `c4` “Routing” | 04 | `--wide`, `c4`. Alt: “Routing”. `object-position: top center` | Routing — liquidez global com discrição |
| `page-05.webp` | — | rótulo `c5` “Terminal” | 05 | item padrão, `c5`. Alt: “Terminal”. `object-position: top center` | Terminal — private trading desk |
| `page-06.webp` | — | — | 06 | item padrão, `c6`. Alt: “Showcase”. `object-position: top center` | Showcase — portfolio soberano |
| `page-07.webp` | — | rótulo `c7` “Performance” | 07 | `--wide`, `c7`. Alt: “Performance”. `object-position: top center` | Performance — escala em bilhões |
| `page-08.webp` | — | — | 08 | — | só na faixa de scroll |
| `page-09.webp` | — | — | 09 | — | só na faixa de scroll |

Caminhos: `assets/portfolio/vektor-website/page-01.webp` até `page-09.webp`.

![Vektor 01](../assets/portfolio/vektor-website/page-01.webp)

![Vektor 02](../assets/portfolio/vektor-website/page-02.webp)

![Vektor 03](../assets/portfolio/vektor-website/page-03.webp)

![Vektor 04](../assets/portfolio/vektor-website/page-04.webp)

![Vektor 05](../assets/portfolio/vektor-website/page-05.webp)

![Vektor 06](../assets/portfolio/vektor-website/page-06.webp)

![Vektor 07](../assets/portfolio/vektor-website/page-07.webp)

![Vektor 08](../assets/portfolio/vektor-website/page-08.webp)

![Vektor 09](../assets/portfolio/vektor-website/page-09.webp)

## 05 — Nelci Advocacia

| Campo | Valor |
| --- | --- |
| Índice no hub | 05 |
| Badge | Case · Jurídico (`portfolio.nelci.badge`) |
| Tipo | SPA · Advocacia (`project.nelci.type`) |
| Ano | 2026 |
| Título na página | Nelci **Advocacia** (`case-word--mono`) |
| Meta título | Nelci Advocacia — Bruno Miotto |
| Meta descrição | Landing page dark premium para advocacia trabalhista e previdenciária em Caxias do Sul — hero editorial, áreas de atuação, contato WhatsApp e galeria do escritório. |
| Página do case | [projects/nelci-website.html](../projects/nelci-website.html) |
| Ao vivo | https://www.nelciraimundoadvocacia.com.br/ |
| GitHub | sem link |
| Pasta de imagens | `assets/portfolio/nelci-website/` |
| Formato | PNG, não WebP. A capa do hub e várias figuras usam `object-position: top center` |

**Subtítulo.** Landing page dark premium para advocacia trabalhista e previdenciária em Caxias do Sul — hero editorial em marrom e dourado, áreas de atuação, contato via WhatsApp e galeria do escritório.

**Card no hub.** Landing page dark premium para advocacia trabalhista e previdenciária em Caxias do Sul — hero editorial, áreas de atuação, contato WhatsApp e galeria do escritório.

**Tags no hub e no case:** React, TypeScript, Tailwind CSS, Vite.

### Impacto

| Coluna | Texto |
| --- | --- |
| Antes | Advogado individual sem presença digital que transmitisse clareza, confiança e proximidade para clientes trabalhistas e previdenciários. |
| Solução | One-page dark com tipografia editorial, áreas de atuação organizadas, formulário WhatsApp e prova visual do escritório. |
| Resultado | Marca digital premium com CTA direto ao WhatsApp e narrativa clara de orientação jurídica em Caxias do Sul. |

| Valor | Rótulo |
| --- | --- |
| Live | site em produção |
| 7+6 | temas de atuação |

### Sobre

O **Nelci Raimundo Bergozza — Sociedade Individual de Advocacia** atua em Direito do Trabalho e Previdenciário em Caxias do Sul. O site traduz a proposta de “clareza e compromisso” em uma experiência dark premium — paleta marrom e dourado, tipografia serifada nos destaques e navegação enxuta.

A landing organiza áreas de atuação (7 temas trabalhistas e 6 previdenciários), canais de contato, formulário que envia pelo WhatsApp, endereço no Centro Empresarial Tonin e galeria do espaço físico — com atendimento presencial ou online.

Destaques:

1. Hero dark com ícone de balança e CTAs Contato + WhatsApp
2. Cards Trabalhista e Previdenciário com listas de temas
3. Contato com formulário WhatsApp, localização e galeria do escritório

### Funcionalidades

| # | Variante | Título | Descrição |
| --- | --- | --- | --- |
| 01 | lead + accent | Hero editorial | Fundo marrom com spotlight, kicker “Trabalhista e Previdenciário · Caxias do Sul”, headline dourada e CTAs Contato + WhatsApp. |
| 02 | side | Áreas de atuação | Dois cards contrastantes — Trabalhista (7 temas) e Previdenciário (6 temas) — com listas claras de casos e benefícios. |
| 03 | cell | Contato & formulário | Seção “Seu direito merece clareza” com canais, endereço, telefone, horário e formulário que envia pelo WhatsApp. |
| 04 | cell | Localização | Card de endereço e contato no Centro Empresarial Tonin — Rua Sinimbu, 1209, com link para Google Maps. |
| 05 | cell | Nosso espaço | Galeria com sala de reuniões/atendimento e fachada do Centro Empresarial Tonin — prova visual de privacidade e conforto. |
| 06 | wide | WhatsApp flutuante | Botão flutuante e CTAs repetidos ao longo da página — conversão direta para atendimento em Caxias do Sul ou online. |

### Arquitetura e componentes do site

One-page em React + Tailwind com seções modulares. Paleta marrom/dourado e tipografia serifada nos headlines. Listas de temas trabalhistas e previdenciários como dados tipados; formulário redireciona para WhatsApp; animações de entrada via Intersection Observer.

Fluxo: Hero → Áreas → Contato → Sobre → Espaço → Footer.

| Nome na stack | Papel |
| --- | --- |
| React + TypeScript | SPA tipada com seções modulares |
| Tailwind CSS | Design system marrom/dourado e tipografia editorial |
| Vite | Build otimizado para deploy estático |
| WhatsApp CTA | Formulário e botão flutuante para conversão |
| Animações | Scroll reveal e microinterações |

### Imagens

`src`: `../assets/portfolio/nelci-website/<arquivo>`.

As cinco telas entram na capa ou no card, na faixa de scroll e na galeria visual. A seleção do hub usa as telas 02–05.

| Arquivo | Capa / card | Seleção do hub | Scroll | Galeria visual | Legenda | Alt |
| --- | --- | --- | --- | --- | --- | --- |
| `page-01.png` | capa do case e do hub, `object-position: top center` | — | 01 | `--hero`, `c1`, `object-position: top center` | Hero — advocacia com clareza e compromisso | Capa: “Hero Nelci Advocacia”. Galeria: “Hero Nelci Advocacia” |
| `page-02.png` | — | rótulo `c2` “Áreas” | 02 | `--tall`, `c2`, `object-position: top center` | Áreas — Trabalhista e Previdenciário | “Áreas de atuação” |
| `page-03.png` | — | rótulo `c3` “Contato” | 03 | `--wide`, `c3`, `object-position: top center` | Contato — canais, localização e formulário WhatsApp | “Contato” |
| `page-04.png` | — | rótulo `c4` “Sobre” | 04 | item padrão, `c4`, `object-position: top center` | Sobre — endereço no Centro Empresarial Tonin | “Endereço e contato” |
| `page-05.png` | — | rótulo `c5` “Espaço” | 05 | `--wide`, `c5`, `object-position: top center` | Espaço — sala de atendimento e fachada | “Nosso espaço” |

Caminhos: `assets/portfolio/nelci-website/page-01.png` até `page-05.png`.

![Nelci 01](../assets/portfolio/nelci-website/page-01.png)

![Nelci 02](../assets/portfolio/nelci-website/page-02.png)

![Nelci 03](../assets/portfolio/nelci-website/page-03.png)

![Nelci 04](../assets/portfolio/nelci-website/page-04.png)

![Nelci 05](../assets/portfolio/nelci-website/page-05.png)

## Índice de assets

47 arquivos. Caminho relativo à raiz do repositório.

### Capas do portfólio de websites

| Arquivo | Onde entra |
| --- | --- |
| `assets/portfolio/websites/capa_fundo.webp` | Fundo do hero em `websites/index.html` (`wh-hero__media`) |
| `assets/portfolio/websites/websites_capa.webp` | Fundo do card de websites em `index.html` (`web-showcase__bg`) |

### Habilita — `assets/portfolio/habilita-website/`

| Arquivo |
| --- |
| `assets/portfolio/habilita-website/page-01.webp` |
| `assets/portfolio/habilita-website/page-02.webp` |
| `assets/portfolio/habilita-website/page-03.webp` |
| `assets/portfolio/habilita-website/page-04.webp` |
| `assets/portfolio/habilita-website/page-05.webp` |
| `assets/portfolio/habilita-website/page-06.webp` |
| `assets/portfolio/habilita-website/page-07.webp` |
| `assets/portfolio/habilita-website/page-08.webp` |
| `assets/portfolio/habilita-website/page-09.webp` |

### Stellamaris — `assets/portfolio/stellamaris-website/`

| Arquivo |
| --- |
| `assets/portfolio/stellamaris-website/page-01.webp` |
| `assets/portfolio/stellamaris-website/page-02.webp` |
| `assets/portfolio/stellamaris-website/page-03.webp` |
| `assets/portfolio/stellamaris-website/page-04.webp` |
| `assets/portfolio/stellamaris-website/page-05.webp` |
| `assets/portfolio/stellamaris-website/page-06.webp` |
| `assets/portfolio/stellamaris-website/page-07.webp` |
| `assets/portfolio/stellamaris-website/page-08.webp` |
| `assets/portfolio/stellamaris-website/page-09.webp` |
| `assets/portfolio/stellamaris-website/page-10.webp` |

### Transmiotto — `assets/portfolio/transmiotto-website/`

| Arquivo |
| --- |
| `assets/portfolio/transmiotto-website/page-01.webp` |
| `assets/portfolio/transmiotto-website/page-02.webp` |
| `assets/portfolio/transmiotto-website/page-03.webp` |
| `assets/portfolio/transmiotto-website/page-04.webp` |
| `assets/portfolio/transmiotto-website/page-05.webp` |
| `assets/portfolio/transmiotto-website/page-06.webp` |
| `assets/portfolio/transmiotto-website/page-07.webp` |
| `assets/portfolio/transmiotto-website/page-08.webp` |
| `assets/portfolio/transmiotto-website/page-09.webp` |
| `assets/portfolio/transmiotto-website/page-10.webp` |
| `assets/portfolio/transmiotto-website/page-11.webp` |
| `assets/portfolio/transmiotto-website/page-12.webp` |

### Vektor — `assets/portfolio/vektor-website/`

| Arquivo |
| --- |
| `assets/portfolio/vektor-website/page-01.webp` |
| `assets/portfolio/vektor-website/page-02.webp` |
| `assets/portfolio/vektor-website/page-03.webp` |
| `assets/portfolio/vektor-website/page-04.webp` |
| `assets/portfolio/vektor-website/page-05.webp` |
| `assets/portfolio/vektor-website/page-06.webp` |
| `assets/portfolio/vektor-website/page-07.webp` |
| `assets/portfolio/vektor-website/page-08.webp` |
| `assets/portfolio/vektor-website/page-09.webp` |

### Nelci Advocacia — `assets/portfolio/nelci-website/`

| Arquivo |
| --- |
| `assets/portfolio/nelci-website/page-01.png` |
| `assets/portfolio/nelci-website/page-02.png` |
| `assets/portfolio/nelci-website/page-03.png` |
| `assets/portfolio/nelci-website/page-04.png` |
| `assets/portfolio/nelci-website/page-05.png` |

## Fontes no repositório

| Fonte | O que documenta |
| --- | --- |
| [websites/index.html](../websites/index.html) | Hub: hero, cinco cards, serviços, stack, contato, dock |
| [projects/habilita-website.html](../projects/habilita-website.html) | Case 01 |
| [projects/stellamaris-website.html](../projects/stellamaris-website.html) | Case 02 |
| [projects/transmiotto-website.html](../projects/transmiotto-website.html) | Case 03 |
| [projects/vektor-website.html](../projects/vektor-website.html) | Case 04 |
| [projects/nelci-website.html](../projects/nelci-website.html) | Case 05 |
| [i18n.js](../i18n.js) | Textos `pt-BR` em `websites.*`, `portfolio.website`, `portfolio.stellamaris`, `portfolio.transmiotto`, `portfolio.vektor`, `portfolio.nelci`, `project.website.*`, `project.stellamaris.*`, `project.transmiotto.*`, `project.vektor.*`, `project.nelci.*` |
| [style.css](../style.css) | Classes `wh-*`, `project-hero`, `project-feature`, `project-flow`, `project-scroll`, `project-gallery`, `project-stack`, `lightbox` |
| [project-detail.js](../project-detail.js) | Lightbox e comportamento das páginas de case |
