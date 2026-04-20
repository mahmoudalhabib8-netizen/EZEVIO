/**
 * Inner work pages: mega title, Services, intro, media, Strategy / Design / Results.
 */
export type WorkCaseMediaSlot = "full" | "half" | null;

export type WorkCaseStill = { src: string; alt: string };

/** Left-column title + two body paragraphs (Services-style layout, minimum two lines). */
export type WorkCaseMediaCaption = {
  title: string;
  paragraphs: readonly [string, string];
};

export type WorkCaseBodyItem =
  | ({ type: "media-full" } & WorkCaseStill & { caption?: WorkCaseMediaCaption })
  | {
      type: "media-half";
      left: WorkCaseStill;
      right: WorkCaseStill;
      /** Narrative under the pair—what we designed, built, or configured. */
      caption?: WorkCaseMediaCaption;
    }
  | {
      type: "split";
      heading: string;
      body: string;
      /** Defaults to 2 when omitted (same rhythm as Strategy / Design / Results). */
      serviceRevealStep?: 1 | 2;
    };

export type WorkCaseStudyData = {
  megaLine1: string;
  megaLine2: string;
  servicesLine: string;
  intro: string;
  strategy: string;
  design: string;
  results: string;
  mediaAfter: [
    WorkCaseMediaSlot,
    WorkCaseMediaSlot,
    WorkCaseMediaSlot,
    WorkCaseMediaSlot,
  ];
  /**
   * Optional hero still shown after Services + intro (never above the mega title).
   * Prefer folding into `caseBody` when you need a caption beside the still.
   */
  heroImage?: string;
  /**
   * Ordered narrative strip (full-width stills, two-up pairs, or split headings).
   * When present, renders after the intro and replaces the four interleaved `mediaAfter` rows
   * (Strategy / Design / Results stay as the closing essay blocks).
   */
  caseBody?: WorkCaseBodyItem[];
};

const PLACEHOLDER_MEDIA: [
  WorkCaseMediaSlot,
  WorkCaseMediaSlot,
  WorkCaseMediaSlot,
  WorkCaseMediaSlot,
] = ["full", "half", "full", "half"];

const GA = "/work/getaced";

function wCap(
  title: string,
  p1: string,
  p2: string,
): WorkCaseMediaCaption {
  return { title, paragraphs: [p1, p2] };
}

