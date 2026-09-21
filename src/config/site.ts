import { assets } from "./assets";
export type SocialName = "Instagram" | "Facebook" | "YouTube";
const origin = process.env.NEXT_PUBLIC_SITE_URL;
export const site = {
  name: "Streamintia",
  description:
    "Streamintia connects creators, hosts and agents with opportunities across the global live-streaming ecosystem.",
  url: origin ? new URL(origin).origin : "http://localhost:3000",
  indexable: process.env.SITE_INDEXABLE === "true" && Boolean(origin),
  logos: assets.brand,
  contact: {
    email: "official.streamintia@gmail.com",
    whatsapp: null as string | null,
    location: null as string | null,
  },
  socialLinks: (["Instagram", "Facebook", "YouTube"] as SocialName[]).map(
    (name) => ({ name, url: null as string | null }),
  ),
  copyright: "All rights reserved.",
  stats: [
    { value: null as string | null, label: "Creators supported" },
    { value: null as string | null, label: "Agent network" },
    { value: null as string | null, label: "Platform connections" },
    { value: null as string | null, label: "Countries reached" },
  ],
  cta: {
    apply: { label: "Apply Now", href: "/apply" },
    streamer: { label: "Become a Streamer", href: "/become-streamer" },
    agent: { label: "Become an Agent", href: "/become-agent" },
  },
  footerCTA: {
    eyebrow: "YOUR NEXT CHAPTER STARTS HERE",
    title: "Your talent. New possibilities.",
    description:
      "Take your next step in live streaming. Find your place as a creator or build your network as an agent.",
  },
};
