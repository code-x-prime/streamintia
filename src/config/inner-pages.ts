import type { HomeIconName } from "@/components/ui/HomeIcon";
export interface Feature {
  title: string;
  description: string;
  icon: HomeIconName;
}
export const aboutValues = [
  {
    label: "OUR MISSION",
    title: "Make the next step\nfeel possible.",
    description:
      "Connect emerging talent with guidance, people and platform opportunities that help them move forward.",
    tone: "cyan",
  },
  {
    label: "OUR VISION",
    title: "A connected future\nfor creative talent.",
    description:
      "A creator ecosystem where ambition has direction and people can build meaningful, lasting connections.",
    tone: "purple",
  },
];
export const aboutFeatures: Feature[] = [
  {
    title: "Professional guidance",
    description:
      "Make informed decisions with a clear understanding of the next step.",
    icon: "compass",
  },
  {
    title: "Creator support",
    description:
      "Build confidence and consistency as you develop your approach.",
    icon: "support",
  },
  {
    title: "Platform opportunities",
    description:
      "Explore available programmes and understand their requirements.",
    icon: "play",
  },
  {
    title: "Agent opportunities",
    description: "Bring people together and support a growing creator network.",
    icon: "network",
  },
  {
    title: "Growth focus",
    description: "Learn, reflect and develop through each new experience.",
    icon: "growth",
  },
  {
    title: "Long-term thinking",
    description: "Build relationships that look beyond the first conversation.",
    icon: "spark",
  },
];
export const streamerFeatures: Feature[] = [
  {
    title: "A rhythm that fits you",
    description:
      "Explore how streaming can fit your routine, subject to platform programme requirements.",
    icon: "compass",
  },
  {
    title: "A place for your voice",
    description:
      "Bring your interests and personality into a live conversation.",
    icon: "broadcast",
  },
  {
    title: "Creator guidance",
    description:
      "Develop your confidence and approach with practical direction.",
    icon: "support",
  },
  {
    title: "Platform opportunities",
    description:
      "Explore the options and find out what each programme expects.",
    icon: "play",
  },
  {
    title: "Genuine connections",
    description:
      "Build your audience through respectful, consistent interaction.",
    icon: "network",
  },
  {
    title: "A thoughtful start",
    description: "Understand onboarding before making your first stream.",
    icon: "growth",
  },
];
export const agentFeatures: Feature[] = [
  {
    title: "Build your network",
    description: "Connect with people whose creative potential you believe in.",
    icon: "network",
  },
  {
    title: "Develop leadership",
    description: "Learn to organise, communicate and support a creator team.",
    icon: "compass",
  },
  {
    title: "Guidance along the way",
    description: "Find direction for recruitment and creator onboarding.",
    icon: "support",
  },
  {
    title: "Explore platforms",
    description: "Understand programme fit before introducing creators.",
    icon: "play",
  },
  {
    title: "Create shared progress",
    description: "Help talent build confidence, consistency and good habits.",
    icon: "growth",
  },
  {
    title: "Work with purpose",
    description: "Put clear expectations and respectful relationships first.",
    icon: "spark",
  },
];
export const streamerSupport = [
  {
    title: "Find your direction",
    description:
      "Talk through your interests and the kind of creator you want to become.",
  },
  {
    title: "Understand onboarding",
    description:
      "Get clarity on the process, account setup and platform expectations.",
  },
  {
    title: "Explore platform fit",
    description:
      "Learn about availability and the requirements of each programme.",
  },
  {
    title: "Build your routine",
    description:
      "Develop a thoughtful approach to content and audience interaction.",
  },
  {
    title: "Plan your next step",
    description: "Reflect on what you learn and identify areas to develop.",
  },
];
export const agentResponsibilities = [
  {
    title: "Discover talent",
    description:
      "Find people with creativity, personality and a willingness to learn.",
  },
  {
    title: "Make introductions",
    description:
      "Help creators explore platform fit and understand onboarding.",
  },
  {
    title: "Support your team",
    description:
      "Stay organised and make expectations clear from the beginning.",
  },
  {
    title: "Build relationships",
    description:
      "Be a reliable point of contact and encourage respectful communication.",
  },
  {
    title: "Help people grow",
    description: "Support consistency, learning and shared progress.",
  },
];
export const streamerSteps = [
  {
    title: "Choose your platform",
    description: "Explore programme availability and requirements.",
  },
  {
    title: "Apply",
    description: "Share your interests and preferred platform.",
  },
  {
    title: "Get onboarded",
    description: "Understand the setup and expectations.",
  },
  {
    title: "Start streaming",
    description: "Introduce yourself and build your routine.",
  },
  {
    title: "Keep growing",
    description: "Learn from each stream and refine your approach.",
  },
];
export const agentSteps = [
  {
    title: "Join Streamintia",
    description: "Tell us about your interests and network.",
  },
  { title: "Discover talent", description: "Connect with promising creators." },
  {
    title: "Onboard creators",
    description: "Help your team understand their next steps.",
  },
  {
    title: "Support your team",
    description: "Stay in touch and encourage consistency.",
  },
  {
    title: "Grow your network",
    description: "Build relationships and develop together.",
  },
];
export const streamerRequirements = [
  "An interest in creating live content and connecting with an audience.",
  "Access to a suitable device and a reliable internet connection.",
  "A willingness to learn, communicate and follow platform guidelines.",
  "The ability to meet the chosen platform’s eligibility and onboarding requirements.",
];
export const agentRequirements = [
  "An interest in discovering talent and supporting creators.",
  "Clear communication, organisation and relationship-building skills.",
  "A willingness to understand programme rules and set realistic expectations.",
  "The ability to meet the relevant platform’s agent eligibility and onboarding requirements.",
];
export const applicationTrust: Feature[] = [
  {
    title: "A clearer direction",
    description: "Choose the creator or agent path that fits your interests.",
    icon: "compass",
  },
  {
    title: "Platform discovery",
    description: "Explore programmes before choosing your next step.",
    icon: "play",
  },
  {
    title: "People-focused support",
    description: "Begin with a conversation about your goals.",
    icon: "support",
  },
  {
    title: "Thoughtful onboarding",
    description: "Understand expectations before you get started.",
    icon: "growth",
  },
];
export const applicationRoles = [
  {
    value: "streamer",
    label: "Streamer",
    description: "Your voice. Your live-streaming journey.",
    icon: "broadcast",
  },
  {
    value: "agent",
    label: "Agent",
    description: "Your network. A team with potential.",
    icon: "network",
  },
] as const;
export const contactSubjects = [
  { value: "general", label: "General enquiry" },
  { value: "streamer", label: "Streamer opportunity" },
  { value: "agent", label: "Agent opportunity" },
  { value: "business", label: "Business enquiry" },
  { value: "partnership", label: "Partnership enquiry" },
] as const;
