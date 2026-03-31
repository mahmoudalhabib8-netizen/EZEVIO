"use client";

import Link from "next/link";

type Tile = {
  href: string;
  title: string;
};

/** Work index: white placeholder cards (no media) + project titles. */
export function WorkGrid({ tiles }: { tiles: readonly Tile[] }) {
  return (
    <>
      {tiles.map((item) => (
        <div
          key={item.href}
          className="project-link o-col-12 o-col-6--md o-col-4--xlg"
          data-aos-offset="50"
          data-aos="center-hardscale-work_page"
        >
          <Link href={item.href}>
            <div className="work-project-card">
              <figure className="figure-video">
                <div className="work-card-filler" aria-hidden />
                <figcaption>
                  <span className="figcaption-caption">{item.title}</span>
                </figcaption>
              </figure>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}
