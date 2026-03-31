import type { Metadata } from "next";
import Link from "next/link";
import { InnerPageShell } from "@/components/InnerPageShell";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <InnerPageShell>
      <div className="t-default t-about">
        <div className="o-container">
          <div className="o-grid content">
            <div className="mega-title-wrap o-col-12--md o-col-12">
              <h2 className="mega-title" data-aos="topleft-hardscale">
                Privacy
              </h2>
            </div>
            <section className="o-grid">
              <div className="o-col-12 dumbar-col-stack">
                <h3>Summary</h3>
                <p>
                  Drop in your privacy policy and data practices when you’re
                  ready. EZEVIO only collects what’s needed to reply to inquiries
                  and run the site.
                </p>
                <p>
                  <Link href="/">Home</Link>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </InnerPageShell>
  );
}
