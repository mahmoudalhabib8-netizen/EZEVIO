import type { Metadata } from "next";
import Link from "next/link";
import { InnerPageShell } from "@/components/InnerPageShell";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <InnerPageShell>
      <div className="t-default t-contact">
        <div className="o-container">
          <div className="o-grid content">
            <div className="contact-section o-col-6--md o-col-12 dumbar-col-stack">
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
                Freelance / contract availability varies—say what you need and
                timeline in the first note.
              </p>
              <p>
                Company details, contracts, and tax IDs: on request.
                <br />
                <Link href="/privacy">Privacy</Link>
              </p>
            </div>
            <div className="o-col-6--md o-col-12 dumbar-col-stack">
              <p>Studio</p>
              <p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Add your address
                  <br />
                  City, region / postcode
                  <br />
                  Country
                </a>
              </p>
              <p>
                <a href="https://www.instagram.com">Instagram</a>
                <br />
                <a href="https://www.linkedin.com">LinkedIn</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </InnerPageShell>
  );
}
