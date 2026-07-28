import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";

import blogPosts from "../../data/blogData";

function BlogPreview() {
  return (
    <Section>
      <SectionHeading
        badge="Journal"
        title="Stories, Tips & Inspiration"
        description="Explore destination guides, pre-wedding inspiration, and planning tips from our latest journal."
      />

      <div className="grid gap-8 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
          >
            <div className="overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-8">
              <span className="rounded-full bg-[var(--color-primary)]/10 px-4 py-1 text-xs uppercase tracking-[0.25em] text-[var(--color-primary)]">
                {post.category}
              </span>

              <h3 className="mt-5 text-2xl font-serif text-white transition group-hover:text-[var(--color-primary)]">
                {post.title}
              </h3>

              <div className="mt-5 flex items-center gap-2 text-sm text-neutral-400">
                <Calendar size={16} />
                {post.date}
              </div>

              <Link
                to={`/blog/${post.slug}`}
                className="mt-8 inline-flex items-center gap-2 text-[var(--color-primary)]"
              >
                Read Article

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-14 text-center">
        <Link
          to="/blog"
          className="inline-flex items-center gap-3 rounded-full border border-[var(--color-primary)] px-8 py-4 text-[var(--color-primary)] transition hover:bg-[var(--color-primary)] hover:text-black"
        >
          Explore All Articles

          <ArrowRight size={18} />
        </Link>
      </div>
    </Section>
  );
}

export default BlogPreview;
