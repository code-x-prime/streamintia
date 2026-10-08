import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { pages, routeFor, type PageKey } from "@/config/pages";
import { getPlatforms } from "@/lib/content";
import { getPostSlugs } from "@/sanity/queries";

// Rebuilt at most every 10 minutes, so a newly published post reaches Google quickly.
export const revalidate = 600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (!site.indexable) return [];
  const [platforms, posts] = await Promise.all([
    getPlatforms(),
    getPostSlugs(),
  ]);

  const staticPaths = [
    ...(Object.keys(pages) as PageKey[]).map(routeFor),
    ...platforms
      .filter((p) => p.status === "active")
      .map((p) => `/platforms/${p.slug}`),
  ];

  const latestPost = posts.reduce<Date | undefined>((latest, p) => {
    const d = new Date(p._updatedAt);
    return !latest || d > latest ? d : latest;
  }, undefined);

  return [
    ...staticPaths.map((path) => ({
      url: `${site.url}${path}`,
      priority: path === "/" ? 1 : 0.8,
    })),
    {
      url: `${site.url}/blog`,
      lastModified: latestPost,
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
    ...posts.map((p) => ({
      url: `${site.url}/blog/${p.slug}`,
      lastModified: new Date(p._updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
