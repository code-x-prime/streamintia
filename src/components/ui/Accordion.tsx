export function Accordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <details className="outline-section">
      <summary>{title}</summary>
      <div className="pt-3">{children}</div>
    </details>
  );
}
