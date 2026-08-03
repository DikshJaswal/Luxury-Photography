import { ArrowRight, Camera, Heart, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { COMPANY } from "../../utils/constants";

function MeetPhotographer() {
  return (
    <section className="bg-[#0B0B0B] py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070&auto=format&fit=crop"
            alt="Photographer portrait"
            className="h-[700px] w-full rounded-[36px] object-cover"
          />

          <div className="absolute bottom-8 left-8 rounded-3xl border border-white/10 bg-black/70 p-6 backdrop-blur-md">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
              Founder & Lead Photographer
            </p>

            <h3 className="mt-2 font-serif text-3xl text-white">
              Alex Carter
            </h3>
          </div>
        </div>

        <div>
          <span className="inline-block rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
            Meet Your Photographer
          </span>

          <h2 className="mx-auto max-w-4xl text-center font-serif text-4xl leading-tight text-balance text-white md:text-6xl">
            The Person Behind
            <span className="text-[var(--color-primary)]">
              {" "}The Camera
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-neutral-400">
            Hi, I&apos;m Alex. Photography has never been just about taking
            beautiful pictures. It is about preserving emotions that deserve to
            be remembered forever. Every couple brings a unique rhythm, and I
            shape the shoot with honesty, elegance, and intention.
          </p>

          <p className="mt-6 text-lg leading-8 text-neutral-400">
            My goal is simple: to make you feel comfortable enough to forget the
            camera is even there. That is when the most authentic smiles,
            movement, and unforgettable moments naturally unfold.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="rounded-full bg-[var(--color-primary)] p-3 text-black">
                <Camera size={20} />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Cinematic Direction
                </h3>

                <p className="mt-2 text-sm leading-6 text-neutral-400">
                  Natural storytelling with editorial compositions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="rounded-full bg-[var(--color-primary)] p-3 text-black">
                <Heart size={20} />
              </div>

              <div>
                <h3 className="font-semibold text-white">Couple First</h3>

                <p className="mt-2 text-sm leading-6 text-neutral-400">
                  Every experience is tailored around your comfort and story.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 border-l-4 border-[var(--color-primary)] pl-6">
            <p className="font-serif text-3xl italic text-[var(--color-primary)]">
              &quot;Photography is the art of making memories tangible.&quot;
            </p>

            <p className="mt-3 text-neutral-400">- Alex Carter</p>
          </div>

          <div className="mt-12 flex flex-col gap-5 sm:flex-row">
            <Link
              to="/book"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-primary)] px-8 py-4 font-medium text-black transition hover:scale-105"
            >
              Let&apos;s Connect
              <ArrowRight size={18} />
            </Link>

            <a
              href={COMPANY.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-8 py-4 font-medium text-white transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            >
              <ExternalLink size={18} />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MeetPhotographer;
