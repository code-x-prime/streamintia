import Image from "next/image";
import { InnerPageShell } from "@/components/inner/InnerPageShell";
import { InnerPageHero } from "@/components/inner/InnerPageHero";
import { FeatureGrid } from "@/components/inner/FeatureGrid";
import { FinalCTA } from "@/components/home/FinalCTA";
import { ButtonLink } from "@/components/ui/Button";
import { HomeIcon } from "@/components/ui/HomeIcon";
import { assets } from "@/config/assets";
import { createMetadata } from "@/lib/metadata";

const benefits = [
  {
    title: "Professional guidance",
    description:
      "Understand the next step and the questions that matter before you commit.",
    icon: "compass" as const,
  },
  {
    title: "Creator support",
    description:
      "Build confidence and a routine around practical, sustainable actions.",
    icon: "support" as const,
  },
  {
    title: "Agent development",
    description:
      "Strengthen communication, organisation and creator relationships.",
    icon: "network" as const,
  },
  {
    title: "Platform discovery",
    description:
      "Compare pathways with clear status and programme expectations.",
    icon: "play" as const,
  },
  {
    title: "Growth mindset",
    description:
      "Review progress and turn each experience into a useful next step.",
    icon: "growth" as const,
  },
  {
    title: "Global perspective",
    description:
      "Explore an ecosystem shaped by different audiences, formats and markets.",
    icon: "globe" as const,
  },
];
export const metadata = createMetadata(
  "Why Streamintia",
  "A people-focused approach to creator and agent support.",
  "/why-streamintia",
);
export default function WhyStreamintiaPage() {
  return (
    <InnerPageShell tone="neutral">
      <InnerPageHero
        eyebrow="WHY STREAMINTIA"
        breadcrumb="Why Streamintia"
        title={
          <>
            Guidance for the person{" "}
            <span className="home-gradient-text">behind the potential.</span>
          </>
        }
        description="A clearer, more considered way for creators and agents to explore opportunities and build lasting capability."
        image={assets.visuals.mentorshipGrowth}
      >
        <ButtonLink href="#why" variant="primary">
          See our approach <HomeIcon name="arrow" />
        </ButtonLink>
      </InnerPageHero>
      <section
        id="why"
        className="home-section px-(--home-gutter) py-[clamp(4.5rem,9vw,8rem)] max-[767px]:py-18 bg-white"
      >
        <div className="home-container">
          <div className="mb-[clamp(2rem,5vw,4rem)] max-w-[760px]">
            <p className="home-eyebrow">THE DIFFERENCE</p>
            <h2 className="mt-[0.9rem] text-[clamp(2.15rem,5vw,4.7rem)] leading-[0.98] tracking-[-0.065em]">
              Built around people.{" "}
              <span className="home-gradient-text">Designed for progress.</span>
            </h2>
          </div>
          <FeatureGrid features={benefits} />
        </div>
      </section>
      <section className="home-section px-(--home-gutter) py-[clamp(4.5rem,9vw,8rem)] max-[767px]:py-18 bg-white">
        <div className="home-container grid grid-cols-[1fr_0.8fr] items-center gap-[clamp(2rem,7vw,7rem)] max-[767px]:grid-cols-1">
          <div>
            <p className="home-eyebrow">THE CREATOR EXPERIENCE</p>
            <h2 className="mt-4 text-[clamp(2.3rem,5vw,4.8rem)] leading-[0.98]">
              More clarity before the camera turns on.
            </h2>
            <p className="mt-5 text-[#69728c] leading-[1.8]">
              Creators need room to understand their direction, prepare the
              basics and build a routine they can sustain. Streamintia’s role is
              to help make those steps easier to see.
            </p>
          </div>
          <div className="h-[560px] overflow-hidden rounded-[1.4rem] shadow-[0_30px_80px_rgb(35_44_98/0.16)] max-[767px]:order-[-1] max-[767px]:h-[440px] [&>img]:h-full [&>img]:w-full [&>img]:object-cover [&>img]:[object-position:center_34%]">
            <Image
              src={assets.visuals.streamerPortrait.src}
              alt={assets.visuals.streamerPortrait.alt}
              width={assets.visuals.streamerPortrait.width}
              height={assets.visuals.streamerPortrait.height}
              sizes="(max-width: 767px) 100vw, 42vw"
            />
          </div>
        </div>
      </section>
      <section className="home-section overflow-hidden bg-[radial-gradient(circle_at_80%_20%,rgb(35_211_235/0.13),transparent_30%),radial-gradient(circle_at_10%_90%,rgb(135_83_255/0.18),transparent_35%),#11142d] px-(--home-gutter) py-[clamp(4.5rem,9vw,8rem)] text-white max-[767px]:py-18 [&_.home-eyebrow]:text-[#6feafb] [&_h2]:text-white [&_p:last-child]:text-[#b8c0da]">
        <div className="home-container grid grid-cols-[1fr_0.8fr] items-center gap-[clamp(2rem,7vw,7rem)] max-[767px]:grid-cols-1">
          <div>
            <p className="home-eyebrow">THE AGENT EXPERIENCE</p>
            <h2 className="mt-4 text-[clamp(2.3rem,5vw,4.8rem)] leading-[0.98]">
              Build a network with purpose.
            </h2>
            <p className="mt-5 leading-[1.8]">
              Agents help people move from interest to action. Clear
              expectations, responsible introductions and consistent
              communication create stronger working relationships.
            </p>
          </div>
          <div
            className="relative grid min-h-[430px] place-items-center rounded-full border border-[rgb(255_255_255/0.1)] bg-[radial-gradient(circle,rgb(104_79_232/0.35),transparent_60%)] before:absolute before:inset-[18%] before:rounded-[inherit] before:border before:border-[rgb(108_228_245/0.25)] before:content-[''] max-[767px]:min-h-[330px] [&>b]:z-10 [&>b]:p-4 [&>span]:absolute [&>span]:rounded-full [&>span]:bg-white [&>span]:px-[0.8rem] [&>span]:py-[0.6rem] [&>span]:text-[0.72rem] [&>span]:font-bold [&>span]:text-[#343052] [&>span:nth-child(1)]:top-[8%] [&>span:nth-child(1)]:left-[18%] [&>span:nth-child(2)]:top-[45%] [&>span:nth-child(2)]:right-[2%] [&>span:nth-child(3)]:bottom-[8%] [&>span:nth-child(3)]:left-[22%]"
            aria-hidden="true"
          >
            <span>Creators</span>
            <span>Guidance</span>
            <span>Platforms</span>
            <b>Streamintia</b>
          </div>
        </div>
      </section>
      <section className="home-section px-(--home-gutter) py-[clamp(4.5rem,9vw,8rem)] max-[767px]:py-18 bg-white">
        <div className="home-container max-w-[940px]">
          <p className="home-eyebrow">LONG-TERM VALUE</p>
          <h2 className="mt-[0.9rem] text-[clamp(2.15rem,5vw,4.7rem)] leading-[0.98] tracking-[-0.065em]">
            A stronger foundation for{" "}
            <span className="home-gradient-text">whatever comes next.</span>
          </h2>
          <p className="home-lead mt-6 max-w-[750px]">
            Skills, confidence and trusted relationships can keep creating value
            beyond a single application or programme.
          </p>
        </div>
      </section>
      <FinalCTA
        title={
          <>
            Explore what your next chapter{" "}
            <span className="home-gradient-text">could become.</span>
          </>
        }
        description="Choose the creator or agent path and move forward with clearer expectations."
      />
    </InnerPageShell>
  );
}
