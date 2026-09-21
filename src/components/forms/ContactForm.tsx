"use client";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { HomeIcon } from "@/components/ui/HomeIcon";
import { contactSubjects } from "@/config/inner-pages";
import { validateDetails } from "@/lib/form-validation";
import { SuccessMessage } from "./SuccessMessage";
import { usePreviewForm } from "./usePreviewForm";
export function ContactForm({ subject = "" }: { subject?: string }) {
  const form = usePreviewForm(
    {
      name: "",
      email: "",
      phone: "",
      subject: contactSubjects.some((item) => item.value === subject)
        ? subject
        : "",
      message: "",
    },
    (values) => validateDetails(values),
  );
  const panelClass =
    "min-w-0 rounded-(--home-radius) border border-[rgb(43_57_122/0.11)] bg-white p-10 shadow-[0_24px_70px_rgb(39_49_105/0.1)] max-[1100px]:p-7 max-[767px]:p-6 max-[430px]:p-5";
  if (form.complete)
    return (
      <div className={panelClass} id="contact-form">
        <SuccessMessage kind="message" onEdit={form.edit} />
      </div>
    );
  return (
    <form
      className={panelClass}
      id="contact-form"
      noValidate
      onSubmit={form.submit}
      aria-describedby="contact-note"
    >
      <p className="home-eyebrow">TELL US WHAT’S ON YOUR MIND</p>
      <h2 className="mb-6 text-[2.25rem] max-[430px]:text-[1.85rem]">
        A conversation
        <br />
        starts with hello.
      </h2>
      <p
        id="contact-note"
        className="mb-6 max-w-[38rem] text-[0.75rem] leading-[1.8] text-(--home-muted)"
      >
        Frontend preview. Messages are not sent or saved. Required fields are
        labelled.
      </p>
      {Object.keys(form.errors).length ? (
        <p
          className="mb-6 rounded-lg border border-[rgb(240_0_184/0.25)] bg-[rgb(240_0_184/0.04)] px-4 py-3 text-[0.75rem] leading-[1.7] text-[#f4a8df]!"
          role="alert"
        >
          Please check the highlighted fields.
        </p>
      ) : null}
      <div className="mb-5 grid grid-cols-2 items-start gap-5 max-[430px]:grid-cols-1">
        <Input
          id="contact-name"
          name="name"
          label="Name (required)"
          required
          maxLength={100}
          autoComplete="name"
          value={form.values.name}
          onChange={(e) => form.update("name", e.target.value)}
          error={form.errors.name}
        />
        <Input
          id="contact-email"
          name="email"
          label="Email (required)"
          required
          type="email"
          maxLength={254}
          autoComplete="email"
          value={form.values.email}
          onChange={(e) => form.update("email", e.target.value)}
          error={form.errors.email}
        />
        <Input
          id="contact-phone"
          name="phone"
          label="Phone (optional)"
          type="tel"
          maxLength={30}
          autoComplete="tel"
          value={form.values.phone}
          onChange={(e) => form.update("phone", e.target.value)}
          error={form.errors.phone}
        />
        <Select
          id="enquiry"
          name="subject"
          label="Subject (required)"
          required
          value={form.values.subject}
          onChange={(e) => form.update("subject", e.target.value)}
          error={form.errors.subject}
        >
          <option value="">Choose a subject</option>
          {contactSubjects.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </Select>
      </div>
      <Textarea
        id="message"
        name="message"
        label="Message (required)"
        required
        rows={5}
        maxLength={2000}
        value={form.values.message}
        onChange={(e) => form.update("message", e.target.value)}
        error={form.errors.message}
      />
      <div className="mt-7 flex flex-col items-start gap-6 border-t border-(--home-border) pt-7">
        <p className="text-[0.6875rem] leading-[1.8] text-(--home-muted)">
          Share an idea, ask a question, or tell us where you want to go.
        </p>
        <Button
          type="submit"
          disabled={!form.ready}
          className="home-button home-button--primary w-full"
        >
          Preview message
          <HomeIcon name="arrow" />
        </Button>
      </div>
      <noscript>
        <p className="max-w-[38rem] text-[0.75rem] leading-[1.8] text-(--home-muted)">
          JavaScript is required for this preview. Live messaging is not
          connected.
        </p>
      </noscript>
    </form>
  );
}
