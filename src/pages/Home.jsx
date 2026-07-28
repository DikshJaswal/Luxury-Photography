import Hero from "../components/home/Hero";
import FeaturedCouples from "../components/home/FeaturedCouples";
import FeaturedFilms from "../components/home/FeaturedFilms";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import InstagramFeed from "../components/home/InstagramFeed";
import SignatureLocations from "../components/locations/SignatureLocations";
import PackagesPreview from "../components/home/PackagesPreview";
import AvailabilityForm from "../components/home/AvailabilityForm";
import BehindScenes from "../components/home/BehindScenes";
import BlogPreview from "../components/home/BlogPreview";
import FinalCTA from "../components/home/FinalCTA";
import YouTubeVideos from "../components/home/YouTubeVideos";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedCouples />
      <FeaturedFilms />
      <WhyChooseUs />
      <SignatureLocations />
      <PackagesPreview />
      <AvailabilityForm />
      <Testimonials />
      <BehindScenes />
      <YouTubeVideos />
      <InstagramFeed />
      <BlogPreview />
      <FinalCTA />
    </>
  );
}

export default Home;
