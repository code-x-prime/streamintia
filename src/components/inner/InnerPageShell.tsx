import { InnerMotion } from "./InnerMotion";
import "@/styles/home.css";
import "@/styles/inner.css";
export function InnerPageShell({
  children,
  tone = "cyan",
}: {
  children: React.ReactNode;
  tone?: "cyan" | "purple" | "neutral";
}) {
  return <InnerMotion tone={tone}>{children}</InnerMotion>;
}
