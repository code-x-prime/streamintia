import { HomeIcon } from "@/components/ui/HomeIcon";
export function RequirementsSection({
  items,
  role,
}: {
  items: readonly string[];
  role: string;
}) {
  return (
    <section className="home-section">
      <div className="home-container grid grid-cols-2 gap-20 max-[1100px]:gap-10 max-[767px]:grid-cols-1 max-[767px]:gap-10">
        <div data-reveal>
          <p className="home-eyebrow">A THOUGHTFUL START</p>
          <h2>
            Is this your
            <br />
            next step?
          </h2>
          <p className="home-lead">
            A few things to consider as you explore becoming {role}.
          </p>
          <p className="mt-6 max-w-[30rem] text-[0.75rem] leading-[1.85] text-(--home-muted)">
            Final eligibility, availability and terms depend on the selected
            platform. Details will be confirmed before joining.
          </p>
        </div>
        <ul
          data-reveal
          className="border-t border-(--home-border) text-[#44506f]"
        >
          {items.map((item) => (
            <li
              key={item}
              className="flex gap-4 border-b border-(--home-border) py-6 text-[0.9375rem] leading-[1.8] text-(--text-secondary) [&>svg]:mt-[0.3rem] [&>svg]:h-[18px] [&>svg]:w-[18px] [&>svg]:shrink-0 [&>svg]:text-(--inner-accent)"
            >
              <HomeIcon name="check" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
