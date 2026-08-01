import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Packages from "../pages/Packages";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Faqs from "../pages/Faqs";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Book from "../pages/Book";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/portfolio" element={<Portfolio />} />

      <Route path="/packages" element={<Packages />} />

      <Route path="/about" element={<About />} />

      <Route path="/blog" element={<Blog />} />

      <Route path="/faqs" element={<Faqs />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/book" element={<Book />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;