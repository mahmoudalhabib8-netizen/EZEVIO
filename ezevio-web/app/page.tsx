import type { Metadata } from "next";
import { AboutPageView } from "@/components/AboutPageView";

export const metadata: Metadata = {
  title: "About",
};

export default function Home() {
  return <AboutPageView />;
}
