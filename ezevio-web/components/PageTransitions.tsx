"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

function isPlainLeftClick(e: MouseEvent) {
  return (
    e.button === 0 &&
    !e.defaultPrevented &&
    !e.metaKey &&
    !e.ctrlKey &&
    !e.shiftKey &&
    !e.altKey
  );
}

function findAnchor(target: EventTarget | null) {
  let el = target as HTMLElement | null;
  while (el) {
    if (el instanceof HTMLAnchorElement) return el;
    el = el.parentElement;
  }
  return null;
}

function shouldHandle(a: HTMLAnchorElement) {
  const href = a.getAttribute("href") ?? "";
  if (!href) return false;
  if (href.startsWith("#")) return false;
  if (a.target && a.target !== "_self") return false;
  if (a.hasAttribute("download")) return false;

  // Only same-origin + app routes.
  try {
    const url = new URL(a.href, window.location.href);
    if (url.origin !== window.location.origin) return false;
    if (!url.pathname.startsWith("/")) return false;
  } catch {
    return false;
  }

  return true;
}

function applyOutClass(pathname: string, nextHref: string) {
  const root = document.documentElement;
  root.classList.remove("PT-general_out", "PT-work_out");

  const p = pathname.replace(/\/$/, "") || "/";
  const next = nextHref.replace(/\/$/, "") || "/";

  const leavingWork =
    p === "/work" || p.startsWith("/work/") || next === "/work" || next.startsWith("/work/");

  root.classList.add(leavingWork ? "PT-work_out" : "PT-general_out");
}

function resetOutClasses() {
  document.documentElement.classList.remove("PT-general_out", "PT-work_out");
}

/**
 * StudioDumbar-like page transitions:
 * - add `html.PT-*_out` on internal link click
 * - delay navigation slightly so the scale/fade is visible
 * - remove the class on the next route mount
 */
export function PageTransitionsMount() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    resetOutClasses();
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!isPlainLeftClick(e)) return;
      const a = findAnchor(e.target);
      if (!a) return;
      if (!shouldHandle(a)) return;

      const nextUrl = new URL(a.href, window.location.href);
      const nextHref = `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`;
      if (nextUrl.pathname === pathname) return;

      e.preventDefault();
      applyOutClass(pathname, nextUrl.pathname);

      window.setTimeout(() => {
        router.push(nextHref);
      }, 260);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router, pathname]);

  return null;
}

