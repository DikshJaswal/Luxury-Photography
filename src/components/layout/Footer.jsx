import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import Container from "../common/Container";
import { COMPANY, buildWhatsAppLink } from "../../utils/constants";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-[#0b0b0b] via-black to-black">
      <Container>
        <div className="grid gap-16 py-24 lg:grid-cols-4">
          <div>
            <Link to="/" className="mb-8 block w-fit">
              <img
                src={COMPANY.logo}
                alt={COMPANY.name}
                className="h-28 w-44 object-contain object-left"
              />
            </Link>

            <p className="max-w-sm leading-9 text-neutral-400">
              Cinematic pre-wedding photography and films from Rishikesh,
              Uttarakhand, and destination locations across India.
            </p>

            <a
              href={buildWhatsAppLink("Hi, I want to book a pre-wedding consultation.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-[var(--color-primary)] px-6 py-3 font-medium text-black transition hover:-translate-y-0.5"
            >
              Book on WhatsApp
            </a>
          </div>

          <div>
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white">Navigation</h3>
              <div className="mt-2 h-px w-12 bg-[var(--color-primary)]" />
            </div>

            <ul className="space-y-5 text-neutral-400">
              {[
                ["Home", "/"],
                ["Portfolio", "/portfolio"],
                ["Packages", "/packages"],
                ["About", "/about"],
                ["Blog", "/blog"],
                ["FAQs", "/faqs"],
                ["Contact", "/contact"],
              ].map(([label, to]) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="transition-all duration-300 hover:translate-x-1 hover:text-[var(--color-primary)]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white">Services</h3>
              <div className="mt-2 h-px w-12 bg-[var(--color-primary)]" />
            </div>

            <ul className="space-y-5 text-neutral-400">
              <li>Pre-Wedding Photography</li>
              <li>Cinematic Pre-Wedding Films</li>
              <li>Drone Shoots</li>
              <li>Destination Planning</li>
              <li>Luxury Albums</li>
            </ul>
          </div>

          <div>
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white">Contact</h3>
              <div className="mt-2 h-px w-12 bg-[var(--color-primary)]" />
            </div>

            <div className="space-y-4 leading-8 text-neutral-400">
              <p>{COMPANY.email}</p>
              <p>{COMPANY.phone}</p>
            </div>

            <div className="mt-10 flex gap-4">
              {[
                [COMPANY.instagram, <FaInstagram key="instagram" />],
                [COMPANY.youtube, <FaYoutube key="youtube" />],
              ].map(([href, icon]) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-black"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 py-8 text-sm text-neutral-500 lg:flex-row">
          <p>
            Copyright {new Date().getFullYear()}{" "}
            <span className="text-white">{COMPANY.name}</span>. All Rights
            Reserved.
          </p>

          <p className="tracking-wide">
            Crafting timeless pre-wedding stories across India.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
