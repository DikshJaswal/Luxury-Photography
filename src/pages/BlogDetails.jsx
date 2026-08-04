import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import blogPosts from "../data/blogData";
import { getOptimizedImageUrl } from "../utils/helpers";

function BlogDetails() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  useEffect(() => {
    if (!post) return undefined;

    const previousTitle = document.title;
    const meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta?.getAttribute("content") || "";

    document.title = `${post.title} | Rishikesh Prewed Studio`;
    meta?.setAttribute("content", post.excerpt);

    return () => {
      document.title = previousTitle;
      meta?.setAttribute("content", previousDescription);
    };
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <main className="bg-[#0B0B0B] text-white">
      <section className="relative h-[65vh] min-h-[520px] overflow-hidden">
        <img src={getOptimizedImageUrl(post.image, { width: 1600 })} alt={post.title} loading="eager" fetchPriority="high" decoding="async" className="h-full w-full bg-black object-contain" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-black/45 to-black/20" />

        <div className="absolute bottom-14 left-1/2 w-full max-w-7xl -translate-x-1/2 px-6 lg:px-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-3 text-white/80 transition hover:text-[var(--color-primary)]"
          >
            <ArrowLeft size={18} /> Back to Journal
          </Link>

          <span className="mt-8 block text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
            {post.category}
          </span>

          <h1 className="mt-5 max-w-4xl font-serif text-5xl font-light leading-[1.05] md:text-6xl lg:text-7xl">
            {post.title}
          </h1>

          <div className="mt-7 flex flex-wrap gap-6 text-sm text-neutral-300">
            <span className="flex items-center gap-2"><Calendar size={16} />{post.date}</span>
            <span className="flex items-center gap-2"><Clock size={16} />{post.readTime}</span>
          </div>
        </div>
      </section>

      <article className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <p className="font-serif text-2xl leading-[1.7] text-neutral-200 md:text-3xl">
            {post.intro}
          </p>

          {post.sections.map((section) => (
            <section key={section.title} className="mt-14">
              <h2 className="font-serif text-4xl font-light text-white">{section.title}</h2>
              <p className="mt-6 text-lg leading-9 text-neutral-400">{section.body}</p>
            </section>
          ))}

          <div className="mt-16 border-l-2 border-[var(--color-primary)] pl-6 text-sm leading-7 text-neutral-400">
            <p>Travel information reference: <a href={post.sourceUrl} target="_blank" rel="noreferrer" className="text-[var(--color-primary)] hover:underline">{post.sourceLabel}</a>.</p>
            <p className="mt-2">Always confirm venue permissions, seasonal conditions, and local rules before booking.</p>
          </div>
        </div>
      </article>

      <section className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <h2 className="font-serif text-4xl font-light md:text-5xl">Planning a shoot in {post.title.split(" ").slice(-1)}?</h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-neutral-400">Tell us your preferred date, location, and visual style. We&apos;ll help shape the right plan for your story.</p>
          <Link to="/book" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[var(--color-primary)] px-8 py-4 font-medium text-black transition hover:scale-105">Start Your Inquiry <ArrowRight size={18} /></Link>
        </div>
      </section>
    </main>
  );
}

export default BlogDetails;
