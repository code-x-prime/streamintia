import Image from "next/image";
import Link from "next/link";
import type { Platform } from "@/config/platforms";
import { HomeIcon } from "@/components/ui/HomeIcon";
import { ButtonLink } from "@/components/ui/Button";
export function PlatformCard({
  platform,
  presentation = "plain",
}: {
  platform: Platform;
  presentation?: "plain" | "featured";
}) {
  if (presentation === "plain")
    return (
      <article>
        <h3>
          <Link href={`/platforms/${platform.slug}`}>{platform.name}</Link>
        </h3>
        <p>{platform.description}</p>
      </article>
    );
  return (
    <article className="ecosystem-card" data-reveal>
      <div className="platform-top">
        <div
          className={`platform-logo ${platform.logo ? "platform-logo--asset" : ""}`}
        >
          {platform.logo ? (
            <Image
              src={platform.logo.src}
              alt={platform.logo.alt}
              width={platform.logo.width}
              height={platform.logo.height}
              sizes="48px"
            />
          ) : (
            <span aria-hidden="true">{platform.name.charAt(0)}</span>
          )}
        </div>
        <span className="platform-status">
          {platform.status === "active" ? "Available" : "Preview"}
        </span>
      </div>
      <h3>
        <Link href={`/platforms/${platform.slug}`}>
          {platform.name}
          <HomeIcon name="arrow" />
        </Link>
      </h3>
      <p>
        {platform.status === "active"
          ? platform.description
          : "Programme details and availability are being confirmed."}
      </p>
      {!platform.logo ? (
        <small className="platform-logo-pending">Official logo pending</small>
      ) : null}
      <div className="platform-actions">
        <ButtonLink
          href={platform.hostUrl}
          variant="text"
          external={/^https?:\/\//.test(platform.hostUrl)}
        >
          {platform.status === "active" ? "Join as host" : "Host preview"}
          <HomeIcon name="arrow" />
        </ButtonLink>
        <ButtonLink
          href={platform.agentUrl}
          variant="text"
          external={/^https?:\/\//.test(platform.agentUrl)}
        >
          {platform.status === "active" ? "Join as agent" : "Agent preview"}
          <HomeIcon name="arrow" />
        </ButtonLink>
      </div>
    </article>
  );
}
