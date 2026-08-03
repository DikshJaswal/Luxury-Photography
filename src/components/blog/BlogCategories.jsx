function BlogCategories({
  categories,
  activeCategory,
  setActiveCategory,
}) {
  return (
    <section className="bg-[#0B0B0B] py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
          <span className="inline-flex rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs font-medium uppercase tracking-[0.35em] text-[var(--color-primary)]">
            Browse Articles
          </span>

          <h2 className="mx-auto max-w-4xl text-center font-serif text-4xl font-light text-balance text-white md:text-5xl lg:text-6xl">
            Explore By{" "}
            <span className="text-[var(--color-primary)]">
              Category
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-center text-balance text-lg leading-8 text-neutral-400">
            Browse stories, planning guides, destination shoots,
            photography inspiration, and behind-the-scenes moments from
            our latest couple sessions.
          </p>
        </div>

        {/* Category Buttons */}

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[var(--color-primary)] text-black shadow-lg"
                  : "border border-white/10 bg-white/5 text-neutral-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Divider */}

        <div className="mt-16">
          <div className="mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>
    </section>
  );
}

export default BlogCategories;
