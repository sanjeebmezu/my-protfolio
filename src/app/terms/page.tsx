import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for MezuStudio.",
};

export default function TermsPage() {
  return (
    <section className="py-20">
      <Container className="max-w-3xl">
        <h1 className="text-5xl font-semibold tracking-tight text-white">Terms of Service</h1>
        <div className="mt-8 space-y-5 text-lg leading-8 text-zinc-300">
          <p>
            The information on this website is provided for general educational and service inquiry purposes. It does not create a client relationship until a separate agreement is confirmed.
          </p>
          <p>
            Consultation work, deliverables, timelines, and fees should be confirmed in writing before any project begins.
          </p>
          <p>
            Website content, service descriptions, and placeholders may be updated as MezuStudio evolves. No unverified client results, testimonials, or credentials are intentionally presented.
          </p>
          <p>Questions about these terms can be sent to {siteConfig.email}.</p>
        </div>
      </Container>
    </section>
  );
}
