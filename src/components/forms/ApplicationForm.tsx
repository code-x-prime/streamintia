"use client";
import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { HomeIcon } from "@/components/ui/HomeIcon";
import { platforms } from "@/config/platforms";
import { validateDetails } from "@/lib/form-validation";
import { ApplicationRoleSelector } from "./ApplicationRoleSelector";
import { SuccessMessage } from "./SuccessMessage";
import { usePreviewForm } from "./usePreviewForm";
export function ApplicationForm({
  role = "",
  platform = "",
}: {
  role?: string;
  platform?: string;
}) {
  const [selectedRole, setRole] = useState(
    ["streamer", "agent"].includes(role) ? role : "",
  );
  const form = usePreviewForm(
    {
      name: "",
      email: "",
      phone: "",
      country: "",
      platform: platforms.some((item) => item.slug === platform)
        ? platform
        : "",
      profile: "",
      message: "",
      teamStage: "",
    },
    (values) => validateDetails(values, true, selectedRole === "agent"),
  );
  const workspaceClass =
    "min-w-0 rounded-(--home-radius) border border-(--home-border) bg-white p-10 shadow-[0_24px_70px_rgb(39_49_105/0.1)] max-[1100px]:p-7 max-[767px]:order-[-1] max-[767px]:p-6 max-[430px]:p-5";
  if (form.complete)
    return (
      <section className={workspaceClass}>
        <SuccessMessage kind="application" onEdit={form.edit} />
      </section>
    );
  return (
    <div className={workspaceClass}>
      <ApplicationRoleSelector
        value={selectedRole}
        onChange={(value) => {
          setRole(value);
          form.clearErrors();
        }}
      />
      {selectedRole ? (
        <form
          id="application-details"
          noValidate
          onSubmit={form.submit}
          aria-describedby="application-note"
        >
          <div className="mt-10 mb-4 flex items-center justify-between gap-4 border-t border-(--home-border) pt-8 max-[430px]:items-start">
            <h2 className="text-[1.5rem] leading-[1.4] tracking-[-0.035em] max-[430px]:text-[1.25rem]">
              <span className="mr-[0.6rem] text-[0.5625rem] text-primary">02</span>
              A little about you
            </h2>
            <span className="rounded-[3px] border border-(--home-border) px-2 py-1 text-[0.5625rem] whitespace-nowrap text-(--home-muted) max-[430px]:hidden">
              {selectedRole === "agent" ? "Agent" : "Streamer"} path
            </span>
          </div>
          <p
            id="application-note"
            className="mb-6 max-w-[38rem] text-[0.75rem] leading-[1.8] text-(--home-muted)"
          >
            Preview only. Nothing you enter is sent or saved. Required fields
            are labelled.
          </p>
          <input id="role" type="hidden" name="role" value={selectedRole} />
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
              id="app-name"
              name="name"
              label="Full name (required)"
              autoComplete="name"
              required
              maxLength={100}
              value={form.values.name}
              onChange={(e) => form.update("name", e.target.value)}
              error={form.errors.name}
            />
            <Input
              id="app-email"
              name="email"
              label="Email (required)"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              value={form.values.email}
              onChange={(e) => form.update("email", e.target.value)}
              error={form.errors.email}
            />
            <Input
              id="app-phone"
              name="phone"
              label="Phone / WhatsApp (required)"
              type="tel"
              autoComplete="tel"
              required
              maxLength={30}
              value={form.values.phone}
              onChange={(e) => form.update("phone", e.target.value)}
              error={form.errors.phone}
            />
            <Input
              id="app-country"
              name="country"
              label="Country (required)"
              autoComplete="country-name"
              required
              maxLength={80}
              value={form.values.country}
              onChange={(e) => form.update("country", e.target.value)}
              error={form.errors.country}
            />
          </div>
          <div className="mt-10 mb-4 flex items-center justify-between gap-4 border-t border-(--home-border) pt-8 max-[430px]:items-start">
            <h2 className="text-[1.5rem] leading-[1.4] tracking-[-0.035em] max-[430px]:text-[1.25rem]">
              <span className="mr-[0.6rem] text-[0.5625rem] text-primary">03</span>
              Your direction
            </h2>
          </div>
          <div className="mb-5 grid grid-cols-2 items-start gap-5 max-[430px]:grid-cols-1">
            <Select
              id="platform"
              name="platform"
              label="Preferred platform"
              value={form.values.platform}
              onChange={(e) => form.update("platform", e.target.value)}
              hint="Programme availability is pending confirmation."
            >
              <option value="">Help me choose</option>
              {platforms.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.name}
                  {item.status === "pending" ? " — preview" : ""}
                </option>
              ))}
            </Select>
            {selectedRole === "agent" ? (
              <Select
                id="team-stage"
                name="teamStage"
                label="Your creator network (required)"
                required
                value={form.values.teamStage}
                onChange={(e) => form.update("teamStage", e.target.value)}
                error={form.errors.teamStage}
              >
                <option value="">Choose an option</option>
                <option value="starting">I’m starting a network</option>
                <option value="existing">I already work with creators</option>
              </Select>
            ) : (
              <Input
                id="app-profile"
                name="profile"
                label="Social / creator profile (optional)"
                type="url"
                maxLength={500}
                placeholder="https://"
                value={form.values.profile}
                onChange={(e) => form.update("profile", e.target.value)}
                error={form.errors.profile}
              />
            )}
          </div>
          <Textarea
            id="app-message"
            name="message"
            label={
              selectedRole === "agent"
                ? "Tell us about your goals as an agent (optional)"
                : "What would you love to stream about? (optional)"
            }
            rows={4}
            maxLength={2000}
            value={form.values.message}
            onChange={(e) => form.update("message", e.target.value)}
            error={form.errors.message}
          />
          <div className="mt-7 flex items-center justify-between gap-6 border-t border-(--home-border) pt-7 max-[1100px]:flex-col max-[1100px]:items-start">
            <p className="max-w-[16rem] text-[0.6875rem] leading-[1.8] text-(--home-muted) max-[1100px]:max-w-none">
              No documents or payment details needed for this preview.
            </p>
            <Button
              className="home-button home-button--primary shrink-0 max-[1100px]:w-full"
              type="submit"
              disabled={!form.ready}
            >
              Preview application
              <HomeIcon name="arrow" />
            </Button>
          </div>
        </form>
      ) : (
        <div className="mt-8 flex items-center gap-4 border-t border-(--home-border) pt-8">
          <HomeIcon name="compass" className="shrink-0 text-primary" />
          <p className="text-[0.8125rem] text-(--home-muted)">
            Choose Streamer or Agent to see the next step.
          </p>
        </div>
      )}
      <noscript>
        <p className="max-w-[38rem] text-[0.75rem] leading-[1.8] text-(--home-muted)">
          Enable JavaScript to explore the role selection and form preview.
        </p>
      </noscript>
    </div>
  );
}
