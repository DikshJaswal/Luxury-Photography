import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

function FeaturedPost() {
  return (
    <section className="bg-[#0B0B0B] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}

        <div className="mb-16 text-center lg:mb-20">
          <span className="inline-flex rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs font-medium uppercase tracking-[0.35em] text-[var(--color-primary)]">
            Featured Story
          </span>

          <h2 className="mx-auto max-w-4xl text-center font-serif text-4xl font-light text-balance text-white md:text-5xl lg:text-6xl">
            Editor's{" "}
            <span className="text-[var(--color-primary)]">
              Choice
            </span>
          </h2>
        </div>

        {/* Featured Card */}

        <article className="group overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] transition-all duration-500 hover:border-[var(--color-primary)]/40 hover:shadow-[0_30px_80px_rgba(0,0,0,0.45)] lg:grid lg:grid-cols-[1.15fr_0.85fr]">

          {/* Image */}

          <div className="relative h-[420px] overflow-hidden lg:h-[650px]">
            <img
              src="https://res.cloudinary.com/drlcnp9vf/image/upload/v1785401962/blog-01.jpg_t6i22c.jpg"
              alt="Luxury Destination Pre-Wedding Shoot"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

            <div className="absolute bottom-8 left-8">
              <span className="rounded-full bg-[var(--color-primary)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-black">
                Destination Shoot
              </span>
            </div>
          </div>

          {/* Content */}

          <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">

            <div className="flex flex-wrap gap-6 text-sm text-neutral-400">

              <div className="flex items-center gap-2">
                <Calendar size={17} />
                June 18, 2026
              </div>

              <div className="flex items-center gap-2">
                <Clock size={17} />
                6 min read
              </div>

            </div>

            <h3 className="mt-8 font-serif text-3xl font-light leading-[1.15] text-white md:text-4xl lg:text-5xl">
              A Romantic Pre-Wedding
              <br />
              In The Hills Of Shimla
            </h3>

            <p className="mt-8 text-lg leading-8 text-neutral-400">
              Misty hills, golden light, flowing outfits, and quiet chemistry
              came together to create one unforgettable pre-wedding story.
              Discover how planning, location scouting, and cinematic direction
              shaped the final film and photographs.
            </p>

            <div className="mt-10">
              <Link
                to="/blog/shimla-pre-wedding-story"
                className="inline-flex items-center gap-3 rounded-full bg-[var(--color-primary)] px-8 py-4 font-medium text-black transition-all duration-300 hover:gap-5 hover:shadow-xl"
              >
                Read Full Story
                <ArrowRight size={18} />
              </Link>
            </div>

          </div>

        </article>
      </div>
    </section>
  );
}

export default FeaturedPost;
