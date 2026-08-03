import { motion } from "framer-motion";
import { FaCamera, FaVideo, FaHeart, FaImage, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";

const features = [
  {
    icon: <FaCamera />,
    title: "Candid Photography",
    description:
      "Real chemistry captured naturally with gentle direction and space to move.",
  },
  {
    icon: <FaVideo />,
    title: "Cinematic Films",
    description:
      "Cinematic pre-wedding films crafted with emotion, movement, and timeless visuals.",
  },
  {
    icon: <FaHeart />,
    title: "Personal Experience",
    description:
      "We work closely with every couple to tell their unique love story.",
  },
  {
    icon: <FaImage />,
    title: "Premium Editing",
    description:
      "Every image is professionally edited while preserving natural colors.",
  },
  {
    icon: <FaClock />,
    title: "Fast Delivery",
    description:
      "Receive your memories through a beautiful online gallery on time.",
  },
];

function WhyChooseUs() {
  return (
    <Section>
      <SectionHeading
        badge="Why Choose Us"
        title="More Than Photography"
        description="We plan cinematic pre-wedding stories with location guidance, creative direction, and honest emotion."
      />

      <div className="grid items-center gap-16 lg:grid-cols-2">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img
            src="https://res.cloudinary.com/drlcnp9vf/image/upload/v1785755244/new_kjeqld.jpg"
            alt="Couple during a pre-wedding shoot"
            className="h-[700px] w-full rounded-2xl object-cover"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                className="flex items-start gap-5"
              >
                <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)] text-black text-lg">
                  {feature.icon}
                </div>

                <div>
                  <h3 className="mb-2 text-2xl font-serif text-white">
                    {feature.title}
                  </h3>

                  <p className="leading-7 text-neutral-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}

            <Link to="/book">
                <Button variant="primary">
                    Get Free Consultation
                </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

export default WhyChooseUs;
