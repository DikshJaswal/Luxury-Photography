import { getOptimizedImageUrl } from "../../utils/helpers";

function LocationCard({ location }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-500 hover:-translate-y-2 hover:border-[var(--color-primary)]/40">

      {/* Image */}
      <div className="relative h-[420px] overflow-hidden">

        <img
          src={getOptimizedImageUrl(location.image, { width: 900, height: 1000, crop: "fill" })}
          alt={location.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      </div>

    </article>
  );
}

export default LocationCard;
