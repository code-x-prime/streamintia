import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionGlow } from "@/components/home/SectionGlow";
import { AssetImage } from "@/components/ui/AssetImage";
import type { ImageAsset } from "@/config/assets";
export function InnerPageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  children,
  visual,
  image,
  compact = false,
  glow = true,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  breadcrumb: string;
  children?: React.ReactNode;
  visual?: React.ReactNode;
  image?: ImageAsset;
  compact?: boolean;
  glow?: boolean;
}) {
  return (
    <section
      className={`relative isolate overflow-hidden border-b border-[rgb(28_35_81_/_0.08)] bg-[radial-gradient(circle_at_82%_28%,rgb(139_77_255/0.11),transparent_27%),radial-gradient(circle_at_12%_82%,rgb(18_217_244/0.09),transparent_24%),linear-gradient(145deg,#ffffff,#f5f7ff)] after:absolute after:inset-0 after:-z-10 after:content-[''] after:opacity-35 after:[background-image:linear-gradient(rgb(34_47_98/0.045)_1px,transparent_1px),linear-gradient(90deg,rgb(34_47_98/0.045)_1px,transparent_1px)] after:[background-size:64px_64px] after:[mask-image:linear-gradient(to_right,transparent,black_45%,transparent)] [&>.home-container>nav]:pt-8 max-[767px]:[&>.home-container>nav]:pt-6 [&>.home-container>nav]:text-[#5d6683] [&_h1]:text-[#0a1038]`}
    >
      {glow ? <SectionGlow /> : null}
      <div className="home-container">
        <Breadcrumbs items={[{ label: breadcrumb }]} />
        <div
          className={`grid min-h-[530px] items-center gap-12 py-14 pb-16 max-[1100px]:gap-8 max-[767px]:min-h-0 max-[767px]:grid-cols-1 max-[767px]:gap-4 max-[767px]:py-10 ${
            !visual && !image
              ? "max-w-[55rem] grid-cols-1"
              : "grid-cols-[1.2fr_1fr] max-[1100px]:grid-cols-[1.3fr_1fr]"
          } ${
            compact
              ? "min-h-0 py-10 pb-12 max-[767px]:pb-10"
              : ""
          }`}
        >
          <div>
            <p
              className="text-[0.6875rem]! text-(--inner-accent) uppercase"
              data-inner-hero
            >
              {eyebrow}
            </p>
            <h1
              data-inner-hero
              className={`font-medium tracking-[-0.055em] text-[#0a1038] ${
                compact
                  ? "text-[clamp(2.6rem,4.4vw,4rem)] max-[767px]:text-[2.5rem]"
                  : "text-[clamp(2.6rem,4.9vw,4.5rem)] leading-[1.06] max-[767px]:text-[clamp(2.5rem,8vw,3.5rem)]"
              } leading-[1.06]`}
            >
              {title}
            </h1>
            <p
              className="home-lead mb-7 max-w-[35rem] text-[1rem] text-[#5d6683]"
              data-inner-hero
            >
              {description}
            </p>
            {children ? (
              <div className="home-actions mt-6" data-inner-hero>
                {children}
              </div>
            ) : null}
          </div>
          {visual || image ? (
            <div
              className={`relative isolate ${
                compact
                  ? "w-full max-w-[460px] max-[767px]:max-w-[250px]"
                  : "max-[767px]:w-full max-[767px]:max-w-[360px] max-[767px]:justify-self-center"
              } ${
                compact ? "justify-self-center max-[767px]:justify-self-auto" : ""
              } has-[>img]:before:absolute has-[>img]:before:-inset-[0.45rem] has-[>img]:before:-z-10 has-[>img]:before:rounded-[1.65rem] has-[>img]:before:bg-[linear-gradient(135deg,rgb(18_217_244/0.34),transparent_42%,rgb(139_77_255/0.3))] has-[>img]:before:blur-[0.1px] has-[>img]:before:content-[''] has-[>img]:after:pointer-events-none has-[>img]:after:absolute has-[>img]:after:inset-0 has-[>img]:after:rounded-[1.35rem] has-[>img]:after:bg-[linear-gradient(180deg,transparent_58%,rgb(8_8_45/0.12))] has-[>img]:after:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.45)] has-[>img]:after:content-[''] [&>img]:block [&>img]:w-full [&>img]:rounded-[1.35rem] [&>img]:object-cover [&>img]:object-center [&>img]:shadow-[0_30px_80px_rgb(35_44_98/0.18)] [&>img]:transition-[transform,box-shadow] [&>img]:duration-500 [&>img]:ease-(--ease-standard) hover:[&>img]:-translate-y-1 hover:[&>img]:scale-[1.008] hover:[&>img]:shadow-[0_38px_95px_rgb(35_44_98/0.23)] ${
                compact
                  ? "[&>img]:h-[clamp(280px,28vw,380px)] max-[767px]:[&>img]:h-[clamp(280px,88vw,390px)]"
                  : "[&>img]:h-[clamp(330px,34vw,450px)] max-[767px]:[&>img]:h-[clamp(280px,88vw,390px)]"
              }`}
              data-inner-hero
            >
              {image ? <AssetImage asset={image} priority /> : visual}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
