"use client";

import { useEffect } from "react";

const PAGE_CLASS = "work-case-hero-page";
const REVEALED_CLASS = "work-case-hero-revealed";

function isRevealed(sheet: Element | null): boolean {
  if (!sheet) return true;
  const top = sheet.getBoundingClientRect().top;
  const scrollY =
    window.scrollY ||
    window.pageYOffset ||
    document.documentElement.scrollTop;
  const vh = window.visualViewport?.height ?? window.innerHeight;
  /* Sheet reached viewport top, or user scrolled ~one full viewport (fallback). */
  return top <= 4 || scrollY >= Math.max(0, vh - 2);
}

/**
 * Hides InnerHeader until the black body sheet reaches the top — after the fixed hero.
 * Uses scroll-gap (height-based) layout + rect + scrollY fallback for reliable detection.
 */
export function WorkCaseScrollHeaderReveal() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add(PAGE_CLASS);

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const apply = () => {
      if (mq.matches) {
        root.classList.add(REVEALED_CLASS);
        return;
      }
      const sheet = document.querySelector(".work-case__body-sheet");
      root.classList.toggle(REVEALED_CLASS, isRevealed(sheet));
    };

    const sheet = document.querySelector(".work-case__body-sheet");
    const observers: IntersectionObserver[] = [];

    if (sheet && !mq.matches) {
      const io = new IntersectionObserver(apply, {
        root: null,
        rootMargin: "0px",
        threshold: [0, 0.02, 0.1, 0.25, 0.5, 0.75, 1],
      });
      io.observe(sheet);
      observers.push(io);
    }

    apply();
    mq.addEventListener("change", apply);
    window.addEventListener("scroll", apply, { passive: true });
    window.addEventListener("resize", apply);
    window.visualViewport?.addEventListener("resize", apply);
    window.visualViewport?.addEventListener("scroll", apply);

    return () => {
      mq.removeEventListener("change", apply);
      window.removeEventListener("scroll", apply);
      window.removeEventListener("resize", apply);
      window.visualViewport?.removeEventListener("resize", apply);
      window.visualViewport?.removeEventListener("scroll", apply);
      observers.forEach((o) => o.disconnect());
      root.classList.remove(PAGE_CLASS, REVEALED_CLASS);
    };
  }, []);

  return null;
}
