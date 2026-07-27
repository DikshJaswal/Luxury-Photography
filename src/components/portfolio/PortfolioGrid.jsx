import { AnimatePresence } from "framer-motion";

import Container from "../common/Container";
import PortfolioCard from "./PortfolioCard";

import portfolioData from "../../data/portfolioData";

function PortfolioGrid({ selectedCategory }) {
  const filteredPortfolio =
    selectedCategory === "all"
      ? portfolioData
      : portfolioData.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <section className="pb-20">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="wait">
            {filteredPortfolio.map((item) => (
              <PortfolioCard
                key={item.id}
                item={item}
              />
            ))}
          </AnimatePresence>
        </div>

        {filteredPortfolio.length === 0 && (
          <div className="py-20 text-center">
            <h3 className="font-serif text-3xl text-white">
              No stories found
            </h3>

            <p className="mt-4 text-neutral-400">
              Please choose another category.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}

export default PortfolioGrid;