function EmergencyCare() {
  const services = [
    "Emergency preparedness and support",
    "Emergency coordination",
    "Hospital coordination",
    "Ambulance and emergency assistance",
    "Healthcare professional coordination",
    "Continuous support during critical situations",
  ];

  return (
    <main className="service-page">

      {/* HERO */}
      <section className="service-page-hero">
        <div className="service-page-container">

          <div className="service-page-content">

            <span className="section-label">
              SILVERGENIE EMERGENCY CARE
            </span>

            <h1>
              Support When
              <span> You Need It Most</span>
            </h1>

            <p>
              SilverGenie provides emergency support and coordination
              to help seniors and their families manage urgent
              healthcare situations with greater ease.
            </p>

            <a
              href="/contact"
              className="primary-btn"
            >
              Get Support Now →
            </a>

          </div>


          <div className="service-page-image">

            <img
              src="/image/services/emergency-care.png"
              alt="SilverGenie Emergency Care"
            />

          </div>

        </div>
      </section>


      {/* ABOUT */}
      <section className="service-about-section">

        <div className="service-page-container">

          <div className="service-about-content">

            <span className="section-label">
              EMERGENCY SUPPORT
            </span>

            <h2>
              Coordinated support
              <span> during emergencies.</span>
            </h2>

            <p>
              Medical emergencies can be stressful for seniors and
              their families. SilverGenie helps coordinate the
              required support and healthcare assistance during
              urgent situations.
            </p>

            <p>
              Our team works to simplify communication and
              coordination so families can focus on their loved
              ones when immediate support is required.
            </p>

          </div>

        </div>

      </section>


      {/* SUPPORT FEATURES */}
      <section className="service-features-section">

        <div className="service-page-container">

          <div className="service-section-heading">

            <span className="section-label">
              OUR SUPPORT
            </span>

            <h2>
              Emergency Care
              <span> Assistance</span>
            </h2>

            <p>
              Support and coordination designed to help families
              navigate urgent healthcare requirements.
            </p>

          </div>


          <div className="service-features-grid">

            {services.map((service, index) => (

              <div
                className="service-feature-card"
                key={service}
              >

                <div className="service-feature-number">
                  0{index + 1}
                </div>

                <h3>
                  {service}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="service-cta-section">

        <div className="service-page-container">

          <div className="service-cta">

            <span className="section-label">
              NEED EMERGENCY SUPPORT?
            </span>

            <h2>
              Get the support you need
              <span> when it matters.</span>
            </h2>

            <p>
              Contact SilverGenie to learn more about our emergency
              care and healthcare coordination services.
            </p>

            <a
              href="/contact"
              className="primary-btn"
            >
              Contact SilverGenie →
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default EmergencyCare;