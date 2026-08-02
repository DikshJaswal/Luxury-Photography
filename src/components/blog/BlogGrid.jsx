import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import blogPosts from "../../data/blogData";

function BlogGrid() {
  return (
    <section id="articles" className="bg-[#0B0B0B] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((blog) => (
            <article
              key={blog.id}
              className="group overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] transition-all duration-500 hover:-translate-y-2 hover:border-[var(--color-primary)]/40 hover:shadow-[0_30px_70px_rgba(0,0,0,0.45)]"
            >
              <Link to={`/blog/${blog.slug}`} className="block">
                <div className="relative overflow-hidden bg-black">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-auto w-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                </div>

                <div className="p-8">
                  <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-[var(--color-primary)]">
                    <span>{blog.category}</span>
                    <span className="text-white/40">{blog.readTime}</span>
                  </div>

                  <h2 className="mt-5 font-serif text-3xl font-light leading-[1.2] text-white transition-colors duration-300 group-hover:text-[var(--color-primary)]">
                    {blog.title}
                  </h2>

                  <p className="mt-6 leading-8 text-neutral-400">{blog.excerpt}</p>

                  <span className="mt-7 inline-flex items-center gap-2 font-medium text-white">
                    Read guide <ArrowRight size={17} />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogGrid;
