import { JourneyTabs } from "@/components/resources/JourneyTabs";
import { FeatureGrid } from "@/components/inner/FeatureGrid";

const streamer = [
  {
    title: "Choose your path",
    description:
      "Explore the creator opportunity and current programme status.",
  },
  {
    title: "Select a platform",
    description: "Compare fit, location and confirmed requirements.",
  },
  {
    title: "Share your interest",
    description: "Complete the application when submissions open.",
  },
  {
    title: "Review and onboarding",
    description: "Receive an eligibility review and clear next steps.",
  },
  {
    title: "Start streaming",
    description: "Prepare your setup, format and first consistent routine.",
  },
  {
    title: "Learn and grow",
    description: "Review progress and keep strengthening your approach.",
  },
];
const agent = [
  {
    title: "Explore the role",
    description: "Understand the responsibilities of supporting creators.",
  },
  {
    title: "Share your interest",
    description:
      "Tell us about your experience and network when applications open.",
  },
  {
    title: "Confirm programme fit",
    description:
      "Review requirements, responsibilities and available platforms.",
  },
  {
    title: "Discover creators",
    description: "Build relationships and explain opportunities responsibly.",
  },
  {
    title: "Support onboarding",
    description: "Help creators understand requirements and stay organised.",
  },
  {
    title: "Develop your network",
    description: "Improve communication and build shared progress over time.",
  },
];
const benefits = [
  {
    title: "Clear expectations",
    description:
      "Understand status, eligibility and the next action at each stage.",
    icon: "compass" as const,
  },
  {
    title: "Practical support",
    description:
      "Find direction for platform readiness and onboarding questions.",
    icon: "support" as const,
  },
  {
    title: "Room to develop",
    description: "Build confidence, consistency and better working habits.",
    icon: "growth" as const,
  },
];

export function HowItWorksSections() {
  return (
    <>
      <section
        id="journeys"
        className="home-section px-(--home-gutter) py-[clamp(4.5rem,9vw,8rem)] max-[767px]:py-18 bg-white"
      >
        <div className="home-container">
          <div className="mb-[clamp(2rem,5vw,4rem)] max-w-[760px]">
            <p className="home-eyebrow">HOW IT WORKS</p>
            <h2 className="mt-[0.9rem] text-[clamp(2.15rem,5vw,4.7rem)] leading-[0.98] tracking-[-0.065em]">
              One clear process.{" "}
              <span className="home-gradient-text">Two journeys.</span>
            </h2>
          </div>
          <JourneyTabs streamer={streamer} agent={agent} />
        </div>
      </section>
      <section className="home-section bg-[linear-gradient(145deg,#f7fbff,#f8f5ff)] px-(--home-gutter) py-[clamp(4.5rem,9vw,8rem)] max-[767px]:py-18">
        <div className="home-container">
          <div className="mb-[clamp(2rem,5vw,4rem)] max-w-[760px]">
            <p className="home-eyebrow">AFTER YOU APPLY</p>
            <h2 className="mt-[0.9rem] text-[clamp(2.15rem,5vw,4.7rem)] leading-[0.98] tracking-[-0.065em]">
              What comes next.
            </h2>
            <p className="mt-5 max-w-[650px] text-(--home-muted) leading-[1.8]">
              Applications are reviewed against current availability and
              eligibility. If there is a suitable next step, the team explains
              the requirements before onboarding begins.
            </p>
          </div>
          <FeatureGrid features={benefits} compact />
        </div>
      </section>
    </>
  );
}
