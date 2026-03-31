import { WORK_TILES } from "@/lib/dumbarCopy";

export type HomeProject = {
  slug: string;
  title: string;
  href: string;
  videoSrc: string;
};

/** Full-bleed home reel — aligned with WORK_TILES; swap `videoSrc` for real clips. */
export const homeProjects: HomeProject[] = WORK_TILES.map((t, i) => {
  const slug = t.href.replace(/^\/work\//, "");
  const samples = [
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  ];
  return {
    slug,
    title: t.title,
    href: t.href,
    videoSrc: samples[i % samples.length]!,
  };
});
