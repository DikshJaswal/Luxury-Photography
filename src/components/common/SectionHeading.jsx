function SectionHeading({
  badge,
  title,
  description,
  align = "center",
}) {
  const alignment =
    align === "left"
      ? "text-left items-start"
      : "text-center items-center";

  return (
    <div className={`mb-16 flex flex-col ${alignment}`}>
      {badge && (
        <span className="mb-5 text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
          {badge}
        </span>
      )}

      <h2 className="max-w-4xl font-serif text-4xl leading-tight text-white md:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-400">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;