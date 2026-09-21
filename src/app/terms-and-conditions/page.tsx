import { InnerPageShell } from "@/components/inner/InnerPageShell";
import { InnerPageHero } from "@/components/inner/InnerPageHero";
import { LegalDocument } from "@/components/resources/LegalDocument";
import { legalUpdatedAt, termsSections } from "@/config/legal";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Terms and Conditions",
  "Terms for using the Streamintia website and exploring opportunities.",
  "/terms-and-conditions",
);
export default function TermsPage() {
  return (
    <InnerPageShell tone="neutral">
      <InnerPageHero
        eyebrow="LEGAL INFORMATION"
        breadcrumb="Terms & Conditions"
        compact
        glow={false}
        title={
          <>
            Clear terms for a{" "}
            <span className="home-gradient-text">clearer journey.</span>
          </>
        }
        description="The conditions that apply when using this website, exploring opportunities and relying on published information."
      />
      <LegalDocument sections={termsSections} updatedAt={legalUpdatedAt} />
    </InnerPageShell>
  );
}
