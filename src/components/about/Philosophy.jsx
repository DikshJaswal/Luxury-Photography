import {
  Heart,
  Camera,
  Sparkles,
  Gem,
} from "lucide-react";

function Philosophy() {
  const philosophies = [
    {
      icon: Heart,
      title: "Authentic Moments",
      description:
        "The most meaningful photographs are never posed. We focus on genuine emotions, natural interactions, and moments that unfold beautifully on their own.",
    },
    {
      icon: Camera,
      title: "Attention to Detail",
      description:
        "From outfits and styling to locations and light, every carefully chosen element becomes part of your timeless story.",
    },
    {
      icon: Gem,
      title: "Luxury Experience",
      description:
        "Our process is designed to feel effortless, refined, and deeply personal, allowing you to remain fully present throughout your shoot.",
    },
    {
      icon: Sparkles,
      title: "Timeless Storytelling",
      description:
        "We create elegant imagery with natural tones and classic compositions that remain beautiful for generations, never following short-lived trends.",
    },
  ];

  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="inline-block rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
            Our Philosophy
          </span>

          <h2 className="mt-6 font-serif text-4xl text-white md:text-6xl">
            More Than
            <span className="text-[var(--color-primary)]">
              {" "}Photography
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
            Every photograph reflects our belief that pre-wedding stories
            deserve honest emotion, exceptional craftsmanship, and an
            unforgettable experience from beginning to end.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {philosophies.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-[28px] border border-white/10 bg-white/5 p-8 transition duration-500 hover:-translate-y-2 hover:border-[var(--color-primary)]/40 hover:bg-white/10"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-black transition duration-300 group-hover:scale-110">
                  <Icon size={30} />
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

export default Philosophy;
