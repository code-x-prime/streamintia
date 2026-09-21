import type { TextareaHTMLAttributes } from "react";
export function Textarea({
  label,
  id,
  error,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  id: string;
  error?: string;
}) {
  return (
    <div className="min-w-0">
      <label htmlFor={id} className="block mb-[0.55rem] text-xs font-medium text-muted">
        {label}
      </label>
      <textarea
        id={id}
        {...props}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className="w-full min-h-12 max-h-140 text-base p-3 rounded-lg border border-[rgb(43_57_122/0.16)] bg-[#f9faff] text-[#11183f] placeholder:text-[#7b849f] resize-y transition-[border-color_200ms,box-shadow_200ms] focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 focus-visible:shadow-[0_0_18px_rgb(18_217_244/0.05)] aria-invalid:border-[#f4a8df]!"
      />
      {error ? (
        <p id={`${id}-error`} className="field-error text-[#f4a8df]! text-xs leading-[1.7] mt-2">
          {error}
        </p>
      ) : null}
    </div>
  );
}
