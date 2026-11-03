const serviceImages = [
  "elder-care.jpeg",
  "home-care.png",
  "diabetes-management.jpeg",
  "wellness-services.png",
  "emergency-care.jpeg",
  "healthcare-convenience.jpeg",
  "health-care-management.jpeg",
  "healthcare-manpower-.jpeg",
];

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-heading">
          <span className="services-label">SERVICES BOUQUET</span>

          <h2>Standard and Customised Services for Seniors</h2>

          <p>
            Care that is consistent and compassionate for seniors is our
            yardstick. Our services bouquet consists of both standard and highly
            customised services.
          </p>
        </div>

        <div className="services-grid">
          {serviceImages.map((image, index) => (
            <article className="service-card" key={image}>
              <div className="service-image">
                <img
                  src={`${import.meta.env.BASE_URL}image/services/${image}`}
                  alt={`SilverGenie service ${index + 1}`}
                  loading={index < 4 ? "eager" : "lazy"}
                  decoding="async"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