const GETACED_CASE_BODY: WorkCaseBodyItem[] = [
  {
    type: "media-full",
    src: `${GA}/hero-landing-page.png`,
    alt: "GETACED marketing hero — headline, mark, and primary call to action",
    caption: wCap(
      "Marketing hero",
      "We opened the story with a new logo lockup and a hero that reads in seconds on a phone: one clear promise, one primary CTA, and brand color used sparingly so stress-prone students get calm, not hype.",
      "That decision set the visual language for every section that follows—type scale, spacing rhythm, and how color signals urgency only when it should.",
    ),
  },
  {
    type: "media-half",
    left: {
      src: `${GA}/section-landing-page.png`,
      alt: "GETACED landing page — primary story section",
    },
    right: {
      src: `${GA}/section-2-landing-page.png`,
      alt: "GETACED landing page — supporting section and value props",
    },
    caption: wCap(
      "Story & proof bands",
      "Two mid-page blocks run side by side on desktop: the first grounds what GETACED does day to day; the second carries proof points and language from how students actually work between classes.",
      "Typography and section rhythm follow one brand flow so the page feels authored, not templated—and the layout still stacks cleanly on narrow screens.",
    ),
  },
  {
    type: "media-full",
    src: `${GA}/login-register-landing-page.png`,
    alt: "GETACED login and registration — account entry with calm, trustworthy UI",
    caption: wCap(
      "Auth & trust",
      "Register and sign-in share one quiet layout: obvious errors, no dark patterns, and fields ordered the way people expect when they are already stressed about deadlines.",
      "We aligned labels and validation copy with what the backend enforces so the form does not lie—fewer dead ends once traffic hits support.",
    ),
  },
  {
    type: "media-half",
    left: {
      src: `${GA}/pricing-landing-page.png`,
      alt: "GETACED pricing section — plan comparison",
    },
    right: {
      src: `${GA}/pricing-2-landing-page.png`,
      alt: "GETACED pricing — continued tiers and detail",
    },
    caption: wCap(
      "Plans & commercial story",
      "Pricing spans two composed widths so we could show comparison and fine print without an endless vertical scroll on desktop.",
      "Each tier maps to real Creem products we configured later—what you read here is the same commercial story the app and checkout honor at runtime.",
    ),
  },
  {
    type: "media-full",
    src: `${GA}/reviews-landing-page.png`,
    alt: "GETACED social proof and reviews on the marketing site",
    caption: wCap(
      "Social proof",
      "Reviews sit in a dedicated band tuned for skimming quotes, names, and star signals without turning the page into a wall of testimonials.",
      "Branding stays minimal so peer proof reads authentic—especially for students (and parents) comparing tools in one tab while homework waits in another.",
    ),
  },
  {
    type: "media-full",
    src: `${GA}/faq-landing-page.png`,
    alt: "GETACED FAQ — objections and support paths before signup",
    caption: wCap(
      "FAQ & objections",
      "We grouped questions the way they show up in real chat: billing, privacy, what happens after cancel, and how fast someone gets a human if they are stuck.",
      "Short answers and clear next steps reduce pre-sale friction and keep post-signup expectations aligned with how the product actually behaves.",
    ),
  },
  {
    type: "media-full",
    src: `${GA}/final-cta-landing-page.png`,
    alt: "GETACED closing call-to-action on the landing page",
    caption: wCap(
      "Closing conversion",
      "The final CTA repeats the promise with less chrome: one decision, one button, and enough context to click with confidence instead of hesitation.",
      "Copy and hierarchy mirror the in-app upgrade moments so marketing language and product language stay one continuous story.",
    ),
  },
  {
    type: "media-full",
    src: `${GA}/footer-landing-page.png`,
    alt: "GETACED site footer — navigation, trust, and legal entry points",
    caption: wCap(
      "Footer & infrastructure",
      "The footer carries navigation, the mark, and the boring-but-critical links—privacy, terms, contact—so trust and compliance are always one click away.",
      "Behind the scenes, domain and DNS plus Cloudflare keep TLS and caching consistent with how we ship the authenticated app—not two different worlds.",
    ),
  },
  {
    type: "media-half",
    left: {
      src: `${GA}/privacy-landing-page.png`,
      alt: "GETACED privacy policy — transparent data practices",
    },
    right: {
      src: `${GA}/terms-landing-page.png`,
      alt: "GETACED terms of service",
    },
    caption: wCap(
      "Legal & expectations",
      "Privacy and terms are full pages, not footnote PDFs: readable type, clear sections, and language matched to what we collect and how Creem handles money.",
      "That tone supports school-adjacent audiences and sets expectations before anyone connects an account or enters a card.",
    ),
  },
  {
    type: "split",
    heading: "Product dashboard",
    body: "Inside the app we carried the same brand flow into dense student workflows: home, customization, onboarding, billing, and history. UI and UX stay quiet so deadlines and status read first—states, empty screens, and paywalls are designed, not improvised.",
    serviceRevealStep: 2,
  },
  {
    type: "media-full",
    src: `${GA}/home-dashboard-page.png`,
    alt: "GETACED dashboard home — assignments and priorities at a glance",
    caption: wCap(
      "Home & overview",
      "The signed-in home is the operational hub: upcoming work, progress, and obvious entry points into the rest of the product without a tutorial wall.",
      "Layout and type reuse the marketing scale so the handoff from landing page to app feels invisible—same voice, different job to be done.",
    ),
  },
  {
    type: "media-full",
    src: `${GA}/customization-dashboard-page.png`,
    alt: "GETACED customization — tailoring the experience to how each student works",
    caption: wCap(
      "Preferences & control",
      "Students tune notifications, subjects, and defaults without wading through engineer-facing toggles or mystery toggles.",
      "Common choices stay fast at the top; advanced options stay discoverable but out of the way so the screen does not punish curious users.",
    ),
  },
  {
    type: "media-full",
    src: `${GA}/onboarding-popup-dashboard-page.png`,
    alt: "GETACED onboarding modal — guided setup without blocking the product",
    caption: wCap(
      "First-run onboarding",
      "First-run guidance lives in a modal layer so people can finish setup, skip, and return later without getting stranded on a one-way tour.",
      "The backend records completion so prompts stay relevant instead of nagging on every visit once someone has already invested thirty seconds.",
    ),
  },
  {
    type: "media-full",
    src: `${GA}/payment-page-dashboard-page.png`,
    alt: "GETACED in-app payment surface aligned with Creem checkout",
    caption: wCap(
      "Paywall & checkout handoff",
      "The paywall spells out what unlocks in plain language, then routes into Creem-hosted checkout so sensitive card handling stays off our origin where possible.",
      "Frontend states cover loading, success, and failure so nobody stares at a spinner wondering whether their card was charged.",
    ),
  },
  {
    type: "media-full",
    src: `${GA}/history-dashboard-page.png`,
    alt: "GETACED history — past activity and receipts for peace of mind",
    caption: wCap(
      "Activity & receipts",
      "History lists sessions, edits, and payment events so students can self-serve when something looks wrong instead of opening a ticket first.",
      "Rows are tuned for scan on small screens; detail panels drill in without losing context—useful when a parent asks what a charge was for.",
    ),
  },
  {
    type: "split",
    heading: "Creem.io & monetization",
    body: "We configured Creem end to end: products and pricing, branded checkout banner and logo, success and cancel redirects, webhooks, and API keys scoped for production and test. That ties the Next.js frontend and backend to real entitlements—subscriptions renew, cancellations reconcile, and the app never trusts the client for paid access.",
    serviceRevealStep: 2,
  },
  {
    type: "media-full",
    src: `${GA}/creem-payment-setup.png`,
    alt: "GETACED Creem.io dashboard — product, branding, and payment configuration",
    caption: wCap(
      "Products & checkout brand",
      "We defined products, prices, and trial behavior in Creem to match what the marketing site promises—no accidental mismatch between copy and entitlements.",
      "Checkout branding—banner, logo, and colors—keeps the payment step feeling like GETACED, which is one of the quietest ways to reduce drop-off.",
    ),
  },
  {
    type: "media-full",
    src: `${GA}/creem-2-payment-setup.png`,
    alt: "GETACED Creem.io — redirects, domains, and webhook endpoints",
    caption: wCap(
      "Redirects & webhooks",
      "Success and cancel URLs return people to deterministic routes inside the app so deep links and analytics stay honest after a payment attempt.",
      "Webhooks hit our API over HTTPS only; we verify signatures, process events idempotently, and reconcile Creem’s subscription state with our database—never the other way around.",
    ),
  },
  {
    type: "media-full",
    src: `${GA}/creem-3-payment-setup.png`,
    alt: "GETACED Creem.io — API keys, environments, and integration hardening",
    caption: wCap(
      "Keys, environments, security",
      "Test and live keys stay separate in configuration so a staging experiment never mutates production money by accident.",
      "Cloudflare in front of the public app plus server-side entitlement checks, rotation-friendly secrets, and sensible rate limits close the loop on a student-grade security posture.",
    ),
  },
];

