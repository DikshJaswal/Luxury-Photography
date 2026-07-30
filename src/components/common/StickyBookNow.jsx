import { CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

function StickyBookNow() {
  return (
    <div className="fixed right-0 top-1/2 z-[998] hidden -translate-y-1/2 md:block">
      <Link
        to="/contact#contact-form"
        className="group flex items-center gap-3 rounded-l-full border border-[var(--color-primary)]/40 bg-[var(--color-primary)] px-5 py-4 pr-6 font-medium text-black shadow-2xl shadow-black/30 transition-all duration-300 hover:translate-x-[-4px] hover:bg-[#e7c766]"
      >
        <CalendarDays size={18} />
        <span className="tracking-wide">Book Now</span>
      </Link>
    </div>
  );
}

export default StickyBookNow;
