import {
  Camera,
  CalendarCheck,
  Globe2,
  Images,
  CreditCard,
  FileImage,
} from "lucide-react";

function FAQCategories() {
  const categories = [
    {
      title: "Booking",
      description: "Reservations & Availability",
      icon: CalendarCheck,
    },
    {
      title: "Photography",
      description: "Coverage & Style",
      icon: Camera,
    },
    {
      title: "Destination",
      description: "Travel Information",
      icon: Globe2,
    },
    {
      title: "Packages",
      description: "Quotes & Experiences",
      icon: CreditCard,
    },
    {
      title: "Gallery",
      description: "Delivery & Albums",
      icon: Images,
    },
    {
      title: "Editing",
      description: "Retouching Process",
      icon: FileImage,
    },
  ];

  return (
    <section className="bg-[#0B0B0B] py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs font-medium uppercase tracking-[0.35em] text-[var(--color-primary)]">
            Explore Topics
          </span>

          <h2 className="mt-6 font-serif text-4xl font-light text-white md:text-5xl lg:text-6xl">
            Browse By
            <span className="text-[var(--color-primary)]">
              {" "}Category
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
            Find answers faster by browsing the most common pre-wedding
            photography topics.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.title}
                className="group rounded-[28px] border border-white/10 bg-white/[0.04] p-8 text-left transition-all duration-300 hover:-translate-y-2 hover:border-[var(--color-primary)]/40 hover:bg-white/[0.06]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] transition-all duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-black">

                  <Icon size={30} />

                </div>

                <h3 className="mt-8 font-serif text-3xl font-light text-white transition-colors duration-300 group-hover:text-[var(--color-primary)]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-neutral-400">
                  {item.description}
                </p>

              </button>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default FAQCategories;
