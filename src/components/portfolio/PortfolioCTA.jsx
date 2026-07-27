import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Container from "../common/Container";
import Button from "../common/Button";

function PortfolioCTA() {
  return (
    <section className="pb-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 px-8 py-16 backdrop-blur-xl md:px-16"
        >
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-[var(--color-primary)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-primary)]">
              Let's Create Memories
            </span>

            <h2 className="mt-6 font-serif text-4xl leading-tight text-white md:text-5xl">
              Ready To Capture
              <br />
              Your Forever Story?
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-300">
              Every love story deserves to be documented with
              timeless elegance, authentic emotions, and cinematic
              artistry. Let's create memories you'll treasure for a
              lifetime.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/book">
                <Button>
                  Book Consultation
                </Button>
              </Link>

              <Link to="/contact">
                <Button variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default PortfolioCTA;