import { InnerPageShell } from "@/components/inner/InnerPageShell";
import { InnerPageHero } from "@/components/inner/InnerPageHero";
import { PlatformExplorer } from "@/components/resources/PlatformExplorer";
import { FinalCTA } from "@/components/home/FinalCTA";
import { ButtonLink } from "@/components/ui/Button";
import { HomeIcon } from "@/components/ui/HomeIcon";
import { assets } from "@/config/assets";
import { getPlatforms } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Live-Streaming Platforms",
  "Explore Streamintia's preview platform directory and application pathways.",
  "/platforms",
);
export default async function PlatformsPage() {
  const platforms = await getPlatforms();
  return (
    <InnerPageShell tone="neutral">
      <InnerPageHero
        eyebrow="PLATFORM DIRECTORY"
        breadcrumb="Platforms"
        title={
          <>
            Find the stage that{" "}
            <span className="home-gradient-text">fits you.</span>
          </>
        }
        description="Explore the current directory, compare programme pathways and check availability before you apply."
        image={assets.visuals.platformsDirectory}
      >
        <ButtonLink href="#platform-directory" variant="primary">
          Browse platforms <HomeIcon name="arrow" />
        </ButtonLink>
      </InnerPageHero>
      <section className="bg-[#f5f2ff] px-(--home-gutter) py-4">
        <div className="home-container flex items-center gap-4 max-[767px]:flex-col max-[767px]:items-start">
          <strong className="shrink-0 text-[0.72rem] tracking-[0.08em] text-[#5140c5] uppercase">
            Directory preview
          </strong>
          <p className="text-[0.82rem] text-[#636d87]">
            Every current entry is marked Preview while partnership and
            programme details are confirmed.
          </p>
        </div>
      </section>
      <section
        id="platform-directory"
        className="home-section bg-white px-(--home-gutter) py-[clamp(4.5rem,9vw,8rem)] max-[767px]:py-18"
      >
        <div className="home-container">
          <PlatformExplorer items={platforms} />
        </div>
      </section>
      <FinalCTA
        title={
          <>
            Not sure which platform{" "}
            <span className="home-gradient-text">fits you?</span>
          </>
        }
        description="Tell us about your role and content direction, and we’ll help clarify the next step when programmes open."
        primary={{ label: "Streamer pathway", href: "/become-streamer" }}
        secondary={{ label: "Agent pathway", href: "/become-agent" }}
      />
    </InnerPageShell>
  );
}
