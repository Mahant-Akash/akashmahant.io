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
    <section id="experience" className="py-section bg-bg px-8">
      <div className="mx-auto max-w-container">
        <h2 className="text-display-lg text-text mb-16">Experience</h2>

        <div className="space-y-8">
          {experiences.map((e) => (
            <ExperienceCard
              key={e.role}
              role={e.role}
              company={e.company}
              period={e.period}
              location={e.location}
              bullets={e.bullets}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
