import { useEffect, useState } from "react";

import hero1 from "../assets/hero/hero 1.jpg";
import hero2 from "../assets/hero/hero 2.png";
import hero3 from "../assets/hero/hero 3.png";
import hero4 from "../assets/hero/hero 4.png";
import hero5 from "../assets/hero/hero 5.jpg";


/* =========================================================
   HERO IMAGES
========================================================= */

const heroImages = [
  hero1,
  hero2,
  hero3,
  hero4,
  hero5,
];


function Hero() {

  const [currentImage, setCurrentImage] = useState(0);


  /* =======================================================
     AUTO SLIDER
  ======================================================= */

  useEffect(() => {

    const timer = setInterval(() => {

      setCurrentImage((previous) => {

        return (previous + 1) % heroImages.length;

      });

    }, 5000);


    return () => clearInterval(timer);

  }, []);


  /* =======================================================
     CONTACT SCROLL
  ======================================================= */

  const goToContact = () => {

    const contactSection =
      document.getElementById("contact");

    if (contactSection) {

      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    }

  };


  /* =======================================================
     JSX
  ======================================================= */

  return (

    <section
      className="hero"
      id="home"
    >

      <div className="hero-container">


        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div className="hero-content">


          {/* BADGE */}

          <div className="hero-badge">
            TRUSTED HEALTHCARE & ELDER CARE
          </div>


          {/* HEADING */}

          <h1>

            We Care for Those

            <span>
              Who Have Always Cared for Us
            </span>

          </h1>


          {/* DESCRIPTION */}

          <p>
            Offering advanced and holistic healthcare
            assistance to seniors
          </p>


          {/* BUTTON */}

          <div className="hero-buttons">

            <button
              type="button"
              className="primary-btn"
              onClick={goToContact}
            >
              Connect Now →
            </button>

          </div>


        </div>


        {/* =================================================
            RIGHT IMAGE SLIDER
        ================================================= */}

        <div className="hero-visual">


          {/* SLIDES */}

          {heroImages.map((image, index) => (

            <img
              key={image}
              src={image}
              alt="SilverGenie Healthcare and Elder Care"
              className={`hero-slide ${
                index === currentImage
                  ? "active"
                  : ""
              }`}
            />

          ))}


          {/* =================================================
              FLOATING CARE CARD
          ================================================= */}

          <div className="floating-card">

            <div className="check-icon">
              ✓
            </div>


            <div>

              <strong>
                SilverGenie
              </strong>

              <span>
                Trusted Elder Care & Healthcare Support
              </span>

            </div>

          </div>


          {/* =================================================
              SLIDER DOTS
          ================================================= */}

          <div className="hero-dots">

            {heroImages.map((_, index) => (

              <button
                key={index}
                type="button"
                className={
                  index === currentImage
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setCurrentImage(index)
                }
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