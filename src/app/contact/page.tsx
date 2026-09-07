import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, MapPin, Phone, UserRound } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { ContactNotice } from "@/components/forms/contact-notice";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact & Consultation",
  description:
    "Request a consultation with Sanjeeb Meju at MezuStudio for AI-powered marketing, automation, and strategy.",
};

export default function ContactPage() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
            Contact
          </p>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Let&apos;s Build Something Smarter Together.
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Tell me about your business, challenges, and goals. I&apos;ll review your
            inquiry and explore how AI-powered marketing and smarter digital
            systems can help.
          </p>
          <div className="mt-8 space-y-4 rounded-lg border border-white/10 bg-white/[0.035] p-6">
            <ContactItem
              icon={<UserRound className="h-4 w-4" />}
              label="Name"
              value={`${siteConfig.founder} - ${siteConfig.position}`}
            />
            <ContactItem
              icon={<Mail className="h-4 w-4" />}
              label="Email"
              value={siteConfig.email}
              href={`mailto:${siteConfig.email}`}
            />
            <ContactItem
              icon={<Phone className="h-4 w-4" />}
              label="Phone"
              value={siteConfig.phone}
              href={`tel:${siteConfig.phone}`}
            />
            <ContactItem
              icon={<MapPin className="h-4 w-4" />}
              label="Location"
              value={siteConfig.location}
            />
            <p className="pt-2 text-sm text-zinc-500">Brand: {siteConfig.name}</p>
          </div>
          <Suspense fallback={null}>
            <ContactNotice />
          </Suspense>
        </div>
        <ContactForm />
      </Container>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <span className="flex items-start gap-3">
      <span className="mt-1 text-cyan-300">{icon}</span>
      <span>
        <span className="block text-xs uppercase tracking-[0.16em] text-zinc-500">
          {label}
        </span>
        <span className="mt-1 block text-sm text-zinc-200">{value}</span>
      </span>
    </span>
  );

  return href ? (
    <a href={href} className="block hover:text-cyan-300">
      {content}
    </a>
  ) : (
    content
  );
}
