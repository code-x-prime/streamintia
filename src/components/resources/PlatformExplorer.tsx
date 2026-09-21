"use client";

import { useMemo, useState } from "react";
import type { Platform } from "@/config/platforms";
import { PlatformGrid } from "@/components/platform/PlatformGrid";

export function PlatformExplorer({ items }: { items: Platform[] }) {
  const [query, setQuery] = useState("");
  const categories = [
    "All platforms",
    ...Array.from(new Set(items.map((item) => item.category))),
  ];
  const [category, setCategory] = useState("All platforms");
  const filtered = useMemo(
    () =>
      items.filter(
        (item) =>
          (category === "All platforms" || item.category === category) &&
          (!query.trim() ||
            `${item.name} ${item.description}`
              .toLowerCase()
              .includes(query.toLowerCase())),
      ),
    [category, items, query],
  );
  return (
    <div className="grid gap-8">
      <label className="block max-w-[780px]">
        <span className="block mb-[0.7rem] text-[#38405e] text-[0.72rem] font-bold uppercase tracking-[0.12em]">
          Find a platform
        </span>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search platforms..."
          type="search"
          className="w-full h-17 px-6 border border-[rgb(40_54_122/0.14)] rounded-2xl outline-none bg-white text-[#11162c] font-[inherit] shadow-[0_18px_50px_rgb(40_54_122/0.08)] transition-[200ms] focus:border-[#6556ee] focus:shadow-[0_0_0_4px_rgb(101_86_238/0.1),0_20px_55px_rgb(40_54_122/0.1)]"
        />
      </label>
      <div className="flex flex-wrap gap-[0.65rem]" aria-label="Platform categories">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            className={`border rounded-full py-[0.72rem] px-[1.05rem] text-[0.76rem] font-bold cursor-pointer transition-[180ms] ease-in-out ${
              category === item
                ? "border-transparent bg-[linear-gradient(135deg,#7456ef,#10cfe7)] text-white shadow-[0_10px_25px_rgb(91_82_218/0.2)]"
                : "border-[rgb(40_54_122/0.13)] bg-white text-[#505a78] hover:border-transparent hover:bg-[linear-gradient(135deg,#7456ef,#10cfe7)] hover:text-white hover:shadow-[0_10px_25px_rgb(91_82_218/0.2)]"
            }`}
            aria-pressed={category === item}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
      {filtered.length ? (
        <PlatformGrid platforms={filtered} presentation="featured" />
      ) : (
        <div className="col-span-full p-12 rounded-2xl bg-[#f7f8fe] text-center">
          <h3>No matching platforms</h3>
          <p className="mt-[0.6rem] text-[#6a748e]">Try another name or category.</p>
        </div>
      )}
    </div>
  );
}
