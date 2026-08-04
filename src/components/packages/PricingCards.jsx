import { Camera, Film, Plane, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getOptimizedImageUrl } from "../../utils/helpers";

const albumImages = {
  Basic:
    "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785738389/DSC09617_njxcpj.jpg",
  Standard:
    "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785738371/DSC05960_l446jk.jpg",
  Premium:
    "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785737981/DSC09663_aejlus.jpg",
};

const packages = [
  {
    name: "Basic",
    price: "₹20,000",
    subtitle: "A complete essential pre-wedding experience",
    icon: <Camera size={28} />,
    features: [
      "Cinematography",
      "HD Shoot Quality",
      "Candid Photography",
      "Professional Drone",
      "Six Selected Themes",
      "Location Charges",
      "Changing Room, Wooden Chair & Makeup Artist",
      "Long Tail Gown",
      "1 Cinematic Video (3–4 min)",
      "1 Teaser",
      "40 Candid Photos",
      "7 Countdowns",
      "1 Save the Date Reel",
      "1 Instagram Reel",
      "1 Album included",
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
      "4K Cinematic Video (3–5 min)",
      "1 Teaser",
      "50 Candid Photos",
      "7 Countdowns",
      "1 Save the Date Reel",
      "1 Instagram Reel",
      "1 Album included",
    ],
  },
  {
    name: "Premium",
    price: "₹36,000",
    subtitle: "A premium 4K experience with extra reels",
    icon: <Plane size={28} />,
    premiumHighlight: "Concept-Based Shoot Included",
    features: [
      "Cinematography",
      "4K Shoot Quality",
      "Candid Photography",
      "Professional Drone",
      "Six Selected Themes",
      "Location Charges",
      "Changing Room, Wooden Chair & Makeup Artist",
      "Long Tail Gown",
      "4K Cinematic Video (4–6 min)",
      "1 Teaser",
      "60 Candid Photos",
      "10 Countdowns",
      "1 Save the Date Reel",
      "3 Instagram Reels",
      "1 Album included",
    ],
  },
];

function PricingCards() {
  return (
    <section id="signature-experiences" className="bg-[#0B0B0B] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-block rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
            Signature Experiences
          </span>
          <h2 className="mx-auto mt-6 max-w-4xl text-center font-serif text-4xl text-balance text-white md:text-6xl">
            Explore Our <span className="text-[var(--color-primary)]">Storytelling Styles</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-center text-balance text-lg leading-8 text-neutral-400">
            These are starting points, never fixed packages. We tailor every shoot around your location, outfits, timeline, and creative vision.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex min-w-0 flex-col rounded-[32px] border p-6 transition duration-500 hover:-translate-y-2 sm:p-8 lg:p-10 ${
                pkg.featured
                  ? "border-[var(--color-primary)] bg-[var(--color-primary)]/10"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[var(--color-primary)] px-5 py-2 text-sm font-semibold text-black">
                  Most Popular
                </div>
              )}
              <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-black">
                {pkg.icon}
              </div>
              <h3 className="font-serif text-3xl text-white">{pkg.name}</h3>
              <p className="mt-3 text-neutral-400">{pkg.subtitle}</p>
              <p className="mt-6 font-serif text-4xl text-[var(--color-primary)]">{pkg.price}</p>

              {pkg.premiumHighlight && (
                <div className="mt-5 rounded-2xl border border-[var(--color-primary)]/50 bg-[var(--color-primary)]/15 px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-primary)]">
                  {pkg.premiumHighlight}
                </div>
              )}

              <div className="my-10 h-px bg-white/10" />

              <ul className="space-y-5">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-3 ${
                      feature.toLowerCase().includes("album")
                        ? "justify-between"
                        : ""
                    }`}
                  >
                    <Check size={18} className="mt-1 shrink-0 text-[var(--color-primary)]" />
                    <div className="flex min-w-0 flex-1 items-center justify-between gap-3">
                      <span
                        className={
                          feature.toLowerCase().includes("album")
                            ? "rounded-lg border border-[var(--color-primary)]/40 bg-[var(--color-primary)]/10 px-3 py-2 font-semibold text-[var(--color-primary)]"
                            : "text-neutral-300"
                        }
                      >
                        {feature}
                      </span>
                      {feature.toLowerCase().includes("album") && (
                        <img
                          src={getOptimizedImageUrl(albumImages[pkg.name], { width: 700, height: 500 })}
                          alt={`${pkg.name} album preview`}
                          loading="lazy"
                          decoding="async"
                          className="h-12 w-16 shrink-0 rounded-md border border-[var(--color-primary)]/40 object-cover"
                        />
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <Link
                to="/book"
                className="mt-8 inline-flex items-center gap-3 font-medium text-[var(--color-primary)] transition hover:gap-5"
              >
                Request Quote <ArrowRight size={18} />
              </Link>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingCards;
