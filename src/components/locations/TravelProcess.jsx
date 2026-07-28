import {
  MessageCircleMore,
  Plane,
  Camera,
  Images,
} from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Share Your Vision",
    description:
      "Tell us about your dream shoot, preferred destination, and the moments you want us to preserve forever.",
    icon: MessageCircleMore,
  },
  {
    id: "02",
    title: "Planning & Consultation",
    description:
      "We discuss timelines, locations, lighting, travel logistics, and every creative detail before your celebration.",
    icon: Plane,
  },
  {
    id: "03",
    title: "Shoot Day Coverage",
    description:
      "Our team captures every emotion with cinematic storytelling, candid moments, portraits, and aerial perspectives.",
    icon: Camera,
  },
  {
    id: "04",
    title: "Editing & Delivery",
    description:
      "Each photograph is carefully edited and delivered in a beautifully curated gallery that tells your complete story.",
    icon: Images,
  },
];

function TravelProcess() {
  return (
    <section className="bg-[#0B0B0B] py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="inline-block rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
            Our Process
          </span>

          <h2 className="mt-6 font-serif text-4xl text-white md:text-6xl">
            Your Journey,
            <span className="text-[var(--color-primary)]">
              {" "}
              Beautifully Planned
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
            From the first conversation to the final gallery delivery,
            every step is thoughtfully designed to give you a seamless,
            stress-free, and unforgettable experience.
          </p>

        </div>

        {/* Timeline */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.id}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[var(--color-primary)]/40"
              >
                <div className="flex items-center justify-between">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    <Icon size={30} />
                  </div>

                  <span className="font-serif text-4xl text-white/10">
                    {step.id}
                  </span>

                </div>

                <h3 className="mt-8 text-2xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-5 leading-8 text-neutral-400">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default TravelProcess;
