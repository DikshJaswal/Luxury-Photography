import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import portfolioCategories from "../../data/portfolioCategories";

function PortfolioCategoryGrid() {
  return (
    <section className="bg-[#0B0B0B] pb-24 pt-10 md:pt-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-block rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
            Explore Collections
          </span>

          <h2 className="mt-6 font-serif text-3xl text-white sm:text-4xl md:text-6xl">
            Choose Your
            <span className="text-[var(--color-primary)]">
              {" "}Dream Destination
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-neutral-400 sm:text-lg">
            Every destination has its own mood, light, atmosphere and
            storytelling style. Explore our curated collections to find the
            perfect setting for your love story.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {portfolioCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
            >
              <Link
                to={`/portfolio/${category.slug}`}
                className="group block overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02] transition hover:border-[var(--color-primary)]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={category.cover}
                    alt={category.name}
                    className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-110 sm:h-[360px] lg:h-[420px]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioCategoryGrid;
