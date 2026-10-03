import { useEffect, useState } from "react";
import { CV } from "../../data/cv";

// Terminal card that "types" scripted agent runs, one line at a time.
export const AgentConsole = ({ className = "" }) => {
  const [run, setRun] = useState(0);
  const [line, setLine] = useState(0);
  const [chars, setChars] = useState(0);
  const lines = CV.consoleRuns[run];

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setLine(lines.length); return; }
    let t;
    if (line < lines.length) {
      if (chars < lines[line].length) {
        t = setTimeout(() => setChars((c) => c + 1), line === 0 ? 45 : 16);
      } else {
        t = setTimeout(() => { setLine((l) => l + 1); setChars(0); }, line === 0 ? 450 : 320);
      }
    } else {
      t = setTimeout(() => {
        setRun((r) => (r + 1) % CV.consoleRuns.length);
        setLine(0); setChars(0);
      }, 2600);
    }
    return () => clearTimeout(t);
  }, [run, line, chars, lines]);

  const tone = (l) =>
    l.startsWith("$") ? "text-paper" : l.trim().startsWith("✓") ? "text-[#5dffa8]" : "text-paper/60";

  return (
    <div className={`grad-border rounded-xl bg-ink2/85 backdrop-blur-md shadow-[0_20px_80px_-20px_rgba(94,242,255,0.25)] ${className}`}>
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--line)]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-[11px] text-dim">agent-console — demo</span>
        <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-[#5dffa8]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5dffa8] animate-pulse" /> live
        </span>
      </div>
      <div className="p-4 font-mono text-[12px] leading-[1.9] min-h-[176px]">
        {lines.slice(0, line + 1).map((l, i) => (
          <div key={`${run}-${i}`} className={`whitespace-pre ${tone(l)}`}>
            {i < line ? l : l.slice(0, chars)}
            {i === line && <span className="caret text-aqua">▍</span>}
          </div>
        ))}
      </div>
    </div>
  );
};
