function BlogGrid() {
  const blogs = [
    {
      id: 1,
      title: "How To Plan The Perfect Destination Pre-Wedding Shoot",
      excerpt:
        "A practical guide to choosing your location, outfits, travel timing, permissions, and shoot flow before the camera day.",
      image:
        "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785401978/blog-07.jpg_ku8otp.jpg",
    },
    {
      id: 2,
      title: "10 Pre-Wedding Frames Couples Always Love",
      excerpt:
        "From quiet close-ups to wide cinematic landscapes, these are the frames that make a pre-wedding gallery feel complete.",
      image:
        "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785401974/blog-06.jpg_zcqzc5.jpg",
    },
    {
      id: 3,
      title: "Why Golden Hour Creates Magical Couple Portraits",
      excerpt:
        "Learn why photographers love golden hour and how natural light creates elegant, timeless portraits you'll cherish forever.",
      image:
        "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785401972/blog-05.jpg_k3dtje.jpg",
    },
    {
      id: 4,
      title: "Behind The Scenes Of A Cinematic Shoot Day",
      excerpt:
        "Go behind the camera and see how styling, direction, scouting, drone planning, and lighting come together on shoot day.",
      image:
        "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785401967/blog-02.jpg_cs5bza.jpg",
    },
    {
      id: 5,
      title: "Creating A Stress-Free Pre-Wedding Timeline",
      excerpt:
        "A carefully planned schedule keeps travel, makeup, outfits, light, and location changes calm and beautifully timed.",
      image:
        "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785401962/blog-01.jpg_t6i22c.jpg",
    },
    {
      id: 6,
      title: "Luxury Pre-Wedding Trends Couples Love In 2026",
      excerpt:
        "Explore elegant styling, cinematic films, destination concepts, and modern couple portraits that inspire premium shoots.",
      image:
        "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785401966/blog-03.jpg_reaeqj.jpg",
    },
  ];

  return (
    <section
      id="articles"
      className="bg-[#0B0B0B] py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="group overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] transition-all duration-500 hover:-translate-y-2 hover:border-[var(--color-primary)]/40 hover:shadow-[0_30px_70px_rgba(0,0,0,0.45)]"
            >
              <div className="relative h-[340px] overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
              </div>

              <div className="p-8">
                <h3 className="font-serif text-3xl font-light leading-[1.2] text-white transition-colors duration-300 group-hover:text-[var(--color-primary)]">
                  {blog.title}
                </h3>

                <p className="mt-6 leading-8 text-neutral-400">
                  {blog.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogGrid;