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
        description="Clear answers about booking, shoot planning, styling, delivery, pricing, and everything you can expect from our team."
        primaryLabel="Browse FAQs"
        primaryTo="#faq"
        secondaryLabel="Request Quote"
        secondaryTo="/book"
      />
      <FAQCategories />
      <FAQAccordion />
      <FAQCTA />
    </>
  );
}

export default FAQ;
