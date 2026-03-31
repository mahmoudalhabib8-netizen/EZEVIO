import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InnerPageShell } from "@/components/InnerPageShell";
import { getWorkTileBySlug, WORK_TILES } from "@/lib/dumbarCopy";
import { docTitle } from "@/lib/siteMeta";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return WORK_TILES.map((t) => ({
    slug: t.href.replace(/^\/work\//, ""),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tile = getWorkTileBySlug(slug);
  const title = tile?.title ?? formatSlugTitle(slug);
  return { title: docTitle(title) };
}

function formatSlugTitle(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default async function WorkCasePage({ params }: Props) {
  const { slug } = await params;
  const tile = getWorkTileBySlug(slug);
  if (!tile) notFound();

  return (
    <InnerPageShell>
      <div className="t-default t-about">
        <div className="o-container">
          <div className="o-grid content">
            <div className="o-col-12 dumbar-col-stack">
              <h3>{tile.title}</h3>
              <p>
                Case study placeholder — swap for real content, gallery, or
                embeds.
              </p>
              <p>
                <Link href="/work">Back to work</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </InnerPageShell>
  );
}
