function Wellness() {
  const services = [
    "Physical Wellness Support",
    "Mental Well-being Support",
    "Lifestyle Guidance",
    "Health & Wellness Monitoring",
    "Personalised Wellness Assistance",
    "Continuous Support",
  ];

  return (
    <main className="service-page">

      {/* HERO */}
      <section className="service-page-hero">
        <div className="service-page-container">

          <div className="service-page-content">

            <span className="section-label">
              SILVERGENIE WELLNESS SERVICES
            </span>

            <h1>
              Supporting a
              <span> Healthier Life.</span>
            </h1>

            <p>
              SilverGenie wellness services focus on supporting the
              physical and mental well-being of seniors and helping
              them maintain a healthier and more comfortable lifestyle.
            </p>

            <a href="/contact" className="primary-btn">
              Explore Wellness →
            </a>

          </div>

          <div className="service-page-image">

            <img
              src="/image/services/wellness.png"
              alt="SilverGenie Wellness Services"
            />

          </div>

        </div>
      </section>


      {/* ABOUT */}
      <section className="service-about-section">

        <div className="service-page-container">

          <div className="service-about-content">

            <span className="section-label">
              WELLNESS & WELL-BEING
            </span>

            <h2>
              Care Beyond
              <span> Healthcare.</span>
            </h2>

            <p>
              Wellness is an important part of healthy ageing.
              SilverGenie supports seniors in taking care of their
              physical and mental well-being.
            </p>

            <p>
              Our wellness support is designed to help elders stay
              engaged, comfortable and better connected with their
              everyday health needs.
            </p>

            <p>
              We aim to make wellness an ongoing part of senior care
              through convenient and personalised support.
            </p>

          </div>

        </div>
      </section>


      {/* FEATURES */}
      <section className="service-features-section">

        <div className="service-page-container">

          <div className="service-section-heading">

            <span className="section-label">
              WELLNESS SUPPORT
            </span>

            <h2>
              Our Wellness
              <span> Services</span>
            </h2>

            <p>
              Support designed to promote physical and mental
              well-being as part of everyday senior care.
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
              WELLNESS SUPPORT
            </span>

            <h2>
              Make wellness a part of
              <span> everyday care.</span>
            </h2>

            <p>
              Contact SilverGenie to learn more about our wellness
              services and support.
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

export default Wellness;