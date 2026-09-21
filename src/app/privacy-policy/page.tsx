import { InnerPageShell } from "@/components/inner/InnerPageShell";
import { InnerPageHero } from "@/components/inner/InnerPageHero";
import { LegalDocument } from "@/components/resources/LegalDocument";
import { legalUpdatedAt, privacySections } from "@/config/legal";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Privacy Policy",
  "How Streamintia intends to collect, use and protect personal information.",
  "/privacy-policy",
);
export default function PrivacyPolicyPage() {
  return (
    <InnerPageShell tone="neutral">
      <InnerPageHero
        eyebrow="LEGAL INFORMATION"
        breadcrumb="Privacy Policy"
        compact
        glow={false}
        title={
          <>
            Privacy, explained{" "}
            <span className="home-gradient-text">clearly.</span>
          </>
        }
        description="How personal information may be collected, used, shared and protected when Streamintia services are published."
      />
      <LegalDocument sections={privacySections} updatedAt={legalUpdatedAt} />
    </InnerPageShell>
  );
}
