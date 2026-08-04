import { Camera, Heart, Sparkles } from "lucide-react";
import { getOptimizedImageUrl } from "../../utils/helpers";

function StorySection() {
  return (
    <section className="bg-[#0B0B0B] py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Image */}
        <div className="relative">

          <img
            src={getOptimizedImageUrl("https://res.cloudinary.com/drlcnp9vf/image/upload/v1785401822/about-02.jpg_dddhol.jpg", { width: 1200, height: 900 })}
            alt="Pre-wedding photographer"
            loading="lazy"
            decoding="async"
            className="h-[650px] w-full rounded-[32px] object-cover"
          />

          <div className="absolute -bottom-8 -right-8 hidden rounded-3xl border border-white/10 bg-black/80 p-8 backdrop-blur-lg lg:block">
            <h3 className="font-serif text-5xl text-[var(--color-primary)]">
              6
            </h3>

            <p className="mt-2 text-sm uppercase tracking-[0.3em] text-neutral-400">
              Theme Options
            </p>
          </div>

        </div>

        {/* Content */}
        <div>

          <span className="inline-block rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
            Our Story
          </span>

          <h2 className="mt-6 font-serif text-4xl leading-tight text-white md:text-6xl">
            Photography That
            <span className="text-[var(--color-primary)]">
              {" "}Feels Personal
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-neutral-400">
            We believe pre-wedding photography is about much more than
            beautiful portraits. It is about preserving the quiet smiles,
            playful movement, styling details, and fleeting moments that become
            lifelong memories.
          </p>

          <p className="mt-6 text-lg leading-8 text-neutral-400">
            Every shoot is approached with fresh eyes, genuine curiosity, and
            an unwavering commitment to telling your story authentically. Rather
            than simply posing you, we create timeless imagery that lets you
            relive the feeling of this season for years to come.
          </p>

          {/* Highlights */}

          <div className="mt-12 space-y-8">

            <div className="flex gap-5">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-primary)] text-black">
                <Camera size={24} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Documentary Approach
                </h3>

                <p className="mt-2 leading-7 text-neutral-400">
                  Natural storytelling with genuine emotions captured as they
                  unfold.
                </p>
              </div>

            </div>

            <div className="flex gap-5">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-primary)] text-black">
                <Heart size={24} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Human Connection
                </h3>

                <p className="mt-2 leading-7 text-neutral-400">
                  Building trust with every couple so every photograph feels
                  effortless and genuine.
                </p>
              </div>

            </div>

            <div className="flex gap-5">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-primary)] text-black">
                <Sparkles size={24} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Timeless Editing
                </h3>

                <p className="mt-2 leading-7 text-neutral-400">
                  Elegant colors and refined editing that remain beautiful for
                  decades, never driven by temporary trends.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default StorySection;
