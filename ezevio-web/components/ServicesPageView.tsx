import { InnerPageShell } from "@/components/InnerPageShell";
// import { ServicesPageRocket } from "@/components/ServicesPageRocket";
import { SplitSection } from "@/components/SplitSection";
import { SERVICE_SECTIONS } from "@/lib/dumbarCopy";

export function ServicesPageView() {
  return (
    <InnerPageShell>
      {/* <ServicesPageRocket /> */}
      <div className="t-default t-services">
        <div className="o-container">
          <div className="o-grid content">
            <div
              className="mega-title-wrap o-col-12--md o-col-12"
              id="services-mega-title"
            >
              <h2 className="mega-title">
                <span data-aos="topleft-hardscale-steps">Design. </span>
                <span data-aos="topleft-hardscale-steps">Build. </span>
                <br />
                <span data-aos="topleft-hardscale-steps">Launch.</span>
              </h2>
            </div>
            {SERVICE_SECTIONS.map((section, i) => (
              <SplitSection
                key={section.heading}
                section={section}
                serviceRevealStep={i === 0 ? 1 : 2}
              />
            ))}
          </div>
        </div>
      </div>
    </InnerPageShell>
  );
}
