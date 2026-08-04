import { ExternalLink, Star } from "lucide-react";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import { COMPANY } from "../../utils/constants";

function Testimonials() {
  return (
    <Section className="bg-[#0b0b0b]">
      <SectionHeading
        badge="Client Reviews"
        title="Real Stories From Real Couples"
        description="Leave a review on our Google Business profile, then contact us to plan your own pre-wedding story."
      />

      <div className="mx-auto max-w-3xl rounded-[32px] border border-white/10 bg-white/[0.04] p-10 text-center">
        <div className="flex justify-center gap-1 text-[var(--color-primary)]">
          {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={24} fill="currentColor" />)}
        </div>
        <h3 className="mt-6 font-serif text-3xl text-white">See our latest Google reviews</h3>
        <p className="mx-auto mt-5 max-w-xl text-center text-balance leading-8 text-neutral-400">
          We prefer to show genuine feedback directly from our Google Business profile instead of using placeholder testimonials.
        </p>
        <a
          href={COMPANY.googleReviews}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-[var(--color-primary)] px-7 py-4 font-medium text-black transition hover:scale-105"
        >
          Review Us on Google <ExternalLink size={18} />
        </a>
      </div>
    </Section>
  );
}

export default Testimonials;
