import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/sections/cta-section";
import { BlogCard } from "@/components/ui/blog-card";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { VisualPlaceholder } from "@/components/ui/visual-placeholder";
import { blogPosts, getPost } from "@/data/blog";
import { siteConfig } from "@/data/site";
import { formatDate } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article className="py-12 sm:py-16">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.title }]} />
          <header className="mt-10 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">{post.category}</p>
            <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">{post.title}</h1>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-zinc-400">
              <span>{post.author}</span>
              <span>{formatDate(post.publishedAt)}</span>
              <span>{post.readingTime}</span>
            </div>
          </header>
          <VisualPlaceholder label={post.imageLabel} className="mt-10" />
          <div className="mt-12 grid gap-10 lg:grid-cols-[14rem_1fr]">
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <h2 className="text-sm font-semibold text-white">Table of Contents</h2>
              <nav className="mt-4 space-y-2 text-sm text-zinc-400" aria-label="Table of contents">
                {post.sections.map((section) => (
                  <a key={section.id} className="block hover:text-cyan-300" href={`#${section.id}`}>
                    {section.heading}
                  </a>
                ))}
              </nav>
              <div className="mt-8 rounded-lg border border-white/10 bg-white/[0.035] p-4 text-sm text-zinc-400">
                Share: <Link className="text-cyan-300" href={`mailto:?subject=${post.title}&body=${siteConfig.url}/blog/${post.slug}`}>Email</Link>
              </div>
            </aside>
            <div className="max-w-3xl">
              {post.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-24 py-4">
                  <h2 className="text-3xl font-semibold tracking-tight text-white">{section.heading}</h2>
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="mt-5 text-lg leading-8 text-zinc-300">
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}
              <blockquote className="mt-8 border-l-2 border-cyan-300 pl-5 text-xl leading-8 text-zinc-200">
                AI should make marketing smarter, not more complicated.
              </blockquote>
              <div className="mt-10 rounded-lg border border-white/10 bg-white/[0.035] p-6">
                <h2 className="text-xl font-semibold text-white">About the Author</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  Sanjeeb Meju is an AI Marketing Expert & Consultant and the founder of MezuStudio.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </article>
      <section className="bg-white/[0.025] py-16">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-white">Related Articles</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {related.map((item) => (
              <BlogCard key={item.slug} post={item} />
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
