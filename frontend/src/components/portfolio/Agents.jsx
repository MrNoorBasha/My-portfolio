import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CV } from "../../data/cv";
import { Reveal } from "./Reveal";

// Animated pipeline: the active stage steps forward while a packet travels
// along the connector into the next one.
const Pipeline = () => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setActive((a) => (a + 1) % CV.pipeline.length), 1600);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="grad-border rounded-2xl bg-ink2/60 p-6 sm:p-10">
      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-dim">
        <span>How my agents run</span>
        <span className="text-aqua">step {active + 1} / {CV.pipeline.length}</span>
      </div>
      <div className="mt-8 flex flex-col lg:flex-row lg:items-stretch">
        {CV.pipeline.map((s, i) => {
          const on = i === active;
          const done = i < active;
          return (
            <div key={s.k} className="flex flex-col lg:flex-row lg:flex-1 items-stretch">
              <div
                className={`relative flex-1 rounded-xl border p-5 transition-all duration-500 ${
                  on
                    ? "border-aqua bg-aqua/[0.07] shadow-[0_0_40px_-8px_rgba(94,242,255,0.55)]"
                    : done
                    ? "border-violet/40 bg-violet/[0.04]"
                    : "border-[var(--line)]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xl ${on ? "text-aqua" : "text-paper/60"}`}>{s.icon}</span>
                  <span className="font-mono text-[10px] text-dim">0{i + 1}</span>
                </div>
                <div className="font-display font-semibold text-lg mt-4">{s.k}</div>
                <div className="text-[13px] text-paper/60 mt-1 leading-snug">{s.d}</div>
              </div>
              {i < CV.pipeline.length - 1 && (
                <div className="relative self-center lg:self-auto w-px h-8 lg:h-auto lg:w-8 my-1 lg:my-0 lg:mx-1 flex items-center justify-center">
                  <div className="absolute bg-[var(--line)] w-px h-full lg:w-full lg:h-px" />
                  {on && (
                    <>
                      <span className="packet-y lg:hidden absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-aqua shadow-[0_0_12px_rgba(94,242,255,0.9)]" />
                      <span className="packet-x hidden lg:block absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-aqua shadow-[0_0_12px_rgba(94,242,255,0.9)]" />
                    </>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Agents = () => (
  <section id="agents" data-testid="agents" className="relative py-24 sm:py-36 border-t border-[var(--line)] overflow-hidden">
    <div className="absolute -top-40 right-[-10%] w-[600px] h-[600px] rounded-full bg-violet/10 blur-[120px] pointer-events-none" />
    <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-dim">(02) — AI Agents</span>
          <h2 className="font-display font-bold tracking-[-0.03em] text-4xl sm:text-5xl lg:text-6xl mt-4">
            Agents that do<br />the <span className="text-grad">busywork</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-[15px] text-paper/60 max-w-sm leading-relaxed">
            I design LLM-powered agents with N8N and Python that understand a request, call the right
            enterprise tools, check their own work and hand back a result.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-14">
        <Pipeline />
      </Reveal>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {CV.agents.map((a, i) => (
          <motion.article
            key={a.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            data-testid={`agent-card-${i}`}
            className="group relative rounded-2xl border border-[var(--line)] bg-ink2/50 p-7 sm:p-8 hover:border-aqua/40 transition-colors duration-500"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-aqua">{a.tag}</div>
                <h3 className="font-display font-semibold text-2xl mt-3">{a.name}</h3>
              </div>
              <span className="shrink-0 flex items-center gap-1.5 rounded-full border border-[#5dffa8]/30 bg-[#5dffa8]/[0.06] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#5dffa8]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5dffa8] animate-pulse" />
                active
              </span>
            </div>
            <p className="mt-4 text-[15px] text-paper/65 leading-relaxed">{a.body}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {a.tools.map((t) => (
                <span key={t} className="font-mono text-[11px] px-3 py-1.5 rounded-md bg-ink border border-[var(--line)] text-paper/75">
                  {t}
                </span>
              ))}
            </div>
            <div className="absolute inset-x-8 bottom-0 h-px bg-[image:var(--grad)] opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
