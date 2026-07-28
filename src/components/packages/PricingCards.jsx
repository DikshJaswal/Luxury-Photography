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
      name: "Essential",
      subtitle: "Perfect for intimate love stories",
      icon: <Camera size={28} />,
      featured: false,
      features: [
        "6 Hours Coverage",
        "300+ Edited Images",
        "Private Online Gallery",
        "High-Resolution Downloads",
        "Sneak Peek Within 72 Hours",
      ],
    },
    {
      name: "Signature",
      subtitle: "Our most loved cinematic experience",
      icon: <Film size={28} />,
      featured: true,
      features: [
        "10 Hours Coverage",
        "700+ Edited Images",
        "Cinematic Highlight Film",
        "Drone Coverage",
        "Luxury Online Gallery",
        "Premium Photo Album",
        "Priority Editing",
      ],
    },
    {
      name: "Royal",
      subtitle: "Luxury destination shoot experience",
      icon: <Plane size={28} />,
      featured: false,
      features: [
        "Multi-Day Coverage",
        "Unlimited Edited Images",
        "Cinematic Highlight Film",
        "Drone Coverage",
        "Pre-Wedding Session",
        "Luxury Album",
        "Dedicated Photographer Team",
        "Travel Included",
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
                to="/contact"
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
