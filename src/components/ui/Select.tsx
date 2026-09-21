import type { SelectHTMLAttributes } from "react";
export function Select({
  label,
  id,
  children,
  error,
  hint,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  id: string;
  error?: string;
  hint?: string;
}) {
  const described =
    [
      props["aria-describedby"],
      hint ? `${id}-hint` : "",
      error ? `${id}-error` : "",
    ]
      .filter(Boolean)
      .join(" ") || undefined;
  return (
    <div className="min-w-0">
      <label htmlFor={id} className="block mb-[0.55rem] text-xs font-medium text-muted">
        {label}
      </label>
      {hint ? (
        <p
          id={`${id}-hint`}
          className="field-hint text-[0.6875rem]! text-muted! leading-[1.6] mt-[0.4rem] mb-2"
        >
          {hint}
        </p>
      ) : null}
      <select
        id={id}
        {...props}
        aria-invalid={error ? true : undefined}
        aria-describedby={described}
        className="w-full min-h-12 text-base p-3 rounded-lg border border-[rgb(43_57_122/0.16)] bg-[#f9faff] text-[#11183f] transition-[border-color_200ms,box-shadow_200ms] focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 focus-visible:shadow-[0_0_18px_rgb(18_217_244/0.05)] aria-invalid:border-[#f4a8df]!"
      >
        {children}
      </select>
      {error ? (
        <p id={`${id}-error`} className="field-error text-[#f4a8df]! text-xs leading-[1.7] mt-2">
          {error}
        </p>
      ) : null}
    </div>
  );
}
