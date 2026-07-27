import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function PortfolioCard({ item }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="group overflow-hidden rounded-3xl bg-white/5"
    >
      <Link to={`/portfolio/${item.category}`}>
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

          {/* Content */}
          <div className="absolute inset-x-0 bottom-0 p-6">
            <span className="inline-block rounded-full bg-[var(--color-primary)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-black">
              {item.category.replace("-", " ")}
            </span>

            <h3 className="mt-4 font-serif text-3xl text-white">
              {item.title}
            </h3>

            <p className="mt-2 text-sm uppercase tracking-[0.15em] text-neutral-300">
              {item.location}
            </p>

            <span className="mt-6 inline-block translate-y-4 text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-primary)] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              View Story →
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default PortfolioCard;