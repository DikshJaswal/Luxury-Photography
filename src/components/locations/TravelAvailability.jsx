import { Calendar, Globe2, Plane, Clock } from "lucide-react";

function TravelAvailability() {
  const features = [
    {
      icon: <Calendar size={24} />,
      title: "Limited Bookings",
      description:
        "To maintain a premium experience, only a limited number of shoots are accepted each year.",
    },
    {
      icon: <Plane size={24} />,
      title: "Worldwide Travel",
      description:
        "Available across India and international destinations with complete travel planning support.",
    },
    {
      icon: <Clock size={24} />,
      title: "Early Reservations",
      description:
        "Destination shoots are typically booked 6–12 months in advance to secure preferred dates.",
    },
    {
      icon: <Globe2 size={24} />,
      title: "Custom Travel Plans",
      description:
        "Every destination receives a personalized travel schedule tailored to your shoot timeline.",
    },
  ];

  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
            Availability
          </span>

          <h2 className="mt-6 font-serif text-4xl text-white md:text-6xl">
            Booking &
            <span className="text-[var(--color-primary)]">
              {" "}Travel Availability
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-neutral-400">
            Whether your celebration is in the mountains, by the ocean, or in a
            historic palace, every destination shoot receives complete
            attention from planning through final delivery.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-[var(--color-primary)]/40"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-black">
                {feature.icon}
              </div>

              <h3 className="mb-4 font-serif text-2xl text-white">
                {feature.title}
              </h3>

              <p className="leading-8 text-neutral-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TravelAvailability;
