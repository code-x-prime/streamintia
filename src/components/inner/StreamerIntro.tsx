import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { HomeIcon, type HomeIconName } from "@/components/ui/HomeIcon";

const careerReasons: {
  title: string;
  lead: string;
  points: string[];
  image: string;
  alt: string;
  icon: HomeIconName;
}[] = [
  {
    title: "Entertainment",
    lead: "Turn something you already enjoy into your own craft.",
    points: [
      "Share your talent and personality with a live audience.",
      "Find a style that is recognisably yours.",
      "Grow from hobbyist to confident entertainer.",
    ],
    image: "/images/home/hero-creator.webp",
    alt: "A smiling Indian creator in headphones entertaining his audience during a live stream",
    icon: "broadcast",
  },
  {
    title: "Room to grow",
    lead: "Build an audience, and the opportunities around it, step by step.",
    points: [
      "Consistency and good habits help your community grow.",
      "Learn what works through feedback and experience.",
      "Income depends on the platform, your effort and your audience, and is never guaranteed.",
    ],
    image: "/images/home/service-milestone.webp",
    alt: "Young Indian creators celebrating a milestone together in a colourful studio",
    icon: "growth",
  },
  {
    title: "Flexible timing",
    lead: "Fit streaming around your life instead of the other way round.",
    points: [
      "Plan sessions around your day and your commitments.",
      "Stream from home with simple, practical gear.",
      "Find a routine that keeps your work and life in balance.",
    ],
    image: "/images/home/benefit-ecosystem.webp",
    alt: "A tidy creator desk with phone tripod, camera, notebook, headphones and a cup of chai",
    icon: "play",
  },
];

const benefits = [
  "Straight answers about platform requirements and availability",
  "Help preparing for onboarding, so nothing comes as a surprise",
  "Guidance on routine, content ideas and building your audience",
  "Clear communication, and real people to ask when you are unsure",
  "Respect for your privacy, your pace and your choices",
];

