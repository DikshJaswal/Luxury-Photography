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
            className="-ml-2 flex max-w-[320px] items-center gap-2.5 justify-self-start sm:gap-3 md:-ml-3 md:max-w-[235px] md:gap-2 xl:-ml-4 xl:max-w-[320px] xl:gap-3"
          >
            <img
              src={COMPANY.logo}
              alt={COMPANY.name}
              className="h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16 md:h-12 md:w-12 xl:h-16 xl:w-16"
            />
            <img
              src="https://res.cloudinary.com/drlcnp9vf/image/upload/v1785853739/studio_k2e7zp.png"
              alt="Rishikesh Prewed Studio"
              className="h-auto w-[270px] object-contain md:w-[210px] xl:w-[270px]"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-3 md:flex md:justify-self-center xl:gap-10">
            {navigation.map((item) => (
              <NavLink key={item.path} to={item.path}>
                {({ isActive }) => (
                  <span
                    className={`relative pb-2 text-[10px] font-medium uppercase tracking-[0.08em] transition-colors duration-300 xl:text-[13px] xl:tracking-[0.18em] ${
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
              <Button className="whitespace-nowrap px-2 py-1.5 text-[9px] md:text-[9px] xl:px-7 xl:py-3 xl:text-base">
                Book on WhatsApp
              </Button>
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
