"use client";
import { useEffect, useRef } from "react";
export function InnerMotion({
  children,
  tone,
}: {
  children: React.ReactNode;
  tone: string;
}) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let disposed = false;
    let cleanup: (() => void) | undefined;
    async function start() {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (disposed || !root.current) return;
      gsap.registerPlugin(ScrollTrigger);
      const element = root.current;
      const media = gsap.matchMedia();
      cleanup = () => media.revert();
      media.add(
        "(prefers-reduced-motion: no-preference)",
        () => {
          const select = gsap.utils.selector(element);
          gsap.from(select("[data-inner-hero]"), {
            y: 18,
            opacity: 0.4,
            duration: 0.7,
            stagger: 0.08,
            ease: "power3.out",
            clearProps: "transform,opacity",
          });
          for (const group of select("[data-stagger]") as HTMLElement[])
            gsap.from(group.querySelectorAll("[data-reveal]"), {
              y: 28,
              opacity: 0,
              scale: 0.988,
              duration: 0.78,
              stagger: 0.07,
              ease: "power3.out",
              clearProps: "transform,opacity",
              scrollTrigger: { trigger: group, start: "top 92%", once: true },
            });
          for (const target of select("[data-reveal]") as HTMLElement[]) {
            if (target.closest("[data-stagger]")) continue;
            gsap.from(target, {
              y: 28,
              opacity: 0,
              duration: 0.8,
              ease: "power3.out",
              clearProps: "transform,opacity",
              scrollTrigger: { trigger: target, start: "top 92%", once: true },
            });
          }
          element.dataset.motion = "ready";
        },
        element,
      );
      media.add(
        "(prefers-reduced-motion: reduce)",
        () => {
          element.dataset.motion = "reduced";
        },
        element,
      );
    }
    start().catch(() => {
      cleanup?.();
      if (root.current) root.current.dataset.motion = "unavailable";
    });
    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);
  return (
    <div ref={root} className={`inner-page inner-page--${tone}`}>
      {children}
    </div>
  );
}
