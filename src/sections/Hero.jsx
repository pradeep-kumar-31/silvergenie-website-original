import { useEffect, useState } from "react";

import hero1 from "../assets/hero/hero 1.jpg";
import hero2 from "../assets/hero/hero 2.png";
import hero3 from "../assets/hero/hero 3.png";
import hero4 from "../assets/hero/hero 4.png";
import hero5 from "../assets/hero/hero 5.jpg";

const heroImages = [
  hero1,
  hero2,
  hero3,
  hero4,
  hero5,
];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((previous) => {
        return (previous + 1) % heroImages.length;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="home">

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">

          <div className="hero-badge">
            TRUSTED HEALTHCARE & ELDER CARE
          </div>

          <h1>
            We Care for Those
            <span>Who Have Always Cared for Us</span>
          </h1>

          <p>
            Offering advanced and holistic healthcare
            assistance to seniors with compassion,
            convenience and continuous support.
          </p>

          <div className="hero-buttons">

            <a
              href="/#contact"
              className="primary-btn"
            >
              Get Care Now →
            </a>

            <a
              href="/#services"
              className="secondary-btn"
            >
              Explore Services
            </a>

          </div>

        </div>

        {/* RIGHT SLIDESHOW */}
        <div className="hero-visual">

          {heroImages.map((image, index) => (
            <img
              key={image}
              src={image}
              alt="SilverGenie Healthcare and Elder Care"
              className={`hero-slide ${
                index === currentImage ? "active" : ""
              }`}
            />
          ))}

          {/* CARE CARD */}
          <div className="floating-card">

            <div className="check-icon">
              ✓
            </div>

            <div>
              <strong>SilverGenie</strong>

              <span>
                Trusted Elder Care & Healthcare Support
              </span>
            </div>

          </div>

          {/* SLIDER DOTS */}
          <div className="hero-dots">

            {heroImages.map((_, index) => (
              <button
                key={index}
                className={
                  index === currentImage
                    ? "active"
                    : ""
                }
                onClick={() => setCurrentImage(index)}
                aria-label={`Show hero image ${index + 1}`}
              />
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;