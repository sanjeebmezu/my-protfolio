"use client";

import { useSearchParams } from "next/navigation";

export function ContactNotice() {
  const searchParams = useSearchParams();
  const submitted = searchParams.get("submitted") === "1";
  const mailSaved = searchParams.get("error") === "mail-saved";
  const errored = Boolean(searchParams.get("error")) && !mailSaved;

  if (submitted) {
    return (
      <p className="mt-6 rounded-md border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
        Thank you. Your consultation request has been received.
      </p>
    );
  }

  if (mailSaved) {
    return (
      <p className="mt-6 rounded-md border border-amber-400/30 bg-amber-400/10 px-4 py-3 text-sm text-amber-100">
        Your request was saved, but email delivery is currently blocked on this
        server. Please also email sanjeebmezu@gmail.com directly.
      </p>
    );
  }

  if (errored) {
    return (
      <p className="mt-6 rounded-md border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-200">
        Your message could not be sent right now. Please email
        sanjeebmezu@gmail.com directly or try again in a moment.
      </p>
    );
  }

  return null;
}
