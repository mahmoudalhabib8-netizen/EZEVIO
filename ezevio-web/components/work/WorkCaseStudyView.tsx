import { SplitSection } from "@/components/SplitSection";
import type { WorkCaseStudyData, WorkCaseMediaSlot } from "@/lib/workCaseStudies";

const PLACEHOLDER = "/work/placeholder-case.svg";

/** Keeps mega titles readable at full scale; prefers breaking at a word. */
const MEGA_LINE_MAX_CHARS = 34;

function shortenMegaLine(line: string, maxChars = MEGA_LINE_MAX_CHARS): string {
  const t = line.trim();
  if (t.length <= maxChars) return t;
  const slice = t.slice(0, maxChars);
  const lastSpace = slice.lastIndexOf(" ");
  const cut =
    lastSpace > Math.floor(maxChars * 0.35)
      ? slice.slice(0, lastSpace)
      : slice.trimEnd();
  return `${cut.trimEnd()}…`;
}

/** Same column classes as SplitSection `serviceRevealStep={2}` (Strategy / Design / Results). */
const SPLIT_REST_HEADING =
  "o-col-12--xlg u-push-6--xlg o-col-6--md o-col-12 dumbar-col-stack";
const SPLIT_REST_BODY =
  "o-col-6--xlg u-push-6--xlg o-col-6--md o-col-12 dumbar-col-stack";

const MEDIA_COL = "o-col-12--md o-col-12 dumbar-col-stack";

function CaseFigure({ alt }: { alt: string }) {
  return (
    <figure className="work-case__figure">
      {/* eslint-disable-next-line @next/next/no-img-element -- placeholder / future case assets */}
      <img
        src={PLACEHOLDER}
        alt={alt}
        className="work-case__img"
        loading="lazy"
        decoding="async"
        draggable={false}
      />
    </figure>
  );
}

function MediaRowTwo() {
  return (
    <section
      className="o-grid work-case__media-section"
      data-aos="topleft-hardscale-service-step-1"
    >
      <div className={MEDIA_COL}>
        <div className="work-case__media-pair">
          <div className="work-case__media-pair__cell">
            <CaseFigure alt="Project still (placeholder)" />
          </div>
          <div className="work-case__media-pair__cell">
            <CaseFigure alt="Project still (placeholder)" />
          </div>
        </div>
      </div>
    </section>
  );
}

function MediaRowFull() {
  return (
    <section
      className="o-grid work-case__media-section"
      data-aos="topleft-hardscale-service-step-2"
    >
      <div className={MEDIA_COL}>
        <CaseFigure alt="Project still (placeholder)" />
      </div>
    </section>
  );
}

function MediaSlot({ slot }: { slot: WorkCaseMediaSlot }) {
  if (slot === "full") return <MediaRowFull />;
  if (slot === "half") return <MediaRowTwo />;
  return null;
}

type Props = { data: WorkCaseStudyData };

export function WorkCaseStudyView({ data }: Props) {
  const [m0, m1, m2, m3] = data.mediaAfter;

  return (
    <div className="t-default t-about work-case">
      <div className="o-container">
        <div className="o-grid content">
          {data.heroImage ? (
            <div className="work-case__hero o-col-12--md o-col-12">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={data.heroImage}
                alt=""
                className="work-case__hero-img"
                loading="eager"
                decoding="async"
                draggable={false}
              />
            </div>
          ) : null}

          <div className="mega-title-wrap o-col-12--md o-col-12">
            <h1 className="mega-title" data-aos="topleft-hardscale">
              {shortenMegaLine(data.megaLine1)} —<br />
              {shortenMegaLine(data.megaLine2)}
            </h1>
          </div>

          <SplitSection
            section={{
              heading: "Services",
              body: data.servicesLine,
            }}
            serviceRevealStep={1}
          />

          <section
            className="o-grid work-case__intro"
            data-aos="topleft-hardscale-service-step-1"
          >
            <div
              className={`${SPLIT_REST_HEADING} work-case__intro-spacer`}
              aria-hidden
            />
            <div className={SPLIT_REST_BODY}>
              <p>{data.intro}</p>
            </div>
          </section>

          <MediaSlot slot={m0} />

          <SplitSection
            section={{ heading: "Strategy", body: data.strategy }}
            serviceRevealStep={2}
          />

          <MediaSlot slot={m1} />

          <SplitSection
            section={{ heading: "Design", body: data.design }}
            serviceRevealStep={2}
          />

          <MediaSlot slot={m2} />

          <SplitSection
            section={{ heading: "Results", body: data.results }}
            serviceRevealStep={2}
          />

          <MediaSlot slot={m3} />
        </div>
      </div>
    </div>
  );
}
