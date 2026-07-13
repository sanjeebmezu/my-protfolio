import type { Metadata } from "next";
import { CTASection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ServiceCard } from "@/components/ui/service-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "AI-Powered Marketing Services",
  description:
    "AI strategy, marketing automation, AI content strategy, consulting, prompt engineering, and digital marketing strategy from MezuStudio.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="py-20 sm:py-24">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Services</p>
          <h1 className="mt-4 max-w-5xl text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            AI-Powered Marketing Services Built for Smarter Growth
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            From AI strategy and automation to content systems and digital marketing, MezuStudio helps businesses use modern technology to solve real marketing challenges.
          </p>
        </Container>
      </section>
      <section className="pb-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.slug} className="flex flex-col gap-4">
                <ServiceCard service={service} />
                <Button href="/contact" variant="secondary" className="w-full">
                  Book a Consultation
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-white/[0.025] py-16">
        <Container>
          <SectionHeading title="Not Sure Where To Start?" description="A consultation can help identify the most valuable first step for your business." />
          <Button href="/contact" className="mt-8">Book a Consultation</Button>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
