import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container className="max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white">Page Not Found</h1>
        <p className="mt-5 text-lg leading-8 text-zinc-400">
          The page you’re looking for may have moved, or it may not exist yet.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/">Go Home</Button>
          <Button href="/contact" variant="secondary">Book a Consultation</Button>
        </div>
      </Container>
    </section>
  );
}
