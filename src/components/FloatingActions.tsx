"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const whatsappLink = "https://wa.me/919292020093";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 260);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-5 right-4 z-[70] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <button
        type="button"
        onClick={goTop}
        aria-label="Scroll to top"
        className={`inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#a8c98a] bg-white/95 text-[#1f4e1a] shadow-[0_10px_18px_rgba(45,84,29,0.22)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f7fceF] ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        <ArrowUp size={20} />
      </button>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="inline-flex h-13 min-w-13 items-center justify-center rounded-full bg-[#25D366] px-3 text-white shadow-[0_12px_22px_rgba(20,99,53,0.36)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1fbe59]"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
          <path d="M19.05 4.94A9.86 9.86 0 0 0 12.04 2C6.56 2 2.1 6.46 2.1 11.94c0 1.76.46 3.48 1.33 4.99L2 22l5.22-1.37a9.88 9.88 0 0 0 4.81 1.23h.01c5.48 0 9.94-4.46 9.94-9.94a9.86 9.86 0 0 0-2.93-6.98Zm-7.01 15.25h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.1.81.83-3.02-.19-.31a8.17 8.17 0 0 1-1.26-4.4c0-4.52 3.68-8.2 8.21-8.2 2.19 0 4.24.85 5.79 2.4a8.12 8.12 0 0 1 2.4 5.8c0 4.52-3.68 8.2-8.19 8.2Zm4.5-6.14c-.25-.12-1.47-.73-1.7-.82-.23-.08-.4-.12-.57.12-.17.25-.66.82-.8.99-.15.17-.29.19-.54.06a6.63 6.63 0 0 1-1.95-1.2 7.35 7.35 0 0 1-1.36-1.7c-.14-.25-.02-.38.1-.5.11-.11.25-.29.37-.43.12-.14.17-.25.26-.42.08-.17.04-.31-.02-.43-.06-.12-.57-1.38-.78-1.89-.21-.5-.42-.43-.57-.44h-.49a.95.95 0 0 0-.69.32c-.23.25-.9.88-.9 2.15 0 1.27.92 2.5 1.04 2.67.13.17 1.8 2.74 4.35 3.84.61.26 1.09.41 1.47.53.62.2 1.18.17 1.63.1.5-.08 1.47-.6 1.68-1.17.21-.57.21-1.06.15-1.16-.06-.1-.23-.15-.48-.27Z" />
        </svg>
      </a>
    </div>
  );
}
