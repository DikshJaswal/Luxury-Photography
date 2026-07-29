import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";

import behindScenes from "../../data/btsData";

function BehindScenes() {
  const [featured, left, right] = behindScenes;

  return (
    <Section>
      <SectionHeading
        badge="Behind The Scenes"
        title="Creating Magic Beyond The Camera"
        description="Take a glimpse behind the lens and discover how every unforgettable story comes to life."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl"
        >
          <img
            src={featured.image}
            alt={featured.title}
            className="h-[320px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[480px] lg:h-[650px]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

          <div className="absolute bottom-0 p-6 sm:p-10">
            <h3 className="mb-4 font-serif text-3xl text-white sm:text-4xl">
              {featured.title}
            </h3>

            <p className="mb-8 max-w-lg text-sm leading-7 text-neutral-300 sm:text-base sm:leading-8">
              {featured.description}
            </p>

            <Link
              to="/about"
              className="group inline-flex items-center gap-2 text-[var(--color-primary)]"
            >
              Discover Our Story
              <ArrowRight className="transition group-hover:translate-x-1" />
            </Link>
          </div>

          <button className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition hover:scale-110 sm:h-20 sm:w-20">
            <Play className="ml-1 text-white" size={22} />
          </button>
        </motion.div>

        <div className="flex flex-col gap-8">
          {[left, right].map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              className="overflow-hidden rounded-3xl"
            >
              <img
                src={item.image}
                alt=""
                className="h-[220px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[260px] lg:h-[310px]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default BehindScenes;
