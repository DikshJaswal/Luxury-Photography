import { motion } from "framer-motion";
import { ChevronRight, Mouse } from "lucide-react";
import { Link } from "react-router-dom";

function PortfolioHero({
  title = "Our Portfolio",
  description = "Explore signature pre-wedding stories captured across breathtaking destinations. Every gallery turns a unique love story into timeless imagery and cinematic storytelling.",
  image = "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=80",
}) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0B0B0B]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-6 pt-28">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-neutral-300"
          >
            <Link
              to="/"
              className="transition hover:text-[var(--color-primary)]"
            >
              Home
            </Link>

            <ChevronRight size={14} />

            <Link
              to="/portfolio"
              className="transition hover:text-[var(--color-primary)]"
            >
              Portfolio
            </Link>

            {title !== "Our Portfolio" && (
              <>
                <ChevronRight size={14} />

                <span className="text-[var(--color-primary)]">{title}</span>
              </>
            )}
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="font-serif text-5xl leading-tight text-white md:text-7xl"
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="mt-8 max-w-2xl text-lg leading-8 text-neutral-300"
          >
            {description}
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.7,
            }}
            className="mt-14 grid max-w-xl grid-cols-3 gap-8"
          >
            <div>
              <h3 className="text-4xl font-bold text-[var(--color-primary)]">
                500+
              </h3>

              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-neutral-400">
                Pre-Wedding Shoots
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[var(--color-primary)]">
                50+
              </h3>

              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-neutral-400">
                Destinations
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[var(--color-primary)]">
                8+
              </h3>

              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-neutral-400">
                Years
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3 text-neutral-300">
          <Mouse className="animate-bounce" size={26} />

          <span className="text-xs uppercase tracking-[0.3em]">
            Scroll
          </span>
        </div>
      </motion.div>
    </section>
  );
}

export default PortfolioHero;
