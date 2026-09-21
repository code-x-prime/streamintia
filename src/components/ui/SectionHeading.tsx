export function SectionHeading({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <header>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </header>
  );
}
