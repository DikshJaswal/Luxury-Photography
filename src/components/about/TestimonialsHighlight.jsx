import { Star } from "lucide-react";

function TestimonialsHighlight() {
  const testimonials = [
    {
      review:
        "From the very first meeting, we knew we were in the best hands. Every photograph feels emotional, elegant, and timeless.",
    },
    {
      review:
        "The entire experience was effortless. We never felt uncomfortable in front of the camera, yet every moment was captured beautifully.",
    },
    {
      review:
        "The attention to detail, calm presence, and storytelling are unmatched. These are not just photographs, they are memories we will treasure forever.",
    },
  ];

  return (
    <section className="bg-[#0B0B0B] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-block rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
            Kind Words
          </span>

          <h2 className="mt-6 font-serif text-4xl text-white md:text-6xl">
            Loved By
            <span className="text-[var(--color-primary)]">
              {" "}
              Couples Worldwide
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
            Every review represents a story, a relationship, and a moment of
            trust. These words inspire us to keep creating timeless memories
            for every couple we meet.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-10 transition-all duration-500 hover:-translate-y-2 hover:border-[var(--color-primary)]/40 hover:bg-white/10"
            >
              {/* Quote */}
              <div className="absolute right-6 top-2 font-serif text-[110px] leading-none text-[var(--color-primary)]/10">
                &quot;
              </div>

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    size={18}
                    className="fill-[var(--color-primary)] text-[var(--color-primary)]"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="relative mt-8 text-lg leading-8 text-neutral-300">
                {testimonial.review}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Rating */}
        <div className="mt-20 text-center">
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={22}
                className="fill-[var(--color-primary)] text-[var(--color-primary)]"
              />
            ))}
          </div>

          <h3 className="mt-6 font-serif text-3xl text-white">
            Rated 5.0 by Couples
          </h3>

          <p className="mt-4 text-neutral-400">
            Trusted for luxury pre-wedding shoots, destination stories, and
            timeless storytelling.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsHighlight;