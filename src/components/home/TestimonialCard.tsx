import Image from "next/image";
import type { Testimonial } from "@/config/testimonials";
export function TestimonialCard({
  testimonial,
  label = "A story worth sharing",
  featured = false,
}: {
  testimonial?: Testimonial;
  label?: string;
  featured?: boolean;
}) {
  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-xl border border-(--home-border) bg-[rgb(255_255_255/0.012)] py-8 pr-8 pl-[4.5rem] shadow-none before:pointer-events-none before:absolute before:inset-0 before:[background:linear-gradient(115deg,transparent_25%,rgb(255_255_255/0.55),transparent_60%)] before:-translate-x-[120%] before:transition-transform before:duration-[650ms] before:ease-[var(--ease-standard)] hover:before:translate-x-[120%] max-[1023px]:py-7 max-[1023px]:pr-6 max-[1023px]:pl-14 ${
        featured
          ? "row-span-2 bg-[radial-gradient(ellipse_at_0_0,rgb(139_77_255/0.08),transparent_60%),rgb(255_255_255/0.015)] p-12 max-[1023px]:row-auto max-[1023px]:min-h-[330px] max-[1023px]:p-8"
          : ""
      }`}
      data-reveal
    >
      <span
        className={`absolute top-6 left-6 font-[family-name:var(--font-display),sans-serif] text-5xl leading-none text-[rgb(18_217_244/0.45)] max-[1023px]:left-[1.1rem] ${
          featured ? "static mb-4 text-[5rem]" : ""
        }`}
        aria-hidden="true"
      >
        “
      </span>
      {testimonial ? (
        <>
          <blockquote>
            <p
              className={`mb-6 text-base leading-[1.8] text-(--text-secondary) ${featured ? "text-[1.4rem]" : ""}`}
            >
              {testimonial.quote}
            </p>
          </blockquote>
          <div className="mt-auto flex items-center gap-3 pt-4 text-[0.625rem] text-(--home-muted)">
            {testimonial.image ? (
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={48}
                height={48}
                className="h-9 w-9 shrink-0 rounded-full object-cover"
              />
            ) : (
              <span
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-dashed border-[rgb(184_188_217/0.25)] bg-[rgb(255_255_255/0.015)] text-(--home-muted)"
                aria-hidden="true"
              >
                {testimonial.name.charAt(0)}
              </span>
            )}
            <div>
              <h3
                className={`text-[1.1rem] font-medium leading-[1.4] text-[0.875rem] ${featured ? "text-[1.75rem] tracking-[-0.025em]" : ""}`}
              >
                {testimonial.name}
              </h3>
              <span>
                {testimonial.role === "streamer" ? "Creator" : "Agent"}
              </span>
            </div>
          </div>
        </>
      ) : (
        <>
          <span className="mb-3.5 block text-[0.5rem] tracking-[0.12em] text-(--home-muted)">
            CLIENT CONTENT / PENDING
          </span>
          <h3
            className={`text-[1.1rem] font-medium leading-[1.4] ${featured ? "text-[1.75rem] tracking-[-0.025em]" : ""}`}
          >
            {label}
          </h3>
          <p
            className={`mt-4 mb-6 text-[0.8125rem] leading-[1.85] text-(--home-muted) ${featured ? "text-[1.4rem]" : ""}`}
          >
            {featured
              ? "Real experiences deserve the spotlight. This space is reserved for a verified creator story, shared with permission."
              : "A verified story will appear here once the contributor has approved it."}
          </p>
          <div className="mt-auto flex items-center gap-3 pt-4 text-[0.625rem] text-(--home-muted)">
            <span
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-dashed border-[rgb(184_188_217/0.25)] bg-[rgb(255_255_255/0.015)] text-(--home-muted)"
              aria-hidden="true"
            >
              —
            </span>
            <span>Contributor & photo pending</span>
          </div>
        </>
      )}
    </article>
  );
}
