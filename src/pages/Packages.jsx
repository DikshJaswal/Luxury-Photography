import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PackagesHero from "../components/packages/PackagesHero";
import PricingCards from "../components/packages/PricingCards";
import AddOns from "../components/packages/AddOns";
import FAQ from "../components/packages/FAQ";
import PackagesCTA from "../components/packages/PackagesCTA";
import PageIntro from "../components/common/PageIntro";

function Packages() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const scrollToTarget = () => {
      const targetId = hash.replace("#", "");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        return true;
      }

      return false;
    };

    let attempts = 0;
    const interval = window.setInterval(() => {
      if (scrollToTarget() || attempts++ >= 10) {
        window.clearInterval(interval);
      }
    }, 50);

    if (scrollToTarget()) {
      window.clearInterval(interval);
    }

    return () => window.clearInterval(interval);
  }, [hash]);

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
