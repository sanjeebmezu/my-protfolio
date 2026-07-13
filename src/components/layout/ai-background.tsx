export function AIBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.16),transparent_32rem),radial-gradient(ellipse_at_top_right,rgba(124,58,237,0.15),transparent_34rem),linear-gradient(180deg,#09090B_0%,#0B0B12_48%,#09090B_100%)]" />
      <div className="absolute inset-0 opacity-[0.18] bg-[linear-gradient(rgba(34,211,238,.34)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.28)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(115deg,transparent_0%,transparent_42%,rgba(34,211,238,.7)_42.1%,transparent_42.8%,transparent_68%,rgba(139,92,246,.65)_68.1%,transparent_68.8%)] bg-[size:260px_260px]" />
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-300/20 to-transparent" />
      <div className="absolute inset-x-0 top-32 h-px bg-gradient-to-r from-transparent via-cyan-300/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-40 h-px bg-gradient-to-r from-transparent via-violet-400/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,rgba(9,9,11,.18)_45%,rgba(9,9,11,.72)_100%)]" />
      <div className="absolute inset-0 mix-blend-soft-light opacity-[0.05] bg-[repeating-linear-gradient(0deg,rgba(255,255,255,.6)_0,rgba(255,255,255,.6)_1px,transparent_1px,transparent_3px)]" />
    </div>
  );
}
