import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Section from "../components/common/Section";
import Button from "../components/common/Button";

function NotFound() {
  return (
    <Section className="flex min-h-screen items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-2xl text-center"
      >
        <span className="inline-block rounded-full border border-[var(--color-primary)] px-5 py-2 text-sm uppercase tracking-[0.25em] text-[var(--color-primary)]">
          Error 404
        </span>

        <h1 className="mt-8 font-serif text-7xl text-white md:text-9xl">
          404
        </h1>

        <h2 className="mt-6 font-serif text-3xl text-white md:text-5xl">
          Page Not Found
        </h2>

        <p className="mt-6 text-lg leading-8 text-neutral-400">
          The page you're looking for doesn't exist or may have been moved.
          Let&apos;s take you back to our beautiful pre-wedding stories.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>

          <Link to="/portfolio">
            <Button variant="secondary">
              View Portfolio
            </Button>
          </Link>
        </div>
      </motion.div>
    </Section>
  );
}

export default NotFound;
