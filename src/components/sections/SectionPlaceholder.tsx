import { HomeIcon } from "@/components/ui/HomeIcon";

export function SectionPlaceholder({
  title,
  id,
  index = 1,
}: {
  title: string;
  id?: string;
  index?: number;
}) {
  return (
    <article
      className="outline-section relative min-h-[245px] overflow-hidden rounded-2xl border border-[rgb(43_57_122/0.1)] bg-[rgb(255_255_255/0.88)] p-7 shadow-[0_14px_42px_rgb(39_49_105/0.06)] transition-[transform,box-shadow,border-color] duration-300 ease-(--ease-standard) [&:nth-child(3n+2)]:bg-[linear-gradient(145deg,#ffffff,#f4f1ff)] [&:nth-child(3n+3)]:bg-[linear-gradient(145deg,#ffffff,#effbff)] hover:-translate-y-[5px] hover:border-[rgb(67_102_218/0.2)] hover:shadow-[0_24px_58px_rgb(39_49_105/0.12)] max-[560px]:min-h-[220px]"
      id={id}
      data-reveal
    >
      <div className="flex items-center justify-between text-[0.625rem] font-bold text-(--inner-accent) [&>svg]:h-[17px] [&>svg]:w-[17px] [&>svg]:transition-transform [&>svg]:duration-250 [.outline-section:hover_&>svg]:translate-x-1">
        <span>{String(index).padStart(2, "0")}</span>
        <HomeIcon name="arrow" />
      </div>
      <h2 className="mt-14 text-[clamp(1.25rem,2vw,1.65rem)] tracking-[-0.03em]">
        {title}
      </h2>
      <p className="mt-3 text-[0.8125rem] leading-[1.8] text-[#66708c]">
        Clear guidance and practical context to help you understand this part of
        the Streamintia journey.
      </p>
    </article>
  );
}
