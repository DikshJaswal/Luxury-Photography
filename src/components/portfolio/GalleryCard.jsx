import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";

function GalleryCard({ image, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-[32px] border border-white/10 bg-[#111111]"
    >
      <div className="relative overflow-hidden">
        <img
          src={image.image}
          alt={image.title}
          loading="lazy"
          className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-110 sm:h-[360px] lg:h-[420px]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-md">
          <span className="text-xs uppercase tracking-[0.2em] text-white">
            {image.category.replace("-", " ")}
          </span>
        </div>
      </div>

      <div className="p-7">
        <h3 className="font-serif text-3xl text-white transition group-hover:text-[var(--color-primary)]">
          {image.title}
        </h3>

        <div className="mt-4 flex items-center gap-2 text-neutral-400">
          <MapPin
            size={16}
            className="text-[var(--color-primary)]"
          />

          <span>{image.location}</span>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <span className="text-sm uppercase tracking-[0.25em] text-neutral-500">
            View Collection
          </span>

          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition group-hover:border-[var(--color-primary)] group-hover:bg-[var(--color-primary)]">
            <ArrowUpRight className="transition group-hover:text-black" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default GalleryCard;
