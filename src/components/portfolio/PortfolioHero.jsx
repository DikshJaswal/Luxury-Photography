import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Container from "../common/Container";
import Button from "../common/Button";

function PortfolioHero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex rounded-full border border-[var(--color-primary)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-primary)]"
          >
            Portfolio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-8 font-serif text-5xl leading-tight text-white md:text-7xl"
          >
            Every Frame Holds
            <br />
            A Beautiful Story
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-300"
          >
            From breathtaking mountain landscapes to luxurious destination
            weddings, explore our carefully curated collection of timeless love
            stories captured with elegance, emotion, and cinematic artistry.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-10"
          >
            <Link to="/book">
              <Button>Book Consultation</Button>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default PortfolioHero;