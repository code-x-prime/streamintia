import type { Platform } from "@/config/platforms";
import { PlatformCard } from "./PlatformCard";
export function PlatformGrid({
  platforms,
  presentation = "plain",
}: {
  platforms: Platform[];
  presentation?: "plain" | "featured";
}) {
  return (
    <ul
      className={
        presentation === "featured" ? "ecosystem-grid" : "space-y-6 py-6"
      }
      data-stagger={presentation === "featured" ? "" : undefined}
    >
      {platforms.map((platform) => (
        <li key={platform.slug}>
          <PlatformCard platform={platform} presentation={presentation} />
        </li>
      ))}
    </ul>
  );
}
