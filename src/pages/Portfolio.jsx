import PortfolioHero from "../components/portfolio/PortfolioHero";
import GalleryGrid from "../components/portfolio/GalleryGrid";
import PortfolioCTA from "../components/portfolio/PortfolioCTA";
import portfolioData from "../data/portfolioData";

function Portfolio() {
  return (
    <main className="bg-[#0B0B0B] text-white">
      <PortfolioHero />
      <GalleryGrid images={portfolioData} />
      <PortfolioCTA />
    </main>
  );
}

export default Portfolio;
