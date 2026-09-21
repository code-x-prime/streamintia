import { InnerPageShell } from "@/components/inner/InnerPageShell";
import { InnerPageHero } from "@/components/inner/InnerPageHero";
import { SectionIntro } from "@/components/home/SectionIntro";
import { FeatureGrid } from "@/components/inner/FeatureGrid";
import { ButtonLink } from "@/components/ui/Button";
import { HomeIcon } from "@/components/ui/HomeIcon";
import { createMetadata } from "@/lib/metadata";
import { ApplicationForm } from "@/components/forms/ApplicationForm";
import { applicationTrust } from "@/config/inner-pages";
import { assets } from "@/config/assets";
export const metadata = createMetadata(
  "Apply Now",
  "Choose your Streamintia path as a streamer or agent. Explore the frontend application preview and preferred platform options.",
  "/apply",
);
export default async function ApplyPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const query = await searchParams;
  const role = typeof query.role === "string" ? query.role : "";
  const platform = typeof query.platform === "string" ? query.platform : "";
  return (
    <InnerPageShell tone="neutral">
      <InnerPageHero
        eyebrow="YOUR NEXT CHAPTER"
        breadcrumb="Apply Now"
        compact
        title={
          <>
            Start your
            <br />
            <span className="home-gradient-text">Streamintia journey.</span>
          </>
        }
        description="Choose how you want to be part of the network. A little about you is all it takes to explore the next step."
        image={assets.visuals.applyApplication}
      />
      <section className="pt-16">
        <div className="home-container grid grid-cols-[0.65fr_1.35fr] items-start gap-16 max-[1100px]:grid-cols-[0.6fr_1.4fr] max-[1100px]:gap-10 max-[767px]:grid-cols-1 max-[767px]:gap-10">
          <aside className="sticky top-28 py-4 max-[767px]:static max-[767px]:p-0">
            <p className="home-eyebrow">MAKE IT YOUR OWN</p>
            <h2 className="text-[2rem]">
              A clear path.
              <br />A simple start.
            </h2>
            <ol className="my-8 flex flex-col max-[767px]:my-4 max-[767px]:flex-row max-[767px]:flex-wrap max-[767px]:gap-x-4 max-[767px]:gap-y-2">
              <li className="flex items-center gap-3 py-[0.65rem] text-[0.875rem] text-(--text-secondary) max-[767px]:gap-[0.4rem] max-[767px]:text-[0.6875rem]">
                <span className="text-[0.5625rem] text-primary">01</span>
                Choose your role
              </li>
              <li className="flex items-center gap-3 py-[0.65rem] text-[0.875rem] text-(--text-secondary) max-[767px]:gap-[0.4rem] max-[767px]:text-[0.6875rem]">
                <span className="text-[0.5625rem] text-primary">02</span>
                Introduce yourself
              </li>
              <li className="flex items-center gap-3 py-[0.65rem] text-[0.875rem] text-(--text-secondary) max-[767px]:gap-[0.4rem] max-[767px]:text-[0.6875rem]">
                <span className="text-[0.5625rem] text-primary">03</span>
                Explore your direction
              </li>
            </ol>
            <p className="max-w-[22rem] text-[0.8125rem] leading-[1.85] text-(--home-muted) max-[767px]:max-w-[32rem]">
              This is a preview of the application experience. Information stays
              in this page’s temporary state and is not submitted.
            </p>
            <ButtonLink
              href="/contact"
              variant="text"
              className="mt-4 max-[767px]:mt-2"
            >
              Need a little guidance?
              <HomeIcon name="arrow" />
            </ButtonLink>
          </aside>
          <ApplicationForm
            key={`${role}:${platform}`}
            role={role}
            platform={platform}
          />
        </div>
      </section>
      <section className="home-section">
        <div className="home-container">
          <SectionIntro
            eyebrow="START WITH CONFIDENCE"
            title={
              <>
                Why apply through
                <br />
                Streamintia?
              </>
            }
          />
          <FeatureGrid features={applicationTrust} compact />
        </div>
      </section>
      <section className="border-t border-(--home-border) bg-[#0e1033] py-12">
        <div className="home-container flex items-center justify-between gap-8 max-[767px]:flex-col max-[767px]:items-start max-[767px]:gap-6">
          <div>
            <p className="home-eyebrow max-[767px]:text-[0.5rem]">
              THERE’S NO NEED TO HAVE EVERY ANSWER
            </p>
            <h2 className="text-[2rem]">Not sure where to start?</h2>
          </div>
          <ButtonLink href="/contact" variant="secondary">
            Contact Us
            <HomeIcon name="arrow" />
          </ButtonLink>
        </div>
      </section>
    </InnerPageShell>
  );
}
