import Link from "next/link";
import { HomeIcon, type HomeIconName } from "@/components/ui/HomeIcon";
export function ContactCard({
  title,
  description,
  href,
  icon = "arrow",
  external = false,
}: {
  title: string;
  description: string;
  href?: string;
  icon?: HomeIconName;
  external?: boolean;
}) {
  const content = (
    <>
      <span className="grid h-[38px] w-[38px] shrink-0 place-items-center rounded-lg border border-(--home-border) bg-[#f4fbff] text-(--primary) shadow-[0_8px_22px_rgb(18_217_244/0.08)] [&>svg]:h-[18px] [&>svg]:w-[18px]">
        <HomeIcon name={icon} />
      </span>
      <span>
        <strong className="block text-[0.9375rem] font-medium">{title}</strong>
        <small className="mt-1 block text-[0.6875rem] leading-[1.7] text-(--home-muted) [overflow-wrap:anywhere]">
          {description}
        </small>
      </span>
      {href ? (
        <HomeIcon name="arrow" className="ml-auto h-4 w-4 shrink-0 text-(--primary)" />
      ) : (
        <span className="ml-auto rounded-[3px] border border-(--home-border) px-[0.4rem] py-[0.2rem] text-[0.5rem] text-(--home-muted) max-[430px]:hidden">
          Pending
        </span>
      )}
    </>
  );
  return (
    <div className="border-t border-(--home-border) transition-[padding-inline,background] duration-250 ease-(--ease-standard) last:border-b hover:bg-[#f8f9ff] hover:px-3">
      {href ? (
        external ? (
          <a
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            className="flex items-center gap-4 py-6 hover:no-underline"
          >
            {content}
          </a>
        ) : (
          <Link href={href} className="flex items-center gap-4 py-6 hover:no-underline">
            {content}
          </Link>
        )
      ) : (
        <div className="flex items-center gap-4 py-6">{content}</div>
      )}
    </div>
  );
}
