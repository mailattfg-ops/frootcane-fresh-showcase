"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageCard {
  id: string;
  src: string;
  alt: string;
  rotation: number;
}

interface ImageCarouselHeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  onCtaClick?: () => void;
  images: ImageCard[];
  features?: Array<{
    title: string;
    description: string;
  }>;
}

export function ImageCarouselHero({
  title,
  subtitle,
  description,
  ctaText,
  onCtaClick,
  images,
  features = [
    {
      title: "Realistic Results",
      description: "Realistic results photos that look professionally crafted.",
    },
    {
      title: "Fast Generation",
      description: "Turn ideas into images in seconds.",
    },
    {
      title: "Diverse Styles",
      description: "Choose from a wide range of artistic options.",
    },
  ],
}: ImageCarouselHeroProps) {
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const [rotatingCards, setRotatingCards] = useState<number[]>(() =>
    images.map((_, i) => i * (360 / images.length)),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingCards((prev) => {
        const base = prev.length === images.length && prev.length > 0
          ? prev
          : images.map((_, i) => i * (360 / images.length));
        return base.map((value) => (value + 0.5) % 360);
      });
    }, 50);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-full overflow-visible bg-transparent py-2 sm:py-3">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 h-96 w-96 animate-pulse rounded-full bg-linear-to-br from-primary/8 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 animate-pulse rounded-full bg-linear-to-tr from-primary/8 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div
          className="relative mb-6 h-96 w-full max-w-6xl overflow-visible sm:mb-8 sm:h-125"
        >
          <div className="perspective-distant absolute inset-0 flex items-center justify-center overflow-visible">
            {images.map((image, index) => {
              const angle = (rotatingCards[index] || 0) * (Math.PI / 180);
              const radius = 190;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div
                  key={image.id}
                  className="absolute h-40 w-32 transition-all duration-300 sm:h-48 sm:w-40"
                  onMouseEnter={() => setHoveredCardId(image.id)}
                  onMouseLeave={() => setHoveredCardId(null)}
                  style={{
                    transform: `
                      translate(${x}px, ${y}px)
                      rotateZ(${image.rotation}deg)
                    `,
                    transformStyle: "preserve-3d",
                    zIndex: hoveredCardId === image.id ? 30 : 10,
                  }}
                >
                  <div
                    className={cn(
                      "group relative h-full w-full cursor-pointer overflow-hidden rounded-2xl shadow-[0_14px_34px_rgba(26,44,24,0.26)]",
                      "transition-all duration-300",
                      hoveredCardId === image.id
                        ? "-translate-y-2 scale-112 shadow-[0_22px_42px_rgba(26,44,24,0.38)]"
                        : "hover:scale-108 hover:shadow-[0_18px_40px_rgba(26,44,24,0.34)]",
                    )}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      priority={index < 3}
                    />
                    <div className="absolute inset-0 bg-linear-to-br from-white/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative z-20 mx-auto mb-6 max-w-2xl text-center sm:mb-8">
          <p className="font-condensed text-lg uppercase tracking-[0.18em] text-green-700 sm:text-xl">{subtitle}</p>
          <h1 className="mt-3 text-balance font-slab text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-5 text-balance text-lg text-muted-foreground sm:text-xl">{description}</p>

          <button
            onClick={onCtaClick}
            className={cn(
              "group mt-5 inline-flex items-center gap-2 rounded-full px-8 py-3",
              "bg-primary font-medium text-primary-foreground",
              "transition-all duration-300 hover:scale-105 hover:shadow-lg",
              "active:scale-95 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
            )}
          >
            {ctaText}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="relative z-20 mt-4 grid w-full max-w-4xl grid-cols-1 gap-4 sm:mt-6 sm:grid-cols-3 sm:gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={cn(
                "group rounded-xl border border-border/50 bg-card/50 p-6 text-center backdrop-blur-sm",
                "transition-all duration-300 hover:border-border hover:bg-card/80",
              )}
            >
              <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary sm:text-xl">{feature.title}</h3>
              <p className="text-sm text-muted-foreground sm:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
