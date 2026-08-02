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
        description="Choose an experience that fits your vision, or speak with us about a custom package for your locations, outfits, team, and film requirements."
        primaryLabel="Request Quote"
        primaryTo="/book"
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
