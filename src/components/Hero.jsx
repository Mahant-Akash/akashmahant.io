import ToolsCarousel from "./ToolsCarousel";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[80vh] flex-col bg-canvas pt-16 overflow-hidden"
    >
      {/* Atmospheric gradient orbs */}
      <div
        className="absolute pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          top: '10%',
          left: '28%',
          width: '560px',
          height: '560px',
          background: 'radial-gradient(circle, rgba(167,229,211,0.45) 0%, rgba(167,229,211,0.15) 40%, transparent 70%)',
        }}
      />
      <div
        className="absolute pointer-events-none translate-x-1/2 translate-y-1/2"
        style={{
          top: '55%',
          right: '22%',
          width: '480px',
          height: '480px',
          background: 'radial-gradient(circle, rgba(244,197,168,0.4) 0%, rgba(244,197,168,0.12) 40%, transparent 70%)',
        }}
      />
      <div
        className="absolute pointer-events-none translate-x-1/2 -translate-y-1/2"
        style={{
          bottom: '26%',
          left: '55%',
          width: '360px',
          height: '360px',
          background: 'radial-gradient(circle, rgba(200,184,224,0.35) 0%, rgba(200,184,224,0.1) 40%, transparent 70%)',
        }}
      />

      {/* Film grain over the washes, for texture rather than flat color */}
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.035] mix-blend-multiply" />

      <div className="relative flex flex-1 items-center justify-center px-6 pb-16 pt-12 sm:px-8">
        <div className="mx-auto max-w-container-sm text-center">
          <p className="text-eyebrow mb-8 inline-flex items-center rounded-pill border border-border bg-white/70 px-4 py-2 text-muted backdrop-blur-sm">
            Finance &amp; Accounting Professional
          </p>

          <h1 className="text-display text-text mb-7">
            Akash Mahant
          </h1>

          <p className="text-body-lg text-muted mx-auto mb-12 max-w-[600px]">
            Combining financial analysis with technology and automation to build
            data-driven tools that improve decision-making.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-4 sm:gap-x-4">
            <a
              href="/MahantAkash_Resume.pdf"
              className="text-btn text-bg rounded-pill bg-ink px-7 py-3.5 shadow-btn no-underline inline-block transition-all duration-200 hover:bg-ink-active hover:-translate-y-px hover:shadow-lg hover:shadow-ink/15"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <a
              href="#projects"
              className="text-btn rounded-pill border border-border-strong bg-white/70 px-7 py-3.5 no-underline inline-block backdrop-blur-sm transition-all duration-200 hover:border-ink/25 hover:bg-white hover:-translate-y-px"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="text-btn group text-muted px-4 py-3.5 no-underline inline-block transition-colors duration-200 hover:text-ink"
            >
              Get in touch
              <span
                aria-hidden="true"
                className="ml-1.5 inline-block transition-transform duration-200 group-hover:translate-x-0.5"
              >
                &rarr;
              </span>
            </a>
          </div>
        </div>
      </div>

      <ToolsCarousel />
    </section>
  );
}
