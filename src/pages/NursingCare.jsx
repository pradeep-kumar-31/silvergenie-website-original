function NursingCare() {
  const services = [
    "Skilled Nursing Care",
    "24X7 Nursing Assistance",
    "Post-Hospitalisation Care",
    "Medication Support",
    "Vital Monitoring",
    "Personalised Care at Home",
  ];

  return (
    <main className="service-page">

      {/* HERO */}
      <section className="service-page-hero">
        <div className="service-page-container">

          <div className="service-page-content">

            <span className="section-label">
              SILVERGENIE NURSING CARE
            </span>

            <h1>
              Professional Nursing Care
              <span> at Home</span>
            </h1>

            <p>
              Access dependable nursing assistance and personalised
              healthcare support in the comfort of your home.
            </p>

            <a href="/contact" className="primary-btn">
              Get Nursing Care →
            </a>

          </div>

          <div className="service-page-image">

            <img
              src="/image/services/nursing-care.png"
              alt="SilverGenie Nursing Care"
            />

          </div>

        </div>
      </section>


      {/* ABOUT */}
      <section className="service-about-section">

        <div className="service-page-container">

          <div className="service-about-content">

            <span className="section-label">
              PROFESSIONAL CARE AT HOME
            </span>

            <h2>
              Personalised
              <span> Nursing Support.</span>
            </h2>

            <p>
              SilverGenie provides nursing care and healthcare
              assistance designed around the individual needs of
              seniors and patients.
            </p>

            <p>
              Our support helps families manage healthcare needs
              while enabling their loved ones to receive care in
              familiar surroundings.
            </p>

            <p>
              From regular monitoring to ongoing assistance,
              SilverGenie aims to make healthcare management more
              convenient and dependable.
            </p>

          </div>

        </div>

      </section>


      {/* FEATURES */}
      <section className="service-features-section">

        <div className="service-page-container">

          <div className="service-section-heading">

            <span className="section-label">
              NURSING CARE SUPPORT
            </span>

            <h2>
              Our Nursing
              <span> Services</span>
            </h2>

            <p>
              Nursing assistance tailored to the healthcare needs
              of patients and seniors.
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
              NEED NURSING CARE?
            </span>

            <h2>
              Get professional care
              <span> at home.</span>
            </h2>

            <p>
              Contact SilverGenie to know more about our nursing
              care services and available support.
            </p>

            <a href="/contact" className="primary-btn">
              Contact SilverGenie →
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default NursingCare;