import type { Metadata } from "next";
import Link from "next/link";
import { InnerPageShell } from "@/components/InnerPageShell";
import { docTitle } from "@/lib/siteMeta";

export const metadata: Metadata = {
  title: docTitle("Contact"),
};

export default function ContactPage() {
  return (
    <InnerPageShell>
      <div className="t-default t-contact">
        <div className="o-container">
          <div className="o-grid content">
            <div
              className="contact-section o-col-12 dumbar-col-stack"
              data-aos="topleft-hardscale-service-step-1"
            >
              <p>
                New work &amp; general inquiries
                <br />
                <a href="mailto:hello@ezevio.com">hello@ezevio.com</a>
                <br />
                <a href="tel:+18144346356">814 434 6356</a>
              </p>
              <p>
                Press &amp; collaborations
                <br />
                <a href="mailto:press@ezevio.com">press@ezevio.com</a>
              </p>
              <p>
                Freelance / contract availability varies. Say what you need and your
                timeline in the first note.
              </p>
              <p>
                Company details, contracts, and tax IDs: on request.
                <br />
                <Link href="/privacy">Privacy</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </InnerPageShell>
  );
}
