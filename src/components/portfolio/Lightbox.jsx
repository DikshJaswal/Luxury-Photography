import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { getOptimizedImageUrl } from "../../utils/helpers";

function Lightbox({ images, selectedIndex, onSelect, onClose }) {
  const isOpen = selectedIndex !== null;

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onSelect((selectedIndex - 1 + images.length) % images.length);
      if (event.key === "ArrowRight") onSelect((selectedIndex + 1) % images.length);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [images.length, isOpen, onClose, onSelect, selectedIndex]);

  if (!isOpen || !images[selectedIndex]) return null;

  const image = images[selectedIndex];
  const thumbnailStart = Math.max(
    0,
    Math.min(selectedIndex - 1, images.length - 3)
  );
  const thumbnails = images.slice(thumbnailStart, thumbnailStart + 3);
  const previousIndex = (selectedIndex - 1 + images.length) % images.length;
  const nextIndex = (selectedIndex + 1) % images.length;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 p-4 sm:p-8"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`Photo ${selectedIndex + 1} of ${images.length}`}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6 sm:top-6"
          aria-label="Close gallery"
        >
          <X size={24} />
        </button>

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onSelect(previousIndex);
          }}
          className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-8"
          aria-label="Previous photo"
        >
          <ChevronLeft size={28} />
        </button>

        <motion.img
          key={image.id}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          src={getOptimizedImageUrl(image.image, { width: 2000 })}
          alt={image.title || `Portfolio photo ${selectedIndex + 1}`}
          decoding="async"
          className="max-h-[70vh] max-w-[calc(100vw-7rem)] object-contain sm:max-h-[76vh] sm:max-w-[calc(100vw-12rem)]"
          onClick={(event) => event.stopPropagation()}
        />

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onSelect(nextIndex);
          }}
          className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-8"
          aria-label="Next photo"
        >
          <ChevronRight size={28} />
        </button>

        <div
          className="mt-6 flex max-w-full gap-3 overflow-hidden"
          onClick={(event) => event.stopPropagation()}
        >
          {thumbnails.map((thumbnail, index) => {
            const thumbnailIndex = thumbnailStart + index;
            return (
              <button
                type="button"
                key={thumbnail.id}
                onClick={() => onSelect(thumbnailIndex)}
                className={`h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition sm:h-20 sm:w-20 ${
                  thumbnailIndex === selectedIndex
                    ? "border-[var(--color-primary)]"
                    : "border-white/10 opacity-60 hover:opacity-100"
                }`}
                aria-label={`Open photo ${thumbnailIndex + 1}`}
              >
                <img
                  src={getOptimizedImageUrl(thumbnail.image, { width: 240, height: 160, crop: "fill" })}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </button>
            );
          })}
        </div>

        <p className="mt-3 text-xs uppercase tracking-[0.25em] text-white/60">
          {selectedIndex + 1} / {images.length}
        </p>
      </motion.div>
    </AnimatePresence>
  );
}

export default Lightbox;
