import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { projects } from "../data/projects";
import { WHATSAPP } from "../data/site";

const EASE = [0.16, 1, 0.3, 1] as const;

function decodeImage(src: string) {
  const img = new Image();
  img.decoding = "sync";
  img.src = src;
  return img.decode?.() ?? Promise.resolve();
}

export function Sequence() {
  const reduce = useReducedMotion();
  const [projectIndex, setProjectIndex] = useState(0);
  const [shotIndex, setShotIndex] = useState(0);
  const dir = useRef(1);
  const projectRef = useRef(0);
  const shotRef = useRef(0);
  const lock = useRef(false);
  const lockTimer = useRef(0);

  const project = projects[projectIndex];
  const shot = project.shots[shotIndex] ?? project.shots[0];

  useEffect(() => {
    projectRef.current = projectIndex;
    shotRef.current = shotIndex;
  }, [projectIndex, shotIndex]);

  useEffect(() => {
    const next = project.shots[shotIndex + 1] ?? projects[projectIndex + 1]?.shots[0];
    if (next) decodeImage(next.src).catch(() => undefined);
  }, [shotIndex, project.shots, projectIndex]);

  const hold = useCallback(() => {
    lock.current = true;
    window.clearTimeout(lockTimer.current);
    lockTimer.current = window.setTimeout(() => {
      lock.current = false;
    }, reduce ? 80 : 520);
  }, [reduce]);

  const stepShot = useCallback((delta: number) => {
    hold();
    const p = projects[projectRef.current];
    const s = shotRef.current;
    const nextShot = s + delta;
    if (nextShot >= 0 && nextShot < p.shots.length) {
      dir.current = delta > 0 ? 1 : -1;
      setShotIndex(nextShot);
      return;
    }
    const nextProject = projectRef.current + (delta > 0 ? 1 : -1);
    if (nextProject < 0 || nextProject >= projects.length) return;
    dir.current = delta > 0 ? 1 : -1;
    setProjectIndex(nextProject);
    setShotIndex(delta > 0 ? 0 : projects[nextProject].shots.length - 1);
  }, [hold]);

  const stepProject = useCallback((delta: number) => {
    hold();
    const next = projectRef.current + delta;
    if (next < 0 || next >= projects.length) return;
    dir.current = delta > 0 ? 1 : -1;
    setProjectIndex(next);
    setShotIndex(0);
  }, [hold]);

  const goProject = useCallback((index: number) => {
    hold();
    if (index === projectRef.current) {
      dir.current = -1;
      setShotIndex(0);
      return;
    }
    dir.current = index > projectRef.current ? 1 : -1;
    setProjectIndex(index);
    setShotIndex(0);
  }, [hold]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        stepShot(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        stepShot(-1);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        stepProject(1);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        stepProject(-1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [stepProject, stepShot]);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) < 12 && Math.abs(e.deltaY) < 12) return;
      e.preventDefault();
      if (lock.current) return;
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) stepShot(e.deltaX > 0 ? 1 : -1);
      else stepShot(e.deltaY > 0 ? 1 : -1);
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [reduce, stepShot]);

  const pointer = useRef<{ x: number; y: number } | null>(null);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    pointer.current = { x: e.clientX, y: e.clientY };
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!pointer.current) return;
    const dx = e.clientX - pointer.current.x;
    const dy = e.clientY - pointer.current.y;
    pointer.current = null;
    if (Math.hypot(dx, dy) < 28) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      if (x < rect.width * 0.22) stepShot(-1);
      else if (x > rect.width * 0.78) stepShot(1);
      return;
    }
    if (Math.abs(dx) >= Math.abs(dy)) stepShot(dx < 0 ? 1 : -1);
    else stepShot(dy < 0 ? 1 : -1);
  };

  const transition = reduce
    ? { duration: 0 }
    : { duration: 0.62, ease: EASE };

  return (
    <div className="viewer">
      <header className="viewer-bar">
        <p className="brand">Bruno Miotto</p>
        <h1>{project.name}</h1>
        <a className="quote" href={WHATSAPP} target="_blank" rel="noreferrer">
          Solicitar orçamento
        </a>
      </header>

      <div
        className="stage"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        role="region"
        aria-label={`Imagens de ${project.name}`}
      >
        <AnimatePresence initial={false} custom={dir.current}>
          <motion.img
            key={shot.src}
            className="plate"
            src={shot.src}
            alt={shot.alt}
            draggable={false}
            decoding="sync"
            custom={dir.current}
            initial={reduce ? false : { opacity: 0, x: dir.current * 42 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduce ? { opacity: 1 } : { opacity: 0, x: dir.current * -42 }}
            transition={transition}
          />
        </AnimatePresence>
      </div>

      <footer className="viewer-foot">
        <div className="shot-nav">
          <button type="button" onClick={() => stepShot(-1)} aria-label="Imagem anterior">
            <CaretLeft size={18} weight="bold" />
          </button>
          <p className="count" aria-live="polite">
            <span>{shotIndex + 1}</span>
            <span className="count-of"> / {project.shots.length}</span>
          </p>
          <button type="button" onClick={() => stepShot(1)} aria-label="Próxima imagem">
            <CaretRight size={18} weight="bold" />
          </button>
          {project.live ? (
            <a className="live" href={project.live} target="_blank" rel="noreferrer">
              Ver site
            </a>
          ) : null}
        </div>

        <nav className="rooms" aria-label="Sites">
          {projects.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={index === projectIndex ? "is-on" : undefined}
              aria-current={index === projectIndex ? "true" : undefined}
              onClick={() => goProject(index)}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </footer>
    </div>
  );
}
