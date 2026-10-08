import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { site } from "@/config/site";
import { jsonLdString } from "@/lib/json-ld";
import { imgUrl } from "@/lib/blog-image";
import { getPost, getPostSlugs, getRelatedPosts } from "@/sanity/queries";
import { Author, BlogCard, Tags, formatDate } from "@/components/blog/BlogCard";
import {
  PostBody,
  headingsOf,
  readingMinutes,
} from "@/components/blog/PostBody";
import { HomeIcon } from "@/components/ui/HomeIcon";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map(({ slug }) => ({ slug }));
}

const absolute = (url: string) =>
  url.startsWith("http") ? url : `${site.url}${url}`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Article not found", robots: { index: false } };
  const title = post.seoTitle || post.title;
  const description = post.seoDescription || post.excerpt;
  const image = post.cover
    ? absolute(imgUrl(post.cover.url, 1200, 630))
    : undefined;
  const path = `/blog/${post.slug}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: { index: site.indexable, follow: site.indexable },
    openGraph: {
      type: "article",
      siteName: site.name,
      title,
      description,
      url: path,
      publishedTime: post.publishedAt,
      modifiedTime: post._updatedAt,
      authors: post.author ? [post.author.name] : undefined,
      tags: post.categories?.map((c) => c.title),
      images: image
        ? [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: post.cover?.alt ?? title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const body = post.body ?? [];
  const headings = headingsOf(body);
  const minutes = readingMinutes(body);
  const related = await getRelatedPosts(
    post.slug,
    post.categories?.map((c) => c.slug) ?? [],
  );
  const url = `${site.url}/blog/${post.slug}`;
  const cover = post.cover ? imgUrl(post.cover.url, 1600, 900) : null;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.seoDescription || post.excerpt,
      image: cover ? [absolute(cover)] : undefined,
      datePublished: post.publishedAt,
      dateModified: post._updatedAt,
      author: post.author
        ? { "@type": "Person", name: post.author.name }
        : { "@type": "Organization", name: site.name },
      publisher: {
        "@type": "Organization",
        name: site.name,
        logo: { "@type": "ImageObject", url: `${site.url}${site.logos.icon}` },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      keywords: post.categories?.map((c) => c.title).join(", "),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: `${site.url}/blog`,
        },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];

  return (
    <article className="px-(--home-gutter) pt-[clamp(1.5rem,4vw,3rem)] pb-[clamp(4rem,8vw,6rem)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLd) }}
      />
      <div className="home-container">
        <nav aria-label="Breadcrumb" className="blog-muted text-sm">
          <Link href="/">Home</Link>
          <span aria-hidden="true"> / </span>
          <Link href="/blog">Blog</Link>
        </nav>

        <header className="mx-auto mt-6 max-w-[52rem] text-center">
          <div className="flex justify-center">
            <Tags items={post.categories} />
          </div>
          <h1 className="mt-4 text-[clamp(1.9rem,4.6vw,3.6rem)]! leading-[1.1]! font-semibold! tracking-[-0.04em]!">
            {post.title}
          </h1>
          <p className="blog-muted mx-auto mt-4 max-w-[40rem] text-[1.0625rem] leading-[1.7] min-[640px]:text-[1.125rem]">
            {post.excerpt}
          </p>
          <div className="blog-muted mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
            <Author author={post.author} />
            <time dateTime={post.publishedAt}>
              {formatDate(post.publishedAt, true)}
            </time>
            <span>{minutes} min read</span>
          </div>
        </header>

        {cover ? (
          <div className="blog-soft relative mx-auto mt-10 aspect-[16/9] max-w-[68rem] overflow-hidden rounded-2xl min-[640px]:rounded-3xl">
            <Image
              src={cover}
              alt={post.cover?.alt ?? ""}
              fill
              priority
              sizes="(max-width: 1100px) 94vw, 1088px"
              className="object-cover"
            />
          </div>
        ) : null}

        <div className="mx-auto mt-10 grid max-w-[68rem] gap-8 lg:mt-12 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-12">
          {body.length ? (
            <PostBody body={body} />
          ) : (
            <p className="blog-muted">This article has no content yet.</p>
          )}
          {headings.length > 1 ? (
            <aside className="order-first lg:order-none">
              <div className="blog-surface rounded-2xl p-5 lg:sticky lg:top-28">
                <p className="blog-accent font-mono text-[0.6875rem] font-semibold tracking-[0.12em] uppercase">
                  On this page
                </p>
                <ol className="mt-3 grid gap-2 text-sm">
                  {headings.map((h) => (
                    <li key={h.id}>
                      <a
                        href={`#${h.id}`}
                        className="blog-muted hover:underline"
                      >
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
          ) : null}
        </div>

        <div className="blog-cta mx-auto mt-14 max-w-[52rem] rounded-3xl p-[clamp(1.5rem,4vw,2.5rem)]">
          <h2 className="text-[clamp(1.4rem,3vw,2rem)]! font-semibold!">
            Ready to take the next step?
          </h2>
          <p className="mt-2 max-w-[34rem]">
            Tell us a little about yourself and we will guide you through the
            rest.
          </p>
          <div className="mt-6 flex flex-col gap-3 min-[640px]:flex-row">
            <Link
              href="/apply?role=streamer"
              className="blog-btn blog-btn--light"
            >
              Become a Streamer <HomeIcon name="arrow" />
            </Link>
            <Link
              href="/apply?role=agent"
              className="blog-btn blog-btn--outline-light"
            >
              Become an Agent <HomeIcon name="arrow" />
            </Link>
          </div>
        </div>

        {related.length ? (
          <section className="mt-16" aria-labelledby="related-title">
            <h2
              id="related-title"
              className="text-[clamp(1.5rem,3vw,2rem)]! font-semibold!"
            >
              Keep reading
            </h2>
            <div className="mt-6 grid gap-5 min-[700px]:grid-cols-2 min-[1100px]:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Link href="/blog" className="blog-btn blog-btn--ghost">
                View all articles <HomeIcon name="arrow" />
              </Link>
            </div>
          </section>
        ) : (
          <div className="mt-10 flex justify-center">
            <Link href="/blog" className="blog-btn blog-btn--ghost">
              Back to all articles <HomeIcon name="arrow" />
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}
