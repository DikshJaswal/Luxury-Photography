import AboutHero from "../components/about/AboutHero";
import StorySection from "../components/about/StorySection";
import Philosophy from "../components/about/Philosophy";
import Achievements from "../components/about/Achievements";
import MeetPhotographer from "../components/about/MeetPhotographer";
import BehindTheScenes from "../components/about/BehindTheScenes";
import TestimonialsHighlight from "../components/about/TestimonialsHighlight";
import AboutCTA from "../components/about/AboutCTA";
import PageIntro from "../components/common/PageIntro";

function About() {
  return (
    <>
      <AboutHero />
      <PageIntro
        eyebrow="About"
        title="Built For Couples Who Want Real Emotion"
        description="A closer look at the people, process, and philosophy behind our cinematic pre-wedding work."
        primaryLabel="View Portfolio"
        primaryTo="/portfolio"
        secondaryLabel="Get Free Consultation"
        secondaryTo="/book"
      />
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
