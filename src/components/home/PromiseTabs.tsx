"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { HomeIcon, type HomeIconName } from "@/components/ui/HomeIcon";

const AUTO_ADVANCE_MS = 4000;

interface Promise {
  id: string;
  label: string;
  icon: HomeIconName;
  metric: string;
  metricLabel: string;
  note: string;
  body: string;
  link: { label: string; href: string };
}

const promises: readonly Promise[] = [
  {
    id: "clarity",
    label: "Clarity first",
    icon: "compass",
    metric: "Plain",
    metricLabel: "language, always",
    note: "Before you commit",
    body: "We explain requirements, steps and timelines in simple words before you decide anything. If we do not know yet, we say so.",
    link: { label: "How it works", href: "/platforms#journeys" },
  },
  {
    id: "guidance",
    label: "Fits you",
    icon: "spark",
    metric: "1:1",
    metricLabel: "guidance, not scripts",
    note: "Built around your goals",
    body: "Your interests and goals shape the conversation. A creator and an agent need different things, so we do not give everyone the same answer.",
    link: { label: "Choose your path", href: "/apply" },
  },
  {
    id: "process",
    label: "Transparent",
    icon: "check",
    metric: "No",
    metricLabel: "surprises on the way",
    note: "Know where you stand",
    body: "You always know where your application is and what happens next. Any cost that might apply is explained in writing before you commit.",
    link: { label: "Read the FAQs", href: "/become-streamer" },
  },
  {
    id: "support",
    label: "Real people",
    icon: "support",
    metric: "Human",
    metricLabel: "answers to your questions",
    note: "Reach us anytime",
    body: "Questions get real answers from real people, in a language you are comfortable with. Write to us whenever you are unsure.",
    link: { label: "Contact us", href: "/contact" },
  },
  {
    id: "honest",
    label: "Honest info",
    icon: "globe",
    metric: "4",
    metricLabel: "platforms, clearly marked",
    note: "Preview until confirmed",
    body: "Platform details are shared only once they are confirmed. Earnings and approvals are decided by each platform and are never guaranteed.",
    link: { label: "Explore platforms", href: "/platforms" },
  },
  {
    id: "growth",
    label: "Grow together",
    icon: "growth",
    metric: "2",
    metricLabel: "paths, one network",
    note: "Creators and agents",
    body: "Creators and agents grow side by side, with respect for your time, your content and your pace.",
    link: { label: "Become an agent", href: "/become-agent" },
  },
];

export function PromiseTabs() {
  const [active, setActive] = useState(0);
  const [pickedAt, setPickedAt] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = window.setTimeout(
      () => setActive((i) => (i + 1) % promises.length),
      AUTO_ADVANCE_MS,
    );
    return () => window.clearTimeout(id);
  }, [active, pickedAt, paused]);

  const select = (index: number, focus = false) => {
    setActive(index);
    setPickedAt(Date.now());
    if (focus) tabRefs.current[index]?.focus();
  };

  const onKeyDown = (event: React.KeyboardEvent, index: number) => {
    const last = promises.length - 1;
    const map: Record<string, number> = {
      ArrowRight: index === last ? 0 : index + 1,
      ArrowLeft: index === 0 ? last : index - 1,
      Home: 0,
      End: last,
    };
    if (event.key in map) {
      event.preventDefault();
      select(map[event.key], true);
    }
  };

  const current = promises[active];

  return (
    <div
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null))
          setPaused(false);
      }}
    >
      <div
        role="tablist"
        aria-label="Our promises"
        className="grid grid-cols-2 border-y border-[rgb(42_52_105/0.12)] min-[640px]:grid-cols-3 lg:grid-cols-6"
      >
        {promises.map((item, index) => {
          const isActive = index === active;
          return (
            <button
              key={item.id}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              type="button"
              role="tab"
              id={`promise-tab-${item.id}`}
              aria-selected={isActive}
              aria-controls={`promise-panel-${item.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => select(index)}
              onKeyDown={(e) => onKeyDown(e, index)}
              className={`relative flex min-h-16 items-center justify-center gap-2 px-3 py-4 text-[0.9375rem] font-semibold transition-colors duration-150 hover:bg-[rgb(139_77_255/0.05)] max-[639px]:min-h-14 ${
                isActive ? "text-[#0a1038]" : "text-[#727b94]"
              }`}
            >
              <HomeIcon
                name={item.icon}
                className={`h-4.5 w-4.5 shrink-0 ${isActive ? "text-[#8b4dff]" : ""}`}
              />
              <span className="whitespace-nowrap">{item.label}</span>
              <span
                aria-hidden="true"
                className="absolute inset-x-3 bottom-0 h-0.5 overflow-hidden rounded-full"
              >
                {isActive ? (
                  <span
                    key={`${active}-${pickedAt}`}
                    className="promise-progress block size-full bg-[image:linear-gradient(90deg,#12d9f4,#8b4dff)]"
                    style={
                      reduced
                        ? undefined
                        : {
                            animationDuration: `${AUTO_ADVANCE_MS}ms`,
                            animationPlayState: paused ? "paused" : "running",
                          }
                    }
                  />
                ) : null}
              </span>
            </button>
          );
        })}
      </div>

      <div
        key={current.id}
        role="tabpanel"
        id={`promise-panel-${current.id}`}
        aria-labelledby={`promise-tab-${current.id}`}
        tabIndex={0}
        className="promise-panel grid gap-8 pt-10 outline-none md:grid-cols-[5fr_7fr] md:gap-14 md:pt-14"
      >
        <div className="flex flex-col gap-3">
          <span className="text-xs tabular-nums text-[#727b94]">
            {String(active + 1).padStart(2, "0")}
            <span className="mx-1.5 text-[rgb(42_52_105/0.25)]">|</span>
            {String(promises.length).padStart(2, "0")}
          </span>
          <p className="mt-2 flex flex-col gap-1">
            <span className="home-gradient-text w-fit font-(family-name:--font-display) text-[clamp(3.5rem,8vw,5.5rem)] leading-none font-semibold tracking-[-0.04em]">
              {current.metric}
            </span>
            <span className="text-lg font-semibold text-[#17183f]">
              {current.metricLabel}
            </span>
          </p>
          <span className="text-sm text-[#727b94]">{current.note}</span>
        </div>
        <div className="flex flex-col gap-6 md:border-l md:border-[rgb(42_52_105/0.12)] md:pl-14">
          <p className="text-[clamp(1.125rem,2vw,1.5rem)] leading-[1.6] font-medium tracking-[-0.01em] text-pretty text-[#17183f]">
            {current.body}
          </p>
          <Link
            href={current.link.href}
            className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#5b4bd4] hover:no-underline"
          >
            {current.link.label}
            <HomeIcon
              name="arrow"
              className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
