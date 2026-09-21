"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { navigation, isActiveRoute } from "@/config/navigation";
import { HeaderCTA } from "./HeaderCTA";
import { NavigationIcon } from "./NavigationIcon";
import { HomeIcon, type HomeIconName } from "@/components/ui/HomeIcon";
import { site } from "@/config/site";
const menuIcons: HomeIconName[] = [
  "globe",
  "spark",
  "compass",
  "network",
  "play",
  "growth",
  "broadcast",
];
export function MobileMenu({ brand }: { brand: React.ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => dialog.current?.close();
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const media = window.matchMedia("(min-width: 1280px)");
    const resize = () => {
      if (media.matches) dialog.current?.close();
    };
    media.addEventListener("change", resize);
    return () => {
      document.body.style.overflow = previous;
      media.removeEventListener("change", resize);
    };
  }, [open]);
  return (
    <div className="hidden max-[1279px]:block">
      <button
        ref={trigger}
        className="grid h-11 w-11 place-items-center rounded-md border border-[rgb(28_35_81_/_0.12)] bg-[#f7f8ff] text-text-primary transition-colors duration-250
          hover:bg-[rgb(18_217_244_/_0.08)]"
        aria-label="Open navigation menu"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => {
          dialog.current?.showModal();
          setOpen(true);
        }}
      >
        <NavigationIcon name={open ? "close" : "menu"} />
      </button>
      <dialog
        ref={dialog}
        id="mobile-navigation"
        className="fixed inset-2 m-auto h-[calc(100dvh-16px)] max-h-none w-[calc(100%-16px)] max-w-345 overflow-y-auto rounded-[26px] border border-white/13 [background:radial-gradient(ellipse_at_100%_0,#37205c55,transparent_55%),#0d0e2c] p-0 text-[#f7f7ff] shadow-[0_35px_100px_#05061b66] [overscroll-behavior:contain]
          open:animate-[menu-enter_250ms_cubic-bezier(0.2,0.8,0.2,1)]
          backdrop:bg-[#070819a6] backdrop:[backdrop-filter:blur(10px)]
          max-[767px]:inset-[7px] max-[767px]:h-[calc(100dvh-14px)] max-[767px]:w-[calc(100%-14px)] max-[767px]:rounded-[20px]
          motion-reduce:[&_*]:!animate-none motion-reduce:[&_*]:!transition-none"
        aria-labelledby="mobile-menu-title"
        onClose={() => {
          setOpen(false);
          trigger.current?.focus();
        }}
      >
        <div
          className="sticky top-0 z-3 flex items-center justify-between gap-4 border-b border-white/7 bg-[#0e0f2eef] px-8 py-5 [backdrop-filter:blur(18px)]
            max-[767px]:px-4.25 max-[767px]:py-3.75"
        >
          <div onClick={close}>{brand}</div>
          <button
            className="grid h-11.5 w-11.5 shrink-0 place-items-center rounded-full border border-white/35 bg-white/4 text-white transition-colors duration-250
              hover:bg-white/9.5 hover:text-[#70eaff]"
            aria-label="Close navigation menu"
            autoFocus
            onClick={close}
          >
            <NavigationIcon name="close" />
          </button>
        </div>
        <div
          className="grid grid-cols-[0.85fr_1.15fr] gap-12.5 px-8 pt-7 pb-8
            max-[767px]:block max-[767px]:px-4 max-[767px]:pt-5.5 max-[767px]:pb-[max(22px,env(safe-area-inset-bottom))]"
        >
          <aside
            className="relative isolate self-stretch overflow-hidden rounded-[20px] border border-white/6 bg-[radial-gradient(at_20%_10%,#16364e88,transparent_50%),linear-gradient(140deg,#1b1d41,#211537)] p-[clamp(26px,4vw,50px)]
              max-[767px]:hidden"
          >
            <p className="flex items-center gap-2 text-[9px] leading-[1.6] font-[650] tracking-[0.2em] text-[#74dcf5]">
              YOUR NEXT CHAPTER
            </p>
            <h2 className="relative z-1 mt-10 font-body text-[clamp(42px,5.3vw,76px)] leading-none font-semibold tracking-[-0.065em] text-white">
              Find your
              <br />
              place.
              <br />
              <span className="bg-[linear-gradient(110deg,#43e8ff,#aa83ff,#ec88fa)] bg-clip-text text-transparent">
                Go further.
              </span>
            </h2>
            <p className="relative z-1 mt-5.5 text-[13px] leading-[1.85] text-[#b6bad4]">
              For the people who create.
              <br />
              And the people who connect them.
            </p>
            <div className="relative mt-11.25 grid gap-3">
              <Link
                href="/become-streamer"
                onClick={close}
                className="flex items-center gap-3.5 rounded-[14px] border border-white/9.5 bg-white/2.5 p-4 text-[13px] text-white transition-[background,transform] duration-200
                  hover:-translate-y-0.5 hover:bg-white/6.5
                  [&_svg]:w-5.5 [&_svg]:shrink-0 [&_svg]:text-[#a994f5]
                  [&_svg:last-child]:ml-auto [&_svg:last-child]:w-4"
              >
                <HomeIcon name="broadcast" />
                <span>
                  Creator pathway
                  <small className="mt-1 block text-[10px] text-[#929bbb]">
                    Bring your voice to life
                  </small>
                </span>
                <NavigationIcon name="arrow" />
              </Link>
              <Link
                href="/become-agent"
                onClick={close}
                className="flex items-center gap-3.5 rounded-[14px] border border-white/9.5 bg-white/2.5 p-4 text-[13px] text-white transition-[background,transform] duration-200
                  hover:-translate-y-0.5 hover:bg-white/6.5
                  [&_svg]:w-5.5 [&_svg]:shrink-0 [&_svg]:text-[#a994f5]
                  [&_svg:last-child]:ml-auto [&_svg:last-child]:w-4"
              >
                <HomeIcon name="network" />
                <span>
                  Agent pathway
                  <small className="mt-1 block text-[10px] text-[#929bbb]">
                    Build something together
                  </small>
                </span>
                <NavigationIcon name="arrow" />
              </Link>
            </div>
            <span
              className="absolute -z-1 h-112.5 w-112.5 -translate-y-0 rounded-full border border-[#c0a8ff22] shadow-[0_0_0_45px_#b996ff06,0_0_0_90px_#b996ff04]"
              style={{ right: "-250px", top: "100px" }}
              aria-hidden="true"
            />
          </aside>
          <div className="min-w-0 self-center">
            <p
              id="mobile-menu-title"
              className="text-[9px] leading-[1.6] font-[650] tracking-[0.2em] text-[#74dcf5]"
            >
              EXPLORE STREAMINTIA
            </p>
            <nav aria-label="Mobile navigation" className="mt-4">
              <ul className="grid gap-1 max-[767px]:gap-0.75">
                {navigation.map((item, index) => (
                  <li
                    key={item.label}
                    style={{ "--item-index": index } as React.CSSProperties}
                    className="animate-[menu-item-enter_300ms_cubic-bezier(0.2,0.8,0.2,1)_both] [animation-delay:calc(var(--item-index)*22ms)]"
                  >
                    {item.children ? (
                      <details className="group/mgroup [&[open]>summary]:bg-white/2 [&[open]>summary_svg:first-child]:rotate-0">
                        <summary
                          data-active={item.children.some((child) =>
                            isActiveRoute(pathname, child.href),
                          )}
                          className="flex min-h-15 cursor-pointer list-none items-center gap-3.5 rounded-[13px] border border-transparent px-3.25 py-2.25 text-[clamp(17px,1.5vw,22px)] font-medium text-[#e5e5f4] transition-[background,border-color] duration-180
                            marker:hidden
                            hover:border-white/3.5 hover:bg-white/2
                            data-[active=true]:bg-[linear-gradient(100deg,#2acde811,#9c68fa0d)] data-[active=true]:text-[#8fefff]
                            max-[767px]:min-h-13.5 max-[767px]:gap-3 max-[767px]:px-2.5 max-[767px]:py-2 max-[767px]:text-[18px]
                            [&::-webkit-details-marker]:hidden
                            [&_svg]:w-4 [&_svg]:shrink-0 [&_svg]:text-[#777b9e]"
                        >
                          <span className="grid h-8.5 w-8.5 shrink-0 place-items-center rounded-[10px] border border-white/4 bg-white/2.5 text-[#9d9bc5] [&_svg]:h-4.25 [&_svg]:w-4.25">
                            <HomeIcon name={menuIcons[index]} />
                          </span>
                          <span className="flex-1">{item.label}</span>
                          <NavigationIcon name="chevron" />
                        </summary>
                        <ul className="grid gap-1.25 py-2.25 pr-2 pb-2.5 pl-15 max-[767px]:pl-11.25">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                aria-current={
                                  isActiveRoute(pathname, child.href)
                                    ? "page"
                                    : undefined
                                }
                                onClick={close}
                                className="block min-h-13.5 rounded-[10px] bg-white/1 px-3.5 py-3 text-sm text-[#e3dcff] transition-colors duration-200
                                  hover:bg-white/3
                                  [&_span]:mt-1 [&_span]:block [&_span]:text-[11px] [&_span]:leading-[1.5] [&_span]:text-[#969dba]"
                              >
                                {child.label}
                                <span>{child.description}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </details>
                    ) : (
                      <Link
                        href={item.href!}
                        aria-current={
                          isActiveRoute(pathname, item.href!)
                            ? "page"
                            : undefined
                        }
                        onClick={close}
                        className="flex min-h-15 items-center gap-3.5 rounded-[13px] border border-transparent px-3.25 py-2.25 text-[clamp(17px,1.5vw,22px)] font-medium text-[#e5e5f4] transition-[background,border-color] duration-180
                          hover:border-white/3.5 hover:bg-white/2 hover:no-underline
                          aria-[current=page]:bg-[linear-gradient(100deg,#2acde811,#9c68fa0d)] aria-[current=page]:text-[#8fefff] aria-[current=page]:no-underline
                          max-[767px]:min-h-13.5 max-[767px]:gap-3 max-[767px]:px-2.5 max-[767px]:py-2 max-[767px]:text-[18px]"
                      >
                        <span className="grid h-8.5 w-8.5 shrink-0 place-items-center rounded-[10px] border border-white/4 bg-white/2.5 text-[#9d9bc5] [&_svg]:h-4.25 [&_svg]:w-4.25">
                          <HomeIcon name={menuIcons[index]} />
                        </span>
                        <span className="flex-1">{item.label}</span>
                        <NavigationIcon name="arrow" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-5 grid gap-5 border-t border-white/7 pt-5.75 max-[767px]:mt-4.75 max-[767px]:gap-4.25 max-[767px]:pt-5">
              <div>
                <span className="flex items-center gap-1.75 text-[8px] tracking-[0.16em] text-[#969ebf]">
                  <i className="h-1.25 w-1.25 rounded-full bg-[#77e6e0]" />
                  LET’S CONNECT
                </span>
                <a
                  className="mt-2 inline-block text-xs text-[#c5c7df] break-anywhere"
                  href={`mailto:${site.contact.email}`}
                >
                  {site.contact.email}
                </a>
              </div>
              <HeaderCTA onClick={close} variant="mobile-menu" />
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