export const WORK_CASE_STUDIES: Record<string, WorkCaseStudyData> = {
  tathor: {
    megaLine1: "TATHOR",
    megaLine2: "From signals to decisions",
    servicesLine:
      "Logo design Branding Frontend Backend Stripe Landing Interactive",
    intro:
      "Teams drown in dashboards that never answer the next question. TATHOR is built to turn scattered operational data into clear, actionable intelligence—with a product story that reads as serious tooling, not another slide deck. We shaped how that promise lands the first time someone hits the site.",
    strategy:
      "The name and mark had to survive favicon scale, investor decks, and in-app chrome. We anchored the story on clarity and velocity: fewer metaphors, more proof. Typography and color stay disciplined so the interface—not the decoration—carries authority.",
    design:
      "The marketing surface behaves like software: progressive disclosure, strong hierarchy, motion only where it explains a workflow. Layouts are built mobile-first so the narrative does not collapse into a stripped “lite” version on small screens.",
    results:
      "The stack is Next.js and React on the front, real auth and data behind the scenes, and Stripe for the revenue path with test and live modes and webhooks wired for handoff. What ships is a credible B2B front door: fast, tactile, and ready for the product to grow underneath.",
    mediaAfter: PLACEHOLDER_MEDIA,
  },
  nuerlo: {
    megaLine1: "NUERLO",
    megaLine2: "AI courses, one marketplace",
    servicesLine: "Branding Frontend Backend Payments Search Discovery",
    intro:
      "NUERLO connects learners with AI-native courses in one marketplace. The job of the case page is the same as the product: reduce friction, make trust obvious, and get people from browse to enroll without detours. We treated the site as commerce—not a brochure.",
    strategy:
      "Marketplaces die when discovery feels random. We focused the story on curation, outcomes, and transparent pricing—signals that reduce hesitation. Categories, filters, and instructor credibility are first-class in the narrative, not footnotes.",
    design:
      "Cards, rails, and detail templates share one grid language so the UI scales as listings grow. Imagery and type stay calm so course content and titles stay the hero; hit-states and loading paths are designed, not improvised.",
    results:
      "Checkout and subscriptions follow the same patterns we use across EZEVIO work: provider keys you own, webhooks that actually run, receipts and failure states someone can support. The frontend stays fast enough that search and browse feel instant on mid-tier phones.",
    mediaAfter: PLACEHOLDER_MEDIA,
  },
  branory: {
    megaLine1: "BRANORY",
    megaLine2: "Restaurant presence that reads crisp",
    servicesLine: "Branding Frontend Menu UX Photography direction",
    intro:
      "Branory needed a digital presence that matches the plate: confident, warm, and specific. We built a case for how the brand shows up online—menus, reservations, and story—without turning the site into a generic template swap.",
    strategy:
      "Food brands win on specificity. We pushed copy, section order, and visual rhythm toward signature dishes, hours, and location truth—the details guests check before they commit. Everything else supports those decisions.",
    design:
      "Large imagery, restrained type, and generous spacing mirror how people skim on phones before dinner. Motion is minimal; readability and tap targets are not. The layout flexes for seasonal menus without breaking the grid.",
    results:
      "The implementation stays in the same technical lane as our other launches: performant pages, forms that fail gracefully, and analytics-friendly structure. When photography lands, slots are already defined—swap assets without rebuilding layout.",
    mediaAfter: PLACEHOLDER_MEDIA,
  },
  "class-ace": {
    megaLine1: "GETACED",
    megaLine2: "Assignments without the scramble",
    servicesLine:
      "Logo design Branding UI/UX Creem.io payments Frontend Backend Cloudflare Domain Brand flow Security",
    intro:
      "GETACED is a full end-to-end SaaS for assignment and test prep—from logo and brand system through the marketing site, authenticated product, and Creem-powered billing. Below we walk it in ship order: the landing experience first, then the in-app dashboard, then how we wired Creem (products, branding, redirects, webhooks, and APIs) with tight security and infrastructure you can operate in production.",
    strategy:
      "We started with mark and brand direction, then a disciplined brand flow across every touchpoint: hero, pricing, proof, FAQ, and legal pages that answer real student and parent questions. Domain and DNS were set up for a clean apex and www story, with Cloudflare in front for caching, TLS, and baseline hardening so the marketing surface stays fast under traffic spikes.",
    design:
      "UI and UX balance reassurance with velocity—large type where it matters, generous rhythm on long reads, and dashboard layouts that keep coursework legible on a phone between classes. Components share one spacing and type scale so onboarding, customization, and paywalls feel like one product, not bolted-on screens.",
    results:
      "The stack is a real SaaS spine: Next.js and React on the frontend, authenticated APIs and persistence on the backend, and Creem for subscriptions and one-offs with server-verified webhooks—never trusting the browser for entitlements. Keys are environment-scoped, redirects are explicit, and Cloudflare plus sensible headers close the loop on transport and edge policy so checkout and account data meet student-grade expectations.",
    mediaAfter: [null, null, null, null],
    caseBody: GETACED_CASE_BODY,
  },
};

export function getWorkCaseStudy(slug: string): WorkCaseStudyData | undefined {
  return WORK_CASE_STUDIES[slug];
}
