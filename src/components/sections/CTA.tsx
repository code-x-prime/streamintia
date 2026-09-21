import { ButtonLink } from "@/components/ui/Button";
export function CTA() {
  return (
    <section className="outline-section">
      <h2>Explore your next step</h2>
      <div className="mt-4 flex flex-wrap gap-4">
        <ButtonLink href="/apply">Apply Now</ButtonLink>
        <ButtonLink href="/contact">Contact us</ButtonLink>
      </div>
    </section>
  );
}
