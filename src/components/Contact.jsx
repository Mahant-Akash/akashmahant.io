export default function Contact() {
  return (
    <section id="contact" className="py-section bg-bg px-8">
      <div className="mx-auto max-w-container">
        <h2 className="text-display-lg text-text mb-4 text-center">Contact</h2>
        <p className="text-body text-subtle mb-16 text-center">
          I'm open to opportunities in finance, accounting, and financial analytics.
        </p>

        {/* Warm stone CTA block */}
        <div className="mx-auto max-w-container-sm rounded-section bg-stone p-12 text-center shadow-warm-lg">
          <p className="text-body-lg text-text mb-8">
            Feel free to reach out or explore my work.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:akash.r.mahant@gmail.com"
              className="text-btn text-bg rounded-pill bg-text px-8 py-3.5 shadow-btn no-underline inline-block transition-shadow duration-200 hover:shadow-lg hover:shadow-black/10"
            >
              akash.r.mahant@gmail.com
            </a>
            <a
              href="tel:+15513445273"
              className="text-btn rounded-warm bg-stone px-6 py-3 shadow-warm no-underline inline-block transition-shadow duration-200 hover:shadow-warm-lg"
            >
              +1 (551) 344-5273
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
