import PackagesHero from "../components/packages/PackagesHero";
import PricingCards from "../components/packages/PricingCards";
import AddOns from "../components/packages/AddOns";
import FAQ from "../components/packages/FAQ";
import PackagesCTA from "../components/packages/PackagesCTA";

function Packages() {
  return (
    <>
      <PackagesHero />
      <PricingCards />
      <AddOns />
      <FAQ />
      <PackagesCTA />
    </>
  );
}

export default Packages;
