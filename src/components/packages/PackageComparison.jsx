import { Check, Minus } from "lucide-react";

function PackageComparison() {
  const comparisonData = [
    {
      feature: "Shoot Coverage",
      essential: "6 Hours",
      signature: "10 Hours",
      royal: "Multi-Day",
    },
    {
      feature: "Edited Images",
      essential: "300+",
      signature: "700+",
      royal: "Unlimited",
    },
    {
      feature: "Online Gallery",
      essential: true,
      signature: true,
      royal: true,
    },
    {
      feature: "Cinematic Film",
      essential: false,
      signature: true,
      royal: true,
    },
    {
      feature: "Drone Coverage",
      essential: false,
      signature: true,
      royal: true,
    },
    {
      feature: "Pre-Wedding Planning",
      essential: false,
      signature: false,
      royal: true,
    },
    {
      feature: "Luxury Album",
      essential: false,
      signature: true,
      royal: true,
    },
    {
      feature: "Priority Editing",
      essential: false,
      signature: true,
      royal: true,
    },
    {
      feature: "Travel Included",
      essential: false,
      signature: false,
      royal: true,
    },
  ];

  const renderValue = (value) => {
    if (value === true) {
      return (
        <Check
          size={20}
          className="mx-auto text-[var(--color-primary)]"
        />
      );
    }

    if (value === false) {
      return (
        <Minus
          size={20}
          className="mx-auto text-neutral-500"
        />
      );
    }

    return value;
  };

  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="inline-block rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
            Compare Collections
          </span>

          <h2 className="mt-6 font-serif text-4xl text-white md:text-6xl">
            Find Your
            <span className="text-[var(--color-primary)]">
              {" "}Perfect Fit
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
            Compare our collections to discover the experience that best
            matches your pre-wedding shoot vision.
          </p>

        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-3xl border border-white/10">

          <table className="min-w-full border-collapse">

            <thead className="bg-white/5">

              <tr>

                <th className="px-8 py-6 text-left font-semibold text-white">
                  Features
                </th>

                <th className="px-6 py-6 text-center font-semibold text-white">
                  Essential
                </th>

                <th className="bg-[var(--color-primary)]/10 px-6 py-6 text-center font-semibold text-[var(--color-primary)]">
                  Signature
                </th>

                <th className="px-6 py-6 text-center font-semibold text-white">
                  Royal
                </th>

              </tr>

            </thead>

            <tbody>

              {comparisonData.map((row) => (

                <tr
                  key={row.feature}
                  className="border-t border-white/10"
                >

                  <td className="px-8 py-5 font-medium text-white">
                    {row.feature}
                  </td>

                  <td className="px-6 py-5 text-center text-neutral-300">
                    {renderValue(row.essential)}
                  </td>

                  <td className="bg-[var(--color-primary)]/5 px-6 py-5 text-center text-neutral-300">
                    {renderValue(row.signature)}
                  </td>

                  <td className="px-6 py-5 text-center text-neutral-300">
                    {renderValue(row.royal)}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </section>
  );
}

export default PackageComparison;
