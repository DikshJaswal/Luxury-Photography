import AboutHero from "../components/about/AboutHero";
import StorySection from "../components/about/StorySection";
import Philosophy from "../components/about/Philosophy";
import Achievements from "../components/about/Achievements";
import MeetPhotographer from "../components/about/MeetPhotographer";
import BehindTheScenes from "../components/about/BehindTheScenes";
import TestimonialsHighlight from "../components/about/TestimonialsHighlight";
import AboutCTA from "../components/about/AboutCTA";

function About() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <Philosophy />
      <Achievements />
      <MeetPhotographer />
      <BehindTheScenes />
      <TestimonialsHighlight />
      <AboutCTA />
    </>
  );
}

export default About;