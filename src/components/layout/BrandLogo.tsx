import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";
export function BrandLogo({
  priority = false,
  wordmark = "light",
  className = "",
}: {
  priority?: boolean;
  wordmark?: "light" | "dark";
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} home`}
      className={`relative block shrink-0 overflow-hidden rounded-sm ${
        className ||
        "h-[3.4rem] w-56 max-[767px]:h-9 max-[767px]:w-38 max-[374px]:h-8 max-[374px]:w-32"
      }`}
    >
      <Image
        src={wordmark === "dark" ? site.logos.light : site.logos.dark}
        alt={site.name}
        width={848}
        height={240}
        sizes="280px"
        priority={priority}
        className="h-full w-full object-contain"
      />
    </Link>
  );
}
