import { HomeMotion } from "@/components/home/HomeMotion";
import "@/styles/home.css";
import "@/styles/home-sections.css";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustStrip } from "@/components/home/TrustStrip";
import { SectionIntro } from "@/components/home/SectionIntro";
import { OpportunityCard } from "@/components/home/OpportunityCard";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { CardSwapSection } from "@/components/home/CardSwapSection";
import { PlatformWobbleGrid } from "@/components/home/PlatformWobbleGrid";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { ButtonLink } from "@/components/ui/Button";
import { HomeIcon } from "@/components/ui/HomeIcon";
import { StaggerTestimonials } from "@/components/ui/StaggerTestimonials";
import { opportunities } from "@/config/home";
import { getPlatforms } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
const homeMetadata = createMetadata(
  "Live Streaming Talent & Creator Opportunities",
  "Explore live-streaming opportunities with Streamintia. Connect as a creator or agent and find guidance, talent support and a path to grow.",
  "/",
);
export const metadata = {
  ...homeMetadata,
  title: {
    absolute: "Streamintia | Live Streaming Talent & Creator Opportunities",
  },
};
export default async function HomePage() {
  const platforms = await getPlatforms();
  return (
    <HomeMotion>
      <HeroSection />
      <TrustStrip platforms={platforms} />
      <CardSwapSection />
      <section
        id="opportunities"
        className="home-section opportunities-section"
      >
        <div className="home-container">
          <SectionIntro
            eyebrow="TWO PATHS. ONE SHARED AMBITION."
            title={<>Where do you want to start?</>}
            description="Choose the path that fits what you want to build."
          />
          <div className="opportunities-grid" data-stagger>
            {opportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} />
            ))}
          </div>
        </div>
      </section>
      <section id="services" className="home-section home-services">
        <div className="home-container">
          <SectionIntro
            eyebrow="WHAT WE DO"
            title={
              <>
                Built around talent.
                <br />
                Designed for growth.
              </>
            }
            description="From recruitment and onboarding to creator and agent support, our services help people move through the live-streaming ecosystem."
          >
            <ButtonLink href="/services" variant="text">
              Explore our services
              <HomeIcon name="arrow" />
            </ButtonLink>
          </SectionIntro>
          <ServicesShowcase />
        </div>
      </section>
      <section
        id="platforms"
        className="home-section home-platforms home-platforms--white"
      >
        <div className="home-container">
          <SectionIntro
            eyebrow="FIND YOUR NEXT STAGE"
            title={
              <>
                Explore the platforms
                <br />
                <span className="home-muted-heading">
                  behind the opportunity.
                </span>
              </>
            }
            description="Discover the platform directory and explore pathways that could fit your journey. Current entries are previews while availability is confirmed."
          />
          <PlatformWobbleGrid platforms={platforms.slice(0, 4)} />
          <div className="platform-section-bottom">
            <p>
              Directory preview. Partnerships and programme availability
              await confirmation.
            </p>
            <ButtonLink href="/platforms" variant="text">
              View All Platforms
              <HomeIcon name="arrow" />
            </ButtonLink>
          </div>
        </div>
      </section>
      <WhyChooseSection />
      <section id="stories" className="home-section testimonials-section">
        <div className="home-container">
          <SectionIntro
            eyebrow="REAL JOURNEYS"
            title={
              <>
                Every journey
                <br />
                starts somewhere.
              </>
            }
            description="A space for the people, experiences and lessons behind the progress."
          />
          <StaggerTestimonials />
        </div>
      </section>
      <FinalCTA
        campaign
        showContact={false}
        description="Whether you're ready to stream, build a creator network or simply explore your options, take the next step with Streamintia."
      />
    </HomeMotion>
  );
}
