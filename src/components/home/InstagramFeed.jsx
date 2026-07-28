import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";

import instagramPosts from "../../data/instagramData";
import { COMPANY } from "../../utils/constants";

function InstagramFeed() {
  return (
    <Section className="bg-[#0b0b0b]">
      <SectionHeading
        badge="Instagram"
        title="Follow Our Journey"
        description="A glimpse of our latest stories, destination shoots, and behind-the-scenes moments."
      />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
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
            className="group relative overflow-hidden rounded-2xl"
          >
            <img
              src={post.image}
              alt="Instagram Post"
              className="aspect-square w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-500 group-hover:bg-black/50">
              <FaInstagram className="scale-50 text-4xl text-white opacity-0 transition duration-500 group-hover:scale-100 group-hover:opacity-100" />
            </div>
          </motion.a>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href={COMPANY.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full border border-[var(--color-primary)] px-8 py-4 text-[var(--color-primary)] transition hover:bg-[var(--color-primary)] hover:text-black"
        >
          <FaInstagram />
          Follow @luxepreweddings
        </a>
      </div>
    </Section>
  );
}

export default InstagramFeed;
