import Image from "next/image";
import Link from "next/link";
import { assets } from "@/config/assets";
import { HomeIcon } from "@/components/ui/HomeIcon";

const cards = [
  {
    id: "streamer",
    eyebrow: "FOR STREAMERS",
    title: "Go live, grow and be seen.",
    note: "Guidance, a clear path and people on your side.",
    cta: "Apply as a Streamer",
    href: "/apply?role=streamer",
    image: assets.visuals.showcaseStreamer,
  },
  {
    id: "agent",
    eyebrow: "FOR AGENTS",
    title: "Build a network with purpose.",
    note: "Earnings vary and are never guaranteed.",
    cta: "Apply as an Agent",
    href: "/apply?role=agent",
    image: assets.visuals.showcaseAgent,
  },
] as const;

export function ShowcasePair() {
  return (
    <section className="home-section py-[clamp(2.5rem,5vw,4rem)]" id="showcase">
      <div className="home-container">
        <div className="grid grid-cols-2 gap-5 max-[1000px]:grid-cols-1" data-stagger>
          {cards.map((card) => (
            <article
              key={card.id}
              data-reveal
              className="relative isolate flex min-h-[19rem] overflow-hidden rounded-3xl [background:radial-gradient(circle_at_15%_15%,rgb(124_58_237/0.38),transparent_50%),radial-gradient(circle_at_90%_90%,rgb(218_38_118/0.22),transparent_45%),#0b0114] shadow-[0_30px_70px_rgb(35_44_98/0.22)] max-[560px]:min-h-0 max-[560px]:flex-col"
            >
              <div className="relative z-10 flex w-[50%] flex-col justify-center p-7 max-[1280px]:p-6 max-[1000px]:w-[54%] text-white max-[560px]:w-full max-[560px]:p-6 max-[560px]:pb-2">
                <p className="text-[0.625rem] font-semibold tracking-[0.16em] text-[#f9a8d4]">
                  {card.eyebrow}
                </p>
                <h3 className="mt-3 text-[clamp(1.5rem,2.3vw,2rem)]! leading-[1.1]! font-semibold! tracking-[-0.04em]! text-white!">
                  {card.title}
                </h3>
                <p className="mt-3 max-w-[16rem] text-sm leading-[1.6] text-[#b6bad4]">
                  {card.note}
                </p>
                <Link
                  href={card.href}
                  className="mt-5 inline-flex w-fit items-center gap-2.5 rounded-xl bg-white px-4 py-2.5 text-[0.8125rem] font-semibold text-[#0a1038] transition-transform duration-200 hover:-translate-y-0.5 hover:no-underline [&_svg]:h-4 [&_svg]:w-4"
                >
                  {card.cta}
                  <HomeIcon name="arrow" />
                </Link>
              </div>
              <div className="pointer-events-none absolute top-1/2 right-3 w-[52%] max-[1280px]:w-[48%] max-[1000px]:w-[46%] -translate-y-1/2 max-[560px]:static max-[560px]:mx-auto max-[560px]:w-[78%] max-[560px]:translate-y-0">
                <Image
                  src={card.image.src}
                  alt={card.image.alt}
                  width={card.image.width}
                  height={card.image.height}
                  sizes="(max-width: 560px) 80vw, (max-width: 900px) 50vw, 30vw"
                  className="h-auto w-full"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
