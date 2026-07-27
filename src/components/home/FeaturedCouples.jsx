import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";

import couples from "../../data/couplesData";

function FeaturedCouples() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });

  return (
    <Section className="pt-16">
      <div className="mb-14">
        <SectionHeading
          badge="Featured Stories"
          title="Every Couple Has A Unique Story"
          description="A curated collection of our favourite celebrations."
        />
      </div>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="absolute -left-7t top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] lg:flex"
        >
          <FaArrowLeft />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="absolute -right-7 top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] lg:flex"
        >
          <FaArrowRight />
        </button>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {couples.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="min-w-[90%] px-3 md:min-w-[48%] lg:min-w-[32%]"
              >
                <div className="group cursor-pointer overflow-hidden rounded-2xl">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="h-[520px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 w-full p-8">
                      <p className="mb-2 text-sm uppercase tracking-[0.35em] text-[var(--color-primary)]">
                        {story.location}
                      </p>

                      <h3 className="font-serif text-4xl text-white">
                        {story.title}
                      </h3>

                      <div className="mt-4 flex items-center gap-2 text-white transition-all duration-300 group-hover:text-[var(--color-primary)]">
                        <span>View Story</span>

                        <span className="transition-transform duration-300 group-hover:translate-x-2">
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default FeaturedCouples;