import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";

import films from "../../data/filmsData";

function FeaturedFilms() {
  return (
    <Section className="pt-0">
      <SectionHeading
        badge="Featured Films"
        title="Love Stories Captured In Motion"
        description="Experience wedding moments through beautifully crafted cinematic films."
      />

      <div className="grid gap-8 md:grid-cols-2">
        {films.map((film, index) => (
          <motion.div
            key={film.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
              >
                <source src={film.video} type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition duration-300 group-hover:scale-110">
                  <FaPlay className="ml-1 text-2xl text-white" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-8">
                <p className="mb-2 text-sm uppercase tracking-[0.3em] text-[var(--color-primary)]">
                  {film.location}
                </p>

                <h3 className="font-serif text-4xl text-white">
                  {film.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export default FeaturedFilms;