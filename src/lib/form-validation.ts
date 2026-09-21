export type FormValues = Record<string, string>;
export type FormErrors = Record<string, string>;
export function validateDetails(
  values: FormValues,
  application = false,
  agent = false,
): FormErrors {
  const errors: FormErrors = {};
  if (values.name.trim().length < 2)
    errors.name = "Enter your full name (at least 2 characters).";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = "Enter a valid email address.";
  const phone = values.phone.trim();
  const digits = phone.replace(/\D/g, "");
  if (
    (application && !phone) ||
    (phone &&
      (!/^[+\d\s().-]+$/.test(phone) ||
        digits.length < 7 ||
        digits.length > 15))
  )
    errors.phone = "Enter a phone number with 7–15 digits.";
  if (application && values.country.trim().length < 2)
    errors.country = "Enter your country.";
  if (application && agent && !values.teamStage)
    errors.teamStage = "Choose the option that describes your network.";
  if (!agent && values.profile?.trim()) {
    try {
      const url = new URL(values.profile);
      if (!["http:", "https:"].includes(url.protocol)) throw new Error();
    } catch {
      errors.profile =
        "Enter a full profile URL starting with https:// or http://.";
    }
  }
  if (!application && !values.subject) errors.subject = "Choose a subject.";
  if (
    (!application || values.message.trim()) &&
    values.message.trim().length < 10
  )
    errors.message =
      "Please add a little more detail (at least 10 characters).";
  return errors;
}
