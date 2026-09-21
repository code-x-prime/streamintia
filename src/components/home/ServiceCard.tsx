import Link from "next/link";
import Image from "next/image";
import { assets } from "@/config/assets";
import { HomeIcon, type HomeIconName } from "@/components/ui/HomeIcon";
export interface ServiceSummary {
  id: string;
  name: string;
  description: string;
  icon: HomeIconName;
}
export function ServiceCard({
  service,
  index,
}: {
  service: ServiceSummary;
  index: number;
}) {
  const isFeatured = index === 0;
  const isSixth = index === 5;

  // Base (non-homepage, e.g. /about): 3-col light card grid.
  // in-[.home-page]: homepage-only 2-col editorial list layout override.
  const baseCard =
    "relative flex min-h-60 flex-col justify-between gap-8 overflow-hidden rounded-2xl border border-[rgb(42_52_105/0.1)] bg-white p-8 shadow-[0_16px_46px_rgb(42_52_105/0.07)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-[rgb(76_120_255/0.22)] hover:bg-white hover:shadow-[0_25px_60px_rgb(42_52_105/0.13)] max-[1100px]:p-6 max-[767px]:min-h-[245px] max-[767px]:p-6";
  const featuredCard = isFeatured
    ? "row-span-3 bg-[radial-gradient(circle_at_50%_35%,rgb(18_217_244/0.12),transparent_34%),linear-gradient(150deg,#f7fdff,#f5f2ff)] max-[767px]:col-span-full max-[767px]:row-auto max-[767px]:min-h-[330px] max-[430px]:min-h-[330px]"
    : "max-[430px]:min-h-[210px]";
  const sixthCard = isSixth
    ? "max-[1100px]:col-[2/4] max-[1100px]:min-h-[180px] max-[1100px]:flex-row max-[1100px]:items-center max-[767px]:col-[1/-1] max-[767px]:min-h-[180px] max-[430px]:col-auto max-[430px]:flex-col max-[430px]:items-stretch"
    : "";
  const homePageCard = isFeatured
    ? "in-[.home-page]:row-span-5 in-[.home-page]:flex in-[.home-page]:flex-col in-[.home-page]:rounded-[23px] in-[.home-page]:border-[#e8e4f8] in-[.home-page]:bg-[radial-gradient(at_40%_40%,#d9f6ff,transparent_60%),linear-gradient(145deg,#f8faff,#efe7ff)] in-[.home-page]:p-[35px] in-[.home-page]:shadow-none in-[.home-page]:hover:translate-y-0 in-[.home-page]:hover:shadow-none max-[767px]:in-[.home-page]:mb-5 max-[767px]:in-[.home-page]:min-h-[450px] max-[767px]:in-[.home-page]:p-[25px]"
    : isSixth
      ? "in-[.home-page]:col-auto in-[.home-page]:min-h-0 in-[.home-page]:max-[1100px]:col-auto in-[.home-page]:max-[1100px]:min-h-0 in-[.home-page]:max-[1100px]:flex-col in-[.home-page]:max-[1100px]:items-stretch max-[767px]:in-[.home-page]:col-auto max-[767px]:in-[.home-page]:min-h-0"
      : "";
  const homePageCardShared =
    "in-[.home-page]:grid in-[.home-page]:min-h-0 in-[.home-page]:grid-cols-[70px_1fr] in-[.home-page]:gap-6 in-[.home-page]:border-0 in-[.home-page]:border-b in-[.home-page]:border-[#e4e6f0] in-[.home-page]:bg-transparent in-[.home-page]:p-6 in-[.home-page]:shadow-none in-[.home-page]:hover:-translate-y-0.75 in-[.home-page]:hover:bg-[linear-gradient(90deg,#f6faff,#fbf7ff)] max-[767px]:in-[.home-page]:grid-cols-[45px_1fr] max-[767px]:in-[.home-page]:gap-3.75";

  const cardClass = `${baseCard} ${featuredCard} ${sixthCard} ${homePageCardShared} ${homePageCard}`;

  const topClass = isFeatured
    ? "flex flex-col items-start justify-start gap-4 text-[#8a90ac] max-[767px]:in-[.home-page]:flex-row max-[767px]:in-[.home-page]:justify-between in-[.home-page]:flex-row in-[.home-page]:justify-between in-[.home-page]:gap-3.75"
    : isSixth
      ? "flex flex-col items-start justify-start gap-4 text-[#8a90ac] max-[1100px]:items-stretch max-[1100px]:self-stretch max-[1100px]:w-[15%] max-[1100px]:shrink-0 max-[430px]:w-auto max-[430px]:flex-row max-[430px]:items-center in-[.home-page]:w-auto in-[.home-page]:flex-col in-[.home-page]:items-start in-[.home-page]:justify-start in-[.home-page]:gap-3.75"
      : "flex flex-col items-start justify-start gap-4 text-[#8a90ac] in-[.home-page]:gap-3.75";

  const numberClass = isFeatured
    ? "text-[0.625rem] in-[.home-page]:text-[65px] in-[.home-page]:leading-none in-[.home-page]:font-semibold in-[.home-page]:text-[#b8ade1]"
    : "text-[0.625rem] in-[.home-page]:text-[10px]";

  const artWrapClass = isFeatured
    ? "relative order-first aspect-[1.25] max-h-60 w-full overflow-hidden rounded-[0.875rem] min-[768px]:absolute min-[768px]:top-12 min-[768px]:right-[-2rem] min-[768px]:order-none min-[768px]:h-[70%] min-[768px]:w-[55%] min-[768px]:opacity-60 in-[.home-page]:static in-[.home-page]:order-none in-[.home-page]:my-auto in-[.home-page]:aspect-auto in-[.home-page]:max-h-none in-[.home-page]:min-h-[240px] in-[.home-page]:rounded-none in-[.home-page]:opacity-100 max-[767px]:in-[.home-page]:min-h-[220px]"
    : "";

  const h3Class = isFeatured
    ? "text-2xl font-medium tracking-tight in-[.home-page]:text-[30px] in-[.home-page]:font-semibold"
    : "text-xl font-medium tracking-tight max-[767px]:text-[1.125rem] in-[.home-page]:text-[20px] in-[.home-page]:font-semibold max-[767px]:in-[.home-page]:text-[18px]";

  return (
    <article className={cardClass} data-reveal>
      <div className={topClass}>
        <span className={numberClass}>0{index + 1}</span>
        <HomeIcon name={service.icon} className="text-primary in-[.home-page]:text-[#7c5bde]" />
      </div>
      {isFeatured ? (
        <div className={artWrapClass}>
          <Image
            src={assets.visuals.talentRecruitment.src}
            alt={assets.visuals.talentRecruitment.alt}
            width={assets.visuals.talentRecruitment.width}
            height={assets.visuals.talentRecruitment.height}
            sizes="(max-width: 767px) 100vw, 33vw"
            className="h-full w-full object-cover"
          />
        </div>
      ) : null}
      <div>
        <h3 className={h3Class}>
          <Link
            href="/services"
            className="flex items-center justify-between gap-4 text-[#68728f] hover:text-primary hover:no-underline in-[.home-page]:text-inherit"
          >
            {service.name}
            <HomeIcon name="arrow" className="shrink-0 text-[#68728f] in-[.home-page]:text-inherit" />
          </Link>
        </h3>
        <p className="mt-4 text-[0.8125rem] leading-[1.85] text-[#68728f] in-[.home-page]:mt-2.25 in-[.home-page]:text-[12px]">
          {service.description}
        </p>
      </div>
    </article>
  );
}
