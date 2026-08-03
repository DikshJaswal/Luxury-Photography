import { useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import GalleryCard from "./GalleryCard";
import Lightbox from "./Lightbox";
import { getOptimizedImageUrl } from "../../utils/helpers";

function PhotoRow({ items, label, direction, onSelect }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    duration: 55,
  });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!emblaApi || isHovered || items.length < 2) return undefined;

    const interval = window.setInterval(() => {
      if (direction === "right") {
        emblaApi.scrollPrev();
      } else {
        emblaApi.scrollNext();
      }
    }, 5200);

    return () => window.clearInterval(interval);
  }, [direction, emblaApi, isHovered, items.length]);

  if (items.length === 0) return null;

  return (
    <div
      className="space-y-5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-4 px-1">
        <span className="h-px w-10 bg-[var(--color-primary)]" />
        <h2 className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--color-primary)] sm:text-base">
          {label}
        </h2>
        <span className="h-px flex-1 bg-white/10" />
      </div>

      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-5 sm:gap-7">
          {items.map(({ image, index }) => (
            <div
              key={image.id}
              className="min-w-[82%] sm:min-w-[48%] lg:min-w-[31.5%]"
            >
              <GalleryCard
                image={image}
                index={index}
                onClick={() => onSelect(index)}
                onImageLoad={() => {}}
                imageClassName="h-[280px] w-full object-contain sm:h-[360px] lg:h-[430px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GalleryGrid({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [orientations, setOrientations] = useState({});

  useEffect(() => {
    let cancelled = false;

    images.forEach((image) => {
      const probe = new Image();
      probe.onload = () => {
        if (cancelled) return;
        setOrientations((current) => ({
          ...current,
          [image.id]: probe.naturalWidth >= probe.naturalHeight ? "landscape" : "portrait",
        }));
      };
      probe.onerror = () => {
        if (cancelled) return;
        setOrientations((current) => ({ ...current, [image.id]: "landscape" }));
      };
      probe.src = getOptimizedImageUrl(image.image);
    });

    return () => {
      cancelled = true;
    };
  }, [images]);

  const rows = useMemo(() => {
    const landscape = images
      .map((image, index) => ({ image, index }))
      .filter(({ image }) => orientations[image.id] === "landscape");
    const portrait = images
      .map((image, index) => ({ image, index }))
      .filter(({ image }) => orientations[image.id] === "portrait");

    return [
      { items: landscape.filter((_, index) => index % 2 === 0), label: "Landscape Stories", direction: "left" },
      { items: portrait, label: "Portrait Stories", direction: "right" },
      { items: landscape.filter((_, index) => index % 2 === 1), label: "Landscape Stories", direction: "left" },
    ];
  }, [images, orientations]);

  if (!images || images.length === 0) {
    return (
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-serif text-3xl text-white">No images found.</h2>
          <p className="mt-4 text-neutral-400">This collection will be updated soon.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="overflow-hidden bg-[#0B0B0B] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl space-y-14 px-4 sm:px-6">
        {rows.map((row, rowIndex) => (
          <PhotoRow
            key={`${row.label}-${row.direction}-${rowIndex}`}
            items={row.items}
            label={row.label}
            direction={row.direction}
            onSelect={setSelectedIndex}
          />
        ))}
      </div>

      <Lightbox
        images={images}
        selectedIndex={selectedIndex}
        onSelect={setSelectedIndex}
        onClose={() => setSelectedIndex(null)}
      />
    </section>
  );
}

export default GalleryGrid;
