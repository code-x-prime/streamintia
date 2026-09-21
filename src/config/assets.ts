export const assets = {
  brand: {
    dark: "/images/brand/logo-dark.png",
    light: "/images/brand/logo-light.png",
    icon: "/images/brand/icon.png",
  },
  platformLogos: {
    poppoLive: {
      src: "/images/platforms/poppo-live.svg",
      alt: "Poppo Live placeholder brand mark",
      width: 2048,
      height: 2048,
    },
    takaLive: {
      src: "/images/platforms/taka-live.svg",
      alt: "Taka Live placeholder brand mark",
      width: 2048,
      height: 2048,
    },
    chamet: {
      src: "/images/platforms/chamet.svg",
      alt: "Chamet placeholder brand mark",
      width: 2048,
      height: 2048,
    },
    nikiLive: {
      src: "/images/platforms/niki-live.svg",
      alt: "Niki Live placeholder brand mark",
      width: 2048,
      height: 2048,
    },
  },
  visuals: {
    homeStreamer: {
      src: "/images/home/streamintia-streamer.webp",
      alt: "Creator recording a live conversation in a bright cyan and lavender studio",
      width: 1400,
      height: 933,
    },
    homeAgent: {
      src: "/images/home/streamintia-agent.webp",
      alt: "Talent mentor and creators planning together around a studio table",
      width: 1400,
      height: 933,
    },
    homeCreator: {
      src: "/images/generated/home-creator.webp",
      alt: "A live-streaming creator presenting in a bright professional studio",
      width: 1600,
      height: 800,
    },
    aboutTeam: {
      src: "/images/generated/about-team.webp",
      alt: "Creators and talent strategists planning content together in a creative studio",
      width: 1600,
      height: 900,
    },
    streamerPortrait: {
      src: "/images/generated/streamer-portrait.webp",
      alt: "A creator speaking to his live-streaming audience in a professional studio",
      width: 1024,
      height: 1536,
    },
    agentGuidance: {
      src: "/images/generated/agent-guidance.webp",
      alt: "A talent agent and creator reviewing a content growth plan",
      width: 1536,
      height: 1024,
    },
    creatorTools: {
      src: "/images/generated/creator-tools.webp",
      alt: "Professional live-streaming equipment arranged in a bright creator studio",
      width: 1600,
      height: 800,
    },
    applyApplication: {
      src: "/images/generated/apply-application.webp",
      alt: "A creator filling out an application on a laptop at a bright modern desk",
      width: 2048,
      height: 1152,
    },
    platformsDirectory: {
      src: "/images/generated/platforms-directory.webp",
      alt: "An overhead view of a live-streaming studio with multiple platform screens",
      width: 2048,
      height: 1152,
    },
    contactSupport: {
      src: "/images/generated/contact-support.webp",
      alt: "A support professional on a video call at a bright office desk",
      width: 2048,
      height: 1152,
    },
    platformPreview: {
      src: "/images/generated/platform-preview.webp",
      alt: "A close-up of a live-streaming platform preview on a tablet screen",
      width: 2048,
      height: 1152,
    },
    mentorshipGrowth: {
      src: "/images/generated/mentorship-growth.webp",
      alt: "A mentor pointing at a growth chart while a creator listens attentively",
      width: 1760,
      height: 1328,
    },
    processOnboarding: {
      src: "/images/generated/process-onboarding.webp",
      alt: "A team reviewing a step-by-step onboarding process on a large screen",
      width: 1760,
      height: 1328,
    },
    agentPartnership: {
      src: "/images/generated/agent-partnership.webp",
      alt: "A talent agent shaking hands with a creator in a bright modern office",
      width: 1760,
      height: 1328,
    },
    successMilestone: {
      src: "/images/generated/success-milestone.webp",
      alt: "A creator celebrating a growth milestone while looking at phone analytics",
      width: 2048,
      height: 1152,
    },
    talentRecruitment: {
      src: "/images/generated/talent-recruitment.webp",
      alt: "Three creators and talent scouts standing together in a bright studio",
      width: 928,
      height: 1152,
    },
    networkArtwork: {
      src: "/images/generated/network-artwork.webp",
      alt: "Abstract glowing network of connected nodes in cyan, purple and magenta",
      width: 2048,
      height: 1152,
    },
    streamerHeroWide: {
      src: "/images/generated/streamer-hero-wide.webp",
      alt: "A creator speaking energetically into a microphone in a modern home streaming studio",
      width: 1872,
      height: 1248,
    },
    benefitGuidance: {
      src: "/images/generated/benefit-guidance.webp",
      alt: "Illustration of a mentor guiding a creator along a glowing pathway",
      width: 1760,
      height: 1328,
    },
    benefitSupport: {
      src: "/images/generated/benefit-support.webp",
      alt: "Illustration of a support headset with creator microphone and soundwaves",
      width: 1760,
      height: 1328,
    },
    benefitPlatforms: {
      src: "/images/generated/benefit-platforms.webp",
      alt: "Illustration of a glowing globe with connected platform screens orbiting it",
      width: 1760,
      height: 1328,
    },
    benefitNetwork: {
      src: "/images/generated/benefit-network.webp",
      alt: "Illustration of a network of connected people forming a supportive team",
      width: 1760,
      height: 1328,
    },
    benefitLearning: {
      src: "/images/generated/benefit-learning.webp",
      alt: "Illustration of an open book with a glowing lightbulb and learning path icons",
      width: 1760,
      height: 1328,
    },
    benefitEcosystem: {
      src: "/images/generated/benefit-ecosystem.webp",
      alt: "Illustration of interconnected gears and puzzle pieces forming an ecosystem",
      width: 1760,
      height: 1328,
    },
  },
} as const;
export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}
