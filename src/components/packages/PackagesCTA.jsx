import { ArrowRight, CalendarHeart } from "lucide-react";
import { Link } from "react-router-dom";

function PackagesCTA() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Background */}
      <div className="absolute inset-0">

        <img
          src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury pre-wedding couple"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />

      </div>

      <div className="relative mx-auto max-w-6xl px-6">

        <div className="mx-auto max-w-4xl text-center">

          <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-primary)] text-black">
            <CalendarHeart size={38} />
          </div>

          <span className="inline-block rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
            Reserve Your Date
          </span>

          <h2 className="mt-8 font-serif text-4xl leading-tight text-white md:text-6xl">
            Let's Create Something
            <span className="text-[var(--color-primary)]">
              {" "}Extraordinary Together
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-300">
            Every couple is unique. Share your vision and we&apos;ll craft a shoot
            with elegant photography, cinematic films, and thoughtful planning.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

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
              Explore Portfolio
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}

export default PackagesCTA;
