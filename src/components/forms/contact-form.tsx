import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

export function ContactForm() {
  return (
    <form
      action={`https://formsubmit.co/${siteConfig.email}`}
      method="post"
      className="rounded-lg border border-white/10 bg-white/[0.035] p-5 sm:p-6"
    >
      <input
        type="hidden"
        name="_subject"
        value="New MezuStudio consultation request"
      />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input
        type="hidden"
        name="_next"
        value={`${siteConfig.url}/contact?submitted=1`}
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="fullName" required />
        <Field label="Email Address" name="email" type="email" required />
        <Field label="Phone Number" name="phone" />
        <Field label="Company Name" name="company" />
        <Field
          label="Website URL"
          name="website"
          type="url"
          placeholder="https://example.com"
        />
        <div>
          <label htmlFor="service" className="text-sm font-medium text-zinc-200">
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            required
            className="mt-2 min-h-11 w-full rounded-md border border-white/10 bg-[#111113] px-3 text-sm text-white outline-none transition focus:border-cyan-300"
          >
            <option value="">Choose a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
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
          >
            <option value="">Choose one</option>
            <option>Email</option>
            <option>Phone</option>
            <option>WhatsApp / phone message</option>
          </select>
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
        />
      </div>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="websiteTrap">Website trap</label>
        <input id="websiteTrap" name="websiteTrap" tabIndex={-1} autoComplete="off" />
      </div>
      <label className="mt-5 flex gap-3 text-sm leading-6 text-zinc-400">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 rounded border-white/20 bg-[#111113] text-cyan-400"
        />
        I consent to MezuStudio contacting me about this inquiry.
      </label>
      <button
        type="submit"
        className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 sm:w-auto"
      >
        Request a Consultation
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
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
      />
    </div>
  );
}
