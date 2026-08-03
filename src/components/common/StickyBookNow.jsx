import { CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

function StickyBookNow() {
  return (
    <div className="fixed bottom-8 right-24 z-[998]">
      <Link
        to="/book"
        className="group flex items-center gap-2 rounded-l-full border border-[var(--color-primary)]/40 bg-[var(--color-primary)] px-4 py-3 pr-5 text-sm font-medium text-black shadow-2xl shadow-black/30 transition-all duration-300 hover:-translate-x-1 hover:bg-[#e7c766] sm:gap-3 sm:px-5 sm:py-4 sm:pr-6 sm:text-base"
      >
        <CalendarDays size={18} />
        <span className="tracking-wide">Book Now</span>
      </Link>
    </div>
  );
}

export default StickyBookNow;
