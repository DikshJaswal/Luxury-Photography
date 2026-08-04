import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import portfolioCategories from "../../data/portfolioCategories";
import { getOptimizedImageUrl } from "../../utils/helpers";

function RelatedCategories({ currentCategory }) {
  const related = portfolioCategories
    .filter((item) => item.slug !== currentCategory)
    .slice(0, 3);

  return (
    <section className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
            Continue Exploring
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl text-center font-serif text-4xl text-balance text-white md:text-5xl">
            Explore More Collections
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-center text-balance text-neutral-400">
            Every destination tells a different story. Discover more
            breathtaking pre-wedding collections.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {related.map((category) => (
            <Link
              key={category.id}
              to={`/portfolio/${category.slug}`}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111111]"
            >
              <div className="overflow-hidden">
                <img
                  src={getOptimizedImageUrl(category.cover, { width: 900, height: 600, crop: "fill" })}
                  alt={category.name}
                  loading="lazy"
                  decoding="async"
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-8">
                <h3 className="font-serif text-3xl text-white transition group-hover:text-[var(--color-primary)]">
                  {category.name}
                </h3>

                <p className="mt-4 text-neutral-400">
                  {category.shortDescription}
                </p>

                <div className="mt-8 inline-flex items-center gap-2 text-[var(--color-primary)]">
                  Explore Collection
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RelatedCategories;
