import { useState } from "react";

import PortfolioHero from "../components/portfolio/PortfolioHero";
import CategoryFilter from "../components/portfolio/CategoryFilter";
import PortfolioGrid from "../components/portfolio/PortfolioGrid";
import PortfolioCTA from "../components/portfolio/PortfolioCTA";

function Portfolio() {
  const [selectedCategory, setSelectedCategory] =
    useState("all");

  return (
    <>
      <PortfolioHero />

      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <PortfolioGrid
        selectedCategory={selectedCategory}
      />

      <PortfolioCTA />
    </>
  );
}

export default Portfolio;