"use client";
import { useEffect, useRef } from "react";
export function HeaderFrame({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const update = () => {
      if (ref.current)
        ref.current.dataset.scrolled = String(window.scrollY > 24);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <header
      ref={ref}
      data-scrolled="false"
      className="group/header relative sticky top-0 z-40 border-b border-[rgb(28_35_81_/_0.1)] bg-white/88 [backdrop-filter:blur(18px)_saturate(150%)] transition-[background,box-shadow,backdrop-filter] duration-250
        before:pointer-events-none before:absolute before:top-0 before:left-[15%] before:h-px before:w-[32%] before:bg-[linear-gradient(90deg,transparent,rgb(18_217_244_/_0.5),rgb(139_77_255_/_0.4),transparent)] before:content-['']
        data-[scrolled=true]:bg-white/96 data-[scrolled=true]:shadow-[0_12px_36px_rgb(22_29_75_/_0.1)] data-[scrolled=true]:[backdrop-filter:blur(22px)_saturate(160%)]"
    >
      {children}
    </header>
  );
}
