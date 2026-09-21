import Link from "next/link";
import type { LegalSection } from "@/config/legal";

export function LegalDocument({
  sections,
  updatedAt,
}: {
  sections: LegalSection[];
  updatedAt: string | null;
}) {
  return (
    <section className="bg-white px-(--home-gutter) pt-4 pb-32">
      <div className="home-container grid grid-cols-[250px_minmax(0,760px)] justify-center items-start gap-[clamp(2rem,7vw,7rem)] max-[900px]:grid-cols-1">
        <aside className="sticky top-[110px] p-5 rounded-2xl border border-[rgb(40_54_122/0.1)] bg-[#f8f9fd] max-[900px]:static">
          <p className="mb-3 text-[#252b49] text-[0.74rem] font-bold uppercase tracking-[0.1em]">
            On this page
          </p>
          <nav className="grid max-h-[calc(100vh-210px)] overflow-auto max-[900px]:grid-cols-2 max-[900px]:max-h-none max-[900px]:gap-x-4 max-[900px]:gap-y-0 max-[767px]:flex max-[767px]:overflow-x-auto max-[767px]:gap-[0.6rem]">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="py-[0.52rem] text-[#66708a] text-[0.76rem] leading-[1.3] hover:text-[#5847d1] max-[767px]:flex-none max-[767px]:px-3 max-[767px]:py-[0.55rem] max-[767px]:rounded-full max-[767px]:bg-white"
              >
                {section.title}
              </a>
            ))}
          </nav>
        </aside>
        <article className="legal-document">
          <div className="flex justify-between gap-4 pb-4 border-b border-[rgb(40_54_122/0.1)] text-[#68718b] text-xs max-[767px]:flex-col">
            <span>Last updated</span>
            <strong className="text-[#303752]">
              {updatedAt ?? "Date will be added on publication"}
            </strong>
          </div>
          <p className="my-8 mb-16 p-5 border-l-[3px] border-[#725ce0] bg-[#f7f5ff] text-[#59637e] leading-[1.7]">
            This document is written as a clear operational draft and should be
            reviewed for the business entity and applicable jurisdictions before
            publication.
          </p>
          {sections.map((section, index) => (
            <section
              id={section.id}
              key={section.id}
              className="scroll-mt-[110px] pb-12 mb-12 border-b border-[rgb(40_54_122/0.1)]"
            >
              <span className="text-[#7461df] text-[0.7rem]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-[0.55rem] text-[clamp(1.6rem,3vw,2.25rem)]">
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-[#5d6780] leading-[1.9]">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
          <p className="p-5 rounded-xl bg-[#effbff]">
            Questions about this document?{" "}
            <Link href="/contact" className="text-[#5547ce] font-bold">
              Contact Streamintia
            </Link>
            .
          </p>
        </article>
      </div>
    </section>
  );
}
