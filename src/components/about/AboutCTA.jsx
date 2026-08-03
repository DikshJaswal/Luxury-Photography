import { ArrowRight, CalendarHeart } from "lucide-react";
import { Link } from "react-router-dom";

function AboutCTA() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Background */}

      <div className="absolute inset-0">

        <img
          src="https://res.cloudinary.com/drlcnp9vf/image/upload/v1785401805/about-01.jpg_d7dibu.jpg"
          alt="Luxury pre-wedding couple"
          className="h-full w-full object-cover brightness-90 contrast-110"
        />

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/40" />

      </div>

      {/* Content */}

      <div className="relative mx-auto max-w-5xl px-6 text-center">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-primary)] text-black">
          <CalendarHeart size={36} />
        </div>

        <span className="mt-8 inline-block rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
          Let's Create Together
        </span>

        <h2 className="mx-auto max-w-4xl text-center font-serif text-4xl leading-tight text-balance text-white md:text-6xl">
          Your Story Deserves
          <span className="text-[var(--color-primary)]">
            {" "}To Be Remembered Forever
          </span>
        </h2>

        <p className="mx-auto max-w-3xl text-center text-balance text-lg leading-8 text-neutral-300">
          Every couple is unique, and we&apos;d be honored to shape your story
          with timeless photography, cinematic films, thoughtful planning, and
          locations that feel made for you.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

          <Link
            to="/book"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-primary)] px-8 py-4 font-medium text-black transition duration-300 hover:scale-105"
          >
            Get Free Consultation
            <ArrowRight size={18} />
          </Link>

          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 font-medium text-white transition duration-300 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
          >
            Explore Portfolio
          </Link>

        </div>

      </div>

    </section>
  );
}

export default AboutCTA;
