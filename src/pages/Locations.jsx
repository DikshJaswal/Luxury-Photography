import LocationsHero from "../components/locations/LocationsHero";
import FeaturedLocations from "../components/locations/FeaturedLocations";
import TravelProcess from "../components/locations/TravelProcess";
import TravelAvailability from "../components/locations/TravelAvailability";
import LocationsCTA from "../components/locations/LocationsCTA";
import PageIntro from "../components/common/PageIntro";

function Locations() {
  return (
    <>
      <LocationsHero />
      <PageIntro
        eyebrow="Locations"
        title="Pick The Mood Before We Pick The Lens"
        description="From mountains to luxury resorts, every location page is built to help couples choose the right visual language."
        primaryLabel="Explore Portfolio"
        primaryTo="/portfolio"
        secondaryLabel="Request Quote"
        secondaryTo="/book"
      />
      <FeaturedLocations />
      <TravelProcess />
      <TravelAvailability />
      <LocationsCTA />
    </>
  );
}

export default Locations;
