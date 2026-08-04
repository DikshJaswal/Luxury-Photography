import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";

import instagramPosts from "../../data/instagramData";
import { COMPANY } from "../../utils/constants";
import { getOptimizedImageUrl } from "../../utils/helpers";
import useHorizontalWheel from "../../hooks/useHorizontalWheel";

function InstagramFeed() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });
  const [isHovered, setIsHovered] = useState(false);
  const viewportRef = useRef(null);

  useHorizontalWheel(viewportRef, emblaApi);

  useEffect(() => {
    if (!emblaApi || isHovered) return undefined;

    const interval = window.setInterval(() => emblaApi.scrollNext(), 4200);
    return () => window.clearInterval(interval);
  }, [emblaApi, isHovered]);

  return (
    <Section className="bg-[#0b0b0b]">
      <SectionHeading
        badge="Instagram"
        title="Follow Our Journey"
        description="A glimpse of our latest stories, destination shoots, and behind-the-scenes moments."
      />

      <div
        ref={(node) => { viewportRef.current = node; emblaRef(node); }}
        className="overflow-hidden sm:overflow-visible"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex gap-4 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={COMPANY.instagram}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="group relative min-w-[78%] overflow-hidden rounded-2xl sm:min-w-0"
            >
            {post.video ? (
              <video
                src={post.video}
                muted
                loop
                autoPlay
                playsInline
                className="aspect-square w-full object-cover transition duration-700 group-hover:scale-110"
              />
            ) : (
              <img
                  src={getOptimizedImageUrl(post.image, { width: 900 })}
                alt="Instagram Post"
                loading="lazy"
                decoding="async"
                className="aspect-square w-full object-cover transition duration-700 group-hover:scale-110"
              />
            )}

            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-500 group-hover:bg-black/50">
              <FaInstagram className="scale-50 text-4xl text-white opacity-0 transition duration-500 group-hover:scale-100 group-hover:opacity-100" />
            </div>
            </motion.a>
          ))}
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href={COMPANY.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full border border-[var(--color-primary)] px-6 py-3.5 text-sm text-[var(--color-primary)] transition hover:bg-[var(--color-primary)] hover:text-black sm:px-8 sm:py-4 sm:text-base"
        >
          <FaInstagram />
          Follow @rishikesh.prewed.studio
        </a>
      </div>
    </Section>
  );
}

export default InstagramFeed;
