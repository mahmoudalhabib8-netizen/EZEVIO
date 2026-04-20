import { SplitSection } from "@/components/SplitSection";
import type {
  WorkCaseBodyItem,
  WorkCaseMediaCaption,
  WorkCaseMediaSlot,
  WorkCaseStill,
  WorkCaseStudyData,
} from "@/lib/workCaseStudies";

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

/** Matches SplitSection services rows after the first (left title / right body). */
const SERVICES_REST_HEADING =
  "o-col-12--xlg u-push-6--xlg o-col-6--md o-col-12 dumbar-col-stack";
const SERVICES_REST_BODY =
  "o-col-6--xlg u-push-6--xlg o-col-6--md o-col-12 dumbar-col-stack";

const MEDIA_COL = "o-col-12--md o-col-12 dumbar-col-stack";

function CaseStill({ still }: { still?: WorkCaseStill }) {
  const isAsset = Boolean(still?.src);
  return (
    <figure
      className={`work-case__figure${isAsset ? " work-case__figure--screenshot" : ""}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- case study assets */}
      <img
        src={still?.src ?? PLACEHOLDER}
        alt={
          still?.alt ??
          (isAsset ? "" : "Project still (placeholder)")
        }
        className="work-case__img"
        loading="lazy"
        decoding="async"
        draggable={false}
      />
    </figure>
  );
}

function MediaCaptionBlock({ caption }: { caption: WorkCaseMediaCaption }) {
  const [a, b] = caption.paragraphs;
  return (
    <>
      <div
        className={`${SERVICES_REST_HEADING} work-case__media-caption-heading`}
      >
        <h3>{caption.title}</h3>
      </div>
      <div
        className={`${SERVICES_REST_BODY} work-case__media-caption-body`}
      >
        <p>{a}</p>
        <p>{b}</p>
      </div>
    </>
  );
}

function MediaRowTwo({
  left,
  right,
  dataAos,
  caption,
}: {
  left?: WorkCaseStill;
  right?: WorkCaseStill;
  dataAos?: string;
  caption?: WorkCaseMediaCaption;
}) {
  return (
    <section
      className="o-grid work-case__media-section"
      data-aos={dataAos}
    >
      <div className={MEDIA_COL}>
        <div className="work-case__media-pair">
          <div className="work-case__media-pair__cell">
            <CaseStill still={left} />
          </div>
          <div className="work-case__media-pair__cell">
            <CaseStill still={right} />
          </div>
        </div>
      </div>
      {caption ? <MediaCaptionBlock caption={caption} /> : null}
    </section>
  );
}

function MediaRowFull({
  still,
  dataAos,
  caption,
}: {
  still?: WorkCaseStill;
  dataAos?: string;
  caption?: WorkCaseMediaCaption;
}) {
  return (
    <section
      className="o-grid work-case__media-section"
      data-aos={dataAos}
    >
      <div className={MEDIA_COL}>
        <CaseStill still={still} />
      </div>
      {caption ? <MediaCaptionBlock caption={caption} /> : null}
    </section>
  );
}

function MediaSlot({ slot }: { slot: WorkCaseMediaSlot }) {
  if (slot === "full")
    return <MediaRowFull dataAos="topleft-hardscale-service-step-2" />;
  if (slot === "half")
    return <MediaRowTwo dataAos="topleft-hardscale-service-step-1" />;
  return null;
}

function CaseBodyList({ items }: { items: WorkCaseBodyItem[] }) {
  return (
    <>
      {items.map((item, i) => {
        const dataAos =
          i % 2 === 0
            ? "topleft-hardscale-service-step-1"
            : "topleft-hardscale-service-step-2";
        if (item.type === "split") {
          return (
            <SplitSection
              key={`split-${i}`}
              section={{ heading: item.heading, body: item.body }}
              serviceRevealStep={item.serviceRevealStep ?? 2}
            />
          );
        }
        if (item.type === "media-half") {
          return (
            <MediaRowTwo
              key={`half-${i}`}
              left={item.left}
              right={item.right}
              dataAos={dataAos}
              caption={item.caption}
            />
          );
        }
        return (
          <MediaRowFull
            key={`full-${i}`}
            still={{ src: item.src, alt: item.alt }}
            dataAos={dataAos}
            caption={item.caption}
          />
        );
      })}
    </>
  );
}

type Props = { data: WorkCaseStudyData };

export function WorkCaseStudyView({ data }: Props) {
  const [m0, m1, m2, m3] = data.mediaAfter;
  const useCaseBody = Boolean(data.caseBody?.length);

  return (
    <div className="t-default t-about work-case">
      <div className="o-container">
        <div className="o-grid content">
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

          {data.heroImage ? (
            <MediaRowFull
              still={{ src: data.heroImage, alt: "" }}
              dataAos="topleft-hardscale-service-step-2"
            />
          ) : null}

          {useCaseBody && data.caseBody ? (
            <CaseBodyList items={data.caseBody} />
          ) : (
            <MediaSlot slot={m0} />
          )}

          <SplitSection
            section={{ heading: "Strategy", body: data.strategy }}
            serviceRevealStep={2}
          />

          {useCaseBody ? null : <MediaSlot slot={m1} />}

          <SplitSection
            section={{ heading: "Design", body: data.design }}
            serviceRevealStep={2}
          />

          {useCaseBody ? null : <MediaSlot slot={m2} />}

          <SplitSection
            section={{ heading: "Results", body: data.results }}
            serviceRevealStep={2}
          />

          {useCaseBody ? null : <MediaSlot slot={m3} />}
        </div>
      </div>
    </div>
  );
}
