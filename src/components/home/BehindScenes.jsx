import { motion } from "framer-motion";

import Section from "../common/Section";

import behindScenes from "../../data/btsData";

function BehindScenes() {
  const [featured, left, right] = behindScenes;

  return (
    <Section>
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
            loading="lazy"
            decoding="async"
            className="h-[320px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[480px] lg:h-[650px]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
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
                loading="lazy"
                decoding="async"
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
