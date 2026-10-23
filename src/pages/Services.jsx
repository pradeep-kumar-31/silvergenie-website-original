const services = [
  {
    title: "Elder Care",
    text: "Comprehensive care and support for senior citizens.",
    image: `${import.meta.env.BASE_URL}image/services/elder-care.jpeg`,
    link: "/elder-care",
  },
  {
    title: "Home Care",
    text: "Senior care attendants, nursing care and home-based support.",
    image: `${import.meta.env.BASE_URL}image/services/home-care.png`,
    link: "/home-care",
  },
  {
    title: "Nursing Care",
    text: "Professional nursing assistance and personalised healthcare support at home.",
    image: `${import.meta.env.BASE_URL}image/services/healthcare-manpower-.png`,
    link: "/nursing-care",
  },
  {
    title: "Emergency Care",
    text: "Emergency preparedness, support and coordination.",
    image: `${import.meta.env.BASE_URL}image/services/emergency-care.png`,
    link: "/emergency-care",
  },
  {
    title: "Wellness Services",
    text: "Support for physical and mental well-being.",
    image: `${import.meta.env.BASE_URL}image/services/wellness-services.png`,
    link: "#contact",
  },
];

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        {/* SECTION HEADING */}
        <div className="services-heading">
          <span className="section-label">OUR SERVICES</span>

          <h2>
            Care designed
            <span> around your needs.</span>
          </h2>

          <p>
            From everyday assistance to specialised healthcare,
            SilverGenie helps families access dependable care
            with compassion and convenience.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              {/* SERVICE IMAGE */}
              <div className="service-image">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="eager"
                  decoding="async"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    minHeight: "250px",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  onError={(event) => {
                    console.error(
                      `Image load nahi hui: ${service.title}`,
                      event.currentTarget.src
                    );
                  }}
                />
              </div>

              {/* SERVICE CONTENT */}
              <div className="service-card-content">
                <h3>{service.title}</h3>

                <p>{service.text}</p>

                <a href={service.link} className="service-link">
                  Explore Service <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;