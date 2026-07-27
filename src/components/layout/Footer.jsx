import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";

import Container from "../common/Container";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-[#0b0b0b] via-black to-black">
      <Container>
        <div className="grid gap-16 py-24 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="mb-8 font-serif text-5xl font-semibold uppercase tracking-[0.35em] text-white">
              LUXE
            </h2>

            <p className="max-w-sm leading-9 text-neutral-400">
              Capturing timeless love stories through elegant photography and
              cinematic wedding films across India.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white">Navigation</h3>
              <div className="mt-2 h-px w-12 bg-[var(--color-primary)]" />
            </div>

            <ul className="space-y-5 text-neutral-400">
              <li>
                <Link
                  to="/"
                  className="transition-all duration-300 hover:translate-x-1 hover:text-[var(--color-primary)]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/portfolio"
                  className="transition-all duration-300 hover:translate-x-1 hover:text-[var(--color-primary)]"
                >
                  Portfolio
                </Link>
              </li>

              <li>
                <Link
                  to="/packages"
                  className="transition-all duration-300 hover:translate-x-1 hover:text-[var(--color-primary)]"
                >
                  Packages
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="transition-all duration-300 hover:translate-x-1 hover:text-[var(--color-primary)]"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="transition-all duration-300 hover:translate-x-1 hover:text-[var(--color-primary)]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white">Services</h3>
              <div className="mt-2 h-px w-12 bg-[var(--color-primary)]" />
            </div>

            <ul className="space-y-5 text-neutral-400">
              <li>Wedding Photography</li>
              <li>Cinematic Wedding Films</li>
              <li>Destination Weddings</li>
              <li>Pre-Wedding Shoots</li>
              <li>Engagement Sessions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white">Contact</h3>
              <div className="mt-2 h-px w-12 bg-[var(--color-primary)]" />
            </div>

            <div className="space-y-4 leading-8 text-neutral-400">
              <p>hello@luxeweddings.com</p>
              <p>+91 98765 43210</p>
              <p>Jaipur, Rajasthan, India</p>
            </div>

            <div className="mt-10 flex gap-4">
              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-black"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-black"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-black"
              >
                <FaYoutube />
              </a>

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-black"
              >
                <FaPinterestP />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 py-8 text-sm text-neutral-500 lg:flex-row">
          <p>
            © {new Date().getFullYear()} <span className="text-white">LUXE</span>. All Rights Reserved.
          </p>

          <p className="tracking-wide">
            Crafting timeless memories, one love story at a time.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;