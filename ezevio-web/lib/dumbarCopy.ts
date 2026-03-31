/** Structural / editorial reference: studiodumbar.com — swap contact details for your own. */

export type ServiceSection = {
  heading: string;
  body: string;
  cta?: { href: string; label: string };
};

export const SERVICE_SECTIONS: ServiceSection[] = [
  {
    heading: "Our services",
    body: "EZEVIO builds products and brands end to end: interfaces people love, systems that scale, and identities that stick. Whether you need a new app, a sharper brand, or a clean way to take payments, we ship work that’s clear, fast, and ready for real users.",
  },
  {
    heading: "Frontend",
    body: "We craft responsive, performant front ends using modern stacks—so your product feels polished on every device. Clean components, solid accessibility, and attention to motion and detail mean your site or app is pleasant to use, not just nice to look at.",
  },
  {
    heading: "Backend",
    body: "We design and implement server-side logic, databases, and infrastructure choices that match your scale and budget. Secure patterns, clear data models, and maintainable code help your product stay reliable as traffic and features grow.",
  },
  {
    heading: "Payment setup",
    body: "We integrate checkout flows, subscriptions, and payouts with major providers so you can sell with confidence. From test mode to live keys, webhooks, and receipts, we connect the pieces and leave you with a flow customers can complete without friction.",
  },
  {
    heading: "Logo design",
    body: "Your logo is the shorthand for everything you stand for. We explore marks, typography, and lockups that work in app icons, swag, and social—then deliver usable files and guidelines so your team stays consistent.",
  },
  {
    heading: "Branding",
    body: "Beyond a logo, we shape how you show up: naming options, a focused color system, typography, and a consistent brand image across touchpoints. The goal is a coherent story—what you’re called, how you look, and how people recognize you at a glance.",
  },
  {
    heading: "API setup",
    body: "We design REST or other API surfaces, document them clearly, and wire up auth, versioning, and error handling where it matters. Good contracts between frontend and backend—or between you and partners—save time and prevent fragile one-off integrations.",
  },
  {
    heading: "UI/UX Design",
    body: "We map user flows, wireframes, and high-fidelity UI so decisions are tested before engineering burns weeks. Research-informed layouts, sensible hierarchy, and interaction design reduce confusion and help users finish what they came to do.",
    cta: { href: "/work", label: "See our work" },
  },
];

export const ABOUT_MEGA_TITLE_LINE1 = "Care";
export const ABOUT_MEGA_TITLE_LINE2 = "in the craft";

export const ABOUT_SECTIONS: { heading: string; body: string }[] = [
  {
    heading: "Led by Mahmoud Alhabib",
    body: "EZEVIO is intentionally small—projects get attention instead of being bounced between layers of people. Mahmoud stays close to the work: scope, design, build, and the boring checks that keep a launch from embarrassing you later.",
  },
  {
    heading: "Picky on purpose",
    body: "Alignment, spacing, copy, broken states, slow loads, edge cases—if something is off, we’d rather fix it than ship around it. The goal isn’t perfection for its own sake; it’s a product that behaves the way you’d tell a friend it works.",
  },
  {
    heading: "Who we work with",
    body: "There’s no single “EZEVIO client.” Startups, small teams, and folks with a concrete problem tend to be the best fit—people who want a partner who will challenge assumptions and carry a project through, not just hand off files.",
  },
  {
    heading: "Outside the desk",
    body: "Mahmoud also runs marathons, ultras, and other long events on his own time. It’s separate from client work—just a parallel habit of pacing, showing up, and finishing—that happens to match how stubborn we get when a timeline compresses and the details still matter.",
  },
];

/** Work index: case study tiles (grid + `/work/[slug]`). */
export const WORK_TILES: {
  href: string;
  title: string;
  poster?: string;
  videoSrc?: string;
}[] = [
  {
    href: "/work/nuerlo",
    title: "NUERLO – AI Course Marketplace",
    poster: "/nuerlo-cover.svg",
  },
  {
    href: "/work/tathor",
    title: "TATHOR – AI Business Intelligence",
    poster: "/tathor-cover.svg",
  },
  {
    href: "/work/class-ace",
    title: "CLASS ACE – Assignment & test prep",
    poster: "/get-aced-cover.svg",
  },
  {
    href: "/work/branory",
    title: "BRANORY – Food & cuisine restaurant",
    poster: "/branory-cover.svg",
  },
];

/** Resolve a work tile for `/work/[slug]` metadata and case pages. */
export function getWorkTileBySlug(slug: string) {
  return WORK_TILES.find((t) => t.href === `/work/${slug}`);
}
