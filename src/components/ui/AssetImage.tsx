import Image from "next/image";
import type { ImageAsset } from "@/config/assets";
export function AssetImage({
  asset,
  priority = false,
}: {
  asset: ImageAsset;
  priority?: boolean;
}) {
  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      width={asset.width}
      height={asset.height}
      sizes="(max-width: 768px) 100vw, 50vw"
      className="h-auto max-w-full object-contain"
      priority={priority}
    />
  );
}
