import { InnerPageHero } from "@/components/inner/InnerPageHero";
import { InnerPageShell } from "@/components/inner/InnerPageShell";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SectionIntro } from "@/components/home/SectionIntro";
import { ButtonLink } from "@/components/ui/Button";
import { HomeIcon } from "@/components/ui/HomeIcon";
import { pages, type PageKey } from "@/config/pages";
import { assets, type ImageAsset } from "@/config/assets";
import { SectionPlaceholder } from "./SectionPlaceholder";

const pageEyebrows: Partial<Record<PageKey, string>> = {
  services: "SUPPORT FOR EVERY NEXT STEP",
  platforms: "DISCOVER YOUR NEXT STAGE",
  "how-it-works": "A CLEARER WAY FORWARD",
  "why-streamintia": "PEOPLE. PURPOSE. PROGRESS.",
  "success-stories": "REAL PEOPLE. REAL JOURNEYS.",
  "privacy-policy": "YOUR INFORMATION MATTERS",
  "terms-and-conditions": "CLEAR TERMS. SHARED TRUST.",
};

const visualFor = (page: PageKey): ImageAsset => {
  if (page === "platforms") return assets.visuals.creatorTools;
  if (page === "services" || page === "why-streamintia")
    return assets.visuals.agentGuidance;
  return assets.visuals.aboutTeam;
};

export function PageSkeleton({
  page,
  children,
}: {
  page: PageKey;
  children?: React.ReactNode;
}) {
  const content = pages[page];
  const legal = page === "privacy-policy" || page === "terms-and-conditions";

  return (
    <InnerPageShell tone="neutral">
      <InnerPageHero
        eyebrow={pageEyebrows[page] ?? "STREAMINTIA"}
        breadcrumb={content.title}
        compact
        title={
          <>
            {content.title}
            <br />
            <span className="home-gradient-text">Made clear.</span>
          </>
        }
        description={content.description}
        image={visualFor(page)}
      >
        <ButtonLink href="#page-content" variant="primary">
          Explore this page
          <HomeIcon name="arrow" />
        </ButtonLink>
        {!legal ? (
          <ButtonLink href="/contact" variant="secondary">
            Talk to us
            <HomeIcon name="arrow" />
          </ButtonLink>
        ) : null}
      </InnerPageHero>

      {legal ? (
        <div
          className="home-container mt-8 flex items-center gap-4 rounded-xl border border-[rgb(74_94_174/0.13)] bg-[#f7f9ff] p-4 px-5 max-[767px]:flex-col max-[767px]:items-start [&>span]:shrink-0 [&>span]:text-[0.5625rem] [&>span]:font-bold [&>span]:tracking-[0.14em] [&>span]:text-(--inner-accent) [&>p]:text-[0.8125rem] [&>p]:text-[#5c6683]"
          role="note"
        >
          <span>DOCUMENT STATUS</span>
          <p>
            This page is a structured preview. Approved legal text will be added
            before launch.
          </p>
        </div>
      ) : null}

      {children ? (
        <section id="page-content" className="home-section bg-white">
          <div
            className="home-container grid grid-cols-2 gap-4 max-[767px]:grid-cols-1 [&>ul]:m-0 [&>section]:m-0 [&>blockquote]:m-0 [&>ul>li]:rounded-2xl [&>ul>li]:border [&>ul>li]:border-[rgb(43_57_122/0.1)] [&>ul>li]:bg-[linear-gradient(145deg,#ffffff,#f8f9ff)] [&>ul>li]:p-8 [&>ul>li]:shadow-[0_14px_42px_rgb(39_49_105/0.07)] [&>section]:rounded-2xl [&>section]:border [&>section]:border-[rgb(43_57_122/0.1)] [&>section]:bg-[linear-gradient(145deg,#ffffff,#f8f9ff)] [&>section]:p-8 [&>section]:shadow-[0_14px_42px_rgb(39_49_105/0.07)] [&>blockquote]:rounded-2xl [&>blockquote]:border [&>blockquote]:border-[rgb(43_57_122/0.1)] [&>blockquote]:bg-[linear-gradient(145deg,#ffffff,#f8f9ff)] [&>blockquote]:p-8 [&>blockquote]:shadow-[0_14px_42px_rgb(39_49_105/0.07)] [&_.ecosystem-grid]:grid-cols-2 [&_.ecosystem-grid>li]:border-0 [&_.ecosystem-grid>li]:bg-transparent [&_.ecosystem-grid>li]:p-0 [&_.ecosystem-grid>li]:shadow-none [&_.ecosystem-card]:border-[rgb(43_57_122/0.1)] [&_.ecosystem-card]:bg-[linear-gradient(145deg,#ffffff,#f7f8ff)] [&_.ecosystem-card]:text-[#0a1038] [&_.ecosystem-card]:shadow-[0_14px_42px_rgb(39_49_105/0.07)] [&_.ecosystem-card>p]:text-(--home-muted) [&_.platform-logo-pending]:text-(--home-muted) [&_.platform-status]:text-(--home-muted) [&>ul>li_h2]:mb-3 [&>section>h2]:mb-3 [&>ul>li_h2]:text-[clamp(1.25rem,2vw,1.65rem)] [&>section>h2]:text-[clamp(1.25rem,2vw,1.65rem)] [&>ul>li_p]:text-[#606a87] [&>section_p]:text-[#606a87] [&>blockquote_p]:text-[#606a87] [&>ul>li_p]:leading-[1.8] [&>section_p]:leading-[1.8] [&>blockquote_p]:leading-[1.8] max-[767px]:[&_.ecosystem-grid]:grid-cols-1"
            data-reveal
          >
            {children}
          </div>
        </section>
      ) : null}

      {content.sections.length ? (
        <section
          id={children ? "page-sections" : "page-content"}
          className="home-section overflow-hidden [background:radial-gradient(circle_at_8%_15%,rgb(18_217_244/0.08),transparent_24%),radial-gradient(circle_at_92%_85%,rgb(139_77_255/0.08),transparent_25%),#f6f8ff]"
        >
          <div className="home-container">
            <SectionIntro
              eyebrow="EXPLORE THE DETAILS"
              title={
                <>
                  Everything in
                  <br />
                  one clear place.
                </>
              }
              description="Browse the key topics and find the information most relevant to your next step."
            />
            <div
              className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1"
              data-stagger
            >
              {content.sections.map((title, index) => (
                <SectionPlaceholder
                  key={title}
                  title={title}
                  index={index + 1}
                  id={`section-${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {!legal ? <FinalCTA /> : null}
    </InnerPageShell>
  );
}
