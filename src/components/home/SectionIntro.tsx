export function SectionIntro({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="home-section-intro" data-reveal>
      <div>
        <p className="home-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {description ? <p className="home-lead">{description}</p> : null}
      </div>
      {children}
    </div>
  );
}
