"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, isActiveRoute } from "@/config/navigation";
import { NavigationDropdown } from "./NavigationDropdown";
export function DesktopNavigation() {
  const pathname = usePathname();
  return (
    <nav
      aria-label="Main navigation"
      className="hidden min-[1280px]:block"
    >
      <ul className="flex items-center gap-1">
        {navigation.map((item) =>
          item.children ? (
            <NavigationDropdown
              key={item.label}
              label={item.label}
              items={item.children}
            />
          ) : (
            <li key={item.label}>
              <Link
                className="group/nav relative flex items-center gap-[0.3rem] whitespace-nowrap px-[0.55rem] py-3.5 text-[0.8125rem] font-medium text-[#59617f] transition-colors duration-250
                  hover:text-[#08082d] hover:no-underline aria-[current=page]:text-[#08082d] aria-[current=page]:no-underline data-[active=true]:text-[#08082d] data-[active=true]:no-underline
                  after:absolute after:bottom-[0.3rem] after:left-[0.55rem] after:right-[0.55rem] after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-[linear-gradient(120deg,var(--primary),var(--purple))] after:transition-transform after:duration-250 after:ease-[cubic-bezier(0.2,0.8,0.2,1)] after:content-['']
                  hover:after:scale-x-100 aria-[current=page]:after:scale-x-100 data-[active=true]:after:scale-x-100"
                href={item.href!}
                aria-current={
                  isActiveRoute(pathname, item.href!) ? "page" : undefined
                }
              >
                {item.label}
              </Link>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}
