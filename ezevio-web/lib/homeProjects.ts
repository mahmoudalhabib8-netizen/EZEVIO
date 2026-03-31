export type HomeProject = {
  slug: string;
  title: string;
  href: string;
  videoSrc: string;
};

/** Replace `videoSrc` values with your own media. */
export const homeProjects: HomeProject[] = [
  {
    slug: "project-one",
    title: "Project One",
    href: "/work/project-one",
    videoSrc:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    slug: "project-two",
    title: "Project Two",
    href: "/work/project-two",
    videoSrc:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    slug: "project-three",
    title: "Project Three",
    href: "/work/project-three",
    videoSrc:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    slug: "project-four",
    title: "Project Four",
    href: "/work/project-four",
    videoSrc:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    slug: "project-five",
    title: "Project Five",
    href: "/work/project-five",
    videoSrc:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
  {
    slug: "project-six",
    title: "Project Six",
    href: "/work/project-six",
    videoSrc:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
];
