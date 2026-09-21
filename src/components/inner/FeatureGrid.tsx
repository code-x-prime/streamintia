import type { Feature } from "@/config/inner-pages";
import { HomeIcon } from "@/components/ui/HomeIcon";
export function FeatureGrid({
  features,
  compact = false,
}: {
  features: readonly Feature[];
  compact?: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-3 gap-4 max-[900px]:grid-cols-2 max-[430px]:grid-cols-1 ${
        compact
          ? "max-[1100px]:grid-cols-2"
          : "max-[767px]:grid-cols-2"
      }`}
      data-stagger
    >
      {features.map((feature, index) => (
        <article
          className="group relative overflow-hidden rounded-2xl border border-[rgb(43_57_122_/_0.1)] bg-[rgb(255_255_255_/_0.86)] p-8 shadow-[0_14px_42px_rgb(39_49_105_/_0.07)] transition-[transform,box-shadow,border-color] duration-300 ease-(--ease-standard) hover:-translate-y-[5px] hover:border-[rgb(67_102_218_/_0.2)] hover:shadow-[0_24px_58px_rgb(39_49_105_/_0.12)] max-[767px]:p-6 max-[430px]:p-6 after:pointer-events-none after:absolute after:inset-0 after:content-[''] after:bg-[linear-gradient(115deg,transparent_25%,rgb(255_255_255_/_0.8),transparent_60%)] after:-translate-x-[120%] after:transition-transform after:duration-[650ms] after:ease-(--ease-standard) hover:after:translate-x-[120%]"
          key={feature.title}
          data-reveal
        >
          <div className="mb-8 flex items-center justify-between">
            <span className="text-[0.625rem] text-(--home-muted)">
              0{index + 1}
            </span>
            <HomeIcon
              name={feature.icon}
              className="h-[22px] w-[22px] text-(--inner-accent)"
            />
          </div>
          <h3 className="text-[1.2rem] leading-[1.4] max-[767px]:text-[1.125rem]">
            {feature.title}
          </h3>
          <p className="mt-3 text-[0.875rem] leading-[1.85] text-(--home-muted) max-[767px]:text-[0.8125rem]">
            {feature.description}
          </p>
        </article>
      ))}
    </div>
  );
}
