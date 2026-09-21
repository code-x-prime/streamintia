import { siInstagram, siFacebook, siYoutube } from "simple-icons";
import { site, type SocialName } from "@/config/site";
import { BrandIcon } from "@/components/ui/BrandIcon";
const icons: Partial<Record<SocialName, { path: string }>> = {
  Instagram: siInstagram,
  Facebook: siFacebook,
  YouTube: siYoutube,
};
export function SocialLinks() {
  return (
    <ul className="mt-6 flex gap-2" aria-label="Social channels">
      {site.socialLinks.map((social) => {
        const icon = icons[social.name];
        const content = icon ? (
          <BrandIcon path={icon.path} />
        ) : (
          <span
            className="text-base font-bold tracking-[-0.05em]"
            aria-hidden="true"
          >
            in
          </span>
        );
        return (
          <li key={social.name}>
            {social.url ? (
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="grid h-8.5 w-8.5 place-items-center rounded-md border border-[rgb(28_35_81_/_0.11)] bg-[rgb(8_8_45_/_0.03)] text-text-secondary transition-[background,border-color,transform] duration-250
                  hover:-translate-y-0.5 hover:border-purple hover:bg-(image:--gradient-secondary) hover:no-underline"
              >
                {content}
              </a>
            ) : (
              <span
                className="grid h-8.5 w-8.5 place-items-center rounded-md border border-[rgb(28_35_81_/_0.11)] bg-[rgb(8_8_45_/_0.03)] text-text-secondary opacity-55"
                role="img"
                aria-label={`${social.name} — coming soon`}
                title={`${social.name} — coming soon`}
              >
                {content}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
