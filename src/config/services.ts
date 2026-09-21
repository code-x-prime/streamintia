export const services = [
  {
    id: "service-0",
    name: "Talent Recruitment",
    description:
      "Discover emerging creators and help promising talent find a clear path into live streaming.",
  },
  {
    id: "service-1",
    name: "Live Streamer Recruitment",
    description:
      "Explore creator opportunities with practical guidance for preparing and taking your first step.",
  },
  {
    id: "service-2",
    name: "Agent Recruitment",
    description:
      "Build meaningful creator connections and develop a network with purpose.",
  },
  {
    id: "service-3",
    name: "Talent Management",
    description:
      "Bring structure, direction and consistency to each stage of a creator's journey.",
  },
  {
    id: "service-4",
    name: "Creator Support",
    description:
      "Get practical support while developing confidence, routines and a sustainable creative approach.",
  },
  {
    id: "service-5",
    name: "Training & Guidance",
    description:
      "Understand the fundamentals, prepare with confidence and keep improving through clear guidance.",
  },
  {
    id: "service-6",
    name: "Platform Onboarding",
    description:
      "Understand platform requirements and prepare the information needed for the onboarding journey.",
  },
  {
    id: "service-7",
    name: "Growth & Performance Support",
    description:
      "Review progress, strengthen your approach and build toward each new milestone.",
  },
];

// Homepage summaries; the existing service-page outline remains unchanged.
export const homeServices = [
  {
    ...services[0],
    description:
      "A place for your potential. We help emerging talent explore where their voice, personality and creativity could take them.",
    icon: "spark",
    image: "talentRecruitment",
  },
  {
    ...services[2],
    description:
      "Connect with creators and learn to build a network with purpose.",
    icon: "network",
    image: "agentPartnership",
  },
  {
    ...services[3],
    description:
      "Bring direction and consistency to your next creative chapter.",
    icon: "compass",
    image: "mentorshipGrowth",
  },
  {
    ...services[4],
    description:
      "Find guidance as you develop your confidence and streaming routine.",
    icon: "support",
    image: "creatorTools",
  },
  {
    ...services[6],
    description:
      "Understand the requirements and get ready for your first step.",
    icon: "broadcast",
    image: "processOnboarding",
  },
  {
    ...services[7],
    name: "Growth Guidance",
    description:
      "Reflect, learn and build a stronger approach with every new experience.",
    icon: "growth",
    image: "successMilestone",
  },
] as const;
