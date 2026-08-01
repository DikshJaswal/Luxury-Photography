import BlogHero from "../components/blog/BlogHero";
import BlogGrid from "../components/blog/BlogGrid";
import Newsletter from "../components/blog/Newsletter";
import PageIntro from "../components/common/PageIntro";

function Blog() {
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

      <Newsletter />
    </main>
  );
}

export default Blog;