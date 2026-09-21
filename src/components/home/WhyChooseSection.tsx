import Image from "next/image";
import { assets } from "@/config/assets";
import { benefits } from "@/config/home";
import { HomeIcon, type HomeIconName } from "@/components/ui/HomeIcon";
import { ButtonLink } from "@/components/ui/Button";
const icons: HomeIconName[] = [
  "compass",
  "support",
  "play",
  "network",
  "spark",
  "globe",
];
export function WhyChooseSection() {
  return (
    <section
      id="why-streamintia"
      className="home-section relative bg-white in-[.home-page]:bg-transparent"
    >
      <div className="home-container">
        <div className="mb-10" data-reveal>
          <p className="home-eyebrow">WHY STREAMINTIA</p>
          <h2>
            More than a<br />
            place to start.
          </h2>
          <p className="home-lead mt-3 max-w-[34rem] text-sm leading-[1.7] text-[#727b94]">
            Helping creators and agents understand their options, get started
            with confidence and keep moving forward.
          </p>
          <ButtonLink href="/why-streamintia" variant="text" className="mt-[22px]">
            Discover our approach
            <HomeIcon name="arrow" />
          </ButtonLink>
        </div>
        <div
          className="grid grid-cols-4 auto-rows-[minmax(150px,auto)] gap-4 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1"
          data-stagger
        >
          <div
            className="relative col-[1/3] row-[1/3] overflow-hidden rounded-[28px] bg-[#f0eaff] shadow-[0_22px_55px_#514b8717] max-[900px]:col-[1/3] max-[900px]:row-auto max-[900px]:h-[280px] max-[560px]:col-[1]"
            data-reveal
          >
            <Image
              src={assets.visuals.agentGuidance.src}
              alt={assets.visuals.agentGuidance.alt}
              width={1536}
              height={1024}
              sizes="(max-width: 900px) 100vw, 38vw"
              data-section-image
              className="h-full w-full object-cover object-[42%_center]"
            />
            <div className="absolute left-[18px] right-[18px] bottom-[18px] flex items-center gap-[14px] rounded-2xl bg-[#ffffffed] px-[18px] py-4 text-[13px] text-[#5c6288] shadow-[0_12px_30px_#23264b1a] backdrop-blur-[10px]">
              <HomeIcon name="compass" className="h-7 w-7 shrink-0 text-[#8860d8]" />
              <span>
                People first.
                <br />
                <strong className="font-semibold text-[#23264b]">
                  Progress, together.
                </strong>
              </span>
            </div>
          </div>
          {benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className={`group relative col-span-2 overflow-hidden rounded-[20px] border border-[rgb(42_52_105/0.1)] bg-white p-[22px] shadow-[0_12px_30px_rgb(42_52_105/0.05)] transition-[transform,box-shadow,border-color] duration-300 ease-[var(--ease-standard)] hover:-translate-y-1 hover:border-[rgb(18_217_244/0.3)] hover:shadow-[0_22px_45px_rgb(42_52_105/0.1)] after:content-[''] after:absolute after:inset-0 after:-z-10 after:opacity-0 after:bg-[radial-gradient(160px_circle_at_85%_-10%,rgb(139_77_255/0.1),transparent_70%)] after:transition-opacity after:duration-300 after:ease-[var(--ease-standard)] hover:after:opacity-100 max-[900px]:col-span-1${index === 0 ? " col-[3/5] max-[900px]:col-span-1" : ""}`}
              data-reveal
            >
              <span className="mb-3.5 grid h-[42px] w-[42px] place-items-center rounded-xl bg-[linear-gradient(135deg,#12d9f4,#8b4dff)] text-white shadow-[0_10px_20px_-8px_#8b4dff66] [&>svg]:h-5 [&>svg]:w-5">
                <HomeIcon name={icons[index]} />
              </span>
              <h3 className="text-[15px] tracking-[-0.01em]">{benefit.title}</h3>
              <p className="mt-1.5 text-[12.5px] leading-[1.6] text-[#727b94]">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
