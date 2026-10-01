import Image from "next/image";
import { InnerPageShell } from "@/components/inner/InnerPageShell";
import { InnerPageHero } from "@/components/inner/InnerPageHero";
import { FinalCTA } from "@/components/home/FinalCTA";
import { ButtonLink } from "@/components/ui/Button";
import { HomeIcon, type HomeIconName } from "@/components/ui/HomeIcon";
import { DisclaimerBar, TransparencyNote } from "@/components/inner/TrustNotes";
import { assets } from "@/config/assets";
import { getPlatforms } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "About Us",
  "Meet Streamintia: an independent team helping creators and agents explore live-streaming with honest guidance, practical support and respect.",
  "/about",
);

const values: { title: string; text: string; icon: HomeIconName }[] = [
  {
    title: "People first",
    text: "Every creator and agent starts with different goals. We listen before we advise.",
    icon: "support",
  },
  {
    title: "Honest by default",
    text: "We share what is confirmed, say what is not, and never promise results we cannot control.",
    icon: "check",
  },
  {
    title: "Growth, together",
    text: "Creators and agents do better when they learn and progress side by side.",
    icon: "growth",
  },
  {
    title: "Respect for your pace",
    text: "No pressure and no rush. You decide when you are ready for the next step.",
    icon: "compass",
  },
];

const steps = [
  {
    title: "We listen",
    text: "We start with your goals, your interests and the kind of creator or agent you want to be.",
  },
  {
    title: "We guide",
    text: "We explain the platforms, the requirements and the process in plain language.",
  },
  {
    title: "We support",
    text: "We help you prepare, get onboarded and keep improving once you begin.",
  },
];

