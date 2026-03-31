import type { Metadata } from "next";
import { AboutPageView } from "@/components/AboutPageView";
import { docTitle } from "@/lib/siteMeta";

export const metadata: Metadata = {
  title: docTitle("About"),
};

export default function AboutPage() {
  return <AboutPageView />;
}
