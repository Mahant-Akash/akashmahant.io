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
    <section id="about" className="py-section bg-surface px-8">
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

          {/* Right column — ElevenLabs-style skill card grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {skills.map((s) => (
              <div
                key={s.category}
                className="rounded-[16px] bg-bg p-7 shadow-card xl:p-8"
                style={{
                  boxShadow:
                    'rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px, rgba(0,0,0,0.04) 0px 2px 4px',
                }}
              >
                <h3
                  className="mb-5 text-[13px] font-medium uppercase tracking-wider text-subtle"
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
                        className="font-body"
                        style={{
                          fontSize: '16px',
                          lineHeight: '1.50',
                          letterSpacing: '0.16px',
                          color: '#4e4e4e',
                          fontWeight: 400,
                        }}
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
      </div>
    </section>
  );
}
