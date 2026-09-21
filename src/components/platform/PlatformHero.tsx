import type { Platform } from "@/config/platforms";
import { AssetImage } from "@/components/ui/AssetImage";
export function PlatformHero({ platform }: { platform: Platform }) {
  return (
    <header className="py-8">
      <h1>{platform.name}</h1>
      <p>{platform.description}</p>
      {platform.logo ? (
        <AssetImage asset={platform.logo} />
      ) : (
        <p>Official platform logo pending.</p>
      )}
    </header>
  );
}
