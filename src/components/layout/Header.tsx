import { BrandLogo } from "./BrandLogo";
import { HeaderFrame } from "./HeaderFrame";
import { DesktopNavigation } from "./DesktopNavigation";
import { HeaderCTA } from "./HeaderCTA";
import { MobileMenu } from "./MobileMenu";
export function Header() {
  return (
    <HeaderFrame>
      <div
        className="mx-auto flex min-h-21 max-w-352 items-center justify-between gap-6 px-[clamp(1rem,3vw,3rem)] transition-[min-height] duration-250
          group-data-[scrolled=true]/header:min-h-19
          max-[767px]:min-h-19 max-[767px]:gap-3
          max-[767px]:group-data-[scrolled=true]/header:min-h-17"
      >
        <BrandLogo
          priority
          wordmark="dark"
          className="h-[3.4rem] w-56 max-[767px]:h-9 max-[767px]:w-38 max-[374px]:h-8 max-[374px]:w-32"
        />
        <DesktopNavigation />
        <div className="flex shrink-0 items-center gap-3 max-[767px]:gap-2">
          <HeaderCTA />
          <MobileMenu brand={<BrandLogo className="h-[3.4rem] w-56" />} />
        </div>
      </div>
    </HeaderFrame>
  );
}
