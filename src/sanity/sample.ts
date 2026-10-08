import type { PortableTextBlock } from "@portabletext/react";
import type { Post } from "./queries";

/**
 * Preview posts used ONLY when BLOG_SAMPLE=1 is set. They let you see the blog
 * layout before Sanity is connected. Never set BLOG_SAMPLE in production.
 */
const span = (key: string, text: string, marks: string[] = []) => ({
  _type: "span",
  _key: key,
  text,
  marks,
});
const block = (
  key: string,
  style: string,
  text: string,
  extra: Record<string, unknown> = {},
) =>
  ({
    _type: "block",
    _key: key,
    style,
    markDefs: [],
    children: [span(key + "s", text)],
    ...extra,
  }) as unknown as PortableTextBlock;
const bullet = (key: string, text: string) =>
  block(key, "normal", text, { listItem: "bullet", level: 1 });

const body: PortableTextBlock[] = [
  block(
    "p1",
    "normal",
    "Starting your first live stream feels big, but it only needs a phone, good light and a quiet corner. This guide walks you through the basics, step by step.",
  ),
  block("h1", "h2", "Pick a simple setup"),
  block(
    "p2",
    "normal",
    "You do not need expensive gear. Most successful creators began with what they already had.",
  ),
  bullet("b1", "A phone with a stable internet connection"),
  bullet("b2", "A ring light or a window facing you"),
  bullet("b3", "Earphones with a mic for clear sound"),
  block("h2", "h2", "Choose the right platform"),
  block(
    "p3",
    "normal",
    "Each platform has its own rules, audience and requirements. Compare them calmly before you commit, and read the platform's own terms.",
  ),
  block(
    "q1",
    "blockquote",
    "Consistency beats perfection. Show up, be yourself and improve a little every week.",
  ),
  block("h3", "h2", "Plan your first week"),
  block(
    "p4",
    "normal",
    "Pick a fixed time, tell your friends, and keep your first streams short. Reflect on what felt good and what you want to change.",
  ),
];

const make = (
  n: number,
  title: string,
  cover: string,
  category: [string, string],
  author: string,
): Post => ({
  title,
  slug: title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, ""),
  excerpt:
    "A simple, honest guide for creators in India: what you need, what to avoid and how to take the first confident step.",
  publishedAt: `2026-09-${String(20 - n).padStart(2, "0")}T10:00:00Z`,
  _updatedAt: `2026-10-0${n}T10:00:00Z`,
  featured: n === 1,
  cover: { url: cover, alt: title },
  categories: [{ title: category[0], slug: category[1] }],
  author: {
    name: author,
    role: "Streamintia team",
    imageUrl: "/images/home/hero-creator.webp",
  },
  seoTitle: undefined,
  seoDescription: undefined,
  body,
});

export const samplePosts: Post[] = [
  make(
    1,
    "How to start live streaming in India: a beginner guide",
    "/images/home/benefit-ecosystem.webp",
    ["Getting started", "getting-started"],
    "Streamintia Team",
  ),
  make(
    2,
    "Poppo, Taka, Chamet or Niki: how to compare live-streaming platforms",
    "/images/home/benefit-platforms.webp",
    ["Platforms", "platforms"],
    "Streamintia Team",
  ),
  make(
    3,
    "What does a talent agent actually do?",
    "/images/home/service-agent.webp",
    ["For agents", "for-agents"],
    "Streamintia Team",
  ),
  make(
    4,
    "Five habits that help new streamers grow steadily",
    "/images/home/service-mentorship.webp",
    ["Getting started", "getting-started"],
    "Streamintia Team",
  ),
  make(
    5,
    "Stay safe online: protect your account and your privacy",
    "/images/home/benefit-support.webp",
    ["Safety", "safety"],
    "Streamintia Team",
  ),
  make(
    6,
    "Why honest guidance matters more than big promises",
    "/images/home/why-guidance.webp",
    ["Platforms", "platforms"],
    "Streamintia Team",
  ),
  make(
    7,
    "Sample article number 7: tips for new live streamers",
    "/images/home/service-talent.webp",
    ["Getting started", "getting-started"],
    "Streamintia Team",
  ),
  make(
    8,
    "Sample article number 8: tips for new live streamers",
    "/images/home/benefit-learning.webp",
    ["Safety", "safety"],
    "Streamintia Team",
  ),
  make(
    9,
    "Sample article number 9: tips for new live streamers",
    "/images/home/benefit-network.webp",
    ["Getting started", "getting-started"],
    "Streamintia Team",
  ),
  make(
    10,
    "Sample article number 10: tips for new live streamers",
    "/images/home/service-onboarding.webp",
    ["Safety", "safety"],
    "Streamintia Team",
  ),
  make(
    11,
    "Sample article number 11: tips for new live streamers",
    "/images/home/service-milestone.webp",
    ["Getting started", "getting-started"],
    "Streamintia Team",
  ),
  make(
    12,
    "Sample article number 12: tips for new live streamers",
    "/images/home/benefit-guidance.webp",
    ["Safety", "safety"],
    "Streamintia Team",
  ),
  make(
    13,
    "Sample article number 13: tips for new live streamers",
    "/images/home/opportunity-agent.webp",
    ["Getting started", "getting-started"],
    "Streamintia Team",
  ),
];
