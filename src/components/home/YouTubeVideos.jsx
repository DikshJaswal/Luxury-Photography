import { FaYoutube } from "react-icons/fa";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import videos from "../../data/youtubeVideos";

function YouTubeVideos() {
  return (
    <Section className="bg-[#0b0b0b]">
      <SectionHeading
        badge="Featured on YouTube"
        title="Stories Beyond the Frame"
        description="Watch cinematic highlights, location films, and behind-the-scenes moments from our studio."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {videos.map((video) => (
          <article
            key={video.title}
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-[var(--color-primary)]/60"
          >
            <div className="aspect-video bg-black">
              <iframe
                title={video.title}
                src={video.embedUrl}
                className="h-full w-full"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div className="p-6">
              <FaYoutube className="text-3xl text-[var(--color-primary)]" />
              <h3 className="mt-5 font-serif text-2xl text-white">
                {video.title}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default YouTubeVideos;
