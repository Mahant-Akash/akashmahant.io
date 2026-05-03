export function BlackPill({ children, href, className = "" }) {
  const content = (
    <span className="text-btn text-bg font-body-md text-pill bg-text px-8 py-3.5 shadow-btn block text-center transition-shadow duration-200 hover:shadow-lg hover:shadow-black/10">
      {children}
    </span>
  );
  return href ? (
    <a
      href={href}
      className={
        "no-underline " +
        className
      }
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  ) : (
    <span className={className}>{content}</span>
  );
}

export function WhitePill({ children, href, className = "" }) {
  const content = (
    <span className="text-btn text-text font-body-md text-pill bg-bg border border-border px-8 py-3.5 shadow-card block text-center transition-shadow duration-200 hover:shadow-card-lg">
      {children}
    </span>
  );
  return href ? (
    <a href={href} className="no-underline" target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    <span className={className}>{content}</span>
  );
}

export function WarmStone({ children, href, className = "" }) {
  const content = (
    <span
      className="text-btn text-text font-body-md text-warm bg-stone shadow-warm block text-center transition-shadow duration-200 hover:shadow-warm-lg"
      style={{
        paddingLeft: "14px",
        paddingRight: "20px",
        paddingTop: "12px",
        paddingBottom: "12px",
      }}
    >
      {children}
    </span>
  );
  return href ? (
    <a href={href} className="no-underline" target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    <span className={className}>{content}</span>
  );
}
