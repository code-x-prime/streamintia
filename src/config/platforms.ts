import { assets, type ImageAsset } from "./assets";
export interface Platform {
  slug: string;
  name: string;
  logo: ImageAsset | null;
  description: string;
  hostUrl: string;
  agentUrl: string;
  category: string;
  status: "pending" | "active";
  features: string[];
}
export const platforms: Platform[] = [
  {
    slug: "poppo-live",
    name: "Poppo Live",
    logo: assets.platformLogos.poppoLive,
    description:
      "Example entry. Partnership, availability and programme details await confirmation.",
    hostUrl: "/apply?role=streamer&platform=poppo-live",
    agentUrl: "/apply?role=agent&platform=poppo-live",
    category: "Live streaming",
    status: "pending",
    features: [],
  },
  {
    slug: "taka-live",
    name: "Taka Live",
    logo: assets.platformLogos.takaLive,
    description:
      "Example entry. Partnership, availability and programme details await confirmation.",
    hostUrl: "/apply?role=streamer&platform=taka-live",
    agentUrl: "/apply?role=agent&platform=taka-live",
    category: "Live streaming",
    status: "pending",
    features: [],
  },
  {
    slug: "chamet",
    name: "Chamet",
    logo: assets.platformLogos.chamet,
    description:
      "Example entry. Partnership, availability and programme details await confirmation.",
    hostUrl: "/apply?role=streamer&platform=chamet",
    agentUrl: "/apply?role=agent&platform=chamet",
    category: "Live streaming",
    status: "pending",
    features: [],
  },
  {
    slug: "niki-live",
    name: "Niki Live",
    logo: assets.platformLogos.nikiLive,
    description:
      "Example entry. Partnership, availability and programme details await confirmation.",
    hostUrl: "/apply?role=streamer&platform=niki-live",
    agentUrl: "/apply?role=agent&platform=niki-live",
    category: "Live streaming",
    status: "pending",
    features: [],
  },
];
