import { HomeIcon } from "@/components/ui/HomeIcon";
export function NavigationIcon({
  name,
  className = "",
}: {
  name: "arrow" | "chevron" | "chevron-up" | "menu" | "close";
  className?: string;
}) {
  return (
    <HomeIcon name={name} className={className} size={20} strokeWidth={1.6} />
  );
}
