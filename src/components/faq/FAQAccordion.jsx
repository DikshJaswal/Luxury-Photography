import { useState } from "react";
import { Minus, Plus } from "lucide-react";

function FAQAccordion() {
  const faqs = [
    {
      question: "How far in advance should we book our pre-wedding shoot?",
      answer:
        "Most couples book 2–6 months before their preferred shoot date. Popular weekends and destination locations are often reserved well in advance, so we recommend enquiring early.",
    },
    {
      question: "Do you travel for destination shoots?",
      answer:
        "Absolutely. We love documenting celebrations around the world. Travel arrangements and accommodation are discussed during the booking process to create a seamless experience.",
    },
    {
      question: "How many photographs will we receive?",
      answer:
        "Every shoot is unique, but you can expect a beautifully curated gallery sized around your selected experience and timeline.",
    },
    {
      question: "Do you help plan the shoot timeline?",
      answer:
        "Yes. We work closely with every couple to create a photography timeline that ensures every meaningful moment is captured without interrupting the flow of the day.",
    },
    {
      question: "When will our gallery be delivered?",
      answer:
        "Your online gallery is typically delivered within the agreed timeline. A small preview is often shared shortly after the shoot.",
    },
    {
      question: "Do you provide albums and prints?",
      answer:
        "Yes. We offer handcrafted luxury albums and museum-quality fine art prints designed to preserve your memories for generations.",
    },
    {
      question: "Can we request specific photographs?",
      answer:
        "Of course. Before your shoot we will discuss your priorities, styling, locations, and must-have frames so no important memories are missed.",
    },
    {
      question: "What happens if it rains on our shoot day?",
      answer:
        "Rain creates some of the most romantic photographs. We always have alternative ideas and indoor portrait locations prepared to ensure beautiful results regardless of the weather.",
    },
    {
      question: "How do we reserve our shoot date?",
      answer:
        "Your date is officially reserved once the signed agreement and booking retainer have been received.",
    },
    {
      question: "Do you offer multi-day destination shoots?",
      answer:
        "Yes. Custom experiences can be designed across multiple locations or days when your vision needs more time and variety.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="faq"
      className="bg-[#0B0B0B] py-24 lg:py-28"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-10">

        <div className="mb-16 text-center">

          <span className="inline-flex rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs font-medium uppercase tracking-[0.35em] text-[var(--color-primary)]">
            Common Questions
          </span>

          <h2 className="mt-6 font-serif text-4xl font-light text-white md:text-5xl">
            Everything
            <span className="text-[var(--color-primary)]">
              {" "}Answered
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
            Here are the questions couples ask us most frequently before
            planning their pre-wedding photography experience.
          </p>

        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] transition-all duration-300 hover:border-[var(--color-primary)]/30"
              >

                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between px-8 py-7 text-left"
                >
                  <h3 className="pr-8 font-serif text-2xl font-light text-white">
                    {faq.question}
                  </h3>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">

                    {isOpen ? (
                      <Minus size={22} />
                    ) : (
                      <Plus size={22} />
                    )}

                  </div>

                </button>

                <div
                  className={`grid transition-all duration-500 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-8 pb-8 leading-8 text-neutral-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default FAQAccordion;
