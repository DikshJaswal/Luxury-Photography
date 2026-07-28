import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function FAQHero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury pre-wedding FAQ"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 lg:px-10">
        <div className="max-w-4xl">
          <span className="inline-flex rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs font-medium uppercase tracking-[0.35em] text-[var(--color-primary)] backdrop-blur-md">
            Frequently Asked Questions
          </span>

          <h1 className="mt-8 font-serif text-5xl font-light leading-[1.05] text-white sm:text-6xl lg:text-8xl">
            Everything You
            <br />
            <span className="text-[var(--color-primary)]">
              Need To Know
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-300 lg:text-xl">
            Planning your pre-wedding shoot should be exciting—not overwhelming.
            Browse answers to the most common questions about booking,
            locations, timelines, galleries, films, and everything
            in between.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">
            <a
              href="#faq"
              className="inline-flex items-center gap-3 rounded-full bg-[var(--color-primary)] px-8 py-4 font-medium text-black transition-all duration-300 hover:scale-105"
            >
              Browse FAQs
              <ArrowRight size={18} />
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#faq"
        className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="mb-4 text-xs uppercase tracking-[0.35em] text-white/60">
            Scroll
          </span>

          <div className="flex h-14 w-8 justify-center rounded-full border border-white/25">
            <div className="mt-2 h-3 w-1 animate-bounce rounded-full bg-[var(--color-primary)]" />
          </div>
        </div>
      </a>
    </section>
  );
}

export default FAQHero;
