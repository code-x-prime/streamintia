"use client";
import { useState, useSyncExternalStore, type FormEvent } from "react";
import type { FormValues, FormErrors } from "@/lib/form-validation";
const subscribe = () => () => {};
const clientReady = () => true;
const serverReady = () => false;
export function usePreviewForm(
  initial: FormValues,
  validate: (values: FormValues) => FormErrors,
) {
  const ready = useSyncExternalStore(subscribe, clientReady, serverReady);
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<FormErrors>({});
  const [complete, setComplete] = useState(false);
  function update(name: string, value: string) {
    setValues((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => {
      if (!previous[name]) return previous;
      const next = { ...previous };
      delete next[name];
      return next;
    });
  }
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      requestAnimationFrame(() => {
        const field = form.elements.namedItem(Object.keys(nextErrors)[0]);
        if (field instanceof HTMLElement) field.focus();
      });
      return;
    }
    setComplete(true);
  }
  return {
    ready,
    values,
    errors,
    complete,
    update,
    submit,
    edit: () => setComplete(false),
    clearErrors: () => setErrors({}),
  };
}
