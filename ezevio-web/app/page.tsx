import type { Metadata } from "next";
import { ServicesPageView } from "@/components/ServicesPageView";
import { docTitle } from "@/lib/siteMeta";

export const metadata: Metadata = {
  title: docTitle("Services"),
};

export default function Home() {
  return <ServicesPageView />;
}
