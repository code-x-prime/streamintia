import { notFound } from "next/navigation";
import { getPlatform, getPlatforms } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { PlatformCTA } from "@/components/platform/PlatformCTA";
import { PlatformGrid } from "@/components/platform/PlatformGrid";
import { SectionPlaceholder } from "@/components/sections/SectionPlaceholder";
import { InnerPageShell } from "@/components/inner/InnerPageShell";
import { InnerPageHero } from "@/components/inner/InnerPageHero";
import { ButtonLink } from "@/components/ui/Button";
import { HomeIcon } from "@/components/ui/HomeIcon";
import { SectionIntro } from "@/components/home/SectionIntro";
import { assets } from "@/config/assets";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return (await getPlatforms()).map((platform) => ({ slug: platform.slug }));
}

export async function generateMetadata({ params }: Props) {
  const platform = await getPlatform((await params).slug);
  if (!platform) notFound();
  return createMetadata(
    platform.name,
    platform.description,
    `/platforms/${platform.slug}`,
    platform.status !== "active",
  );
}

const detailSections = [
  "About platform",
  "Features",
  "Why join through Streamintia",
  "Host opportunity",
  "Agent opportunity",
  "How to join",
];

export default async function Page({ params }: Props) {
  const platform = await getPlatform((await params).slug);
  if (!platform) notFound();
  const related = (await getPlatforms()).filter(
    (item) => item.slug !== platform.slug,
  );

  return (
    <InnerPageShell tone="neutral">
      <InnerPageHero
        eyebrow="EXPLORE THE PLATFORM"
        breadcrumb={platform.name}
        compact
        title={
          <>
            {platform.name}
            <br />
            <span className="home-gradient-text">Your next stage.</span>
          </>
        }
        description={platform.description}
        image={assets.visuals.platformPreview}
      >
        <ButtonLink href={platform.hostUrl} variant="primary">
          Host pathway
          <HomeIcon name="arrow" />
        </ButtonLink>
        <ButtonLink href={platform.agentUrl} variant="secondary">
          Agent pathway
          <HomeIcon name="arrow" />
        </ButtonLink>
      </InnerPageHero>

      <section
        className="home-section overflow-hidden bg-[radial-gradient(circle_at_8%_15%,rgb(18_217_244/0.08),transparent_24%),radial-gradient(circle_at_92%_85%,rgb(139_77_255/0.08),transparent_25%),#f6f8ff]"
        id="platform-details"
      >
        <div className="home-container">
          <SectionIntro
            eyebrow="KNOW THE PATH"
            title={
              <>
                Explore the
                <br />
                opportunity clearly.
              </>
            }
            description="Review the key areas before choosing the path that fits you."
          />
          <div
            className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1"
            data-stagger
          >
            {detailSections.map((title, index) => (
              <SectionPlaceholder key={title} title={title} index={index + 1} />
            ))}
          </div>
        </div>
      </section>

      <div className="bg-white px-(--home-gutter) py-6">
        <div className="mx-auto max-w-(--home-width) justify-center rounded-2xl border border-[rgb(43_57_122/0.1)] bg-[linear-gradient(135deg,#f3fbff,#f5f1ff)] p-8 shadow-[0_18px_55px_rgb(39_49_105/0.08)]">
          <PlatformCTA platform={platform} />
        </div>
      </div>

      <section className="home-section bg-white">
        <div className="home-container">
          <SectionIntro
            eyebrow="MORE POSSIBILITIES"
            title="Explore related platforms."
          />
          <div>
            <PlatformGrid platforms={related} presentation="featured" />
          </div>
        </div>
      </section>
    </InnerPageShell>
  );
}
