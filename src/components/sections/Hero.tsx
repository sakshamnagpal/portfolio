export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-visible">
      {/* Radial gradient: faint accent glow from top-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 0% 0%, rgba(6,182,212,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        {/* Eyebrow */}
        <div
          className="flex items-center gap-3 mb-6 animate-fade-up"
          style={{ animationDelay: "0ms" }}
        >
          <span
            className="block h-px w-8 bg-accent origin-left animate-grow-right"
            style={{ animationDelay: "60ms" }}
          />
          <span className="font-mono text-xs text-accent uppercase tracking-widest">
            Senior Data Scientist &amp; AI Engineer
          </span>
        </div>

        {/* H1 */}
        <h1
          className="font-display text-5xl md:text-7xl font-bold text-primary leading-[1.1] pb-2 mb-6 animate-fade-up padding-bottom: 8px"
          style={{ animationDelay: "120ms" }}
        >
          Hi, I&apos;m Sak Nagpal
        </h1>

        {/* Subheading */}
        <p
          className="text-secondary text-lg max-w-xl leading-relaxed mb-10 animate-fade-up"
          style={{ animationDelay: "240ms" }}
        >
          I build data-driven systems and agentic AI pipelines - turning complex
          problems into production-ready solutions.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-4 animate-fade-up"
          style={{ animationDelay: "360ms" }}
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-accent hover:bg-accent-hover text-white font-medium text-sm transition-colors duration-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-accent text-accent hover:bg-accent/10 font-medium text-sm transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
