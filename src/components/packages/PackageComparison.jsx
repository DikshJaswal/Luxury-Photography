import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

function PackageComparison() {
  const comparisonData = [
    { feature: "Shoot Quality", basic: "HD", standard: "4K", premium: "4K" },
    { feature: "Candid Photos", basic: "40", standard: "50", premium: "60" },
    { feature: "Cinematic Video", basic: "3–4 min", standard: "3–5 min", premium: "4–6 min" },
    { feature: "Instagram Reels", basic: "1", standard: "1", premium: "3" },
    { feature: "Drone Coverage", basic: true, standard: true, premium: true },
    { feature: "Album", basic: "10 sheets", standard: "12 sheets", premium: "12–15 sheets" },
  ];

  const renderValue = (value) =>
    value === true ? <Check size={20} className="mx-auto text-[var(--color-primary)]" /> : value;

  return (
    <section
      id="package-comparison"
      className="bg-black py-24 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-block rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
            Compare Packages
          </span>
          <h2 className="mx-auto mt-6 max-w-4xl text-center font-serif text-4xl text-balance text-white md:text-6xl">
            Find Your <span className="text-[var(--color-primary)]">Perfect Fit</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-center text-balance text-lg leading-8 text-neutral-400">
            All packages include the listed deliverables. Confirm final location charges and schedule during consultation.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-white/10">
          <table className="min-w-full border-collapse">
            <thead className="bg-white/5">
              <tr>
                <th className="px-8 py-6 text-left font-semibold text-white">Features</th>
                <th className="px-6 py-6 text-center font-semibold text-white">Basic</th>
                <th className="bg-[var(--color-primary)]/10 px-6 py-6 text-center font-semibold text-[var(--color-primary)]">Standard</th>
                <th className="px-6 py-6 text-center font-semibold text-white">Premium</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row) => (
                <tr key={row.feature} className="border-t border-white/10">
                  <td className="px-8 py-5 font-medium text-white">{row.feature}</td>
                  <td className="px-6 py-5 text-center text-neutral-300">{renderValue(row.basic)}</td>
                  <td className="bg-[var(--color-primary)]/5 px-6 py-5 text-center text-neutral-300">{renderValue(row.standard)}</td>
                  <td className="px-6 py-5 text-center text-neutral-300">{renderValue(row.premium)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/packages#signature-experiences"
            className="group relative inline-flex overflow-hidden rounded-3xl bg-black/45 px-0 py-0 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-4"
          >
            <span className="absolute inset-0 z-10 flex items-center justify-center rounded-3xl bg-black/45 opacity-0 backdrop-blur-[3px] transition duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 font-medium text-black shadow-xl transition duration-300 group-hover:scale-100 group-focus-within:scale-100">
                View Package
                <ArrowRight size={18} />
              </span>
            </span>
            <span className="relative z-0 block w-full px-12 py-5"> </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PackageComparison;
