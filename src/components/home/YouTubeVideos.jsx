import { motion } from "framer-motion";
import { FaYoutube } from "react-icons/fa";

import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import videos from "../../data/youtubeVideos";
import { COMPANY } from "../../utils/constants";

function YouTubeVideos() {
  return (
    <Section className="bg-[#0b0b0b]">
      <SectionHeading
        badge="Featured on YouTube"
        title="Stories Beyond the Frame"
        description="Watch a preview here, then visit our official YouTube channel for complete films and latest uploads."
      />

      <div className="space-y-12">
        {videos.map((video, index) => (
          <motion.article
            key={video.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
          >
            <a
              href={COMPANY.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Watch ${video.title} on YouTube`}
              className="group relative block h-[min(70svh,720px)] bg-black"
            >
              <video
                title={video.title}
                src={video.embedUrl}
                poster={video.poster}
                muted
                loop
                autoPlay
                playsInline
                className="h-full w-full object-contain"
              />
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <span className="transition duration-300 group-hover:scale-110">
                  <FaYoutube className="text-7xl text-[#ff0000] drop-shadow-2xl" />
                </span>
              </span>
            </a>

            <div className="p-6 sm:p-8">
              <FaYoutube className="text-3xl text-[var(--color-primary)]" />
              <h3 className="mt-5 font-serif text-2xl text-white">
                {video.title}
              </h3>
              <a
                href={COMPANY.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm text-[var(--color-primary)] hover:underline"
              >
                Visit our YouTube channel
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="flex justify-center pt-12">
        <a
          href={COMPANY.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full bg-[var(--color-primary)] px-8 py-4 text-base font-semibold text-black transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--color-primary)]/20"
        >
          <FaYoutube className="text-2xl" />
          Visit Our YouTube Channel
        </a>
      </div>
    </Section>
  );
}

export default YouTubeVideos;
