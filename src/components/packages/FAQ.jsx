import { useState } from "react";
import { ChevronDown } from "lucide-react";

function FAQ() {
  const faqs = [
    {
      question: "What is the payment schedule?",
      answer:
        "A 10% booking advance confirms your date. 80% is due on the shoot day, and the remaining balance is payable at delivery. The booking advance is non-refundable.",
    },
    {
      question: "How do we book our shoot date?",
      answer:
        "Send an enquiry through the contact page. Once we discuss your shoot details and confirm availability, the booking process secures your date.",
    },
    {
      question: "Do you travel for destination shoots?",
      answer:
        "Absolutely. We are available throughout India and internationally, handling travel planning to ensure a seamless photography experience wherever your celebration takes place.",
    },
    {
      question: "Can we customize our shoot experience?",
      answer:
        "Yes. Every couple is unique, and your experience can be tailored with additional coverage, films, drone cinematography, or multiple locations.",
    },
    {
      question: "How long does it take to receive our photos?",
      answer:
        "A preview gallery is delivered shortly after your shoot, while the complete edited collection and films follow within the agreed timeline.",
    },
    {
      question: "How many photographs will we receive?",
      answer:
        "The final number depends on your shoot duration and locations, but every meaningful moment is professionally edited and delivered without unnecessary limitations.",
    },
    {
      question: "Are travel expenses included?",
      answer:
        "Travel arrangements vary by location. Destination shoots receive a customized travel quote during the consultation process.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-5xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-block rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
            Frequently Asked Questions
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl text-center font-serif text-4xl text-balance text-white md:text-6xl">
            Everything You
            <span className="text-[var(--color-primary)]">
              {" "}Need to Know
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-center text-balance text-lg leading-8 text-neutral-400">
            We understand that choosing your pre-wedding photographer is an
            important decision. Here are answers to some of the questions we
            receive most often.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-7 text-left transition hover:bg-white/5"
                >
                  <h3 className="font-serif text-xl text-white">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    size={24}
                    className={`text-[var(--color-primary)] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-white/10 px-7 py-6">
                    <p className="leading-8 text-neutral-400">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
