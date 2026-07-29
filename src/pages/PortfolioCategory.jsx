import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

import portfolioCategories from "../data/portfolioCategories";
import portfolioData from "../data/portfolioData";
import { getHeroMedia } from "../utils/constants";

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
  const mediaKey = `portfolio-${category}`;
  const heroMedia = getHeroMedia(mediaKey);

  return (
    <main className="bg-[#0B0B0B] text-white">
      <PortfolioHero
        mediaKey={mediaKey}
        video={heroMedia.video}
        poster={heroMedia.poster}
      />

      <section className="bg-[#0B0B0B] py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="inline-flex rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
            {currentCategory.name}
          </span>

          <h2 className="mt-6 font-serif text-4xl md:text-6xl">
            {currentCategory.name} Pre-Wedding
            <span className="text-[var(--color-primary)]">
              {" "}Gallery
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-400">
            {currentCategory.description}
          </p>
        </div>
      </section>

      <GalleryGrid images={images} />

      <RelatedCategories currentCategory={category} />

      <PortfolioCTA />
    </main>
  );
}

export default PortfolioCategory;
