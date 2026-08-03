import {
  Camera,
  Plane,
  Film,
  BookOpen,
  Clock,
  Users,
} from "lucide-react";

function AddOns() {
  const addOns = [
    {
      icon: <Camera size={28} />,
      title: "Pre-Wedding Session",
      description:
        "Capture your chemistry with a beautifully planned engagement or pre-wedding shoot.",
    },
    {
      icon: <Film size={28} />,
      title: "Drone Coverage",
      description:
        "Add breathtaking aerial perspectives to your film and photography collection.",
    },
    {
      icon: <BookOpen size={28} />,
      title: "Luxury Photo Album",
      description:
        "Handcrafted premium albums designed to preserve your memories for generations.",
    },
    {
      icon: <Clock size={28} />,
      title: "Express Delivery",
      description:
        "Receive your edited photographs and highlight film with priority turnaround.",
    },
    {
      icon: <Users size={28} />,
      title: "Second Photographer",
      description:
        "Add a second creative for more angles, faster coverage, and richer behind-the-scenes moments.",
    },
    {
      icon: <Plane size={28} />,
      title: "Destination Travel",
      description:
        "Available across India with customized travel planning for destination shoots.",
    },
  ];

  return (
    <section className="bg-[#0B0B0B] py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="inline-block rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
            Optional Enhancements
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl text-center font-serif text-4xl text-balance text-white md:text-6xl">
            Elevate Your
            <span className="text-[var(--color-primary)]">
              {" "}Shoot Experience
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-center text-balance text-lg leading-8 text-neutral-400">
            Personalize your experience with premium services designed to make
            your pre-wedding story even more cinematic.
          </p>

        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {addOns.map((item) => (

            <div
              key={item.title}
              className="rounded-[30px] border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-[var(--color-primary)]/40"
            >

              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-black">
                {item.icon}
              </div>

              <h3 className="font-serif text-2xl text-white">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-neutral-400">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default AddOns;
