import Image from "next/image";
import { assets } from "@/config/assets";
import { SectionIntro } from "./SectionIntro";
import { ButtonLink } from "@/components/ui/Button";
import { HomeIcon } from "@/components/ui/HomeIcon";
const panels = [
  {
    label: "CREATORS",
    title: "Find your platform. Build your presence. Keep growing.",
    image: assets.visuals.streamerPortrait,
    href: "/become-streamer",
    cta: "Become a Streamer",
  },
  {
    label: "AGENTS",
    title: "Discover talent. Build your network. Support creators.",
    image: assets.visuals.aboutTeam,
    href: "/become-agent",
    cta: "Become an Agent",
  },
];
export function ExperienceSection() {
  return (
    <section id="experience" className="home-section home-experience">
      <div className="home-container">
        <SectionIntro
          eyebrow="YOUR PATH. OUR CONNECTION."
          title={
            <>
              Built for different paths.
              <br />
              Connected by one ecosystem.
            </>
          }
        />
        <div className="experience-grid" data-stagger>
          {panels.map((panel) => (
            <article key={panel.label} data-reveal>
              <div className="experience-photo">
                <Image
                  src={panel.image.src}
                  alt={panel.image.alt}
                  width={panel.image.width}
                  height={panel.image.height}
                  sizes="(max-width: 767px) 100vw, 50vw"
                  data-section-image
                />
              </div>
              <div className="experience-copy">
                <p className="home-eyebrow">{panel.label}</p>
                <h3>{panel.title}</h3>
                <ButtonLink href={panel.href} variant="text">
                  {panel.cta}
                  <HomeIcon name="arrow" />
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
