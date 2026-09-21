"use client";

import { useState } from "react";
import { ProcessSteps, type ProcessStep } from "@/components/home/ProcessSteps";

export function JourneyTabs({
  streamer,
  agent,
}: {
  streamer: readonly ProcessStep[];
  agent: readonly ProcessStep[];
}) {
  const [role, setRole] = useState<"streamer" | "agent">("streamer");
  return (
    <div className="grid gap-12 [&_.process-steps]:grid-cols-3 max-[900px]:[&_.process-steps]:grid-cols-2 max-[767px]:[&_.process-steps]:grid-cols-1 [&_.process-steps]:gap-y-[2.8rem]">
      <div
        className="flex gap-3 max-[767px]:grid max-[767px]:grid-cols-2"
        role="tablist"
        aria-label="Choose your journey"
      >
        <button
          role="tab"
          aria-selected={role === "streamer"}
          onClick={() => setRole("streamer")}
          className="min-w-45 py-[0.9rem] px-5 border border-[rgb(40_54_122/0.13)] rounded-full bg-white text-[#505a78] text-[0.76rem] font-bold cursor-pointer transition-[180ms] ease-in-out hover:border-transparent hover:bg-[linear-gradient(135deg,#7456ef,#10cfe7)] hover:text-white hover:shadow-[0_10px_25px_rgb(91_82_218/0.2)] aria-selected:border-transparent aria-selected:bg-[linear-gradient(135deg,#7456ef,#10cfe7)] aria-selected:text-white aria-selected:shadow-[0_10px_25px_rgb(91_82_218/0.2)] max-[767px]:min-w-0"
        >
          Streamer journey
        </button>
        <button
          role="tab"
          aria-selected={role === "agent"}
          onClick={() => setRole("agent")}
          className="min-w-45 py-[0.9rem] px-5 border border-[rgb(40_54_122/0.13)] rounded-full bg-white text-[#505a78] text-[0.76rem] font-bold cursor-pointer transition-[180ms] ease-in-out hover:border-transparent hover:bg-[linear-gradient(135deg,#7456ef,#10cfe7)] hover:text-white hover:shadow-[0_10px_25px_rgb(91_82_218/0.2)] aria-selected:border-transparent aria-selected:bg-[linear-gradient(135deg,#7456ef,#10cfe7)] aria-selected:text-white aria-selected:shadow-[0_10px_25px_rgb(91_82_218/0.2)] max-[767px]:min-w-0"
        >
          Agent journey
        </button>
      </div>
      <div role="tabpanel">
        <ProcessSteps steps={role === "streamer" ? streamer : agent} />
      </div>
    </div>
  );
}
