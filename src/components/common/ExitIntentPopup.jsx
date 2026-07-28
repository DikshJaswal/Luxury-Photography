import { useEffect, useState } from "react";
import { X, MessageCircle } from "lucide-react";
import { COMPANY } from "../../utils/constants";

function ExitIntentPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("luxe-exit-popup-seen");
    if (hasSeenPopup) return undefined;

    const showPopup = (event) => {
      if (event.clientY <= 0) {
        setOpen(true);
        sessionStorage.setItem("luxe-exit-popup-seen", "true");
        document.removeEventListener("mouseout", showPopup);
      }
    };

    document.addEventListener("mouseout", showPopup);
    return () => document.removeEventListener("mouseout", showPopup);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-end bg-black/70 p-4 backdrop-blur-sm sm:items-center sm:justify-center">
      <div className="relative w-full max-w-lg overflow-hidden rounded-[28px] border border-[var(--color-primary)]/30 bg-[#111] p-8 shadow-2xl sm:p-10">
        <button
          type="button"
          aria-label="Close popup"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 rounded-full p-2 text-neutral-400 transition hover:bg-white/10 hover:text-white"
        >
          <X size={20} />
        </button>
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--color-primary)]">Before you go</p>
        <h2 className="mt-4 font-serif text-4xl leading-tight text-white">Still Looking for Your Dream Shoot?</h2>
        <p className="mt-4 leading-7 text-neutral-400">Tell us your preferred location and date. We&apos;ll help you plan a cinematic pre-wedding story.</p>
        <a
          href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hi, I am looking for my dream pre-wedding shoot.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-3 rounded-full bg-[var(--color-primary)] px-6 py-3.5 font-semibold text-black transition hover:-translate-y-0.5"
        >
          <MessageCircle size={19} /> Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}

export default ExitIntentPopup;
