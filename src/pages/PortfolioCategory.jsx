import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

import portfolioCategories from "../data/portfolioCategories";
import portfolioData from "../data/portfolioData";

import PortfolioHero from "../components/portfolio/PortfolioHero";
import GalleryGrid from "../components/portfolio/GalleryGrid";
import RelatedCategories from "../components/portfolio/RelatedCategories";
import PortfolioCTA from "../components/portfolio/PortfolioCTA";

function PortfolioCategory() {
  const { category } = useParams();

  const currentCategory = portfolioCategories.find(
    (item) => item.slug === category
  );

  useEffect(() => {
    if (!currentCategory) return undefined;

    const title = `${currentCategory.name} Pre-Wedding Photography | LUXE`;
    const description = currentCategory.description;
    const previousTitle = document.title;
    let meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta?.getAttribute("content") || "";

    document.title = title;

    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }

    meta.setAttribute("content", description);

    return () => {
      document.title = previousTitle;
      meta?.setAttribute("content", previousDescription);
    };
  }, [currentCategory]);

  if (!currentCategory) {
    return <Navigate to="/portfolio" replace />;
  }

  const images = portfolioData.filter(
    (item) => item.category === category
  );

  return (
    <main className="bg-[#0B0B0B] text-white">
      <PortfolioHero
        title={currentCategory.name}
        description={currentCategory.description}
        image={currentCategory.cover}
      />

      <GalleryGrid images={images} />

      <RelatedCategories currentCategory={category} />

      <PortfolioCTA />
    </main>
  );
}

export default PortfolioCategory;
