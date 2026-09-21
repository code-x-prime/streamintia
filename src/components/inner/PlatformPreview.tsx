import { getPlatforms } from "@/lib/content";
import { PlatformGrid } from "@/components/platform/PlatformGrid";
import { SectionIntro } from "@/components/home/SectionIntro";
import { ButtonLink } from "@/components/ui/Button";
import { HomeIcon } from "@/components/ui/HomeIcon";
export async function PlatformPreview() {
  return (
    <section className="home-section bg-[#0c0c30]">
      <div className="home-container">
        <SectionIntro
          eyebrow="EXPLORE YOUR NEXT STAGE"
          title={
            <>
              Different platforms.
              <br />
              New possibilities.
            </>
          }
          description="Get to know the ecosystem before choosing your direction."
        />
        <PlatformGrid
          platforms={(await getPlatforms()).slice(0, 4)}
          presentation="featured"
        />
        <div className="platform-section-bottom">
          <p>
            Preview directory. Partnerships and programme availability await
            confirmation.
          </p>
          <ButtonLink href="/platforms" variant="text">
            View All Platforms
            <HomeIcon name="arrow" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
