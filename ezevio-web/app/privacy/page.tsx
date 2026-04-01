import type { Metadata } from "next";
import { InnerPageShell } from "@/components/InnerPageShell";
import { docTitle } from "@/lib/siteMeta";

export const metadata: Metadata = {
  title: docTitle("Privacy"),
};

/** Layout mirrors studiodumbar.com/privacy (t-default t-about, two-column o-grid). */
export default function PrivacyPage() {
  return (
    <InnerPageShell>
      <div className="t-default t-about">
        <div className="o-container">
          <div className="o-grid content">
            <div className="o-col-3--xlg u-push-3--xlg o-col-6--md o-col-12 dumbar-col-stack">
              <h3 data-aos="topleft-hardscale">Privacy Policy</h3>
            </div>
            <div
              className="o-col-6--xlg u-push-3--xlg o-col-6--md o-col-12 dumbar-col-stack"
              data-aos="topleft-hardscale"
            >
              <p>
                When you contact EZEVIO through this site or by email, the
                personal data you provide (such as your name and address details)
                is collected so we can respond. Information may have been
                supplied by you directly or obtained where relevant from public
                sources you point us to.
              </p>
              <p>
                Your personal data is processed to handle inquiries, prepare
                proposals, and carry out conversations about projects, in line
                with our legitimate interests in operating the studio and
                working with clients. That includes evaluating fit, following up
                on your message, and keeping records needed for ongoing
                discussions.
              </p>
              <p>
                EZEVIO retains contact and correspondence only as long as needed
                for those purposes or as required by law, then deletes or
                anonymises it in line with reasonable retention practices.
              </p>
              <p>
                Under the GDPR, you may request access to your personal data,
                ask that it be corrected or erased, or that processing be
                restricted. You also have the right to data portability and to
                lodge a complaint with an EU supervisory authority.
              </p>
              <p>
                Questions? Contact{" "}
                <a href="mailto:hello@ezevio.com">hello@ezevio.com</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </InnerPageShell>
  );
}
