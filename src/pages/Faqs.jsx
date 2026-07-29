import FAQHero from "../components/faq/FAQHero";
import FAQCategories from "../components/faq/FAQCategories";
import FAQAccordion from "../components/faq/FAQAccordion";
import FAQCTA from "../components/faq/FAQCTA";
import PageIntro from "../components/common/PageIntro";

function FAQ() {
  return (
    <>
      <FAQHero />
      <PageIntro
        eyebrow="FAQs"
        title="Quick Answers Before You Enquire"
        description="The basics on booking, timing, travel, galleries, and how the demo inquiry flow works."
        primaryLabel="Browse FAQs"
        primaryTo="#faq"
        secondaryLabel="Request Quote"
        secondaryTo="/contact"
      />
      <FAQCategories />
      <FAQAccordion />
      <FAQCTA />
    </>
  );
}

export default FAQ;
