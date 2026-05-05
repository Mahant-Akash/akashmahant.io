import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Nav({ scrolled }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className={
        "fixed top-0 left-0 right-0 z-50 bg-canvas border-b border-border transition-shadow duration-300 " +
        (scrolled ? "shadow-card" : "")
      }
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-container px-8 xl:px-12">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#hero"
            className="text-body-md text-text no-underline"
          >
            Akash Mahant
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex md:flex-1 md:justify-center">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-nav text-subtle no-underline border-b border-subtle/12 hover:border-b-0 transition-all duration-200 hover:text-text"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-text"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <>
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="pb-6 md:hidden">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-nav text-subtle block py-3 no-underline border-b border-subtle/12 hover:border-b-0 transition-all duration-200 hover:text-text"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
