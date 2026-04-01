import type { ReactNode } from "react";

/** Structural / editorial reference: studiodumbar.com. Swap contact details for your own. */

export type ServiceSection = {
  heading: string;
  body: ReactNode;
  cta?: { href: string; label: string };
};

function Out({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export const SERVICE_SECTIONS: ServiceSection[] = [
  {
    heading: "Our services",
    body: (
      <>
        EZEVIO builds SaaS end to end: landing, signup and product flows, dashboards on a
        real database and the integrations you depend on. Some projects start at a sharp
        site and waitlist. Others run through billing, accounts, and full app UI. Scope
        drives timeline and cost, and we align early so “done” isn’t ambiguous.
      </>
    ),
  },
  {
    heading: "Frontend",
    body: (
      <>
        We ship interfaces with <Out href="https://nextjs.org">Next.js</Out> and{" "}
        <Out href="https://react.dev">React</Out>, from marketing sites to the full
        authenticated product. Mobile matters by default: solid layouts, coherent
        interactions, and a clean runtime (no console errors hand-waved away). Brand
        color lands in type and accents, present but not loud.
      </>
    ),
  },
  {
    heading: "Backend",
    body: (
      <>
        Data and auth usually live on <Out href="https://supabase.com">Supabase</Out> or{" "}
        <Out href="https://firebase.google.com">Firebase</Out>. Quick to ship, easy for you
        to own. When you outgrow that, we shift toward{" "}
        <Out href="https://www.mongodb.com">MongoDB</Out>,{" "}
        <Out href="https://www.cloudflare.com">Cloudflare</Out>, and similar so scale and
        compliance keep up without redoing the experience you signed off on.
      </>
    ),
  },
  {
    heading: "Payment setup",
    body: (
      <>
        Checkout, subscriptions, and payouts through providers people already trust,
        mainly <Out href="https://stripe.com">Stripe</Out> or{" "}
        <Out href="https://www.creem.io">Creem</Out>, plus others when the model needs it.
        Test and live modes, webhooks, receipts, and the full customer path, wired so you
        aren’t propping sales up with scripts and manual fixes.
      </>
    ),
  },
  {
    heading: "Logo design",
    body: (
      <>
        When logo is in scope, we design a mark and word treatment that fits your
        story, not stock dressed up as custom. Deliverables you can use, plus a short
        rationale so the brand stays consistent on site, app, and social.
      </>
    ),
  },
  {
    heading: "Branding",
    body: (
      <>
        We tune how the product should feel (density, motion, hierarchy), especially in
        dashboards. Full rebrand? We can stress-test names and domains so positioning
        and visuals tell one story, not two.
      </>
    ),
  },
  {
    heading: "API setup",
    body: (
      <>
        REST APIs and webhooks with sensible auth, versioning, and errors so partners
        and background jobs don’t rely on fragile one-offs. For AI, we wire the
        providers that fit: <Out href="https://platform.openai.com">OpenAI</Out>{" "}
        (GPT-class), <Out href="https://www.anthropic.com">Anthropic</Out> (Claude),{" "}
        <Out href="https://x.ai">xAI</Out> (Grok), and others, chosen for latency, cost,
        reasoning, and safety. Your product can stay AI-native (summaries, analysis,
        routing, assistants, automation) instead of a thin chat wrapper.
      </>
    ),
  },
  {
    heading: "UI/UX Design",
    body: (
      <>
        Flows, wireframes, and high-fidelity UI before engineering runs away with the
        budget. Dashboard patterns, empty states, and edge cases get handled on purpose,
        not after they land in production. Clear hierarchy and interactions so people finish what they
        came to do. Built to your brief, not wedged into a template.
      </>
    ),
    cta: { href: "/work", label: "See our work" },
  },
];

export const ABOUT_MEGA_TITLE_LINE1 = "Care";
export const ABOUT_MEGA_TITLE_LINE2 = "in the craft";

export const ABOUT_SECTIONS: { heading: string; body: string }[] = [
  {
    heading: "Small but ambitious",
    body: "EZEVIO stays small on purpose. Work isn’t bounced through layers. We own scope, design, build, and the quiet checks (auth, billing, rough edges) so a launch doesn’t fall apart the week it goes live.",
  },
  {
    heading: "Picky on purpose",
    body: "Spacing, copy, broken states, slow paths, edge cases. If it’s off, we fix it instead of shipping around it. Same bar as the services work: product that behaves the way you’d describe it to a friend.",
  },
  {
    heading: "Who we work with",
    body: "No single client type. Startups and small teams with a real problem fit best, especially people who want pushback, follow-through, and something finished, not a file drop. We’re a poor fit when the brief is all vibe and nobody’s named what “done” looks like.",
  },
  {
    heading: "Outside the desk",
    body: "Founded & operated by Mahmoud Alhabib. On his own time he trains for marathons, ultras, and other high-endurance events. That means months of early mornings and long days without much room to wing it. He treats client work the same way. Big deliveries need steady blocks of attention, and someone has to stay on the problems after the first pass is “done.”",
  },
];

/** Work index: titles + routes for `/work` and `/work/[slug]`. */
export const WORK_TILES: {
  href: string;
  title: string;
  /** Art for `/work` index tile (same frame as former gray placeholder). */
  cardImage: string;
}[] = [
  {
    href: "/work/nuerlo",
    title: "NUERLO: AI Course Marketplace",
    cardImage: "/blurry-gradient-nuerlo%20(1).svg",
  },
  {
    href: "/work/tathor",
    title: "TATHOR: AI Business Intelligence",
    cardImage: "/poster-card-tathor.svg",
  },
  {
    href: "/work/class-ace",
    title: "GETACED: Assignment & test prep",
    cardImage: "/project-card-getaced.svg",
  },
  {
    href: "/work/branory",
    title: "BRANORY: Food & cuisine restaurant",
    cardImage: "/poster-card-branory.svg.svg",
  },
];

/** Resolve a work tile for `/work/[slug]` metadata and case pages. */
export function getWorkTileBySlug(slug: string) {
  return WORK_TILES.find((t) => t.href === `/work/${slug}`);
}
