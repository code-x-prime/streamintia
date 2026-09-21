import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { pages, routeFor, type PageKey } from "@/config/pages";
import { getPlatforms } from "@/lib/content";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (!site.indexable) return [];
  const platforms = await getPlatforms();
  return [
    ...(Object.keys(pages) as PageKey[]).map(routeFor),
    ...platforms
      .filter((p) => p.status === "active")
      .map((p) => `/platforms/${p.slug}`),
  ].map((path) => ({ url: `${site.url}${path}` }));
}
