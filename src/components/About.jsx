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
    <section id="about" className="py-section bg-canvas-soft px-8">
      <div className="mx-auto max-w-[860px]">
        <h2 className="text-display-lg text-text mb-16">About</h2>

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

        <div className="flex flex-wrap gap-4 mb-16">
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

        <div className="grid gap-6 lg:grid-cols-3">
            {skills.map((s) => (
              <div
                key={s.category}
                className="rounded-card bg-surface-card p-7 shadow-card xl:p-8"
              >
                <h3
                  className="mb-5 text-[13px] font-medium uppercase tracking-wider text-muted"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {s.category}
                </h3>
                <ul className="space-y-0">
                  {s.items.map((item, i) => (
                    <li
                      key={item}
                      className={
                        i === 0 ? '' : 'border-t pt-3.5'
                      }
                      style={{
                        borderColor: 'rgba(0,0,0,0.05)',
                      }}
                    >
                      <span
                        className="text-body"
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}
