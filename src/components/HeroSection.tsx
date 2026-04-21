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
    <section id="home" className="relative overflow-hidden bg-[#eaf2df] pb-12 pt-24 sm:pb-14 sm:pt-28 lg:min-h-[100svh] lg:pb-16 lg:pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_35%,rgba(117,176,59,0.33),transparent_44%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_80%,rgba(177,217,130,0.27),transparent_40%)]" />
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#c9e38f]/20 blur-3xl" />
      <div className="absolute -right-24 top-36 h-80 w-80 rounded-full bg-[#9ed17b]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-condensed text-lg tracking-[0.2em] text-green-700/85 sm:text-xl">
            Sugarcane Magic: Just the Cane, No Additives
          </p>
          <h1 className="mt-3 font-condensed text-[3.8rem] font-extrabold leading-none tracking-[0.08em] text-[#1f2b1f] sm:text-[5.2rem] lg:text-[7.2rem]">
            FROOTCANE
          </h1>
        </div>

        <div className="mt-8 grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div className="reveal-up mx-auto max-w-xl lg:mx-0 lg:pb-8 lg:pr-6">
            <h2 className="font-condensed text-[2.8rem] font-bold leading-[0.95] text-green-700 sm:text-[3.7rem]">
              World&apos;s Best
              <br />
              Quality Juice.
            </h2>
            <p className="mt-5 max-w-xl text-[1.05rem] leading-8 text-[#495443]">
              Fresh sugarcane juice prepared daily with a clean process, balanced blends, and a smooth refreshing
              finish. Built for people who want real flavour without compromise.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-[#bddaa5] bg-white/70 px-4 py-2 text-sm font-semibold text-[#305d22] shadow-[0_8px_16px_rgba(77,122,41,0.08)]">
                Freshly pressed
              </span>
              <span className="rounded-full border border-[#bddaa5] bg-white/70 px-4 py-2 text-sm font-semibold text-[#305d22] shadow-[0_8px_16px_rgba(77,122,41,0.08)]">
                Natural ingredients
              </span>
              <span className="rounded-full border border-[#bddaa5] bg-white/70 px-4 py-2 text-sm font-semibold text-[#305d22] shadow-[0_8px_16px_rgba(77,122,41,0.08)]">
                Hygienic prep
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[41rem] lg:ml-auto">
            <div className="absolute -left-8 top-10 h-24 w-24 rounded-full bg-[#f4bcab]/75 blur-[2px]" />
            <div className="absolute right-0 top-6 h-24 w-24 rounded-full bg-[#f3c3ad]/70 blur-[2px]" />

            <div className="relative overflow-hidden rounded-[2.6rem] border border-green-200 bg-linear-to-br from-[#d8eab9] to-[#96be64] p-5 shadow-[0_32px_72px_rgba(77,122,41,0.32)]">
              <div className="relative overflow-hidden rounded-[2.1rem] border border-white/40 bg-white/20">
                {slides.map((slide, index) => (
                  <Image
                    key={slide.title}
                    src={slide.image}
                    alt={slide.title}
                    width={1200}
                    height={900}
                    className={`h-108 w-full object-cover transition-all duration-700 sm:h-[30rem] ${
                      index === active ? "opacity-100 scale-100" : "absolute inset-0 opacity-0 scale-105"
                    }`}
                    priority={index === 0}
                  />
                ))}

                <div className="pointer-events-none absolute inset-x-4 bottom-4 rounded-2xl bg-white/80 px-4 py-3 shadow-[0_10px_24px_rgba(55,96,34,0.12)] backdrop-blur-md">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-condensed text-2xl font-bold text-[#24531b]">{current.title}</p>
                      <p className="text-sm text-[#5c6c54]">{current.subtitle}</p>
                    </div>
                    <p className="inline-flex rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">
                      {current.badge}
                    </p>
                  </div>
                </div>
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
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 border-t border-green-100 pt-6 sm:grid-cols-4 lg:mt-12">
          <div className="reveal-up">
            <p className="font-condensed text-4xl font-bold leading-none text-green-700">25+</p>
            <p className="mt-1 text-lg text-[#555d4b]">Flavor&apos;s</p>
          </div>
          <div className="reveal-up">
            <p className="font-condensed text-4xl font-bold leading-none text-green-700">20+</p>
            <p className="mt-1 text-lg text-[#555d4b]">Expert&apos;s</p>
          </div>
          <div className="reveal-up">
            <p className="font-condensed text-4xl font-bold leading-none text-green-700">70+</p>
            <p className="mt-1 text-lg text-[#555d4b]">Shop&apos;s</p>
          </div>
          <div className="reveal-up rounded-2xl border border-[#d9e7c9] bg-white/70 px-4 py-3 shadow-[0_10px_20px_rgba(46,83,29,0.08)]">
            <p className="text-sm font-semibold tracking-[0.12em] text-[#4f6d39]">FRESH DAILY</p>
            <p className="mt-1 text-sm text-[#59654f]">Pressed fresh for every order</p>
          </div>
        </div>
      </div>
    </section>
  );
}
