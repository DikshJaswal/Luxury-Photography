import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const scrollToHash = () => {
      if (!hash) return false;

      const targetId = hash.replace("#", "");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        return true;
      }

      return false;
    };

    if (hash) {
      let attempts = 0;
      const interval = window.setInterval(() => {
        if (scrollToHash() || attempts++ >= 10) {
          window.clearInterval(interval);
        }
      }, 50);

      // Try immediately as well.
      if (scrollToHash()) {
        window.clearInterval(interval);
      }

      return () => window.clearInterval(interval);
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;