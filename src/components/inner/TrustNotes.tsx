import { site } from "@/config/site";

function ShieldIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3 5 6v5.5c0 4.2 2.8 7.6 7 9.5 4.2-1.9 7-5.3 7-9.5V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function DisclaimerBar() {
  return (
    <div
      role="note"
      className="bg-[#0a1038] px-(--home-gutter) py-3 text-center text-[0.8125rem] leading-[1.5] text-[#d9dcf0] max-[767px]:text-xs"
    >
      <p className="mx-auto flex max-w-[64rem] items-start justify-center gap-2.5 text-inherit">
        <ShieldIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#6feafb]" />
        <span>
          <strong className="font-semibold text-white">Please note:</strong>{" "}
          Streamintia is an independent talent and creator-support team. We are
          not the official platform of any live-streaming app listed here.
        </span>
      </p>
    </div>
  );
}

const commitments = [
  "We offer coaching, guidance and onboarding support. We do not run the platforms.",
  "Approvals, earnings, rankings and payouts are decided by each platform. We never guarantee them.",
  "If any fee or cost ever applies, it will be explained clearly in writing before you commit.",
  "Share only what the application asks for. We will never ask for your passwords or OTPs.",
];

export function TransparencyNote() {
  const { email } = site.contact;
  return (
    <section className="home-section px-(--home-gutter) py-[clamp(2.5rem,5vw,4rem)]">
      <div className="home-container">
        <div
          data-reveal
          className="mx-auto max-w-[56rem] rounded-3xl border border-[rgb(42_52_105/0.12)] bg-[linear-gradient(145deg,#ffffff,#f6f5ff)] p-[clamp(1.5rem,4vw,2.5rem)] shadow-[0_18px_45px_rgb(42_52_105/0.07)]"
        >
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[image:linear-gradient(135deg,#12d9f4,#8b4dff)] text-white shadow-[0_10px_20px_-8px_#8b4dff66]">
              <ShieldIcon className="h-5 w-5" />
            </span>
            <h2 className="text-[clamp(1.25rem,2.4vw,1.625rem)]! font-semibold! tracking-[-0.03em]!">
              Transparency and platform independence
            </h2>
          </div>
          <ul className="mt-5 grid gap-3">
            {commitments.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-[0.9375rem] leading-[1.7] text-[#2e345c]"
              >
                <span
                  aria-hidden="true"
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8b4dff]"
                />
                {item}
              </li>
            ))}
          </ul>
          {email ? (
            <p className="mt-5 border-t border-[rgb(42_52_105/0.1)] pt-4 text-sm text-[#5d6683]">
              Questions or concerns? Write to us at{" "}
              <a
                href={`mailto:${email}`}
                className="font-medium text-[#5b4bd4] [overflow-wrap:anywhere]"
              >
                {email}
              </a>
              .
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
