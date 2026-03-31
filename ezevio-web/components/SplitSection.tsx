import Link from "next/link";
import type { ServiceSection } from "@/lib/dumbarCopy";

type Props = {
  section: ServiceSection | { heading: string; body: string; cta?: ServiceSection["cta"] };
  /** First row uses step-1, following rows step-2 (services + about body sections). */
  serviceRevealStep?: 1 | 2;
};

const ABOUT_HEADING =
  "o-col-3--xlg u-push-3--xlg o-col-6--md o-col-12 dumbar-col-stack";
const ABOUT_BODY =
  "o-col-6--xlg u-push-3--xlg o-col-6--md o-col-12 dumbar-col-stack";
const SERVICES_FIRST_HEADING =
  "o-col-3--xlg u-push-3--xlg o-col-6--md o-col-12 dumbar-col-stack";
const SERVICES_FIRST_BODY =
  "o-col-5--xlg u-push-3--xlg o-col-6--md o-col-12 dumbar-col-stack";
const SERVICES_REST_HEADING =
  "o-col-12--xlg u-push-6--xlg o-col-6--md o-col-12 dumbar-col-stack";
const SERVICES_REST_BODY =
  "o-col-6--xlg u-push-6--xlg o-col-6--md o-col-12 dumbar-col-stack";

export function SplitSection({ section, serviceRevealStep }: Props) {
  const aos =
    serviceRevealStep === 1
      ? "topleft-hardscale-service-step-1"
      : serviceRevealStep === 2
        ? "topleft-hardscale-service-step-2"
        : undefined;

  const headingClass =
    serviceRevealStep === 1
      ? SERVICES_FIRST_HEADING
      : serviceRevealStep === 2
        ? SERVICES_REST_HEADING
        : ABOUT_HEADING;

  const bodyClass =
    serviceRevealStep === 1
      ? SERVICES_FIRST_BODY
      : serviceRevealStep === 2
        ? SERVICES_REST_BODY
        : ABOUT_BODY;

  return (
    <section className="o-grid" data-aos={aos}>
      <div className={headingClass}>
        <h3>{section.heading}</h3>
      </div>
      <div className={bodyClass}>
        <p>{section.body}</p>
        {"cta" in section && section.cta ? (
          <Link href={section.cta.href} className="about-link">
            {section.cta.label}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
