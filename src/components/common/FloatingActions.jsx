import { useEffect, useState } from "react";
import {
  FiPhone,
  FiChevronUp,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY, buildWhatsAppLink } from "../../utils/constants";

function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[999] flex flex-col items-end gap-4">
      {/* Scroll To Top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 20 }}
            transition={{ duration: 0.25 }}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black/80 text-white shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-black"
          >
            <FiChevronUp size={24} />

            <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg bg-black px-3 py-2 text-xs text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
              Back to Top
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Call */}
      <a
        href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black/80 text-white shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-black"
      >
        <FiPhone size={22} />

        <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg bg-black px-3 py-2 text-xs text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
          Call Now
        </span>
      </a>

      {/* WhatsApp */}
      <a
        href={buildWhatsAppLink("Hi, I want to check availability for a pre-wedding shoot.")}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
      >
        <FaWhatsapp size={28} />

        <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg bg-black px-3 py-2 text-xs text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
          WhatsApp
        </span>
      </a>
    </div>
  );
}

export default FloatingActions;
