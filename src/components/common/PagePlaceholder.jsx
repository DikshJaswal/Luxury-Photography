import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Button from "./Button";

function PagePlaceholder({
  badge,
  title,
  description,
  buttonText = "Back to Home",
  buttonLink = "/",
}) {
  return (
    <div className="flex min-h-[calc(100vh-72px)] items-center justify-center px-6 pt-[72px]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-3xl text-center"
      >
        <span className="inline-block rounded-full border border-[var(--color-primary)] px-5 py-2 text-sm uppercase tracking-[0.25em] text-[var(--color-primary)]">
          {badge}
        </span>

        <h1 className="mt-8 font-serif text-5xl text-white md:text-7xl">
          {title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-neutral-400">
          {description}
        </p>

        <div className="mt-10">
          <Link to={buttonLink}>
            <Button>{buttonText}</Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default PagePlaceholder;