import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogIndex } from "@/components/sections/blog-index";
import { Container } from "@/components/ui/container";
import { VisualPlaceholder } from "@/components/ui/visual-placeholder";
import { blogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles from MezuStudio on AI marketing strategy, automation, content systems, prompt engineering, and digital marketing.",
};

export default function BlogPage() {
  const featured = blogPosts.find((post) => post.featured) || blogPosts[0];

  return (
    <>
      <section className="py-20 sm:py-24">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Blog</p>
          <h1 className="mt-4 max-w-5xl text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Practical Ideas for AI-Powered Marketing
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Learn how to use AI, automation, content systems, and marketing strategy in practical ways.
          </p>
        </Container>
      </section>

      <section className="pb-12">
        <Container>
          <article className="grid overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] lg:grid-cols-[.9fr_1.1fr]">
            <VisualPlaceholder label={featured.imageLabel} className="h-full rounded-none border-0" />
            <div className="p-7 sm:p-8">
              <p className="text-sm font-semibold text-cyan-300">Featured Article</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">{featured.title}</h2>
              <p className="mt-4 text-sm leading-6 text-zinc-400">{featured.excerpt}</p>
              <div className="mt-5 flex flex-wrap gap-3 text-sm text-zinc-500">
                <span>{featured.category}</span>
                <span>{formatDate(featured.publishedAt)}</span>
                <span>{featured.readingTime}</span>
              </div>
              <Link href={`/blog/${featured.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
                Read Article
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </article>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <BlogIndex posts={blogPosts} />
        </Container>
      </section>
    </>
  );
}
