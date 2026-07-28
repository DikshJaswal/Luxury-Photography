import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

function BlogDetails() {
  return (
    <main className="bg-[#0B0B0B] text-white">
      <section className="relative h-[75vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury pre-wedding shoot"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-black/40 to-black/20" />

        <div className="absolute bottom-16 left-1/2 w-full max-w-7xl -translate-x-1/2 px-6 lg:px-10">
          <div className="mb-8 flex flex-wrap items-center gap-5">
            <Link
              to="/blog"
              className="inline-flex items-center gap-3 text-lg font-medium text-white/90 transition duration-300 hover:text-[var(--color-primary)]"
            >
              <ArrowLeft size={20} />
              Back to Journal
            </Link>

            <span className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-black">
              Pre-Wedding Guide
            </span>
          </div>

          <h1 className="mt-8 max-w-4xl font-serif text-5xl font-light leading-[1.05] md:text-6xl lg:text-7xl">
            Planning A Cinematic
            <br />
            Pre-Wedding Story
          </h1>

          <div className="mt-8 flex flex-wrap gap-8 text-neutral-300">
            <div className="flex items-center gap-2">
              <User size={17} />
              Luxe Photography
            </div>

            <div className="flex items-center gap-2">
              <Calendar size={17} />
              June 18, 2026
            </div>

            <div className="flex items-center gap-2">
              <Clock size={17} />
              6 min read
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <p className="font-serif text-2xl leading-[1.8] text-neutral-200 lg:text-3xl">
            A memorable pre-wedding shoot begins before the camera comes out:
            location, timing, styling, movement, and comfort all shape the final
            story.
          </p>

          <p className="mt-8 text-lg leading-9 text-neutral-400">
            This demo article shows the editorial layout for future SEO blog
            posts. Later, real entries can be connected from the admin panel,
            while the visual structure and reading experience stay the same.
          </p>

          <img
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2070&auto=format&fit=crop"
            alt="Couple portrait inspiration"
            className="my-20 h-[550px] w-full rounded-[36px] object-cover"
          />

          <h2 className="font-serif text-4xl font-light">
            Location, Light, And Movement
          </h2>

          <p className="mt-8 text-lg leading-9 text-neutral-400">
            The strongest galleries feel effortless because the planning is
            precise. Sunrise brings softness, sunset brings drama, and the right
            location gives every frame a sense of place.
          </p>

          <blockquote className="my-20 border-l-4 border-[var(--color-primary)] pl-8 font-serif text-3xl italic leading-relaxed text-white">
            &quot;A pre-wedding film should feel like the couple, not like a
            template.&quot;
          </blockquote>

          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
            alt="Cinematic couple shoot"
            className="my-20 h-[550px] w-full rounded-[36px] object-cover"
          />

          <h2 className="font-serif text-4xl font-light">
            A Story Ready For SEO
          </h2>

          <p className="mt-8 text-lg leading-9 text-neutral-400">
            Replace this demo content later with real location guides, shoot
            stories, BTS posts, and planning articles. The page is ready for a
            premium blog experience now.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-serif text-5xl font-light">
            Ready To Tell
            <span className="text-[var(--color-primary)]">
              {" "}Your Story?
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
            Let&apos;s create timeless pre-wedding photographs and films that
            feel true to you.
          </p>

          <Link
            to="/contact"
            className="mt-10 inline-flex items-center rounded-full bg-[var(--color-primary)] px-8 py-4 font-medium text-black transition hover:scale-105"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}

export default BlogDetails;
