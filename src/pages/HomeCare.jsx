function HomeCare() {
  const services = [
    "Dedicated Concierge",
    "24X7 Assistance",
    "Skilled Resource Pool of Experts",
    "Remote Monitoring",
    "Quick Turnaround Time",
    "Hassle-Free Assistance During Emergency",
  ];

  return (
    <main className="service-page">

      {/* HERO */}
      <section className="service-page-hero">
        <div className="service-page-container">

          <div className="service-page-content">

            <span className="section-label">
              SILVERGENIE HOME CARE
            </span>

            <h1>
              Care and Support
              <span> at Home</span>
            </h1>

            <p>
              SilverGenie brings dependable healthcare assistance
              and support to the comfort of your home, helping
              seniors and their families manage their everyday
              care needs.
            </p>

            <a href="/contact" className="primary-btn">
              Get Home Care →
            </a>

          </div>

          <div className="service-page-image">

            <img
              src="/image/services/home-care.png"
              alt="SilverGenie Home Care"
            />

          </div>

        </div>
      </section>


      {/* ABOUT HOME CARE */}
      <section className="service-about-section">

        <div className="service-page-container">

          <div className="service-about-content">

            <span className="section-label">
              MORE THAN JUST A SERVICE
            </span>

            <h2>
              We Bring
              <span> Home Care.</span>
            </h2>

            <p>
              SilverGenie goes beyond services. We care for elders
              and pay attention to every detail, notice every change
              and assess the physical and mental well-being needs
              that come with age.
            </p>

            <p>
              We understand life can become lonely and health
              demands can take precedence. SilverGenie is there to
              guide and support you at every step.
            </p>

            <p>
              Our goal is to simplify the lives of elders and their
              caregivers by helping them access the support they
              need to manage health better.
            </p>

          </div>

        </div>
      </section>


      {/* HOME CARE FEATURES */}
      <section className="service-features-section">

        <div className="service-page-container">

          <div className="service-section-heading">

            <span className="section-label">
              HOME CARE SUPPORT
            </span>

            <h2>
              What We
              <span> Provide</span>
            </h2>

            <p>
              Comprehensive support designed around the needs of
              seniors and their caregivers.
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
              NEED HOME CARE?
            </span>

            <h2>
              Bring dependable care
              <span> closer to home.</span>
            </h2>

            <p>
              Get in touch with SilverGenie to learn more about
              our home care services and support.
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

export default HomeCare;