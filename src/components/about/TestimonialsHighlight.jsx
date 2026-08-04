import { ExternalLink, Star } from "lucide-react";
import { COMPANY } from "../../utils/constants";

function TestimonialsHighlight() {
  return (
    <section className="bg-[#0B0B0B] py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="inline-block rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
          Client Reviews
        </span>
        <h2 className="mx-auto mt-6 max-w-4xl text-center font-serif text-4xl text-balance text-white md:text-6xl">
          Kind Words From <span className="text-[var(--color-primary)]">Our Couples</span>
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-center text-balance text-lg leading-8 text-neutral-400">
          View genuine reviews and ratings on our official Google Business profile.
        </p>
        <div className="mt-8 flex justify-center gap-1 text-[var(--color-primary)]">
          {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={22} fill="currentColor" />)}
        </div>
        <a
          href={COMPANY.googleReviews}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-3 rounded-full border border-[var(--color-primary)] px-7 py-4 text-[var(--color-primary)] transition hover:bg-[var(--color-primary)] hover:text-black"
        >
          Review Us on Google <ExternalLink size={18} />
        </a>
      </div>
    </section>
  );
}

export default TestimonialsHighlight;
