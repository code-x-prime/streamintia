"use client";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { isActiveRoute, type NavigationLink } from "@/config/navigation";
import { NavigationIcon } from "./NavigationIcon";
export function NavigationDropdown({
  label,
  items,
}: {
  label: string;
  items: readonly NavigationLink[];
}) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const root = useRef<HTMLLIElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const active = items.some((item) => isActiveRoute(pathname, item.href));
  useEffect(() => {
    if (!open) return;
    const dismiss = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, [open]);
  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);
  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };
  return (
    <li
      ref={root}
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          e.preventDefault();
          setOpen(false);
          trigger.current?.focus();
        }
      }}
    >
      <button
        ref={trigger}
        className="relative flex items-center gap-[0.3rem] whitespace-nowrap border-0 bg-transparent px-[0.55rem] py-3.5 text-[0.8125rem] font-medium text-[#59617f] transition-colors duration-250
          hover:text-[#08082d] hover:no-underline data-[active=true]:text-[#08082d] data-[active=true]:no-underline aria-expanded:text-[#08082d] aria-expanded:no-underline
          after:absolute after:bottom-[0.3rem] after:left-[0.55rem] after:right-[0.55rem] after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-[linear-gradient(120deg,var(--primary),var(--purple))] after:transition-transform after:duration-250 after:ease-[cubic-bezier(0.2,0.8,0.2,1)] after:content-['']
          hover:after:scale-x-100 data-[active=true]:after:scale-x-100
          [&_svg]:h-3.5 [&_svg]:w-3.5 [&_svg]:transition-transform [&_svg]:duration-250 aria-expanded:[&_svg]:rotate-0"
        data-active={active}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(!open)}
      >
        {label}
        <NavigationIcon name={open ? "chevron-up" : "chevron"} />
      </button>
      <div
        id={id}
        hidden={!open}
        className="absolute top-[calc(100%+14px)] left-1/2 w-80 -translate-x-1/2 overflow-hidden rounded-[1.25rem] border border-[rgb(28_35_81/0.1)] bg-white/98 p-3 text-[#08082d] shadow-[0_20px_60px_rgb(22_29_75/0.16)]
          before:absolute before:top-0 before:left-[20%] before:right-[20%] before:h-px before:bg-[linear-gradient(120deg,var(--primary),var(--purple))] before:content-['']
          animate-[dropdown-enter_250ms_cubic-bezier(0.2,0.8,0.2,1)]"
      >
        <span className="block px-3 py-2 text-[0.625rem] font-semibold tracking-[0.16em] text-[#747c99] uppercase">
          {label}
        </span>
        <ul>
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={
                  isActiveRoute(pathname, item.href) ? "page" : undefined
                }
                onClick={() => setOpen(false)}
                className="flex items-center justify-between gap-4 rounded-md p-3 transition-colors duration-250
                  hover:bg-[#f4f6ff] hover:no-underline aria-[current=page]:bg-[#f4f6ff] aria-[current=page]:no-underline
                  [&_strong]:text-sm [&_strong]:font-medium
                  [&_small]:mt-1 [&_small]:block [&_small]:text-xs [&_small]:text-[#747c99]
                  [&_svg]:h-4 [&_svg]:shrink-0 [&_svg]:text-primary"
              >
                <span>
                  <strong>{item.label}</strong>
                  <small>{item.description}</small>
                </span>
                <NavigationIcon name="arrow" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
