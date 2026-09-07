import Image from "next/image";
import { cn } from "@/lib/utils";

const placeholderImage = "/ai-marketing-placeholder-sharp.jpg";

export function VisualPlaceholder({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative min-h-64 overflow-hidden rounded-lg border border-white/10 bg-[#111113]",
        className,
      )}
    >
      <Image
        src={placeholderImage}
        alt={label}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
        priority={label.toLowerCase().includes("hero")}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/95 via-[#09090B]/30 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,.14)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.12)_1px,transparent_1px)] bg-[size:42px_42px] opacity-25" />
      <div className="relative flex min-h-64 items-end p-5">
        <p className="rounded-md border border-white/10 bg-black/35 px-3 py-2 text-sm font-semibold text-white backdrop-blur">
          {label}
        </p>
      </div>
    </div>
  );
}
