import { ProjectCard } from "./ui/Card";

const projects = [
  {
    title: "AI-Powered SEC Filing Research System",
    date: "Feb 2026",
    description:
      "Built a local-first system that analyzes multi-year SEC filings and allows natural language queries with source-cited responses. Designed for privacy, compliance, and explainability.",
    highlights: [
      "End-to-end document ingestion and parsing pipeline",
      "Source-traceable responses for auditability",
      "Fully on-device processing (no external data exposure)",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Mahant-Akash/SEC-Filing-RAG-Local-AI-for-Financial-Research" },
    ],
  },
  {
    title: "Investment Analysis Dashboard",
    date: "Dec 2023 | Stevens Institute of Technology",
    description:
      "Analyzed Apple, S&P 500, and NASDAQ using technical and fundamental indicators to support investment decisions.",
    highlights: [
      "Built interactive Tableau dashboards",
      "Identified trends and correlations across indices",
      "Delivered actionable insights for portfolio strategy",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Mahant-Akash/Data-visualization" },
    ],
  },
  {
    title: "Discounted Cash Flow Analysis — Apple",
    date: "Sep 2023 – Dec 2023",
    description:
      "Performed valuation using Bloomberg Terminal data for Apple Inc.",
    highlights: [
      "Forecasted 6% revenue growth",
      "Identified ~7% potential upside",
      "Applied structured valuation modeling",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Mahant-Akash/DCF-Model" },
    ],
  },
  {
    title: "Quantitative Reversal Trading Strategy",
    date: "Sep 2023 – Dec 2023",
    description:
      "Developed and back-tested a quarterly reversal strategy using S&P 500 stocks.",
    highlights: [
      "Selected top 50 stocks over 5-year period",
      "Achieved 16.67% cumulative return",
      "Demonstrated quantitative and backtesting skills",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Mahant-Akash/Reversal-Strategy" },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-section bg-surface px-8">
      <div className="mx-auto max-w-[860px]">
        <h2 className="text-display-lg text-text mb-4">Featured Projects</h2>
        <p className="text-body text-subtle mb-12">
          A selection of projects at the intersection of finance, analytics, and technology.
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard
              key={p.title}
              title={p.title}
              date={p.date}
              description={p.description}
              highlights={p.highlights}
              links={p.links}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
