import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import LocationCard from "../cards/LocationCard";
import locationsData from "../../data/locationsData";
import Section from "../common/Section";

function LocationsSection() {
  return (
    <Section>
        <SectionHeading
            badge="Destinations"
            title="Capturing Love Across Beautiful Destinations"
            description="Whether it's royal palaces, mountain landscapes, or beach ceremonies, every destination has its own story."
        />

        <div className="grid gap-8 lg:grid-cols-3">
            {locationsData.map((location) => (
            <LocationCard
                key={location.id}
                location={location}
            />
            ))}
        </div>
    </Section>
  );
}

export default LocationsSection;