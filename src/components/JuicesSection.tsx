"use client";

import Image from "next/image";
import Masonry from "@/components/ui/Masonry";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const galleryItems = [
  {
    id: "1",
    img: "/images/about-cane.jpg",
    url: "#contact",
    height: 520,
  },
  {
    id: "2",
    img: "/images/gallery-1.jpg",
    url: "#contact",
    height: 340,
  },
  {
    id: "3",
    img: "/images/gallery-2.jpg",
    url: "#contact",
    height: 460,
  },
  {
    id: "4",
    img: "/images/contact-shop.jpg",
    url: "#contact",
    height: 360,
  },
  {
    id: "5",
    img: "/images/gallery-3.jpg",
    url: "#contact",
    height: 500,
  },
  {
    id: "6",
    img: "/images/gallery-1.jpg",
    url: "#contact",
    height: 320,
  },
  {
    id: "7",
    img: "/images/about-cane.jpg",
    url: "#contact",
    height: 420,
  },
  {
    id: "8",
    img: "/images/contact-shop.jpg",
    url: "#contact",
    height: 390,
  },
];

const shopImages = [
  "/images/frootcane-shop-1.jpg",
  "/images/frootcane-shop-2.jpg",
  "/images/frootcane-shop-3.jpg",
  "/images/frootcane-shop-4.jpg",
  "/images/frootcane-shop-5.jpg",
];

const shopDescriptions = [
  "Our bright green storefront welcomes you with fresh sugarcane displays and clean live processing.",
  "Check out our signature lightup menu showing fresh juice combos, mocktails, and delicious grills.",
  "Stop by during the day to grab a chilled cup, freshly pressed directly in front of you.",
  "Look for our glowing mascot emblem — a promise of 100% natural, fresh, and hygienic sugarcane juice.",
  "Conveniently located at OPP New Private Bus Stand and Outer Ring Road near the Railway Station in Guruvayoor."
];

export default function JuicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Set up auto-fade slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % shopImages.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  // Set up scroll progress tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to horizontal translation (from 0% to -50% of the flex container)
  const x = useTransform(scrollYProgress, [0.05, 0.95], ["0%", "-50%"]);

  return (
    <div ref={containerRef} className="relative h-[220vh] w-full">
      {/* Sticky container matching the viewport */}
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden bg-[#f7f3e6] pt-16 sm:pt-20">
        {/* Horizontal moving strip */}
        <motion.div style={{ x }} className="flex w-[200vw] h-full flex-none items-center">
          
          {/* PANEL 1: Frootcane Moments */}
          <div className="w-[100vw] h-full flex-none flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-7xl h-full flex flex-col justify-center py-4">
              <div className="mb-4 text-center sm:mb-6 flex-none">
                <p className="font-condensed text-base uppercase tracking-[0.2em] text-[#2c6a1e] font-semibold">Gallery</p>
                <h2 className="mt-1 font-slab text-4xl font-bold text-[#2c6a1e] sm:text-5xl lg:text-6xl">
                  Frootcane Moments
                </h2>
                <p className="mx-auto mt-2 max-w-2xl text-sm sm:text-base text-[#56614b]">
                  A live look at our drinks, counter, and daily fresh sugarcane service. Scroll down to see our shop.
                </p>
              </div>

              {/* Grid Content */}
              <div className="grow overflow-hidden flex items-center justify-center min-h-[300px] max-h-[60vh]">
                {/* Desktop Grid */}
                <div className="hidden lg:block w-full">
                  <Masonry
                    items={galleryItems}
                    ease="power3.out"
                    duration={0.6}
                    stagger={0.05}
                    animateFrom="bottom"
                    scaleOnHover
                    hoverScale={0.95}
                    blurToFocus
                    colorShiftOnHover={false}
                  />
                </div>

                {/* Mobile Grid */}
                <div className="grid grid-cols-2 gap-4 lg:hidden w-full max-w-2xl px-2">
                  {[galleryItems[0], galleryItems[1]].map((item) => (
                    <article
                      key={item.id}
                      className="item-reveal group relative h-48 sm:h-64 overflow-hidden rounded-3xl border border-green-100 shadow-[0_10px_20px_rgba(43,95,30,0.12)]"
                    >
                      <Image
                        src={item.img}
                        alt="Frootcane gallery"
                        fill
                        className="object-cover transition duration-700 group-hover:brightness-95"
                      />
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* PANEL 2: Frootcane Shop Slideshow */}
          <div className="w-[100vw] h-full flex-none flex items-center justify-center bg-[#f4f9eb] px-4 sm:px-6 lg:px-8 border-l border-[#d3e5bf]/60">
            <div className="mx-auto w-full max-w-7xl h-full flex flex-col justify-center py-6">
              
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14 h-full">
                
                {/* Text section */}
                <div className="flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
                  <p className="font-condensed text-base uppercase tracking-[0.2em] text-[#2c6a1e] font-semibold">Storefront</p>
                  <h2 className="mt-2 font-slab text-4xl font-bold text-[#2c6a1e] sm:text-5xl lg:text-6xl">
                    Frootcane Shop
                  </h2>
                  <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#4e5a44] max-w-xl mx-auto lg:mx-0">
                    Come visit our physical hubs in Guruvayoor! Enjoy sugarcane juice prepared in strict hygiene conditions alongside yummy snacks and desserts.
                  </p>
                  
                  {/* Informational Card */}
                  <div className="mt-6 p-5 rounded-2xl border border-[#cfe1bd] bg-white/80 shadow-[0_8px_20px_rgba(43,95,30,0.06)] max-w-xl mx-auto lg:mx-0">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#2c6a1e] mb-1">Preview Details</p>
                    <p className="text-sm font-medium text-[#2c6a1e] italic min-h-[40px]">
                      &ldquo;{shopDescriptions[currentSlide]}&rdquo;
                    </p>
                  </div>

                  {/* Indicator Dots */}
                  <div className="mt-6 flex items-center justify-center lg:justify-start gap-2">
                    {shopImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          idx === currentSlide ? "w-8 bg-[#2c6a1e]" : "w-2.5 bg-[#cbdcbb]"
                        }`}
                        aria-label={`Go to shop photo ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Slideshow card frame */}
                <div className="relative order-1 lg:order-2 flex items-center justify-center">
                  <div className="relative w-full max-w-md lg:max-w-full aspect-video sm:aspect-16/10 lg:aspect-4/3 overflow-hidden rounded-[2.2rem] border border-green-200 bg-white p-3 shadow-[0_24px_50px_rgba(50,88,34,0.18)]">
                    <div className="relative h-full w-full overflow-hidden rounded-[1.8rem] bg-[#e3ecd7]">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentSlide}
                          initial={{ opacity: 0, scale: 1.03 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.98 }}
                          transition={{ duration: 0.7 }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={shopImages[currentSlide]}
                            alt="Frootcane shop photo"
                            fill
                            className="object-cover"
                            priority
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
