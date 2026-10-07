import { ArrowUpRight } from "@phosphor-icons/react";
import { GradientText } from "../bits/GradientText";
import { MetricValue } from "../bits/MetricValue";
import type { Feature, Project, Shot } from "../data/types";
import { labels } from "../data/site";
import { useLightbox } from "../context/LightboxContext";
import { Filmstrip } from "./Filmstrip";
import { Gallery } from "./Gallery";

function Links({ project }: { project: Project }) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {project.live ? (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-10 items-center gap-1.5 bg-mist px-4 text-[13px] font-medium text-void"
          style={{ borderRadius: "var(--radius-frame)" }}
        >
          {labels.live}
          <ArrowUpRight size={14} />
        </a>
      ) : null}
      {project.github ? (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-10 items-center gap-1.5 border border-mist/25 px-4 text-[13px] text-mist"
          style={{ borderRadius: "var(--radius-frame)" }}
        >
          {labels.github}
          <ArrowUpRight size={14} />
        </a>
      ) : null}
    </div>
  );
}

function Meta({ project }: { project: Project }) {
  return (
    <p className="font-mono text-[11px] tracking-[0.04em] text-dim">
      {project.index} · {project.badge} · {project.type} · {project.year}
    </p>
  );
}

function Title({ project, overlay = false }: { project: Project; overlay?: boolean }) {
  const colors = overlay
    ? ["#FFFFFF", "#E8DCC8", "#FFF8EE", "#C9B8A0"]
    : ["#F4EFE6", "#C9B8A0", "#EDE6D8", "#A8947C"];

  return (
    <h2 className={`tracking-[-0.035em] ${overlay ? "text-[clamp(2.2rem,1rem+3.5vw,4rem)]" : "text-[clamp(2rem,1rem+2.6vw,3.25rem)]"}`}>
      <GradientText colors={colors} animationSpeed={16}>
        {project.titleLead}
      </GradientText>
      {project.titleAccent ? (
        <>
          {" "}
          <span className="font-light text-mute">{project.titleAccent}</span>
        </>
      ) : null}
    </h2>
  );
}

function Impact({ project }: { project: Project }) {
  const cols = [
    { k: labels.before, v: project.impact.before },
    { k: labels.solution, v: project.impact.solution },
    { k: labels.result, v: project.impact.result },
  ];
  return (
    <div className="mt-12 grid gap-8 border-t border-mist/12 pt-10 md:grid-cols-3">
      {cols.map((col) => (
        <div key={col.k}>
          <h3 className="font-mono text-[11px] text-dim">{col.k}</h3>
          <p className="mt-2 max-w-[36em] text-[15px] leading-relaxed text-mute">{col.v}</p>
        </div>
      ))}
    </div>
  );
}

function Metrics({ project }: { project: Project }) {
  return (
    <dl className="mt-8 flex gap-10">
      {project.metrics.map((m) => (
        <div key={m.label}>
          <dt className="font-mono text-[11px] text-dim">{m.label}</dt>
          <dd className="mt-1 text-3xl tracking-[-0.04em] tabular">
            <MetricValue value={m.value} />
          </dd>
        </div>
      ))}
    </dl>
  );
}

function About({ project }: { project: Project }) {
  return (
    <div className="mt-14 max-w-[65ch]">
      <h3 className="text-xl tracking-[-0.03em]">{labels.about}</h3>
      <p className="mt-4 leading-relaxed text-mute">{project.about[0]}</p>
      <p className="mt-4 leading-relaxed text-mute">{project.about[1]}</p>
      <ol className="mt-8 space-y-3">
        {project.highlights.map((item, i) => (
          <li key={item} className="grid grid-cols-[2rem_1fr] gap-3 text-[15px] text-mist">
            <span className="font-mono text-[11px] text-dim tabular">{String(i + 1).padStart(2, "0")}</span>
            {item}
          </li>
        ))}
      </ol>
    </div>
  );
}

