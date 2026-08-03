import { CalendarDays, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { buildWhatsAppLink } from "../../utils/constants";

function PortfolioCTA() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#141414] to-[#0B0B0B]" />

      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <span className="rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
          Ready To Begin?
        </span>

        <h2 className="mx-auto mt-8 max-w-4xl text-center font-serif text-5xl leading-tight text-balance text-white md:text-6xl">
          Let's Turn Your Story Into
          <span className="block text-[var(--color-primary)]">
            Timeless Memories
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-center text-balance text-lg leading-8 text-neutral-400">
          Whether it's a mountain escape, luxury destination shoot, or a
          cinematic pre-wedding film, we'd love to capture your journey.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
          <Link
            to="/book"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-primary)] px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            <CalendarDays size={20} />
            Get Free Consultation
          </Link>

          <a
            href={buildWhatsAppLink("Hi, I loved your portfolio and want to plan a pre-wedding shoot.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 px-8 py-4 text-white transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
          >
            <MessageCircle size={20} />
            WhatsApp Us
          </a>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-10 text-sm uppercase tracking-[0.25em] text-neutral-500">
          <span>Rishikesh Based</span>
          <span>Destination Shoots</span>
          <span>By Appointment</span>
          <span>Custom Packages</span>
        </div>
      </div>
    </section>
  );
}

export default PortfolioCTA;
