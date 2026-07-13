import { cn } from "@/lib/utils";

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
        "relative overflow-hidden rounded-lg border border-white/10 bg-[#111113] p-5",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,.18),transparent_60%),linear-gradient(135deg,rgba(59,130,246,.08),transparent_48%,rgba(139,92,246,.12))]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.14)_1px,transparent_1px)] bg-[size:32px_32px] opacity-35" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,transparent_44%,rgba(34,211,238,.55)_44.2%,transparent_45%,transparent_70%,rgba(139,92,246,.55)_70.2%,transparent_71%)] bg-[size:180px_180px] opacity-20" />
      <div className="absolute left-8 right-8 top-10 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
      <div className="absolute bottom-10 left-8 right-16 h-px bg-gradient-to-r from-transparent via-violet-300/50 to-transparent" />
      <div className="absolute right-10 top-10 h-24 w-px bg-gradient-to-b from-cyan-300/60 to-transparent" />
      <div className="relative flex min-h-44 items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
            Placeholder
          </p>
          <p className="mt-2 text-lg font-semibold text-white">{label}</p>
          <p className="mt-2 text-sm leading-6 text-zinc-400">
            Replace with an approved real image or case-study asset when available.
          </p>
        </div>
      </div>
    </div>
  );
}
