import { InnerPageShell } from "@/components/inner/InnerPageShell";
import { InnerPageHero } from "@/components/inner/InnerPageHero";
import { FinalCTA } from "@/components/home/FinalCTA";
import { ButtonLink } from "@/components/ui/Button";
import { HomeIcon } from "@/components/ui/HomeIcon";
import { createMetadata } from "@/lib/metadata";
import { ContactForm } from "@/components/forms/ContactForm";
import { ContactCard } from "@/components/inner/ContactCard";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { site } from "@/config/site";
import { assets } from "@/config/assets";
export const metadata = createMetadata(
  "Contact Us",
  "Start a conversation with Streamintia about creator opportunities, agent support, business enquiries or platform partnerships.",
  "/contact",
);
export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const query = await searchParams;
  const subject = typeof query.subject === "string" ? query.subject : "";
  return (
    <InnerPageShell tone="neutral">
      <InnerPageHero
        eyebrow="GET IN TOUCH"
        breadcrumb="Contact Us"
        compact
        title={
          <>
            Let’s start
            <br />
            <span className="home-gradient-text">a conversation.</span>
          </>
        }
        description="A question, an idea or a new direction. Creators, agents and future collaborators—there’s a place for your conversation here."
        image={assets.visuals.contactSupport}
      />
      <section className="pt-16 pb-(--home-section-space) [background:radial-gradient(circle_at_0_20%,rgb(18_217_244/0.07),transparent_24%),#ffffff] max-[767px]:pt-10">
        <div className="home-container grid grid-cols-[0.8fr_1.2fr] items-start gap-16 max-[1100px]:grid-cols-[0.75fr_1.25fr] max-[1100px]:gap-10 max-[767px]:grid-cols-1 max-[767px]:gap-10">
          <div>
            <p className="home-eyebrow">GOOD CONNECTIONS BEGIN HERE</p>
            <h2 className="text-[2.75rem] max-[767px]:text-[2.25rem]">
              Find the right
              <br />
              conversation.
            </h2>
            <div className="mt-8">
              <ContactCard
                title="Email"
                description={
                  site.contact.email ?? "Official email address coming soon"
                }
                href={
                  site.contact.email
                    ? `mailto:${site.contact.email}`
                    : undefined
                }
                external
                icon="support"
              />
              <ContactCard
                title="WhatsApp"
                description="A direct way to connect, coming soon"
                href={site.contact.whatsapp ?? undefined}
                external
                icon="broadcast"
              />
              <ContactCard
                title="Business Enquiries"
                description="Ideas, enquiries and ways to work together"
                href="/contact?subject=business#contact-form"
                icon="compass"
              />
              <ContactCard
                title="Partnerships"
                description="Platforms, brands and shared ambitions"
                href="/contact?subject=partnership#contact-form"
                icon="network"
              />
            </div>
            <div className="mt-8">
              <p className="text-[0.875rem]">Find us in the conversation.</p>
              <SocialLinks />
              <small className="mt-4 block text-[0.625rem] leading-[1.8] text-(--home-muted)">
                Official social channels will be linked when available.
              </small>
            </div>
          </div>
          <ContactForm key={subject} subject={subject} />
        </div>
      </section>
      <section className="home-section">
        <div className="home-container">
          <div
            className="flex items-center justify-between gap-12 rounded-(--home-radius) border border-[rgb(92_74_178/0.14)] bg-[radial-gradient(circle_at_90%_10%,rgb(139_77_255/0.14),transparent_38%),linear-gradient(135deg,#f8fdff,#f5f2ff)] p-12 text-[#0a1038] shadow-[0_22px_60px_rgb(39_49_105/0.1)] max-[767px]:flex-col max-[767px]:items-start max-[767px]:gap-8 max-[767px]:p-8 [&_h2]:text-[2.75rem] max-[767px]:[&_h2]:text-[2.1rem]"
            data-reveal
          >
            <div>
              <p className="home-eyebrow">SOMETHING BIGGER, TOGETHER</p>
              <h2>
                Looking to partner
                <br />
                with Streamintia?
              </h2>
              <p className="home-lead">
                Let’s explore where our ambitions meet. We welcome conversations
                with platforms, brands and organisations.
              </p>
            </div>
            <ButtonLink
              href="/contact?subject=partnership#contact-form"
              variant="primary"
              className="shrink-0"
            >
              Partner With Us
              <HomeIcon name="arrow" />
            </ButtonLink>
          </div>
          <div className="flex items-center justify-between gap-8 border-b border-(--home-border) py-6 max-[767px]:flex-col max-[767px]:items-start max-[767px]:gap-2">
            <p className="text-[0.875rem] max-[767px]:text-[0.8125rem]">
              Have a question about getting started?
            </p>
            <ButtonLink href="#contact-form" variant="text">
              Ask us a question
              <HomeIcon name="arrow" />
            </ButtonLink>
          </div>
        </div>
      </section>
      <FinalCTA
        title={
          <>
            Your next connection
            <br />
            <span className="home-gradient-text">starts with you.</span>
          </>
        }
        showContact={false}
      />
    </InnerPageShell>
  );
}
