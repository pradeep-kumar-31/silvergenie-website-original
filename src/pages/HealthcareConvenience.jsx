import "../styles/HealthcareConvenience.css";

function HealthcareConvenience() {
  const convenienceServices = [
    {
      number: "01",
      title: "Dedicated Health Concierge",
      text: "A dedicated health concierge to help coordinate and support your healthcare needs.",
    },
    {
      number: "02",
      title: "Personal Digital Health Records",
      text: "Personal health records maintained digitally to help keep important health information organized.",
    },
    {
      number: "03",
      title: "Physical Health Coach / Buddy",
      text: "Physical health coach or buddy support to help you stay on track with your healthcare needs.",
    },
    {
      number: "04",
      title: "Home Sample Collection",
      text: "Convenient access to home sample collection for diagnostic requirements.",
    },
    {
      number: "05",
      title: "Medicine Delivery",
      text: "Medicines can be arranged and delivered to your doorstep for greater convenience.",
    },
    {
      number: "06",
      title: "Medical Equipment Delivery",
      text: "Medical equipment delivery support to help make healthcare requirements available at home.",
    },
    {
      number: "07",
      title: "Customized Plans",
      text: "Customized plans designed around individual healthcare and support requirements.",
    },
  ];

  return (
    <main className="healthcare-convenience-page">

      {/* =====================================================
          HERO
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
              At SilverGenie, we have got you covered. From a
              dedicated health concierge and personal digital
              health records to diagnostic support, medicines
              and medical equipment delivery, we help make
              healthcare available at your doorstep.
            </p>

            <a
              href="/silvergenie-website-original/#contact"
              className="healthcare-convenience-btn"
            >
              Enquire Now →
            </a>

          </div>

          <div className="healthcare-convenience-hero-visual">

            <img
              src={`${import.meta.env.BASE_URL}image/services/healthcare-convenience.png`}
              alt="SilverGenie Healthcare Convenience"
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
          INTRO
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
            Your dedicated health concierge will digitize your
            personal health records and work closely with you
            to improve your health outcomes. Whether it is your
            diagnostic requirements or support with your
            medication or medical equipment, SilverGenie helps
            make everything available at your doorstep.
          </p>

        </div>

      </section>


      {/* =====================================================
          SERVICES
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
              SilverGenie brings together healthcare support
              and everyday convenience services to make
              managing healthcare easier.
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

                <div>

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.text}
                  </p>

                </div>

                <span className="healthcare-convenience-arrow">
                  →
                </span>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          HEALTH CONCIERGE
      ===================================================== */}

      <section className="healthcare-convenience-feature">

        <div className="healthcare-convenience-container">

          <div className="healthcare-convenience-feature-image">

            <img
              src={`${import.meta.env.BASE_URL}image/services/healthcare-convenience.jpg`}
              alt="SilverGenie Health Concierge"
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
              Your dedicated health concierge works closely
              with you to improve your health outcomes and
              coordinate your healthcare requirements.
            </p>

            <p>
              From personal health records and diagnostics to
              medicines and medical equipment, SilverGenie
              helps make healthcare easier and more convenient.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          HOW IT HELPS
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

          </div>


          <div className="healthcare-convenience-benefits-grid">

            <article>

              <span>01</span>

              <h3>
                Healthcare Coordination
              </h3>

              <p>
                Support through a dedicated health concierge
                for healthcare requirements.
              </p>

            </article>


            <article>

              <span>02</span>

              <h3>
                Digital Health Records
              </h3>

              <p>
                Personal digital health records to keep
                important healthcare information organized.
              </p>

            </article>


            <article>

              <span>03</span>

              <h3>
                Home Convenience
              </h3>

              <p>
                Home sample collection along with medicine
                and medical equipment delivery support.
              </p>

            </article>


            <article>

              <span>04</span>

              <h3>
                Customized Support
              </h3>

              <p>
                Customized plans based on individual
                healthcare requirements.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
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
            Let SilverGenie help you manage your healthcare
            needs with greater convenience and support.
          </p>

          <a
            href="/silvergenie-website-original/#contact"
            className="healthcare-convenience-btn"
          >
            Connect With Us →
          </a>

        </div>

      </section>

    </main>
  );
}

export default HealthcareConvenience;