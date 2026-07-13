import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types/content";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <article className="group rounded-lg border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.055]">
      <div className="flex h-12 w-12 items-center justify-center rounded-md border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-white">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-zinc-400">{service.shortDescription}</p>
      <p className="mt-4 text-sm font-medium text-zinc-200">{service.keyBenefit}</p>
      <Link
        href={`/services/${service.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
      >
        Learn More
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </article>
  );
}
