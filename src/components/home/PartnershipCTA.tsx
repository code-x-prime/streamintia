import Image from "next/image";
import { site } from "@/config/site";
import { SectionGlow } from "./SectionGlow";
import { ButtonLink } from "@/components/ui/Button";
import { HomeIcon } from "@/components/ui/HomeIcon";
export function PartnershipCTA() {
  return (
    <section id="partnerships" className="home-section partnership-section pb-0 bg-white in-[.home-page]:bg-transparent">
      <div className="home-container">
        <div
          className="relative isolate grid grid-cols-[1.15fr_1fr] items-center gap-8 overflow-hidden rounded-[var(--home-radius)] border border-[rgb(139_77_255/0.22)] bg-[linear-gradient(115deg,#131033,#15163e_60%,#182344)] p-16 shadow-[0_34px_85px_rgb(18_24_67/0.2)] transition-[transform,box-shadow] duration-350 ease-[var(--ease-standard)] hover:-translate-y-1 hover:shadow-[0_42px_100px_rgb(18_24_67/0.25)] max-[1023px]:grid-cols-1 max-[1023px]:gap-4 max-[1023px]:p-8"
          data-reveal
        >
          <SectionGlow className="bg-[radial-gradient(ellipse_at_80%_40%,rgb(139_77_255/0.2),transparent_60%)]" />
          <div className="relative z-[1]">
            <p className="home-eyebrow">BETTER, TOGETHER.</p>
            <h2 className="text-[clamp(2.5rem,4.4vw,4rem)]">
              Let’s build
              <br />
              <span className="text-[#c3b7f0]">what’s next.</span>
            </h2>
            <p className="home-lead text-[0.9375rem] max-[1023px]:text-sm">
              A platform, a brand, a shared ambition.
              <br />
              Let’s explore what we could create together.
            </p>
            <ButtonLink href="/contact" variant="primary" className="mt-8">
              Partner With Us
              <HomeIcon name="arrow" />
            </ButtonLink>
          </div>
          <div
            className="relative flex aspect-square items-center justify-center max-[1023px]:w-[70%] max-[1023px]:max-w-[300px] max-[1023px]:justify-self-center"
            aria-hidden="true"
          >
            <span className="absolute inset-[8%] rounded-full border border-[rgb(184_188_217/0.16)] [transform:rotate(-30deg)_scaleY(0.7)]" />
            <span className="absolute inset-[20%] rounded-full border border-[rgb(139_77_255/0.3)] [transform:rotate(40deg)_scaleY(0.85)]" />
            <Image
              src={site.logos.icon}
              alt=""
              width={1000}
              height={1000}
              sizes="(max-width: 768px) 180px, 340px"
              className="relative h-auto w-3/4 object-contain opacity-80"
            />
            <p className="absolute bottom-[-1rem] text-center text-[0.5rem] leading-[2] tracking-[0.2em] text-(--home-muted) max-[1023px]:bottom-0">
              THE NEXT CONNECTION
              <br />
              COULD CHANGE EVERYTHING.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
