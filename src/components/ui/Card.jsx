export function ProjectCard({ title, date, description, highlights, links, className = "" }) {
  return (
    <div
      className={
        "rounded-card bg-bg border border-border p-8 shadow-card transition-shadow duration-200 hover:shadow-card-lg " +
        className
      }
    >
      <h3 className="text-display-md text-text mb-1">{title}</h3>
      {date && (
        <span className="text-caption text-subtle mb-4 block">{date}</span>
      )}
      <p className="text-body text-muted mb-5">{description}</p>
      {highlights && highlights.length > 0 && (
        <ul className="mb-6 space-y-2">
          {highlights.map((h, i) => (
            <li key={i} className="text-caption text-muted flex items-start gap-2.5">
              <span className="mt-1.5 shrink-0 text-warm">—</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}
      {links && links.length > 0 && (
        <div className="flex flex-wrap gap-4">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-subtle text-caption border-b border-subtle/30 transition-colors duration-200 hover:text-text hover:border-text/30"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export function ExperienceCard({ role, company, period, location, bullets, className = "" }) {
  return (
    <div
      className={
        "rounded-card bg-bg border border-border p-8 shadow-card " +
        className
      }
    >
      <div className="mb-5">
        <h3 className="text-display-md text-text mb-1">{role}</h3>
        <div className="flex flex-wrap items-center gap-2 text-body-md text-text">
          <span className="font-body-md">{company}</span>
          <span className="text-subtle">{"·"}</span>
          <span className="text-subtle text-body">{period}</span>
          {location && (
            <>
              <span className="text-subtle">{"·"}</span>
              <span className="text-subtle text-body">{location}</span>
            </>
          )}
        </div>
      </div>
      {bullets && bullets.length > 0 && (
        <ul className="space-y-2.5">
          {bullets.map((b, i) => (
            <li key={i} className="text-body text-muted flex items-start gap-3">
              <span className="mt-1.5 shrink-0 text-warm">—</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function InfoCard({ className = "" }) {
  return (
    <div
      className={
        "rounded-card bg-bg border border-border p-8 shadow-card " +
        className
      }
    >
      <slot />
    </div>
  );
}
