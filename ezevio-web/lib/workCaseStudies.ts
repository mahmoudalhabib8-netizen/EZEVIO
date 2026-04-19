/**
 * Inner work pages: mega title, Services, intro, media, Strategy / Design / Results.
 */
export type WorkCaseMediaSlot = "full" | "half" | null;

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
  /** Optional hero image above the mega title; if omitted, the page starts at the title (no placeholder strip). */
  heroImage?: string;
};

const PLACEHOLDER_MEDIA: [
  WorkCaseMediaSlot,
  WorkCaseMediaSlot,
  WorkCaseMediaSlot,
  WorkCaseMediaSlot,
] = ["full", "half", "full", "half"];

export const WORK_CASE_STUDIES: Record<string, WorkCaseStudyData> = {
  tathor: {
    megaLine1: "TATHOR",
    megaLine2: "From signals to decisions",
    servicesLine:
      "Logo design Branding Frontend Backend Stripe Landing Interactive",
    intro:
      "Teams drown in dashboards that never answer the next question. TATHOR is built to turn operational noise into clear, actionable intelligence—with a product story that reads as serious tooling, not another slide deck. We shaped how that promise lands the first time someone hits the site.",
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
    servicesLine: "Product UI Frontend Backend Auth Content structure",
    intro:
      "GETACED helps students stay on top of assignments and test prep. The product has to feel calm under deadline pressure: clear states, obvious next steps, and no patronizing visuals. We aligned the story with how students actually work—between classes, on the phone, at night.",
    strategy:
      "Trust comes from predictability. We emphasized deadlines, progress, and what “done” means in each flow. The narrative avoids hype; it reads like a tool someone can rely on the week before exams.",
    design:
      "Dense information—dates, classes, tasks—gets hierarchy and spacing so it scans fast. Color carries meaning sparingly; most of the UI stays neutral so stress cues stand out when they matter.",
    results:
      "Behind the UI sits the same serious baseline we ship elsewhere: authenticated areas, data that persists, and email or notification hooks where the product needs them. The surface is ready for real coursework data without a layout rewrite.",
    mediaAfter: PLACEHOLDER_MEDIA,
  },
};

export function getWorkCaseStudy(slug: string): WorkCaseStudyData | undefined {
  return WORK_CASE_STUDIES[slug];
}
