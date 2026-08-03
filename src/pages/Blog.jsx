import { useEffect } from "react";

import BlogHero from "../components/blog/BlogHero";
import BlogGrid from "../components/blog/BlogGrid";
import PageIntro from "../components/common/PageIntro";

function Blog() {
  useEffect(() => {
    const previousTitle = document.title;
    const meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta?.getAttribute("content") || "";

    document.title = "Pre-Wedding Photography Journal | Rishikesh Prewed Studio";
    if (meta) {
      meta.setAttribute(
        "content",
        "Short guides to pre-wedding shoot locations, planning, outfits, light, and cinematic photography across India."
      );
    }

    return () => {
      document.title = previousTitle;
      meta?.setAttribute("content", previousDescription);
    };
  }, []);

  return (
    <main className="bg-[#0B0B0B]">
      <BlogHero />

      <PageIntro
        eyebrow="Blog"
        title="Stories, Planning Notes, And Shoot Ideas"
        description="A living journal of pre-wedding inspiration, location planning, and behind-the-scenes insights."
        primaryTo="#articles"
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
      />

      <BlogGrid />

    </main>
  );
}

export default Blog;
