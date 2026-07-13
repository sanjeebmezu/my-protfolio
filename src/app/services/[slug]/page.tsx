import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/sections/cta-section";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FAQAccordion } from "@/components/ui/faq";
import { ServiceCard } from "@/components/ui/service-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { getService, services } from "@/data/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const Icon = service.icon;
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="py-12 sm:py-16">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.title }]} />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_.45fr]">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-md border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                {service.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">{service.overview}</p>
              <Button href="/contact" className="mt-8">Book a Consultation</Button>
            </div>
            <aside className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
              <h2 className="text-lg font-semibold text-white">Key Benefit</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-300">{service.keyBenefit}</p>
            </aside>
          </div>
        </Container>
      </section>

      <DetailSection title="Problems This Service Solves" items={service.problems} />
      <DetailSection title="Who This Is For" items={service.audience} muted />
      <DetailSection title="Key Benefits" items={service.benefits} />
      <DetailSection title="Deliverables" items={service.deliverables} muted />

      <section className="py-16">
        <Container>
          <SectionHeading title="Step-by-Step Process" />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <div key={step.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
                <span className="font-mono text-sm text-cyan-300">{String(index + 1).padStart(2, "0")}</span>
                <h2 className="mt-4 text-xl font-semibold text-white">{step.title}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <DetailSection title="Expected Outcomes" items={service.outcomes} muted />

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <SectionHeading title="Frequently Asked Questions" />
          <FAQAccordion items={service.faqs} />
        </Container>
      </section>

      <section className="bg-white/[0.025] py-16">
        <Container>
          <SectionHeading title="Related Services" />
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {related.map((item) => (
              <ServiceCard key={item.slug} service={item} />
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}

function DetailSection({
  title,
  items,
  muted,
}: {
  title: string;
  items: string[];
  muted?: boolean;
}) {
  return (
    <section className={muted ? "bg-white/[0.025] py-16" : "py-16"}>
      <Container>
        <SectionHeading title={title} />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item} className="rounded-lg border border-white/10 bg-[#151518] p-5 text-sm leading-6 text-zinc-300">
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
