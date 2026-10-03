import { motion } from "framer-motion";
import { CV } from "../../data/cv";
import { Reveal } from "./Reveal";

export const Projects = () => (
  <section id="projects" data-testid="projects" className="relative py-24 sm:py-36 border-t border-[var(--line)]">
    <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-dim">(04) — Projects</span>
        <h2 className="font-display font-bold tracking-[-0.03em] text-4xl sm:text-5xl lg:text-6xl mt-4">
          Things I've <span className="text-grad">shipped</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid md:grid-cols-2 gap-6">
        {CV.projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            data-testid={`project-${i}`}
            className="grad-border group relative overflow-hidden rounded-2xl bg-ink2/50 p-7 sm:p-9"
          >
            <span className="absolute -right-4 -top-8 font-display font-bold text-[9rem] leading-none text-paper/[0.03] select-none group-hover:text-aqua/[0.07] transition-colors duration-700">
              0{i + 1}
            </span>
            <div className="relative">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-violet">{p.kind}</span>
              <h3 className="font-display font-semibold text-2xl sm:text-[1.7rem] leading-tight mt-3 max-w-md">{p.title}</h3>
              <p className="mt-4 text-[15px] text-paper/65 leading-relaxed">{p.body}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="font-mono text-[11px] px-3 py-1.5 rounded-full border border-[var(--line)] text-paper/75">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
