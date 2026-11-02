"use client";

import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import {
  AlertCircle,
  CheckCircle2,
  ClipboardCheck,
  Copy,
  Loader2,
  Mail,
  Phone,
  Send,
  ShieldCheck,
} from "lucide-react";
import { business } from "@/lib/site";

const serviceOptions = [
  "Heating services",
  "Air conditioning services",
  "Heat pump services",
  "Installation & replacement",
  "Repairs & troubleshooting",
  "Preventive maintenance",
  "Not sure yet",
];

type Fields = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

const initialFields: Fields = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

type Errors = Partial<Record<keyof Fields, string>>;

const inputClass =
  "w-full rounded-xl border border-navy-900/15 bg-white px-3.5 py-2.5 text-[14px] text-navy-900 placeholder:text-slate-400 transition-colors focus:border-ice-500 focus:ring-2 focus:ring-ice-500/20 focus:outline-none";

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(initialFields);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "ready">("idle");
  const [reference, setReference] = useState<string | null>(null);
  const [mailtoHref, setMailtoHref] = useState("");
  const [copied, setCopied] = useState(false);
  const [saveNote, setSaveNote] = useState<string | null>(null);

  const summary = useMemo(
    () =>
      [
        `Residential HVAC request`,
        `Name: ${fields.name}`,
        `Phone: ${fields.phone}`,
        `Email: ${fields.email}`,
        `Service: ${fields.service}`,
        "",
        `Message:`,
        fields.message,
        reference ? `\nReference: ${reference}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
    [fields, reference],
  );

  const update = (key: keyof Fields, value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (): Errors => {
    const next: Errors = {};
    if (fields.name.trim().length < 2) next.name = "Please enter your full name.";
    const digits = fields.phone.replace(/\D/g, "");
    if (digits.length < 10) next.phone = "Enter a phone number with at least 10 digits.";
    if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(fields.email.trim()))
      next.email = "Enter a valid email address.";
    if (!fields.service) next.service = "Please select the service you need.";
    if (fields.message.trim().length < 10)
      next.message = "Add a few details so the team can prepare (10+ characters).";
    return next;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const first = Object.keys(nextErrors)[0];
      document.getElementById(`field-${first}`)?.focus();
      return;
    }

    setStatus("submitting");
    let savedReference: string | null = null;
    let note: string | null = null;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      const payload: { ok?: boolean; reference?: string; error?: string } =
        await response.json();
      if (response.ok && payload.ok && payload.reference) {
        savedReference = payload.reference;
      } else {
        note =
          "Your request could not be logged right now. Please call the team directly or send the email draft below.";
      }
    } catch {
      note =
        "Your request could not be logged right now. Please call the team directly or send the email draft below.";
    }

    setReference(savedReference);
    setSaveNote(note);

    const body = [
      "Residential HVAC request",
      "",
      `Name: ${fields.name}`,
      `Phone: ${fields.phone}`,
      `Email: ${fields.email}`,
      `Service needed: ${fields.service}`,
      "",
      "Message:",
      fields.message,
      savedReference ? `\nReference: ${savedReference}` : "",
    ].join("\n");

    const href = `mailto:${business.email}?subject=${encodeURIComponent(
      `Residential HVAC request — ${fields.name}`,
    )}&body=${encodeURIComponent(body)}`;
    setMailtoHref(href);
    setStatus("ready");

    // Opening the draft keeps the request in the homeowner's own email app.
    window.location.href = href;
  };

  const copySummary = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  if (status === "ready") {
    return (
      <div className="rounded-2xl border border-navy-900/10 bg-white p-5 shadow-soft md:p-7">
        <div className="flex items-start gap-3">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-ice-50 text-ice-600 ring-1 ring-ice-100">
            <CheckCircle2 className="size-5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="font-display text-lg font-bold text-navy-900">
              Your request is ready to send
            </h3>
            <p className="mt-1 text-[13px] leading-relaxed text-slate-600">
              {reference
                ? `We logged your request as ${reference}. A pre-filled email draft should now be open in your email app — press send there to deliver it to our team.`
                : "A pre-filled email draft should now be open in your email app. Press send there to deliver it to our team."}
            </p>
            {saveNote ? (
              <p className="mt-2 flex items-start gap-1.5 rounded-lg bg-flame-50 px-2.5 py-2 text-[12px] text-flame-700">
                <AlertCircle className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
                {saveNote}
              </p>
            ) : null}
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-navy-900/8 bg-mist p-3.5">
          <p className="text-[10.5px] font-bold tracking-[0.14em] text-slate-500 uppercase">
            Request summary
          </p>
          <pre className="mt-2 max-h-40 overflow-auto text-[12px] leading-relaxed whitespace-pre-wrap text-navy-900">
            {summary}
          </pre>
        </div>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <a
            href={mailtoHref}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-navy-900 px-4 py-3 text-[13.5px] font-bold text-white transition-colors hover:bg-navy-800"
          >
            <Mail className="size-4" aria-hidden="true" />
            Open email draft again
          </a>
          <a
            href={business.phoneHref}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-flame-500 px-4 py-3 text-[13.5px] font-bold text-white transition-colors hover:bg-flame-600"
          >
            <Phone className="size-4" aria-hidden="true" />
            Call {business.phoneDisplay}
          </a>
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
          <button
            type="button"
            onClick={copySummary}
            className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-ice-700 hover:text-ice-600"
          >
            {copied ? (
              <ClipboardCheck className="size-3.5" aria-hidden="true" />
            ) : (
              <Copy className="size-3.5" aria-hidden="true" />
            )}
            {copied ? "Copied to clipboard" : "Copy request summary"}
          </button>
          <button
            type="button"
            onClick={() => {
              setFields(initialFields);
              setStatus("idle");
              setReference(null);
              setSaveNote(null);
            }}
            className="text-[12px] font-semibold text-slate-500 hover:text-navy-800"
          >
            Start another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-navy-900/10 bg-white p-4 shadow-soft sm:p-5 md:p-7"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="font-display text-xl font-extrabold text-navy-900 md:text-[1.6rem]">
            Tell us about your home comfort needs
          </h2>
          <p className="mt-1 text-[13px] text-slate-600">
            Share a few details and we will help you decide on the next step.
          </p>
        </div>
        <span className="hidden shrink-0 items-center gap-1 rounded-full bg-ice-50 px-2.5 py-1 text-[10.5px] font-bold text-ice-700 sm:inline-flex">
          <ShieldCheck className="size-3.5" aria-hidden="true" />
          No obligation
        </span>
      </div>

      <div className="mt-5 grid gap-3.5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="field-name"
            className="mb-1.5 block text-[12px] font-bold text-navy-900"
          >
            Full Name <span className="text-flame-500">*</span>
          </label>
          <input
            id="field-name"
            name="name"
            type="text"
            autoComplete="name"
            value={fields.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "error-name" : undefined}
            className={`${inputClass} ${errors.name ? "border-flame-500" : ""}`}
            placeholder="Jordan Miller"
          />
          {errors.name ? (
            <p id="error-name" className="mt-1 flex items-center gap-1 text-[11.5px] text-flame-700">
              <AlertCircle className="size-3" aria-hidden="true" />
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="field-phone"
            className="mb-1.5 block text-[12px] font-bold text-navy-900"
          >
            Phone Number <span className="text-flame-500">*</span>
          </label>
          <input
            id="field-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={fields.phone}
            onChange={(event) => update("phone", event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "error-phone" : undefined}
            className={`${inputClass} ${errors.phone ? "border-flame-500" : ""}`}
            placeholder="(914) 555-0134"
          />
          {errors.phone ? (
            <p id="error-phone" className="mt-1 flex items-center gap-1 text-[11.5px] text-flame-700">
              <AlertCircle className="size-3" aria-hidden="true" />
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="field-email"
            className="mb-1.5 block text-[12px] font-bold text-navy-900"
          >
            Email Address <span className="text-flame-500">*</span>
          </label>
          <input
            id="field-email"
            name="email"
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "error-email" : undefined}
            className={`${inputClass} ${errors.email ? "border-flame-500" : ""}`}
            placeholder="you@example.com"
          />
          {errors.email ? (
            <p id="error-email" className="mt-1 flex items-center gap-1 text-[11.5px] text-flame-700">
              <AlertCircle className="size-3" aria-hidden="true" />
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="field-service"
            className="mb-1.5 block text-[12px] font-bold text-navy-900"
          >
            Service Required <span className="text-flame-500">*</span>
          </label>
          <select
            id="field-service"
            name="service"
            value={fields.service}
            onChange={(event) => update("service", event.target.value)}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "error-service" : undefined}
            className={`${inputClass} ${fields.service ? "text-navy-900" : "text-slate-400"} ${
              errors.service ? "border-flame-500" : ""
            }`}
          >
            <option value="">Select a service</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.service ? (
            <p id="error-service" className="mt-1 flex items-center gap-1 text-[11.5px] text-flame-700">
              <AlertCircle className="size-3" aria-hidden="true" />
              {errors.service}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="field-message"
            className="mb-1.5 block text-[12px] font-bold text-navy-900"
          >
            Message <span className="text-flame-500">*</span>
          </label>
          <textarea
            id="field-message"
            name="message"
            rows={4}
            value={fields.message}
            onChange={(event) => update("message", event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "error-message" : "hint-message"}
            className={`${inputClass} resize-y ${errors.message ? "border-flame-500" : ""}`}
            placeholder="Tell us what is happening — system type, rooms affected, and when you noticed the concern."
          />
          {errors.message ? (
            <p id="error-message" className="mt-1 flex items-center gap-1 text-[11.5px] text-flame-700">
              <AlertCircle className="size-3" aria-hidden="true" />
              {errors.message}
            </p>
          ) : (
            <p id="hint-message" className="mt-1 text-[11px] text-slate-500">
              Please avoid sharing sensitive information such as payment details.
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-flame-500 px-5 py-3.5 text-[14.5px] font-bold text-white shadow-[0_14px_30px_-18px_rgba(242,140,40,0.95)] transition-all hover:-translate-y-0.5 hover:bg-flame-600 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? (
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
        ) : (
          <Send className="size-4" aria-hidden="true" />
        )}
        Prepare my request
      </button>

      <p className="mt-3 flex items-start gap-1.5 text-[11.5px] leading-relaxed text-slate-500">
        <Mail className="mt-0.5 size-3.5 shrink-0 text-ice-600" aria-hidden="true" />
        How this works: your details are validated and logged with a reference number,
        then your email app opens with a pre-filled draft. Nothing is sent automatically.
        For the fastest response, call{" "}
        <a href={business.phoneHref} className="font-semibold text-ice-700 hover:underline">
          {business.phoneDisplay}
        </a>
        .
      </p>
    </form>
  );
}
