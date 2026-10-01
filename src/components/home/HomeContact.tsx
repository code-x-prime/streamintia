import { site } from "@/config/site";
import { ButtonLink } from "@/components/ui/Button";
import { HomeIcon, type HomeIconName } from "@/components/ui/HomeIcon";
import { ContactForm } from "@/components/forms/ContactForm";

const reasons: { icon: HomeIconName; title: string; text: string }[] = [
  {
    icon: "broadcast",
    title: "Thinking of streaming?",
    text: "Ask about the creator path, platforms and what onboarding involves.",
  },
  {
    icon: "network",
    title: "Want to become an agent?",
    text: "Learn how to find and support creators responsibly.",
  },
  {
    icon: "support",
    title: "Just exploring?",
    text: "No pressure. Ask anything and we will answer in plain language.",
  },
];

export function HomeContact() {
  const { email } = site.contact;
  return (
    <section
      id="your-next-step"
      className="home-section bg-white px-(--home-gutter) py-[clamp(3.5rem,7vw,6rem)]"
    >
      <div className="home-container grid items-start gap-[clamp(2rem,5vw,4.5rem)] lg:grid-cols-[1fr_1.05fr]">
        <div className="min-w-0" data-reveal>
          <p className="home-eyebrow">GO FROM WHAT IF TO WHAT’S NEXT</p>
          <h2 className="mt-3 text-[clamp(2.25rem,4.6vw,3.75rem)]! leading-[1.05]! tracking-[-0.05em]!">
            Your next opportunity{" "}
            <span className="home-gradient-text">starts here.</span>
          </h2>
          <p className="mt-5 max-w-[34rem] text-[1.0625rem] leading-[1.8] text-[#5d6683]">
            Whether you are ready to stream, build a creator network or simply
            explore your options, tell us a little and we will get back to you.
          </p>

          <ul className="mt-8 grid gap-4">
            {reasons.map((item) => (
              <li key={item.title} className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[image:linear-gradient(135deg,#12d9f4,#8b4dff)] text-white shadow-[0_10px_20px_-8px_#8b4dff66] [&_svg]:h-5 [&_svg]:w-5">
                  <HomeIcon name={item.icon} />
                </span>
                <span>
                  <span className="block text-base font-semibold text-[#0a1038]">
                    {item.title}
                  </span>
                  <span className="mt-0.5 block text-[0.9375rem] leading-[1.6] text-[#5d6683]">
                    {item.text}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={site.cta.streamer.href} variant="primary">
              {site.cta.streamer.label}
              <HomeIcon name="arrow" />
            </ButtonLink>
            <ButtonLink href={site.cta.agent.href} variant="secondary">
              {site.cta.agent.label}
              <HomeIcon name="arrow" />
            </ButtonLink>
          </div>

          {email ? (
            <p className="mt-6 text-sm text-[#5d6683]">
              Prefer email?{" "}
              <a
                href={`mailto:${email}`}
                className="font-semibold text-[#5b4bd4] [overflow-wrap:anywhere]"
              >
                {email}
              </a>
            </p>
          ) : null}
        </div>
        <div className="min-w-0" data-reveal>
          <ContactForm idPrefix="home" />
        </div>
      </div>
    </section>
  );
}
