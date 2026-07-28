import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

function LocationCard({ location }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-500 hover:-translate-y-2 hover:border-[var(--color-primary)]/40">

      {/* Image */}
      <div className="relative h-[420px] overflow-hidden">

        <img
          src={location.image}
          alt={location.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        {/* Category Badge */}
        <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs uppercase tracking-[0.25em] backdrop-blur">
          {location.category}
        </span>

        {/* Shoots */}
        <div className="absolute right-5 top-5 rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-black">
          {location.shoots}+ Shoots
        </div>

        {/* Bottom Content */}
        <div className="absolute bottom-0 w-full p-8">

          <h3 className="font-serif text-4xl text-white">
            {location.name}
          </h3>

          <p className="mt-2 text-[var(--color-primary)]">
            {location.tagline}
          </p>

        </div>

      </div>

      {/* Content */}
      <div className="space-y-6 p-8">

        <p className="leading-8 text-neutral-400">
          {location.description}
        </p>

        {/* Details */}
        <div className="flex flex-wrap gap-6 text-sm text-neutral-300">

          <div className="flex items-center gap-2">
            <CalendarDays size={18} />
            <span>{location.bestSeason}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={18} />
            <span>{location.category}</span>
          </div>

        </div>

        {/* Button */}
        <Link
          to="/contact"
          className="inline-flex items-center gap-3 font-medium text-[var(--color-primary)] transition group-hover:gap-5"
        >
          Plan This Location
          <ArrowRight size={18} />
        </Link>

      </div>

    </article>
  );
}

export default LocationCard;
