import { ExperienceCard } from "./ui/Card";

const experiences = [
  {
    role: "Staff Accountant",
    company: "Volunteers of America – Greater New York",
    period: "Jan 2025 – Apr 2026",
    location: "New York, NY",
    bullets: [
      "Reduced document processing time by 85% through automation",
      "Performed variance analysis and resolved discrepancies proactively",
    ],
  },
  {
    role: "Senior Process Associate",
    company: "Accenture",
    period: "Aug 2019 – Jul 2022",
    location: "Mumbai, India",
    bullets: [
      "Automated financial workflows, improving efficiency by 90%",
      "Consistently exceeded productivity targets (124%)",
    ],
  },
  {
    role: "Financial Advisor",
    company: "Money Honey Financial Services",
    period: "Jul 2018 – Nov 2018",
    location: "Mumbai, India",
    bullets: [
      "Managed 200+ client portfolios with 100% retention",
      "Advised on diversified investment strategies",
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
