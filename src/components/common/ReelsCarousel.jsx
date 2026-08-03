import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import Section from "./Section";
import SectionHeading from "./SectionHeading";
import reels from "../../data/reelsData";

function ReelsCarousel({ className = "" }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedReel, setSelectedReel] = useState(null);

  useEffect(() => {
    if (!emblaApi || selectedReel) return undefined;

    const interval = window.setInterval(() => emblaApi.scrollNext(), 4500);
    return () => window.clearInterval(interval);
  }, [emblaApi, selectedReel]);

  useEffect(() => {
    if (!selectedReel) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedReel(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedReel]);

  return (
    <>
      <Section id="portfolio-reels" className={`bg-[#0b0b0b] ${className}`}>
        <SectionHeading
          badge="Reels"
          title="Stories In Motion"
          description="Watch our latest cinematic reels and save-the-date films."
        />

        <div className="relative">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-0 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur-md transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] lg:flex"
            aria-label="Previous reel"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-0 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur-md transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] lg:flex"
            aria-label="Next reel"
          >
            <ChevronRight />
          </button>

          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-6">
              {reels.map((reel) => (
                <button
                  key={reel.id}
                  type="button"
                  onClick={() => setSelectedReel(reel)}
                  className="group min-w-[78%] overflow-hidden rounded-3xl border border-white/10 bg-black text-left sm:min-w-[42%] lg:min-w-[24%]"
                  aria-label={`Open ${reel.title}`}
                >
                  <video
                    src={reel.video}
                    muted
                    loop
                    autoPlay
                    playsInline
                    preload="metadata"
                    className="aspect-[9/16] w-full object-contain transition duration-700 group-hover:scale-105"
                  />
                  <span className="block border-t border-white/10 p-4 font-serif text-xl text-white">
                    {reel.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {selectedReel && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4 sm:p-8"
          onClick={() => setSelectedReel(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedReel.title}
        >
          <button
            type="button"
            onClick={() => setSelectedReel(null)}
            className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-6 sm:top-6"
            aria-label="Close reel"
          >
            <X size={24} />
          </button>
          <video
            src={selectedReel.video}
            controls
            autoPlay
            playsInline
            className="max-h-[90vh] max-w-full object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

export default ReelsCarousel;
