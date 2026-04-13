"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, LayoutGrid, Bell, TrendingUp, CalendarCheck, Repeat } from "lucide-react";

const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: easeOutExpo },
  }),
};

const features = [
  {
    id: "flexible-streaks",
    icon: Repeat,
    title: "Flexible streak rules",
    desc: "Traditional habit trackers are too rigid. Miss one day and your streak is gone — not here.",
    tags: ["Travel Mode", "Sick Day", "Weekend Flex", "Rest Day", "Pause"],
    className: "col-span-2 row-span-1",
  },
  {
    id: "smart-planner",
    icon: CalendarCheck,
    title: "Smart daily planner",
    desc: "A simple view that shows only the habits that match your current time of day.",
    className: "col-span-1 row-span-2",
    isApp: true,
  },
  {
    id: "gentle-reminders",
    icon: Bell,
    title: "Gentle reminders",
    desc: "Short, calm nudges that help you stay consistent without pushing too hard.",
    className: "col-span-1 row-span-1",
  },
  {
    id: "routine-stacks",
    icon: LayoutGrid,
    title: "Routine stacks",
    desc: "Group habits into simple blocks so your day feels organized instead of scattered.",
    className: "col-span-1 row-span-1",
  },
  {
    id: "weekly-reflection",
    icon: TrendingUp,
    title: "Weekly reflection",
    desc: "A clear summary of your week that highlights what improved and what needs adjusting.",
    className: "col-span-1 row-span-1",
  },
  {
    id: "instant-tracking",
    icon: Zap,
    title: "One-tap tracking",
    desc: "Complete habits in a single tap. Fast, distraction-free, and designed for busy days.",
    className: "col-span-1 row-span-1",
  },
];

function BentoCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index}
      id={`feature-${feature.id}`}
      className={`glass-panel glow-border rounded-3xl p-6 flex flex-col gap-4 group hover:bg-white/[0.04] transition-all duration-300 cursor-default ${feature.className}`}
    >
      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-all">
        <Icon size={18} className="text-white/70" />
      </div>
      <div>
        <h3 className="text-white font-semibold text-lg leading-tight">{feature.title}</h3>
        <p className="mt-1 text-white/40 text-sm leading-relaxed">{feature.desc}</p>
      </div>

      {feature.tags && (
        <div className="flex flex-wrap gap-2 mt-auto">
          {feature.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {feature.isApp && (
        <div
          id="feature-planner-image-placeholder"
          className="mt-auto flex-1 rounded-2xl bg-white/5 border border-dashed border-white/10 flex flex-col items-center justify-center gap-2 min-h-[140px]"
        >
          <span className="text-2xl">📅</span>
          <p className="text-white/20 text-xs text-center px-2">
            [ App UI screenshot placeholder ]
          </p>
        </div>
      )}
    </motion.div>
  );
}

export default function FeaturesSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="features" className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div ref={titleRef} className="mb-14 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-3"
          >
            Habits with structure
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight max-w-2xl mx-auto"
          >
            Clarity for your routines
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-white/40 max-w-xl mx-auto"
          >
            Clean cards, realistic progress tracking, and guidance that adapts to your day.
          </motion.p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(180px,auto)]">
          {features.map((f, i) => (
            <BentoCard key={f.id} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
