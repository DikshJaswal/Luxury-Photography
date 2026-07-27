import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Container from "../common/Container";
import Button from "../common/Button";

import heroData from "../../data/heroData";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

      <Container className="relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl"
        >
          <span className="mb-6 inline-block rounded-full border border-[var(--color-primary)]/40 bg-[var(--color-primary)]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
            {heroData.badge}
          </span>

          <h1 className="mb-8 text-6xl font-semibold leading-tight text-white md:text-8xl">
            {heroData.title}
          </h1>

          <p className="mb-12 max-w-2xl text-lg leading-9 text-neutral-300">
            {heroData.subtitle}
          </p>

          <div className="mt-12 flex items-center gap-8">
            <Link to="/portfolio">
              <Button>
                Explore Portfolio
              </Button>
            </Link>

            <Link
              to="/book"
              className="group flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-[var(--color-primary)]"
            >
              Book Consultation

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
          className="flex flex-col items-center"
        >
          <span className="mb-4 text-xs uppercase tracking-[0.4em] text-white/70">
            Scroll
          </span>

          <div className="h-12 w-[2px] bg-white/40" />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;