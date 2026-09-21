export interface LegalSection {
  id: string;
  title: string;
  paragraphs: string[];
}
export const legalUpdatedAt = process.env.NEXT_PUBLIC_LEGAL_UPDATED_AT ?? null;

export const privacySections: LegalSection[] = [
  [
    "scope",
    "Scope",
    "This notice explains how Streamintia intends to handle personal information submitted through this website and related opportunity enquiries.",
  ],
  [
    "information",
    "Information we may collect",
    "Information may include contact details, location, role preference, platform interests, relevant experience and the content of an enquiry or application.",
  ],
  [
    "collection",
    "How information is collected",
    "Information may be collected when you submit a form, contact the team, or interact with website features that clearly request it.",
  ],
  [
    "use",
    "How information may be used",
    "Information may be used to respond to enquiries, assess programme fit, support onboarding, maintain records and improve the website experience.",
  ],
  [
    "basis",
    "Basis for processing",
    "Where applicable, processing may rely on consent, steps requested before entering an arrangement, legitimate operational interests, or a legal obligation.",
  ],
  [
    "sharing",
    "Sharing and service providers",
    "Information may be shared with authorised service providers or relevant programme parties only when needed for the stated purpose and subject to appropriate controls.",
  ],
  [
    "international",
    "International processing",
    "Live-streaming programmes may involve organisations in other countries. Any required cross-border handling should follow applicable safeguards.",
  ],
  [
    "retention",
    "Retention",
    "Personal information should be kept only for as long as needed for the purpose collected, legal requirements and reasonable record keeping.",
  ],
  [
    "security",
    "Security",
    "Reasonable organisational and technical measures should be used to protect personal information. No internet service can guarantee absolute security.",
  ],
  [
    "choices",
    "Your choices and rights",
    "Depending on applicable law, you may be able to request access, correction, deletion, restriction or withdrawal of consent. Some requests may be limited by legal obligations.",
  ],
  [
    "contact",
    "Privacy contact",
    "Use the contact page for privacy questions while a dedicated privacy address is being configured.",
  ],
].map(([id, title, body]) => ({ id, title, paragraphs: [body] }));

export const termsSections: LegalSection[] = [
  [
    "acceptance",
    "Acceptance of these terms",
    "By using this website, you agree to these terms. If you do not agree, please stop using the website.",
  ],
  [
    "website-use",
    "Website use",
    "Use the website lawfully and do not attempt to disrupt, misuse or gain unauthorised access to it or its systems.",
  ],
  [
    "information",
    "Information on this website",
    "Website content is general information and may change. Preview entries and draft features do not represent confirmed availability or a binding offer.",
  ],
  [
    "applications",
    "Applications",
    "Submitting interest does not guarantee review, acceptance, onboarding or access to a programme. Current preview forms do not transmit or store data.",
  ],
  [
    "eligibility",
    "Eligibility and verification",
    "Applicants may need to satisfy age, identity, location, platform and programme requirements before onboarding.",
  ],
  [
    "platforms",
    "Third-party platforms",
    "Platforms operate under their own terms, policies and decisions. Streamintia does not control platform availability, accounts or enforcement decisions.",
  ],
  [
    "earnings",
    "Earnings and outcomes",
    "Income, approval, audience growth and other outcomes are not guaranteed. Results depend on programme terms, eligibility, activity, performance and other factors.",
  ],
  [
    "conduct",
    "User conduct",
    "Users and applicants are responsible for accurate information, respectful conduct and compliance with applicable platform rules and law.",
  ],
  [
    "intellectual-property",
    "Intellectual property",
    "Website branding, design and original content may not be copied or used beyond what applicable law permits without authorisation.",
  ],
  [
    "links",
    "External links",
    "Links to external services are provided for convenience. Their content, availability and privacy practices are controlled by their respective operators.",
  ],
  [
    "availability",
    "Service availability",
    "The website may be changed, suspended or unavailable at times, including for maintenance or circumstances beyond reasonable control.",
  ],
  [
    "liability",
    "Limitation of liability",
    "To the extent permitted by applicable law, Streamintia is not responsible for indirect loss arising solely from reliance on preview information or third-party services.",
  ],
  [
    "changes",
    "Changes to these terms",
    "These terms may be updated as the service develops. The configured last-updated date will identify the current published version.",
  ],
  [
    "contact",
    "Contact",
    "Use the contact page for questions about these terms while dedicated legal contact details are being configured.",
  ],
].map(([id, title, body]) => ({ id, title, paragraphs: [body] }));
