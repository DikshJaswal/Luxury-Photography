import { motion } from "framer-motion";
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
        description="Every embedded video is shown as a full-screen viewing block, with the title sitting below the media instead of on top of it."
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
            <div className="h-[100svh] bg-black">
              <iframe
                title={video.title}
                src={video.embedUrl}
                className="h-full w-full"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div className="p-6 sm:p-8">
              <FaYoutube className="text-3xl text-[var(--color-primary)]" />
              <h3 className="mt-5 font-serif text-2xl text-white">
                {video.title}
              </h3>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

export default YouTubeVideos;
