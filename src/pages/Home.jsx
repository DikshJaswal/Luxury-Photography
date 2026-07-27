import Hero from "../components/home/Hero";
import FeaturedCouples from "../components/home/FeaturedCouples";
import FeaturedFilms from "../components/home/FeaturedFilms";
import WhyChooseUs from "../components/home/WhyChooseUs";
import LocationsSection from "../components/home/LocationsSection";
import Testimonials from "../components/home/Testimonials";
import InstagramGallery from "../components/home/InstagramGallery";
import CallToAction from "../components/home/CallToAction";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedCouples />
      <FeaturedFilms />
      <WhyChooseUs />
      <LocationsSection />
      <Testimonials />
      <InstagramGallery/>
      <CallToAction />
      <Footer />
    </>
  );
}

export default Home;