import { useEffect, useState } from "react";
import { X } from "@phosphor-icons/react";
import RotatingEarth from "./ui/wireframe-dotted-globe";
import { projects } from "../data/projects";
import { LINKEDIN, WHATSAPP, contact, hero, services } from "../data/site";
import type { Shot } from "../data/types";

type Viewer = { shots: Shot[]; index: number };

function bentoRows(count: number): number[][] {
  const rows: number[][] = [];
  let left = count;
  const sequence: number[][] = [[12], [7, 5], [6, 6], [4, 4, 4]];
  let step = 0;

  while (left > 0) {
    if (left === 1) {
      rows.push([12]);
      break;
    }
    if (left === 2) {
      rows.push([6, 6]);
      break;
    }
    if (left === 3) {
      rows.push([4, 4, 4]);
      break;
    }
    if (left === 4) {
      rows.push([7, 5], [6, 6]);
      break;
    }
    const pattern = sequence[step % sequence.length];
    rows.push(pattern);
    left -= pattern.length;
    step += 1;
  }

  return rows;
}

function ProjectBento({
  shots,
  onOpen,
}: {
  shots: Shot[];
  onOpen: (index: number) => void;
}) {
  let cursor = 0;

  return (
    <div className="bento">
      {bentoRows(shots.length).map((row) => {
        const start = cursor;
        const slice = shots.slice(start, start + row.length);
        cursor += row.length;
        return (
          <div className={`bento-row r-${row.join("-")}`} key={slice[0].src}>
            {slice.map((shot, index) => (
              <figure className="frame" key={shot.src}>
                <button
                  type="button"
                  className="shot-btn"
                  aria-label={shot.alt}
                  onClick={() => onOpen(start + index)}
                >
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    loading={start === 0 && index === 0 ? "eager" : "lazy"}
                  />
                </button>
              </figure>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export function Portfolio() {
  const [viewer, setViewer] = useState<Viewer | null>(null);

  useEffect(() => {
    if (!viewer) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setViewer(null);
      if (event.key === "ArrowRight") {
        setViewer((current) =>
          current
            ? { ...current, index: (current.index + 1) % current.shots.length }
            : current,
        );
      }
      if (event.key === "ArrowLeft") {
        setViewer((current) =>
          current
            ? {
                ...current,
                index: (current.index - 1 + current.shots.length) % current.shots.length,
              }
            : current,
        );
      }
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [viewer]);

  return (
    <div className="site">
      <header className="nav-bar">
        <div className="nav">
        <a className="brand" href="#inicio">
          Bruno Miotto
        </a>
        <nav className="nav-links" aria-label="Seções">
          <a href="#projetos">Projetos</a>
          <a href="#servicos">Serviços</a>
          <a href="#contato">Contato</a>
        </nav>
        <a className="pill" href={WHATSAPP} target="_blank" rel="noreferrer">
          {hero.ctaQuote}
        </a>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-globe">
            <RotatingEarth />
          </div>
          <div className="hero-shade" />
          <div className="wrap hero-copy">
            <h1>Nossos Projetos</h1>
            <p className="lede">{hero.sub}</p>
          </div>
        </section>

        <section className="wrap block" id="projetos">
          {projects.map((project) => (
            <article className="case" key={project.id} id={project.id}>
              <div className="case-head">
                <div>
                  <div className="case-meta">
                    <p className="eyebrow">{project.badge}</p>
                    <span className="year">{project.year}</span>
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.hubDesc}</p>
                </div>
                {project.live ? (
                  <a className="ghost" href={project.live} target="_blank" rel="noreferrer">
                    Ver site
                  </a>
                ) : null}
              </div>
              <ProjectBento
                shots={project.shots}
                onOpen={(index) => setViewer({ shots: project.shots, index })}
              />
            </article>
          ))}
        </section>

        <section className="wrap block" id="servicos">
          <div className="block-head">
            <p className="eyebrow">Serviços</p>
            <h2>{services.title}</h2>
            <p>{services.sub}</p>
          </div>
          <div className="services">
            {services.items.map((item) => (
              <article className="service" key={item.num}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="wrap contact" id="contato">
          <p className="eyebrow">Contato</p>
          <h2>{contact.title}</h2>
          <p className="sub">{contact.sub}</p>
          <div className="contact-row">
            <a className="ghost" href={WHATSAPP} target="_blank" rel="noreferrer">
              {hero.ctaQuote}
            </a>
            <a className="quiet-link" href={LINKEDIN} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
          <p className="legal">{contact.copy}</p>
        </section>
      </main>

      {viewer ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={viewer.shots[viewer.index].alt}
          onClick={() => setViewer(null)}
        >
          <button
            type="button"
            className="lightbox-close"
            aria-label="Fechar"
            onClick={() => setViewer(null)}
          >
            <X size={16} />
          </button>
          <img
            src={viewer.shots[viewer.index].src}
            alt={viewer.shots[viewer.index].alt}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </div>
  );
}
