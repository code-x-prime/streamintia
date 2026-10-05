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
          className="grid grid-cols-4 gap-0 py-[35px] max-[1023px]:grid-cols-2 max-[1023px]:gap-x-10 max-[1023px]:py-5 max-[639px]:gap-x-3 max-[639px]:gap-y-3"
          data-stagger
        >
          {platforms.map((platform) => (
            <Link
              key={platform.slug}
              href={`/platforms/${platform.slug}`}
              data-reveal
              className="flex min-w-0 items-center gap-3 text-[#657093] px-4 py-3 max-[639px]:flex-col max-[639px]:items-start max-[639px]:gap-3 max-[639px]:rounded-2xl max-[639px]:border max-[639px]:border-[#e6e8f2] max-[639px]:p-4 border-r border-[#e6e8f2] transition-colors duration-200 last:border-0 max-[639px]:last:border hover:text-[#6a4be4] [&>svg:first-child]:w-7 [&>svg:first-child]:h-7 [&>svg:last-child]:w-4 [&>svg:last-child]:ml-auto max-[1023px]:border-r-0 max-[1023px]:border-b max-[1023px]:border-[#e6e8f2] max-[1023px]:px-0 max-[1023px]:py-4 max-[639px]:border-b"
            >
              {platform.logo ? (
                <Image
                  src={platform.logo.src}
                  alt=""
                  width={64}
                  height={64}
                  className="h-16 w-16 shrink-0 rounded-2xl max-[1023px]:h-14 max-[1023px]:w-14 max-[639px]:h-16 max-[639px]:w-16"
                />
              ) : (
                <HomeIcon name="broadcast" className="shrink-0" />
              )}
              <span className="min-w-0 flex-1 text-[20px] font-[650] tracking-[-0.04em] max-[1023px]:text-[17px] max-[639px]:w-full max-[639px]:flex-none">
                {platform.name}
                <small className="block font-normal tracking-normal text-[10px] mt-1 text-[#838ca5]">
                  {platform.status === "active"
                    ? platform.category
                    : "Directory preview"}
                </small>
              </span>
              <HomeIcon name="arrow" className="shrink-0 max-[639px]:hidden" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
