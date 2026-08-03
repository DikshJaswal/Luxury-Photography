function SectionHeading({
  badge,
  title,
  description,
}) {
  const alignment = "items-center text-center";

  return (
    <div className={`mb-16 flex flex-col ${alignment}`}>
      {badge && (
        <span className="mb-5 text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
          {badge}
        </span>
      )}

      <h2 className="mx-auto max-w-3xl text-center font-serif text-4xl leading-tight text-balance text-white md:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-neutral-400">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
