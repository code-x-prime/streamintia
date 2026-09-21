import type { ButtonHTMLAttributes } from "react";
export function IconButton({
  label,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
}) {
  return <button {...props} aria-label={label} className="button" />;
}
