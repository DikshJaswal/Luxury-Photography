function Badge({ children }) {
  return (
    <span className="inline-block rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 px-4 py-1 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
      {children}
    </span>
  );
}

export default Badge;