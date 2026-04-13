"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const suggestions = [
  {
    id: "morning-walk",
    title: "Morning walk",
    sub: "Suggests the best time to remind you.",
    icon: "🚶",
  },
  {
    id: "habit-priorities",
    title: "Habit Priorities",
    sub: "Reorders habits on busy days.",
    icon: "⚡",
  },
  {
    id: "routine-insights",
    title: "Routine Insights",
    sub: "Highlights what's working and what's slipping.",
    icon: "📊",
  },
  {
    id: "recovery-suggestion",
    title: "Recovery Suggestion",
    sub: "Helps you recover when you miss a day.",
    icon: "🔄",
  },
];

export default function SmartAssistSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  return (
    <section id="smart-assist" className="relative py-24 px-6 overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-white/[0.025] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div ref={titleRef}>
            <motion.p
              initial={{ opacity: 0 }}
              animate={titleInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-3"
            >
              Smarter habits, less thinking
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
            >
              AI suggestions that <br />adjust to your day
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-white/40 text-lg leading-relaxed"
            >
              Frame Forge learns your patterns and offers small, useful
              suggestions that help you stay consistent without guessing what to
              do next.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <a
                href="#contact"
                id="smart-assist-cta"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-white/80 transition-colors border-b border-white/20 pb-0.5 hover:border-white/40"
              >
                See how suggestions work
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>

            {/* Suggestion pills */}
            <div className="mt-10 flex flex-col gap-3">
              {suggestions.map((s, i) => (
                <motion.button
                  key={s.id}
                  id={`suggestion-${s.id}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={titleInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                  onClick={() => setActive(i)}
                  className={`flex items-start gap-4 p-4 rounded-2xl text-left transition-all duration-300 ${
                    active === i
                      ? "glass-panel glow-border"
                      : "hover:bg-white/[0.03]"
                  }`}
                >
                  <span className="text-xl mt-0.5">{s.icon}</span>
                  <div>
                    <p className="text-white font-medium text-sm">{s.title}</p>
                    <p className="text-white/40 text-xs mt-0.5">{s.sub}</p>
                  </div>
                  {active === i && (
                    <Sparkles size={14} className="text-white/30 ml-auto mt-1 flex-shrink-0" />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right: Active suggestion preview card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="glass-panel glow-border rounded-3xl p-8 flex flex-col gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl">
                  {suggestions[active].icon}
                </div>
                <div>
                  <p className="text-white font-semibold">{suggestions[active].title}</p>
                  <p className="text-white/40 text-xs">{suggestions[active].sub}</p>
                </div>
              </div>

              {/* App image placeholder */}
              <div
                id="smart-assist-image-placeholder"
                className="w-full aspect-video rounded-2xl bg-white/[0.03] border border-dashed border-white/10 flex flex-col items-center justify-center gap-3"
                title="Replace with actual AI feature screenshot"
              >
                <span className="text-4xl">{suggestions[active].icon}</span>
                <p className="text-white/20 text-xs text-center">
                  [ App feature screenshot placeholder ]
                </p>
              </div>

              {/* AI indicator */}
              <div className="flex items-center gap-2 text-xs text-white/30">
                <Sparkles size={12} />
                <span>AI-powered · adapts to your habits daily</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
