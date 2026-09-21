"use client";
import { useEffect, useRef, useState } from "react";
export function AmbientControl() {
  const [paused, setPaused] = useState(false);
  return (
    <button
      type="button"
      className="ambient-control"
      aria-pressed={paused}
      onClick={() => {
        const next = !paused;
        setPaused(next);
        window.dispatchEvent(
          new CustomEvent("streamintia:ambient", { detail: next }),
        );
      }}
    >

    </button>
  );
}
export function HomeMotion({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let disposed = false;
    let cleanup: (() => void) | undefined;
    let paused = false;
    const onAmbient = (event: Event) => {
      paused = (event as CustomEvent<boolean>).detail;
      if (root.current) root.current.dataset.ambientPaused = String(paused);
    };
    window.addEventListener("streamintia:ambient", onAmbient);
    async function initialise() {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (disposed || !root.current) return;
      gsap.registerPlugin(ScrollTrigger);
      const element = root.current;
      const media = gsap.matchMedia();
      media.add(
        "(prefers-reduced-motion: no-preference)",
        () => {
          const select = gsap.utils.selector(element);
          const hero = gsap.timeline({
            defaults: { ease: "power3.out", duration: 0.75 },
          });
          hero
            .from(select(".hero-glow"), { opacity: 0.2, duration: 1.2 })
            .from(
              select("[data-hero-copy]"),
              {
                y: 24,
                opacity: 0.35,
                stagger: 0.1,
                clearProps: "transform,opacity",
              },
              "<.1",
            )
            .from(
              select("[data-hero-actions]"),
              {
                y: 14,
                opacity: 0,
                stagger: 0.08,
                clearProps: "transform,opacity",
              },
              "<.25",
            )
            .from(
              select("[data-hero-visual]"),
              { scale: 0.92, opacity: 0, clearProps: "transform,opacity" },
              "<",
            )
            .from(
              select("[data-hero-node]"),
              {
                y: 15,
                opacity: 0,
                stagger: 0.1,
                clearProps: "transform,opacity",
              },
              "<.15",
            );
          const float = gsap.to(select("[data-ambient]"), {
            y: -7,
            duration: 3.6,
            ease: "sine.inOut",
            stagger: 0.3,
            repeat: -1,
            yoyo: true,
            paused: true,
          });
          let inView = true;
          let entranceComplete = false;
          const sync = () => {
            float.paused(
              paused || !entranceComplete || !inView || document.hidden,
            );
          };
          hero.eventCallback("onComplete", () => {
            entranceComplete = true;
            sync();
          });
          const ambientListener = () => sync();
          window.addEventListener("streamintia:ambient", ambientListener);
          document.addEventListener("visibilitychange", sync);
          ScrollTrigger.create({
            trigger: element.querySelector(".home-hero"),
            start: "top bottom",
            end: "bottom top",
            onToggle: (self) => {
              inView = self.isActive;
              sync();
            },
          });
          sync();
          gsap.to(select(".campaign-ribbon"), {
            y: 24,
            ease: "none",
            scrollTrigger: {
              trigger: element.querySelector(".home-hero"),
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
          for (const group of select("[data-stagger]") as HTMLElement[]) {
            const items = group.querySelectorAll("[data-reveal]");
            gsap.from(items, {
              y: 32,
              opacity: 0,
              scale: 0.985,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.08,
              clearProps: "transform,opacity",
              scrollTrigger: { trigger: group, start: "top 92%", once: true },
            });
          }
          for (const card of select(".campaign-timeline li") as HTMLElement[]) {
            const icon = card.querySelector("svg");
            const enter = () =>
              gsap.to(icon, {
                scale: 1.12,
                rotate: 6,
                duration: 0.35,
                ease: "back.out(2)",
              });
            const leave = () =>
              gsap.to(icon, {
                scale: 1,
                rotate: 0,
                duration: 0.35,
                ease: "power2.out",
              });
            card.addEventListener("pointerenter", enter);
            card.addEventListener("pointerleave", leave);
          }
          for (const photo of select("[data-section-image]") as HTMLElement[]) {
            gsap.to(photo, {
              yPercent: -5,
              ease: "none",
              scrollTrigger: {
                trigger: photo.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.8,
              },
            });
          }
          for (const target of select("[data-reveal]") as HTMLElement[]) {
            if (target.closest("[data-stagger]")) continue;
            gsap.from(target, {
              y: 30,
              opacity: 0,
              duration: 0.82,
              ease: "power3.out",
              clearProps: "transform,opacity",
              scrollTrigger: { trigger: target, start: "top 92%", once: true },
            });
          }
          element.dataset.motion = "ready";
          return () => {
            window.removeEventListener("streamintia:ambient", ambientListener);
            document.removeEventListener("visibilitychange", sync);
          };
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
      cleanup = () => media.revert();
    }
    initialise().catch(() => {
      if (root.current) root.current.dataset.motion = "unavailable";
    });
    return () => {
      disposed = true;
      cleanup?.();
      window.removeEventListener("streamintia:ambient", onAmbient);
    };
  }, []);
  return (
    <div className="home-page" ref={root}>
      {children}
    </div>
  );
}
