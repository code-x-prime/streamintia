import { site } from "@/config/site";
import { NavigationIcon } from "./NavigationIcon";
import { ShinyButton } from "@/components/ui/shiny-button";
export function HeaderCTA({
  onClick,
  variant = "header",
}: {
  onClick?: () => void;
  variant?: "header" | "mobile-menu";
}) {
  return (
    <ShinyButton
      href={site.cta.apply.href}
      onClick={onClick}
      className={`min-h-10.5! border-0! px-4! py-2.5! text-[0.8125rem]! shadow-none! transition-none!
        max-[767px]:px-3! max-[767px]:text-xs!
        max-[425px]:[&_svg]:hidden
        max-[374px]:gap-1! max-[374px]:px-2.5! max-[374px]:text-[0.6875rem]!
        [&_svg]:h-4 [&_svg]:w-4
        ${
          variant === "mobile-menu"
            ? "w-full! min-h-13! rounded-[13px]! text-[13px]! text-white!"
            : ""
        }`}
      fillColor="#08082d"
      labelColor="#ffffff"
      accentColor="#12d9f4"
      accentSoftColor="#8b4dff"
      insetColor="rgba(255, 255, 255, 0.12)"
      cornerRadius={10}
      sweepDuration={3.5}
    >
      {site.cta.apply.label}
      <NavigationIcon name="arrow" />
    </ShinyButton>
  );
}
