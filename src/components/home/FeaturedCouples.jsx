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
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="absolute -left-7 top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] lg:flex"
        >
          <FaArrowLeft />
        </button>

        <button
          onClick={() => emblaApi?.scrollNext()}
          className="absolute -right-7 top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] lg:flex"
        >
          <FaArrowRight />
        </button>

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
                className="min-w-[92%] px-2 sm:min-w-[70%] sm:px-3 md:min-w-[48%] lg:min-w-[32%]"
              >
                <div className="group cursor-pointer overflow-hidden rounded-2xl">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-[420px] lg:h-[520px]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 w-full p-5 sm:p-8">
                      <p className="mb-2 text-xs uppercase tracking-[0.28em] text-[var(--color-primary)] sm:text-sm sm:tracking-[0.35em]">
                        {story.location}
                      </p>

                      <h3 className="font-serif text-3xl text-white sm:text-4xl">
                        {story.title}
                      </h3>

                      <div className="mt-4 flex items-center gap-2 text-sm text-white transition-all duration-300 group-hover:text-[var(--color-primary)] sm:text-base">
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
