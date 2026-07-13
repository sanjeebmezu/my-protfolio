import {
  Bot,
  BrainCircuit,
  FileText,
  Megaphone,
  MessageSquareCode,
  Workflow,
} from "lucide-react";
import type { Service } from "@/types/content";

const sharedProcess = [
  {
    title: "Discover",
    description:
      "Understand your business, audience, current marketing systems, and growth goals.",
  },
  {
    title: "Strategize",
    description:
      "Identify the highest-value places where AI, automation, and better workflows can help.",
  },
  {
    title: "Implement",
    description:
      "Build practical systems, prompts, processes, and campaigns your team can actually use.",
  },
  {
    title: "Optimize",
    description:
      "Review performance, improve what works, and refine the system for stronger outcomes.",
  },
];

export const services: Service[] = [
  {
    slug: "ai-marketing-strategy",
    title: "AI Marketing Strategy",
    shortDescription:
      "Develop practical strategies for integrating AI into marketing and business growth.",
    keyBenefit: "Turn AI interest into a clear business-ready marketing roadmap.",
    overview:
      "AI Marketing Strategy helps you decide where AI belongs in your marketing, how it should support your goals, and what systems need to be built first.",
    icon: BrainCircuit,
    problems: [
      "Unclear AI priorities",
      "Disconnected tools and workflows",
      "Marketing activity without a clear decision framework",
      "Teams experimenting with AI without consistent quality control",
    ],
    audience: [
      "Business owners exploring AI-powered growth",
      "Marketing teams that need practical direction",
      "Service brands that want smarter acquisition systems",
    ],
    benefits: [
      "Clear AI use cases aligned with business goals",
      "Sharper marketing decisions",
      "Better alignment between content, automation, and customer journeys",
      "A practical roadmap for execution",
    ],
    deliverables: [
      "AI marketing opportunity audit",
      "Strategy roadmap",
      "Priority use-case recommendations",
      "Implementation plan",
    ],
    process: sharedProcess,
    outcomes: [
      "A clearer path for adopting AI",
      "Less tool confusion",
      "Marketing systems designed around measurable business outcomes",
    ],
    faqs: [
      {
        question: "Do I need existing AI tools before starting?",
        answer:
          "No. The strategy can start from your goals, current workflow, and marketing priorities before choosing tools.",
      },
      {
        question: "Is this only for large companies?",
        answer:
          "No. The work is designed to be practical for small and growing businesses as well.",
      },
    ],
  },
  {
    slug: "marketing-automation",
    title: "Marketing Automation",
    shortDescription:
      "Create automated workflows that save time and improve marketing efficiency.",
    keyBenefit: "Reduce repetitive work while keeping your customer journey consistent.",
    overview:
      "Marketing Automation focuses on building repeatable workflows for lead capture, follow-up, content distribution, and reporting.",
    icon: Workflow,
    problems: [
      "Manual follow-ups",
      "Inconsistent lead handling",
      "Repetitive marketing tasks",
      "Weak visibility into customer journey stages",
    ],
    audience: [
      "Teams managing leads manually",
      "Businesses that want stronger follow-up systems",
      "Founders who need time-saving marketing operations",
    ],
    benefits: [
      "More consistent communication",
      "Less manual admin work",
      "Improved lead response time",
      "Cleaner marketing operations",
    ],
    deliverables: [
      "Workflow map",
      "Automation setup plan",
      "Lead response sequences",
      "Testing and optimization checklist",
    ],
    process: sharedProcess,
    outcomes: [
      "More reliable lead handling",
      "Time saved on repeated tasks",
      "A foundation for scaling marketing operations",
    ],
    faqs: [
      {
        question: "Can automation still feel personal?",
        answer:
          "Yes. Good automation supports timely, relevant communication without removing the human voice of the brand.",
      },
    ],
  },
  {
    slug: "ai-content-strategy",
    title: "AI Content Strategy",
    shortDescription:
      "Build scalable AI-assisted content systems while maintaining quality and brand consistency.",
    keyBenefit: "Create better content systems without sacrificing brand judgment.",
    overview:
      "AI Content Strategy helps you plan topics, workflows, prompts, quality checks, and publishing systems for sustainable content creation.",
    icon: FileText,
    problems: [
      "Inconsistent publishing",
      "Generic AI-generated content",
      "Weak topic planning",
      "No review system for quality and brand fit",
    ],
    audience: [
      "Businesses that rely on educational content",
      "Consultants and service providers",
      "Teams that want AI assistance without generic output",
    ],
    benefits: [
      "Stronger content planning",
      "Reusable AI-assisted workflows",
      "Better quality control",
      "Content aligned with customer intent",
    ],
    deliverables: [
      "Content strategy framework",
      "Topic and pillar map",
      "AI prompt workflow",
      "Editorial quality checklist",
    ],
    process: sharedProcess,
    outcomes: [
      "A repeatable content engine",
      "More consistent brand voice",
      "Higher-quality educational marketing assets",
    ],
    faqs: [
      {
        question: "Will AI write everything automatically?",
        answer:
          "No. The goal is to use AI as a smart assistant while keeping strategy, editing, and judgment human-led.",
      },
    ],
  },
  {
    slug: "ai-consulting",
    title: "AI Consulting",
    shortDescription:
      "Help businesses identify valuable opportunities to use AI effectively.",
    keyBenefit: "Find realistic AI opportunities before investing time and money.",
    overview:
      "AI Consulting gives you focused guidance on where AI can improve marketing, operations, decision-making, and customer experience.",
    icon: Bot,
    problems: [
      "Too many AI tool choices",
      "Unclear return from AI experiments",
      "No internal adoption plan",
      "Difficulty translating AI ideas into workflows",
    ],
    audience: [
      "Founders exploring AI adoption",
      "Teams seeking practical guidance",
      "Businesses that want expert review before implementation",
    ],
    benefits: [
      "Clearer AI priorities",
      "Practical implementation guidance",
      "Reduced wasted effort",
      "Better confidence in tool and workflow decisions",
    ],
    deliverables: [
      "Consultation session",
      "Opportunity notes",
      "Recommended next steps",
      "Workflow or tool guidance",
    ],
    process: sharedProcess,
    outcomes: [
      "Better decisions about AI adoption",
      "A focused list of next actions",
      "Practical clarity for your team",
    ],
    faqs: [
      {
        question: "Can this be a one-time consultation?",
        answer:
          "Yes. The service can begin as a focused consultation and expand only if deeper implementation is useful.",
      },
    ],
  },
  {
    slug: "prompt-engineering",
    title: "Prompt Engineering",
    shortDescription:
      "Create effective prompts and reusable AI workflows for marketing and productivity.",
    keyBenefit: "Make AI output more useful, consistent, and aligned with your brand.",
    overview:
      "Prompt Engineering builds reusable prompt systems for content, research, planning, customer communication, and team productivity.",
    icon: MessageSquareCode,
    problems: [
      "Inconsistent AI outputs",
      "Prompt trial and error",
      "No reusable workflow library",
      "AI responses that miss brand context",
    ],
    audience: [
      "Marketing teams using AI daily",
      "Business owners creating repeated AI outputs",
      "Teams that need reusable prompt templates",
    ],
    benefits: [
      "More reliable AI results",
      "Reusable prompt libraries",
      "Faster content and planning workflows",
      "Clearer quality standards",
    ],
    deliverables: [
      "Prompt library",
      "Reusable AI workflows",
      "Usage guidelines",
      "Quality review checklist",
    ],
    process: sharedProcess,
    outcomes: [
      "Less prompt guesswork",
      "Faster production workflows",
      "AI outputs that better match your intent",
    ],
    faqs: [
      {
        question: "Can prompts be customized to my business?",
        answer:
          "Yes. The strongest prompts include your audience, positioning, offers, tone, and workflow needs.",
      },
    ],
  },
  {
    slug: "digital-marketing-strategy",
    title: "Digital Marketing Strategy",
    shortDescription:
      "Develop data-driven marketing strategies focused on visibility, engagement, and growth.",
    keyBenefit: "Connect marketing channels to a focused growth plan.",
    overview:
      "Digital Marketing Strategy clarifies your audience, message, channels, content, funnel, and measurement plan.",
    icon: Megaphone,
    problems: [
      "Scattered marketing activity",
      "Unclear audience targeting",
      "Weak channel priorities",
      "Limited measurement discipline",
    ],
    audience: [
      "Growing service businesses",
      "Brands preparing for more consistent marketing",
      "Teams that need a clearer growth plan",
    ],
    benefits: [
      "Sharper positioning",
      "Clear channel priorities",
      "Better campaign planning",
      "Stronger link between marketing and sales goals",
    ],
    deliverables: [
      "Digital marketing audit",
      "Channel strategy",
      "Campaign planning framework",
      "Measurement recommendations",
    ],
    process: sharedProcess,
    outcomes: [
      "More focused marketing execution",
      "Better campaign structure",
      "Improved clarity around what to measure",
    ],
    faqs: [
      {
        question: "Does this include implementation?",
        answer:
          "It can. The strategy can stand alone or lead into implementation support depending on your needs.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
