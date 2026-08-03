import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function PageIntro({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
}) {
  const primaryProps = primaryTo?.startsWith("#")
    ? { href: primaryTo }
    : { to: primaryTo };
  const PrimaryLink = primaryTo?.startsWith("#") ? "a" : Link;

  return (
    <section className="bg-[#0B0B0B] py-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        {eyebrow && (
          <span className="inline-flex rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
            {eyebrow}
          </span>
        )}

        <h2 className="mx-auto mt-6 max-w-4xl text-center font-serif text-4xl text-balance md:text-6xl">
          {title}
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-8 text-neutral-400">
          {description}
        </p>

        {(primaryLabel || secondaryLabel) && (
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            {primaryLabel && primaryTo && (
              <PrimaryLink
                {...primaryProps}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-primary)] px-7 py-4 font-medium text-black transition hover:scale-105"
              >
                {primaryLabel}
                <ArrowRight size={18} />
              </PrimaryLink>
            )}

            {secondaryLabel && secondaryTo && (
              <Link
                to={secondaryTo}
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 px-7 py-4 font-medium text-white transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              >
                {secondaryLabel}
                <ArrowRight size={18} />
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default PageIntro;
