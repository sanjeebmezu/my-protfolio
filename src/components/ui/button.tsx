import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variant === "primary" &&
          "bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 text-white shadow-[0_0_28px_rgba(56,189,248,0.22)] hover:brightness-110",
        variant === "secondary" &&
          "border border-white/10 bg-white/[0.04] text-white hover:border-cyan-300/50 hover:bg-white/[0.08]",
        variant === "ghost" && "text-zinc-300 hover:text-white",
        className,
      )}
      {...props}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}
