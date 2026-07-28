import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

function BlogHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}

      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Pre-Wedding Journal"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
      </div>

      {/* Content */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 lg:px-10">
        <span className="inline-flex rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs font-medium uppercase tracking-[0.35em] text-[var(--color-primary)]">
          Luxury Pre-Wedding Journal
        </span>

        <h1 className="mt-8 max-w-5xl font-serif text-5xl font-light leading-[1.05] text-white sm:text-6xl lg:text-8xl">
          Stories,
          <span className="text-[var(--color-primary)]"> Inspiration</span>
          <br />
          & Shoot Guides
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-300 lg:text-xl">
          Explore destination shoots, timeless photography, planning advice,
          and cinematic ideas through beautifully curated stories crafted for
          modern couples.
        </p>

        <div className="mt-12 flex flex-wrap gap-5">
          <a
            href="#articles"
            className="inline-flex items-center gap-3 rounded-full bg-[var(--color-primary)] px-8 py-4 font-medium text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Read Articles
            <ArrowRight size={18} />
          </a>

          <Link
            to="/contact"
            className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-[var(--color-primary)] hover:bg-white/10 hover:text-[var(--color-primary)]"
          >
            Get Free Consultation
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}

      <a
        href="#articles"
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center text-white/70 transition hover:text-[var(--color-primary)]"
      >
        <span className="mb-2 text-xs uppercase tracking-[0.35em]">
          Scroll
        </span>

        <ChevronDown
          size={22}
          className="animate-bounce"
        />
      </a>
    </section>
  );
}

export default BlogHero;
