"use client";
import { useEffect, useRef } from "react";
/**
 * A fixed, full-viewport dot-grid backdrop shared by every page. The pattern
 * drifts a few pixels toward the cursor as it moves, giving the background
 * a subtle sense of depth without ever competing with page content.
 */
export function DotGridBackground() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const onMove = (event: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const xRatio = event.clientX / window.innerWidth - 0.5;
        const yRatio = event.clientY / window.innerHeight - 0.5;
        el.style.setProperty("--dot-shift-x", `${xRatio * -18}px`);
        el.style.setProperty("--dot-shift-y", `${yRatio * -18}px`);
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
  return (
    <div
      ref={ref}
      style={
        {
          "--dot-shift-x": "0px",
          "--dot-shift-y": "0px",
        } as React.CSSProperties
      }
      className="pointer-events-none fixed inset-0 z-0 bg-[image:radial-gradient(rgb(8_8_45_/_0.16)_1.5px,transparent_1.5px)] bg-[length:26px_26px] [background-position:var(--dot-shift-x)_var(--dot-shift-y)] transition-[background-position] duration-400 ease-out"
      aria-hidden="true"
    />
  );
}
