"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, GraduationCap, Laptop, Users } from "lucide-react";

const useCases = [
  {
    id: "professionals",
    icon: Briefcase,
    label: "Professionals",
    description:
      "For anyone handling long workdays, shifting priorities, and tight deadlines. Frame Forge keeps your routines intact even through chaos.",
    stat: "87%",
    statLabel: "Weekly consistency",
    imagePlaceholder: "💼",
  },
  {
    id: "students",
    icon: GraduationCap,
    label: "Students",
    description:
      "Build study habits that stick. Lock in your deep work sessions, track your progress each week, and hit those academic streaks.",
    stat: "21 Days",
    statLabel: "Average streak",
    imagePlaceholder: "📚",
  },
  {
    id: "remote-workers",
    icon: Laptop,
    label: "Remote Workers",
    description:
      "When your home is your office, structure matters more than ever. Routine stacks help you create boundaries and stay on track.",
    stat: "40+",
    statLabel: "Focus sessions / month",
    imagePlaceholder: "🖥️",
  },
  {
    id: "busy-parents",
    icon: Users,
    label: "Busy Parents",
    description:
      "Carve out moments for yourself without guilt. Small, consistent wins across short windows add up to big progress.",
    stat: "10 Days",
    statLabel: "Hydration goal streak",
    imagePlaceholder: "🏡",
  },
];

function UseCaseCard({
  uc,
  i,
}: {
  uc: (typeof useCases)[0];
  i: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = uc.icon;

  return (
    <motion.div
      ref={ref}
      id={`use-case-${uc.id}`}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="glass-panel glow-border rounded-3xl p-7 flex flex-col gap-5 group hover:bg-white/[0.04] transition-all duration-300"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-all">
          <Icon size={18} className="text-white/70" />
        </div>
        <span className="text-white font-semibold">{uc.label}</span>
      </div>

      <p className="text-white/40 text-sm leading-relaxed">{uc.description}</p>

      {/* Stat + image row */}
      <div className="flex items-end justify-between mt-auto gap-4">
        <div>
          <div className="text-3xl font-bold text-white tracking-tight">{uc.stat}</div>
          <div className="text-xs text-white/30 mt-0.5">{uc.statLabel}</div>
        </div>

        {/* Image placeholder */}
        <div
          id={`use-case-${uc.id}-image`}
          className="w-20 h-20 rounded-2xl bg-white/5 border border-dashed border-white/10 flex items-center justify-center flex-shrink-0"
          title="Image placeholder — replace with your asset"
        >
          <span className="text-3xl">{uc.imagePlaceholder}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function UseCaseSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="use-case" className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div ref={titleRef} className="mb-14 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-3"
          >
            Fits every lifestyle
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            And for every kind of daily rhythm
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {useCases.map((uc, i) => (
            <UseCaseCard key={uc.id} uc={uc} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
