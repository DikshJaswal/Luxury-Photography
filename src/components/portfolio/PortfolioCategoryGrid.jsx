import { motion } from "framer-motion";
import { ArrowRight, Images } from "lucide-react";
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

                  <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-black/50 px-4 py-2 backdrop-blur-md">
                    <Images
                      size={16}
                      className="text-[var(--color-primary)]"
                    />

                    <span className="text-sm text-white">
                      {category.totalPhotos}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="font-serif text-2xl text-white transition group-hover:text-[var(--color-primary)] sm:text-3xl">
                    {category.name}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-neutral-400 sm:text-base">
                    {category.shortDescription}
                  </p>

                  <div className="mt-8 flex items-center justify-between gap-4">
                    <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 sm:text-sm sm:tracking-[0.25em]">
                      Explore Collection
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition group-hover:border-[var(--color-primary)] group-hover:bg-[var(--color-primary)]">
                      <ArrowRight className="transition group-hover:text-black" />
                    </div>
                  </div>
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
