"use client";
import { useState, useRef, useEffect, useLayoutEffect } from "react";

const AUTOPLAY_MS = 6000;
const slides = [
  { id: "0", content: "1" },
  { id: "1", content: "2" },
  { id: "2", content: "3" },
];
const headlines = [
  "Medical interventions demand precision and urgency.",
  "Which makes coordination within teams vital for success.",
  "Task‑driven focus can lead to tunnel vision and misalignment.",
];

export default function MedicalCarousel({ reverse = false }) {
  const [active, setActive]       = useState(0);
  const [hover, setHover]         = useState<number | null>(null);
  const [rect, setRect]           = useState({ top: 0, height: 0 });
  const [ready, setReady]         = useState(false);
  const [isPaused, setIsPaused]   = useState(false);

  const timer   = useRef<NodeJS.Timeout>();
  const rowRefs = useRef<HTMLButtonElement[]>([]);

  /* autoplay */
  const clear = () => clearInterval(timer.current as NodeJS.Timeout);
  const start = () => {
    clear();
    timer.current = setInterval(
      () => setActive((p) => (p + 1) % slides.length),
      AUTOPLAY_MS
    );
  };
  useEffect(() => { start(); return clear; }, []);

  /* measure highlight */
  const target = hover ?? active;
  const measure = () => {
    const node = rowRefs.current[target];
    if (node) {
      setRect({ top: node.offsetTop, height: node.offsetHeight });
      setReady(true);
    }
  };
  useLayoutEffect(measure, [target]);
  useEffect(() => {
    requestAnimationFrame(measure);
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [target]);

  const barKey = hover === null ? active : -1;

  return (
    <div className="flex flex-col max-w-[1200px] mx-auto p-10 font-sans bg-slate-50 h-full w-full">
      <h2 className="text-4xl md:text-5xl font-semibold text-slate-800 mb-10 leading-tight">
        In the moment, <span className="text-teal-600">only</span> the patient matters
      </h2>

      <div
        onMouseEnter={() => { clear(); setIsPaused(true); }}
        onMouseLeave={() => { start(); setIsPaused(false); setHover(null); }}
        className={\`
          flex gap-8 grow
          portrait:flex-col
          landscape:flex-row
          \${reverse ? "landscape:flex-row-reverse" : ""}
        \`}
      >
        {/* Slide area */}
        <div className="relative flex-1 aspect-[16/9] landscape:max-h-[70vh] portrait:max-h-[45vh] overflow-hidden rounded-2xl bg-gray-300">
          {slides.map((s, i) => (
            <div
              key={s.id}
              className={\`
                absolute inset-0 flex items-center justify-center
                text-7xl text-teal-600
                transition-opacity duration-[600ms] ease-[cubic-bezier(0.44,_0,_0.56,_1)]
                \${i === target ? "opacity-100" : "opacity-0"}
              \`}
            >
              {s.content}
            </div>
          ))}
        </div>

        {/* Captions */}
        <div className="relative flex flex-col justify-center gap-2 basis-2/5">
          {ready && (
            <div
              className="absolute left-0 w-full rounded-lg bg-white/90 shadow-sm transition-[top,height] duration-[600ms] ease-[cubic-bezier(0.44,_0,_0.56,_1)] pointer-events-none"
              style={{ top: rect.top, height: rect.height }}
            >
              <div
                key={barKey}
                className="absolute left-0 bottom-0 h-[3px] bg-teal-600 animate-[grow_6s_linear_forwards]"
                style={{ animationPlayState: isPaused ? "paused" : "running" }}
              />
            </div>
          )}

          {headlines.map((text, i) => (
            <button
              key={i}
              ref={(el) => (rowRefs.current[i] = el!)}
              onMouseEnter={() => { clear(); setIsPaused(true); setHover(i); }}
              onMouseLeave={() => { setIsPaused(false); }}
              onClick={() => { setActive(i); start(); }}
              className="relative z-10 text-left py-4 px-5 rounded-lg"
            >
              <p
                className={\`
                  text-lg font-semibold break-words
                  transition-colors duration-[600ms] ease-[cubic-bezier(0.44,_0,_0.56,_1)]
                  \${target === i ? "text-teal-600" : "text-slate-800"}
                \`}
              >
                {text}
              </p>
            </button>
          ))}
        </div>
      </div>
      <style>{\`@keyframes grow{from{width:0}to{width:100%}}\`}</style>
    </div>
  );
}
