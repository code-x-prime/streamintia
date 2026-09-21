"use client";
import { MorphIcon } from "morphicons/react";

// Brand artwork keeps its original filled outline instead of becoming a stroke icon.
export function BrandIcon({ path }: { path: string }) {
  return (
    <MorphIcon
      icon={path}
      size={17}
      fill="currentColor"
      stroke="none"
      strokeWidth={0}
      reducedMotion="user"
      aria-hidden="true"
    />
  );
}
