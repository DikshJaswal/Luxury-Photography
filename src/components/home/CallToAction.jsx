import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Section from "../common/Section";
import Button from "../common/Button";

function CallToAction() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-[36px]"
      >
        {/* Background */}
        <img
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1800&q=80"
          alt="Wedding"
          className="h-[650px] w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/70" />

        {/* Gold Glow */}
        <div className="absolute -right-32 top-1/2 h-96 w-96 rounded-full bg-[var(--color-primary)]/20 blur-[120px]" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-3xl rounded-3xl border border-white/10 bg-black/25 p-10 text-center backdrop-blur-md lg:p-14">
            <span className="inline-block rounded-full border border-[var(--color-primary)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-primary)]">
              Let's Create Memories
            </span>

            <h2 className="mt-8 font-serif text-5xl leading-tight text-white lg:text-7xl">
              Your Story Deserves
              <br />
              To Be Remembered Forever
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-300">
              From intimate ceremonies to luxurious destination weddings,
              we create timeless photographs and cinematic films that your
              family will treasure for generations.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row">
              <Link to="/book">
                <Button variant="primary">
                  Book Consultation
                </Button>
              </Link>

              <Link to="/portfolio">
                <Button variant="secondary">
                  View Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

export default CallToAction;