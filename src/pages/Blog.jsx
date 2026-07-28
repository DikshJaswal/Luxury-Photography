import { useState } from "react";

import BlogHero from "../components/blog/BlogHero";
import FeaturedPost from "../components/blog/FeaturedPost";
import BlogCategories from "../components/blog/BlogCategories";
import BlogGrid from "../components/blog/BlogGrid";
import Newsletter from "../components/blog/Newsletter";

function Blog() {
  const categories = [
    "All Stories",
    "Destination",
    "Shoot Planning",
    "Photography",
    "Planning",
    "Behind The Scenes",
    "Inspiration",
  ];

  const [activeCategory, setActiveCategory] = useState("All Stories");

  return (
    <main className="bg-[#0B0B0B]">
      <BlogHero />

      <FeaturedPost />

      <BlogCategories
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <BlogGrid activeCategory={activeCategory} />

      <Newsletter />
    </main>
  );
}

export default Blog;
