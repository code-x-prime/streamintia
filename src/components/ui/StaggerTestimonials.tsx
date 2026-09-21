"use client";

import { useEffect, useState } from "react";
import { HomeIcon } from "@/components/ui/HomeIcon";

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "My favorite solution in the market. We work 5x faster with Streamintia.",
    by: "Alex, CEO at TechCorp",
    imgSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces",
  },
  {
    tempId: 1,
    testimonial:
      "I'm confident my data is safe with Streamintia. I can't say that about other providers.",
    by: "Dan, CTO at SecureNet",
    imgSrc:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=faces",
  },
  {
    tempId: 2,
    testimonial:
      "I know it's cliche, but we were lost before we found Streamintia. Can't thank you guys enough!",
    by: "Stephanie, COO at InnovateCo",
    imgSrc:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces",
  },
  {
    tempId: 3,
    testimonial:
      "Streamintia's guidance makes planning for the future seamless. Can't recommend them enough!",
    by: "Marie, Creator Success Lead",
    imgSrc:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces",
  },
  {
    tempId: 4,
    testimonial: "If I could give 11 stars, I'd give 12.",
    by: "Andre, Head of Design at CreativeSolutions",
    imgSrc:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=faces",
  },
  {
    tempId: 5,
    testimonial:
      "So happy we found you! I'd bet you've saved me 100 hours so far.",
    by: "Jeremy, Product Manager at TimeWise",
    imgSrc:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces",
  },
];

interface TestimonialCardProps {
  position: number;
  testimonial: (typeof testimonials)[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

function TestimonialCard({
  position,
  testimonial,
  handleMove,
  cardSize,
}: TestimonialCardProps) {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={`absolute top-1/2 left-1/2 flex cursor-pointer flex-col rounded-2xl border-[1.5px] pt-11 px-8 pb-8 shadow-[0_20px_45px_rgb(34_55_105/0.16)] transition-[transform,box-shadow,border-color] duration-500 [transition-timing-function:cubic-bezier(0.2,0.8,0.2,1)] max-[640px]:p-6 ${
        isCenter
          ? "z-[2] border-transparent bg-[image:var(--home-gradient)] text-white shadow-[0_26px_60px_rgb(139_77_255/0.28)]"
          : "z-[1] border-[rgb(44_69_124/0.22)] bg-white hover:border-[rgb(18_217_244/0.4)] hover:[transform-origin:center]"
      }`}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
      }}
    >
      <span
        className={`absolute right-[-2px] top-12 block h-0.5 origin-top-right rotate-45 ${
          isCenter ? "bg-[rgb(255_255_255/0.4)]" : "bg-[rgb(44_69_124/0.25)]"
        }`}
        style={{
          width: SQRT_5000,
        }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={testimonial.imgSrc}
        alt={testimonial.by.split(",")[0]}
        width={52}
        height={52}
        className={`mb-5 h-[3.25rem] w-[3.25rem] shrink-0 rounded-full border-2 object-cover shadow-[0_4px_14px_rgb(34_55_105/0.18)] ${
          isCenter
            ? "border-[rgb(255_255_255/0.9)] shadow-[0_4px_14px_rgb(8_8_45/0.25)]"
            : "border-white"
        }`}
      />
      <p
        className={`text-[0.9375rem] leading-[1.5] font-medium max-[640px]:max-h-[5.8rem] max-[640px]:overflow-hidden max-[640px]:text-xs max-[640px]:leading-[1.45] ${
          isCenter ? "" : "text-[#10163f]"
        }`}
      >
        &ldquo;{testimonial.testimonial}&rdquo;
      </p>
      <p
        className={`absolute bottom-8 left-8 right-8 mt-2 text-[0.8125rem] italic max-[640px]:bottom-6 max-[640px]:left-6 max-[640px]:right-6 max-[640px]:text-[0.6875rem] ${
          isCenter ? "text-[rgb(255_255_255/0.8)]" : "text-(--home-muted)"
        }`}
      >
        - {testimonial.by}
      </p>
    </div>
  );
}

export function StaggerTestimonials() {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    setTestimonialsList((current) => {
      const newList = [...current];
      if (steps > 0) {
        for (let i = steps; i > 0; i--) {
          const item = newList.shift();
          if (!item) return current;
          newList.push({ ...item, tempId: Math.random() });
        }
      } else {
        for (let i = steps; i < 0; i++) {
          const item = newList.pop();
          if (!item) return current;
          newList.unshift({ ...item, tempId: Math.random() });
        }
      }
      return newList;
    });
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => handleMove(1), 4500);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative h-104 w-full overflow-hidden max-[640px]:h-96">
      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2
            ? index - (testimonialsList.length + 1) / 2
            : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-5 left-1/2 z-3 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className="grid h-11 w-11 place-items-center rounded-full border border-[rgb(44_69_124/0.16)] bg-white text-[#10163f] shadow-[0_8px_20px_rgb(34_55_105/0.1)] transition-[background,color,transform] duration-250 hover:-translate-y-0.5 hover:bg-[image:var(--home-gradient)] hover:text-white"
          aria-label="Previous testimonial"
        >
          <HomeIcon name="arrow" className="rotate-180" />
        </button>
        <button
          onClick={() => handleMove(1)}
          className="grid h-11 w-11 place-items-center rounded-full border border-[rgb(44_69_124/0.16)] bg-white text-[#10163f] shadow-[0_8px_20px_rgb(34_55_105/0.1)] transition-[background,color,transform] duration-250 hover:-translate-y-0.5 hover:bg-[image:var(--home-gradient)] hover:text-white"
          aria-label="Next testimonial"
        >
          <HomeIcon name="arrow" />
        </button>
      </div>
    </div>
  );
}
