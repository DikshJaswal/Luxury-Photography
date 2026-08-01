import locationsData from "../../data/locationsData";
import LocationCard from "./LocationCard";

function FeaturedLocations() {
  const featuredLocations = locationsData.filter(
    (location) => location.featured
  );

  return (
    <section className="bg-[#0B0B0B] py-24">
      <div className="mx-auto max-w-7xl px-6">
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
