import { motion } from "framer-motion";

import { getOptimizedImageUrl } from "../../utils/helpers";

function GalleryCard({ image, index, onClick, onImageLoad }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: Math.min(index * 0.04, 0.6),
      }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-[32px] border border-white/10 bg-[#111111]"
    >
      <button
        type="button"
        onClick={onClick}
        className="block w-full text-left"
        aria-label={`Open photo ${index + 1}`}
      >
        <div className="relative overflow-hidden">
        <img
          src={getOptimizedImageUrl(image.image)}
          alt={image.title || `Portfolio photo ${index + 1}`}
          loading="lazy"
          className="h-auto w-full object-contain transition duration-700 group-hover:scale-110"
          onLoad={(event) => {
            const { naturalWidth, naturalHeight } = event.currentTarget;
            onImageLoad(naturalWidth / naturalHeight);
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>
      </button>
    </motion.article>
  );
}

export default GalleryCard;
