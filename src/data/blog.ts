import type { BlogPost } from "@/types/content";

export const blogPosts: BlogPost[] = [
  {
    slug: "how-ai-marketing-strategy-creates-smarter-growth",
    title: "How AI Marketing Strategy Creates Smarter Growth",
    excerpt:
      "A practical introduction to using AI as a strategic marketing advantage instead of another disconnected tool.",
    category: "AI Strategy",
    author: "Sanjeeb Meju",
    publishedAt: "2026-07-13",
    readingTime: "5 min read",
    featured: true,
    imageLabel: "AI strategy visual placeholder",
    sections: [
      {
        id: "strategy-before-tools",
        heading: "Strategy Comes Before Tools",
        body: [
          "AI becomes more valuable when it is connected to a clear marketing objective. Before choosing tools, businesses need to understand their audience, customer journey, content needs, and operational bottlenecks.",
          "The right strategy makes AI less overwhelming because every experiment has a purpose.",
        ],
      },
      {
        id: "use-cases",
        heading: "Start With Practical Use Cases",
        body: [
          "Useful AI marketing use cases often include audience research, content planning, campaign ideation, customer follow-up, reporting, and workflow automation.",
          "The best starting point is usually the task that is repeated often, takes meaningful time, and benefits from clearer structure.",
        ],
      },
      {
        id: "human-judgment",
        heading: "Keep Human Judgment In The Loop",
        body: [
          "AI can speed up research and production, but positioning, ethics, customer empathy, and final quality decisions should remain human-led.",
          "A strong AI marketing system improves the work without flattening the brand’s voice.",
        ],
      },
    ],
  },
  {
    slug: "marketing-automation-without-losing-the-human-touch",
    title: "Marketing Automation Without Losing the Human Touch",
    excerpt:
      "How to use automation to improve consistency while keeping communication relevant and personal.",
    category: "Automation",
    author: "Sanjeeb Meju",
    publishedAt: "2026-07-13",
    readingTime: "4 min read",
    featured: false,
    imageLabel: "Automation workflow placeholder",
    sections: [
      {
        id: "automation-role",
        heading: "Automation Should Support The Relationship",
        body: [
          "Marketing automation works best when it removes repetitive handling and helps people respond at the right time with the right context.",
          "It should not replace thoughtful communication. It should make thoughtful communication easier to deliver consistently.",
        ],
      },
      {
        id: "workflow-map",
        heading: "Map The Journey First",
        body: [
          "Before building automations, map what should happen when a visitor becomes a lead, requests information, or books a consultation.",
          "This makes the system easier to test and prevents disconnected automations from piling up.",
        ],
      },
    ],
  },
  {
    slug: "building-ai-assisted-content-systems",
    title: "Building AI-Assisted Content Systems",
    excerpt:
      "A simple framework for planning, producing, reviewing, and improving content with AI support.",
    category: "Content",
    author: "Sanjeeb Meju",
    publishedAt: "2026-07-13",
    readingTime: "6 min read",
    featured: false,
    imageLabel: "AI content system placeholder",
    sections: [
      {
        id: "content-system",
        heading: "Think In Systems, Not Single Posts",
        body: [
          "AI can help with individual content pieces, but the larger value comes from repeatable systems for research, outlines, drafts, repurposing, and review.",
          "A content system protects quality while making production easier to sustain.",
        ],
      },
      {
        id: "quality-checks",
        heading: "Build Quality Checks Into The Workflow",
        body: [
          "Every AI-assisted content workflow should include checks for accuracy, brand fit, usefulness, originality, and clarity.",
          "The review layer is what separates thoughtful AI-assisted marketing from generic output.",
        ],
      },
    ],
  },
  {
    slug: "prompt-engineering-for-marketing-teams",
    title: "Prompt Engineering for Marketing Teams",
    excerpt:
      "Reusable prompts can help teams create more consistent research, planning, and content workflows.",
    category: "Prompt Engineering",
    author: "Sanjeeb Meju",
    publishedAt: "2026-07-13",
    readingTime: "5 min read",
    featured: false,
    imageLabel: "Prompt workflow placeholder",
    sections: [
      {
        id: "context",
        heading: "Better Context Creates Better Output",
        body: [
          "A strong marketing prompt gives AI enough business context to produce useful work: audience, offer, goal, constraints, tone, and output format.",
          "Reusable prompt systems reduce guesswork and help teams keep quality more consistent.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
