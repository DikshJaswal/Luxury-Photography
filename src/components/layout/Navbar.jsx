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
            className="flex h-14 w-[150px] items-center justify-self-start sm:w-[180px]"
          >
            <img
              src={COMPANY.logo}
              alt={COMPANY.name}
              className="h-full w-full object-contain object-left"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-10 lg:flex lg:justify-self-center">
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
          <div className="hidden justify-self-end lg:block">
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
            className="col-start-3 justify-self-end text-white lg:hidden"
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
        className={`overflow-hidden bg-black/95 transition-all duration-500 lg:hidden ${
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
