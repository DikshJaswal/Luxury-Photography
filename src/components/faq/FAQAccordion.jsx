import { useEffect, useState } from "react";
import { Minus, Plus } from "lucide-react";
import faqData from "../../data/faqData";

function FAQAccordion() {
  const faqs = faqData;
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const openHashCategory = () => {
      const category = window.location.hash.replace("#faq-", "").replaceAll("-", " ");
      if (!category) return;

      const matchingIndex = faqs.findIndex((faq) =>
        faq.category.toLowerCase() === category
      );

      if (matchingIndex >= 0) setOpenIndex(matchingIndex);
    };

    openHashCategory();
    window.addEventListener("hashchange", openHashCategory);

    return () => window.removeEventListener("hashchange", openHashCategory);
  }, [faqs]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <>
      <div id="faq" className="scroll-mt-24" />
      <section
        id="common-questions"
        className="scroll-mt-24 bg-[#0B0B0B] py-24 lg:py-28"
      >
      <div className="mx-auto max-w-5xl px-6 lg:px-10">

        <div className="mb-16 text-center">

          <span className="inline-flex rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs font-medium uppercase tracking-[0.35em] text-[var(--color-primary)]">
            Common Questions
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl text-center font-serif text-4xl font-light text-balance text-white md:text-5xl">
            Everything
            <span className="text-[var(--color-primary)]">
              {" "}Answered
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-center text-balance text-lg leading-8 text-neutral-400">
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
                  type="button"
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
    </>
  );
}

export default FAQAccordion;
