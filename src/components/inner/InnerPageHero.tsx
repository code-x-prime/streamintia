import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import type { ImageAsset } from "@/config/assets";
import { site } from "@/config/site";

export interface HeroChip {
  title: string;
  caption: string;
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4.5 w-4.5"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m4 7.5 8 5.5 8-5.5" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4.5 w-4.5"
      aria-hidden="true"
    >
      <path d="M4 20l1.3-4.1A8 8 0 1 1 8.3 18.8L4 20Z" />
      <path d="M9.2 8.9c.3 2.6 2.5 4.8 5.1 5.3l1-1.2-1.9-.9-.8.6a4 4 0 0 1-1.7-1.7l.6-.8-.9-1.9-1.4.6Z" />
    </svg>
  );
}

export function InnerPageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  children,
  visual,
  image,
  chips,
  compact = false,
  glow = true,
  showContact,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  breadcrumb: string;
  children?: React.ReactNode;
  visual?: React.ReactNode;
  image?: ImageAsset;
  chips?: readonly HeroChip[];
  compact?: boolean;
  glow?: boolean;
  showContact?: boolean;
}) {
  const hasMedia = Boolean(visual || image);
  const contact = showContact ?? (hasMedia && !compact);
  const { email, whatsapp } = site.contact;

  return (
    <section className="relative isolate overflow-hidden border-b border-[rgb(28_35_81/0.08)] bg-[linear-gradient(180deg,#ffffff,#f6f7ff)] [&_nav]:text-[#5d6683]">
      {glow ? (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 right-[-12%] -z-10 h-[30rem] w-[30rem] rounded-full bg-[#7c3aed]/15 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[-8rem] left-[-10%] -z-10 h-[26rem] w-[26rem] rounded-full bg-[#da2676]/15 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[image:radial-gradient(rgb(34_47_98/0.09)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
          />
        </>
      ) : null}
      <div className="home-container">
        <div className="pt-6 max-[767px]:pt-5">
          <Breadcrumbs items={[{ label: breadcrumb }]} />
        </div>
        <div
          className={`grid items-center ${
            hasMedia
              ? "gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
              : "max-w-[55rem] gap-6"
          } ${
            compact
              ? "py-8 pb-12 max-[767px]:py-6 max-[767px]:pb-10"
              : "py-10 pb-16 lg:py-14 lg:pb-20 max-[767px]:pb-12"
          }`}
        >
          <div className="min-w-0">
            <p
              data-inner-hero
              className="inline-flex items-center gap-2 rounded-full border border-[rgb(28_35_81/0.1)] bg-white/80 py-1.5 pr-3.5 pl-2.5 text-[0.6875rem] font-semibold tracking-[0.14em] text-[#5b4bd4] uppercase shadow-[0_6px_20px_rgb(35_44_98/0.06)] backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[image:linear-gradient(135deg,#da2676,#7c3aed)] shadow-[0_0_0_4px_rgb(124_58_237/0.12)]" />
              {eyebrow}
            </p>
            <h1
              data-inner-hero
              className={`mt-5 font-semibold! tracking-[-0.045em]! text-[#0a1038] ${
                compact
                  ? "text-[clamp(2.25rem,4.2vw,3.5rem)]! leading-[1.06]!"
                  : "text-[clamp(2.5rem,5.2vw,4.5rem)]! leading-[1.04]!"
              }`}
            >
              {title}
            </h1>
            <p
              data-inner-hero
              className="mt-5 max-w-[34rem] text-[1.0625rem] leading-[1.75] text-[#5d6683] max-[767px]:text-base"
            >
              {description}
            </p>
            {children ? (
              <div
                data-inner-hero
                className="home-actions mt-7 flex flex-wrap items-center gap-3"
              >
                {children}
              </div>
            ) : null}
            {contact ? (
              <div
                data-inner-hero
                className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[rgb(28_35_81/0.1)] pt-6 text-sm"
              >
                <span className="text-[0.6875rem] font-semibold tracking-[0.14em] text-[#7a84a6] uppercase">
                  Talk to us
                </span>
                {email ? (
                  <a
                    href={`mailto:${email}`}
                    className="group inline-flex min-w-0 items-center gap-2.5 font-medium text-[#0a1038] hover:no-underline"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#da2676]/12 text-[#b5005d] transition-colors group-hover:bg-[#da2676]/22">
                      <MailIcon />
                    </span>
                    <span className="min-w-0 [overflow-wrap:anywhere] group-hover:text-[#5b4bd4]">
                      {email}
                    </span>
                  </a>
                ) : null}
                {whatsapp ? (
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 font-medium text-[#0a1038] hover:no-underline"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#25d366]/14 text-[#1aa152] transition-colors group-hover:bg-[#25d366]/24">
                      <WhatsAppIcon />
                    </span>
                    <span className="group-hover:text-[#5b4bd4]">WhatsApp</span>
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>
          {hasMedia ? (
            <div
              data-inner-hero
              className={`relative mx-auto w-full ${
                compact ? "max-w-[30rem]" : "max-w-[32rem] lg:max-w-none"
              }`}
            >
              <div
                aria-hidden="true"
                className="absolute -right-3 -bottom-3 h-full w-full rounded-[2rem] border border-[#7c3aed]/25 bg-[#7c3aed]/6 max-[767px]:-right-2 max-[767px]:-bottom-2"
              />
              <div
                className={`relative overflow-hidden rounded-[2rem] bg-[#e9ecfb] shadow-[0_40px_90px_rgb(35_44_98/0.22)] ring-1 ring-white/80 max-[767px]:rounded-3xl ${
                  compact
                    ? "aspect-[4/3.4]"
                    : "aspect-[4/4.6] min-[640px]:aspect-[4/4.4] lg:aspect-[4/4.6]"
                }`}
              >
                {image ? (
                  <>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      priority
                      sizes="(max-width: 1024px) 90vw, 520px"
                      className="scale-[1.04] object-cover object-center"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[image:linear-gradient(180deg,transparent_55%,rgb(8_8_45/0.38))]"
                    />
                  </>
                ) : (
                  visual
                )}
              </div>
              {chips && chips[0] ? (
                <div className="absolute top-6 left-3 flex max-w-[13.5rem] items-center gap-3 rounded-2xl border border-white/70 bg-white/85 px-3.5 py-2.5 shadow-[0_18px_45px_rgb(35_44_98/0.16)] backdrop-blur-md min-[640px]:-left-6 min-[640px]:max-w-[15rem] min-[640px]:px-4 min-[640px]:py-3">
                  <span className="h-9 w-9 shrink-0 rounded-xl bg-[image:linear-gradient(135deg,#da2676,#7c3aed)] shadow-[0_8px_18px_rgb(124_58_237/0.35)]" />
                  <span className="min-w-0">
                    <span className="block text-[0.8125rem] leading-tight font-semibold text-[#0a1038]">
                      {chips[0].title}
                    </span>
                    <span className="mt-0.5 block text-[0.6875rem] leading-snug text-[#68728f]">
                      {chips[0].caption}
                    </span>
                  </span>
                </div>
              ) : null}
              {chips && chips[1] ? (
                <div className="absolute right-3 bottom-6 flex max-w-[13.5rem] items-center gap-3 rounded-2xl border border-white/70 bg-white/85 px-3.5 py-2.5 shadow-[0_18px_45px_rgb(35_44_98/0.16)] backdrop-blur-md min-[640px]:-right-6 min-[640px]:max-w-[15rem] min-[640px]:px-4 min-[640px]:py-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#1f0233]">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#da2676] shadow-[0_0_0_4px_rgb(218_38_118/0.25)]" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.8125rem] leading-tight font-semibold text-[#0a1038]">
                      {chips[1].title}
                    </span>
                    <span className="mt-0.5 block text-[0.6875rem] leading-snug text-[#68728f]">
                      {chips[1].caption}
                    </span>
                  </span>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
