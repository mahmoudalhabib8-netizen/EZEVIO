import { InnerPageShell } from "@/components/InnerPageShell";
import { SplitSection } from "@/components/SplitSection";
import {
  ABOUT_MEGA_TITLE_LINE1,
  ABOUT_MEGA_TITLE_LINE2,
  ABOUT_SECTIONS,
} from "@/lib/dumbarCopy";

export function AboutPageView() {
  return (
    <InnerPageShell>
      <div className="t-default t-about">
        <div className="o-container">
          <div className="o-grid content">
            <div className="mega-title-wrap o-col-12--md o-col-12">
              <h2 className="mega-title" data-aos="topleft-hardscale">
                {ABOUT_MEGA_TITLE_LINE1}
                <br /> {ABOUT_MEGA_TITLE_LINE2}
              </h2>
            </div>
            {ABOUT_SECTIONS.map((section) => (
              <SplitSection key={section.heading} section={section} />
            ))}
          </div>
        </div>
      </div>
    </InnerPageShell>
  );
}
