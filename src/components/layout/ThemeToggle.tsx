"use client";

import { useEffect, useState } from "react";

export type ThemeChoice = "light" | "dark" | "system";

const STORAGE_KEY = "streamintia-theme";

function resolve(choice: ThemeChoice): "light" | "dark" {
  if (choice !== "system") return choice;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function apply(choice: ThemeChoice) {
  const theme = resolve(choice);
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.dataset.themeChoice = choice;
  root.style.colorScheme = theme;
  const meta = document.querySelector('meta[name="theme-color"]');
  meta?.setAttribute("content", theme === "dark" ? "#070818" : "#ffffff");
}

/** Runs before paint (inlined in <head>) so the page never flashes the wrong theme. */
export const themeInitScript = `(function(){try{var c=localStorage.getItem("${STORAGE_KEY}")||"system";var d=c==="dark"||(c==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches);var r=document.documentElement;r.dataset.theme=d?"dark":"light";r.dataset.themeChoice=c;r.style.colorScheme=d?"dark":"light";}catch(e){}})();`;

const options: { value: ThemeChoice; label: string; path: string }[] = [
  {
    value: "light",
    label: "Light theme",
    path: "M12 4V2m0 20v-2m8-8h2M2 12h2m13.66-5.66 1.41-1.41M4.93 19.07l1.41-1.41m11.32 0 1.41 1.41M4.93 4.93l1.41 1.41M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",
  },
  {
    value: "dark",
    label: "Dark theme",
    path: "M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z",
  },
  {
    value: "system",
    label: "Use system theme",
    path: "M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm4 15h8m-4-4v4",
  },
];

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [choice, setChoice] = useState<ThemeChoice>("system");

  useEffect(() => {
    const saved =
      (localStorage.getItem(STORAGE_KEY) as ThemeChoice) || "system";
    setChoice(saved);
  }, []);

  useEffect(() => {
    if (choice !== "system") return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => apply("system");
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [choice]);

  const select = (value: ThemeChoice) => {
    setChoice(value);
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {}
    apply(value);
  };

  return (
    <div
      role="radiogroup"
      aria-label="Colour theme"
      className={`theme-toggle inline-flex items-center gap-0.5 rounded-full border border-[rgb(28_35_81/0.12)] bg-[#f4f5fb] p-1 ${className}`}
    >
      {options.map((option) => {
        const active = choice === option.value;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={option.label}
            title={option.label}
            onClick={() => select(option.value)}
            className={`grid h-8 w-8 place-items-center rounded-full transition-[background,color,box-shadow] duration-200 ${
              active
                ? "theme-toggle-active bg-white text-[#0a1038] shadow-[0_2px_8px_rgb(22_29_75/0.14)]"
                : "text-[#727b94] hover:text-[#0a1038]"
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d={option.path} />
            </svg>
          </button>
        );
      })}
    </div>
  );
}
