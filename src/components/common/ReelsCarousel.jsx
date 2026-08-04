import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";

import Section from "./Section";
import SectionHeading from "./SectionHeading";
import reels from "../../data/reelsData";
import { getOptimizedVideoUrl, getVideoPosterUrl } from "../../utils/helpers";
import useHorizontalWheel from "../../hooks/useHorizontalWheel";

function ReelRow({ items, onOpen, isPortrait }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    duration: 25,
  });
  const [isHovered, setIsHovered] = useState(false);
  const viewportRef = useRef(null);

  useHorizontalWheel(viewportRef, emblaApi);

  useEffect(() => {
    if (!emblaApi || isHovered) return undefined;

    const interval = window.setInterval(() => emblaApi.scrollNext(), 5000);
    return () => window.clearInterval(interval);
  }, [emblaApi, isHovered]);

  if (items.length === 0) return null;

  const cardWidth = isPortrait
    ? "min-w-[82%] sm:min-w-[45%] lg:min-w-[360px] lg:max-w-[360px]"
    : "min-w-[88%] sm:min-w-[58%] lg:min-w-[48%]";
  const videoRatio = isPortrait ? "aspect-[9/16]" : "aspect-video";

  return (
    <div className="mx-auto max-w-6xl">
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          type="button"
          onClick={() => emblaApi?.scrollPrev()}
          className="absolute left-3 top-1/2 z-10 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/80 text-white shadow-xl backdrop-blur-md transition hover:scale-105 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] lg:flex"
          aria-label="Previous reel"
        >
          <ChevronLeft size={26} />
        </button>
        <button
          type="button"
          onClick={() => emblaApi?.scrollNext()}
          className="absolute right-3 top-1/2 z-10 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/80 text-white shadow-xl backdrop-blur-md transition hover:scale-105 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] lg:flex"
          aria-label="Next reel"
        >
          <ChevronRight size={26} />
        </button>

        <div ref={(node) => { viewportRef.current = node; emblaRef(node); }} className="overflow-hidden">
          <div className={`flex gap-6 ${isPortrait && items.length <= 2 ? "justify-center" : ""}`}>
            {items.map((reel) => (
              <button
                key={reel.id}
                type="button"
                onClick={() => onOpen(reel)}
                className={`group ${cardWidth} overflow-hidden rounded-3xl border border-white/10 bg-black text-left`}
                aria-label={`Open ${reel.title}`}
              >
                <div className={`relative overflow-hidden bg-black ${videoRatio}`}>
                  <img
                    src={getVideoPosterUrl(reel.video, reel.posterOffset)}
                    alt={`${reel.title} thumbnail`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition group-hover:bg-black/35">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-black shadow-xl transition group-hover:scale-110">
                      <Play size={22} fill="currentColor" />
                    </span>
                  </span>
                </div>
                <span className="block border-t border-white/10 p-4 font-serif text-xl text-white">
                  {reel.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ReelsCarousel({ className = "", excludedReelIds = [] }) {
  const [selectedReel, setSelectedReel] = useState(null);
  const [orientations, setOrientations] = useState({});

  useEffect(() => {
    let cancelled = false;

    reels.forEach((reel) => {
      const probe = document.createElement("video");
      probe.preload = "metadata";
      probe.onloadedmetadata = () => {
        if (cancelled) return;
        setOrientations((current) => ({
          ...current,
          [reel.id]: probe.videoWidth >= probe.videoHeight ? "landscape" : "portrait",
        }));
      };
      probe.src = reel.video;
    });

    return () => {
      cancelled = true;
    };
  }, []);

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

  const visibleReels = reels.filter((reel) => !excludedReelIds.includes(reel.id));
  const portraitReels = visibleReels.filter((reel) => orientations[reel.id] === "portrait");
  const landscapeReels = visibleReels.filter((reel) => orientations[reel.id] === "landscape");

  return (
    <>
      <Section className={`bg-[#0b0b0b] ${className}`}>
        <SectionHeading
          badge="Reels"
          title="Stories In Motion"
          description="Watch our latest cinematic reels and save-the-date films."
        />

        <div className="space-y-14">
          <ReelRow
            items={portraitReels}
            onOpen={setSelectedReel}
            isPortrait
          />
          <ReelRow
            items={landscapeReels}
            onOpen={setSelectedReel}
            isPortrait={false}
          />
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
            src={getOptimizedVideoUrl(selectedReel.video)}
            poster={getVideoPosterUrl(selectedReel.video, selectedReel.posterOffset)}
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
