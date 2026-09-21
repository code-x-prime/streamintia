import { site } from "@/config/site";
import { HomeIcon, type HomeIconName } from "@/components/ui/HomeIcon";
const icons: HomeIconName[] = ["network", "spark", "compass", "globe"];
export function StatsStrip() {
  return (
    <section
      id="our-network"
      className="stats-section relative z-3 pb-16 bg-white max-[767px]:pt-0"
      aria-label="Our network"
    >
      <div className="home-container">
        <div
          className="relative -mt-5 grid grid-cols-[1.3fr_repeat(4,1fr)] gap-0 rounded-2xl border border-[rgb(28_35_81/0.1)] bg-[radial-gradient(circle_at_0_0,rgb(18_217_244/0.1),transparent_27%),radial-gradient(circle_at_100%_100%,rgb(139_77_255/0.08),transparent_25%),rgb(255_255_255/0.98)] p-8 shadow-[0_24px_65px_rgb(31_38_84/0.1)] max-[1023px]:grid-cols-[1.3fr_repeat(4,1fr)] max-[1023px]:p-7 max-[767px]:-mt-3 max-[767px]:grid-cols-2 max-[767px]:gap-y-6 max-[767px]:gap-x-0 max-[767px]:p-6"
          data-stagger
        >
          <div className="pr-6 max-[767px]:col-span-full max-[767px]:flex max-[767px]:items-center max-[767px]:justify-between max-[767px]:border-b max-[767px]:border-(--home-border) max-[767px]:pb-6 max-[767px]:pr-0">
            <p className="home-eyebrow mb-2 text-[0.5rem] max-[767px]:m-0 max-[767px]:max-w-[8rem]">
              PEOPLE AT THE CENTRE
            </p>
            <p className="font-[family-name:var(--font-display),sans-serif] text-base leading-[1.5] text-(--text-secondary) max-[767px]:text-right max-[767px]:text-[0.875rem]">
              A network built
              <br />
              for what’s next.
            </p>
          </div>
          {site.stats.map((stat, index) => (
            <div
              className="stat-item flex flex-col justify-center border-l border-(--home-border) pl-8 max-[1023px]:pl-5 max-[767px]:border-l-0 max-[767px]:pl-0 max-[767px]:odd:border-l max-[767px]:odd:border-(--home-border) max-[767px]:odd:pl-6"
              key={stat.label}
              data-reveal
            >
              <HomeIcon name={icons[index]} />
              <strong
                className={`font-[family-name:var(--font-display),sans-serif] text-[2.5rem] leading-[1.2] font-medium text-[#11183f] max-[767px]:text-[2rem] ${stat.value ? "" : "network-value-pending"}`}
                aria-label={stat.value ?? "Awaiting verified data"}
              >
                {stat.value ?? "—"}
              </strong>
              <span className="mt-2 text-[0.6875rem] text-(--home-muted) max-[767px]:text-[0.625rem]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
        <p className="content-status mt-4 text-[0.625rem] text-(--home-muted) max-[767px]:max-w-[25rem] max-[767px]:text-[0.5625rem] max-[767px]:leading-[1.8]">
          Our story is taking shape. Verified network figures will be shared
          here.
        </p>
      </div>
    </section>
  );
}