export default async function AboutPage() {
  const platforms = await getPlatforms();
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
        description="We bring creators, hosts and agents closer to opportunity, with guidance, shared ambition and people at the centre."
        image={assets.heroes.about}
        chips={[
          { title: "Creators & agents", caption: "One connected network" },
          { title: "People first", caption: "Guidance at every step" },
        ]}
      >
        <ButtonLink href="/apply" variant="primary">
          Find your path
          <HomeIcon name="arrow" />
        </ButtonLink>
        <ButtonLink href="/contact" variant="secondary">
          Talk to us
          <HomeIcon name="arrow" />
        </ButtonLink>
      </InnerPageHero>
      <DisclaimerBar />

      <section className="home-section px-(--home-gutter) py-[clamp(3.5rem,7vw,6rem)]">
        <div className="home-container grid items-center gap-[clamp(2rem,5vw,4.5rem)] lg:grid-cols-[1.05fr_0.95fr]">
          <div data-reveal>
            <p className="home-eyebrow">WHO WE ARE</p>
            <h2 className="mt-3 text-[clamp(2rem,4vw,3.25rem)]! leading-[1.05]! tracking-[-0.05em]!">
              We are a team that{" "}
              <span className="home-gradient-text">backs talent.</span>
            </h2>
            <p className="mt-5 max-w-[38rem] text-[1.0625rem] leading-[1.8] text-[#5d6683]">
              Streamintia is an independent talent and creator-support team. We
              connect people who love to create with the live-streaming
              platforms where their next chapter could begin, and with the
              agents who help them get there.
            </p>
            <p className="mt-4 max-w-[38rem] text-[1.0625rem] leading-[1.8] text-[#5d6683]">
              We help creators and agents understand their options, prepare for
              onboarding and build good habits. Whether you are just curious or
              already streaming, you will find clear answers and a real person
              to talk to.
            </p>
            <p className="mt-5 max-w-[38rem] text-[1.0625rem] leading-[1.8] font-semibold text-[#0a1038]">
              The possibilities are wide. We would love to be part of yours.
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-[36rem]" data-reveal>
            <div
              aria-hidden="true"
              className="absolute inset-[8%_4%] -z-10 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,rgb(139_77_255/0.22),rgb(18_217_244/0.12)_55%,transparent_75%)] blur-2xl"
            />
            <Image
              src={assets.visuals.showcaseStreamer.src}
              alt="Illustration of a creator surrounded by live chat, social app icons and growth cards"
              width={assets.visuals.showcaseStreamer.width}
              height={assets.visuals.showcaseStreamer.height}
              sizes="(max-width: 1024px) 90vw, 560px"
              className="h-auto w-full drop-shadow-[0_24px_40px_rgb(91_60_180/0.25)]"
            />
          </div>
        </div>
      </section>

      <section className="home-section px-(--home-gutter) pb-[clamp(3rem,6vw,5rem)]">
        <div className="home-container grid gap-5 md:grid-cols-2">
          <article
            data-reveal
            className="relative isolate overflow-hidden rounded-[1.75rem] bg-[#0a1038] p-[clamp(1.75rem,4vw,3rem)] text-white shadow-[0_30px_70px_rgb(10_16_56/0.25)]"
          >
            <div
              aria-hidden="true"
              className="absolute -top-16 -right-16 -z-10 h-56 w-56 rounded-full bg-[#12d9f4]/20 blur-3xl"
            />
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-[#6feafb] [&_svg]:h-6 [&_svg]:w-6">
              <HomeIcon name="compass" />
            </span>
            <p className="mt-6 text-[0.6875rem] font-semibold tracking-[0.16em] text-[#6feafb]">
              OUR MISSION
            </p>
            <h2 className="mt-2 text-[clamp(1.75rem,3vw,2.25rem)]! leading-[1.1]! font-semibold! tracking-[-0.04em]! text-white!">
              A supportive space for every talent.
            </h2>
            <p className="mt-4 text-base leading-[1.8] text-[#b6bad4]">
              To build a community where every creator and agent can discover
              their path, with honest guidance, practical help and respect at
              every step.
            </p>
          </article>
          <article
            data-reveal
            className="relative isolate overflow-hidden rounded-[1.75rem] [background:linear-gradient(135deg,#6d3bf0,#b04ff0_60%,#e46fd6)] p-[clamp(1.75rem,4vw,3rem)] text-white shadow-[0_30px_70px_rgb(124_58_237/0.3)]"
          >
            <div
              aria-hidden="true"
              className="absolute -bottom-16 -left-16 -z-10 h-56 w-56 rounded-full bg-white/20 blur-3xl"
            />
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/18 text-white [&_svg]:h-6 [&_svg]:w-6">
              <HomeIcon name="spark" />
            </span>
            <p className="mt-6 text-[0.6875rem] font-semibold tracking-[0.16em] text-white/85">
              OUR VISION
            </p>
            <h2 className="mt-2 text-[clamp(1.75rem,3vw,2.25rem)]! leading-[1.1]! font-semibold! tracking-[-0.04em]! text-white!">
              Every broadcast, a celebration.
            </h2>
            <p className="mt-4 text-base leading-[1.8] text-white/90">
              A live-streaming world where talent from every background is seen
              and supported, and where creativity and connection make each
              stream something to celebrate.
            </p>
          </article>
        </div>
      </section>

      <section className="home-section bg-[linear-gradient(180deg,#f8f7ff,#ffffff)] px-(--home-gutter) py-[clamp(3.5rem,7vw,6rem)]">
        <div className="home-container">
          <div
            className="mx-auto mb-[clamp(2rem,5vw,3.5rem)] max-w-[44rem] text-center"
            data-reveal
          >
            <p className="home-eyebrow">WHAT WE STAND FOR</p>
            <h2 className="mt-3 text-[clamp(2rem,4vw,3.25rem)]! leading-[1.05]! tracking-[-0.05em]!">
              Values we <span className="home-gradient-text">work by.</span>
            </h2>
          </div>
          <div
            className="grid gap-4 min-[640px]:grid-cols-2 lg:grid-cols-4"
            data-stagger
          >
            {values.map((value) => (
              <article
                key={value.title}
                data-reveal
                className="rounded-3xl border border-[rgb(42_52_105/0.1)] bg-white p-6 shadow-[0_14px_36px_rgb(42_52_105/0.06)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgb(42_52_105/0.12)]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[image:linear-gradient(135deg,#12d9f4,#8b4dff)] text-white shadow-[0_10px_20px_-8px_#8b4dff66] [&_svg]:h-5.5 [&_svg]:w-5.5">
                  <HomeIcon name={value.icon} />
                </span>
                <h3 className="mt-5 text-lg! font-semibold! tracking-[-0.02em]!">
                  {value.title}
                </h3>
                <p className="mt-2 text-[0.9375rem] leading-[1.7] text-[#5d6683]">
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section px-(--home-gutter) py-[clamp(3rem,6vw,5rem)]">
        <div className="home-container">
          <div
            className="mx-auto mb-[clamp(2rem,5vw,3.5rem)] max-w-[44rem] text-center"
            data-reveal
          >
            <p className="home-eyebrow">HOW WE WORK</p>
            <h2 className="mt-3 text-[clamp(2rem,4vw,3.25rem)]! leading-[1.05]! tracking-[-0.05em]!">
              Simple steps,{" "}
              <span className="home-gradient-text">real support.</span>
            </h2>
          </div>
          <ol className="grid gap-5 md:grid-cols-3" data-stagger>
            {steps.map((step, index) => (
              <li
                key={step.title}
                data-reveal
                className="relative rounded-3xl border border-[rgb(42_52_105/0.1)] bg-[linear-gradient(145deg,#ffffff,#f6f5ff)] p-7"
              >
                <span className="font-(family-name:--font-display) text-[3rem] leading-none font-semibold text-[rgb(139_77_255/0.2)]">
                  0{index + 1}
                </span>
                <h3 className="mt-3 text-xl! font-semibold! tracking-[-0.03em]!">
                  {step.title}
                </h3>
                <p className="mt-2 text-[0.9375rem] leading-[1.7] text-[#5d6683]">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="home-section px-(--home-gutter) pb-[clamp(3rem,6vw,5rem)]">
        <div className="home-container">
          <div
            data-reveal
            className="relative isolate overflow-hidden rounded-[2rem] [background:radial-gradient(circle_at_85%_20%,rgb(139_77_255/0.3),transparent_45%),#0b0c2b] px-[clamp(1.5rem,4vw,3.5rem)] py-[clamp(2rem,5vw,3.5rem)] text-white"
          >
            <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-[0.6875rem] font-semibold tracking-[0.16em] text-[#6feafb]">
                  PLATFORMS WE HELP YOU EXPLORE
                </p>
                <h2 className="mt-3 text-[clamp(1.75rem,3.4vw,2.75rem)]! leading-[1.08]! font-semibold! tracking-[-0.045em]! text-white!">
                  One place to compare your options.
                </h2>
                <p className="mt-4 max-w-[30rem] text-base leading-[1.75] text-[#b6bad4]">
                  We help people explore live-streaming platforms such as{" "}
                  {platforms.map((p) => p.name).join(", ")}. Programme
                  availability is still being confirmed.
                </p>
                <div className="mt-7">
                  <ButtonLink
                    href="/platforms"
                    variant="secondary"
                    className="bg-white! text-[#0a1038]!"
                  >
                    View the directory <HomeIcon name="arrow" />
                  </ButtonLink>
                </div>
              </div>
              <ul
                className="grid grid-cols-3 gap-3 min-[640px]:gap-4 lg:max-w-[22rem] lg:justify-self-end"
                aria-label="Platforms in our directory"
              >
                {platforms.map((platform) =>
                  platform.logo ? (
                    <li
                      key={platform.slug}
                      className="flex flex-col items-center gap-2 text-center"
                    >
                      <Image
                        src={platform.logo.src}
                        alt=""
                        width={96}
                        height={96}
                        className="aspect-square w-full max-w-24 rounded-3xl shadow-[0_14px_30px_rgb(0_0_0/0.35)] ring-1 ring-white/20"
                      />
                      <span className="text-xs font-medium text-[#d9dcf0]">
                        {platform.name}
                      </span>
                    </li>
                  ) : null,
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <TransparencyNote />
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
