import { motion } from "framer-motion";

function GalleryCard({ image, index, onClick }) {
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
      onClick={onClick}
      className="group cursor-pointer overflow-hidden rounded-[32px] border border-white/10 bg-[#111111]"
    >
      <div className="relative overflow-hidden">
        <img
          src={image.image}
          alt={image.title}
          loading="lazy"
          className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-110 sm:h-[360px] lg:h-[420px]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>
    </motion.article>
  );
}

export default GalleryCard;