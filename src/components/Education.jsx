export default function Education() {
  const degree = {
    degree: "Master of Science in Finance",
    school: "Stevens Institute of Technology",
    period: "Sep 2022 – May 2024",
    gpa: "3.86 / 4.00",
  };

  const financeCoursework = [
    "Financial Statement Analysis",
    "Corporate Finance",
    "Investment Management",
    "Fixed Income & Derivatives",
    "Portfolio Construction & Trading Analytics",
  ];

  const quantitativeCoursework = [
    "Econometrics",
    "Quantitative Hedge Fund Strategies",
    "Data Visualization",
    "Python for Financial Applications",
    "Introduction to R",
  ];

  const certifications = [
    "Bloomberg Market Concepts Certification",
    "Fundamentals of Consulting — Harvard Business Publishing",
    "Accenture Star of Business Award (2020, 2022)",
    "Money Honey Excellence Award (2018)",
  ];

  return (
    <section id="education" className="py-section bg-bg px-8">
      <div className="mx-auto max-w-container">
        <h2 className="text-display-lg text-text mb-16">Education</h2>

        <div className="grid gap-12 lg:grid-cols-2" style={{ alignItems: 'flex-start' }}>
          {/* Degree card */}
          <div className="rounded-card bg-bg border border-border p-8 shadow-section">
            <h3 className="text-display-md text-text mb-2">{degree.degree}</h3>
            <p className="text-body-xl text-muted mb-1">{degree.school}</p>
            <div className="flex items-center gap-3 text-caption text-subtle">
              <span>{degree.period}</span>
              <span>{"·"}</span>
              <span>GPA: {degree.gpa}</span>
            </div>
          </div>

          {/* Coursework card */}
          <div className="rounded-card bg-bg border border-border p-8 shadow-section">
            <h3 className="text-display-md text-text mb-6">Key Coursework</h3>

            <div className="mb-6">
              <h4 className="text-body-md text-text mb-2">Finance &amp; Investment</h4>
              <ul className="space-y-2.5">
                {financeCoursework.map((c) => (
                  <li key={c} className="text-body text-muted flex items-start gap-2.5">
                    <span className="mt-1.5 shrink-0 text-warm">—</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-body-md text-text mb-2">Quantitative &amp; Technical</h4>
              <ul className="space-y-2.5">
                {quantitativeCoursework.map((c) => (
                  <li key={c} className="text-body text-muted flex items-start gap-2.5">
                    <span className="mt-1.5 shrink-0 text-warm">—</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-8 rounded-card bg-bg border border-border p-8 shadow-section">
          <h3 className="text-display-md text-text mb-6">Certifications &amp; Achievements</h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((c) => (
              <div
                key={c}
                className="rounded-card bg-surface border border-border p-5 text-center shadow-card"
              >
                <p className="text-caption text-muted">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
