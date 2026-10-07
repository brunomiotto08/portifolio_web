import { Topbar } from "./components/Topbar";
import { Hero } from "./components/Hero";
import { ProjectIndex } from "./components/ProjectIndex";
import { ChapterRail } from "./components/ChapterRail";
import { CaseRoom } from "./components/CaseRoom";
import { Services } from "./components/Services";
import { Stack } from "./components/Stack";
import { Contact } from "./components/Contact";
import { Lightbox } from "./components/Lightbox";
import { LightboxProvider } from "./context/LightboxContext";
import { projects } from "./data/projects";
import { Noise } from "./bits/Noise";
import { useActiveSection } from "./hooks/useActiveSection";

function Shell() {
  const active = useActiveSection(projects.map((p) => p.id));

  return (
    <>
      <a
        href="#projetos"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-mist focus:px-3 focus:py-2 focus:text-void"
      >
        Pular para projetos
      </a>
      <Noise />
      <Topbar />
      <ChapterRail activeId={active} />
      <main>
        <Hero />
        <ProjectIndex />
        {projects.map((project) => (
          <CaseRoom key={project.id} project={project} />
        ))}
        <Services />
        <Stack />
        <Contact />
      </main>
      <Lightbox />
    </>
  );
}

export default function App() {
  return (
    <LightboxProvider>
      <Shell />
    </LightboxProvider>
  );
}
