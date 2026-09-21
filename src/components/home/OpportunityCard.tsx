import { ButtonLink } from "@/components/ui/Button";
import Image from "next/image";
import { assets } from "@/config/assets";
import { HomeIcon, type HomeIconName } from "@/components/ui/HomeIcon";
export interface Opportunity {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  details: readonly string[];
  icon: HomeIconName;
}
export function OpportunityCard({ opportunity }: { opportunity: Opportunity }) {
  const visual =
    opportunity.id === "streamer"
      ? assets.visuals.homeStreamer
      : assets.visuals.homeAgent;
  return (
    <article
      className="relative isolate flex flex-col overflow-hidden rounded-[24px] bg-white shadow-[0_18px_50px_#463b7910] max-[767px]:min-h-0"
      data-reveal
    >
      <div className="relative m-3 h-[330px] overflow-hidden rounded-[18px_18px_70px_18px] max-[767px]:h-[260px]">
        <Image
          src={visual.src}
          alt={visual.alt}
          width={visual.width}
          height={visual.height}
          sizes="(max-width: 767px) 100vw, 50vw"
          data-section-image
          className="h-[112%] w-full object-cover object-[center_40%]"
        />
        <span className="absolute bottom-5 left-5 flex items-center gap-[10px] rounded-[10px] bg-[#ffffffeb] px-[14px] py-[10px] text-[8px] tracking-[0.12em] text-[#463e74] [&_svg]:w-4">
          <HomeIcon name={opportunity.icon} />
          {opportunity.id === "streamer"
            ? "YOUR VOICE. YOUR STAGE."
            : "YOUR NETWORK. SHARED POTENTIAL."}
        </span>
      </div>

      <span
        className={`pointer-events-none absolute right-4 bottom-1 z-0 bg-clip-text text-[clamp(2.75rem,5.5vw,4rem)] leading-none font-extrabold tracking-tighter text-transparent opacity-[0.14] select-none ${
          opportunity.id === "streamer"
            ? "bg-(image:--gradient-brand)"
            : "bg-(image:--gradient-secondary)"
        }`}
        aria-hidden="true"
      >
        {opportunity.id === "streamer" ? "01" : "02"}
      </span>
      <div className="m-0 max-w-none px-8 pt-[22px] pb-[35px]">
        <p className="home-eyebrow">{opportunity.eyebrow}</p>
        <h3 className="max-w-[440px] font-body text-[clamp(1.9rem,3.1vw,2.8rem)] leading-[1.08] font-semibold">
          {opportunity.title.split("\n").map((line, i) => (
            <span key={line}>
              {i > 0 ? <br /> : null}
              {line}
            </span>
          ))}
        </h3>
        <p className="max-w-[440px] text-[14px] text-[#6d7590]">
          {opportunity.description}
        </p>
        <ul className="my-5 flex flex-wrap gap-x-[18px] gap-y-[10px] max-[767px]:grid">
          {opportunity.details.map((detail) => (
            <li
              key={detail}
              className="flex items-center gap-[0.4rem] text-[10px]"
            >
              <HomeIcon name="check" />
              {detail}
            </li>
          ))}
        </ul>
        <ButtonLink href={opportunity.href} variant="text">
          {opportunity.cta}
          <HomeIcon name="arrow" />
        </ButtonLink>
      </div>
    </article>
  );
}
