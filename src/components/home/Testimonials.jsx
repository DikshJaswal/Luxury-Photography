import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";

import testimonials from "../../data/testimonialsData";

function Testimonials() {
  return (
    <Section className="bg-[#0b0b0b]">
      <SectionHeading
        badge="Testimonials"
        title="Loved By Couples Across India"
        description="Every story we capture is built on trust, creativity, and unforgettable memories."
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
            className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-500 hover:-translate-y-2 hover:border-[var(--color-primary)]"
          >
            <div className="mb-6 flex">
              {[...Array(testimonial.rating)].map((_, i) => (
                <FaStar
                  key={i}
                  className="mr-1 text-[var(--color-primary)]"
                />
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
                <h4 className="font-semibold text-white">
                  {testimonial.name}
                </h4>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export default Testimonials;