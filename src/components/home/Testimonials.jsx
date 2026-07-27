import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";

import testimonials from "../../data/testimonialsData";

function Testimonials() {
  return (
    <Section>
      <SectionHeading
        badge="Testimonials"
        title="Kind Words From Our Couples"
        description="Nothing means more to us than preserving memories that couples will treasure forever."
      />

      <div className="grid gap-8 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-[var(--color-primary)]"
          >
            <div className="mb-6 flex gap-1 text-[var(--color-primary)]">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <p className="mb-8 leading-8 text-neutral-300">
              "{testimonial.review}"
            </p>

            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="h-16 w-16 rounded-full object-cover"
              />

              <div>
                <h3 className="font-serif text-2xl text-white">
                  {testimonial.name}
                </h3>

                <p className="mt-1 text-sm uppercase tracking-[0.25em] text-neutral-500">
                  {testimonial.location}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export default Testimonials;