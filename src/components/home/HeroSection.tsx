import Link from "next/link";
import Image from "next/image";
import { site } from "@/config/site";
import { platforms } from "@/config/platforms";
import { ButtonLink } from "@/components/ui/Button";
import { HomeIcon } from "@/components/ui/HomeIcon";
import { TextRotate } from "@/components/ui/TextRotate";
import { MorphingText } from "@/components/ui/MorphingText";
import { HeroVisual } from "./HeroVisual";
import { SectionGlow } from "./SectionGlow";

export function HeroSection() {
  return (
    <section
      className="home-hero campaign-hero relative isolate"
      aria-labelledby="hero-title"
    >
      <SectionGlow className="hero-glow" />
      <div className="home-container">
        <div className="grid grid-cols-[0.92fr_1.08fr] items-center gap-[22px] py-0 min-h-[610px] max-[1100px]:grid-cols-1 max-[767px]:gap-[18px]">
          <div className="relative z-3 max-w-none p-0">
            <p
              className="home-eyebrow inline-flex items-center gap-3 rounded-full bg-[#f0f2fc] py-[7px] pr-[14px] pl-[7px] text-[9px] text-[#616da0] mb-[22px] max-[767px]:text-[7px] max-[767px]:mb-5"
              data-hero-copy
            >
              <span className="mx-1.5 h-[7px] w-[7px] flex-shrink-0 rounded-full bg-[#9d35ff] shadow-[0_0_0_6px_#fff]" />
              <TextRotate
                texts={[
                  "LIVE STREAMING. REAL POSSIBILITIES.",
                  "CREATORS. AGENTS. GROWTH.",
                  "YOUR STAGE. YOUR NETWORK.",
                ]}
              />
            </p>
            <h1
              id="hero-title"
              data-hero-copy
              className="m-0 max-w-none font-sans text-[clamp(52px,4.8vw,55px)] font-[650] leading-none tracking-[-0.075em] text-[#070819] max-[1100px]:min-[768px]:text-[40px] max-[767px]:text-[clamp(52px,13vw,55px)] [&_.home-gradient-text]:whitespace-nowrap [&_.home-gradient-text]:bg-[linear-gradient(110deg,#087ef9,#405cff_46%,#d915ee)]"
            >
              Creators
              <br />
              Agents
              <br />
              <MorphingText
                texts={["Real Growth.", "New Chapters.", "Your Stage."]}
              />
            </h1>
            <svg className="sr-only" aria-hidden="true">
              <filter id="morph-threshold">
                <feColorMatrix
                  in="SourceGraphic"
                  type="matrix"
                  values="1 0 0 0 0
                          0 1 0 0 0
                          0 0 1 0 0
                          0 0 0 255 -140"
                />
              </filter>
            </svg>
            <p
              className="hero-description max-w-[490px] mt-[23px] mb-0 text-[#2e345c] max-[767px]:text-sm max-[767px]:max-w-[480px] max-[767px]:mt-[19px]"
              data-hero-copy
            >
              Streamintia connects talented creators and professional agents
              with live-streaming opportunities, guidance and a path to
              long-term growth.
            </p>
            <div
              className="home-actions mt-7 gap-4 flex-nowrap max-[1100px]:min-[768px]:flex-col max-[1100px]:min-[768px]:items-start max-[1100px]:min-[768px]:gap-2.5 max-[767px]:flex-wrap max-[767px]:mt-[23px] max-[767px]:gap-[9px]"
              data-hero-actions
            >
              <ButtonLink
                href={site.cta.streamer.href}
                variant="primary"
                className="min-h-14! rounded-[14px]! px-5.75! py-3.75! text-[13px]! whitespace-nowrap! max-[767px]:min-h-12.5! max-[767px]:px-3! max-[767px]:py-3! max-[767px]:text-[10px]! max-[767px]:gap-2.25!"
              >
                {site.cta.streamer.label}
                <HomeIcon name="arrow" />
              </ButtonLink>
              <ButtonLink
                href={site.cta.agent.href}
                variant="secondary"
                className="min-h-14 rounded-[14px] px-[23px] py-[15px] text-[13px] whitespace-nowrap bg-white/70 border border-[#dadef4] text-[#0c123c] max-[767px]:min-h-[50px] max-[767px]:px-3 max-[767px]:py-3 max-[767px]:text-[10px] max-[767px]:gap-[9px]"
              >
                {site.cta.agent.label}
                <HomeIcon name="arrow" />
              </ButtonLink>
            </div>
            <div
              className="flex items-center gap-[18px] mt-8 text-[#586084] text-[13px] leading-[1.6] max-[767px]:mt-[21px] max-[767px]:text-[11px] max-[767px]:gap-3"
              data-hero-actions
            >
              <span
                className="flex pl-[3px] [&_svg]:w-[38px] [&_svg]:h-[38px] [&_svg]:p-2 [&_svg]:-ml-[3px] [&_svg]:border-2 [&_svg]:border-white [&_svg]:rounded-full [&_svg]:bg-[linear-gradient(135deg,#d3f7ff,#ede1ff)] [&_svg]:text-[#6d55df]"
                aria-hidden="true"
              >
                <HomeIcon name="broadcast" />
                <HomeIcon name="network" />
                <HomeIcon name="globe" />
              </span>
              <p>
                A place for a{" "}
                <strong className="font-semibold text-[#22294f]">
                  global community
                </strong>
                <br />
                of creators and agents.
              </p>
            </div>
          </div>
          <HeroVisual />
        </div>

        <div
          className="text-center pt-[22px] pb-1 max-[767px]:pt-0"
          aria-label="Explore the platform directory"
        >
          <p className="text-[#7581ad] text-[10px] font-[650] tracking-[0.18em] max-[767px]:text-[8px]">
            EXPLORE THE LIVE-STREAMING ECOSYSTEM
          </p>
          <div className="flex justify-around gap-[25px] mt-6 max-[1023px]:grid max-[1023px]:grid-cols-2 max-[1023px]:gap-x-3 max-[1023px]:gap-y-[18px]">
            {platforms.map((platform) => (
              <Link
                key={platform.slug}
                href="/platforms"
                className="flex items-center gap-[9px] text-[#737da5] text-[23px] font-bold tracking-[-0.05em] max-[1023px]:text-[18px] max-[1023px]:justify-center"
              >
                {platform.logo ? (
                  <Image
                    src={platform.logo.src}
                    alt=""
                    width={20}
                    height={20}
                    className="shrink-0"
                  />
                ) : (
                  <HomeIcon name="broadcast" className="shrink-0" />
                )}
                <span className="whitespace-nowrap">{platform.name}</span>
                <small className="shrink-0 text-[8px] font-medium tracking-normal py-[3px] px-[5px] bg-[#f1f2fa] rounded">
                  Preview
                </small>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
