import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CV } from "../../data/cv";
import { useMouseParallax } from "../../hooks/useMouseParallax";
import { NeuralField } from "./NeuralField";
import { AgentConsole } from "./AgentConsole";

const words = [CV.first, CV.last];
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } },
};
const line = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
};

export const Hero = () => {
  const { x, y } = useMouseParallax();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const px = useTransform(x, (v) => v * 22);
  const py = useTransform(y, (v) => v * 22);
  const px2 = useTransform(x, (v) => v * -14);
  const py2 = useTransform(y, (v) => v * -14);

  return (
    <section id="top" ref={ref} data-testid="hero" className="relative min-h-[100svh] overflow-hidden">
      {/* neural network backdrop */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <NeuralField className="absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(155,107,255,0.22),transparent_45%),radial-gradient(circle_at_15%_80%,rgba(94,242,255,0.12),transparent_45%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-ink" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 min-h-[100svh] grid lg:grid-cols-12 gap-10 items-center pt-28 pb-20">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-3 rounded-full border border-[var(--line)] bg-ink2/70 backdrop-blur px-4 py-2 font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-aqua"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-aqua animate-pulse" />
            {CV.role} · {CV.location}
          </motion.p>

          <motion.h1
            style={{ y: titleY }}
            variants={container}
            initial="hidden"
            animate="show"
            className="font-display font-bold leading-[0.9] tracking-[-0.04em] mt-7"
          >
            {words.map((w, i) => (
              <span key={w} className="block overflow-hidden pb-2">
                <motion.span
                  variants={line}
                  className={`block ${i === 1 ? "text-grad" : "text-paper"}`}
                  style={{ fontSize: "clamp(3.2rem, 11vw, 10rem)" }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.div style={{ x: px, y: py }} className="mt-7 max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.9 }}
              className="text-base sm:text-lg text-paper/75 leading-relaxed"
            >
              {CV.tagline}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.9 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#agents"
              data-testid="hero-agents-btn"
              className="group font-mono text-xs uppercase tracking-[0.18em] px-6 py-3.5 rounded-full text-ink font-semibold bg-[image:var(--grad)] hover:opacity-90 transition-opacity duration-300"
            >
              Explore my agents
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#contact"
              data-testid="hero-contact-btn"
              className="font-mono text-xs uppercase tracking-[0.18em] px-6 py-3.5 rounded-full border border-paper/25 hover:border-aqua hover:text-aqua transition-colors duration-300"
            >
              Get in touch
            </a>
          </motion.div>
        </div>

        {/* portrait + live agent console */}
        <motion.div
          style={{ x: px2, y: py2 }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative flex flex-col items-center lg:items-end gap-0"
        >
          <div className="relative w-[200px] h-[200px] sm:w-[230px] sm:h-[230px] lg:mr-10">
            <div className="halo absolute -inset-[3px] rounded-full blur-[1px]" />
            <div className="halo absolute -inset-6 rounded-full opacity-30 blur-2xl" />
            <img
              src={CV.avatar}
              alt={CV.name}
              data-testid="hero-portrait"
              className="relative w-full h-full rounded-full object-cover border-4 border-ink"
            />
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[var(--line)] bg-ink2 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/80">
              {CV.name}
            </span>
          </div>
          <AgentConsole className="w-full max-w-[440px] mt-8" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-6 left-0 right-0 z-10 mx-auto max-w-[1400px] px-5 sm:px-8 flex items-center justify-between font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-dim"
      >
        <span>Scroll to explore</span>
        <span className="hidden sm:block">{CV.years} years · {CV.focus}</span>
      </motion.div>
    </section>
  );
};
