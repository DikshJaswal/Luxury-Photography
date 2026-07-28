import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function PackagesHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury pre-wedding photography"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6">

        <span className="inline-block rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
          Tailored Experiences
        </span>

        <h1 className="mt-8 max-w-4xl font-serif text-5xl leading-tight text-white md:text-7xl">
          Your Story Deserves a
          <span className="text-[var(--color-primary)]">
            {" "}Tailored Plan
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-300">
          Every couple, location, and vision is different. Tell us what you
          have in mind and we will create a custom pre-wedding experience for you.
        </p>

        <div className="mt-12 flex flex-col gap-5 sm:flex-row">

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-primary)] px-8 py-4 font-medium text-black transition hover:scale-105"
          >
            Request Quote
            <ArrowRight size={18} />
          </Link>

          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 font-medium text-white transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
          >
            View Portfolio
          </Link>

        </div>

      </div>

    </section>
  );
}

export default PackagesHero;
