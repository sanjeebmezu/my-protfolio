import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/types/content";
import { formatDate } from "@/lib/utils";
import { VisualPlaceholder } from "@/components/ui/visual-placeholder";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] transition hover:-translate-y-1 hover:border-cyan-300/40">
      <VisualPlaceholder label={post.imageLabel} className="rounded-none border-0" />
      <div className="p-6">
        <div className="flex flex-wrap gap-2 text-xs font-medium text-zinc-400">
          <span className="text-cyan-300">{post.category}</span>
          <span>{formatDate(post.publishedAt)}</span>
          <span>{post.readingTime}</span>
        </div>
        <h3 className="mt-3 text-xl font-semibold text-white">{post.title}</h3>
        <p className="mt-3 text-sm leading-6 text-zinc-400">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300"
        >
          Read Article
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
