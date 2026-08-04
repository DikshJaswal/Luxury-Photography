import { ExternalLink } from "lucide-react";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import { COMPANY } from "../../utils/constants";

function Testimonials() {
  return (
    <Section className="bg-[#0b0b0b]">
      <SectionHeading
        badge="Google Reviews"
        title="Review Us on Google"
        description="Had a great experience with us? We would love to hear from you."
      />

      <div className="mx-auto max-w-3xl rounded-[32px] border border-white/10 bg-white/[0.04] p-10 text-center">
        <h3 className="font-serif text-3xl text-white">We Would Love Your Feedback</h3>
        <p className="mx-auto mt-5 max-w-xl text-center text-balance leading-8 text-neutral-400">
          Take a moment to share your honest experience on Google.
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
