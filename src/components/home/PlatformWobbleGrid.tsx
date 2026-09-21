import Image from "next/image";
import Link from "next/link";
import { WobbleCard } from "@/components/ui/WobbleCard";
import { HomeIcon } from "@/components/ui/HomeIcon";
import type { Platform } from "@/config/platforms";

const cardTints = [
  "linear-gradient(150deg,#0c4a5e,#082f3f 60%,#061f2c)",
  "linear-gradient(150deg,#3c1f6e,#291249 60%,#190a2e)",
  "linear-gradient(150deg,#5c0f56,#3c0a39 60%,#240524)",
  "linear-gradient(150deg,#10245e,#0a1740 60%,#060d29)",
];

export function PlatformWobbleGrid({ platforms }: { platforms: Platform[] }) {
  return (
    <div className="grid grid-cols-3 gap-4 max-[640px]:grid-cols-2 max-[640px]:gap-3">
      {platforms.map((platform, index) => (
        <WobbleCard
          key={platform.slug}
          tint={cardTints[index % cardTints.length]}
          containerClassName={`min-h-[220px] col-span-1 ${
            index === 0 || index === 3
              ? "col-span-2 max-[640px]:min-h-[170px]"
              : "max-[640px]:min-h-[170px]"
          } group/wobble`}
        >
          <Link
            href={`/platforms/${platform.slug}`}
            className="flex h-full flex-col text-white hover:no-underline"
          >
            <div className="mb-6 flex items-center justify-between max-[640px]:mb-3">
              {platform.logo ? (
                <Image
                  src={platform.logo.src}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-[0.6rem] bg-[rgb(255_255_255/0.92)] p-1 max-[640px]:h-8 max-[640px]:w-8"
                />
              ) : (
                <HomeIcon name="broadcast" className="h-10 w-10 rounded-[0.6rem] bg-[rgb(255_255_255/0.92)] p-1 max-[640px]:h-8 max-[640px]:w-8" />
              )}
              <span className="rounded-full border border-[rgb(255_255_255/0.25)] px-2 py-[0.2rem] text-[0.625rem] tracking-[0.08em] uppercase text-[rgb(255_255_255/0.7)] max-[640px]:px-1.5 max-[640px]:text-[0.5625rem]">
                Preview
              </span>
            </div>
            <h3 className="mb-2 text-[1.4rem] font-[650] tracking-[-0.02em] max-[640px]:text-[1.05rem]">
              {platform.name}
            </h3>
            <p className="max-w-[22rem] text-[0.8125rem] leading-[1.7] text-[rgb(255_255_255/0.72)] max-[640px]:text-[0.75rem] max-[640px]:leading-[1.55]">
              {platform.description}
            </p>
            <span className="mt-auto inline-flex items-center gap-[0.4rem] pt-4 text-white [&>svg]:h-4 [&>svg]:w-4 [&>svg]:transition-transform [&>svg]:duration-250 group-hover/wobble:[&>svg]:translate-x-1 max-[640px]:pt-2">
              <HomeIcon name="arrow" />
            </span>
          </Link>
        </WobbleCard>
      ))}
    </div>
  );
}
