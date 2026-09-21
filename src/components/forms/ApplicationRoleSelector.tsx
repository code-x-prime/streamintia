import { applicationRoles } from "@/config/inner-pages";
import { HomeIcon } from "@/components/ui/HomeIcon";
export function ApplicationRoleSelector({
  value,
  onChange,
}: {
  value: string;
  onChange: (role: string) => void;
}) {
  return (
    <fieldset>
      <legend className="flex items-center gap-[0.6rem] text-[1.5rem] leading-[1.4] font-medium tracking-[-0.035em] max-[430px]:text-[1.25rem]">
        <span className="mr-[0.6rem] text-[0.5625rem] text-primary">01</span>
        Choose your path
      </legend>
      <p className="field-hint mt-[0.4rem] mb-2 text-[0.6875rem]! leading-[1.6] text-(--home-muted)!">
        Start with the role that feels right. You can change it before
        finishing.
      </p>
      <div className="mt-6 grid grid-cols-2 gap-4 max-[430px]:gap-[0.65rem]">
        {applicationRoles.map((role) => (
          <label key={role.value} className="group relative block cursor-pointer">
            <input
              type="radio"
              name="application-role"
              value={role.value}
              checked={value === role.value}
              onChange={() => onChange(role.value)}
              className="absolute top-0 left-0 h-px w-px opacity-0"
            />
            <span
              className={`block rounded-xl border border-[rgb(43_57_122/0.12)] bg-[#f8f9ff] p-6 transition-[border-color,background] duration-200 group-has-focus-visible:outline-2 group-has-focus-visible:outline-offset-4 group-has-focus-visible:outline-primary max-[1100px]:p-[1.1rem] max-[430px]:p-[0.875rem] ${
                role.value === "agent"
                  ? "group-has-checked:border-[#b18bff] group-has-checked:bg-[linear-gradient(135deg,rgb(139_77_255/0.12),#ffffff)] group-has-checked:shadow-[0_12px_30px_rgb(139_77_255/0.08)]"
                  : "group-has-checked:border-[rgb(18_217_244/0.7)] group-has-checked:bg-[linear-gradient(135deg,rgb(18_217_244/0.12),#ffffff)] group-has-checked:shadow-[0_12px_30px_rgb(18_217_244/0.08)]"
              }`}
            >
              <span className="mb-6 flex items-center justify-between max-[430px]:mb-4 [&>svg]:text-primary">
                <HomeIcon
                  name={role.icon}
                  className={role.value === "agent" ? "text-[#bb9aff]" : ""}
                />
                <span className="h-4 w-4 rounded-full border border-(--home-muted) bg-clip-content p-[3px] group-has-checked:border-primary group-has-checked:bg-primary max-[430px]:h-5 max-[430px]:w-5" />
              </span>
              <strong className="block text-[1.375rem] font-medium max-[430px]:text-[1.2rem]">
                {role.label}
              </strong>
              <span className="mt-2 block text-[0.75rem] leading-[1.7] text-(--home-muted) max-[430px]:text-[0.625rem]">
                {role.description}
              </span>
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
