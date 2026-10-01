export interface LegalSection {
  id: string;
  title: string;
  paragraphs: string[];
}
export const legalUpdatedAt = process.env.NEXT_PUBLIC_LEGAL_UPDATED_AT ?? null;

const section = (
  id: string,
  title: string,
  ...paragraphs: string[]
): LegalSection => ({ id, title, paragraphs });

export const privacySections: LegalSection[] = [
  section(
    "who-we-are",
    "Who we are",
    "Streamintia is an independent talent and creator-support team. We help creators and agents understand live-streaming opportunities, prepare for onboarding and find suitable platforms.",
    "Streamintia is not the official platform of any live-streaming app listed on this website. Each platform has its own terms and its own privacy policy.",
  ),
  section(
    "information",
    "Information we collect",
    "We only ask for what we need. Depending on how you use the website, this may include:",
    "Contact details: your name, email address and phone number.",
    "Enquiry and application details: your role (streamer or agent), the platforms you are interested in, your experience, and anything you choose to write in a message.",
    "Basic technical data: such as your device, browser and the pages you visit, collected through standard website logs.",
    "Please do not send passwords, one-time passwords (OTPs), bank card details or government ID numbers through this website. We never ask for them in a form or a message.",
  ),
  section(
    "how-we-collect",
    "How we collect it",
    "We collect information that you give us directly, for example when you fill in the contact form or the application form, or when you email us.",
    "Forms on this website are currently a preview. At this stage they do not transmit or store what you type. If this changes, this policy will be updated before any form begins collecting data.",
  ),
  section(
    "use",
    "How we use your information",
    "We use your information to reply to your questions, understand which pathway suits you, prepare you for onboarding, keep records of our conversations and improve this website.",
    "We do not sell your personal information. We do not use it to send you unrelated advertising, and we will not contact you about opportunities that you did not ask about.",
  ),
  section(
    "consent",
    "Your consent",
    "We process your information with your consent, which you give when you submit a form or contact us, or where it is needed to respond to a request you made.",
    "You can withdraw your consent at any time by writing to us. Withdrawing consent does not affect anything we did before you withdrew it.",
  ),
  section(
    "sharing",
    "Who we may share it with",
    "We share information only when it is needed for the reason you gave it to us. For example, with a platform or programme partner when you ask us to help with an application, or with a trusted service provider who helps us run the website or send emails.",
    "Anyone we share information with is expected to protect it and to use it only for that purpose. We may also disclose information if the law requires it.",
  ),
  section(
    "international",
    "Information held in other countries",
    "Live-streaming platforms and service providers may operate from other countries. If your information is handled outside India, we aim to use providers that protect it appropriately.",
  ),
  section(
    "retention",
    "How long we keep it",
    "We keep personal information only for as long as we need it for the purpose you gave it for, to meet legal requirements and to keep reasonable records.",
    "When we no longer need it, we delete it or make it anonymous.",
  ),
  section(
    "security",
    "How we protect it",
    "We use sensible technical and organisational measures to protect personal information, such as limiting who can access it. No website or email can be made completely secure, so please share only what is necessary.",
  ),
  section(
    "rights",
    "Your rights",
    "Under India’s Digital Personal Data Protection Act, 2023, and other applicable laws, you may have the right to ask what information we hold about you, to ask us to correct or update it, to ask us to delete it, and to withdraw your consent.",
    "To use any of these rights, write to us using the contact details below. We will reply as soon as we reasonably can. We may need to confirm your identity first, and some requests may be limited where the law requires us to keep certain records.",
  ),
  section(
    "children",
    "Children",
    "This website is meant for people who are 18 years of age or older. We do not knowingly collect personal information from anyone under 18. If you believe a child has sent us information, please tell us so that we can remove it.",
  ),
  section(
    "cookies",
    "Cookies and analytics",
    "This website may use basic cookies or similar technology that are needed for it to work properly. If we add analytics or advertising tools in future, we will describe them here and ask for your consent where the law requires it.",
  ),
  section(
    "changes",
    "Changes to this policy",
    "We may update this policy as our services develop. The “last updated” date at the top shows the current version. If a change is important, we will make it easy to notice.",
  ),
  section(
    "contact",
    "Contact us about privacy",
    "For any privacy question or request, please write to us at official.streamintia@gmail.com or use the contact page. Please put “Privacy” in the subject so that we can reply faster.",
  ),
];

