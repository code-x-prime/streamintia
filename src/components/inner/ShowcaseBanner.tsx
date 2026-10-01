import Image from "next/image";
import type { ImageAsset } from "@/config/assets";
import { ButtonLink } from "@/components/ui/Button";
import { HomeIcon } from "@/components/ui/HomeIcon";

export function ShowcaseBanner({
  eyebrow,
  title,
  description,
  image,
  cta,
  flip = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  image: ImageAsset;
  cta?: { label: string; href: string };
  flip?: boolean;
}) {
  return (
    <section className="home-section px-(--home-gutter) py-[clamp(3rem,7vw,6rem)] max-[767px]:py-10">
      <div className="home-container">
        <div className="relative isolate overflow-hidden rounded-[2rem] [background:radial-gradient(circle_at_20%_20%,rgb(139_77_255/0.35),transparent_45%),radial-gradient(circle_at_85%_80%,rgb(18_217_244/0.22),transparent_40%),#0b0c2b] shadow-[0_40px_100px_rgb(35_44_98/0.28)] max-[767px]:rounded-3xl">
          <div
            className={`grid items-center gap-6 px-[clamp(1.5rem,4vw,4rem)] py-[clamp(2rem,5vw,4rem)] lg:grid-cols-[0.8fr_1.2fr] lg:gap-10 ${
              flip ? "lg:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div className="min-w-0 text-white">
              <p className="text-[0.6875rem] font-semibold tracking-[0.16em] text-[#6feafb] uppercase">
                {eyebrow}
              </p>
              <h2 className="mt-4 text-[clamp(2rem,4.2vw,3.5rem)]! leading-[1.05]! font-semibold! tracking-[-0.05em]! text-white!">
                {title}
              </h2>
              <p className="mt-5 max-w-[30rem] text-base leading-[1.75] text-[#b6bad4]">
                {description}
              </p>
              {cta ? (
                <ButtonLink href={cta.href} variant="secondary" className="mt-7 bg-white! text-[#0a1038]!">
                  {cta.label} <HomeIcon name="arrow" />
                </ButtonLink>
              ) : null}
            </div>
            <div className="relative mx-auto w-full max-w-[44rem]">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(max-width: 1024px) 92vw, 640px"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
