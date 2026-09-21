import Link from "next/link";
import Image from "next/image";
import type { Platform } from "@/config/platforms";
import { HomeIcon } from "@/components/ui/HomeIcon";
export function TrustStrip({ platforms }: { platforms: Platform[] }) {
  return (
    <section
      id="our-network"
      className="pt-[45px] pb-[30px] bg-white"
      aria-label="Streaming ecosystem"
    >
      <div className="home-container">
        <div className="trust-intro grid grid-cols-2 gap-x-10 gap-y-2 border-t border-[#e8e9f4] pt-[35px] max-[767px]:grid-cols-1">
          <p className="home-eyebrow col-span-full text-[#727c9f] mb-[3px]">
            CONNECTED BY POSSIBILITY
          </p>
          <h2 className="text-[clamp(1.35rem,2.2vw,2rem)] text-[#17183f]">
            Connected to the streaming ecosystem.
          </h2>
          <p className="text-[13px] self-center justify-self-end max-[767px]:justify-self-start">
            Explore our directory. Programme availability is being confirmed.
          </p>
        </div>
        <div
          className="flex gap-[30px] overflow-x-auto py-[35px] max-[1023px]:grid max-[1023px]:grid-cols-2 max-[1023px]:gap-0 max-[1023px]:overflow-visible max-[1023px]:py-5 max-[639px]:grid-cols-1"
          data-stagger
        >
          {platforms.map((platform) => (
            <Link
              key={platform.slug}
              href={`/platforms/${platform.slug}`}
              data-reveal
              className="flex flex-1 basis-[220px] items-center gap-[15px] text-[#657093] px-5 py-3 border-r border-[#e6e8f2] transition-colors duration-200 last:border-0 hover:text-[#6a4be4] [&>svg:first-child]:w-7 [&>svg:first-child]:h-7 [&>svg:last-child]:w-4 [&>svg:last-child]:ml-auto max-[1023px]:basis-auto max-[1023px]:border-r-0 max-[1023px]:border-b max-[1023px]:border-[#e6e8f2] max-[1023px]:px-0 max-[1023px]:py-4"
            >
              {platform.logo ? (
                <Image
                  src={platform.logo.src}
                  alt=""
                  width={48}
                  height={48}
                  className="shrink-0 max-[1023px]:h-9 max-[1023px]:w-9"
                />
              ) : (
                <HomeIcon name="broadcast" className="shrink-0" />
              )}
              <span className="min-w-0 flex-1 text-[19px] font-[650] tracking-[-0.04em] max-[1023px]:text-[16px]">
                {platform.name}
                <small className="block font-normal tracking-normal text-[10px] mt-1 text-[#838ca5]">
                  {platform.status === "active"
                    ? platform.category
                    : "Directory preview"}
                </small>
              </span>
              <HomeIcon name="arrow" className="shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
