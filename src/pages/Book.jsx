import { useNavigate } from "react-router-dom";
import { Send, X } from "lucide-react";

import { COMPANY } from "../utils/constants";

function Book() {
  const navigate = useNavigate();

  const closeModal = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Hi, I want to enquire about a pre-wedding shoot with Rishikesh Prewed Studio.",
      `Name: ${data.get("name") || "-"}`,
      `Phone: ${data.get("phone") || "-"}`,
      `Preferred date: ${data.get("date") || "-"}`,
      `Location: ${data.get("location") || "-"}`,
      `Package: ${data.get("package") || "-"}`,
      `Message: ${data.get("message") || "-"}`,
    ].join("\n");

    window.open(
      `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
    closeModal();
  };

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-start justify-center overflow-y-auto bg-black/80 px-4 py-8 backdrop-blur-sm sm:items-center"
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
      aria-label="Book a pre-wedding shoot"
    >
      <div
        className="relative my-auto w-full max-w-2xl rounded-[32px] border border-white/10 bg-[#151515] p-6 text-white shadow-2xl sm:p-10"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={closeModal}
          aria-label="Close booking form"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
        >
          <X size={20} />
        </button>

        <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-primary)]">
          Pre-Wedding Inquiry
        </span>
        <h1 className="mt-5 max-w-lg font-serif text-4xl font-light sm:text-5xl">
          Let&apos;s plan your story
        </h1>
        <p className="mt-5 max-w-xl leading-7 text-neutral-400">
          Share your date, location, and vision. We&apos;ll continue the consultation on WhatsApp.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <input name="name" required placeholder="Your name" className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none focus:border-[var(--color-primary)]" />
            <input name="phone" required type="tel" placeholder="Phone number" className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none focus:border-[var(--color-primary)]" />
            <input name="date" required type="date" className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none focus:border-[var(--color-primary)]" />
            <input name="location" required placeholder="Preferred location" className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none focus:border-[var(--color-primary)]" />
          </div>

          <select name="package" defaultValue="Basic — ₹20,000" className="w-full rounded-2xl border border-white/10 bg-[#151515] px-5 py-4 text-white outline-none focus:border-[var(--color-primary)]">
            <option>Basic — ₹20,000</option>
            <option>Standard — ₹28,000</option>
            <option>Premium — ₹36,000</option>
            <option>Custom package</option>
          </select>

          <textarea name="message" rows={4} placeholder="Tell us about your shoot vision" className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none focus:border-[var(--color-primary)]" />

          <button type="submit" className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[var(--color-primary)] px-7 py-4 font-medium text-black transition hover:scale-[1.02]">
            Send Inquiry on WhatsApp <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Book;
