function HealthcareConvenience() {
  const services = [
    {
      title: "Medicine Delivery",
      text: "Convenient access to medicines and healthcare essentials.",
    },
    {
      title: "Diagnostic Services",
      text: "Support in accessing diagnostic and testing services.",
    },
    {
      title: "Doctor Consultation Assistance",
      text: "Assistance in coordinating healthcare consultations.",
    },
    {
      title: "Health Check-ups",
      text: "Support for routine health check-ups and monitoring.",
    },
    {
      title: "Ambulance Assistance",
      text: "Assistance with ambulance coordination during healthcare needs.",
    },
    {
      title: "Healthcare Support",
      text: "Convenient healthcare assistance designed around everyday needs.",
    },
  ];

  return (
    <section className="service-detail-section">

      <div className="service-detail-container">

        {/* HEADER */}
        <div className="service-detail-content">

          <span className="section-label">
            HEALTHCARE CONVENIENCE SERVICES
          </span>

          <h1>
            Healthcare Made
            <span> Convenient</span>
          </h1>

          <p>
            SilverGenie helps seniors and their families access
            essential healthcare services with greater convenience,
            coordination and support.
          </p>

          <p>
            From everyday healthcare requirements to assistance
            during important medical needs, our team helps simplify
            the healthcare journey.
          </p>

        </div>


        {/* SERVICES */}
        <div className="service-detail-features">

          {services.map((service, index) => (
            <div
              className="service-detail-card"
              key={service.title}
            >

              <span className="service-detail-number">
                0{index + 1}
              </span>

              <h3>
                {service.title}
              </h3>

              <p>
                {service.text}
              </p>

            </div>
          ))}

        </div>


        {/* CTA */}
        <div className="service-detail-cta">

          <h2>
            Need healthcare assistance?
          </h2>

          <p>
            Contact SilverGenie to know more about our
            healthcare convenience services.
          </p>

          <a href="/#contact">
            Enquire Now →
          </a>

        </div>

      </div>

    </section>
  );
}

export default HealthcareConvenience;