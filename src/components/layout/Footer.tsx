import Link from "next/link";
import { site } from "@/config/site";
import { footerGroups, legalLinks } from "@/config/navigation";
import { BrandLogo } from "./BrandLogo";
import { FooterCTA } from "./FooterCTA";
import { FooterColumn } from "./FooterColumn";
import { SocialLinks } from "./SocialLinks";
export function Footer() {
  return (
    <footer className="relative motion-reduce:[&_*]:!animate-none motion-reduce:[&_*]:!transition-none">
      <div className="relative z-0 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 [background:radial-gradient(ellipse_at_90%_100%,rgb(18_217_244/0.12),transparent_50%),linear-gradient(180deg,#120a3a,#0e0a33_50%,#0b0c2b)] "
        />
        <div className="mx-auto max-w-352 px-[clamp(1rem,3vw,3rem)]">
          <FooterCTA />
          <div
            className="grid grid-cols-[1.7fr_repeat(3,1fr)_1.4fr] gap-8 py-16
            max-[1279px]:grid-cols-3 max-[1279px]:gap-y-10
            max-[767px]:grid-cols-2 max-[767px]:gap-x-4 max-[767px]:gap-y-8 max-[767px]:py-12"
          >
            <div className="max-[1279px]:col-span-full max-[767px]:col-span-full">
              <BrandLogo wordmark="light" className="mb-4 h-15 w-64" />
              <p className="max-w-80 text-[0.9375rem] leading-[1.8] text-[#c3c6e0] max-[767px]:max-w-96">
                {site.description}
              </p>
              <SocialLinks />
              <span className="mt-6 block text-[0.6875rem] tracking-[0.14em] text-[#c3c6e0]">
                CREATORS. CONNECTIONS. POSSIBILITIES.
              </span>
            </div>
            {footerGroups.map((group) => (
              <FooterColumn key={group.label} {...group} />
            ))}
            <nav
              className="min-w-0 [&_h2]:mt-3 [&_h2]:mb-6 [&_h2]:text-white [&_h2]:font-body [&_h2]:text-base [&_h2]:font-semibold
              [&_li+li]:mt-3
              [&_a]:inline-block [&_a]:text-[0.9375rem] [&_a]:text-[#c3c6e0] [&_a]:transition-[color,transform] [&_a]:duration-250
              [&_a:hover]:translate-x-0.75 [&_a:hover]:text-white [&_a:hover]:no-underline"
              aria-label="Footer Contact"
            >
              <h2>Let’s connect</h2>
              <ul>
                <li>
                  {site.contact.email ? (
                    <a
                      className="max-w-full leading-[1.7] [overflow-wrap:anywhere]"
                      href={`mailto:${site.contact.email}`}
                    >
                      {site.contact.email.split("@")[0]}
                      <wbr />@{site.contact.email.split("@")[1]}
                    </a>
                  ) : (
                    <span className="block text-[0.9375rem] text-[#c3c6e0]">
                      Email{" "}
                      <small className="block text-xs text-[#c3c6e0] opacity-70">
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
                    <span className="block text-[0.9375rem] text-[#c3c6e0]">
                      WhatsApp{" "}
                      <small className="block text-xs text-[#c3c6e0] opacity-70">
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
            className="flex items-center justify-between gap-6 border-t border-white/12 py-6
            max-[767px]:flex-col max-[767px]:items-start max-[767px]:gap-3
            [&_p]:text-[0.8125rem] [&_p]:text-[#c3c6e0]
            [&_a]:text-[0.8125rem] [&_a]:text-[#c3c6e0] [&_a:hover]:text-white"
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
      </div>
    </footer>
  );
}
