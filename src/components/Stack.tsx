import { BlurText } from "../bits/BlurText";
import { GradientText } from "../bits/GradientText";
import { stack } from "../data/site";

export function Stack() {
  return (
    <section id="stack" className="border-t border-mist/10">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
        <h2 className="text-[clamp(1.8rem,1rem+2vw,2.75rem)] font-semibold tracking-[-0.035em]">
          <GradientText animationSpeed={14}>{stack.title}</GradientText>
        </h2>
        <BlurText text={stack.sub} className="mt-3 max-w-[36em] text-mute" />
        <div className="mt-14 grid gap-12 md:grid-cols-3">
          {stack.groups.map((group) => (
            <div key={group.num}>
              <p className="font-mono text-[11px] text-dim tabular">{group.num}</p>
              <h3 className="mt-2 text-lg tracking-[-0.02em]">{group.label}</h3>
              <ul className="mt-5 flex flex-col gap-2 font-mono text-[12px] text-mute">
                {group.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
