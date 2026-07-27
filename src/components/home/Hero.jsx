import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <motion.video
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover brightness-90 contrast-110 saturate-75 transition-transform duration-[20000ms] scale-105"
      >
        <source
          src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4"
          type="video/mp4"
        />
      </motion.video>

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70" />

      {/* Warm Film Tone */}
      <div className="absolute inset-0 bg-[#2a1c12]/15 mix-blend-multiply" />

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_250px_rgba(0,0,0,0.7)]" />

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center"
        >
          <span className="mb-4 text-[11px] uppercase tracking-[0.5em] text-white/70">
            Scroll
          </span>

          <div className="relative h-14 w-px overflow-hidden bg-white/20">
            <motion.div
              animate={{ y: [-20, 56] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-0 h-6 w-px bg-[var(--color-primary)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;