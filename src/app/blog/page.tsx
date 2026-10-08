import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { site } from "@/config/site";
import { jsonLdString } from "@/lib/json-ld";
import { imgUrl } from "@/lib/blog-image";
import { getPosts } from "@/sanity/queries";
import { sanityConfigured } from "@/sanity/env";
import { BlogList, blogHref } from "@/components/blog/BlogList";
import { Author, Tags, formatDate } from "@/components/blog/BlogCard";
import { HomeIcon } from "@/components/ui/HomeIcon";

export const revalidate = 60;

type SearchParams = Promise<{ page?: string; category?: string }>;

export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams;
}): Promise<Metadata> {
  const { page, category } = await searchParams;
  const n = Math.max(1, Number.parseInt(page ?? "1", 10) || 1);
  const cat = category && category !== "all" ? category : "all";
  const path = blogHref(cat, n);
  const base = createMetadata(
    n > 1
      ? `Blog: Live Streaming Tips & Guides (Page ${n})`
      : "Blog: Live Streaming Tips & Guides",
    "Practical guides for live streamers and agents in India: getting started, choosing a platform, growing your audience and staying safe.",
    path,
  );
  return {
    ...base,
    alternates: {
      canonical: path,
      types: { "application/rss+xml": "/blog/feed.xml" },
    },
  };
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { page, category } = await searchParams;
  const pageNumber = Math.max(1, Number.parseInt(page ?? "1", 10) || 1);
  const activeCategory = category ?? "all";
  const posts = await getPosts();
  const showFeatured = pageNumber === 1 && activeCategory === "all";
  const featured = showFeatured
    ? (posts.find((p) => p.featured) ?? posts[0])
    : undefined;
  const rest = posts.filter((p) => p !== featured);
  const previewMode = process.env.BLOG_SAMPLE === "1";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${site.name} Blog`,
    url: `${site.url}/blog`,
    description: "Practical guides for live streamers and agents in India.",
    publisher: { "@type": "Organization", name: site.name },
    blogPost: posts.slice(0, 20).map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${site.url}/blog/${p.slug}`,
      datePublished: p.publishedAt,
    })),
  };

  return (
    <div className="px-(--home-gutter) pt-[clamp(2.5rem,5vw,4rem)] pb-[clamp(4rem,8vw,6rem)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLd) }}
      />
      <div className="home-container">
        <p className="home-eyebrow">STREAMINTIA BLOG</p>
        <h1 className="mt-3 text-[clamp(2.75rem,6vw,4.5rem)]! leading-[1]! font-semibold! tracking-[-0.05em]!">
          Blog
        </h1>
        <p className="blog-muted mt-4 max-w-[40rem] text-[1.0625rem] leading-[1.75]">
          Guides, tips and honest advice for creators and agents exploring live
          streaming.
        </p>
        {previewMode ? (
          <p className="blog-tag mt-4">Sample posts (preview mode)</p>
        ) : null}

        {featured ? (
          <article className="blog-card blog-surface group relative mt-10 grid overflow-hidden rounded-3xl lg:grid-cols-[1.15fr_1fr]">
            {featured.cover ? (
              <div className="blog-soft relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[24rem]">
                <Image
                  src={imgUrl(featured.cover.url, 1200, 760)}
                  alt={featured.cover.alt ?? ""}
                  fill
                  priority
                  sizes="(max-width: 1023px) 92vw, 640px"
                  className="blog-card-img object-cover"
                />
              </div>
            ) : null}
            <div className="flex flex-col gap-4 p-[clamp(1.25rem,3vw,2.5rem)]">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <Tags items={featured.categories} />
                <time
                  dateTime={featured.publishedAt}
                  className="blog-muted shrink-0 font-mono text-xs tracking-[0.08em] uppercase"
                >
                  {formatDate(featured.publishedAt)}
                </time>
              </div>
              <h2 className="text-[clamp(1.6rem,3vw,2.5rem)]! leading-[1.12]! font-semibold! tracking-[-0.035em]!">
                <Link
                  href={`/blog/${featured.slug}`}
                  className="after:absolute after:inset-0 hover:no-underline"
                >
                  {featured.title}
                </Link>
              </h2>
              <p className="blog-muted text-base leading-[1.7]">
                {featured.excerpt}
              </p>
              <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-4">
                <Author author={featured.author} />
                <span className="blog-accent inline-flex items-center gap-1.5 text-sm font-semibold [&_svg]:h-4 [&_svg]:w-4">
                  Read article <HomeIcon name="arrow" />
                </span>
              </div>
            </div>
          </article>
        ) : posts.length === 0 ? (
          <div className="blog-surface mt-10 rounded-3xl border-dashed p-8 text-center min-[640px]:p-10">
            <h2 className="text-2xl! font-semibold!">
              New articles are on the way
            </h2>
            <p className="blog-muted mx-auto mt-3 max-w-[32rem]">
              {sanityConfigured
                ? "Publish your first post in the blog editor and it will appear here within a minute."
                : "Connect the blog editor (Sanity) to start publishing articles."}
            </p>
          </div>
        ) : null}

        {rest.length ? (
          <div className="mt-14">
            <BlogList
              posts={rest}
              category={activeCategory}
              page={pageNumber}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
