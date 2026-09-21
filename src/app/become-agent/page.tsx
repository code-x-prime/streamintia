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
  agentFeatures,
  agentResponsibilities,
  agentSteps,
  agentRequirements,
} from "@/config/inner-pages";
import { agentFAQs } from "@/config/opportunity-faq";
import { assets } from "@/config/assets";
export const metadata = createMetadata(
  "Become an Agent",
  "Discover the Streamintia agent opportunity. Recruit talent, support creators and explore building a connected live-streaming network.",
  "/become-agent",
);
export default function AgentPage() {
  return (
    <InnerPageShell tone="purple">
      <InnerPageHero
        eyebrow="BECOME AN AGENT"
        breadcrumb="Become an Agent"
        title={
          <>
            See the talent.
            <br />
            Build the connection.
            <br />
            <span className="home-gradient-text">Grow together.</span>
          </>
        }
        description="Great networks begin with people who see potential. Discover creators, support their next steps and build something with shared ambition."
        image={assets.visuals.agentPartnership}
      >
        <ButtonLink href="/apply?role=agent" variant="primary">
          Become an Agent
          <HomeIcon name="arrow" />
        </ButtonLink>
        <ButtonLink href="#agent-process" variant="secondary">
          How It Works
          <HomeIcon name="arrow" />
        </ButtonLink>
      </InnerPageHero>
      <section className="home-section">
        <div className="home-container grid grid-cols-2 items-start gap-20 max-[1100px]:gap-10 max-[767px]:grid-cols-1 max-[767px]:gap-10">
          <div data-reveal>
            <p className="home-eyebrow">THE PERSON BEHIND THE CONNECTION</p>
            <h2>
              You don’t have to
              <br />
              be in the spotlight
              <br />
              <span className="home-muted-heading">to make a difference.</span>
            </h2>
            <p className="home-lead">
              An agent connects talent with opportunity—and helps people feel
              supported along the way.
            </p>
          </div>
          <div data-reveal>
            <EditorialRows items={agentResponsibilities} />
          </div>
        </div>
      </section>
      <section className="home-section border-y border-[rgb(28_35_81/0.07)] bg-[radial-gradient(circle_at_92%_10%,rgb(139_77_255/0.08),transparent_28%),#f6f8ff]">
        <div className="home-container">
          <SectionIntro
            eyebrow="LEAD WITH PEOPLE"
            title={
              <>
                A network to build.
                <br />A direction to grow.
              </>
            }
          />
          <FeatureGrid features={agentFeatures} />
        </div>
      </section>
      <section id="agent-process" className="home-section">
        <div className="home-container">
          <SectionIntro
            eyebrow="FROM FIRST CONNECTION TO A TEAM"
            title={
              <>
                Build your network.
                <br />
                One relationship at a time.
              </>
            }
          />
          <ProcessSteps steps={agentSteps} />
          <p className="process-note">
            The journey shown is an overview. Programme responsibilities and
            eligibility will be confirmed before joining.
          </p>
        </div>
      </section>
      <section className="home-section pt-0">
        <div className="home-container">
          <div
            className="grid grid-cols-[1.2fr_0.8fr] items-center gap-16 rounded-(--home-radius) border border-[rgb(139_77_255/0.2)] p-14 text-white shadow-[0_30px_78px_rgb(22_27_72/0.2)] [--home-border:rgb(184_188_217/0.14)] [--home-muted:#969fbe] [--text-primary:#ffffff] [--text-secondary:#bbc2df] bg-[radial-gradient(circle_at_90%_25%,rgb(139_77_255/0.22),transparent_34%),linear-gradient(145deg,#0d0d35,#181449)] max-[1100px]:gap-8 max-[767px]:grid-cols-1 max-[767px]:gap-8 max-[767px]:p-8 [&_h2]:text-[clamp(2rem,3.2vw,3rem)]"
            data-reveal
          >
            <div>
              <p className="home-eyebrow">ONE CONNECTED ECOSYSTEM</p>
              <h2>
                When talent connects,
                <br />
                possibility grows.
              </h2>
              <p className="home-lead">
                An agent’s work brings people together. Your relationships
                connect creators with platforms and give shared progress a place
                to begin.
              </p>
              <ButtonLink href="/platforms" variant="text">
                Explore the ecosystem
                <HomeIcon name="arrow" />
              </ButtonLink>
            </div>
            <div className="flex flex-col items-center max-[767px]:mx-auto max-[767px]:w-full max-[767px]:max-w-[380px]">
              <span className="flex w-[85%] items-center gap-4 rounded-lg border border-(--home-border) bg-[rgb(255_255_255/0.015)] px-6 py-4 font-(family-name:--font-display) [&>svg]:h-[18px] [&>svg]:w-[18px] [&>svg]:text-[#bb9aff]">
                <HomeIcon name="network" />
                Agent
              </span>
              <i className="h-6 w-px bg-[linear-gradient(var(--purple),rgb(18_217_244/0.3))]" />
              <span className="flex w-[85%] items-center gap-4 rounded-lg border border-(--home-border) bg-[rgb(255_255_255/0.015)] px-6 py-4 font-(family-name:--font-display) [&>svg]:h-[18px] [&>svg]:w-[18px] [&>svg]:text-[#bb9aff]">
                <HomeIcon name="broadcast" />
                Creators
              </span>
              <i className="h-6 w-px bg-[linear-gradient(var(--purple),rgb(18_217_244/0.3))]" />
              <span className="flex w-[85%] items-center gap-4 rounded-lg border border-(--home-border) bg-[rgb(255_255_255/0.015)] px-6 py-4 font-(family-name:--font-display) [&>svg]:h-[18px] [&>svg]:w-[18px] [&>svg]:text-[#bb9aff]">
                <HomeIcon name="play" />
                Platforms
              </span>
              <i className="h-6 w-px bg-[linear-gradient(var(--purple),rgb(18_217_244/0.3))]" />
              <span className="flex w-[85%] items-center gap-4 rounded-lg border border-(--home-border) bg-[rgb(255_255_255/0.015)] px-6 py-4 font-(family-name:--font-display) [&>svg]:h-[18px] [&>svg]:w-[18px] [&>svg]:text-[#bb9aff]">
                <HomeIcon name="growth" />
                Growth
              </span>
            </div>
          </div>
        </div>
      </section>
      <RequirementsSection items={agentRequirements} role="an agent" />
      <FAQPreview items={agentFAQs} />
      <FinalCTA
        title={
          <>
            Ready to build
            <br />
            <span className="home-gradient-text">your network?</span>
          </>
        }
        description="Your next connection could be the beginning of something meaningful. Explore the agent application preview."
        primary={{ label: "Become an Agent", href: "/apply?role=agent" }}
        secondary={{ label: "Contact Us", href: "/contact" }}
        showContact={false}
      />
    </InnerPageShell>
  );
}
