import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";

import instagramData from "../../data/instagramData";

function InstagramGallery() {
  return (
    <Section>
      <SectionHeading
        badge="Instagram"
        title="Behind Every Frame"
        description="A glimpse into our latest weddings, celebrations, and unforgettable moments."
      />

      <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
        {instagramData.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl"
          >
            <img
              src={photo.image}
              alt="Instagram"
              className="h-[340px] w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-500 group-hover:bg-black/40">
              <FaInstagram className="translate-y-5 text-4xl text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button variant="primary">
          Follow on Instagram
        </Button>
      </div>
    </Section>
  );
}

export default InstagramGallery;