export function StreamerIntro() {
  return (
    <>
      <section className="home-section px-(--home-gutter) py-[clamp(3.5rem,7vw,6rem)]">
        <div className="home-container grid items-center gap-[clamp(2rem,5vw,4.5rem)] lg:grid-cols-[0.8fr_1.2fr]">
          <div
            className="relative mx-auto w-full max-w-[28rem] lg:max-w-none"
            data-reveal
          >
            <div
              aria-hidden="true"
              className="absolute -right-3 -bottom-3 h-full w-full rounded-[2rem] border border-[#8b4dff]/25 bg-[#8b4dff]/6"
            />
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-[0_30px_70px_rgb(35_44_98/0.18)] max-[767px]:aspect-[4/3]">
              <Image
                src="/images/home/opportunity-streamer.webp"
                alt="A young Indian creator laughing while she records a live video at home"
                fill
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-cover"
              />
            </div>
          </div>
          <div data-reveal>
            <p className="home-eyebrow">WHO IS A STREAMER?</p>
            <h2 className="mt-3 text-[clamp(2rem,4vw,3.25rem)]! leading-[1.05]! tracking-[-0.05em]!">
              Someone who shares their <br className="max-[767px]:hidden" />
              <span className="home-gradient-text">spark, live.</span>
            </h2>
            <p className="mt-5 max-w-[36rem] text-[1.0625rem] leading-[1.8] text-[#5d6683]">
              A streamer shares their personality and talent live with an
              audience, on platforms such as Poppo Live, Taka Live, Chamet, Niki
              Live and Crush Live. It might be music, dance, comedy, cooking or
              simply great conversation. What matters is that you enjoy
              connecting with people.
            </p>
            <p className="mt-4 max-w-[36rem] text-[1.0625rem] leading-[1.8] text-[#5d6683]">
              If you like entertaining and engaging with others, streaming could
              be a good fit. We help you understand your options and take the
              first step with guidance.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="/platforms" variant="primary">
                Explore platforms <HomeIcon name="arrow" />
              </ButtonLink>
              <ButtonLink href="#streamer-process" variant="secondary">
                See how it works <HomeIcon name="arrow" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section bg-[linear-gradient(180deg,#f8f7ff,#fff4fa)] px-(--home-gutter) py-[clamp(3.5rem,7vw,6rem)]">
        <div className="home-container">
          <div className="mx-auto mb-[clamp(2rem,5vw,3.5rem)] max-w-[44rem] text-center" data-reveal>
            <p className="home-eyebrow">WHY LIVE STREAMING</p>
            <h2 className="mt-3 text-[clamp(2rem,4vw,3.25rem)]! leading-[1.05]! tracking-[-0.05em]!">
              Why choose live streaming{" "}
              <span className="home-gradient-text">as a career?</span>
            </h2>
          </div>
          <div className="grid gap-5">
            {careerReasons.map((item, index) => (
              <article
                key={item.title}
                data-reveal
                className="grid items-center gap-6 overflow-hidden rounded-3xl border border-[rgb(42_52_105/0.1)] bg-white p-4 shadow-[0_18px_45px_rgb(42_52_105/0.07)] md:grid-cols-[0.9fr_1.1fr] md:gap-10 md:p-5"
              >
                <div
                  className={`relative aspect-[3/2] overflow-hidden rounded-2xl ${
                    index % 2 ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 92vw, 460px"
                    className="object-cover"
                  />
                </div>
                <div className="p-1 md:p-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[image:linear-gradient(135deg,#12d9f4,#8b4dff)] text-white shadow-[0_10px_20px_-8px_#8b4dff66] [&_svg]:h-5 [&_svg]:w-5">
                    <HomeIcon name={item.icon} />
                  </span>
                  <h3 className="mt-4 text-[clamp(1.375rem,2.4vw,1.75rem)]! font-semibold! tracking-[-0.03em]!">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base leading-[1.7] text-[#5d6683]">
                    {item.lead}
                  </p>
                  <ul className="mt-4 grid gap-2.5">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-[0.9375rem] leading-[1.6] text-[#2e345c]"
                      >
                        <HomeIcon
                          name="check"
                          className="mt-0.5 h-5 w-5 shrink-0 text-[#8b4dff]"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section px-(--home-gutter) py-[clamp(3.5rem,7vw,6rem)]">
        <div className="home-container grid items-center gap-[clamp(2rem,5vw,4.5rem)] lg:grid-cols-[1.1fr_0.9fr]">
          <div data-reveal className="lg:order-1">
            <p className="home-eyebrow">WHY STREAMINTIA</p>
            <h2 className="mt-3 text-[clamp(2rem,4vw,3.25rem)]! leading-[1.05]! tracking-[-0.05em]!">
              Benefits of{" "}
              <span className="home-gradient-text">choosing us.</span>
            </h2>
            <p className="mt-5 max-w-[38rem] text-[1.0625rem] leading-[1.8] text-[#5d6683]">
              Every streamer starts with different questions. We offer
              personalised guidance, so you can focus on the part that matters
              most, creating, while we help with the rest of the journey.
            </p>
            <ul className="mt-6 grid gap-3">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex gap-3 text-base leading-[1.6] text-[#2e345c]"
                >
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[image:linear-gradient(135deg,#12d9f4,#8b4dff)] text-white">
                    <HomeIcon name="check" className="h-3.5 w-3.5" />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-[38rem] text-[0.9375rem] leading-[1.7] text-[#5d6683]">
              Ready to begin? Start with a short application. We will explain
              the next steps once programmes are confirmed.
            </p>
            <div className="mt-5">
              <ButtonLink href="/apply?role=streamer" variant="primary">
                Start your application <HomeIcon name="arrow" />
              </ButtonLink>
            </div>
          </div>
          <div
            className="relative mx-auto w-full max-w-[28rem] lg:max-w-none lg:order-2"
            data-reveal
          >
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -left-3 h-full w-full rounded-[2rem] border border-[#12d9f4]/30 bg-[#12d9f4]/6"
            />
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-[0_30px_70px_rgb(35_44_98/0.18)] max-[767px]:aspect-[4/3]">
              <Image
                src="/images/home/benefit-support.webp"
                alt="A support specialist with a headset helping a creator on a laptop"
                fill
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
