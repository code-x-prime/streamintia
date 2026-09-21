import { HomeIcon, type HomeIconName } from "@/components/ui/HomeIcon";
const icons: HomeIconName[] = [
  "compass",
  "play",
  "check",
  "network",
  "broadcast",
  "growth",
];
export interface ProcessStep {
  title: string;
  description: string;
}
export function ProcessSteps({
  steps,
  campaign = false,
}: {
  steps: readonly ProcessStep[];
  campaign?: boolean;
}) {
  return (
    <ol
      className={campaign ? "process-steps campaign-timeline" : "process-steps"}
      style={{ "--process-count": steps.length } as React.CSSProperties}
      data-stagger
    >
      {steps.map((step, index) => (
        <li key={step.title} data-reveal>
          <span className="process-number">0{index + 1}</span>
          {campaign ? <HomeIcon name={icons[index % icons.length]} /> : null}
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
