import { useEffect, useState } from "react";

import hero1 from "../assets/hero/hero 1.jpg";
import hero2 from "../assets/hero/hero 2.png";
import hero3 from "../assets/hero/hero 3.png";
import hero4 from "../assets/hero/hero 4.png";
import hero5 from "../assets/hero/hero 5.jpg";

const heroImages = [hero1, hero2, hero3, hero4, hero5];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((previous) => (previous + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToContact = () => {
    const contactSection = document.getElementById("contact");

    contactSection?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">THE SILVERGENIE MANTRA</div>

          <h1>
            We Care for Those
            <span>Who Have Always Cared for Us</span>
          </h1>

          <p>Advanced, holistic health &amp; care assistance for seniors</p>

          {/* Impact stats: display only, not clickable */}
          <div className="hero-stats" aria-label="SilverGenie impact">
            <div className="hero-stat">
              <strong>1,000+</strong>
              <span>Seniors served directly</span>
            </div>

            <div className="hero-stat">
              <strong>50,000+</strong>
              <span>Senior lives touched</span>
            </div>

            <div className="hero-stat">
              <strong>350,000+</strong>
              <span>Caregiver hours</span>
            </div>
          </div>

          <div className="hero-buttons">
            <button type="button" className="primary-btn" onClick={goToContact}>
              Connect Now →
            </button>
          </div>
        </div>

        <div className="hero-visual">
          {heroImages.map((image, index) => (
            <img
              key={image}
              src={image}
              alt="SilverGenie healthcare and elder care"
              className={`hero-slide ${index === currentImage ? "active" : ""}`}
            />
          ))}

          <div className="floating-card">
            <div className="check-icon">✓</div>
            <div>
              <strong>SilverGenie</strong>
              <span>Trusted Elder Care &amp; Healthcare Support</span>
            </div>
          </div>

          <div className="hero-dots">
            {heroImages.map((_, index) => (
              <button
                key={index}
                type="button"
                className={index === currentImage ? "active" : ""}
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
