import { BlurText } from "../bits/BlurText";
import { GradientText } from "../bits/GradientText";
import { services } from "../data/site";

export function Services() {
  return (
    <section id="servicos" className="border-t border-mist/10">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
        <h2 className="text-[clamp(1.8rem,1rem+2vw,2.75rem)] font-semibold tracking-[-0.035em]">
          <GradientText animationSpeed={14}>{services.title}</GradientText>
        </h2>
        <BlurText text={services.sub} className="mt-3 max-w-[36em] text-mute" />
        <ol className="mt-12">
          {services.items.map((item) => (
            <li
              key={item.num}
              className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-mist/12 py-8 md:grid-cols-[5rem_minmax(0,18rem)_1fr] md:py-10"
            >
              <span className="font-mono text-sm text-dim tabular">{item.num}</span>
              <h3 className="text-xl tracking-[-0.03em]">{item.title}</h3>
              <p className="col-span-2 max-w-[42em] text-mute md:col-span-1">{item.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
