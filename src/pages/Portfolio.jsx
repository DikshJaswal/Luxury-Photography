import { useEffect } from "react";

import PortfolioHero from "../components/portfolio/PortfolioHero";
import GalleryGrid from "../components/portfolio/GalleryGrid";
import PortfolioCTA from "../components/portfolio/PortfolioCTA";
import portfolioData from "../data/portfolioData";
import ReelsCarousel from "../components/common/ReelsCarousel";

function Portfolio() {
  useEffect(() => {
    if (window.location.hash !== "#portfolio-reels") return undefined;

    const scrollToReels = window.setTimeout(() => {
      document.getElementById("portfolio-reels")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);

    return () => window.clearTimeout(scrollToReels);
  }, []);

  return (
    <main className="bg-[#0B0B0B] text-white">
      <PortfolioHero />
      <GalleryGrid images={portfolioData} />
      <ReelsCarousel />
      <PortfolioCTA />
    </main>
  );
}

export default Portfolio;
