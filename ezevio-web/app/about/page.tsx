import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { docTitle } from "@/lib/siteMeta";

export const metadata: Metadata = {
  title: docTitle("About"),
};

export default function AboutPage() {
  redirect("/");
}
