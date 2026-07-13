"use client";

import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { services } from "@/data/services";

type FormState = {
  status: "idle" | "loading" | "success" | "error";
  message: string;
  errors: Record<string, string>;
};

const initialState: FormState = { status: "idle", message: "", errors: {} };

export function ContactForm() {
  const [state, setState] = useState<FormState>(initialState);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setState({ status: "loading", message: "", errors: {} });

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        consent: formData.get("consent") === "on",
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      setState({
        status: "error",
        message: result.message || "Please review the form and try again.",
        errors: result.errors || {},
      });
      return;
    }

    form.reset();
    setState({
      status: "success",
      message:
        result.message ||
        "Thank you. Your consultation request has been received.",
      errors: {},
    });
  }

  return (
    <form onSubmit={onSubmit} className="rounded-lg border border-white/10 bg-white/[0.035] p-5 sm:p-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="fullName" error={state.errors.fullName} required />
        <Field label="Email Address" name="email" type="email" error={state.errors.email} required />
        <Field label="Phone Number" name="phone" error={state.errors.phone} />
        <Field label="Company Name" name="company" error={state.errors.company} />
        <Field label="Website URL" name="website" type="url" error={state.errors.website} placeholder="https://example.com" />
        <div>
          <label htmlFor="service" className="text-sm font-medium text-zinc-200">
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            required
            className="mt-2 min-h-11 w-full rounded-md border border-white/10 bg-[#111113] px-3 text-sm text-white outline-none transition focus:border-cyan-300"
            aria-invalid={Boolean(state.errors.service)}
          >
            <option value="">Choose a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
          <ErrorText message={state.errors.service} />
        </div>
        <div>
          <label htmlFor="budget" className="text-sm font-medium text-zinc-200">
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            className="mt-2 min-h-11 w-full rounded-md border border-white/10 bg-[#111113] px-3 text-sm text-white outline-none transition focus:border-cyan-300"
          >
            <option value="">Optional</option>
            <option>Not sure yet</option>
            <option>Under NPR 50,000</option>
            <option>NPR 50,000 - 150,000</option>
            <option>NPR 150,000+</option>
          </select>
        </div>
        <div>
          <label htmlFor="preferredContact" className="text-sm font-medium text-zinc-200">
            Preferred Contact Method
          </label>
          <select
            id="preferredContact"
            name="preferredContact"
            required
            className="mt-2 min-h-11 w-full rounded-md border border-white/10 bg-[#111113] px-3 text-sm text-white outline-none transition focus:border-cyan-300"
            aria-invalid={Boolean(state.errors.preferredContact)}
          >
            <option value="">Choose one</option>
            <option>Email</option>
            <option>Phone</option>
            <option>WhatsApp / phone message</option>
          </select>
          <ErrorText message={state.errors.preferredContact} />
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="projectDetails" className="text-sm font-medium text-zinc-200">
          Project Details
        </label>
        <textarea
          id="projectDetails"
          name="projectDetails"
          required
          rows={6}
          className="mt-2 w-full rounded-md border border-white/10 bg-[#111113] px-3 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-300"
          placeholder="Tell me about your business, goals, current challenges, and what you want AI or automation to improve."
          aria-invalid={Boolean(state.errors.projectDetails)}
        />
        <ErrorText message={state.errors.projectDetails} />
      </div>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="websiteTrap">Website trap</label>
        <input id="websiteTrap" name="websiteTrap" tabIndex={-1} autoComplete="off" />
      </div>
      <label className="mt-5 flex gap-3 text-sm leading-6 text-zinc-400">
        <input
          type="checkbox"
          name="consent"
          className="mt-1 h-4 w-4 rounded border-white/20 bg-[#111113] text-cyan-400"
        />
        I consent to MezuStudio contacting me about this inquiry.
      </label>
      <ErrorText message={state.errors.consent} />
      {state.message ? (
        <p
          className={`mt-5 rounded-md border px-4 py-3 text-sm ${
            state.status === "success"
              ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
              : "border-red-400/30 bg-red-400/10 text-red-200"
          }`}
          role="status"
        >
          {state.message}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={state.status === "loading"}
        className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {state.status === "loading" ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : (
          <Send className="h-4 w-4" aria-hidden="true" />
        )}
        Request a Consultation
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-zinc-200">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 min-h-11 w-full rounded-md border border-white/10 bg-[#111113] px-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-300"
        aria-invalid={Boolean(error)}
      />
      <ErrorText message={error} />
    </div>
  );
}

function ErrorText({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-2 text-sm text-red-300">{message}</p>;
}
