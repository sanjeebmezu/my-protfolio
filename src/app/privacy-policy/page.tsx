import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for MezuStudio.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        MezuStudio collects information you submit through the consultation form, including your name, email address, optional phone number, company details, and project information.
      </p>
      <p>
        This information is used to respond to inquiries, provide consultation-related communication, and improve services. MezuStudio does not sell personal information.
      </p>
      <p>
        Form submissions may be processed through secure server-side email systems. Future CRM or database integrations should follow the same privacy principles.
      </p>
      <p>
        To request access, correction, or deletion of inquiry information, contact {siteConfig.email}.
      </p>
    </LegalPage>
  );
}

function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-20">
      <Container className="max-w-3xl">
        <h1 className="text-5xl font-semibold tracking-tight text-white">{title}</h1>
        <div className="mt-8 space-y-5 text-lg leading-8 text-zinc-300">{children}</div>
      </Container>
    </section>
  );
}
