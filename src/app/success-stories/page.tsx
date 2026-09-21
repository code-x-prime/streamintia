import { InnerPageShell } from "@/components/inner/InnerPageShell";
import { InnerPageHero } from "@/components/inner/InnerPageHero";
import { FinalCTA } from "@/components/home/FinalCTA";
import { ButtonLink } from "@/components/ui/Button";
import { HomeIcon } from "@/components/ui/HomeIcon";
import { assets } from "@/config/assets";
import { testimonials } from "@/config/testimonials";
import { createMetadata } from "@/lib/metadata";

const impact = [
  ["Clarity", "A better understanding of programme fit and next steps."],
  [
    "Confidence",
    "More comfort with preparation, communication and going live.",
  ],
  ["Consistency", "A practical routine that can improve through experience."],
];
export const metadata = createMetadata(
  "Success Stories",
  "Approved Streamintia creator and agent stories.",
  "/success-stories",
);
export default function SuccessStoriesPage() {
  const approved = testimonials.filter((item) => item.approved);
  return (
    <InnerPageShell tone="purple">
      <InnerPageHero
        eyebrow="CREATOR & AGENT JOURNEYS"
        breadcrumb="Success Stories"
        title={
          <>
            Progress has a{" "}
            <span className="home-gradient-text">human story.</span>
          </>
        }
        description="A home for verified creator and agent experiences, shared only with approval and clear attribution."
        image={assets.visuals.successMilestone}
      >
        <ButtonLink href="#stories" variant="primary">
          Explore stories <HomeIcon name="arrow" />
        </ButtonLink>
      </InnerPageHero>
      <section
        id="stories"
        className="home-section px-(--home-gutter) py-[clamp(4.5rem,9vw,8rem)] max-[767px]:py-18 bg-white"
      >
        <div className="home-container">
          <div className="mb-[clamp(2rem,5vw,4rem)] max-w-[760px]">
            <p className="home-eyebrow">REAL STORIES, RESPONSIBLY SHARED</p>
            <h2 className="mt-[0.9rem] text-[clamp(2.15rem,5vw,4.7rem)] leading-[0.98] tracking-[-0.065em]">
              People first.{" "}
              <span className="home-gradient-text">Proof with permission.</span>
            </h2>
            <p className="mt-5 max-w-[650px] text-[#626d89] leading-[1.8]">
              No testimonials are published until the person, wording and
              permission are verified.
            </p>
          </div>
          <div className="grid grid-cols-[1.2fr_0.8fr] gap-4 max-[767px]:grid-cols-1">
            {approved.length
              ? approved.map((item) => (
                  <blockquote
                    key={item.id}
                    className="min-h-[300px] rounded-2xl border border-dashed border-[rgb(75_74_155/0.25)] bg-[linear-gradient(145deg,#ffffff,#f7f5ff)] p-7"
                  >
                    <p>“{item.quote}”</p>
                    <cite>
                      {item.name} · {item.role}
                    </cite>
                  </blockquote>
                ))
              : ["Creator", "Agent", "Growth"].map((type, index) => (
                  <article
                    className={`rounded-2xl border border-dashed border-[rgb(75_74_155/0.25)] bg-[linear-gradient(145deg,#ffffff,#f7f5ff)] p-7 [&>span]:text-[0.68rem] [&>span]:font-bold [&>span]:tracking-[0.1em] [&>span]:text-[#7059e3] [&>span]:uppercase [&>h3]:mt-3 [&>h3]:text-[1.65rem] [&>p]:mt-3 [&>p]:text-[#69728c] [&>p]:leading-[1.7] ${
                      index === 0
                        ? "row-span-2 flex min-h-[616px] flex-col justify-end max-[767px]:min-h-[340px] max-[767px]:[grid-row:auto]"
                        : "min-h-[300px]"
                    }`}
                    key={type}
                  >
                    <span>{type} journey</span>
                    <h3>Client story placeholder</h3>
                    <p>
                      An approved and consented story will appear here when
                      verified content is available.
                    </p>
                  </article>
                ))}
          </div>
        </div>
      </section>
      <section className="home-section bg-[linear-gradient(145deg,#f7fbff,#f8f5ff)] px-(--home-gutter) py-[clamp(4.5rem,9vw,8rem)] max-[767px]:py-18">
        <div className="home-container">
          <div className="mb-[clamp(2rem,5vw,4rem)] max-w-[760px]">
            <p className="home-eyebrow">WHAT PROGRESS CAN LOOK LIKE</p>
            <h2 className="mt-[0.9rem] text-[clamp(2.15rem,5vw,4.7rem)] leading-[0.98] tracking-[-0.065em]">
              Meaningful changes, described honestly.
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-4 max-[767px]:grid-cols-1">
            {impact.map(([title, text], index) => (
              <article
                key={title}
                className="border-t border-[rgb(40_54_122/0.14)] p-7 [&>span]:text-[0.7rem] [&>span]:text-[#7059e3] [&>h3]:mt-12 [&>h3]:text-[1.7rem] [&>p]:mt-3 [&>p]:text-[#69728c] [&>p]:leading-[1.7]"
              >
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA
        title={
          <>
            Your story can begin with{" "}
            <span className="home-gradient-text">one clear step.</span>
          </>
        }
        description="Explore an opportunity and learn what the journey involves."
      />
    </InnerPageShell>
  );
}
