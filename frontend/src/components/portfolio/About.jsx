import { CV } from "../../data/cv";
import { Reveal } from "./Reveal";

export const About = () => {
  return (
    <section id="about" data-testid="about" className="relative py-24 sm:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-dim">(01) — About</span>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mt-10 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-display font-bold tracking-[-0.02em] leading-[1.02] text-4xl sm:text-5xl lg:text-6xl">
              <Reveal>Turning manual</Reveal>
              <Reveal delay={0.08}>
                work into <span className="text-grad">automated</span>
              </Reveal>
              <Reveal delay={0.16}>systems.</Reveal>
            </h2>
            <Reveal delay={0.2}>
              <p className="mt-8 text-lg text-paper/70 leading-relaxed max-w-2xl">
                {CV.summary}
              </p>
            </Reveal>

            <div className="mt-10 flex flex-wrap gap-2">
              {CV.industries.map((ind, i) => (
                <Reveal key={ind} delay={0.25 + i * 0.05}>
                  <span className="font-mono text-xs uppercase tracking-[0.14em] px-4 py-2 rounded-full border border-[var(--line)] text-paper/80">
                    {ind}
                  </span>
                </Reveal>
              ))}
            </div>

            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-px bg-[var(--line)] border border-[var(--line)]">
              {CV.stats.map((s, i) => (
                <Reveal key={s.v} delay={i * 0.06} className="bg-ink p-5">
                  <div className="font-display font-extrabold text-3xl sm:text-4xl text-aqua">{s.k}</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-dim mt-2">{s.v}</div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <span className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-aqua z-20" />
              <span className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-aqua z-20" />
              <div className="relative overflow-hidden rounded-2xl aspect-square border border-[var(--line)] bg-ink2">
                <div className="absolute inset-0">
                  <img
                    src={CV.photo}
                    alt={CV.name}
                    data-testid="about-portrait"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(94,242,255,0.10),transparent_55%)] pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06070d] via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 font-mono text-[11px] uppercase tracking-[0.16em] text-paper/85 flex justify-between">
                  <span>{CV.name}</span>
                  <span className="text-aqua">{CV.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* manifesto chapters */}
        <div className="mt-24 grid md:grid-cols-3 gap-px bg-[var(--line)] border border-[var(--line)]">
          {CV.manifesto.map((m, i) => (
            <Reveal key={m.n} delay={i * 0.08} className="bg-ink p-8 sm:p-10 group hover:bg-ink2 transition-colors duration-500">
              <div className="font-mono text-sm text-aqua">{m.n}</div>
              <h3 className="font-display font-bold text-2xl mt-6">{m.title}</h3>
              <p className="mt-4 text-paper/65 leading-relaxed text-[15px]">{m.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
