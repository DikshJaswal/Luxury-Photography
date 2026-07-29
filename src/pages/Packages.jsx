import PackagesHero from "../components/packages/PackagesHero";
import PricingCards from "../components/packages/PricingCards";
import AddOns from "../components/packages/AddOns";
import FAQ from "../components/packages/FAQ";
import PackagesCTA from "../components/packages/PackagesCTA";
import PageIntro from "../components/common/PageIntro";

function Packages() {
  return (
    <>
      <PackagesHero />
      <PageIntro
        eyebrow="Packages"
        title="Pricing Hidden, Planning Made Simple"
        description="The demo keeps pricing out of the way and focuses on the custom quote workflow your client asked for."
        primaryLabel="Request Quote"
        primaryTo="/contact"
        secondaryLabel="View Portfolio"
        secondaryTo="/portfolio"
      />
      <PricingCards />
      <AddOns />
      <FAQ />
      <PackagesCTA />
    </>
  );
}

export default Packages;
