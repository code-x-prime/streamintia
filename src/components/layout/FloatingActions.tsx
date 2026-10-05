"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/config/site";

function Icon({
  d,
  className = "h-[1.125rem] w-[1.125rem]",
}: {
  d: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

const CIRCUMFERENCE = 2 * Math.PI * 21;

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const value =
        max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      setProgress(value);
      setShowTop(window.scrollY > 400);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const scrollTween = useRef<gsap.core.Tween | null>(null);

  const toTop = () => {
    scrollTween.current?.kill();
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce || window.scrollY < 8) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }
    const state = { y: window.scrollY };
    // longer pages take a little longer, but never feel slow
    const duration = Math.min(1.4, Math.max(0.6, window.scrollY / 3500));
    const stop = () => scrollTween.current?.kill();
    window.addEventListener("wheel", stop, { once: true, passive: true });
    window.addEventListener("touchstart", stop, { once: true, passive: true });
    scrollTween.current = gsap.to(state, {
      y: 0,
      duration,
      ease: "power3.inOut",
      onUpdate: () => window.scrollTo(0, state.y),
    });
  };

  useEffect(() => {
    return () => {
      scrollTween.current?.kill();
    };
  }, []);

  const email = site.contact.email;
  const onApply = pathname.startsWith("/apply");

  return (
    <>
      <button
        type="button"
        onClick={toTop}
        aria-label={`Scroll to top, ${Math.round(progress * 100)}% of page read`}
        tabIndex={showTop ? 0 : -1}
        className={`group fixed right-5 bottom-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-white text-[#0a1038] shadow-[0_16px_40px_-8px_rgb(35_44_98/0.4)] transition-[opacity,transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_22px_48px_-8px_rgb(124_58_237/0.55)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c3aed] max-[767px]:right-4 max-[767px]:bottom-[calc(5.25rem+env(safe-area-inset-bottom))] max-[767px]:h-12 max-[767px]:w-12 ${
          showTop
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-6 scale-90 opacity-0"
        }`}
      >
        <svg
          viewBox="0 0 48 48"
          className="absolute inset-0 h-full w-full -rotate-90"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="scroll-ring" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#da2676" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
          <circle
            cx="24"
            cy="24"
            r="21"
            fill="none"
            stroke="rgb(42 52 105 / 0.12)"
            strokeWidth="3"
          />
          <circle
            cx="24"
            cy="24"
            r="21"
            fill="none"
            stroke="url(#scroll-ring)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
            style={{ transition: "stroke-dashoffset 120ms linear" }}
          />
        </svg>
        <Icon
          d="M12 19V5m0 0-6 6m6-6 6 6"
          className="relative h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5"
        />
      </button>

      <nav
        aria-label="Quick actions"
        className="fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-40 hidden max-[767px]:block"
      >
        <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-[rgb(42_52_105/0.12)] bg-white/95 shadow-[0_18px_44px_rgb(22_29_75/0.22)] backdrop-blur-md">
          {email ? (
            <a
              href={`mailto:${email}`}
              className="flex min-h-14 items-center justify-center gap-2 text-[0.8125rem] font-semibold tracking-[0.08em] text-[#0a1038] uppercase hover:no-underline"
            >
              <Icon d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Zm1 .5 8 5.5 8-5.5" />
              Email
            </a>
          ) : (
            <Link
              href="/contact"
              className="flex min-h-14 items-center justify-center gap-2 text-[0.8125rem] font-semibold tracking-[0.08em] text-[#0a1038] uppercase hover:no-underline"
            >
              Contact
            </Link>
          )}
          <Link
            href={onApply ? "/contact" : site.cta.apply.href}
            className="flex min-h-14 items-center justify-center gap-2 text-[0.8125rem] font-semibold tracking-[0.08em] text-white uppercase [background:linear-gradient(135deg,#0a1038,#3b0a5c)] hover:no-underline"
          >
            <Icon d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" />
            {onApply ? "Enquire" : "Apply Now"}
          </Link>
        </div>
      </nav>
    </>
  );
}
