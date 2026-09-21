import Link from "next/link";
import { site } from "@/config/site";
import { footerGroups, legalLinks } from "@/config/navigation";
import { BrandLogo } from "./BrandLogo";
import { FooterCTA } from "./FooterCTA";
import { FooterColumn } from "./FooterColumn";
import { SocialLinks } from "./SocialLinks";
export function Footer() {
  return (
    <footer
      className="relative border-t border-[rgb(8_8_45_/_0.1)] bg-[radial-gradient(ellipse_at_6%_0,rgb(18_217_244_/_0.045),transparent_45%),radial-gradient(ellipse_at_94%_8%,rgb(139_77_255_/_0.09),transparent_45%),var(--background-secondary)]
        before:absolute before:-top-px before:right-[12%] before:left-[12%] before:h-px before:bg-[linear-gradient(90deg,transparent,rgb(18_217_244_/_0.5),rgb(139_77_255_/_0.6),transparent)] before:content-['']
        motion-reduce:[&_*]:!animate-none motion-reduce:[&_*]:!transition-none"
    >
      <div className="mx-auto max-w-352 px-[clamp(1rem,3vw,3rem)]">
        <FooterCTA />
        <div
          className="grid grid-cols-[1.8fr_repeat(4,1fr)] gap-8 py-16
            max-[1279px]:grid-cols-3 max-[1279px]:gap-y-10
            max-[767px]:grid-cols-2 max-[767px]:gap-x-4 max-[767px]:gap-y-8 max-[767px]:py-12"
        >
          <div className="max-[1279px]:col-span-full max-[767px]:col-span-full">
            <BrandLogo wordmark="dark" className="mb-4 h-15 w-64" />
            <p className="max-w-68 text-[0.8125rem] leading-[1.9] text-[#5d6480] max-[767px]:max-w-96">
              {site.description}
            </p>
            <SocialLinks />
            <span className="mt-6 block text-[0.5rem] tracking-[0.16em] text-[#5d6480]">
              CREATORS. CONNECTIONS. POSSIBILITIES.
            </span>
          </div>
          {footerGroups.map((group) => (
            <FooterColumn key={group.label} {...group} />
          ))}
          <nav
            className="[&_h2]:mt-3 [&_h2]:mb-6 [&_h2]:font-body [&_h2]:text-[0.8125rem] [&_h2]:font-semibold
              [&_li+li]:mt-3
              [&_a]:inline-block [&_a]:text-xs [&_a]:text-[#5d6480] [&_a]:transition-[color,transform] [&_a]:duration-250
              [&_a:hover]:translate-x-0.75 [&_a:hover]:text-text-primary [&_a:hover]:no-underline"
            aria-label="Footer Contact"
          >
            <h2>Let’s connect</h2>
            <ul>
              <li>
                {site.contact.email ? (
                  <a
                    className="max-w-full leading-[1.7] break-anywhere"
                    href={`mailto:${site.contact.email}`}
                  >
                    {site.contact.email}
                  </a>
                ) : (
                  <span className="block text-xs text-[#5d6480]">
                    Email{" "}
                    <small className="block text-[0.625rem] text-[#5d6480] opacity-70">
                      Coming soon
                    </small>
                  </span>
                )}
              </li>
              <li>
                {site.contact.whatsapp ? (
                  <a
                    href={site.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                ) : (
                  <span className="block text-xs text-[#5d6480]">
                    WhatsApp{" "}
                    <small className="block text-[0.625rem] text-[#5d6480] opacity-70">
                      Coming soon
                    </small>
                  </span>
                )}
              </li>
              <li>
                <Link href="/contact">General Enquiries</Link>
              </li>
              <li>
                <Link href="/contact">
                  Contact Us <span aria-hidden="true">↗</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div
          className="flex items-center justify-between gap-6 border-t border-[rgb(8_8_45_/_0.1)] py-6
            max-[767px]:flex-col max-[767px]:items-start max-[767px]:gap-3
            [&_p]:text-[0.6875rem] [&_p]:text-[#5d6480]
            [&_a]:text-[0.6875rem] [&_a]:text-[#5d6480] [&_a:hover]:text-text-primary"
        >
          <p>
            © {new Date().getFullYear()} {site.name}. {site.copyright}
          </p>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-6">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
