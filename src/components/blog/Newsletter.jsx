import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";

function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}

      <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury pre-wedding journal"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      </div>

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-5xl rounded-[40px] border border-white/10 bg-white/10 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-14 lg:p-16">

          {/* Icon */}

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-primary)] shadow-lg">
            <Mail
              size={34}
              className="text-black"
            />
          </div>

          {/* Badge */}

          <div className="mt-8 text-center">
            <span className="inline-flex rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs font-medium uppercase tracking-[0.35em] text-[var(--color-primary)]">
              Join Our Journal
            </span>
          </div>

          {/* Heading */}

          <h2 className="mt-8 text-center font-serif text-4xl font-light leading-tight text-white md:text-5xl lg:text-6xl">
            Inspiration Delivered
            <span className="block text-[var(--color-primary)]">
              To Your Inbox
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-8 text-neutral-300">
            Receive destination shoot inspiration, planning advice,
            photography tips, exclusive stories, and beautifully curated ideas
            to help create a timeless pre-wedding story.
          </p>

          {/* Form */}

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-12 flex max-w-3xl flex-col gap-5 md:flex-row"
          >

            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="h-14 flex-1 rounded-full border border-white/10 bg-white/10 px-6 text-white placeholder:text-neutral-400 outline-none backdrop-blur-md transition-all duration-300 focus:border-[var(--color-primary)] focus:bg-white/15"
            />

            <button
              type="submit"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[var(--color-primary)] px-8 font-medium text-black transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Subscribe
              <ArrowRight size={18} />
            </button>

          </form>

          {/* Footer */}

          <p className="mt-6 text-center text-sm text-neutral-400">
            {submitted
              ? "Thanks. We’ll use your email only for occasional journal updates."
              : "No spam. Only elegant pre-wedding inspiration, exclusive stories, and photography insights delivered occasionally."}
          </p>

        </div>
      </div>
    </section>
  );
}

export default Newsletter;
