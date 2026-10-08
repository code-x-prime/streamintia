import type { PortableTextBlock } from "@portabletext/react";
import { sanityFetch } from "./client";
import { samplePosts } from "./sample";

export interface PostCard {
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  featured?: boolean;
  cover?: { url: string; alt?: string };
  categories?: { title: string; slug: string }[];
  author?: { name: string; role?: string; imageUrl?: string };
}

export interface Post extends PostCard {
  body: PortableTextBlock[];
  seoTitle?: string;
  seoDescription?: string;
  _updatedAt: string;
}

const sampleMode = () => process.env.BLOG_SAMPLE === "1";

const cardFields = `
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  featured,
  "cover": select(defined(coverImage.asset) => { "url": coverImage.asset->url, "alt": coverImage.alt }),
  "categories": categories[]->{ title, "slug": slug.current },
  "author": author->{ name, role, "imageUrl": image.asset->url }
`;

const published = `_type == "post" && defined(slug.current) && publishedAt <= now()`;

export const getPosts = async (): Promise<PostCard[]> =>
  sampleMode()
    ? samplePosts
    : sanityFetch<PostCard[]>(
        `*[${published}] | order(publishedAt desc) { ${cardFields} }`,
        {},
        [],
      );

export const getPost = async (slug: string): Promise<Post | null> =>
  sampleMode()
    ? (samplePosts.find((p) => p.slug === slug) ?? null)
    : sanityFetch<Post | null>(
        `*[${published} && slug.current == $slug][0] { ${cardFields}, body, seoTitle, seoDescription, _updatedAt }`,
        { slug },
        null,
      );

export const getPostSlugs = async (): Promise<
  { slug: string; _updatedAt: string }[]
> =>
  sampleMode()
    ? samplePosts.map((p) => ({ slug: p.slug, _updatedAt: p._updatedAt }))
    : sanityFetch(
        `*[${published}] { "slug": slug.current, _updatedAt }`,
        {},
        [],
      );

export const getRelatedPosts = async (
  slug: string,
  categories: string[],
): Promise<PostCard[]> =>
  sampleMode()
    ? samplePosts.filter((p) => p.slug !== slug).slice(0, 3)
    : sanityFetch<PostCard[]>(
        `*[${published} && slug.current != $slug] | order(count((categories[]->slug.current)[@ in $categories]) desc, publishedAt desc)[0...3] { ${cardFields} }`,
        { slug, categories },
        [],
      );
