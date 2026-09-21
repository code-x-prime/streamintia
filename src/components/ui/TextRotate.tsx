"use client";

import { useEffect, useState } from "react";

export function TextRotate({
  texts,
  rotationInterval = 2400,
  className,
}: {
  texts: string[];
  rotationInterval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (texts.length < 2) return;
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % texts.length);
    }, rotationInterval);
    return () => clearInterval(id);
  }, [texts.length, rotationInterval]);

  return (
    <span className={`text-rotate ${className ?? ""}`}>
      <span className="sr-only">{texts[index]}</span>
      <span key={index} className="text-rotate-item" aria-hidden="true">
        {texts[index]}
      </span>
    </span>
  );
}
