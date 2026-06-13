"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    let rafId = 0;
    let activeHash = "#home";

    const setHashSmoothly = (sectionId: string) => {
      const nextHash = `#${sectionId}`;
      if (nextHash === activeHash || window.location.hash === nextHash) {
        activeHash = nextHash;
        return;
      }

      activeHash = nextHash;
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }

      rafId = window.requestAnimationFrame(() => {
        window.history.replaceState(null, "", nextHash);
      });
    };

    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    // Always start at Home on a fresh load/refresh.
    if (window.location.hash !== "#home") {
      window.history.replaceState(null, "", "#home");
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    const onPageShow = () => {
      if (window.location.hash !== "#home") {
        window.history.replaceState(null, "", "#home");
      }
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    window.addEventListener("pageshow", onPageShow);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll<HTMLElement>(".section-reveal, .reveal-up, .item-reveal").forEach((el) => {
        el.classList.add("is-visible");
      });
      const reducedSectionObserver = new IntersectionObserver(
        (entries) => {
          const visibleEntries = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

          const topEntry = visibleEntries[0];
          if (!topEntry) {
            return;
          }

          const sectionId = (topEntry.target as HTMLElement).id;
          if (!sectionId) {
            return;
          }

          setHashSmoothly(sectionId);
        },
        {
          threshold: 0.55,
          rootMargin: "-20% 0px -30% 0px",
        },
      );

      ["home", "about", "menu", "gallery", "contact"].forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          reducedSectionObserver.observe(section);
        }
      });

      return () => {
        window.removeEventListener("pageshow", onPageShow);
        window.history.scrollRestoration = previousScrollRestoration;
        reducedSectionObserver.disconnect();
      };
    }

    const revealElements = Array.from(document.querySelectorAll<HTMLElement>(".section-reveal, .reveal-up, .item-reveal"));
    if (!revealElements.length) {
      return;
    }

    revealElements.forEach((el, index) => {
      if (el.classList.contains("item-reveal")) {
        el.style.transitionDelay = `${(index % 6) * 70}ms`;
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -6% 0px",
      },
    );

    revealElements.forEach((el) => observer.observe(el));

    // Keep URL hash synced with the section currently in view.
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const topEntry = visibleEntries[0];
        if (!topEntry) {
          return;
        }

        const sectionId = (topEntry.target as HTMLElement).id;
        if (!sectionId) {
          return;
        }

        setHashSmoothly(sectionId);
      },
      {
        threshold: 0.55,
        rootMargin: "-20% 0px -30% 0px",
      },
    );

    ["home", "about", "menu", "gallery", "contact"].forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        sectionObserver.observe(section);
      }
    });

    return () => {
      window.removeEventListener("pageshow", onPageShow);
      window.history.scrollRestoration = previousScrollRestoration;
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      observer.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  return null;
}
