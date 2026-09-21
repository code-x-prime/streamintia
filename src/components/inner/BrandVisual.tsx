import Image from "next/image";
import { site } from "@/config/site";
import { HomeIcon } from "@/components/ui/HomeIcon";
export function BrandVisual({
  variant = "network",
  className = "",
}: {
  variant?: "network" | "streamer" | "agent" | "conversation";
  className?: string;
}) {
  const centreBase =
    "relative aspect-square w-[52%] rounded-full border border-[rgb(73_87_161_/_0.14)] bg-[radial-gradient(circle_at_24%_20%,rgb(18_217_244_/_0.12),transparent_34%),linear-gradient(145deg,#ffffff,#eef1ff)] shadow-[0_28px_75px_rgb(39_49_105_/_0.14)] [&>img]:h-auto [&>img]:w-full [&>img]:object-contain";
  const centreByVariant: Record<string, string> = {
    network: centreBase,
    agent: `${centreBase} rounded-2xl bg-[linear-gradient(145deg,#ffffff,#f0f3ff)]`,
    streamer:
      "relative flex aspect-auto h-[62%] w-[47%] items-center rounded-2xl border border-[rgb(18_217_244_/_0.25)] bg-[linear-gradient(145deg,#ffffff,#f0f3ff)] shadow-[0_28px_75px_rgb(39_49_105_/_0.14)] [&>img]:h-auto [&>img]:w-full [&>img]:object-contain",
    conversation: `${centreBase} w-[45%]`,
  };
  const visualTagBase =
    "absolute flex items-center gap-[0.6rem] rounded-lg border border-[rgb(53_68_133_/_0.13)] bg-[rgb(255_255_255_/_0.9)] px-4 py-[0.8rem] text-[0.5rem] tracking-[0.13em] text-[#3f4969] shadow-[0_12px_34px_rgb(39_49_105_/_0.1)] [&>svg]:h-[17px] [&>svg]:w-[17px] [&>svg]:text-(--inner-accent)";
  const networkPersonBase =
    "absolute grid h-[38px] w-[38px] place-items-center rounded-full border border-[rgb(53_68_133_/_0.13)] bg-[rgb(255_255_255_/_0.9)] text-(--inner-accent) shadow-[0_12px_34px_rgb(39_49_105_/_0.1)] [&>svg]:h-[18px] [&>svg]:w-[18px]";
  return (
    <div
      className={`relative isolate grid aspect-square w-full place-items-center before:absolute before:inset-[10%] before:rounded-full before:bg-[radial-gradient(circle,rgb(139_77_255_/_0.12),transparent_70%)] before:content-[''] ${className}`}
      aria-hidden="true"
    >
      <div
        className={`absolute inset-[10%] rounded-full border ${
          variant === "agent"
            ? "border-[rgb(187_154_255/0.3)] rotate-[10deg] scale-y-[0.7]"
            : "border-[rgb(18_217_244/0.16)] rotate-[-30deg] scale-y-[0.7]"
        }`}
      />
      <div className="absolute inset-[18%] rotate-[40deg] scale-y-[0.8] rounded-full border border-[rgb(139_77_255/0.25)]" />
      <div className={centreByVariant[variant]}>
        <Image
          src={site.logos.icon}
          alt=""
          width={1000}
          height={1000}
          sizes="(max-width: 768px) 160px, 230px"
        />
      </div>
      {variant === "streamer" ? (
        <>
          <span className={`${visualTagBase} top-[10%] left-[6%]`}>
            <HomeIcon name="broadcast" />
            YOUR VOICE, LIVE
          </span>
          <div className="absolute right-0 bottom-[20%] left-0 flex h-[80px] items-center justify-center gap-1">
            {Array.from({ length: 19 }, (_, index) => (
              <i
                key={index}
                className="w-[3px] rounded-[4px] bg-[linear-gradient(var(--primary),var(--purple))] opacity-70"
                style={{
                  height: `${[14, 24, 38, 18, 48, 32, 56, 24, 40, 64, 30, 46, 18, 54, 26, 38, 16, 30, 12][index]}px`,
                }}
              />
            ))}
          </div>
          <span className="absolute right-0 bottom-[10%] left-0 text-center text-[0.4375rem] tracking-[0.18em] text-(--home-muted)">
            PERSONALITY. CREATIVITY. CONNECTION.
          </span>
        </>
      ) : variant === "conversation" ? (
        <>
          <span className={`${visualTagBase} top-[10%] left-[6%]`}>
            A QUESTION. AN IDEA.
          </span>
          <span className={`${visualTagBase} right-0 bottom-[12%]`}>
            LET’S TALK ABOUT IT.
            <HomeIcon name="arrow" />
          </span>
        </>
      ) : (
        <>
          <span className={`${visualTagBase} top-[10%] left-[6%]`}>
            <HomeIcon name="network" />
            {variant === "agent"
              ? "YOUR CREATOR NETWORK"
              : "CONNECTED BY POTENTIAL"}
          </span>
          <span className={`${networkPersonBase} top-[35%] right-[6%]`}>
            <HomeIcon name="spark" />
          </span>
          <span className={`${networkPersonBase} bottom-[20%] left-[12%]`}>
            <HomeIcon name="broadcast" />
          </span>
          <span className={`${networkPersonBase} right-[20%] bottom-[18%]`}>
            <HomeIcon name="growth" />
          </span>
          <span className="absolute right-0 bottom-[10%] left-0 text-center text-[0.4375rem] tracking-[0.18em] text-(--home-muted)">
            {variant === "agent"
              ? "DISCOVER. SUPPORT. GROW."
              : "CREATORS. AGENTS. OPPORTUNITIES."}
          </span>
        </>
      )}
    </div>
  );
}
