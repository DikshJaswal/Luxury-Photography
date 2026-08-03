import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";

import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";

import packages from "../../data/packagesData";

function PackagesPreview() {
  return (
    <Section className="bg-[#0a0a0a]">
      <SectionHeading
        badge="Packages"
        title="Collections Crafted For Every Love Story"
        description="Choose a starting point for your story. We share a custom quote after understanding your locations, dates, and creative vision."
      />

      <div className="grid gap-8 lg:grid-cols-3">
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            className={`group relative rounded-3xl border p-10 transition duration-500 hover:-translate-y-2 ${
              pkg.featured
                ? "border-[var(--color-primary)] bg-white/[0.03]"
                : "border-white/10 bg-white/[0.02]"
            }`}
          >
            {pkg.featured && (
              <span className="mb-6 inline-block rounded-full bg-[var(--color-primary)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-black">
                Most Popular
              </span>
            )}

            <h3 className="mb-3 font-serif text-3xl text-white">
              {pkg.title}
            </h3>

            <p className="mb-8 leading-7 text-neutral-400">
              {pkg.subtitle}
            </p>

            <ul className="mb-10 space-y-4">
              {pkg.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-neutral-300"
                >
                  <Check
                    size={18}
                    className="text-[var(--color-primary)]"
                  />

                  {feature}
                </li>
              ))}
            </ul>

            <Link
              to="/packages#signature-experiences"
              className="absolute inset-0 z-10 flex items-center justify-center rounded-3xl bg-black/45 opacity-0 backdrop-blur-[3px] transition duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
              aria-label={`View ${pkg.title} package details`}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 font-medium text-black shadow-xl transition duration-300 group-hover:scale-100 group-focus-within:scale-100">
                View Package
                <ArrowRight size={18} />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export default PackagesPreview;
