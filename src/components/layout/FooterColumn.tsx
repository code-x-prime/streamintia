import Link from "next/link";
import type { NavigationLink } from "@/config/navigation";
export function FooterColumn({
  label,
  links,
}: {
  label: string;
  links: readonly NavigationLink[];
}) {
  return (
    <nav
      aria-label={`Footer ${label}`}
      className="[&_h2]:mt-3 [&_h2]:mb-6 [&_h2]:font-body [&_h2]:text-[0.8125rem] [&_h2]:font-semibold
        [&_li+li]:mt-3
        [&_a]:inline-block [&_a]:text-xs [&_a]:text-[#5d6480] [&_a]:transition-[color,transform] [&_a]:duration-250
        [&_a:hover]:translate-x-0.75 [&_a:hover]:text-text-primary [&_a:hover]:no-underline"
    >
      <h2>{label}</h2>
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
