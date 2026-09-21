import { site } from "./site";
export interface NavigationLink {
  label: string;
  href: string;
  description?: string;
}
export interface NavigationItem {
  label: string;
  href?: string;
  children?: readonly NavigationLink[];
}
export const navigation: readonly NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  {
    label: "Opportunities",
    children: [
      {
        ...site.cta.streamer,
        description: "Start your live streaming journey.",
      },
      {
        ...site.cta.agent,
        description: "Build and support your creator network.",
      },
    ],
  },
  { label: "Platforms", href: "/platforms" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Contact", href: "/contact" },
];
export const primaryCTA = site.cta.apply;
export const footerGroups = [
  {
    label: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Why Streamintia", href: "/why-streamintia" },
      { label: "Success Stories", href: "/success-stories" },
      { label: "Partners", href: "/platforms" },
    ],
  },
  {
    label: "Opportunities",
    links: [
      site.cta.streamer,
      site.cta.agent,
      { label: "How It Works", href: "/how-it-works" },
      site.cta.apply,
    ],
  },
  {
    label: "Connect",
    links: [
      { label: "Platforms", href: "/platforms" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];
export function isActiveRoute(pathname: string, href: string) {
  return href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(href + "/");
}
