"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SectionIntro } from "./SectionIntro";
import CardSwap, { Card } from "./CardSwap";
import { assets } from "@/config/assets";
import { benefits } from "@/config/home";

const cardImages = [
  assets.visuals.benefitGuidance,
  assets.visuals.benefitSupport,
  assets.visuals.benefitPlatforms,
  assets.visuals.benefitNetwork,
  assets.visuals.benefitLearning,
  assets.visuals.benefitEcosystem,
];

const breakpoints = [
  { max: 400, width: 230, height: 240, cardDistance: 22, verticalDistance: 26 },
  { max: 480, width: 250, height: 255, cardDistance: 26, verticalDistance: 30 },
  { max: 640, width: 280, height: 265, cardDistance: 32, verticalDistance: 36 },
  { max: 1023, width: 320, height: 270, cardDistance: 42, verticalDistance: 48 },
] as const;
const defaultSize = { width: 360, height: 300, cardDistance: 50, verticalDistance: 56 };

function useCardSwapSize() {
  const [size, setSize] = useState(defaultSize);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const match = breakpoints.find((bp) => w <= bp.max);
      setSize(match ?? defaultSize);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return size;
}

export function CardSwapSection() {
  const { width, height, cardDistance, verticalDistance } = useCardSwapSize();
  return (
    <section
      id="benefits"
      className="home-section overflow-hidden bg-[radial-gradient(circle_at_8%_20%,rgb(18_217_244/0.07),transparent_30%),radial-gradient(circle_at_95%_80%,rgb(139_77_255/0.08),transparent_32%)]"
    >
      <div className="home-container grid grid-cols-[1fr_1fr] items-center gap-8 max-[1023px]:grid-cols-1 max-[1023px]:gap-6">
        <SectionIntro
          eyebrow="PEOPLE AT THE CENTRE"
          title={
            <>
              More than
              <br />
              <span className="home-gradient-text">an agency.</span>
            </>
          }
          description="Streamintia brings creators, agents and streaming opportunities together through a connected ecosystem designed to help people get started, find the right path and keep moving forward."
        />
        <div className="relative h-105 max-[1023px]:h-85 max-[640px]:h-67.5 max-[480px]:h-75 max-[360px]:h-67.5">
          <CardSwap
            width={width}
            height={height}
            cardDistance={cardDistance}
            verticalDistance={verticalDistance}
            delay={3000}
            pauseOnHover
            skewAmount={5}
          >
            {benefits.map((benefit, index) => {
              const image = cardImages[index % cardImages.length];
              return (
                <Card key={benefit.title}>
                  <div className="relative h-[55%] overflow-hidden bg-[linear-gradient(150deg,#f5f8ff,#f1f4ff)]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      sizes="360px"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-[0.4rem] px-[1.35rem] pt-[1.1rem] pb-[1.35rem]">
                    <h3 className="font-heading text-[1.15rem] font-[650] tracking-tighter text-[#10163f]">
                      {benefit.title}
                    </h3>
                    <p className="text-[0.8125rem] leading-[1.6] text-(--home-muted)">
                      {benefit.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </CardSwap>
        </div>
      </div>
    </section>
  );
}
