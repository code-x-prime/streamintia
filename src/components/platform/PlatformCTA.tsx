import type { Platform } from "@/config/platforms";
import { ButtonLink } from "@/components/ui/Button";
export function PlatformCTA({ platform }: { platform: Platform }) {
  return (
    <div className="flex flex-wrap gap-4 py-6">
      <ButtonLink href={platform.hostUrl}>
        Streamer application preview
      </ButtonLink>
      <ButtonLink href={platform.agentUrl}>
        Agent application preview
      </ButtonLink>
    </div>
  );
}