function FeatureMural({ features }: { features: Feature[] }) {
  return (
    <div className="mt-16">
      <h3 className="text-xl tracking-[-0.03em]">{labels.features}</h3>
      <ol className="mt-8">
        {features.map((f) => (
          <li key={f.num} className="grid grid-cols-[4rem_1fr] gap-4 border-t border-mist/12 py-6 md:grid-cols-[6rem_minmax(0,20rem)_1fr]">
            <span className="font-mono text-sm text-dim tabular">{f.num}</span>
            <h4 className="tracking-[-0.02em]">{f.title}</h4>
            <p className="col-span-2 max-w-[42em] text-[15px] leading-relaxed text-mute md:col-span-1">{f.desc}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function FeatureSplit({ features }: { features: Feature[] }) {
  return (
    <div className="mt-16">
      <h3 className="text-xl tracking-[-0.03em]">{labels.features}</h3>
      <div className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2">
        {features.map((f) => (
          <article key={f.num}>
            <p className="font-mono text-[11px] text-dim tabular">{f.num}</p>
            <h4 className="mt-1 tracking-[-0.02em]">{f.title}</h4>
            <p className="mt-2 text-[15px] leading-relaxed text-mute">{f.desc}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function FeatureSnap({ features }: { features: Feature[] }) {
  return (
    <div className="mt-16">
      <h3 className="text-xl tracking-[-0.03em]">{labels.features}</h3>
      <div className="mt-6 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 md:-mx-8 md:px-8">
        {features.map((f) => (
          <article
            key={f.num}
            className="w-[min(80vw,280px)] shrink-0 snap-start border-t border-mist/30 pt-4"
          >
            <p className="font-mono text-[11px] text-dim tabular">{f.num}</p>
            <h4 className="mt-3 text-lg tracking-[-0.02em]">{f.title}</h4>
            <p className="mt-3 text-[14px] leading-relaxed text-mute">{f.desc}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function FeatureCells({ features }: { features: Feature[] }) {
  return (
    <div className="mt-16">
      <h3 className="text-xl tracking-[-0.03em]">{labels.features}</h3>
      <div className="mt-8 grid gap-px bg-mist/12 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <article key={f.num} className="bg-void p-6">
            <p className="font-mono text-[11px] text-dim tabular">{f.num}</p>
            <h4 className="mt-3 tracking-[-0.02em]">{f.title}</h4>
            <p className="mt-2 text-[14px] leading-relaxed text-mute">{f.desc}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function FeatureQuiet({ features }: { features: Feature[] }) {
  return (
    <div className="mt-20">
      <h3 className="text-xl tracking-[-0.03em]">{labels.features}</h3>
      <ol className="mt-10 max-w-[42em] space-y-10">
        {features.map((f) => (
          <li key={f.num}>
            <p className="font-mono text-[11px] text-dim tabular">{f.num}</p>
            <h4 className="mt-2 text-2xl font-light tracking-[-0.03em]">{f.title}</h4>
            <p className="mt-3 leading-relaxed text-mute">{f.desc}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Architecture({ project }: { project: Project }) {
  return (
    <div className="mt-16 border-t border-mist/12 pt-12">
      <h3 className="text-xl tracking-[-0.03em]">{labels.arch}</h3>
      <p className="mt-4 max-w-[65ch] leading-relaxed text-mute">{project.arch}</p>
      <ol className="mt-8 flex flex-wrap items-baseline gap-x-3 gap-y-2 font-mono text-[12px] text-mute">
        {project.flow.map((step, i) => (
          <li key={step} className="flex items-baseline gap-3">
            <span className="text-dim tabular">{String(i + 1).padStart(2, "0")}</span>
            <span>{step}</span>
            {i < project.flow.length - 1 ? <span className="text-dim">/</span> : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

function StackList({ project }: { project: Project }) {
  return (
    <div className="mt-16 border-t border-mist/12 pt-12">
      <h3 className="text-xl tracking-[-0.03em]">{labels.stack}</h3>
      <ul className="mt-8 max-w-[70ch]">
        {project.stack.map((item) => (
          <li
            key={item.name}
            className="grid grid-cols-1 gap-1 border-t border-mist/10 py-4 md:grid-cols-[16rem_1fr] md:gap-8"
          >
            <span className="tracking-[-0.02em]">{item.name}</span>
            <span className="text-[15px] text-mute">{item.role}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Tags({ project }: { project: Project }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] text-dim">
      {project.tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}

function ShotButton({
  shot,
  shots,
  className,
  aspect,
}: {
  shot: Shot;
  shots: Shot[];
  className?: string;
  aspect?: string;
}) {
  const { open } = useLightbox();
  const index = shots.findIndex((s) => s.src === shot.src);
  return (
    <button type="button" onClick={() => open(shots, Math.max(0, index))} className={`group block w-full text-left ${className ?? ""}`}>
      <span
        className="block overflow-hidden bg-plate"
        style={{ borderRadius: "var(--radius-frame)" }}
      >
        <img
          src={shot.src}
          alt={shot.alt}
          className={`w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.015] ${aspect ?? "aspect-[16/9]"} ${shot.objectTop ? "object-top" : "object-center"}`}
          loading="lazy"
          decoding="async"
        />
      </span>
    </button>
  );
}

export function CaseRoom({ project }: { project: Project }) {
  const cover = project.shots[0];
  const splitShots = project.shots.filter((s) => s.inGallery).slice(0, 2);
  const quietShots = project.shots;

  return (
    <article id={project.id} className="border-t border-mist/10 scroll-mt-16">
      {project.layout === "bleed" ? (
        <div className="relative min-h-[88dvh]">
          <img
            src={cover.src}
            alt={cover.alt}
            className={`absolute inset-0 h-full w-full object-cover ${cover.objectTop ? "object-top" : "object-center"}`}
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/55 to-void/20" />
          <div className="relative mx-auto flex min-h-[88dvh] max-w-[1400px] flex-col justify-end px-5 pb-12 pt-24 md:px-8">
            <Meta project={project} />
            <div className="mt-4">
              <Title project={project} overlay />
            </div>
            <Links project={project} />
          </div>
        </div>
      ) : null}

      {project.layout === "cinema" ? (
        <div className="pt-10">
          <Filmstrip shots={project.shots} />
        </div>
      ) : null}

      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
        {project.layout === "split" ? (
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
            <div>
              <Meta project={project} />
              <div className="mt-4">
                <Title project={project} />
              </div>
              <p className="mt-4 max-w-[42em] text-mute">{project.subtitle}</p>
              <Tags project={project} />
              <Links project={project} />
              <p className="mt-8 max-w-[42em] text-[15px] leading-relaxed text-mute">{project.hubDesc}</p>
            </div>
            <div className="flex flex-col gap-8">
              {splitShots.map((shot) => (
                <ShotButton
                  key={shot.src}
                  shot={shot}
                  shots={project.shots}
                  aspect="aspect-[16/9]"
                />
              ))}
            </div>
          </div>
        ) : null}

        {project.layout === "cinema" ? (
          <div>
            <Meta project={project} />
            <div className="mt-4">
              <Title project={project} />
            </div>
            <p className="mt-4 max-w-[42em] text-mute">{project.subtitle}</p>
            <Tags project={project} />
            <Links project={project} />
          </div>
        ) : null}

        {project.layout === "terminal" ? (
          <div>
            <Meta project={project} />
            <div className="mt-4 flex flex-wrap items-end justify-between gap-8">
              <Title project={project} />
              <Metrics project={project} />
            </div>
            <p className="mt-4 max-w-[42em] text-mute">{project.subtitle}</p>
            <Tags project={project} />
            <Links project={project} />
            <div className="mt-14 flex flex-col gap-8">
              {project.shots
                .filter((s) => s.inGallery)
                .slice(0, 3)
                .map((shot) => (
                  <ShotButton
                    key={shot.src}
                    shot={shot}
                    shots={project.shots}
                    aspect="aspect-[16/9]"
                  />
                ))}
            </div>
          </div>
        ) : null}

        {project.layout === "quiet" ? (
          <div className="mx-auto max-w-[920px]">
            <Meta project={project} />
            <div className="mt-6">
              <Title project={project} />
            </div>
            <p className="mt-6 max-w-[36em] text-lg leading-relaxed text-mute">{project.subtitle}</p>
            <Tags project={project} />
            <Links project={project} />
            <div className="mt-20 space-y-16 md:space-y-24">
              {quietShots.map((shot) => (
                <figure key={shot.src}>
                  <ShotButton shot={shot} shots={project.shots} aspect="aspect-[16/9]" />
                  <figcaption className="mt-4 font-mono text-[11px] leading-relaxed text-dim">{shot.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        ) : null}

        {project.layout === "bleed" ? (
          <>
            <p className="max-w-[42em] text-mute">{project.subtitle}</p>
            <Tags project={project} />
            <p className="mt-6 max-w-[42em] text-mute">{project.hubDesc}</p>
            <Metrics project={project} />
          </>
        ) : null}

        {project.layout !== "terminal" && project.layout !== "bleed" ? <Metrics project={project} /> : null}

        <Impact project={project} />
        <About project={project} />

        {project.layout === "bleed" ? <FeatureMural features={project.features} /> : null}
        {project.layout === "split" ? <FeatureSplit features={project.features} /> : null}
        {project.layout === "cinema" ? <FeatureSnap features={project.features} /> : null}
        {project.layout === "terminal" ? <FeatureCells features={project.features} /> : null}
        {project.layout === "quiet" ? <FeatureQuiet features={project.features} /> : null}

        <Architecture project={project} />
        {project.layout !== "cinema" ? <Filmstrip shots={project.shots} /> : null}
        {project.layout !== "quiet" ? <Gallery shots={project.shots} /> : null}
        <StackList project={project} />
      </div>
    </article>
  );
}
