import { CalendarCheck, MapPin, MessageCircle, Send } from "lucide-react";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import { buildWhatsAppLink } from "../../utils/constants";

function AvailabilityForm() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const message = [
      "Hi, I want to check availability for a pre-wedding shoot with Rishikesh Prewed Studio.",
      `Name: ${data.get("name") || "-"}`,
      `Phone: ${data.get("phone") || "-"}`,
      `Preferred date: ${data.get("date") || "-"}`,
      `Location: ${data.get("location") || "-"}`,
      `Shoot style: ${data.get("style") || "-"}`,
    ].join("\n");

    window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
    event.currentTarget.reset();
  };

  return (
    <Section className="bg-black">
      <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          align="left"
          badge="Start Your Inquiry"
          title="Lock The Right Date Before It Goes"
          description="Share your date, location, and preferred shoot mood. We’ll confirm availability and continue the consultation on WhatsApp."
        />

        <form
          onSubmit={handleSubmit}
          className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 md:p-8"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <label className="space-y-2 text-sm text-neutral-300">
              Your Name
              <input
                name="name"
                required
                type="text"
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition focus:border-[var(--color-primary)]"
                placeholder="Your name"
              />
            </label>

            <label className="space-y-2 text-sm text-neutral-300">
              Phone Number
              <input
                name="phone"
                required
                type="tel"
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition focus:border-[var(--color-primary)]"
                placeholder="+91..."
              />
            </label>

            <label className="space-y-2 text-sm text-neutral-300">
              Preferred Date
              <div className="relative">
                <CalendarCheck
                  size={18}
                  className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[var(--color-primary)]"
                />
                <input
                  name="date"
                  required
                  type="date"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-12 py-4 text-white outline-none transition focus:border-[var(--color-primary)]"
                />
              </div>
            </label>

            <label className="space-y-2 text-sm text-neutral-300">
              Location
              <div className="relative">
                <MapPin
                  size={18}
                  className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[var(--color-primary)]"
                />
                <input
                  name="location"
                  required
                  type="text"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-12 py-4 text-white outline-none transition focus:border-[var(--color-primary)]"
                  placeholder="Shimla, Manali, Udaipur..."
                />
              </div>
            </label>
          </div>

          <label className="mt-5 block space-y-2 text-sm text-neutral-300">
            Shoot Style
            <select
              name="style"
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition focus:border-[var(--color-primary)]"
            >
              <option>Mountains</option>
              <option>Waterfalls</option>
              <option>River Side</option>
              <option>Luxury Resort</option>
              <option>Forest</option>
              <option>Sunrise / Sunset</option>
              <option>Drone + Cinematic Film</option>
            </select>
          </label>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-primary)] px-7 py-4 font-semibold text-black transition hover:-translate-y-0.5"
            >
              <Send size={18} />
              Send Inquiry on WhatsApp
            </button>

            <a
              href={buildWhatsAppLink("Hi, I want a free consultation for a pre-wedding shoot.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 px-7 py-4 font-medium text-white transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            >
              <MessageCircle size={18} />
              Get Free Consultation
            </a>
          </div>
        </form>
      </div>
    </Section>
  );
}

export default AvailabilityForm;
