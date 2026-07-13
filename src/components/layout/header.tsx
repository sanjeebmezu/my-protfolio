"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/78 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          aria-label="MezuStudio home"
        >
          <Image
            src="/Black___White_Minimalist_Business_Logo-removebg-preview.png"
            alt="MezuStudio"
            width={183}
            height={55}
            priority
            className="h-10 w-auto brightness-0 invert"
          />
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium text-zinc-400 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300",
                  active && "text-cyan-300",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            Book a Consultation
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open ? (
        <div id="mobile-menu" className="border-t border-white/10 bg-[#09090B] px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-zinc-300 hover:bg-white/[0.06] hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Book a Consultation
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
