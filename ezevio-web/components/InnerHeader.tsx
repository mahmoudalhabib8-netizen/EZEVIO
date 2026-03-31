"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { usePathname } from "next/navigation";
import { SITE_NAV_ITEMS } from "@/lib/siteNav";

function navPathActive(pathname: string, href: string) {
  const p = pathname.replace(/\/$/, "") || "/";
  const h = href.replace(/\/$/, "") || "/";
  return p === h;
}

export function InnerHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (menuOpen) {
      root.classList.add("menu-is-open", "no--scroll");
    } else {
      root.classList.remove("menu-is-open", "no--scroll");
    }
    return () => {
      root.classList.remove("menu-is-open", "no--scroll");
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((o) => !o);

  const onMenuKeyDown = (e: ReactKeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleMenu();
    }
  };

  return (
    <header>
      <div className="o-container">
        <nav className="o-col-12 inner-nav">
          <Link href="/" className="header__logo">
            <Image
              src="/ezevio-logo.svg"
              alt="EZEVIO"
              width={348}
              height={76}
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
            <div className={`hamburger${menuOpen ? " active" : ""}`}>
              <div className="hamburger-box">
                <div className="hamburger-inner" />
                <div className="close-inner" />
              </div>
            </div>
          </div>
          <ul>
            {SITE_NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={
                    navPathActive(pathname, item.href) ? "active" : undefined
                  }
                  aria-current={
                    navPathActive(pathname, item.href) ? "page" : undefined
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className={`mobile-menu${menuOpen ? " active" : ""}`}>
          <ul>
            {SITE_NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={
                    navPathActive(pathname, item.href) ? "active" : undefined
                  }
                  aria-current={
                    navPathActive(pathname, item.href) ? "page" : undefined
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
