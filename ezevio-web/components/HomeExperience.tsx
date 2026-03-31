"use client";

import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import type { HomeProject } from "@/lib/homeProjects";
import { SITE_NAV_ITEMS } from "@/lib/siteNav";

gsap.registerPlugin(ScrollTrigger);

const scaleRange = (
  n: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number,
) => ((n - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

type Props = {
  projects: HomeProject[];
};

export function HomeExperience({ projects }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const projectElsRef = useRef<(HTMLDivElement | null)[]>([]);
  const lenisRef = useRef<Lenis | null>(null);
  const figScaleRef = useRef(1);

  useEffect(() => {
    document.documentElement.classList.add("homepage", "home");
    return () => {
      document.documentElement.classList.remove(
        "homepage",
        "home",
        "menu-is-open",
        "no--scroll",
      );
      document.body.style.height = "";
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (menuOpen) {
      root.classList.add("menu-is-open", "no--scroll");
      lenisRef.current?.stop();
    } else {
      root.classList.remove("menu-is-open", "no--scroll");
      lenisRef.current?.start();
    }
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  useLayoutEffect(() => {
    const nodes = projectElsRef.current.filter(
      (n): n is HTMLDivElement => n != null,
    );
    if (nodes.length !== projects.length) return;

    const setScrollBodyHeight = () => {
      document.body.style.height = `${projects.length * window.innerHeight}px`;
    };
    setScrollBodyHeight();

    gsap.set(nodes, { autoAlpha: 0 });
    gsap.set(nodes[0], { autoAlpha: 1 });
    nodes.forEach((el, i) => {
      el.classList.toggle("projectActive", i === 0);
      el.classList.toggle("imageActive", i === 0);
    });

    let currentEl = nodes[0];

    const syncVideos = (active: HTMLDivElement) => {
      nodes.forEach((el) => {
        const vid = el.querySelector("video");
        if (!vid) return;
        if (el === active) void vid.play().catch(() => {});
        else {
          vid.pause();
          try {
            vid.currentTime = 0;
          } catch {
            /* ignore */
          }
        }
      });
    };

    const setProject = (next: HTMLDivElement) => {
      if (next === currentEl) return;
      gsap.to(currentEl, { autoAlpha: 0, duration: 0, overwrite: "auto" });
      gsap.to(next, { autoAlpha: 1, duration: 0, overwrite: "auto" });
      currentEl.classList.remove("projectActive", "imageActive");
      currentEl = next;
      currentEl.classList.add("projectActive", "imageActive");
      syncVideos(currentEl);
    };

    syncVideos(currentEl);

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => (t === 1 ? 1 : 1 - 2 ** (-10 * t)),
      wheelMultiplier: 0.5,
      smoothWheel: true,
      touchMultiplier: 1,
      syncTouch: true,
      infinite: true,
    });
    lenisRef.current = lenis;

    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value) {
        if (arguments.length && value != null) {
          lenis.scrollTo(value, { immediate: true });
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    const triggers = nodes.map((project, i) =>
      ScrollTrigger.create({
        start: () => (i - 0.5) * window.innerHeight,
        end: () => (i + 0.5) * window.innerHeight,
        onToggle: (self) => {
          if (self.isActive) setProject(project);
        },
      }),
    );

    const titleSpans = nodes
      .map((n) => n.querySelector<HTMLElement>("[data-project-title]"))
      .filter(Boolean) as HTMLElement[];

    lenis.on("scroll", (l: Lenis) => {
      ScrollTrigger.update();

      const maxScroll = Math.max(
        1,
        lenis.dimensions.limit.y ||
          document.documentElement.scrollHeight - window.innerHeight,
      );
      const th = (l.scroll / maxScroll) * 94;
      titleSpans.forEach((el) => {
        el.style.bottom = `${th}vh`;
      });

      const vi = Math.min(750, Math.abs(l.velocity));
      const scaleTarget =
        vi > 25 ? scaleRange(vi, 0, 750, 1, 0.92) : 1;
      let nextScale =
        figScaleRef.current + (scaleTarget - figScaleRef.current) * 0.1;
      nextScale = Math.max(0.9, Math.min(1, nextScale));
      figScaleRef.current = nextScale;
      nodes.forEach((node) => {
        const fig = node.querySelector<HTMLElement>(".figure-video");
        if (fig) fig.style.transform = `scale(${nextScale})`;
      });
    });

    const tickerFn = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);

    const onResize = () => {
      setScrollBodyHeight();
      ScrollTrigger.refresh();
      lenis.resize();
    };
    window.addEventListener("resize", onResize);

    ScrollTrigger.refresh();
    gsap.delayedCall(0.15, () => ScrollTrigger.refresh());

    return () => {
      window.removeEventListener("resize", onResize);
      triggers.forEach((t) => t.kill());
      gsap.ticker.remove(tickerFn);
      lenis.destroy();
      lenisRef.current = null;
      document.body.style.height = "";
    };
  }, [projects]);

  const toggleMenu = () => setMenuOpen((o) => !o);

  const onMenuKeyDown = (e: ReactKeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleMenu();
    }
  };

  return (
    <div className="home-scroll-shell">
      <main className="main t-home" role="main">
        <div className="panels">
          <header className="home-header">
            <div className="o-container">
              <nav>
                <Link href="/" className="header__logo">
                  <Image
                    src="/ezevio-logo-2.svg"
                    alt="EZEVIO"
                    width={226}
                    height={59}
                    priority
                    unoptimized
                  />
                </Link>
                <div
                  className="menu-toggle"
                  role="button"
                  tabIndex={0}
                  aria-expanded={menuOpen}
                  aria-label={menuOpen ? "Close menu" : "Open menu"}
                  onClick={toggleMenu}
                  onKeyDown={onMenuKeyDown}
                >
                  <div
                    className={`hamburger hamburger--squeeze${menuOpen ? " active" : ""}`}
                  >
                    <div className="hamburger-box">
                      <div className="hamburger-inner" />
                      <div className="close-inner" />
                    </div>
                  </div>
                </div>
                <ul>
                  {SITE_NAV_ITEMS.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <nav className={`mobile-menu${menuOpen ? " active" : ""}`}>
                <ul>
                  {SITE_NAV_ITEMS.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} onClick={() => setMenuOpen(false)}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </header>

          <section className="projects">
            {projects.map((project, i) => (
              <div
                key={project.slug}
                ref={(el) => {
                  projectElsRef.current[i] = el;
                }}
                className={`project${i === 0 ? " projectActive imageActive" : ""}`}
                data-title={project.title}
              >
                <figure className="figure-video">
                  <video
                    playsInline
                    muted
                    loop
                    preload="metadata"
                    className="videogif"
                    aria-label={project.title}
                  >
                    <source src={project.videoSrc} type="video/mp4" />
                  </video>
                </figure>
                <span data-project-title>
                  <span>
                    <Link href={project.href}>{project.title}</Link>
                  </span>
                </span>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}
