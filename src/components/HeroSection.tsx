"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const slides = [
  {
    title: "Pure Sugarcane",
    subtitle: "Freshly pressed with no additives",
    image: "/images/about-cane.jpg",
    badge: "65% less acidity",
  },
  {
    title: "Daily Fresh",
    subtitle: "Pressed every day for clean flavor",
    image: "/images/gallery-1.jpg",
    badge: "2x more freshness",
  },
  {
    title: "Natural Blend",
    subtitle: "Crafted for smooth healthy refreshment",
    image: "/images/gallery-2.jpg",
    badge: "16+ hour served",
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 3400);

    return () => window.clearInterval(timer);
  }, []);

  const current = useMemo(() => slides[active], [active]);

  return (
    <section id="home" className="relative overflow-hidden bg-[#eaf2df] pb-10 pt-30 sm:pb-12 sm:pt-34 lg:min-h-[100svh] lg:pb-12 lg:pt-34">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_35%,rgba(117,176,59,0.33),transparent_44%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_80%,rgba(177,217,130,0.27),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-condensed text-lg tracking-[0.2em] text-green-700/85 sm:text-xl">
            Sugarcane Magic: Just the Cane, No Additives
          </p>
          <h1 className="mt-3 font-slab text-[3.8rem] leading-none tracking-[-0.04em] text-[#1f2b1f] sm:text-[5.2rem] lg:text-[7.2rem]">
            FROOTCANE
          </h1>
        </div>

        <div className="mt-4 grid grid-cols-1 items-end gap-7 lg:grid-cols-[0.95fr_1.15fr_0.9fr]">
          <div className="reveal-up pb-3 lg:pb-5">
            <h2 className="font-condensed text-[3rem] font-bold leading-[0.95] text-green-700 sm:text-[3.8rem]">
              World&apos;s Best
              <br />
              Quality Juice.
            </h2>
            <p className="mt-5 max-w-xl text-[1.05rem] leading-8 text-[#495443]">
              Non cum cras felis lacus sociosqu, risus condimentum placerat vivamus aliquam parturient, convallis in
              porttitor suspendisse. Sociis mauris inceptos non fermentum.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[33rem] sm:max-w-[35rem]">
            <div className="relative overflow-hidden rounded-[2.6rem] border border-green-200 bg-linear-to-br from-[#d8eab9] to-[#96be64] p-5 shadow-[0_32px_72px_rgba(77,122,41,0.32)]">
              <div className="relative overflow-hidden rounded-[2.1rem] border border-white/40 bg-white/20">
                {slides.map((slide, index) => (
                  <Image
                    key={slide.title}
                    src={slide.image}
                    alt={slide.title}
                    width={1200}
                    height={900}
                    className={`h-100 w-full object-cover transition-all duration-700 sm:h-108 ${
                      index === active ? "opacity-100 scale-100" : "absolute inset-0 opacity-0 scale-105"
                    }`}
                    priority={index === 0}
                  />
                ))}
              </div>
            </div>

            <div className="absolute -bottom-7 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-green-200 bg-white/95 px-3 py-2 shadow-[0_10px_20px_rgba(77,122,41,0.2)]">
              {slides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  aria-label={`Go to ${slide.title}`}
                  onClick={() => setActive(index)}
                  className={`h-2.5 rounded-full transition-all ${index === active ? "w-8 bg-green-700" : "w-2.5 bg-green-300"}`}
                />
              ))}
            </div>
          </div>

          <div className="reveal-up rounded-3xl border border-green-100 bg-white/85 p-5 shadow-[0_10px_20px_rgba(77,122,41,0.12)] lg:mb-4">
            <h3 className="font-condensed text-4xl font-bold text-green-800">{current.title}</h3>
            <p className="mt-2 text-lg leading-8 text-[#4b5a45]">{current.subtitle}</p>
            <p className="mt-4 inline-flex rounded-full bg-green-50 px-3 py-1.5 text-sm font-semibold text-green-700">
              {current.badge}
            </p>
          </div>
        </div>

        <div className="mt-9 grid grid-cols-2 gap-4 border-t border-green-100 pt-6 sm:grid-cols-4">
          <div>
            <p className="font-condensed text-4xl font-bold leading-none text-green-700">25+</p>
            <p className="mt-1 text-lg text-[#555d4b]">Flavor&apos;s</p>
          </div>
          <div>
            <p className="font-condensed text-4xl font-bold leading-none text-green-700">20+</p>
            <p className="mt-1 text-lg text-[#555d4b]">Expert&apos;s</p>
          </div>
          <div>
            <p className="font-condensed text-4xl font-bold leading-none text-green-700">70+</p>
            <p className="mt-1 text-lg text-[#555d4b]">Shop&apos;s</p>
          </div>
          <div className="flex items-center justify-end">
            <Image src="/Frootcane with trade mark.png" alt="Frootcane" width={170} height={40} className="h-9 w-auto opacity-90" />
          </div>
        </div>
      </div>
    </section>
  );
}
