"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { assets, type ImageAsset } from "@/config/assets";
import { homeServices } from "@/config/services";
import { HomeIcon } from "@/components/ui/HomeIcon";
const visuals: Record<(typeof homeServices)[number]["image"], ImageAsset> = {
  talentRecruitment: assets.visuals.talentRecruitment,
  agentPartnership: assets.visuals.agentPartnership,
  mentorshipGrowth: assets.visuals.mentorshipGrowth,
  creatorTools: assets.visuals.creatorTools,
  processOnboarding: assets.visuals.processOnboarding,
  successMilestone: assets.visuals.successMilestone,
};
// Keeps each photo's subject (faces, screens) in frame once the box crops
// to a landscape ratio — the source photos aren't all shot the same way.
const focalPoint: Record<(typeof homeServices)[number]["image"], string> = {
  talentRecruitment: "center 15%",
  agentPartnership: "center 40%",
  mentorshipGrowth: "center 35%",
  creatorTools: "center 55%",
  processOnboarding: "center 45%",
  successMilestone: "center 40%",
};
const AUTO_ROTATE_MS = 4200;
export function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const active = homeServices[activeIndex];
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % homeServices.length);
    }, AUTO_ROTATE_MS);
    return () => window.clearInterval(id);
  }, [paused]);
  return (
    <div
      className="services-showcase"
      data-stagger
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <article className="service-feature" data-reveal>
        <div className="service-feature-art">
          {homeServices.map((service, index) => {
            const visual = visuals[service.image];
            return (
              <Image
                key={service.id}
                src={visual.src}
                alt={visual.alt}
                width={visual.width}
                height={visual.height}
                sizes="(max-width: 767px) 100vw, 33vw"
                style={{ objectPosition: focalPoint[service.image] }}
                data-active={index === activeIndex ? "true" : undefined}
                priority={index === 0}
              />
            );
          })}
        </div>
        <div>
          <span className="service-feature-index">
            0{activeIndex + 1}
            <HomeIcon name={active.icon} />
          </span>
          <h3>
            <Link href="/services">
              {active.name}
              <HomeIcon name="arrow" />
            </Link>
          </h3>
          <p key={active.id}>{active.description}</p>
        </div>
      </article>
      <ul className="service-list">
        {homeServices.map((service, index) => (
          <li key={service.id}>
            <button
              type="button"
              className="service-list-row"
              data-active={index === activeIndex ? "true" : undefined}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
            >
              <span className="service-list-icon">
                <HomeIcon name={service.icon} />
              </span>
              <span className="service-list-copy">
                <span className="service-list-index">0{index + 1}</span>
                <span className="service-list-name">{service.name}</span>
                <span className="service-list-description">
                  {service.description}
                </span>
              </span>
              <HomeIcon name="arrow" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
