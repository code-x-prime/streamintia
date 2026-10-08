import Link from "next/link";
import type { PostCard } from "@/sanity/queries";
import { BlogCard } from "./BlogCard";
import { HomeIcon } from "@/components/ui/HomeIcon";

export const POSTS_PER_PAGE = 6;

export const blogHref = (category: string, page: number) => {
  const q = new URLSearchParams();
  if (category !== "all") q.set("category", category);
  if (page > 1) q.set("page", String(page));
  const s = q.toString();
  return s ? `/blog?${s}` : "/blog";
};

/** Pick the page numbers to show, e.g. 1 … 4 5 6 … 12 */
function pageWindow(current: number, total: number): (number | "gap")[] {
  const set = new Set([1, total, current - 1, current, current + 1]);
  const nums = [...set]
    .filter((n) => n >= 1 && n <= total)
    .sort((a, b) => a - b);
  const out: (number | "gap")[] = [];
  nums.forEach((n, i) => {
    if (i && n - nums[i - 1] > 1) out.push("gap");
    out.push(n);
  });
  return out;
}

export function BlogList({
  posts,
  category,
  page,
}: {
  posts: PostCard[];
  category: string;
  page: number;
}) {
  const categories = new Map<string, string>();
  posts.forEach((p) =>
    p.categories?.forEach((c) => categories.set(c.slug, c.title)),
  );
  const filtered =
    category === "all"
      ? posts
      : posts.filter((p) => p.categories?.some((c) => c.slug === category));
  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
  const current = Math.min(Math.max(1, page), totalPages);
  const visible = filtered.slice(
    (current - 1) * POSTS_PER_PAGE,
    current * POSTS_PER_PAGE,
  );

  return (
    <>
      {categories.size ? (
        <nav
          aria-label="Filter by category"
          className="mb-8 flex flex-wrap gap-2"
        >
          {[["all", "All posts"] as const, ...categories].map(
            ([slug, title]) => (
              <Link
                key={slug}
                href={blogHref(slug, 1)}
                scroll={false}
                className="blog-chip hover:no-underline"
                aria-current={category === slug ? "true" : undefined}
                aria-pressed={category === slug}
              >
                {title}
              </Link>
            ),
          )}
        </nav>
      ) : null}

      {visible.length ? (
        <div className="grid gap-5 min-[700px]:grid-cols-2 min-[1100px]:grid-cols-3">
          {visible.map((post, i) => (
            <BlogCard
              key={post.slug}
              post={post}
              priority={i < 3 && current === 1}
            />
          ))}
        </div>
      ) : (
        <p className="blog-muted py-10 text-center">
          No articles in this category yet.
        </p>
      )}

      {totalPages > 1 ? (
        <nav
          aria-label="Blog pages"
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
        >
          {current > 1 ? (
            <Link
              href={blogHref(category, current - 1)}
              rel="prev"
              className="blog-btn blog-btn--ghost min-h-11! px-4!"
            >
              <HomeIcon name="arrow" className="rotate-180" /> Prev
            </Link>
          ) : null}
          {pageWindow(current, totalPages).map((n, i) =>
            n === "gap" ? (
              <span
                key={`g${i}`}
                aria-hidden="true"
                className="blog-muted px-1"
              >
                …
              </span>
            ) : (
              <Link
                key={n}
                href={blogHref(category, n)}
                aria-label={`Page ${n}`}
                aria-current={n === current ? "page" : undefined}
                className="blog-page-num hover:no-underline"
              >
                {n}
              </Link>
            ),
          )}
          {current < totalPages ? (
            <Link
              href={blogHref(category, current + 1)}
              rel="next"
              className="blog-btn blog-btn--ghost min-h-11! px-4!"
            >
              Next <HomeIcon name="arrow" />
            </Link>
          ) : null}
        </nav>
      ) : null}
    </>
  );
}
