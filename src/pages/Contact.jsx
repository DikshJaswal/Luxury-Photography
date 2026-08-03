import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Camera,
  Send,
  ExternalLink,
} from "lucide-react";
import { COMPANY } from "../utils/constants";
import VideoHero from "../components/common/VideoHero";
import PageIntro from "../components/common/PageIntro";
import TravelProcess from "../components/locations/TravelProcess";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const message = [
      "Hi, I want to enquire about a pre-wedding shoot with Rishikesh Prewed Studio.",
      `Name: ${data.get("name") || "-"}`,
      `Partner: ${data.get("partner") || "-"}`,
      `Email: ${data.get("email") || "-"}`,
      `Phone: ${data.get("phone") || "-"}`,
      `Preferred date: ${data.get("date") || "-"}`,
      `Location: ${data.get("location") || "-"}`,
      `Budget: ${data.get("budget") || "-"}`,
      `Vision: ${data.get("message") || "-"}`,
    ].join("\n");

    window.open(
      `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
    event.currentTarget.reset();
  };

  return (
    <main className="bg-[#0B0B0B] text-white">

      {/* ================= HERO ================= */}

      <VideoHero mediaKey="contact" />

      <PageIntro
        eyebrow="Contact"
        title="Tell Us What You Want To Create"
        description="Tell us your preferred date, location, style, and expectations. We’ll confirm availability and guide you through every next step."
        primaryLabel="Start Your Inquiry"
        primaryTo="#contact-form"
        secondaryLabel="View Portfolio"
        secondaryTo="/portfolio"
      />

      {/* ================= CONTACT CARDS ================= */}

      <section className="py-24">

        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 xl:grid-cols-4 lg:px-10">

          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8">

            <Mail
              className="text-[var(--color-primary)]"
              size={32}
            />

            <h3 className="mt-6 font-serif text-2xl">

              Email

            </h3>

            <a
              href={`mailto:${COMPANY.email}`}
              className="mt-4 block break-all text-sm text-neutral-400 hover:text-[var(--color-primary)] sm:text-base"
            >

              {COMPANY.email}

            </a>

          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8">

            <Phone
              className="text-[var(--color-primary)]"
              size={32}
            />

            <h3 className="mt-6 font-serif text-2xl">

              Phone

            </h3>

            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              className="mt-4 block text-neutral-400 hover:text-[var(--color-primary)]"
            >

              {COMPANY.phone}

            </a>

          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8">

            <MapPin
              className="text-[var(--color-primary)]"
              size={32}
            />

            <h3 className="mt-6 font-serif text-2xl">

              Studio

            </h3>

            <p className="mt-4 text-neutral-400">

              {COMPANY.address}

            </p>

          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8">

            <Clock
              className="text-[var(--color-primary)]"
              size={32}
            />

            <h3 className="mt-6 font-serif text-2xl">

              Response

            </h3>

            <p className="mt-4 text-neutral-400">

              {COMPANY.workingHours}

            </p>

          </div>

        </div>

      </section>

            {/* ================= CONTACT FORM ================= */}

      <section
        id="contact-form"
        className="pb-24"
      >
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.25fr_0.75fr] lg:px-10">

          {/* Form */}

          <div className="rounded-[36px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:p-10">

            <span className="inline-flex rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
              Pre-Wedding Inquiry
            </span>

            <h2 className="mt-8 font-serif text-4xl font-light text-white lg:text-5xl">
              Tell Us About
              <span className="text-[var(--color-primary)]">
                {" "}Your Story
              </span>
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-neutral-400">
              Share a few details and we&apos;ll get back within one business day
              with availability and a custom quote.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-12 space-y-6"
            >

              <div className="grid gap-6 md:grid-cols-2">

                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your Name"
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-[var(--color-primary)]"
                />

                <input
                  name="partner"
                  type="text"
                  placeholder="Partner's Name"
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-[var(--color-primary)]"
                />

              </div>

              <div className="grid gap-6 md:grid-cols-2">

                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email Address"
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-[var(--color-primary)]"
                />

                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="Phone Number"
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-[var(--color-primary)]"
                />

              </div>

              <div className="grid gap-6 md:grid-cols-2">

                <input
                  name="date"
                  type="date"
                  required
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-[var(--color-primary)]"
                />

                <input
                  name="location"
                  type="text"
                  required
                  placeholder="Preferred Location / Venue"
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-[var(--color-primary)]"
                />

              </div>

              <select
                name="budget"
                defaultValue=""
                className="w-full rounded-2xl border border-white/10 bg-[#151515] px-5 py-4 text-white outline-none focus:border-[var(--color-primary)]"
              >
                <option value="" disabled>
                  Select Budget Range
                </option>

                <option value="Under ₹50,000">Under ₹50,000</option>
                <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                <option value="₹1,00,000 - ₹2,00,000">₹1,00,000 - ₹2,00,000</option>
                <option value="Above ₹2,00,000">Above ₹2,00,000</option>
              </select>

              <textarea
                name="message"
                rows={7}
                placeholder="Tell us about your shoot vision, location, dates, and anything you would love us to know..."
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-[var(--color-primary)]"
              />

              <button
                type="submit"
                className="inline-flex items-center gap-3 rounded-full bg-[var(--color-primary)] px-8 py-4 font-medium text-black transition hover:scale-105"
              >
                Send Inquiry

                <Send size={18} />

              </button>

            </form>

          </div>

          {/* Studio Details */}

          <div className="space-y-8">

            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8">

              <Camera
                className="text-[var(--color-primary)]"
                size={34}
              />

              <h3 className="mt-6 font-serif text-3xl">

                Why Couples Choose Us

              </h3>

              <p className="mt-6 leading-8 text-neutral-400">

                Every shoot is approached as a story, balancing cinematic
                portraits with natural moments, movement, and genuine emotion.

              </p>

            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8">

              <h4 className="text-sm uppercase tracking-[0.35em] text-[var(--color-primary)]">

                Availability

              </h4>

              <div className="mt-6 space-y-5">

                <div className="flex justify-between border-b border-white/10 pb-4">

                  <span className="text-neutral-400">
                    Availability
                  </span>

                  <span>By appointment</span>

                </div>

                <div className="flex justify-between border-b border-white/10 pb-4">

                  <span className="text-neutral-400">
                    Destination Shoots
                  </span>

                  <span>Rishikesh & destinations</span>

                </div>

                <div className="flex justify-between border-b border-white/10 pb-4">

                  <span className="text-neutral-400">
                    Working Hours
                  </span>

                  <span>{COMPANY.workingHours}</span>

                </div>

                <div className="flex justify-between">

                  <span className="text-neutral-400">
                    Consultation
                  </span>

                  <span>Complimentary</span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <TravelProcess />

            {/* ================= MAP ================= */}

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center text-center">

            <span className="inline-flex rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
              Studio Location
            </span>

            <h2 className="mt-6 font-serif text-4xl font-light leading-tight lg:text-5xl">
              Visit Our
              <span className="text-[var(--color-primary)]"> Studio</span>
            </h2>

            <p className="mt-6 max-w-2xl text-center leading-8 text-neutral-400">
              Whether you are planning locally or travelling for your shoot,
              we'd love to discuss your vision over coffee.
            </p>

          </div>

          <div className="overflow-hidden rounded-[36px] border border-white/10">

            <iframe
              title="Rishikesh Prewed Studio exact location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.4742074433802!2d78.19068180000001!3d30.080602499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909395a461a2a6b%3A0x146e015b2029d386!2sRishikesh%20Prewed%20Studio!5e0!3m2!1sen!2sin!4v1785734971410!5m2!1sen!2sin"
              className="h-[550px] w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />

          </div>

        </div>

      </section>

      {/* ================= INSTAGRAM CTA ================= */}

      <section className="pb-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-10 md:p-16">

            <div className="grid items-center gap-12 lg:grid-cols-2">

              <div>

                <span className="inline-flex rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">

                  Follow Along

                </span>

                <h2 className="mt-8 font-serif text-4xl font-light leading-tight lg:text-6xl">

                  Daily Moments.
                  <br />

                  <span className="text-[var(--color-primary)]">

                    Timeless Stories.

                  </span>

                </h2>

                <p className="mt-8 max-w-xl leading-8 text-neutral-400">

                  Discover behind-the-scenes moments, destination shoots,
                  editorial portraits, and our latest love stories on Instagram.

                </p>

              </div>

              <div className="flex justify-start lg:justify-end">

                <a
                  href={COMPANY.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-[var(--color-primary)] px-8 py-4 font-medium text-black transition hover:scale-105"
                >

                  <ExternalLink size={20} />

                  Follow Our Studio

                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FINAL CTA ================= */}

      <section className="pb-32">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="font-serif text-4xl font-light lg:text-6xl">

            Your Story
            <span className="text-[var(--color-primary)]">
              {" "}Starts Here
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-400">

            Every pre-wedding story deserves to be remembered beautifully.
            We can't wait to hear your story and create photographs
            you'll cherish for a lifetime.

          </p>

          <a
            href="#contact-form"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-[var(--color-primary)] px-10 py-5 font-medium text-black transition hover:scale-105"
          >

            Begin Your Journey

            <ArrowRight size={18} />

          </a>

        </div>

      </section>

    </main>
  );
}

export default Contact;
