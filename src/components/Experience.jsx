import { ExperienceCard } from "./ui/Card";

const experiences = [
  {
    role: "Senior Research Associate",
    company: "M. De Groote & Co.",
    period: "Aug 2026 – Present",
    location: "Remote, USA",
    bullets: [
      "Support daily reconciliation of portfolio positions and market data across internal systems and external feeds, investigating and flagging discrepancies to maintain data accuracy for research and trading teams.",
      "Monitor market trends, security pricing, and macroeconomic developments across securities and commodities, compiling findings into recurring reports and updates for senior analysts and portfolio managers.",
      "Assist in maintaining and updating financial models, including DCF, comparable-company analysis, and earnings forecasts, supporting ongoing investment research and portfolio analysis.",
    ],
  },
  {
    role: "Staff Accountant",
    company: "Volunteers of America – Greater New York",
    period: "Jan 2025 – Apr 2026",
    location: "New York, NY",
    bullets: [
      "Prepared and submitted quarterly financial claims up to $200K for DASH- and DHS-funded programs, ensuring accurate expenditure reporting, budget compliance, and audit-ready documentation for funder and regulatory review.",
      "Cut manual invoice-processing time by 85% by designing a process-automation workflow in Microsoft Power Automate (using Copilot to accelerate framework design), freeing capacity for payment reconciliation and vendor/bank communication.",
      "Performed daily variance analysis on payment records in Microsoft Business Central, resolving discrepancies, reducing outstanding issues by 30%, and maintaining 99%+ accuracy.",
      "Partnered with program managers on budgeting and forecasting, delivering actual-vs-plan variance insights that informed monthly resource-allocation decisions.",
    ],
  },
  {
    role: "Senior Process Associate",
    company: "Accenture",
    period: "Aug 2019 – Jul 2022",
    location: "Mumbai, India",
    bullets: [
      "Built Excel VBA macros to automatically organize, filter, and reconcile large-scale P2P datasets, improving processing efficiency by 90% and generating $1,100 in quarterly cost savings by cutting manual review hours.",
      "Maintained 100% accuracy processing 500+ invoices weekly across 25 queues, consistently exceeding productivity benchmarks at 124% of target.",
      "Produced analytical dashboards tracking productivity, errors, and team performance, giving leadership visibility to identify process bottlenecks and drive data-driven staffing decisions for a US-based retail client.",
      "Served as subject-matter expert (SME) for P2P processes, training and mentoring 7+ team members on Oracle Cloud workflows and reporting standards, improving ramp-up consistency across the team.",
    ],
  },
  {
    role: "Financial Analyst",
    company: "Money Honey Financial Services",
    period: "Jul 2018 – Nov 2018",
    location: "Mumbai, India",
    bullets: [
      "Developed investment strategies for diversified client portfolios (up to $750K) across equity, fixed income, and alternative instruments, achieving 100% client retention across 200+ clients.",
      "Advised clients on mutual funds, fixed deposits, debentures, and SIPs; built detailed financial reports and presentations in Excel and PowerPoint.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-section bg-canvas px-8">
      <div className="mx-auto max-w-[860px]">
        <h2 className="text-display-lg text-text mb-16">Experience</h2>

        <div className="space-y-6">
          {experiences.map((e) => (
            <div
              key={e.role}
              className="rounded-card bg-surface-card p-7 shadow-card xl:p-8"
            >
              <div className="mb-5">
                <h3 className="text-display-md text-text mb-1">{e.role}</h3>
                <div className="flex flex-wrap items-center gap-2 text-body-md text-text">
                  <span className="font-body-md">{e.company}</span>
                  <span className="text-subtle">{"·"}</span>
                  <span className="text-subtle text-body">{e.period}</span>
                  {e.location && (
                    <>
                      <span className="text-subtle">{"·"}</span>
                      <span className="text-subtle text-body">{e.location}</span>
                    </>
                  )}
                </div>
              </div>
              {e.bullets && e.bullets.length > 0 && (
                <ul className="space-y-2.5">
                  {e.bullets.map((b, i) => (
                    <li key={i} className="text-body text-muted flex items-start gap-3">
                      <span className="mt-1.5 shrink-0 text-warm">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
