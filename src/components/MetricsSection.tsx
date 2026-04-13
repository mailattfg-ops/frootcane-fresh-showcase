"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  { value: "62,000+", label: "Check-ins logged last month" },
  { value: "94%", label: "Sessions completed on average" },
  { value: "38", label: "Countries with active users" },
  { value: "4.7★", label: "Average app store rating" },
];

const testimonials = [
  { name: "Maya", role: "Student", text: "Completed 21-day streak using Frame Forge" },
  { name: "Daniel Gray", role: "Founder", text: "87% improved weekly consistency" },
  { name: "Aaron Lee", role: "Remote Engineer", text: "Stopped breaking habits on weekends after switching" },
  { name: "Priya", role: "Busy Parent", text: "Logged 40 focus sessions this month with Routine Stacks" },
  { name: "Leo", role: "Creative Professional", text: "Hit hydration goals for 10 days straight" },
  { name: "Ramya", role: "Software Developer", text: "Finally keeps his day organized with routine-based habit groups" },
  { name: "Maya Zong", role: "Student", text: "Frame Forge made my mornings feel manageable again." },
  { name: "Daniel Perez", role: "Software Engineer", text: "The weekly insights show exactly where I fall off and help me adjust." },
];

export default function MetricsSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });
  const metricsRef = useRef(null);
  const metricsInView = useInView(metricsRef, { once: true, margin: "-80px" });

  return (
    <section id="metrics" className="relative py-24 px-6 overflow-hidden">
      {/* Glow orb */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/[0.02] blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div ref={titleRef} className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-3"
          >
            Real habits, real numbers
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            What users are achieving
          </motion.h2>
        </div>

        {/* Metric counters */}
        <div
          ref={metricsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 24 }}
              animate={metricsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass-panel glow-border rounded-2xl p-6 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                {m.value}
              </div>
              <div className="mt-2 text-sm text-white/40">{m.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Infinite Marquee testimonials */}
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-black to-transparent" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
            className="flex gap-4 w-max"
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="glass-panel glow-border rounded-2xl p-5 w-72 flex-shrink-0"
              >
                <p className="text-white/60 text-sm leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-2">
                  {/* Avatar placeholder */}
                  <div
                    className="w-7 h-7 rounded-full bg-white/10 border border-white/10 flex-shrink-0"
                    title="Avatar placeholder"
                  />
                  <div>
                    <p className="text-white text-xs font-semibold">{t.name}</p>
                    <p className="text-white/30 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
