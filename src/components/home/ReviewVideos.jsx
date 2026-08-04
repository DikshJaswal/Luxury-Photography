import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ExternalLink } from "lucide-react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import reviewVideos from "../../data/reviewVideos";
import { getOptimizedVideoUrl, getVideoPosterUrl } from "../../utils/helpers";

function ReviewVideos() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef(new Map());

  useEffect(() => {
    if (!emblaApi) return undefined;

    const updateActiveIndex = () => setActiveIndex(emblaApi.selectedScrollSnap());
    updateActiveIndex();
    emblaApi.on("select", updateActiveIndex);

    return () => emblaApi.off("select", updateActiveIndex);
  }, [emblaApi]);

  useEffect(() => {
    const videos = videoRefs.current;

    return () => {
      videos.forEach((video) => video.pause());
    };
  }, []);

  const handleVideoPlay = (playingReviewId) => {
    videoRefs.current.forEach((video, reviewId) => {
      if (reviewId !== playingReviewId) video.pause();
    });
  };

  if (reviewVideos.length === 0) return null;

  return (
    <Section className="bg-[#0b0b0b]">
      <SectionHeading
        badge="Video Reviews"
        title="Hear From Our Couples"
        description="Personal words from couples who trusted us with their pre-wedding story."
      />

      <div className="relative">
        <button
          type="button"
          onClick={() => emblaApi?.scrollPrev()}
          className="absolute left-0 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur-md transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] lg:flex"
          aria-label="Previous video review"
        >
          <FaArrowLeft />
        </button>

        <button
          type="button"
          onClick={() => emblaApi?.scrollNext()}
          className="absolute right-0 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur-md transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] lg:flex"
          aria-label="Next video review"
        >
          <FaArrowRight />
        </button>

        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-6">
            {reviewVideos.map((review, index) => (
              <article
                key={review.id}
                className="min-w-[86%] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] sm:min-w-[52%] lg:min-w-[32%]"
              >
                <video
                  ref={(video) => {
                    if (video) {
                      videoRefs.current.set(review.id, video);
                    } else {
                      videoRefs.current.delete(review.id);
                    }
                  }}
                  src={getOptimizedVideoUrl(review.video)}
                  poster={getVideoPosterUrl(review.video, review.posterOffset)}
                  controls
                  playsInline
                  preload={index === activeIndex ? "metadata" : "none"}
                  onPlay={() => handleVideoPlay(review.id)}
                  className="aspect-video w-full bg-black object-contain"
                />
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-white">{review.title}</h3>
                  {review.sourceUrl && (
                    <a
                      href={review.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--color-primary)] hover:underline"
                    >
                      View original review <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default ReviewVideos;
