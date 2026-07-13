"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQAccordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={item.question} className="rounded-lg border border-white/10 bg-white/[0.03]">
          <button
            type="button"
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            onClick={() => setOpen(open === index ? -1 : index)}
            aria-expanded={open === index}
          >
            {item.question}
            <ChevronDown
              className={cn("h-4 w-4 shrink-0 transition", open === index && "rotate-180")}
              aria-hidden="true"
            />
          </button>
          {open === index ? (
            <div className="px-5 pb-5 text-sm leading-6 text-zinc-400">{item.answer}</div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
