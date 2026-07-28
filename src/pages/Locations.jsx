import LocationsHero from "../components/locations/LocationsHero";
import FeaturedLocations from "../components/locations/FeaturedLocations";
import TravelProcess from "../components/locations/TravelProcess";
import TravelAvailability from "../components/locations/TravelAvailability";
import LocationsCTA from "../components/locations/LocationsCTA";

function Locations() {
  return (
    <>
      <LocationsHero />
      <FeaturedLocations />
      <TravelProcess />
      <TravelAvailability />
      <LocationsCTA />
    </>
  );
}

export default Locations;