"use client";
import {
  MorphIcon,
  type MorphIconProps,
  type IconInput,
} from "morphicons/react";
const icons = {
  broadcast: [
    ["rect", { x: 8, y: 3, width: 8, height: 12, rx: 4 }],
    ["path", { d: "M5 11v1a7 7 0 0 0 14 0v-1M12 19v3m-4 0h8" }],
  ],
  network: [
    ["circle", { cx: 12, cy: 5, r: 3 }],
    ["circle", { cx: 5, cy: 19, r: 3 }],
    ["circle", { cx: 19, cy: 19, r: 3 }],
    ["path", { d: "m10.5 8-4 8m7-8 4 8M8 19h8" }],
  ],
  compass: [
    ["circle", { cx: 12, cy: 12, r: 9 }],
    ["path", { d: "m16 8-2 6-6 2 2-6Z" }],
  ],
  spark:
    "m12 2 2.7 7.3L22 12l-7.3 2.7L12 22l-2.7-7.3L2 12l7.3-2.7ZM20 2v4m-2-2h4",
  support: [
    ["path", { d: "M4 13v-2a8 8 0 0 1 16 0v2M20 16v2a3 3 0 0 1-3 3h-3" }],
    ["rect", { x: 2, y: 11, width: 4, height: 7, rx: 2 }],
    ["rect", { x: 18, y: 11, width: 4, height: 7, rx: 2 }],
  ],
  growth: "M4 19V5m0 14h16M8 14l4-4 4 2 4-7m-5 0h5v5",
  arrow: "M5 12h14m-6-6 6 6-6 6",
  check: "m5 12 4 4L19 6",
  play: "m9 5 11 7-11 7Z",
  pause: "M8 5v14M16 5v14",
  globe: [
    ["circle", { cx: 12, cy: 12, r: 9 }],
    ["ellipse", { cx: 12, cy: 12, rx: 4, ry: 9 }],
    ["path", { d: "M3 12h18M5 6h14M5 18h14" }],
  ],
  chevron: "m6 9 6 6 6-6",
  "chevron-up": "m6 15 6-6 6 6",
  menu: "M4 8h16M4 16h16",
  close: "m6 6 12 12M6 18 18 6",
  plus: "M5 12h14M12 5v14",
  minus: "M5 12h14",
  quote:
    "M10 4C5 6 2 10 3 19h7v-8H6c0-2 2-4 4-5M21 4c-5 2-8 6-7 15h7v-8h-4c0-2 2-4 4-5",
} satisfies Record<string, IconInput>;
export type HomeIconName = keyof typeof icons;
// Stable geometry references allow Morphicons to reuse its normalization cache.
export function HomeIcon({
  name,
  ...props
}: Omit<MorphIconProps, "icon" | "from" | "to"> & { name: HomeIconName }) {
  return (
    <MorphIcon
      icon={icons[name]}
      size={24}
      strokeWidth={1.5}
      reducedMotion="user"
      aria-hidden="true"
      data-morph-icon={name}
      {...props}
    />
  );
}
