import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function LocationsCTA() {
  return (
    <section className="bg-[#0B0B0B] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-[40px] border border-[var(--color-primary)]/20 bg-gradient-to-br from-[var(--color-primary)]/10 via-black to-black p-10 md:p-16">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-block rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
              Let's Travel Together
            </span>

            <h2 className="mt-8 font-serif text-4xl leading-tight text-white md:text-6xl">
              Ready to Capture Your
              <span className="text-[var(--color-primary)]">
                {" "}Dream Pre-Wedding Shoot?
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-300">
              From Himalayan peaks and waterfalls to palaces and beaches, we
              plan a location-led experience that feels completely yours.
            </p>

            <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
              <Link
                to="/book"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-primary)] px-8 py-4 font-medium text-black transition duration-300 hover:scale-105"
              >
                Request Quote
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 font-medium text-white transition duration-300 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationsCTA;
