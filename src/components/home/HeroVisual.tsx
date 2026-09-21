import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";
import { HomeIcon } from "@/components/ui/HomeIcon";

export function HeroVisual() {
  return (
    <div className="relative w-full h-152.5 min-h-0 aspect-auto m-0 perspective-none max-[1100px]:min-[768px]:h-142.5 max-[767px]:h-[clamp(365px,105vw,550px)] max-[767px]:max-w-130 max-[767px]:mx-auto">
      <span
        className="absolute top-[42px] -left-16 z-4 font-[cursive] italic text-[34px] leading-[1.1] tracking-[-0.04em] text-[#ad83f1] pointer-events-none after:content-[''] after:block after:mt-[9px] after:h-0.5 after:bg-[linear-gradient(90deg,#e7b8ff,#71d6ff)] max-[1100px]:min-[768px]:-left-2.5 max-[1100px]:min-[768px]:top-3 max-[1100px]:min-[768px]:text-[28px] max-[767px]:top-px max-[767px]:left-px max-[767px]:text-[23px]"
        aria-hidden="true"
      >
        Stream
        <br />
        Create
        <br />
        Grow
      </span>
      <div
        className="campaign-ribbon absolute inset-[30px_80px_55px_115px] rounded-[50px] pointer-events-none rotate-[26deg] bg-[linear-gradient(145deg,#af2eff,#658bff_46%,#2edaff)] max-[767px]:inset-[43px_53px_42px_66px] max-[767px]:rounded-[35px]"
        aria-hidden="true"
      />
      <div
        className="campaign-ribbon absolute inset-[56px_62px_29px_100px] rounded-[50px] pointer-events-none -rotate-[21deg] bg-[linear-gradient(150deg,#bda2ed,#d6bdff_45%,#ffbaf1)] max-[767px]:inset-[43px_53px_42px_66px] max-[767px]:rounded-[35px]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-[36px_55px_26px_83px] overflow-hidden -rotate-[7deg] rounded-[70px_34px_70px_100px] shadow-[0_20px_65px_rgb(107_80_158_/_0.09)] z-2 [&_img]:object-cover [&_img]:object-[50%_20%] [&_img]:rotate-[7deg] [&_img]:scale-[1.16] max-[1100px]:min-[768px]:inset-[60px_12px_45px_32px] max-[767px]:inset-[27px_27px_25px_48px] max-[767px]:rounded-[45px_25px_45px_70px]"
        data-hero-visual
      >
        <Image
          src="/images/generated/hero-reference-creator.webp"
          alt="Smiling live-streaming creator wearing cyan and purple headphones in a softly lit studio"
          fill
          priority
          sizes="(max-width: 767px) 85vw, (max-width: 1100px) 60vw, 42vw"
        />
      </div>
      <div className="absolute z-4 -left-3 top-[245px] grid gap-[13px] max-[1100px]:min-[768px]:-left-2.5 max-[1100px]:min-[768px]:top-[290px] max-[767px]:top-[46%] max-[767px]:left-0 max-[767px]:gap-2">
        {(
          [
            ["growth", "Explore new", "opportunities", "/platforms"],
            ["globe", "Find your", "platform pathway", "/platforms"],
            ["spark", "Creator & agent", "support", "/contact"],
          ] as const
        ).map(([icon, first, second, href]) => (
          <Link
            className="campaign-note flex items-center gap-[11px] w-[197px] min-h-[73px] p-3 rounded-[18px] border border-[#dddff6] bg-white/94 shadow-[0_12px_36px_rgb(81_72_158_/_0.065)] rotate-4 text-[#13173c] text-[10px] leading-[1.4] hover:border-[#aeb9f8] [&>svg:last-child]:w-[15px] [&>svg:last-child]:ml-auto [&>svg:last-child]:text-[#7356b8] max-[1100px]:min-[768px]:w-[165px] max-[1100px]:min-[768px]:min-h-[60px] max-[1100px]:min-[768px]:p-2 max-[767px]:w-[140px] max-[767px]:min-h-[52px] max-[767px]:p-2 max-[767px]:gap-1.5 max-[767px]:text-[8px] max-[767px]:rounded-xl"
            href={href}
            key={icon}
            data-hero-node
            data-ambient
          >
            <span className="grid place-items-center w-9 h-9 rounded-full bg-[linear-gradient(135deg,#e0faff,#f3e7ff)] text-[#7b45ed] shrink-0 max-[767px]:w-[27px] max-[767px]:h-[27px] [&_svg]:max-[767px]:w-[18px]">
              <HomeIcon name={icon} />
            </span>
            <span>
              {first}
              <br />
              {second}
            </span>
            <HomeIcon name="arrow" />
          </Link>
        ))}
      </div>
      <Link
        href="/about"
        className="absolute top-[123px] -right-4 z-4 grid justify-items-center w-[204px] p-[17px] rounded-[18px] border border-[#cac0ef] bg-[radial-gradient(at_bottom_right,#24c7e6,transparent_55%),linear-gradient(140deg,#142041,#20123f)] text-white shadow-[0_15px_35px_rgb(46_34_117_/_0.15)] -rotate-1 text-[10px] gap-1 max-[1100px]:min-[768px]:w-[145px] max-[1100px]:min-[768px]:-right-1.25 max-[1100px]:min-[768px]:top-[125px] max-[767px]:top-[55px] max-[767px]:right-0 max-[767px]:w-[121px] max-[767px]:rounded-[13px] max-[767px]:p-[11px] max-[767px]:text-[8px] [&>img]:max-[767px]:w-10 [&>img]:max-[767px]:h-10"
        data-hero-node
      >
        <Image src={site.logos.icon} alt="" width={62} height={62} />
        <span className="grid place-items-center rounded-full border border-[#e4daff] w-[33px] h-[33px] -mt-3.5 bg-[#222043] max-[767px]:w-[26px] max-[767px]:h-[26px] max-[767px]:-mt-2.5">
          <HomeIcon name="arrow" />
        </span>
        <span>Discover Our Story</span>
      </Link>
      <span
        className="absolute -right-0.5 top-[309px] z-4 font-[cursive] italic text-[28px] leading-[1.1] tracking-[-0.04em] text-[#8b43c8] pointer-events-none after:content-[''] after:block after:mt-[9px] after:h-0.5 after:bg-[linear-gradient(90deg,#e7b8ff,#71d6ff)] max-[1100px]:hidden"
        aria-hidden="true"
      >
        More
        <br />
        Than an
        <br />
        Agency
      </span>
      <Link
        href="/become-streamer"
        className="absolute right-2.25 bottom-[18px] z-4 w-[176px] grid grid-cols-[1fr_25px] p-[22px] gap-[15px] rounded-[22px] border border-[#e4e4fa] bg-white text-[#151938] shadow-[0_20px_55px_rgb(86_97_156_/_0.08)] text-[13px] leading-[1.4] [&>svg:first-child]:col-span-full [&>svg:first-child]:w-[33px] [&>svg:first-child]:h-[33px] [&>svg:first-child]:text-[#7743f5] max-[767px]:[&>svg:first-child]:w-[25px] max-[767px]:[&>svg:first-child]:h-[25px] [&>svg:last-child]:self-end [&>svg:last-child]:p-[5px] [&>svg:last-child]:bg-[#f2edff] [&>svg:last-child]:rounded-full [&>svg:last-child]:text-[#7851ce] max-[1100px]:min-[768px]:w-[146px] max-[1100px]:min-[768px]:right-0 max-[1100px]:min-[768px]:p-[15px] max-[767px]:right-0 max-[767px]:bottom-1 max-[767px]:w-[130px] max-[767px]:p-[13px] max-[767px]:gap-2.25 max-[767px]:text-[10px] max-[767px]:rounded-2xl"
        data-hero-node
      >
        <HomeIcon name="growth" />
        <span>
          Turn your presence
          <br />
          into possibilities.
        </span>
        <HomeIcon name="arrow" />
      </Link>
    </div>
  );
}
