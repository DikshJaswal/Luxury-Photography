import PortfolioHero from "../components/portfolio/PortfolioHero";
import PortfolioCategoryGrid from "../components/portfolio/PortfolioCategoryGrid";
import PortfolioCTA from "../components/portfolio/PortfolioCTA";
import PageIntro from "../components/common/PageIntro";

function Portfolio() {
  return (
    <main className="bg-[#0B0B0B] text-white">
      {/* Hero */}
      <PortfolioHero />

      <PageIntro
        eyebrow="Portfolio Overview"
        title="Explore Our Signature Pre-Wedding Worlds"
        description="From mountains and waterfalls to luxury resorts, drone frames, and cinematic films, each category is built as a dedicated story experience with its own gallery and SEO page."
        primaryLabel="Request Quote"
        primaryTo="/contact"
        secondaryLabel="Book on WhatsApp"
        secondaryTo="/contact"
      />

      {/* Portfolio Categories */}
      <PortfolioCategoryGrid />

      {/* Why Choose LUXE */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
              Why LUXE
            </span>

            <h2 className="mt-6 font-serif text-4xl md:text-5xl">
              More Than Photography,
              <br />
              We Create Experiences.
            </h2>

            <p className="mt-8 leading-8 text-neutral-400">
              We believe every couple deserves photographs that feel timeless.
              Our approach combines storytelling, cinematic composition,
              destination expertise, and genuine emotions to create memories
              you'll cherish forever.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-5xl font-bold text-[var(--color-primary)]">
                500+
              </h3>
              <p className="mt-3 text-neutral-400">
                Happy Couples
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-5xl font-bold text-[var(--color-primary)]">
                1200+
              </h3>
              <p className="mt-3 text-neutral-400">
                Beautiful Stories
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-5xl font-bold text-[var(--color-primary)]">
                8+
              </h3>
              <p className="mt-3 text-neutral-400">
                Years Experience
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-5xl font-bold text-[var(--color-primary)]">
                5★
              </h3>
              <p className="mt-3 text-neutral-400">
                Client Rating
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <PortfolioCTA />
    </main>
  );
}

export default Portfolio;
