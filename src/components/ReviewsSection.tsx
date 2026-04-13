"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Maya Zong",
    role: "Student",
    text: "Frame Forge made my mornings feel manageable again.",
  },
  {
    name: "Daniel Perez",
    role: "Software Engineer",
    text: "The weekly insights are what sold me. They show exactly where I fall off and help me adjust without feeling guilty or overwhelmed.",
  },
  {
    name: "Andre Lewis",
    role: "University Student",
    text: "This is the first habit app that doesn't overwhelm me. Everything feels calm, structured, and intentional.",
  },
  {
    name: "Ethan Miller",
    role: "Gym Trainer",
    text: "I used to ignore reminders from other apps, but these feel calm and well-timed. It's like the app knows when I'm actually able to do something.",
  },
  {
    name: "Laura Kim",
    role: "Product Designer",
    text: "Focus blocks changed the way I work. I get more done in two hours now than what used to take half a day.",
  },
  {
    name: "Kevin Brooks",
    role: "Fitness Coach",
    text: "The simple visuals and progress cues make it easy to stay consistent every day.",
  },
  {
    name: "Hannah Lee",
    role: "Content Writer",
    text: "It's the first habit app that doesn't overwhelm me. I actually stick to my routines now.",
  },
  {
    name: "Priya Shah",
    role: "Marketing Specialist",
    text: "Small steps finally add up. I actually stick to my routines now.",
  },
  {
    name: "Sofia Martinez",
    role: "UX Researcher",
    text: "Feels tailored to my day and keeps me motivated.",
  },
];

function ReviewCard({ review, i }: { review: (typeof reviews)[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="glass-panel glow-border rounded-2xl p-5 flex flex-col gap-3 break-inside-avoid"
    >
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, j) => (
          <Star key={j} size={11} className="fill-white/60 text-white/60" />
        ))}
      </div>
      <p className="text-white/60 text-sm leading-relaxed">&ldquo;{review.text}&rdquo;</p>
      <div className="flex items-center gap-2 mt-auto pt-2 border-t border-white/5">
        {/* Avatar placeholder */}
        <div
          className="w-7 h-7 rounded-full bg-white/10 border border-white/10 flex-shrink-0"
          title="Avatar placeholder"
        />
        <div>
          <p className="text-white text-xs font-semibold">{review.name}</p>
          <p className="text-white/30 text-xs">{review.role}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ReviewsSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="reviews" className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div ref={titleRef} className="mb-14 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-3"
          >
            A closer look
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Loved by our users
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-white/40"
          >
            4.5/5 · Trusted by 1,582+ users
          </motion.p>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {reviews.map((r, i) => (
            <ReviewCard key={r.name} review={r} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
