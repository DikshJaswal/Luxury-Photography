import locationsData from "../../data/locationsData";
import LocationCard from "../locations/LocationCard";

function SignatureLocations() {
  const featuredLocations = locationsData.filter(
    (location) => location.featured
  );

  return (
    <section className="bg-[#0B0B0B] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-block rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
            Signature Destinations
          </span>

          <h2 className="mx-auto max-w-4xl text-center font-serif text-4xl leading-tight text-balance text-white md:text-6xl">
            Discover Our{" "}
            <span className="text-[var(--color-primary)]">
              Signature Locations
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-center text-balance text-lg leading-8 text-neutral-400">
            Explore the breathtaking destinations where we've captured timeless
            pre-wedding stories.
          </p>
        </div>

        {/* Locations Grid */}
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

export default SignatureLocations;
