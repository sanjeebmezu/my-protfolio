import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/service-card";
import { BlogCard } from "@/components/ui/blog-card";
import { VisualPlaceholder } from "@/components/ui/visual-placeholder";
import { CTASection } from "@/components/sections/cta-section";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blog";
import { projectPlaceholders } from "@/data/projects";
import { siteConfig } from "@/data/site";

const reasons = [
  "AI-First Thinking",
  "Strategy Before Tools",
  "Practical Solutions",
  "Human-Centered Marketing",
  "Data-Driven Decisions",
  "Focus on Business Outcomes",
];

const process = [
  ["01", "Discover", "Understand the business, audience, current challenges, and goals."],
  ["02", "Strategize", "Identify where AI, automation, and better marketing systems can create the most value."],
  ["03", "Implement", "Build and execute practical AI-powered marketing strategies and workflows."],
  ["04", "Optimize", "Measure performance, improve results, and scale successful systems."],
];

export default function Home() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(34,211,238,.13),transparent_30%,rgba(139,92,246,.12)_70%,transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.11)_1px,transparent_1px)] bg-[size:52px_52px] opacity-45" />
        <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent" />
        <Container className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              AI-Powered Marketing for Modern Businesses
            </p>
            <h1 className="max-w-5xl text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Transform Your Marketing with the Power of AI.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-zinc-300">
              {siteConfig.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Book a Consultation</Button>
              <Button href="/services" variant="secondary">
                Explore My Services
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-cyan-950/30">
              <VisualPlaceholder label="AI-powered marketing visual" className="min-h-[28rem]" />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-10">
        <Container>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
            Future credibility placeholders
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {["Client Logos", "Certifications", "Partnerships"].map((item) => (
              <div key={item} className="rounded-lg border border-dashed border-white/15 p-5 text-sm text-zinc-400">
                {item} will be added when verified.
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <VisualPlaceholder
            label="Professional photo placeholder for Sanjeeb Meju"
            imageSrc="/myplcaholder.png"
            imageClassName="object-contain"
          />
          <div>
            <SectionHeading
              eyebrow="About"
              title="The Human Behind MezuStudio"
              description="I believe AI should make marketing smarter, not more complicated. At MezuStudio, I focus on combining artificial intelligence with practical marketing strategy to help businesses improve efficiency, make better decisions, and create meaningful growth."
            />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["AI marketing strategy", "Automation workflows", "Content systems", "Prompt engineering"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-zinc-300">
                  <CheckCircle2 className="h-4 w-4 text-cyan-300" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
            <Button href="/about" variant="secondary" className="mt-8">
              More About Me
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Services"
              title="How I Can Help Your Business"
              description="Focused consulting services for strategy, automation, content, and practical AI adoption."
            />
            <Button href="/services" variant="secondary">
              View All Services
            </Button>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white/[0.025] py-20">
        <Container>
          <SectionHeading title="Why Choose MezuStudio" description="A practical, strategic approach to AI-powered marketing." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => (
              <div key={reason} className="rounded-lg border border-white/10 bg-[#151518] p-5">
                <h3 className="font-semibold text-white">{reason}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Built around clarity, usefulness, and measurable business value.
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading title="Working Process" description="A clear four-step path from discovery to optimization." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {process.map(([number, title, description]) => (
              <div key={title} className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
                <span className="font-mono text-sm text-cyan-300">{number}</span>
                <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white/[0.025] py-20">
        <Container>
          <SectionHeading title="Featured Work" description="Reusable case-study slots. Real projects and results can be added when approved." />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {projectPlaceholders.map((project) => (
              <article key={project.title} className="rounded-lg border border-white/10 bg-[#151518] p-6">
                <VisualPlaceholder label={project.title} />
                <p className="mt-5 text-sm text-cyan-300">{project.category}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 text-sm leading-6 text-zinc-400"><strong className="text-zinc-200">Challenge:</strong> {project.challenge}</p>
                <p className="mt-2 text-sm leading-6 text-zinc-400"><strong className="text-zinc-200">Solution:</strong> {project.solution}</p>
                <p className="mt-2 text-sm leading-6 text-zinc-400"><strong className="text-zinc-200">Results:</strong> {project.results}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading title="Testimonials" description="Testimonials will be added only after real client feedback is available." />
          <div className="mt-10 rounded-lg border border-dashed border-white/15 p-8 text-zinc-400">
            No testimonials have been published yet.
          </div>
        </Container>
      </section>

      <section className="bg-white/[0.025] py-20">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading title="Latest Blog Posts" description="Educational articles on AI marketing, automation, content systems, and strategy." />
            <Button href="/blog" variant="secondary">
              View All Articles
            </Button>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
