import {
  CalendarCheck,
  Camera,
  CheckCircle2,
  ClipboardList,
  Cloud,
  Edit3,
  Eye,
  Images,
  MessageCircleMore,
  ShieldCheck,
} from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Submit Your Inquiry",
    description:
      "Once you contact us through WhatsApp or our website, we'll understand your requirements, preferred dates, budget, and shoot expectations.",
    icon: MessageCircleMore,
  },
  {
    id: "02",
    title: "Consultation & Planning",
    description:
      "A dedicated coordinator will help plan your shoot style, locations, outfits, makeup, props, timeline, weather backup, travel, and overall concept.",
    icon: ClipboardList,
  },
  {
    id: "03",
    title: "Confirm Your Booking",
    description:
      "After the advance payment, you'll receive your booking confirmation, shoot timeline, preparation checklist, team details, and contact information.",
    icon: CalendarCheck,
  },
  {
    id: "04",
    title: "Shoot Day",
    description:
      "Our photographer, cinematographer, drone operator where permitted, makeup artist if selected, and coordinator guide you through every pose and cinematic moment.",
    icon: Camera,
  },
  {
    id: "05",
    title: "Secure Data Backup",
    description:
      "Immediately after the shoot, all photos and videos are backed up securely so your memories are protected before editing begins.",
    icon: ShieldCheck,
  },
  {
    id: "06",
    title: "Professional Editing",
    description:
      "Our editing team selects the best photos, applies color grading, skin retouching, cinematic editing, music synchronization, and detailed quality review.",
    icon: Edit3,
  },
  {
    id: "07",
    title: "Preview & Feedback",
    description:
      "We'll share a preview of your edited work. If your package includes revisions, you can share your feedback before final delivery.",
    icon: Eye,
  },
  {
    id: "08",
    title: "Final Delivery",
    description:
      "After approval, you'll receive your professionally edited photos, cinematic film, Instagram reel, teaser if included, and online download link in high quality.",
    icon: Images,
  },
];

const reassurance = [
  "No confusion about the process",
  "Complete planning before the shoot",
  "Professional guidance throughout",
  "Transparent communication",
  "Secure backup of your memories",
  "Dedicated editing team",
  "Premium quality delivery",
  "Friendly support from start to finish",
];

function TravelProcess() {
  return (
    <section className="bg-[#0B0B0B] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-block rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
            Your Journey With Us
          </span>

          <h2 className="mt-6 font-serif text-4xl text-white md:text-6xl">
            From Inquiry To,
            <span className="text-[var(--color-primary)]"> Final Delivery</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
            Every detail is thoughtfully planned so your pre-wedding experience
            feels relaxed, personal, and beautifully organized.
          </p>
        </div>

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
                  <span className="font-serif text-4xl text-white/10">{step.id}</span>
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-white">{step.title}</h3>
                <p className="mt-5 leading-8 text-neutral-400">{step.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-16 max-w-5xl rounded-[32px] border border-white/10 bg-white/[0.04] p-8 md:p-12">
          <div className="flex items-center gap-4">
            <Cloud className="text-[var(--color-primary)]" size={28} />
            <h3 className="font-serif text-3xl text-white">What You&apos;ll Never Have To Worry About</h3>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {reassurance.map((item) => (
              <div key={item} className="flex items-center gap-3 text-neutral-300">
                <CheckCircle2 className="shrink-0 text-[var(--color-primary)]" size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TravelProcess;
