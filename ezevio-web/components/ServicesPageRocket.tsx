"use client";

import { useEffect, useState } from "react";

const MEGA_TITLE_ID = "services-mega-title";

/** ms before “Launch.” transform start — rocket leads slightly so it feels synced, not late. */
const ROCKET_LEAD_MS = 300;

/** Matches globals.css stagger for the third `.topleft-hardscale-steps` span (“Launch.”). */
function getTransformTransitionDelayMs(el: HTMLElement): number {
  const cs = getComputedStyle(el);
  const props = cs.transitionProperty.split(/\s*,\s*/).map((p) => p.trim());
  const delays = cs.transitionDelay.split(/\s*,\s*/).map((s) => {
    const n = parseFloat(s);
    return Number.isFinite(n) ? n * 1000 : 0;
  });
  const idx = props.findIndex((p) => p === "transform");
  if (idx !== -1 && delays[idx] !== undefined) return delays[idx];
  return 600;
}

/**
 * One-shot flight slightly before “Launch.” begins scaling in (tied to its transition delay).
 */
export function ServicesPageRocket() {
  const [fly, setFly] = useState(false);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const span = document.querySelector<HTMLElement>(
      `#${MEGA_TITLE_ID} span[data-aos="topleft-hardscale-steps"]:nth-of-type(3)`,
    );
    if (!span) return;

    let delayFallback: number | undefined;
    let safetyTimer: number | undefined;
    let done = false;

    const go = () => {
      if (done) return;
      done = true;
      if (delayFallback !== undefined) window.clearTimeout(delayFallback);
      if (safetyTimer !== undefined) window.clearTimeout(safetyTimer);
      setFly(true);
    };

    const arm = () => {
      const delayMs = getTransformTransitionDelayMs(span);
      const startMs = Math.max(0, delayMs - ROCKET_LEAD_MS);
      delayFallback = window.setTimeout(go, startMs);
      safetyTimer = window.setTimeout(go, 2400);
    };

    const cleanup = () => {
      if (delayFallback !== undefined) window.clearTimeout(delayFallback);
      if (safetyTimer !== undefined) window.clearTimeout(safetyTimer);
    };

    if (span.classList.contains("aos-animate")) {
      arm();
    } else {
      const mo = new MutationObserver(() => {
        if (!span.classList.contains("aos-animate")) return;
        mo.disconnect();
        arm();
      });
      mo.observe(span, { attributes: true, attributeFilter: ["class"] });
      return () => {
        mo.disconnect();
        cleanup();
      };
    }

    return cleanup;
  }, []);

  if (!fly) return null;

  return (
    <div className="services-rocket-fly" aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="services-rocket-fly__img"
        src="/rocket-launch-.svg"
        alt=""
        width={104}
        height={104}
      />
    </div>
  );
}
