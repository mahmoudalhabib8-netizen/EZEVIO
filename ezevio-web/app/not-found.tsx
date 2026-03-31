import type { Metadata } from "next";
import Link from "next/link";
import { InnerPageShell } from "@/components/InnerPageShell";
import { docTitle } from "@/lib/siteMeta";

export const metadata: Metadata = {
  title: docTitle("Not found"),
};

/**
 * studiodumbar.com returns an empty 404 from nginx; we use the same inner-page
 * chrome and two-column t-about grid as their privacy/legal layout.
 */
export default function NotFound() {
  return (
    <InnerPageShell>
      <div className="t-default t-about">
        <div className="o-container">
          <div className="o-grid content">
            <div className="o-col-3--xlg u-push-3--xlg o-col-6--md o-col-12">
              <h3 data-aos="topleft-hardscale">404</h3>
            </div>
            <div
              className="o-col-6--xlg u-push-3--xlg o-col-6--md o-col-12"
              data-aos="topleft-hardscale"
            >
              <p>This page could not be found.</p>
              <p>
                <Link href="/">Back to EZEVIO</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </InnerPageShell>
  );
}
