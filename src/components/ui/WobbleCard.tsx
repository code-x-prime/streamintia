"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function WobbleCard({
  children,
  containerClassName,
  className,
  tint,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  tint?: string;
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 20;
    const y = (clientY - (rect.top + rect.height / 2)) / 20;
    setMousePosition({ x, y });
  };

  return (
    <motion.section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: isHovering
          ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1, 1, 1)`
          : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
        transition: "transform 0.1s ease-out",
      }}
      className={cn("relative w-full overflow-hidden rounded-2xl wobble-card", containerClassName)}
    >
      <div
        className="wobble-card-inner relative h-full overflow-hidden shadow-[0_10px_32px_rgb(0_0_0/0.28),0_1px_1px_rgb(0_0_0/0.1),0_0_0_1px_rgb(255_255_255/0.06),0_24px_60px_rgb(0_0_0/0.22)]"
        style={{
          backgroundImage: tint
            ? `radial-gradient(88% 100% at top, rgb(255 255 255 / 0.35), rgb(255 255 255 / 0)), ${tint}`
            : "radial-gradient(88% 100% at top, rgb(255 255 255 / 0.35), rgb(255 255 255 / 0))",
        }}
      >
        <motion.div
          style={{
            transform: isHovering
              ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0) scale3d(1.03, 1.03, 1)`
              : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
            transition: "transform 0.1s ease-out",
          }}
          className={cn("relative flex h-full flex-col p-7 wobble-card-content", className)}
        >
          <div
            className="wobble-card-noise absolute inset-0 opacity-5 bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] bg-size-[3px_3px] mask-[radial-gradient(#fff,transparent_75%)]"
            aria-hidden="true"
          />
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
}
