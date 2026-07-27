import { motion } from "framer-motion";

import Container from "../common/Container";
import portfolioCategories from "../../data/portfolioCategories";

function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}) {
  return (
    <section className="py-10">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {portfolioCategories.map((category) => {
            const active =
              selectedCategory === category.slug;

            return (
              <button
                key={category.id}
                onClick={() =>
                  onCategoryChange(category.slug)
                }
                className={`rounded-full border px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] transition-all duration-300 ${
                  active
                    ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-black shadow-lg"
                    : "border-white/20 bg-white/5 text-white backdrop-blur-md hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                }`}
              >
                {category.title}
              </button>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

export default CategoryFilter;