import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { HomeIcon } from "@/components/ui/HomeIcon";

const responsibilities = [
  "Spot and encourage people who are passionate about streaming",
  "Give ongoing advice and support as they build their skills",
  "Explain platform requirements honestly, without promising results",
  "Be the first point of contact when your creators have questions",
];

export function AgentIntro() {
  return (
    <>
      <section className="home-section bg-[linear-gradient(180deg,#f8f7ff,#fff4fa)] px-(--home-gutter) py-[clamp(3rem,6vw,5rem)]">
        <div className="home-container">
          <div className="mx-auto max-w-[46rem] text-center" data-reveal>
            <p className="home-eyebrow">WHO IS AN AGENT?</p>
            <h2 className="mt-3 text-[clamp(2rem,4vw,3.25rem)]! leading-[1.05]! tracking-[-0.05em]!">
              The person who helps talent{" "}
              <span className="home-gradient-text">grow.</span>
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-[1.8] text-[#5d6683]">
              Agents, sometimes called talent managers, are key partners for
              live-streaming platforms such as Poppo Live, Taka Live, Chamet,
              Niki Live and Crush Live. They find and nurture new talent, and
              guide a team of streamers as they grow.
            </p>
            <div className="mt-7 flex justify-center">
              <ButtonLink href="/apply?role=agent" variant="primary">
                Join as an agent <HomeIcon name="arrow" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section px-(--home-gutter) py-[clamp(3rem,6vw,5rem)]">
        <div className="home-container grid items-center gap-[clamp(2rem,5vw,4.5rem)] lg:grid-cols-[0.95fr_1.05fr]">
          <div
            className="relative mx-auto w-full max-w-[32rem] lg:max-w-none"
            data-reveal
          >
            <div
              aria-hidden="true"
              className="absolute -right-3 -bottom-3 h-full w-full rounded-[2rem] border border-[#8b4dff]/25 bg-[#8b4dff]/6"
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-[0_30px_70px_rgb(35_44_98/0.18)]">
              <Image
                src="/images/home/opportunity-agent.webp"
                alt="An Indian talent agent planning with two young creators around a laptop"
                fill
                sizes="(max-width: 1024px) 90vw, 520px"
                className="object-cover"
              />
            </div>
          </div>
          <div data-reveal>
            <p className="home-eyebrow">WHAT AN AGENT DOES</p>
            <h2 className="mt-3 text-[clamp(2rem,4vw,3.25rem)]! leading-[1.05]! tracking-[-0.05em]!">
              Your responsibilities,{" "}
              <span className="home-gradient-text">made clear.</span>
            </h2>
            <p className="mt-5 max-w-[36rem] text-[1.0625rem] leading-[1.8] text-[#5d6683]">
              Your main role is to find and support people who love streaming.
              You give steady guidance, help them build their skills and stay
              their first contact for any questions along the way.
            </p>
            <ul className="mt-6 grid gap-3">
              {responsibilities.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-base leading-[1.6] text-[#2e345c]"
                >
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[image:linear-gradient(135deg,#12d9f4,#8b4dff)] text-white">
                    <HomeIcon name="check" className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <ButtonLink href="/contact" variant="secondary">
                Need help? Talk to us <HomeIcon name="arrow" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
