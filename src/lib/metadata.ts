import type { Metadata } from "next";
import { site } from "@/config/site";
import { assets } from "@/config/assets";
export function createMetadata(
  title: string,
  description: string,
  path: string,
  draft = false,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: {
      index: site.indexable && !draft,
      follow: site.indexable && !draft,
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      title,
      description,
      url: path,
      images: [
        {
          url: assets.brand.dark,
          width: 1000,
          height: 1000,
          alt: "Streamintia",
        },
      ],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [assets.brand.dark],
    },
  };
}
