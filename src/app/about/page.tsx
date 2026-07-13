import type { Metadata } from "next";
import { CTASection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { VisualPlaceholder } from "@/components/ui/visual-placeholder";

export const metadata: Metadata = {
  title: "About Sanjeeb Meju",
  description:
    "Learn about Sanjeeb Meju, AI Marketing Expert & Consultant and founder of MezuStudio.",
};

const values = ["Curiosity", "Innovation", "Strategy", "Transparency", "Continuous Learning", "Business Impact"];
const sections = [
  "Personal story",
  "Professional journey",
  "Why Sanjeeb chose AI marketing",
  "Marketing philosophy",
  "Approach to AI",
  "Skills and expertise",
];

export default function AboutPage() {
  return (
    <>
      <section className="py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">About MezuStudio</p>
            <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              The Human Behind MezuStudio
            </h1>
            <p className="mt-6 text-xl text-zinc-300">Sanjeeb Meju — AI Marketing Expert & Consultant</p>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
              MezuStudio helps businesses use artificial intelligence, automation, and practical marketing strategy to build smarter systems for growth.
            </p>
            <Button href="/contact" className="mt-8">Let’s Work Together</Button>
          </div>
          <VisualPlaceholder label="Professional portrait placeholder" />
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading title="Editable Story Sections" description="These sections are intentionally structured for real biography details without inventing personal history." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((item) => (
              <article key={item} className="rounded-lg border border-dashed border-white/15 bg-white/[0.025] p-6">
                <h2 className="text-lg font-semibold text-white">{item}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  Placeholder: add verified details for this section when ready.
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white/[0.025] py-16">
        <Container className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-[#151518] p-7">
            <h2 className="text-2xl font-semibold text-white">Mission</h2>
            <p className="mt-4 text-lg leading-8 text-zinc-300">
              To help businesses use AI in practical, responsible, and results-focused ways.
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-[#151518] p-7">
            <h2 className="text-2xl font-semibold text-white">Vision</h2>
            <p className="mt-4 text-lg leading-8 text-zinc-300">
              To create smarter marketing systems where artificial intelligence, strategy, and human creativity work together.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading title="Core Values" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value} className="rounded-lg border border-white/10 bg-white/[0.035] p-5 text-white">
                {value}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white/[0.025] py-16">
        <Container>
          <SectionHeading title="Professional Timeline" description="Editable timeline component. Dates and career history will be added only after verified details are available." />
          <div className="mt-8 space-y-4">
            {["Timeline item placeholder", "Timeline item placeholder", "Timeline item placeholder"].map((item, index) => (
              <div key={`${item}-${index}`} className="rounded-lg border border-dashed border-white/15 p-5 text-zinc-400">
                {item}: add verified date, role, and description.
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection title="Let’s Work Together" buttonLabel="Book a Consultation" />
    </>
  );
}
