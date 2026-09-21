import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { ShinyButton } from "@/components/ui/shiny-button";
export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} className={`button ${props.className ?? ""}`} />;
}
export function ButtonLink({
  href,
  children,
  variant = "default",
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "default" | "primary" | "secondary" | "text";
  className?: string;
  external?: boolean;
}) {
  if (variant === "primary") {
    return (
      <ShinyButton
        href={href}
        external={external}
        className={`home-button home-button--shiny ${className}`}
        fillColor="#08082d"
        labelColor="#ffffff"
        accentColor="#12d9f4"
        accentSoftColor="#8b4dff"
        insetColor="rgba(255, 255, 255, 0.12)"
        cornerRadius={12}
        sweepDuration={3.5}
      >
        {children}
      </ShinyButton>
    );
  }
  const styles =
    variant === "default" ? "button" : `home-button home-button--${variant}`;
  return external ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles} ${className}`}
    >
      {children}
    </a>
  ) : (
    <Link href={href} className={`${styles} ${className}`}>
      {children}
    </Link>
  );
}
