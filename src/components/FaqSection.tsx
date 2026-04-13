"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How many habits can I track at once?",
    a: "You can track as many as you want, but most users keep 5–8 habits for better consistency.",
  },
  {
    q: "Is Frame Forge available on Android?",
    a: "Yes! Frame Forge is available on both iOS and Android. Download it from your preferred app store.",
  },
  {
    q: "Can I pause a streak without losing progress?",
    a: "Absolutely. Flexible streak rules let you pause for travel, sick days, and rest without losing your progress.",
  },
  {
    q: "How does the AI suggestion feature work?",
    a: "Frame Forge analyzes your completion patterns over time and surfaces small, actionable suggestions about when and how to adjust your routines.",
  },
  {
    q: "Is my data private?",
    a: "Yes, your data is encrypted and never sold to third parties. You can export or delete it at any time.",
  },
];

function FaqItem({ faq, i }: { faq: { q: string; a: string }; i: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      className="border-b border-white/5"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        aria-expanded={open}
      >
        <span className="text-white font-medium">{faq.q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 text-white/30"
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <p className="text-white/40 text-sm pb-5 leading-relaxed">{faq.a}</p>
      </motion.div>
    </motion.div>
  );
}

export default function FaqSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="relative py-24 px-6">
      <div className="mx-auto max-w-2xl">
        <div ref={titleRef} className="mb-12 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-3"
          >
            Common questions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Got questions?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-white/40"
          >
            Can&apos;t find what you need?{" "}
            <a href="#contact" className="text-white/70 underline hover:text-white transition-colors">
              Contact us
            </a>
          </motion.p>
        </div>

        <div>
          {faqs.map((faq, i) => (
            <FaqItem key={faq.q} faq={faq} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
