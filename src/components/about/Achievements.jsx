import {
  Camera,
  Heart,
  Globe,
  Award,
} from "lucide-react";

function Achievements() {
  const stats = [
    {
      icon: Camera,
      number: "3",
      label: "Packages",
      description:
        "Beautiful pre-wedding stories documented with authenticity and timeless elegance.",
    },
    {
      icon: Heart,
      number: "6",
      label: "Theme Options",
      description:
        "Couples who trusted us to turn their story into cinematic portraits and films.",
    },
    {
      icon: Globe,
      number: "4K",
      label: "Video Options",
      description:
        "From intimate local sessions to luxurious destination shoots across breathtaking locations.",
    },
    {
      icon: Award,
      number: "10%",
      label: "Booking Advance",
      description:
        "Choose the package, themes, and video format that best fit your story.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24">

      {/* Background */}

      <div className="absolute inset-0">

        <img
          src="https://res.cloudinary.com/drlcnp9vf/image/upload/v1785401820/about-03.jpg_pmjgtv.jpg"
          alt="Luxury pre-wedding shoot"
          className="h-full w-full object-cover brightness-90 contrast-110"
        />

        <div className="absolute inset-0 bg-black/70" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="inline-block rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
            Trusted By Couples
          </span>

          <h2 className="mt-6 font-serif text-4xl text-white md:text-6xl">
            A Journey Built On
            <span className="text-[var(--color-primary)]">
              {" "}Passion & Trust
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-300">
            Every couple has strengthened our commitment to creating timeless
            imagery they will cherish for generations.
          </p>

        </div>

        {/* Statistics */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="group rounded-[30px] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-[var(--color-primary)]/50 hover:bg-white/10"
              >
                <div className="mx-auto flex h-18 w-18 items-center justify-center rounded-full bg-[var(--color-primary)] text-black transition duration-300 group-hover:scale-110">
                  <Icon size={32} />
                </div>

                <h3 className="mt-8 font-serif text-5xl text-[var(--color-primary)]">
                  {item.number}
                </h3>

                <h4 className="mt-3 text-xl font-semibold text-white">
                  {item.label}
                </h4>

                <p className="mt-5 leading-7 text-neutral-300">
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

export default Achievements;
