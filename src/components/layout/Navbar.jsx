import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

import Container from "../common/Container";
import Button from "../common/Button";

import navigation from "../../data/navigation";
import { COMPANY } from "../../utils/constants";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-black/55 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="grid h-[72px] grid-cols-[1fr_auto_1fr] items-center">
          {/* Logo */}
          <NavLink
            to="/"
            className="-ml-2 flex items-center gap-2.5 justify-self-start sm:gap-3 md:-ml-4"
          >
            <img
              src={COMPANY.logo}
              alt={COMPANY.name}
              className="h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16"
            />
            <span className="-translate-y-0.5 font-[Comic_Sans_MS] leading-none text-[var(--color-primary)] [text-shadow:0_1px_8px_rgba(0,0,0,0.35)]">
              <span className="block whitespace-nowrap text-[15px] font-semibold italic tracking-[0.1em] sm:text-[18px]">
                Rishikesh Prewed
              </span>
              <span className="mt-1 block text-[22px] font-bold uppercase tracking-[0.24em] sm:text-[26px] sm:tracking-[0.26em]">
                Studio
              </span>
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-10 md:flex md:justify-self-center">
            {navigation.map((item) => (
              <NavLink key={item.path} to={item.path}>
                {({ isActive }) => (
                  <span
                    className={`relative pb-2 text-[13px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${
                      isActive
                        ? "text-[var(--color-primary)]"
                        : "text-white hover:text-[var(--color-primary)]"
                    }`}
                  >
                    {item.label}

                    <span
                      className={`absolute bottom-0 left-0 h-[1px] bg-[var(--color-primary)] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden justify-self-end md:block">
            <a
              href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hi, I would like to book a pre-wedding consultation.")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="px-7 py-3">Book on WhatsApp</Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="col-start-3 justify-self-end text-white md:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <HiOutlineX size={28} />
            ) : (
              <HiOutlineMenuAlt3 size={28} />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-black/95 transition-all duration-500 md:hidden ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <Container className="flex flex-col gap-6 py-8">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-lg transition-colors ${
                  isActive
                    ? "text-[var(--color-primary)]"
                    : "text-white hover:text-[var(--color-primary)]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <a
            href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hi, I would like to book a pre-wedding consultation.")}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            <Button className="mt-2 w-full">Book on WhatsApp</Button>
          </a>
        </Container>
      </div>
    </header>
  );
}

export default Navbar;
