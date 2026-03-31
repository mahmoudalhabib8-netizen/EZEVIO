"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const DEFAULT_POSTER = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 10"><rect width="8" height="10" fill="#000000"/></svg>',
)}`;

type Tile = {
  href: string;
  title: string;
  poster?: string;
  videoSrc?: string;
};

function LazyWorkVideo({
  poster,
  videoSrc,
}: {
  poster: string;
  videoSrc?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    const root = video?.closest("[data-video-loader]");
    if (!video || !root || !videoSrc) return;

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          video.src = videoSrc;
          video.load();
          void video.play().catch(() => {});
          io.disconnect();
        }
      },
      { rootMargin: "80px", threshold: 0.01 },
    );
    io.observe(root);
    return () => io.disconnect();
  }, [videoSrc]);

  return (
    <video
      ref={ref}
      className="videogif"
      playsInline
      muted
      loop
      preload="none"
      poster={poster}
    />
  );
}

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
            <figure className="figure-video" data-video-loader="">
              <LazyWorkVideo
                poster={item.poster ?? DEFAULT_POSTER}
                videoSrc={item.videoSrc}
              />
              <figcaption>
                <span className="figcaption-caption">{item.title}</span>
              </figcaption>
            </figure>
          </Link>
        </div>
      ))}
    </>
  );
}
