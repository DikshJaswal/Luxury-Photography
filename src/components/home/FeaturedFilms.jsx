import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";

import films from "../../data/filmsData";

function FeaturedFilms() {
  return (
    <Section className="pt-0">
      <SectionHeading
        badge="Featured Films"
        title="Love Stories Captured In Motion"
        description="Each film below is presented as a full-screen viewing moment, so the motion feels cinematic and uninterrupted."
      />

      <div className="space-y-12">
        {films.map((film, index) => (
          <motion.article
            key={film.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
            }}
            viewport={{ once: true }}
            className="overflow-hidden"
          >
            <div className="relative h-[100svh] overflow-hidden rounded-3xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              >
                <source src={film.video} type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
            </div>

            <div className="mx-auto mt-6 max-w-4xl px-1 sm:px-4">
              <h3 className="font-serif text-3xl text-white sm:text-4xl">
                {film.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  to="/portfolio/cinematic-films"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-medium text-black transition hover:scale-105"
                >
                  View Cinematic Film
                  <ArrowRight size={16} />
                </Link>

                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

export default FeaturedFilms;
