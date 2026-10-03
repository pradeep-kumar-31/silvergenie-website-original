function ElderCare() {
  const services = [
    "Personalised elder care support",
    "Day-to-day assistance",
    "Healthcare coordination",
    "Attendant and caregiver support",
    "Hospital and appointment assistance",
    "Continuous care and support",
  ];

  return (
    <main className="service-page">

      {/* HERO */}
      <section className="service-page-hero">
        <div className="service-page-container">

          <div className="service-page-content">

            <span className="section-label">
              SILVERGENIE ELDER CARE
            </span>

            <h1>
              Compassionate Care
              <span> for Your Loved Ones</span>
            </h1>

            <p>
              SilverGenie provides personalised elder care support
              designed around the healthcare and everyday needs of
              senior citizens.
            </p>

            <a
              href="/contact"
              className="primary-btn"
            >
              Get Care Now →
            </a>

          </div>

          <div className="service-page-image">

            <img
              src="/image/services/elder-care.jpg"
              alt="SilverGenie Elder Care"
            />

          </div>

        </div>
      </section>


      {/* ABOUT SERVICE */}
      <section className="service-about-section">

        <div className="service-page-container">

          <div className="service-about-content">

            <span className="section-label">
              ELDER CARE
            </span>

            <h2>
              Care that puts
              <span> seniors first.</span>
            </h2>

            <p>
              SilverGenie understands that ageing comes with changing
              healthcare and day-to-day support needs. Our elder care
              services are designed to provide dependable assistance
              while helping seniors maintain comfort, dignity and
              independence.
            </p>

            <p>
              From everyday assistance to healthcare coordination,
              SilverGenie helps families manage the care needs of
              their loved ones with greater convenience and support.
            </p>

          </div>

        </div>

      </section>


      {/* FEATURES */}
      <section className="service-features-section">

        <div className="service-page-container">

          <div className="service-section-heading">

            <span className="section-label">
              OUR SUPPORT
            </span>

            <h2>
              Elder Care
              <span> Support</span>
            </h2>

            <p>
              Support designed around the changing needs of senior
              citizens and their families.
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
              NEED ELDER CARE SUPPORT?
            </span>

            <h2>
              Let's find the right
              <span> care for your family.</span>
            </h2>

            <p>
              Get in touch with SilverGenie to understand our elder
              care services and support options.
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

export default ElderCare;