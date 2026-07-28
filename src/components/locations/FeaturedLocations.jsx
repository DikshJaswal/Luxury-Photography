import locationsData from "../../data/locationsData";
import LocationCard from "./LocationCard";

function FeaturedLocations() {
  const featuredLocations = locationsData.filter(
    (location) => location.featured
  );

  return (
    <section className="bg-[#0B0B0B] py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="inline-block rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
            Featured Destinations
          </span>

          <h2 className="mt-6 font-serif text-4xl leading-tight text-white md:text-6xl">
            Discover Our
            <span className="text-[var(--color-primary)]">
              {" "}
              Signature Locations
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
            Every destination has its own atmosphere, scenery, and emotion.
            Explore the places where we create unforgettable pre-wedding
            stories and timeless memories.
          </p>

        </div>

        {/* Cards Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {featuredLocations.map((location) => (
            <LocationCard
              key={location.id}
              location={location}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedLocations;
