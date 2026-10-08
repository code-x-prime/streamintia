"use client";

import { useMemo, useState } from "react";
import type { PostCard } from "@/sanity/queries";
import { BlogCard } from "./BlogCard";

export function BlogList({ posts }: { posts: PostCard[] }) {
  const [active, setActive] = useState("all");
  const categories = useMemo(() => {
    const map = new Map<string, string>();
    posts.forEach((p) =>
      p.categories?.forEach((c) => map.set(c.slug, c.title)),
    );
    return [...map.entries()];
  }, [posts]);
  const visible =
    active === "all"
      ? posts
      : posts.filter((p) => p.categories?.some((c) => c.slug === active));

  return (
    <>
      {categories.length ? (
        <div
          role="group"
          aria-label="Filter by category"
          className="mb-8 flex flex-wrap gap-2"
        >
          {[["all", "All posts"] as const, ...categories].map(
            ([slug, title]) => (
              <button
                key={slug}
                type="button"
                className="blog-chip"
                aria-pressed={active === slug}
                onClick={() => setActive(slug)}
              >
                {title}
              </button>
            ),
          )}
        </div>
      ) : null}
      <div className="grid gap-5 min-[700px]:grid-cols-2 min-[1100px]:grid-cols-3">
        {visible.map((post, i) => (
          <BlogCard key={post.slug} post={post} priority={i < 3} />
        ))}
      </div>
    </>
  );
}
