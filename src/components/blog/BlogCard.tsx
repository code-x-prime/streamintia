import Image from "next/image";
import Link from "next/link";
import { imgUrl } from "@/lib/blog-image";
import type { PostCard } from "@/sanity/queries";

export const formatDate = (iso: string, long = false) =>
  new Date(iso).toLocaleDateString(
    "en-IN",
    long
      ? { day: "numeric", month: "long", year: "numeric" }
      : { day: "numeric", month: "short" },
  );

export function Tags({ items }: { items?: PostCard["categories"] }) {
  if (!items?.length) return null;
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.slice(0, 2).map((c) => (
        <li key={c.slug} className="blog-tag">
          {c.title}
        </li>
      ))}
    </ul>
  );
}

export function Author({ author }: { author?: PostCard["author"] }) {
  if (!author) return null;
  return (
    <span className="flex items-center gap-2.5">
      {author.imageUrl ? (
        <Image
          src={imgUrl(author.imageUrl, 64, 64)}
          alt=""
          width={32}
          height={32}
          className="h-8 w-8 rounded-full object-cover"
        />
      ) : (
        <span
          aria-hidden="true"
          className="grid h-8 w-8 place-items-center rounded-full bg-[image:linear-gradient(135deg,#da2676,#7c3aed)] text-xs font-semibold text-white"
        >
          {author.name.charAt(0)}
        </span>
      )}
      <span className="flex flex-col leading-tight">
        <span className="font-mono text-[0.6875rem] font-semibold tracking-[0.08em] text-(--blog-ink) uppercase">
          {author.name}
        </span>
      </span>
    </span>
  );
}

export function BlogCard({
  post,
  priority = false,
}: {
  post: PostCard;
  priority?: boolean;
}) {
  return (
    <article className="blog-card blog-surface group relative flex h-full flex-col overflow-hidden rounded-2xl">
      {post.cover ? (
        <div className="blog-soft relative aspect-[16/9] overflow-hidden">
          <Image
            src={imgUrl(post.cover.url, 800, 450)}
            alt={post.cover.alt ?? ""}
            fill
            priority={priority}
            sizes="(max-width: 699px) 92vw, (max-width: 1099px) 46vw, 380px"
            className="blog-card-img object-cover"
          />
        </div>
      ) : (
        <div
          aria-hidden="true"
          className="aspect-[16/9] bg-[image:linear-gradient(135deg,#da2676,#7c3aed)]"
        />
      )}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <Tags items={post.categories} />
          <time
            dateTime={post.publishedAt}
            className="blog-muted shrink-0 font-mono text-[0.6875rem] tracking-[0.08em] uppercase"
          >
            {formatDate(post.publishedAt)}
          </time>
        </div>
        <h3 className="text-[1.25rem]! leading-[1.25]! font-semibold! tracking-[-0.02em]!">
          <Link
            href={`/blog/${post.slug}`}
            className="after:absolute after:inset-0 hover:no-underline"
          >
            {post.title}
          </Link>
        </h3>
        <p className="blog-muted line-clamp-3 text-[0.9375rem] leading-[1.6]">
          {post.excerpt}
        </p>
        <div className="mt-auto pt-3">
          <Author author={post.author} />
        </div>
      </div>
    </article>
  );
}
