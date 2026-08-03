import {
  Camera,
  Film,
  Plane,
  Check,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

function PricingCards() {
  const packages = [
    {
      name: "Basic",
      price: "₹20,000",
      subtitle: "A complete essential pre-wedding experience",
      icon: <Camera size={28} />,
      featured: false,
      features: [
        "Cinematography",
        "HD Shoot Quality",
        "Candid Photography",
        "Professional Drone",
        "Six Selected Themes",
        "Location Charges",
        "Changing Room, Wooden Chair & Makeup Artist",
        "Long Tail Gown",
        "HD Video + 1 Cinematic Video (3–4 min)",
        "1 Teaser, 40 Candid Photos & 7 Countdowns",
        "Save the Date, 1 Instagram Reel & 10-Sheet Album",
      ],
    },
    {
      name: "Standard",
      price: "₹28,000",
      subtitle: "Our most popular 4K pre-wedding experience",
      icon: <Film size={28} />,
      featured: true,
      features: [
        "Cinematography",
        "4K Shoot Quality",
        "Candid Photography",
        "Professional Drone",
        "Six Selected Themes",
        "Location Charges",
        "Changing Room, Wooden Chair & Makeup Artist",
        "Long Tail Gown",
        "4K Video + 1 Cinematic Video (3–5 min)",
        "1 Teaser, 50 Candid Photos & 7 Countdowns",
        "Save the Date, 1 Instagram Reel & 12-Sheet Album",
      ],
    },
    {
      name: "Premium",
      price: "₹36,000",
      subtitle: "A premium 4K experience with extra reels",
      icon: <Plane size={28} />,
      featured: false,
      features: [
        "Cinematography",
        "4K Shoot Quality",
        "Candid Photography",
        "Professional Drone",
        "Six Selected Themes",
        "Location Charges",
        "Changing Room, Wooden Chair & Makeup Artist",
        "Long Tail Gown",
        "4K Video + 1 Cinematic Video (4–6 min)",
        "1 Teaser, 60 Candid Photos & 10 Countdowns",
        "Save the Date, 3 Instagram Reels & 12–15-Sheet Album",
      ],
    },
  ];

  return (
    <section className="bg-[#0B0B0B] py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="inline-block rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
            Signature Experiences
          </span>

          <h2 className="mt-6 font-serif text-4xl text-white md:text-6xl">
            Explore Our
            <span className="text-[var(--color-primary)]">
              {" "}Storytelling Styles
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
            These are starting points, never fixed packages. We tailor every
            shoot around your location, outfits, timeline, and creative vision.
          </p>

        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">

          {packages.map((pkg) => (

            <div
              key={pkg.name}
              className={`relative rounded-[32px] border p-10 transition duration-500 hover:-translate-y-2 ${
                pkg.featured
                  ? "border-[var(--color-primary)] bg-[var(--color-primary)]/10"
                  : "border-white/10 bg-white/5"
              }`}
            >

              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[var(--color-primary)] px-5 py-2 text-sm font-semibold text-black">
                  Most Popular
                </div>
              )}

              <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-black">
                {pkg.icon}
              </div>

              <h3 className="font-serif text-3xl text-white">
                {pkg.name}
              </h3>

              <p className="mt-3 text-neutral-400">
                {pkg.subtitle}
              </p>

              <p className="mt-6 font-serif text-4xl text-[var(--color-primary)]">
                {pkg.price}
              </p>

              <div className="my-10 h-px bg-white/10" />

              <ul className="space-y-5">

                {pkg.features.map((feature) => (

                  <li
                    key={feature}
                    className="flex items-start gap-3"
                  >
                    <Check
                      size={18}
                      className="mt-1 text-[var(--color-primary)]"
                    />

                    <span className="text-neutral-300">
                      {feature}
                    </span>
                  </li>

                ))}

              </ul>

              <Link
                to="/book"
                className="mt-10 inline-flex items-center gap-3 font-medium text-[var(--color-primary)] transition hover:gap-5"
              >
                Request Quote
                <ArrowRight size={18} />
              </Link>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default PricingCards;
