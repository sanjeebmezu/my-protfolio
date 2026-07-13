import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function CTASection({
  title = "Ready to Build Smarter Marketing?",
  description = "Let’s explore how AI, automation, and better marketing strategies can help your business grow.",
  buttonLabel = "Book a Consultation",
}: {
  title?: string;
  description?: string;
  buttonLabel?: string;
}) {
  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,.14),transparent_35%,rgba(139,92,246,.16))]" />
          <div className="relative max-w-3xl">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-zinc-300">{description}</p>
            <Button href="/contact" className="mt-8">
              {buttonLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
