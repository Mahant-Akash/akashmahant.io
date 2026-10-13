import ToolsCarousel from "./ToolsCarousel";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[70vh] flex-col bg-canvas pt-16 overflow-hidden"
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

      <div className="relative flex flex-1 items-center justify-center px-8">
        <div className="mx-auto max-w-container-sm text-center">
          <p className="text-body-md text-muted mb-6">
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
              className="text-btn text-bg rounded-pill bg-ink px-6 py-3.5 shadow-btn no-underline inline-block transition-shadow duration-200 hover:shadow-lg hover:shadow-ink/10"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <a
              href="#projects"
              className="text-btn rounded-pill border border-border-strong px-8 py-3.5 no-underline inline-block transition-colors duration-200 hover:border-ink/20 hover:bg-canvas-soft"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="text-btn rounded-pill bg-surface-strong px-6 py-3 shadow-warm no-underline inline-block transition-shadow duration-200 hover:shadow-warm-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <ToolsCarousel />
    </section>
  );
}
