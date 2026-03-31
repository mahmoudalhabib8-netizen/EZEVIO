import type { Metadata } from "next";
import { InnerPageShell } from "@/components/InnerPageShell";
import { WorkGrid } from "@/components/WorkGrid";
import { WORK_TILES } from "@/lib/dumbarCopy";

export const metadata: Metadata = {
  title: "Work",
};

export default function WorkPage() {
  return (
    <InnerPageShell>
      <div className="t-work">
        <div className="o-container t-work__padding">
          <div className="o-grid">
            <WorkGrid tiles={WORK_TILES} />
          </div>
        </div>
      </div>
    </InnerPageShell>
  );
}
