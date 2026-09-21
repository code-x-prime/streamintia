export function EditorialRows({
  items,
}: {
  items: readonly { title: string; description: string }[];
}) {
  return (
    <ol className="mt-6">
      {items.map((item, index) => (
        <li
          key={item.title}
          className="flex gap-6 border-b border-(--home-border) py-[1.4rem] first:pt-0"
        >
          <span className="text-[0.5625rem] leading-[1.8] text-(--inner-accent)">
            0{index + 1}
          </span>
          <div>
            <h3 className="text-[1.125rem] leading-[1.4]">{item.title}</h3>
            <p className="mt-2 text-[0.875rem] leading-[1.8] text-(--home-muted)">
              {item.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
