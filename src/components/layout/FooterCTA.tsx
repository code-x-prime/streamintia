import Link from "next/link";
import { site } from "@/config/site";
import { NavigationIcon } from "./NavigationIcon";
export function FooterCTA() {
  return (
    <section
      data-footer-cta
      className="flex items-center justify-between gap-8 border-b border-[rgb(8_8_45_/_0.1)] py-16
        max-[1279px]:flex-col max-[1279px]:items-start
        max-[767px]:py-12
        [body:has(.home-page)_&]:hidden"
      aria-labelledby="footer-cta-title"
    >
      <div>
        <p className="flex items-center gap-2 text-[0.625rem] leading-[1.6] font-semibold tracking-[0.16em] text-primary">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_12px_rgb(18_217_244_/_0.25)]" />
          {site.footerCTA.eyebrow}
        </p>
        <h2
          id="footer-cta-title"
          className="mt-4 text-[clamp(1.875rem,3.2vw,2.75rem)] font-medium tracking-[-0.045em]"
        >
          {site.footerCTA.title}
        </h2>
        <p className="mt-4 max-w-140 text-sm leading-[1.8] text-[#5d6480]">
          {site.footerCTA.description}
        </p>
      </div>
      <div className="flex shrink-0 flex-wrap gap-3 max-[374px]:w-full max-[374px]:flex-col">
        <Link
          href={site.cta.streamer.href}
          className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md border border-white/20 bg-[linear-gradient(110deg,var(--primary),#80afff)] px-5 py-3 text-sm font-semibold whitespace-nowrap text-background shadow-[0_3px_16px_rgb(18_217_244_/_0.08)] transition-[transform,box-shadow,border-color,background] duration-250
            hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgb(18_217_244_/_0.2)] hover:no-underline
            active:translate-y-0 active:scale-98"
        >
          {site.cta.streamer.label}
          <NavigationIcon name="arrow" />
        </Link>
        <Link
          href={site.cta.agent.href}
          className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md border border-[rgb(184_188_217_/_0.25)] bg-white/2.5 px-5 py-3 text-sm font-semibold whitespace-nowrap text-text-primary transition-[transform,box-shadow,border-color,background] duration-250
            hover:-translate-y-0.5 hover:border-[rgb(18_217_244_/_0.45)] hover:bg-[rgb(18_217_244_/_0.08)] hover:no-underline
            active:translate-y-0 active:scale-98"
        >
          {site.cta.agent.label}
          <NavigationIcon name="arrow" />
        </Link>
      </div>
    </section>
  );
}
