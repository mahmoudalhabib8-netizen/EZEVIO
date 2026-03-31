import type { Metadata } from "next";
import Link from "next/link";
import { docTitle } from "@/lib/siteMeta";

export const metadata: Metadata = {
  title: docTitle("Not found"),
};

export default function NotFound() {
  return (
    <div className="theme-dark min-h-dvh flex flex-col items-center justify-center gap-4 p-6 text-center">
      <p className="text-sm opacity-80">404</p>
      <h1 className="text-xl font-medium">This page could not be found.</h1>
      <Link href="/" className="underline underline-offset-4">
        Back to EZEVIO
      </Link>
    </div>
  );
}
