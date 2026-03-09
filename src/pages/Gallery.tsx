import { useState } from "react";
import { X } from "lucide-react";
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
  { src: heroImg, alt: "Fresh sugarcane juice with mint" },
  { src: pressImg, alt: "Sugarcane pressing process" },
  { src: varietiesImg, alt: "Juice flavor varieties" },
  { src: shopImg, alt: "Our premium juice bar" },
  { src: fieldImg, alt: "Sugarcane fields at sunset" },
  { src: pourImg, alt: "Juice being poured fresh" },
  { src: aboutImg, alt: "Ginger lemon sugarcane juice" },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <Layout>
      <section className="py-20 md:py-28 bg-muted">
        <div className="container">
          <SectionReveal>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
              Gallery
            </h1>
            <p className="text-center text-muted-foreground max-w-lg mx-auto mb-12">
              A visual taste of Frootcane — from our farms to your glass.
            </p>
          </SectionReveal>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((img, i) => (
              <SectionReveal key={i}>
                <button
                  onClick={() => setLightbox(i)}
                  className="block w-full overflow-hidden rounded-xl border border-border shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </button>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-background hover:text-accent transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
