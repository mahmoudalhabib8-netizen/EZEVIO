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
        real database and the integrations you actually wire in. We’ve shipped sharp
        marketing sites with waitlists. We’ve also run the full loop: accounts, billing,
        authenticated app UI. Timeline and price track scope; we write down where the line
        is before the repo gets busy.
      </>
    ),
  },
  {
    heading: "Frontend",
    body: (
      <>
        Interfaces in <Out href="https://nextjs.org">Next.js</Out> and{" "}
        <Out href="https://react.dev">React</Out>. Marketing pages through logged-in
        product. Layouts have to read on a phone without inventing a second layout
        system. We burn down the console warnings we introduced before the repo changes
        hands. Brand color shows up in type and chrome where it earns space.
      </>
    ),
  },
  {
    heading: "Backend",
    body: (
      <>
        Data and auth usually start on <Out href="https://supabase.com">Supabase</Out> or{" "}
        <Out href="https://firebase.google.com">Firebase</Out>. Fast to stand up; you keep
        the keys. When load or compliance outgrows that, we move the heavy pieces toward{" "}
        <Out href="https://www.mongodb.com">MongoDB</Out>,{" "}
        <Out href="https://www.cloudflare.com">Cloudflare</Out>, whatever matches the next
        constraint. We scope migrations so traffic or compliance don’t corner you into
        throwing away what already shipped.
      </>
    ),
  },
  {
    heading: "Payment setup",
    body: (
      <>
        Checkout, subscriptions, payouts. <Out href="https://stripe.com">Stripe</Out> and{" "}
        <Out href="https://www.creem.io">Creem</Out> are the usual anchors; other providers
        when the business model needs them. Test keys, live keys, webhooks, receipts. The
        path from “buy” to settled money should run without a human tab-completing CSVs
        every Friday.
      </>
    ),
  },
  {
    heading: "Logo design",
    body: (
      <>
        When logo is in scope you get a mark and word treatment, vectors, basic lockups,
        and a short rationale. Enough that the next person dropping it into a site or app
        store listing isn’t reverse-engineering your taste from a JPEG.
      </>
    ),
  },
  {
    heading: "Branding",
    body: (
      <>
        We dial in how heavy the product reads: density, motion, hierarchy. Dashboards
        expose weak brand decisions in a week. If you’re renaming or blowing up the
        visual system, we walk domains, handles, and what shows up in search before
        anything gets printed or deployed.
      </>
    ),
  },
  {
    heading: "API setup",
    body: (
      <>
        REST, webhooks, auth you can rotate, versioning, error payloads that tell someone
        what broke. Partners and background jobs shouldn’t depend on a curl one-liner
        nobody documented.
        <br />
        <br />
        For AI we wire what fits: <Out href="https://platform.openai.com">OpenAI</Out>{" "}
        (GPT-class), <Out href="https://www.anthropic.com">Anthropic</Out> (Claude),{" "}
        <Out href="https://x.ai">xAI</Out> (Grok), others when latency, bill size,
        reasoning depth, or guardrails point there. Summaries, classification, routing,
        assistants, batch jobs, inference wherever the product actually needs it.
      </>
    ),
  },
  {
    heading: "UI/UX Design",
    body: (
      <>
        Flows and wireframes land before engineering burns the hours. Dashboard work is
        empty states, permission holes, the weird Tuesday edge case. Pixel-level UI shows
        up when sign-off needs real chrome; until then, wireframes carry the risk. Most
        of the hierarchy lives in forms and tables.
      </>
    ),
    cta: { href: "/work", label: "See our work" },
  },
];

export const ABOUT_MEGA_TITLE_LINE1 = "Care";
export const ABOUT_MEGA_TITLE_LINE2 = "in the craft";

export const ABOUT_SECTIONS: { heading: string; body: ReactNode }[] = [
  {
    heading: "Small but ambitious",
    body: "EZEVIO stays lean. Few handoffs: when we’re responsible, scope, design, and build stay in one thread. Auth edge cases, billing quirks, the rough corners that torch a launch week sit in the same queue as the hero section.",
  },
  {
    heading: "What we actually fix",
    body: "Spacing, copy, dead states, slow paths, the third edge case. Obvious broken UI doesn’t ship because a date moved. Console noise gets cleared before handoff. If it’s wrong, we chase it.",
  },
  {
    heading: "Who we work with",
    body: "No archetype. Startups and small teams with something to prove are usually the easiest fit; they push back and they need something shippable. Briefs where nobody wrote down what finished means burn calendar for no output.",
  },
  {
    heading: "Outside the desk",
    body: (
      <>
        Founded & operated by{" "}
        <a
          href="https://www.instagram.com/moe.alhabib/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mahmoud Alhabib
        </a>
        . Training is marathons, ultras, other long-course stuff when the calendar allows.
        Months where skipping a morning isn’t really an option. Builds get the same
        stretched timeline: nobody else is waiting to own the week after “we shipped”
        when real users argue with the spec.
      </>
    ),
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
