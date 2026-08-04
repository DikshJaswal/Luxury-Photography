import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import Lightbox from "../portfolio/Lightbox";
import { getOptimizedImageUrl } from "../../utils/helpers";

import couples from "../../data/couplesData";

const featuredCouples = couples.filter((image) => image.id !== 10);

function PhotoRow({ images, onSelect, isPortrait }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    duration: 45,
  });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!emblaApi || isHovered) return undefined;

    const interval = window.setInterval(() => emblaApi.scrollNext(), 5000);
    return () => window.clearInterval(interval);
  }, [emblaApi, isHovered]);

  if (images.length === 0) return null;

  const cardWidth = isPortrait
    ? "min-w-[88%] sm:min-w-[56%] lg:min-w-[32%]"
    : "min-w-[88%] sm:min-w-[70%] lg:min-w-[48%]";
  const imageClassName = isPortrait
    ? "h-[300px] w-full object-cover sm:h-[400px] lg:h-[460px]"
    : "h-auto w-full object-contain";

  return (
    <div>
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          type="button"
          onClick={() => emblaApi?.scrollPrev()}
          className="absolute left-3 top-1/2 z-10 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/80 text-white shadow-xl backdrop-blur-md transition hover:scale-105 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] lg:flex"
          aria-label="Previous photo"
        >
          <FaArrowLeft size={21} />
        </button>
        <button
          type="button"
          onClick={() => emblaApi?.scrollNext()}
          className="absolute right-3 top-1/2 z-10 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/80 text-white shadow-xl backdrop-blur-md transition hover:scale-105 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] lg:flex"
          aria-label="Next photo"
        >
          <FaArrowRight size={21} />
        </button>

        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex items-start gap-8">
            {images.map(({ image, index }) => (
              <button
                key={image.id}
                type="button"
                onClick={() => onSelect(index)}
                className={`group ${cardWidth} overflow-hidden rounded-3xl border border-white/10 bg-[#111]`}
                aria-label={`Open photo ${index + 1}`}
              >
                <img
                  src={getOptimizedImageUrl(image.image, { width: 1000 })}
                  alt={image.title}
                  loading="lazy"
                  className={`${imageClassName} transition duration-700 group-hover:scale-105`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturedCouples() {
  const [orientations, setOrientations] = useState({});
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    let cancelled = false;

    featuredCouples.forEach((image) => {
      const probe = new Image();
      probe.onload = () => {
        if (cancelled) return;
        setOrientations((current) => ({
          ...current,
          [image.id]: probe.naturalWidth >= probe.naturalHeight ? "landscape" : "portrait",
        }));
      };
      probe.src = getOptimizedImageUrl(image.image, { width: 1000 });
    });

    return () => {
      cancelled = true;
    };
  }, []);

  const landscapeImages = featuredCouples
    .map((image, index) => ({ image, index }))
    .filter(({ image }) => orientations[image.id] === "landscape");
  const portraitImages = featuredCouples
    .map((image, index) => ({ image, index }))
    .filter(({ image }) => orientations[image.id] === "portrait");

  return (
    <>
      <Section className="pt-16 pb-14">
        <SectionHeading
          badge="Featured Stories"
          title="Every Couple Has A Unique Story"
          description="Explore our original pre-wedding stories and the moments that make each one unique."
        />
      </Section>

      <section className="overflow-hidden bg-[#0B0B0B] pb-24">
        <div className="mx-auto max-w-7xl space-y-14 px-6">
          <PhotoRow
            images={landscapeImages}
            onSelect={setSelectedIndex}
            isPortrait={false}
          />
          <PhotoRow
            images={portraitImages}
            onSelect={setSelectedIndex}
            isPortrait
          />
        </div>
      </section>

      <Lightbox
        images={featuredCouples}
        selectedIndex={selectedIndex}
        onSelect={setSelectedIndex}
        onClose={() => setSelectedIndex(null)}
      />
    </>
  );
}

export default FeaturedCouples;
