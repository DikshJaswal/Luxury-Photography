import { motion } from "framer-motion";
import { Calendar, MessageCircle, Star, Camera, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { COMPANY } from "../../utils/constants";

function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <img
        src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=80"
        alt="Luxury pre-wedding couple shoot"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-black" />

      <div className="absolute -left-20 top-16 h-56 w-56 rounded-full bg-[var(--color-primary)]/20 blur-[140px] sm:-left-32 sm:h-72 sm:w-72" />
      <div className="absolute -right-20 bottom-10 h-56 w-56 rounded-full bg-[var(--color-primary)]/10 blur-[140px] sm:-right-32 sm:h-72 sm:w-72" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 rounded-full border border-[var(--color-primary)]/40 bg-[var(--color-primary)]/10 px-5 py-2 text-sm uppercase tracking-[0.35em] text-[var(--color-primary)]"
        >
          Let's Create Something Timeless
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-4xl font-serif text-4xl leading-tight text-white sm:text-5xl md:text-7xl"
        >
          Your Love Story Deserves
          <br />
          <span className="text-[var(--color-primary)]">
            More Than Photographs
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 max-w-2xl text-base leading-8 text-neutral-300 sm:text-lg"
        >
          Every smile, every glance, every emotion deserves to be preserved
          beautifully. Let's turn your moments into memories you'll treasure
          forever.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col gap-5 sm:flex-row"
        >
          <Link
            to="/book"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-primary)] px-9 py-4 font-semibold text-black transition hover:scale-105"
          >
            <Calendar size={20} />
            Get Free Consultation
          </Link>

          <a
            href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hi, I would like to enquire about a pre-wedding shoot.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-9 py-4 text-white backdrop-blur-md transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
          >
            <MessageCircle size={20} />
            Chat on WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 grid w-full max-w-5xl grid-cols-1 gap-6 border-t border-white/10 pt-10 sm:grid-cols-2 md:mt-20 md:grid-cols-4 md:gap-8"
        >
          <div className="flex flex-col items-center">
            <Heart className="mb-3 text-[var(--color-primary)]" />
            <h3 className="text-3xl font-bold text-white">500+</h3>
            <p className="mt-2 text-neutral-400">Happy Couples</p>
          </div>

          <div className="flex flex-col items-center">
            <Camera className="mb-3 text-[var(--color-primary)]" />
            <h3 className="text-3xl font-bold text-white">1200+</h3>
            <p className="mt-2 text-neutral-400">Shoots Completed</p>
          </div>

          <div className="flex flex-col items-center">
            <Star className="mb-3 text-[var(--color-primary)]" />
            <h3 className="text-3xl font-bold text-white">5.0</h3>
            <p className="mt-2 text-neutral-400">Average Rating</p>
          </div>

          <div className="flex flex-col items-center">
            <Calendar className="mb-3 text-[var(--color-primary)]" />
            <h3 className="text-3xl font-bold text-white">8+</h3>
            <p className="mt-2 text-neutral-400">Years Experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FinalCTA;
