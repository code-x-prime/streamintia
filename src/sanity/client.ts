import { createClient, type QueryParams } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { apiVersion, dataset, projectId, sanityConfigured } from "./env";

export const client = sanityConfigured
  ? createClient({ projectId, dataset, apiVersion, useCdn: true })
  : null;

/** Fetch from Sanity, refreshed at most once a minute. Returns `fallback` if Sanity isn't set up yet. */
export async function sanityFetch<T>(
  query: string,
  params: QueryParams = {},
  fallback: T,
): Promise<T> {
  if (!client) return fallback;
  try {
    return await client.fetch<T>(query, params, {
      next: { revalidate: 60, tags: ["blog"] },
    });
  } catch {
    return fallback;
  }
}

const builder = sanityConfigured
  ? imageUrlBuilder({ projectId, dataset })
  : null;

export function urlFor(source: SanityImageSource) {
  if (!builder) throw new Error("Sanity is not configured");
  return builder.image(source).auto("format").fit("max");
}
