import Image from "next/image";
import Link from "next/link";
import {
  PortableText,
  type PortableTextBlock,
  type PortableTextComponents,
} from "@portabletext/react";
import { urlFor } from "@/sanity/client";

const plain = (block: PortableTextBlock) =>
  (block.children as { text?: string }[] | undefined)
    ?.map((c) => c.text ?? "")
    .join("") ?? "";

export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80);

export function headingsOf(body: PortableTextBlock[]) {
  return body
    .filter((b) => b._type === "block" && b.style === "h2")
    .map((b) => ({ text: plain(b), id: slugify(plain(b)) }));
}

export function readingMinutes(body: PortableTextBlock[]) {
  const words = body
    .filter((b) => b._type === "block")
    .map(plain)
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

const components: PortableTextComponents = {
  block: {
    h2: ({ children, value }) => (
      <h2 id={slugify(plain(value))} className="scroll-mt-28">
        {children}
      </h2>
    ),
    h3: ({ children }) => <h3>{children}</h3>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  },
  marks: {
    link: ({ children, value }) => {
      const href: string = value?.href ?? "#";
      const external = /^https?:\/\//.test(href);
      return external ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <Link href={href}>{children}</Link>
      );
    },
  },
  types: {
    image: ({ value }) =>
      value?.asset ? (
        <figure>
          <Image
            src={urlFor(value).width(1400).url()}
            alt={value.alt ?? ""}
            width={1400}
            height={800}
            sizes="(max-width: 800px) 92vw, 760px"
            className="h-auto w-full rounded-2xl"
          />
          {value.caption ? <figcaption>{value.caption}</figcaption> : null}
        </figure>
      ) : null,
  },
};

export function PostBody({ body }: { body: PortableTextBlock[] }) {
  return (
    <div className="blog-prose">
      <PortableText value={body} components={components} />
    </div>
  );
}
