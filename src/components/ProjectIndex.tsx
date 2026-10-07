import { BlurText } from "../bits/BlurText";
import { GradientText } from "../bits/GradientText";
import { projects } from "../data/projects";
import { projectsSection } from "../data/site";
import { HoverExpand } from "./unlumen-ui/hover-expand";

export function ProjectIndex() {
  return (
    <section id="projetos" className="border-t border-mist/10">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
        <h2 className="text-[clamp(1.8rem,1rem+2vw,2.75rem)] font-semibold tracking-[-0.035em]">
          <GradientText animationSpeed={14}>{projectsSection.title}</GradientText>
        </h2>
        <BlurText text={projectsSection.sub} className="mt-3 max-w-[36em] text-mute" />
        <HoverExpand
          className="mt-12"
          collapsedHeight={76}
          expandedHeight={420}
          items={projects.map((project) => ({
            index: project.index,
            label: project.name,
            sublabel: project.type,
            description: project.badge,
            image: project.shots[0].src,
            imageAlt: project.shots[0].alt,
            href: `#${project.id}`,
            objectTop: project.coverObjectTop ?? project.shots[0].objectTop,
          }))}
        />
      </div>
    </section>
  );
}
