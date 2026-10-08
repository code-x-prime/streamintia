import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";
import { sanityConfigured } from "@/sanity/env";

export const dynamic = "force-static";
export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  if (!sanityConfigured) {
    return (
      <div className="studio-shell fixed inset-0 z-[1000] grid place-items-center bg-[#0b0114] p-6 text-center text-white">
        <div className="max-w-md">
          <h1 className="text-2xl! font-semibold! text-white!">
            Blog editor not connected yet
          </h1>
          <p className="mt-3 text-[#c9c4d6]">
            Add <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> to the environment to
            open the Sanity Studio here.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="studio-shell fixed inset-0 z-[1000] bg-white">
      <NextStudio config={config} />
    </div>
  );
}
