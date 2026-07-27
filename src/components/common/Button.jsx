function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center transition-all duration-300";

  const variants = {
    primary:
      "rounded-2xl bg-[var(--color-primary)] px-6 py-2.5 text-[13px] font-medium tracking-[0.03em] text-black shadow-lg hover:-translate-y-0.5 hover:bg-[var(--color-primary-hover)] hover:shadow-xl",

    secondary:
        "rounded-2xl border border-white/30 bg-white/5 px-6 py-2.5 text-[13px] font-medium tracking-[0.03em] text-white backdrop-blur-md transition-all duration-300 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-black",

    dark:
      "rounded-2xl bg-black px-6 py-2.5 text-[13px] font-medium tracking-[0.03em] text-white hover:bg-neutral-800",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;