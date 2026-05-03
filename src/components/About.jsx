export default function About() {
  const skills = [
    {
      category: "Finance & Accounting",
      items: [
        "Financial Reporting & Analysis",
        "Grant Accounting & Compliance",
        "Budgeting & Forecasting",
        "Account Reconciliation",
      ],
    },
    {
      category: "Technical",
      items: [
        "Advanced Excel (Macros, Pivot Tables)",
        "Power BI & Tableau",
        "Process Automation (Power Automate)",
        "Bloomberg Terminal",
      ],
    },
    {
      category: "Core Strengths",
      items: [
        "Process Improvement",
        "Analytical Thinking",
        "Attention to Detail",
        "Cross-functional Collaboration",
      ],
    },
  ];

  return (
    <section id="about" className="py-section bg-bg px-8">
      <div className="mx-auto max-w-container">
        <h2 className="text-display-lg text-text mb-16">About</h2>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left column */}
          <div>
            <p className="text-body-xl text-muted mb-6">
              I'm a finance professional with hands-on experience in financial
              reporting, grant accounting, and process automation. I enjoy
              combining financial analysis with technology to improve
              efficiency and decision-making.
            </p>
            <p className="text-body-xl text-muted mb-8">
              Currently, I'm focused on building data-driven financial tools
              and deepening my expertise as a CFA Level I Candidate.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="http://linkedin.com/in/akashmahant"
                target="_blank"
                rel="noopener noreferrer"
                className="text-btn text-bg rounded-pill bg-text px-7 py-3 shadow-btn no-underline inline-block transition-shadow duration-200 hover:shadow-lg hover:shadow-black/10"
              >
                LinkedIn
              </a>
              <a
                href="mailto:akash.r.mahant@gmail.com"
                className="text-btn text-bg rounded-pill bg-text px-7 py-3 shadow-btn no-underline inline-block transition-shadow duration-200 hover:shadow-lg hover:shadow-black/10"
              >
                Email
              </a>
            </div>
          </div>

          {/* Right column — skill cards in a single column */}
          <div className="grid gap-6">
            {skills.map((s) => (
              <div
                key={s.category}
                className="rounded-card bg-surface border border-border p-8 shadow-card"
              >
                <h3 className="text-body-md text-text mb-4">
                  {s.category}
                </h3>
                <ul className="space-y-2.5">
                  {s.items.map((item) => (
                    <li key={item} className="text-body text-muted flex items-start gap-2.5">
                      <span className="mt-1.5 shrink-0 text-warm">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
