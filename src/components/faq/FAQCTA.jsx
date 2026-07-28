import { ArrowRight, CalendarDays, Mail } from "lucide-react";
import { Link } from "react-router-dom";

function FAQCTA() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-28">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[var(--color-primary)]/10 blur-[160px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]" />

      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">

        <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] backdrop-blur-xl">

          <div className="grid items-center gap-12 px-8 py-16 md:px-14 lg:grid-cols-[1.4fr_0.9fr] lg:px-20">

            {/* Left */}

            <div>

              <span className="inline-flex rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs font-medium uppercase tracking-[0.35em] text-[var(--color-primary)]">
                Still Have Questions?
              </span>

              <h2 className="mt-8 max-w-3xl font-serif text-4xl font-light leading-tight text-white md:text-5xl lg:text-6xl">
                Let's Create Something
                <span className="text-[var(--color-primary)]">
                  {" "}Extraordinary
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
                Every pre-wedding shoot is beautifully unique. If you couldn't find the
                answer you were looking for, we'd love to learn more about your
                celebration and guide you through every step of the experience.
              </p>

              <div className="mt-12 flex flex-wrap gap-5">

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-[var(--color-primary)] px-8 py-4 font-medium text-black transition-all duration-300 hover:scale-105"
                >
                  Schedule Consultation
                  <ArrowRight size={18} />
                </Link>

                <a
                  href="mailto:hello@luxe.com"
                  className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-8 py-4 font-medium text-white transition-all duration-300 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                >
                  <Mail size={18} />
                  Email Us
                </a>

              </div>

            </div>

            {/* Right */}

            <div className="space-y-6">

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">

                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <CalendarDays size={28} />
                </div>

                <h3 className="font-serif text-2xl font-light text-white">
                  Free Consultation
                </h3>

                <p className="mt-4 leading-8 text-neutral-400">
                  Book a complimentary consultation where we'll discuss your
                  vision, timeline, venue, and photography experience.
                </p>

              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">

                <h4 className="text-sm uppercase tracking-[0.3em] text-[var(--color-primary)]">
                  Average Response Time
                </h4>

                <p className="mt-4 font-serif text-5xl font-light text-white">
                  &lt; 24 hrs
                </p>

                <p className="mt-4 leading-8 text-neutral-400">
                  We personally respond to every inquiry within one business
                  day because every celebration deserves thoughtful attention.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default FAQCTA;
