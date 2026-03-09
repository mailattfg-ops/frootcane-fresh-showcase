import { useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionReveal from "@/components/SectionReveal";

import heroImg from "@/assets/hero-juice.jpg";
import pressImg from "@/assets/gallery-press.jpg";
import varietiesImg from "@/assets/gallery-varieties.jpg";
import shopImg from "@/assets/gallery-shop.jpg";
import fieldImg from "@/assets/gallery-field.jpg";
import pourImg from "@/assets/gallery-pour.jpg";
import aboutImg from "@/assets/about-story.jpg";

const images = [
  { src: heroImg, alt: "Sugarcane juice with mint garnish", caption: "Our classic serve" },
  { src: pressImg, alt: "Sugarcane being pressed", caption: "Freshly pressed, always" },
  { src: varietiesImg, alt: "Different juice flavors arranged together", caption: "The full lineup" },
  { src: shopImg, alt: "Inside a Frootcane juice bar", caption: "Our flagship café" },
  { src: fieldImg, alt: "Sugarcane field at sunset", caption: "Where it all begins" },
  { src: pourImg, alt: "Juice being poured into a glass", caption: "Made to order" },
  { src: aboutImg, alt: "Ginger lemon sugarcane juice", caption: "Ginger Kick — a fan favourite" },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const navigate = useCallback((dir: 1 | -1) => {
    if (lightbox === null) return;
    setLightbox((lightbox + dir + images.length) % images.length);
  }, [lightbox]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") setLightbox(null);
    if (e.key === "ArrowRight") navigate(1);
    if (e.key === "ArrowLeft") navigate(-1);
  }, [navigate]);

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-muted">
        <div className="container max-w-5xl">
          <SectionReveal>
            <div className="text-center mb-14">
              <h1 className="text-foreground mb-4">Gallery</h1>
              <p className="text-muted-foreground max-w-md mx-auto">
                A look inside Frootcane — from the fields where our sugarcane grows to the glass in your hand.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {images.map((img, i) => (
              <SectionReveal key={i}>
                <button
                  onClick={() => setLightbox(i)}
                  className="group relative block w-full overflow-hidden rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-background text-xs font-heading font-medium">{img.caption}</span>
                  </div>
                </button>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-label="Image viewer"
        >
          <button
            className="absolute top-5 right-5 text-background/70 hover:text-background transition-colors z-10"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={28} />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-background/50 hover:text-background transition-colors"
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
            aria-label="Previous image"
          >
            <ChevronLeft size={36} />
          </button>

          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="w-full max-h-[80vh] rounded-xl object-contain"
            />
            <p className="text-center text-background/70 text-sm mt-3 font-heading">
              {images[lightbox].caption}
            </p>
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-background/50 hover:text-background transition-colors"
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
            aria-label="Next image"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
