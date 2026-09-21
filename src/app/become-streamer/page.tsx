import { InnerPageShell } from "@/components/inner/InnerPageShell";
import { InnerPageHero } from "@/components/inner/InnerPageHero";
import { SectionIntro } from "@/components/home/SectionIntro";
import { FinalCTA } from "@/components/home/FinalCTA";
import { FeatureGrid } from "@/components/inner/FeatureGrid";
import { ButtonLink } from "@/components/ui/Button";
import { HomeIcon } from "@/components/ui/HomeIcon";
import { createMetadata } from "@/lib/metadata";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { RequirementsSection } from "@/components/inner/RequirementsSection";
import { FAQPreview } from "@/components/inner/FAQPreview";
import { EditorialRows } from "@/components/inner/EditorialRows";
import {
  streamerFeatures,
  streamerSupport,
  streamerSteps,
  streamerRequirements,
} from "@/config/inner-pages";
import { streamerFAQs } from "@/config/opportunity-faq";
import { PlatformPreview } from "@/components/inner/PlatformPreview";
import { assets } from "@/config/assets";
export const metadata = createMetadata(
  "Become a Live Streamer",
  "Explore your creator potential with Streamintia. Discover streaming opportunities, onboarding guidance and support for your next step.",
  "/become-streamer",
);
export default function StreamerPage() {
  return (
    <InnerPageShell>
      <InnerPageHero
        eyebrow="BECOME A STREAMER"
        breadcrumb="Become a Streamer"
        title={
          <>
            Your voice.
            <br />
            Your audience.
            <br />
            <span className="home-gradient-text">Your opportunity.</span>
          </>
        }
        description="Bring your personality and the things you love. Explore live streaming with guidance to help you find your feet and your own creative rhythm."
        image={assets.visuals.streamerHeroWide}
      >
        <ButtonLink href="/apply?role=streamer" variant="primary">
          Apply as a Streamer
          <HomeIcon name="arrow" />
        </ButtonLink>
        <ButtonLink href="#streamer-process" variant="secondary">
          How It Works
          <HomeIcon name="arrow" />
        </ButtonLink>
      </InnerPageHero>
      <section className="home-section">
        <div className="home-container">
          <SectionIntro
            eyebrow="A STAGE FOR WHAT MAKES YOU, YOU"
            title={
              <>
                More than going live.
                <br />A way to connect.
              </>
            }
            description="A conversation, a creative skill, a perspective worth sharing. Start with what comes naturally."
          />
          <FeatureGrid features={streamerFeatures} />
        </div>
      </section>
      <section className="home-section [background:radial-gradient(ellipse_at_10%_30%,rgb(18_217_244/0.04),transparent_70%),#0c1032]">
        <div className="home-container grid grid-cols-2 items-start gap-20 max-[1100px]:gap-10 max-[767px]:grid-cols-1 max-[767px]:gap-10">
          <div
            className="py-8 max-[767px]:p-0 [&>svg]:my-12 [&>svg]:block [&>svg]:h-[50px] [&>svg]:w-[50px] [&>svg]:text-primary max-[767px]:[&>svg]:my-8 [&_h2>span]:text-(--text-secondary)"
            data-reveal
          >
            <span className="home-eyebrow">WHAT STREAMINTIA PROVIDES</span>
            <HomeIcon name="broadcast" />
            <h2>
              Your first stream.
              <br />
              <span>Your next chapter.</span>
            </h2>
            <p className="home-lead">
              You bring the personality.
              <br />
              We help you explore the path.
            </p>
          </div>
          <div data-reveal>
            <EditorialRows items={streamerSupport} />
          </div>
        </div>
      </section>
      <section id="streamer-process" className="home-section">
        <div className="home-container">
          <SectionIntro
            eyebrow="YOUR JOURNEY, STEP BY STEP"
            title={
              <>
                From curious
                <br />
                to camera-ready.
              </>
            }
          />
          <ProcessSteps steps={streamerSteps} />
          <p className="process-note">
            Explore the frontend application preview now. Live applications and
            programme details will be confirmed before launch.
          </p>
        </div>
      </section>
      <PlatformPreview />
      <RequirementsSection items={streamerRequirements} role="a streamer" />
      <FAQPreview items={streamerFAQs} />
      <FinalCTA
        title={
          <>
            Ready to
            <br />
            <span className="home-gradient-text">go live?</span>
          </>
        }
        description="Start by telling us a little about yourself. Explore the application preview and take a look at what comes next."
        primary={{ label: "Apply as a Streamer", href: "/apply?role=streamer" }}
        secondary={{ label: "Contact Us", href: "/contact" }}
        showContact={false}
      />
    </InnerPageShell>
  );
}
