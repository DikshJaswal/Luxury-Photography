import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

function BlogGrid() {
  const blogs = [
    {
      id: 1,
      category: "Destination",
      title: "How To Plan The Perfect Destination Pre-Wedding Shoot",
      excerpt:
        "A practical guide to choosing your location, outfits, travel timing, permissions, and shoot flow before the camera day.",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
      date: "June 20, 2026",
      readTime: "6 min read",
      slug: "destination-pre-wedding-guide",
    },
    {
      id: 2,
      category: "Shoot Planning",
      title: "10 Pre-Wedding Frames Couples Always Love",
      excerpt:
        "From quiet close-ups to wide cinematic landscapes, these are the frames that make a pre-wedding gallery feel complete.",
      image:
        "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop",
      date: "June 15, 2026",
      readTime: "5 min read",
      slug: "must-have-pre-wedding-frames",
    },
    {
      id: 3,
      category: "Photography",
      title: "Why Golden Hour Creates Magical Couple Portraits",
      excerpt:
        "Learn why photographers love golden hour and how natural light creates elegant, timeless portraits you will cherish forever.",
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2070&auto=format&fit=crop",
      date: "June 10, 2026",
      readTime: "4 min read",
      slug: "golden-hour-couple-photography",
    },
    {
      id: 4,
      category: "Behind The Scenes",
      title: "Behind The Scenes Of A Cinematic Shoot Day",
      excerpt:
        "Go behind the camera and see how styling, direction, scouting, drone planning, and lighting come together on shoot day.",
      image:
        "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
      date: "June 4, 2026",
      readTime: "7 min read",
      slug: "behind-the-scenes",
    },
    {
      id: 5,
      category: "Planning",
      title: "Creating A Stress-Free Pre-Wedding Timeline",
      excerpt:
        "A carefully planned schedule keeps travel, makeup, outfits, light, and location changes calm and beautifully timed.",
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
      date: "May 28, 2026",
      readTime: "5 min read",
      slug: "pre-wedding-timeline",
    },
    {
      id: 6,
      category: "Inspiration",
      title: "Luxury Pre-Wedding Trends Couples Love In 2026",
      excerpt:
        "Explore elegant styling, cinematic films, destination concepts, and modern couple portraits that inspire premium shoots.",
      image:
        "https://images.unsplash.com/photo-1513278974582-3e1b4a4fa21d?q=80&w=2070&auto=format&fit=crop",
      date: "May 20, 2026",
      readTime: "8 min read",
      slug: "pre-wedding-trends-2026",
    },
  ];

  return (
    <section id="articles" className="bg-[#0B0B0B] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="group flex h-full flex-col overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] transition-all duration-500 hover:-translate-y-2 hover:border-[var(--color-primary)]/40 hover:shadow-[0_30px_70px_rgba(0,0,0,0.45)]"
            >
              <div className="relative h-[340px] overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <span className="rounded-full bg-[var(--color-primary)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-black">
                    {blog.category}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-8">
                <h3 className="font-serif text-3xl font-light leading-[1.2] text-white transition-colors duration-300 group-hover:text-[var(--color-primary)]">
                  {blog.title}
                </h3>

                <p className="mt-6 leading-8 text-neutral-400">
                  {blog.excerpt}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-neutral-500">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{blog.date}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                <Link
                  to={`/blog/${blog.slug}`}
                  className="mt-auto inline-flex items-center gap-3 pt-10 font-medium text-[var(--color-primary)] transition-all duration-300 hover:gap-5"
                >
                  Read Full Story
                  <ArrowRight size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogGrid;
