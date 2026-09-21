"use client";
import { useEffect, useRef } from "react";
import { HomeIcon } from "@/components/ui/HomeIcon";
import { Button } from "@/components/ui/Button";
export function SuccessMessage({
  kind,
  onEdit,
}: {
  kind: "application" | "message";
  onEdit: () => void;
}) {
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    heading.current?.focus();
  }, []);
  return (
    <div className="max-w-[36rem] py-8">
      <span className="mb-8 grid h-14 w-14 place-items-center rounded-full border border-[rgb(18_217_244/0.35)] bg-[rgb(18_217_244/0.06)] text-primary">
        <HomeIcon name="check" />
      </span>
      <p className="home-eyebrow">PREVIEW COMPLETE</p>
      <h2
        ref={heading}
        tabIndex={-1}
        className="mb-4 text-[2rem] max-[430px]:text-[1.75rem]"
      >
        {kind === "application"
          ? "Your next chapter is taking shape."
          : "A good conversation starts here."}
      </h2>
      <p role="status" className="mb-4 text-[0.875rem] leading-[1.8]">
        Your {kind} passed the preview checks. Nothing has been sent or saved.
      </p>
      <p className="text-[0.875rem] leading-[1.8]">
        This is a frontend demonstration. Live submissions will be available
        once the service is connected.
      </p>
      <Button
        type="button"
        className="home-button home-button--secondary mt-4"
        onClick={onEdit}
      >
        Edit {kind}
        <HomeIcon name="arrow" />
      </Button>
    </div>
  );
}
