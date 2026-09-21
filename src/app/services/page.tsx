import { InnerPageShell } from "@/components/inner/InnerPageShell";
import { InnerPageHero } from "@/components/inner/InnerPageHero";
import { FinalCTA } from "@/components/home/FinalCTA";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { HomeIcon, type HomeIconName } from "@/components/ui/HomeIcon";
import { ButtonLink } from "@/components/ui/Button";
import { assets } from "@/config/assets";
import { services } from "@/config/services";
import { createMetadata } from "@/lib/metadata";

const icons: HomeIconName[] = [
  "spark",
  "broadcast",
  "network",
  "compass",
  "support",
  "play",
  "growth",
  "globe",
];
const flow = [
  {
    title: "Recruit",
    description: "Discover potential and identify the most suitable pathway.",
  },
  {
    title: "Onboard",
    description: "Clarify requirements, programme status and each next step.",
  },
  {
    title: "Support",
    description:
      "Build confidence through practical guidance and communication.",
  },
  {
    title: "Grow",
    description: "Review progress and develop a more consistent approach.",
  },
];
export const metadata = createMetadata(
  "Creator and Agent Services",
  "Recruitment, onboarding, guidance and growth support from Streamintia.",
  "/services",
);
export default function ServicesPage() {
  return (
    <InnerPageShell tone="purple">
      <InnerPageHero
        eyebrow="WHAT WE DO"
        breadcrumb="Services"
        title={
          <>
            Support built around{" "}
            <span className="home-gradient-text">your next step.</span>
          </>
        }
        description="From discovering potential to building a stronger routine, Streamintia connects people, guidance and platform pathways."
        image={assets.visuals.agentGuidance}
      >
        <ButtonLink href="#services-list" variant="primary">
          Explore services <HomeIcon name="arrow" />
        </ButtonLink>
      </InnerPageHero>
      <section className="home-section px-(--home-gutter) py-[clamp(4.5rem,9vw,8rem)] max-[767px]:py-18 bg-white">
        <div className="home-container max-w-[940px]">
          <p className="home-eyebrow">MORE THAN RECRUITMENT</p>
          <h2 className="mt-[0.9rem] text-[clamp(2.15rem,5vw,4.7rem)] leading-[0.98] tracking-[-0.065em]">
            Structure for the journey{" "}
            <span className="home-gradient-text">after hello.</span>
          </h2>
          <p className="home-lead mt-6 max-w-[750px]">
            Finding talent is one moment. Clear onboarding, reliable
            communication and room to learn shape everything that follows.
          </p>
        </div>
      </section>
      <section
        id="services-list"
        className="home-section bg-[linear-gradient(145deg,#f7fbff,#f8f5ff)] px-(--home-gutter) py-[clamp(4.5rem,9vw,8rem)] max-[767px]:py-18"
      >
        <div className="home-container">
          <div className="grid grid-cols-12 gap-4">
            {services.map((service, index) => (
              <article
                key={service.id}
                className={`min-h-[300px] rounded-2xl border border-[rgb(40_54_122/0.1)] bg-white p-7 shadow-[0_16px_50px_rgb(40_54_122/0.07)] max-[900px]:col-span-6 max-[767px]:col-span-12 max-[767px]:min-h-[250px] ${
                  index === 0 || index === 5
                    ? "col-span-8 bg-[linear-gradient(135deg,#eefcff,#f5f1ff)] max-[900px]:col-span-6 max-[767px]:col-span-12"
                    : "col-span-4 max-[900px]:col-span-6 max-[767px]:col-span-12"
                } [&>div]:flex [&>div]:justify-between [&>div]:text-[0.7rem] [&>div]:text-[#7059e3] [&_svg]:w-6`}
              >
                <div>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <HomeIcon name={icons[index]} />
                </div>
                <h3 className="mt-20 text-[clamp(1.35rem,2.2vw,2rem)] max-[767px]:mt-14">
                  {service.name}
                </h3>
                <p className="mt-3 max-w-[520px] text-[#66708b] leading-[1.7]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="home-section px-(--home-gutter) py-[clamp(4.5rem,9vw,8rem)] max-[767px]:py-18 bg-white">
        <div className="home-container">
          <div className="mb-[clamp(2rem,5vw,4rem)] max-w-[760px]">
            <p className="home-eyebrow">HOW SUPPORT CONNECTS</p>
            <h2 className="mt-[0.9rem] text-[clamp(2.15rem,5vw,4.7rem)] leading-[0.98] tracking-[-0.065em]">
              Recruit. Onboard. Support.{" "}
              <span className="home-gradient-text">Grow.</span>
            </h2>
          </div>
          <ProcessSteps steps={flow} />
        </div>
      </section>
      <section className="home-section overflow-hidden bg-[radial-gradient(circle_at_80%_20%,rgb(35_211_235/0.13),transparent_30%),radial-gradient(circle_at_10%_90%,rgb(135_83_255/0.18),transparent_35%),#11142d] px-(--home-gutter) py-[clamp(4.5rem,9vw,8rem)] text-white max-[767px]:py-18 [&_.home-eyebrow]:text-[#6feafb] [&_h2]:text-white [&_h3]:text-white">
        <div className="home-container">
          <div className="mb-[clamp(2rem,5vw,4rem)] max-w-[760px]">
            <p className="home-eyebrow">BUILT FOR THE ECOSYSTEM</p>
            <h2 className="mt-[0.9rem] text-[clamp(2.15rem,5vw,4.7rem)] leading-[0.98] tracking-[-0.065em]">
              One approach. Three perspectives.
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-4 max-[767px]:grid-cols-1">
            <article className="min-h-[230px] rounded-2xl border border-[rgb(255_255_255/0.12)] bg-[rgb(255_255_255/0.055)] p-6">
              <span className="text-[0.7rem] text-[#6be6f6]">01</span>
              <h3 className="mt-16">For creators</h3>
              <p className="mt-3 text-[#b7bfd8] leading-[1.7]">
                Direction for preparing, onboarding and building confidence on
                camera.
              </p>
            </article>
            <article className="min-h-[230px] rounded-2xl border border-[rgb(255_255_255/0.12)] bg-[rgb(255_255_255/0.055)] p-6">
              <span className="text-[0.7rem] text-[#6be6f6]">02</span>
              <h3 className="mt-16">For agents</h3>
              <p className="mt-3 text-[#b7bfd8] leading-[1.7]">
                Structure for discovering talent and supporting a responsible
                network.
              </p>
            </article>
            <article className="min-h-[230px] rounded-2xl border border-[rgb(255_255_255/0.12)] bg-[rgb(255_255_255/0.055)] p-6">
              <span className="text-[0.7rem] text-[#6be6f6]">03</span>
              <h3 className="mt-16">For platforms</h3>
              <p className="mt-3 text-[#b7bfd8] leading-[1.7]">
                A people-focused route for connecting with informed, prepared
                applicants.
              </p>
            </article>
          </div>
        </div>
      </section>
      <FinalCTA
        title={
          <>
            Find the support for{" "}
            <span className="home-gradient-text">your path.</span>
          </>
        }
        description="Explore the creator or agent opportunity and see what the next step involves."
      />
    </InnerPageShell>
  );
}
