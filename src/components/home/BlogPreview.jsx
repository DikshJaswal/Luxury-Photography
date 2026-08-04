import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import Section from "../common/Section";

import blogPosts from "../../data/blogData";
import { getOptimizedImageUrl } from "../../utils/helpers";

function BlogPreview() {
  return (
    <Section>
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <h2 className="mx-auto max-w-4xl text-center font-serif text-4xl text-balance text-white md:text-5xl lg:text-6xl">
          Our <span className="text-[var(--color-primary)]">Journal</span>
        </h2>
      </div>

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
                src={getOptimizedImageUrl(post.image, { width: 900 })}
                alt={post.title}
                loading="lazy"
                decoding="async"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-serif text-white transition group-hover:text-[var(--color-primary)]">
                {post.title}
              </h3>
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
