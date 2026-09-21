import { site } from "@/config/site";
import Image from "next/image";
import { assets } from "@/config/assets";
import { ButtonLink } from "@/components/ui/Button";
import { HomeIcon } from "@/components/ui/HomeIcon";
import { SectionGlow } from "./SectionGlow";
interface CTALink {
  label: string;
  href: string;
}
export function FinalCTA({
  title,
  description,
  primary = site.cta.streamer,
  secondary = site.cta.agent,
  showContact = true,
  campaign = false,
}: {
  title?: React.ReactNode;
  description?: React.ReactNode;
  primary?: CTALink;
  secondary?: CTALink;
  showContact?: boolean;
  campaign?: boolean;
}) {
  return (
    <section
      id="your-next-step"
      className={
        campaign
          ? "home-section final-cta campaign-closing relative isolate text-left overflow-hidden [background:radial-gradient(at_80%_50%,#54348d55,transparent_55%),radial-gradient(at_10%_100%,#04b1d01f,transparent_50%),#0b0c2b] py-[110px]"
          : "home-section final-cta relative isolate text-center overflow-hidden bg-[radial-gradient(circle_at_20%_80%,rgb(18_217_244/0.13),transparent_25%),radial-gradient(circle_at_80%_20%,rgb(139_77_255/0.12),transparent_28%),linear-gradient(135deg,#f8fdff,#f7f3ff)] py-[calc(var(--home-section-space)*1.2)]"
      }
    >
      <SectionGlow className="bg-[radial-gradient(ellipse_at_50%_65%,rgb(139_77_255/0.07),transparent_60%)]" />
      {campaign ? (
        <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <Image
            src={assets.visuals.networkArtwork.src}
            alt=""
            width={assets.visuals.networkArtwork.width}
            height={assets.visuals.networkArtwork.height}
            className="h-full w-full object-cover opacity-50 mix-blend-screen"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,rgb(9_10_46/0.92)_0%,rgb(9_10_46/0.55)_45%,rgb(9_10_46/0.15)_100%)]" />
        </div>
      ) : null}
      {campaign ? (
        <div
          className="absolute right-[4%] top-[15%] h-[420px] w-[420px] opacity-90 max-[1100px]:right-[-70px] max-[1100px]:opacity-25"
          aria-hidden="true"
        >
          <span className="absolute inset-0 rounded-[38%] border border-[#b8a4ff2b] rotate-[30deg]" />
          <span className="absolute inset-[-18%] rounded-[38%] border border-[#b8a4ff2b] rotate-[-15deg]" />
          <Image
            src={site.logos.icon}
            width={300}
            height={300}
            alt=""
            className="absolute inset-[12%] h-auto w-3/4 drop-shadow-[0_0_50px_#9647eb66]"
          />
        </div>
      ) : null}
      <div
        className={
          campaign
            ? "home-container relative z-[2] [&_h2]:m-0 [&_h2]:max-w-[760px] [&_h2]:text-[clamp(2.8rem,5.5vw,5.3rem)] [&_h2]:text-white [&_.home-eyebrow]:justify-start [&_.home-eyebrow]:!text-[#7cd4ed] [&_.home-lead]:mx-0 [&_.home-lead]:mt-[25px] [&_.home-lead]:mb-0 [&_.home-lead]:max-w-[610px] [&_.home-lead]:text-[#b5b7d0] [&_.home-actions]:mt-7 [&_.home-actions]:justify-start [&_.home-button--secondary]:border [&_.home-button--secondary]:border-[#ffffff33] [&_.home-button--secondary]:text-white [&_.home-button--secondary]:bg-[#ffffff05] [&_.home-button--text]:text-[#c2c4dd]"
            : "home-container [&_.home-eyebrow]:justify-center [&_h2]:text-[clamp(2.5rem,5.1vw,4.5rem)] [&_.home-lead]:mx-auto [&_.home-lead]:text-base [&_.home-lead]:my-7 [&_.home-actions]:justify-center [&_.home-button--text]:mt-5 [&_.home-button--text]:text-[0.6875rem] [&_.home-button--text]:text-(--home-muted) max-[767px]:[&_.home-button--text]:text-[#626c89]"
        }
        data-reveal
      >
        <p className="home-eyebrow">GO FROM WHAT IF TO WHAT’S NEXT</p>
        <h2>
          {title ?? (
            <>
              Your next opportunity
              <br />
              <span className="home-gradient-text">starts here.</span>
            </>
          )}
        </h2>
        <p className="home-lead max-[1100px]:text-[0.9375rem] max-[1100px]:[&>br]:hidden">
          {description ?? (
            <>
              Step into the spotlight or bring new talent to it.
              <br />
              Your next chapter begins with a conversation.
            </>
          )}
        </p>
        <div className="home-actions max-[900px]:max-w-[23rem] max-[900px]:mx-auto">
          <ButtonLink href={primary.href} variant="primary">
            {primary.label}
            <HomeIcon name="arrow" />
          </ButtonLink>
          <ButtonLink href={secondary.href} variant="secondary">
            {secondary.label}
            <HomeIcon name="arrow" />
          </ButtonLink>
        </div>
        {campaign ? (
          <ButtonLink href="/platforms" variant="text">
            Explore Platforms
            <HomeIcon name="arrow" />
          </ButtonLink>
        ) : null}
        {showContact ? (
          <ButtonLink href="/contact" variant="text">
            Have a question? Let’s talk
            <HomeIcon name="arrow" />
          </ButtonLink>
        ) : null}
      </div>
    </section>
  );
}
