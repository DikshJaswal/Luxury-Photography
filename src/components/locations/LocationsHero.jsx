import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

function LocationsHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80"
        alt="Destination pre-wedding location"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-black/20 to-black/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-center px-6 pt-32 pb-20">

        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-neutral-300">
          <Link
            to="/"
            className="transition hover:text-[var(--color-primary)]"
          >
            Home
          </Link>

          <span>/</span>

          <span className="text-white">Locations</span>
        </div>

        {/* Badge */}
        <span className="w-fit rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
          Pre-Wedding Locations
        </span>

        {/* Heading */}
        <h1 className="mt-8 max-w-4xl font-serif text-5xl leading-tight md:text-7xl">
          Capturing Love
          <br />
          Across
          <span className="text-[var(--color-primary)]">
            {" "}
            India & Beyond
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-300">
          Whether it's the snow-covered Himalayas, royal palaces, tropical
          beaches, or serene backwaters, we travel wherever your love story
          takes you and preserve every unforgettable moment with timeless
          elegance.
        </p>

        {/* Stats */}
        <div className="mt-14 flex flex-wrap gap-10">

          <div>
            <h3 className="text-4xl font-bold text-[var(--color-primary)]">
              25+
            </h3>
            <p className="mt-2 text-neutral-400">
              Destinations Covered
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[var(--color-primary)]">
              500+
            </h3>
            <p className="mt-2 text-neutral-400">
              Pre-Wedding Shoots
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[var(--color-primary)]">
              Worldwide
            </h3>
            <p className="mt-2 text-neutral-400">
              Travel Available
            </p>
          </div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white/80" />
      </div>
    </section>
  );
}

export default LocationsHero;
