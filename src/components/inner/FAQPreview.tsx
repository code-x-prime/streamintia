import type { FAQ } from "@/config/faq";
import { Accordion } from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/Button";
import { HomeIcon } from "@/components/ui/HomeIcon";
export function FAQPreview({ items }: { items: readonly FAQ[] }) {
  return (
    <section className="home-section border-[rgb(28_35_81/0.07)] [background:radial-gradient(circle_at_92%_10%,rgb(139_77_255/0.08),transparent_28%),#f6f8ff]">
      <div className="home-container grid grid-cols-[0.85fr_1.15fr] gap-20 max-[1100px]:gap-10 max-[767px]:grid-cols-1 max-[767px]:gap-10">
        <div data-reveal>
          <p className="home-eyebrow">A LITTLE CLARITY</p>
          <h2 className="text-[clamp(2rem,3.2vw,3rem)]">
            Good questions.
            <br />
            Clearer next steps.
          </h2>
          <ButtonLink href="/contact" variant="text" className="mt-6">
            Contact Us
            <HomeIcon name="arrow" />
          </ButtonLink>
        </div>
        <div
          className="[&_.outline-section]:py-6 [&_details:last-child]:border-b [&_details:last-child]:border-(--home-border) [&_summary]:pr-4 [&_summary]:text-[0.9375rem] [&_summary]:leading-[1.6] [&_p]:pt-2 [&_p]:text-[0.875rem] [&_p]:leading-[1.9] [&_p]:text-(--home-muted)"
          data-reveal
        >
          {items.map((item) => (
            <Accordion key={item.id} title={item.question}>
              <p>{item.answer}</p>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}
