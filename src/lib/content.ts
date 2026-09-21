import { platforms } from "@/config/platforms";
// Repository boundary for future platform content.
export async function getPlatforms() {
  return platforms;
}
export async function getPlatform(slug: string) {
  return platforms.find((p) => p.slug === slug);
}