export const termsSections: LegalSection[] = [
  section(
    "acceptance",
    "Acceptance of these terms",
    "By using this website, you agree to these terms and to our Privacy Policy. If you do not agree, please do not use the website.",
    "You must be at least 18 years old to use this website or to apply for any opportunity described on it.",
  ),
  section(
    "who-we-are",
    "Who we are and what we do",
    "Streamintia is an independent talent and creator-support team. We offer guidance, information and onboarding support for creators and agents.",
    "We are not owned by, partnered with or endorsed by any live-streaming platform mentioned on this website, unless we clearly say so. Names and logos of platforms belong to their owners and are shown only to help you identify them.",
  ),
  section(
    "website-use",
    "Using the website",
    "Please use the website lawfully and respectfully. Do not try to disrupt it, break into it, copy it automatically in bulk, or use it to send spam or harmful content.",
    "We may restrict access if the website is misused.",
  ),
  section(
    "information",
    "Information on this website",
    "The content here is general information and may change without notice. Platform entries marked “Preview” or “being confirmed” are not confirmed partnerships, offers or guarantees of availability.",
    "We try to keep information accurate, but we cannot promise that everything is complete or up to date.",
  ),
  section(
    "applications",
    "Enquiries and applications",
    "Sending an enquiry or showing interest does not guarantee a reply within a set time, a review, acceptance, onboarding or access to any programme.",
    "Forms on this website are currently a preview and do not transmit or store information. Please contact us by email if you need a reply.",
  ),
  section(
    "eligibility",
    "Eligibility and verification",
    "Platforms and programmes may require you to meet conditions such as age, identity verification, location, device or internet requirements, and their own policies. These are decided by the platform, not by us.",
  ),
  section(
    "platforms",
    "Third-party platforms",
    "Live-streaming platforms work under their own terms, policies and decisions. They control approvals, accounts, rankings, rules, enforcement and payouts.",
    "Please read the platform’s own terms before you join. We are not responsible for a platform’s decisions or for changes it makes.",
  ),
  section(
    "earnings",
    "Earnings and results",
    "We do not guarantee income, approval, audience growth, rankings or any other result. What you earn or achieve depends on the platform’s programme, your eligibility, your activity, your performance and other factors outside our control.",
    "Any examples or descriptions on this website are for general understanding only and are not promises.",
  ),
  section(
    "fees",
    "Fees and payments",
    "At the time of writing, we do not charge fees for exploring this website or sending an enquiry. If any fee or cost ever applies to a service, we will explain it clearly and in writing before you agree to it.",
    "Please be careful of anyone who asks you for money, passwords or OTPs in our name. If you are unsure, contact us at our official email.",
  ),
  section(
    "conduct",
    "Your responsibilities",
    "Please give accurate information, treat others respectfully, and follow the rules of the platforms you use and the laws that apply to you.",
    "Do not pretend to be someone else, do not share content that is illegal or harmful, and do not use our name in a way that suggests we approve something we have not.",
  ),
  section(
    "intellectual-property",
    "Intellectual property",
    "The Streamintia name, logo, design, text and images on this website belong to us or to those who licensed them to us. You may view and share links to the website, but you may not copy or reuse our content for other purposes without permission.",
  ),
  section(
    "links",
    "External links",
    "This website may link to other websites or services for convenience. We do not control them and are not responsible for their content, availability or privacy practices.",
  ),
  section(
    "availability",
    "Availability of the website",
    "The website may sometimes be unavailable or change, for example for maintenance or reasons beyond our control. We do not promise that it will always be uninterrupted or free from errors.",
  ),
  section(
    "liability",
    "Limit of our responsibility",
    "To the extent the law allows, Streamintia is not responsible for loss that results from relying on information on this website, from a platform’s decisions, or from the use of third-party services.",
    "Nothing in these terms limits any right you have under law that cannot be limited.",
  ),
  section(
    "law",
    "Governing law",
    "These terms are governed by the laws of India. Any dispute that cannot be resolved in good faith will be handled by the courts that have jurisdiction under Indian law.",
  ),
  section(
    "changes",
    "Changes to these terms",
    "We may update these terms as our services develop. The “last updated” date at the top shows the current version. Using the website after a change means you accept the updated terms.",
  ),
  section(
    "contact",
    "Contact us",
    "For questions about these terms, write to us at official.streamintia@gmail.com or use the contact page.",
  ),
];
