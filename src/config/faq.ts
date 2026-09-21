export const faqCategories = [
  "General",
  "Streamers",
  "Agents",
  "Platforms",
  "Applications",
  "Onboarding",
  "Support",
] as const;

export interface FAQ {
  id: string;
  category: (typeof faqCategories)[number];
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "what-is-streamintia",
    category: "General",
    question: "What is Streamintia?",
    answer:
      "Streamintia is a live-streaming talent agency that helps creators and agents explore opportunities, understand onboarding and build with practical guidance.",
  },
  {
    id: "who-can-join",
    category: "General",
    question: "Who can explore an opportunity?",
    answer:
      "Aspiring and experienced creators, as well as people interested in developing a creator network, can explore the relevant pathway. Final eligibility depends on the selected programme.",
  },
  {
    id: "earnings",
    category: "General",
    question: "Are earnings guaranteed?",
    answer:
      "No. Earnings vary by platform, programme, activity and performance. Review confirmed terms carefully before joining any programme.",
  },
  {
    id: "streamer-start",
    category: "Streamers",
    question: "Do I need streaming experience to get started?",
    answer:
      "No previous streaming experience is required to express interest. Platform requirements and programme eligibility are confirmed before onboarding.",
  },
  {
    id: "streamer-support",
    category: "Streamers",
    question: "What support can a new streamer expect?",
    answer:
      "Support may cover platform readiness, onboarding steps, content routines and practical questions. The exact support available is explained for each confirmed programme.",
  },
  {
    id: "agent-role",
    category: "Agents",
    question: "What does a Streamintia agent do?",
    answer:
      "An agent discovers potential creators, helps them understand the joining path and supports clear communication as their network develops.",
  },
  {
    id: "agent-experience",
    category: "Agents",
    question: "Do agents need recruitment experience?",
    answer:
      "Experience can help, but communication, organisation and a responsible approach to supporting people are equally important. Programme-specific criteria still apply.",
  },
  {
    id: "platforms",
    category: "Platforms",
    question: "Are all listed platforms confirmed partners?",
    answer:
      "No. The current directory contains clearly marked preview entries. Confirmed availability and programme details will be published before applications open.",
  },
  {
    id: "platform-choice",
    category: "Platforms",
    question: "How do I choose a platform?",
    answer:
      "Start with your content style, audience, location and the programme requirements. Streamintia can help you compare available options once they are confirmed.",
  },
  {
    id: "applications",
    category: "Applications",
    question: "Can I submit an application yet?",
    answer:
      "Applications are not open on this preview website. Current forms demonstrate the intended experience and do not send or store information.",
  },
  {
    id: "application-information",
    category: "Applications",
    question: "What information will an application ask for?",
    answer:
      "A typical application may ask for contact details, location, role preference, platform interest and relevant experience. The final form will explain every required field.",
  },
  {
    id: "onboarding",
    category: "Onboarding",
    question: "What happens after I apply?",
    answer:
      "Once applications open, the team will review the information, confirm programme fit and explain any next steps. Applying does not guarantee acceptance.",
  },
  {
    id: "onboarding-time",
    category: "Onboarding",
    question: "How long does onboarding take?",
    answer:
      "Timing varies by programme, platform requirements and how quickly required information can be verified. A confirmed timeline will be shared during the process.",
  },
  {
    id: "support",
    category: "Support",
    question: "How can I contact support?",
    answer:
      "Use the contact form while direct support details are being configured. Choose the subject that best matches your question so it can be routed correctly.",
  },
  {
    id: "account-help",
    category: "Support",
    question: "Can Streamintia fix a platform account issue?",
    answer:
      "Streamintia can help you understand the next step, but platform-controlled account decisions and technical issues may need to be handled by the platform itself.",
  },
];
