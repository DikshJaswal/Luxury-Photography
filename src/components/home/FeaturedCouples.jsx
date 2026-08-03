import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import Lightbox from "../portfolio/Lightbox";
import { getOptimizedImageUrl } from "../../utils/helpers";

import couples from "../../data/couplesData";

function FeaturedCouples() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    if (!emblaApi) return undefined;

    const interval = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 3500);

    return () => window.clearInterval(interval);
  }, [emblaApi]);

  return (
    <>
      <Section className="pt-16 pb-14">
        <SectionHeading
          badge="Featured Stories"
          title="Every Couple Has A Unique Story"
          description="Explore our original pre-wedding stories in their natural portrait and landscape formats."
        />
      </Section>

      <section className="overflow-hidden bg-[#0B0B0B] pb-24">
        <div className="relative mx-auto max-w-7xl px-6">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-8 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] lg:flex"
            aria-label="Previous featured image"
          >
            <FaArrowLeft />
          </button>

          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-8 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] lg:flex"
            aria-label="Next featured image"
          >
            <FaArrowRight />
          </button>

          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-4">
              {couples.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className="group relative min-w-[86%] overflow-hidden rounded-3xl border border-white/10 bg-[#111] sm:min-w-[52%] lg:min-w-[32%]"
                  aria-label={`Open featured image ${index + 1}`}
                >
                  <img
                    src={getOptimizedImageUrl(image.image)}
                    alt={image.title}
                    loading={index < 3 ? "eager" : "lazy"}
                    className="h-[360px] w-full object-contain transition duration-700 group-hover:scale-105 sm:h-[460px] lg:h-[540px]"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Lightbox
        images={couples}
        selectedIndex={selectedIndex}
        onSelect={setSelectedIndex}
        onClose={() => setSelectedIndex(null)}
      />
    </>
  );
}

export default FeaturedCouples;
