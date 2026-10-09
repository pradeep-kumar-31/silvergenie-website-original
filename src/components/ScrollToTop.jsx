import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Agar URL me hash hai, jaise #contact
    if (location.hash) {
      const id = location.hash.replace("#", "");

      // Home page render hone ke baad section ko find karo
      const scrollToSection = () => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          return true;
        }

        return false;
      };

      // First attempt
      if (scrollToSection()) return;

      // React render complete hone ke baad second attempt
      const timer = setTimeout(() => {
        scrollToSection();
      }, 300);

      return () => clearTimeout(timer);
    }

    // Normal page change par top par jao
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname, location.hash]);

  return null;
}

export default ScrollToTop;