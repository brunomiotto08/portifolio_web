import { projects } from "../data/projects";

export function ChapterRail({ activeId }: { activeId: string }) {
  return (
    <nav
      aria-label="Salas do portfólio"
      className="pointer-events-none fixed top-1/2 right-4 z-30 hidden -translate-y-1/2 lg:block"
    >
      <ul className="pointer-events-auto flex flex-col gap-2.5">
        {projects.map((project) => {
          const on = activeId === project.id;
          return (
            <li key={project.id}>
              <a
                href={`#${project.id}`}
                className={`block font-mono text-[11px] tabular transition-colors ${
                  on ? "text-mist" : "text-dim hover:text-mute"
                }`}
                aria-current={on ? "true" : undefined}
              >
                {project.index}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
