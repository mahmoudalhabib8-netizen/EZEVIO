import type { ReactNode } from "react";
import { AosMount } from "@/components/AosMount";
import { InnerHeader } from "@/components/InnerHeader";
import { SiteFooter } from "@/components/SiteFooter";

export function InnerPageShell({ children }: { children: ReactNode }) {
  return (
    <div className="wrapper dumbar-inner-shell site-chrome">
      <AosMount />
      <InnerHeader />
      <main className="site-main">{children}</main>
      <SiteFooter />
    </div>
  );
}
