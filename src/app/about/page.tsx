import { InnerPageShell } from "@/components/inner/InnerPageShell";
import { InnerPageHero } from "@/components/inner/InnerPageHero";
import { BrandVisual } from "@/components/inner/BrandVisual";
import { SectionIntro } from "@/components/home/SectionIntro";
import { FinalCTA } from "@/components/home/FinalCTA";
import { ButtonLink } from "@/components/ui/Button";
import { HomeIcon } from "@/components/ui/HomeIcon";
import { createMetadata } from "@/lib/metadata";
import { aboutValues, aboutFeatures } from "@/config/inner-pages";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { EditorialRows } from "@/components/inner/EditorialRows";
import { assets } from "@/config/assets";
export const metadata = createMetadata(
  "About Us",
  "Meet Streamintia: connecting creators, hosts and agents with guidance and live-streaming opportunities.",
  "/about",
);
export default function AboutPage() {
  return (
    <InnerPageShell>
      <InnerPageHero
        eyebrow="ABOUT STREAMINTIA"
        breadcrumb="About Us"
        title={
          <>
            Talent has potential.
            <br />
            <span className="home-gradient-text">
              Connection takes it further.
            </span>
          </>
        }
        description="We bring creators, hosts and agents closer to opportunity—with guidance, shared ambition and people at the centre."
        image={assets.visuals.aboutTeam}
      >
        <ButtonLink href="/apply" variant="primary">
          Find your path
          <HomeIcon name="arrow" />
        </ButtonLink>
      </InnerPageHero>
      <section className="home-section">
        <div className="home-container grid grid-cols-2 items-start gap-20 max-[1100px]:gap-10 max-[767px]:grid-cols-1 max-[767px]:gap-10">
          <div data-reveal>
            <p className="home-eyebrow">THE IDEA BEHIND THE NETWORK</p>
            <h2>
              Built to help
              <br />
              talent move forward.
            </h2>
          </div>
          <div data-reveal>
            <p className="font-(family-name:--font-display) text-[1.65rem] leading-[1.45] tracking-[-0.025em] text-(--text-primary) max-[767px]:text-[1.4rem]">
              Potential is everywhere.
              <br />
              The right connection can make a difference.
            </p>
            <p className="home-body">
              Streamintia brings together people who want to create, people who
              can spot talent and the platforms where their next chapter could
              begin.
            </p>
            <p className="home-body">
              We help creators and agents explore their direction, understand
              the process and prepare for the opportunities ahead. Our focus is
              a clearer start and a thoughtful way forward.
            </p>
            <ButtonLink href="/how-it-works" variant="text">
              How we connect the dots
              <HomeIcon name="arrow" />
            </ButtonLink>
          </div>
        </div>
      </section>
      <section className="home-section pt-0">
        <div
          className="home-container grid grid-cols-2 gap-6 max-[767px]:grid-cols-1"
          data-stagger
        >
          {aboutValues.map((value, index) => (
            <article
              key={value.label}
              className={`relative overflow-hidden rounded-(--home-radius) border border-[rgb(43_57_122/0.11)] p-12 text-[#0a1038] shadow-[0_18px_55px_rgb(39_49_105/0.08)] transition-[transform,box-shadow] duration-300 ease-(--ease-standard) hover:-translate-y-[5px] hover:shadow-[0_27px_68px_rgb(39_49_105/0.13)] max-[1100px]:p-8 max-[767px]:p-8 ${
                value.tone === "purple"
                  ? "bg-[radial-gradient(circle_at_100%_0,rgb(139_77_255/0.13),transparent_42%),#ffffff] [&_.home-eyebrow]:text-[#bb9aff]"
                  : "bg-[radial-gradient(circle_at_0_0,rgb(18_217_244/0.12),transparent_42%),#ffffff]"
              }`}
              data-reveal
            >
              <span className="mb-12 block font-(family-name:--font-display) text-[4rem] leading-none text-[rgb(61_76_143/0.14)] max-[767px]:mb-8 max-[767px]:text-[3rem]">
                0{index + 1}
              </span>
              <p className="home-eyebrow">{value.label}</p>
              <h2 className="text-[2.3rem] max-[1100px]:text-[2rem]">
                {value.title.split("\n").map((line, i) => (
                  <span key={line}>
                    {i ? <br /> : null}
                    {line}
                  </span>
                ))}
              </h2>
              <p className="mt-6 max-w-[27rem] text-[0.9375rem] leading-[1.9] text-(--home-muted)">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="home-section border-[rgb(28_35_81/0.07)] bg-[radial-gradient(circle_at_92%_10%,rgb(139_77_255/0.08),transparent_28%),#f6f8ff] border-y">
        <div className="home-container">
          <SectionIntro
            eyebrow="WHAT WE BRING TO THE TABLE"
            title={
              <>
                Support with
                <br />a sense of direction.
              </>
            }
            description="Recruitment, creator support, platform discovery and guidance—connected around the people we serve."
          />
          <ServicesGrid />
        </div>
      </section>
      <section className="home-section">
        <div className="home-container grid grid-cols-2 items-center gap-20 max-[1100px]:gap-10 max-[767px]:grid-cols-1 max-[767px]:gap-10">
          <div
            className="rounded-(--home-radius) border border-[rgb(43_57_122/0.11)] bg-[linear-gradient(145deg,#f8fdff,#f3f1ff)] px-8 pt-6 pb-12 shadow-[0_24px_65px_rgb(39_49_105/0.1)] [&>p]:font-(family-name:--font-display) [&>p]:text-[2.2rem] [&>p]:leading-[1.2] [&>p]:tracking-[-0.04em] [&>p]:text-[#0a1038] [&>p>span]:text-[#69738f]"
            data-reveal
          >
            <BrandVisual variant="network" className="mx-auto max-w-[380px]" />
            <p>
              People first.
              <br />
              <span>Possibility follows.</span>
            </p>
          </div>
          <div data-reveal>
            <p className="home-eyebrow">WHY PEOPLE EXPLORE STREAMINTIA</p>
            <h2>
              A more connected
              <br />
              way forward.
            </h2>
            <EditorialRows items={aboutFeatures} />
          </div>
        </div>
      </section>
      <FinalCTA
        title={
          <>
            Ready to explore
            <br />
            <span className="home-gradient-text">your opportunity?</span>
          </>
        }
        description="There is more than one way to be part of the story. Find the path that feels like you."
      />
    </InnerPageShell>
  );
}
