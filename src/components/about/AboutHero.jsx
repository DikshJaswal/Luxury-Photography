import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function AboutHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
          alt="Pre-wedding photographer"
          className="h-full w-full object-cover brightness-90 contrast-110"
        />

        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6">

        <span className="inline-block rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
          About LUXE
        </span>

        <h1 className="mt-8 max-w-4xl font-serif text-5xl leading-tight text-white md:text-7xl">
          Every Love Story
          <span className="text-[var(--color-primary)]">
            {" "}Deserves to be Remembered
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-300">
          Behind every pre-wedding story is genuine connection, thoughtful
          planning, and an eye for locations that make your chemistry feel
          cinematic without losing its natural emotion.
        </p>

        <div className="mt-12 flex flex-col gap-5 sm:flex-row">

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-primary)] px-8 py-4 font-medium text-black transition hover:scale-105"
          >
            Let's Connect
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

export default AboutHero;
