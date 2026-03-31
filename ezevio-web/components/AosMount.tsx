"use client";

import { useEffect } from "react";

/**
 * Mirrors studiodumbar’s AOS pattern: elements with [data-aos] start hidden/transformed
 * in CSS; when they intersect the viewport we add .aos-animate.
 */
export function AosMount() {
  useEffect(() => {
    const selector = "[data-aos]:not([data-aos=\"\"])";

    const run = () => {
      document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight || 0;
        const early = Math.min(120, vh * 0.15);
        if (r.top < vh - early && r.bottom > early) {
          el.classList.add("aos-animate");
        }
      });
    };

    const observers: IntersectionObserver[] = [];

    document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
      const off = el.getAttribute("data-aos-offset");
      const n = off ? Number.parseInt(off, 10) : NaN;
      const rootMargin =
        Number.isFinite(n) && n > 0
          ? `0px 0px -${n}px 0px`
          : "0px 0px -12% 0px";

      const io = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting && e.target instanceof HTMLElement) {
            e.target.classList.add("aos-animate");
            io.unobserve(e.target);
          }
        },
        { root: null, rootMargin, threshold: 0.01 },
      );
      io.observe(el);
      observers.push(io);
    });

    run();

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return null;
}
