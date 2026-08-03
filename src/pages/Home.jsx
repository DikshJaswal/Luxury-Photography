import Hero from "../components/home/Hero";
import FeaturedCouples from "../components/home/FeaturedCouples";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import InstagramFeed from "../components/home/InstagramFeed";
import PackagesPreview from "../components/home/PackagesPreview";
import AvailabilityForm from "../components/home/AvailabilityForm";
import BlogPreview from "../components/home/BlogPreview";
import FinalCTA from "../components/home/FinalCTA";
import YouTubeVideos from "../components/home/YouTubeVideos";
import ReviewVideos from "../components/home/ReviewVideos";
import ReelsCarousel from "../components/common/ReelsCarousel";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedCouples />
      <WhyChooseUs />
      <PackagesPreview />
      <AvailabilityForm />
      <Testimonials />
      <ReviewVideos />
      <ReelsCarousel />
      <YouTubeVideos />
      <InstagramFeed />
      <BlogPreview />
      <FinalCTA />
    </>
  );
}

export default Home;
