import { Camera, Image, Users } from "lucide-react";

function BehindTheScenes() {
  const highlights = [
    {
      icon: Camera,
      title: "Creative Direction",
      description:
        "Thoughtfully guiding every frame while allowing genuine emotions to unfold naturally.",
    },
    {
      icon: Users,
      title: "Working Together",
      description:
        "Collaborating around styling, locations, movement, and timing to create a stress-free experience.",
    },
    {
      icon: Image,
      title: "Crafting Every Image",
      description:
        "Each photograph is individually refined with timeless editing and meticulous attention to detail.",
    },
  ];

  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="inline-block rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
            Behind The Scenes
          </span>

          <h2 className="mt-6 font-serif text-4xl text-white md:text-6xl">
            Where Every
            <span className="text-[var(--color-primary)]">
              {" "}Story Begins
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
            Beautiful photographs do not happen by chance. Every shoot is
            approached with preparation, creativity, and a calm presence that
            allows moments to unfold naturally.
          </p>

        </div>

        {/* Images */}

        <div className="grid gap-6 lg:grid-cols-3">

          {/* Large Image */}

          <div className="lg:col-span-2">
            <img
              src="https://res.cloudinary.com/drlcnp9vf/image/upload/v1785401820/about-03.jpg_pmjgtv.jpg"
              alt="Photographer at work"
              className="h-[550px] w-full rounded-[32px] object-cover transition duration-500 hover:scale-[1.02]"
            />
          </div>

          {/* Right Images */}

          <div className="space-y-6">

            <img
              src="https://res.cloudinary.com/drlcnp9vf/image/upload/v1785401822/about-02.jpg_dddhol.jpg"
              alt="Pre-wedding details"
              className="h-[262px] w-full rounded-[28px] object-cover transition duration-500 hover:scale-[1.02]"
            />

            <img
              src="https://res.cloudinary.com/drlcnp9vf/image/upload/v1785401805/about-01.jpg_d7dibu.jpg"
              alt="Bride and groom"
              className="h-[262px] w-full rounded-[28px] object-cover transition duration-500 hover:scale-[1.02]"
            />

          </div>

        </div>

        {/* Features */}

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[28px] border border-white/10 bg-white/5 p-8 transition duration-300 hover:border-[var(--color-primary)]/40 hover:bg-white/10"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-black">
                  <Icon size={28} />
                </div>

                <h3 className="mt-8 font-serif text-2xl text-white">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-neutral-400">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default BehindTheScenes;
