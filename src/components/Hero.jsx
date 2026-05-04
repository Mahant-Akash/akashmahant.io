export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[70vh] items-center justify-center bg-surface px-8 pt-16"
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-container-sm text-center">
        <p className="text-body-md text-subtle mb-6">
          Finance &amp; Accounting Professional
        </p>

        <h1 className="text-display text-text mb-6">
          Akash Mahant
        </h1>

        <p className="text-body-lg text-muted mx-auto mb-10 max-w-[640px]">
          Combining financial analysis with technology and automation to build
          data-driven tools that improve decision-making.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="/MahantAkash_Resume.pdf"
            className="text-btn text-bg rounded-pill bg-text px-6 py-3.5 shadow-btn no-underline inline-block transition-shadow duration-200 hover:shadow-lg hover:shadow-black/10"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <a
            href="#projects"
            className="text-btn text-bg rounded-pill bg-text px-8 py-3.5 shadow-btn no-underline inline-block transition-shadow duration-200 hover:shadow-lg hover:shadow-black/10"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="text-btn rounded-warm bg-stone px-6 py-3 shadow-warm no-underline inline-block transition-shadow duration-200 hover:shadow-warm-lg"
          >
            Get in Touch
          </a>
        </div>

        <div className="mt-20 flex items-center justify-center gap-3">
          <span className="text-caption text-subtle">Scroll to explore</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-subtle"
          >
            <path d="M8 2v8m0 0l3-3m-3 3l-3-3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
