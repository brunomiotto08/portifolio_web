import { BlurText } from "../bits/BlurText";
import { GradientText } from "../bits/GradientText";
import { Magnet } from "../bits/Magnet";
import { contact, GITHUB, hero, LINKEDIN, PHONE_LABEL, PHONE_TEL, WHATSAPP } from "../data/site";

const links = [
  { href: WHATSAPP, label: "WhatsApp", external: true },
  { href: PHONE_TEL, label: PHONE_LABEL, external: false },
  { href: LINKEDIN, label: "LinkedIn", external: true },
  { href: GITHUB, label: "GitHub", external: true },
];

export function Contact() {
  return (
    <section id="contato" className="relative overflow-hidden border-t border-mist/10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_12%_40%,oklch(0.38_0.04_78/0.2),transparent_58%)]" />
      <div className="relative mx-auto max-w-[1400px] px-5 py-24 md:px-8 md:py-32">
        <h2 className="max-w-[12em] text-[clamp(2rem,1rem+3vw,3.5rem)] font-semibold tracking-[-0.04em] text-balance">
          <GradientText animationSpeed={14}>{contact.title}</GradientText>
        </h2>
        <BlurText text={contact.sub} className="mt-4 max-w-[36em] text-mute" />
        <Magnet className="mt-10">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center bg-mist px-6 text-[15px] font-medium text-void transition-transform active:scale-[0.98]"
            style={{ borderRadius: "var(--radius-frame)" }}
          >
            {hero.ctaQuote}
          </a>
        </Magnet>
        <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-sm text-mute">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="hover:text-mist"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-16 font-mono text-[11px] text-dim">{contact.copy}</p>
      </div>
    </section>
  );
}
