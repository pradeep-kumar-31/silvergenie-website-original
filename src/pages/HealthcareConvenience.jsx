import { useNavigate } from "react-router-dom";
import "../styles/HealthcareConvenience.css";

function HealthcareConvenience() {
  const navigate = useNavigate();

  // =========================================================
  // NAVIGATE TO CONTACT FORM
  // =========================================================

  const goToContact = () => {
    const contactSection = document.getElementById("contact");

    // If the contact form exists on the current page
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      return;
    }

    // Navigate to the home page and scroll to its contact section
    navigate("/#contact");

    window.setTimeout(() => {
      const section = document.getElementById("contact");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 500);
  };

  // =========================================================
  // HEALTHCARE CONVENIENCE SERVICES
  // =========================================================

  const convenienceServices = [
    {
      number: "01",
      title: "Dedicated Health Concierge",
      text: "Personalized assistance to coordinate healthcare requirements and make accessing relevant services easier.",
    },
    {
      number: "02",
      title: "Personal Digital Health Records",
      text: "Keep important medical information, health history and reports organized through Personal Health Records (PHR).",
    },
    {
      number: "03",
      title: "Physical Health Coach / Buddy",
      text: "Receive guidance and support to help you stay engaged with your healthcare and well-being goals.",
    },
    {
      number: "04",
      title: "Home Sample Collection",
      text: "Get assistance with diagnostic requirements and convenient home sample collection arrangements.",
    },
    {
      number: "05",
      title: "Medicine Delivery",
      text: "Get support with arranging medicines and making medication access more convenient.",
    },
    {
      number: "06",
      title: "Medical Equipment Delivery",
      text: "Access assistance with medical equipment requirements to support care and recovery at home.",
    },
    {
      number: "07",
      title: "Customized Healthcare Plans",
      text: "Explore personalized support options based on individual healthcare needs and preferences.",
    },
  ];

  // =========================================================
  // HEALTHCARE BENEFITS
  // =========================================================

  const benefits = [
    {
      number: "01",
      title: "Healthcare Coordination",
      text: "A dedicated concierge helps coordinate healthcare requirements and related services.",
    },
    {
      number: "02",
      title: "Digital Health Records",
      text: "Keep important health information organized for easier access and healthcare coordination.",
    },
    {
      number: "03",
      title: "Health Coach / Buddy",
      text: "Receive additional guidance and support to stay focused on your health and well-being.",
    },
    {
      number: "04",
      title: "Diagnostic Support",
      text: "Get assistance with diagnostic requirements and home sample collection arrangements.",
    },
    {
      number: "05",
      title: "Doorstep Convenience",
      text: "Get support with medicine and medical equipment delivery arrangements.",
    },
    {
      number: "06",
      title: "Personalized Assistance",
      text: "Explore customized healthcare support according to your individual requirements.",
    },
  ];

  return (
    <main className="healthcare-convenience-page">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="healthcare-convenience-hero">

        <div className="healthcare-convenience-container">

          <div className="healthcare-convenience-hero-content">

            <span className="healthcare-convenience-label">
              SILVERGENIE HEALTHCARE CONVENIENCE
            </span>

            <h1>
              Healthcare
              <span>Made Convenient.</span>
            </h1>

            <p>
              At SilverGenie, we help make managing healthcare
              simpler and more convenient. From a dedicated
              health concierge and Personal Health Records to
              diagnostic support, medicine delivery and medical
              equipment assistance, we help you access relevant
              healthcare services with greater convenience.
            </p>

            <button
              type="button"
              className="healthcare-convenience-btn"
              onClick={goToContact}
            >
              Enquire Now
              <span aria-hidden="true">→</span>
            </button>

            <div className="healthcare-convenience-trust-points">
              <span>Personalized Assistance</span>
              <span>Healthcare Coordination</span>
              <span>Doorstep Convenience</span>
            </div>

          </div>

          <div className="healthcare-convenience-hero-visual">

            <img
              src={`${import.meta.env.BASE_URL}image/services/healthcare-convenience.png`}
              alt="SilverGenie healthcare convenience and concierge support"
              fetchPriority="high"
            />

            <div className="healthcare-convenience-floating-card">

              <strong>360°</strong>

              <span>
                Healthcare Support
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="healthcare-convenience-intro">

        <div className="healthcare-convenience-container">

          <span className="healthcare-convenience-label">
            CONVENIENCE SERVICES
          </span>

          <h2>
            We have
            <span>got you covered.</span>
          </h2>

          <p>
            Managing healthcare involves more than doctor visits.
            Medical records, diagnostic requirements, medicines
            and everyday health needs also require attention.
            SilverGenie helps coordinate these requirements
            through personalized assistance, digital health
            records and convenient access to relevant services.
          </p>

        </div>

      </section>


      {/* =====================================================
          CONVENIENCE SERVICES
      ===================================================== */}

      <section className="healthcare-convenience-services">

        <div className="healthcare-convenience-container">

          <div className="healthcare-convenience-section-heading">

            <span className="healthcare-convenience-label">
              OUR CONVENIENCE SERVICES
            </span>

            <h2>
              Everything you need,
              <span>within reach.</span>
            </h2>

            <p>
              Explore healthcare coordination and convenience
              services designed to help simplify your healthcare
              journey.
            </p>

          </div>


          <div className="healthcare-convenience-services-grid">

            {convenienceServices.map((service) => (

              <article
                className="healthcare-convenience-service-card"
                key={service.number}
              >

                <span className="healthcare-convenience-number">
                  {service.number}
                </span>

                <div className="healthcare-convenience-service-content">

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.text}
                  </p>

                </div>

                <span
                  className="healthcare-convenience-arrow"
                  aria-hidden="true"
                >
                  →
                </span>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          DEDICATED HEALTH CONCIERGE
      ===================================================== */}

      <section className="healthcare-convenience-feature">

        <div className="healthcare-convenience-container">

          <div className="healthcare-convenience-feature-image">

            <img
              src={`${import.meta.env.BASE_URL}image/services/healthcare-convenience.jpg`}
              alt="SilverGenie dedicated health concierge support"
              loading="lazy"
            />

          </div>


          <div className="healthcare-convenience-feature-content">

            <span className="healthcare-convenience-label">
              DEDICATED HEALTH CONCIERGE
            </span>

            <h2>
              Healthcare support
              <span>at your doorstep.</span>
            </h2>

            <p>
              Your dedicated health concierge helps coordinate
              your healthcare requirements and provides support
              in accessing relevant services.
            </p>

            <p>
              From maintaining Personal Health Records and
              coordinating diagnostic requirements to arranging
              medicine and medical equipment delivery, SilverGenie
              helps make everyday healthcare management more
              convenient.
            </p>

            <button
              type="button"
              className="healthcare-convenience-btn"
              onClick={goToContact}
            >
              Talk to Our Team
              <span aria-hidden="true">→</span>
            </button>

          </div>

        </div>

      </section>


      {/* =====================================================
          HEALTHCARE BENEFITS
      ===================================================== */}

      <section className="healthcare-convenience-benefits">

        <div className="healthcare-convenience-container">

          <div className="healthcare-convenience-section-heading">

            <span className="healthcare-convenience-label">
              THE SILVERGENIE DIFFERENCE
            </span>

            <h2>
              Making healthcare
              <span>easier.</span>
            </h2>

            <p>
              Convenient access, organized health information
              and personalized assistance can help simplify
              the way you manage everyday healthcare needs.
            </p>

          </div>


          <div className="healthcare-convenience-benefits-grid">

            {benefits.map((benefit) => (

              <article key={benefit.number}>

                <span>
                  {benefit.number}
                </span>

                <h3>
                  {benefit.title}
                </h3>

                <p>
                  {benefit.text}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CONTACT CTA
      ===================================================== */}

      <section className="healthcare-convenience-cta">

        <div className="healthcare-convenience-container">

          <span className="healthcare-convenience-label">
            SILVERGENIE HEALTHCARE CONVENIENCE
          </span>

          <h2>
            Making healthcare
            <span>simple and accessible.</span>
          </h2>

          <p>
            Let our team help you explore healthcare convenience
            services and personalized support options for
            yourself or your loved ones.
          </p>

          <button
            type="button"
            className="healthcare-convenience-btn"
            onClick={goToContact}
          >
            Connect With Us
            <span aria-hidden="true">→</span>
          </button>

        </div>

      </section>

    </main>
  );
}

export default HealthcareConvenience;