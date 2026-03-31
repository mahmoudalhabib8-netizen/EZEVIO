import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="c-footer">
      <div className="o-container">
        <div className="o-grid">
          <div className="welcome-everyone o-col-8--xlg o-col-10--md o-col-12 dumbar-col-stack">
            <p>
              New project or question? Reach us at{" "}
              <a href="tel:+18144346356">814 434 6356</a>,{" "}
              <a href="mailto:hello@ezevio.com">hello@ezevio.com</a>, or{" "}
              <Link href="/contact">/contact</Link>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
