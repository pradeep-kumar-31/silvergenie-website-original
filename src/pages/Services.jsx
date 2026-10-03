const services = [
  {
    title: "Elder Care",
    text: "Comprehensive care and support for senior citizens.",
    image: "/image/services/elder-care.jpg",
    link: "/elder-care",
  },
  {
    title: "Home Care",
    text: "Senior care attendants, nursing care and home-based support.",
    image: "/image/services/home-care.png",
    link: "/home-care",
  },
  {
    title: "Nursing Care",
    text: "Professional nursing assistance and personalised healthcare support at home.",
    image: "/image/services/nursing-care.png",
    link: "/nursing-care",
  },
  {
    title: "Emergency Care",
    text: "Emergency preparedness, support and coordination.",
    image: "/image/services/emergency-care.png",
    link: "/emergency-care",
  },
  {
    title: "Wellness Services",
    text: "Support for physical and mental well-being.",
    image: "/image/services/wellness.png",
    link: "#contact",
  },
];

function Services() {
  return (
    <section className="services-section" id="services">

      <div className="services-container">

        {/* HEADING */}
        <div className="services-heading">

          <span className="section-label">
            OUR SERVICES
          </span>

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


        {/* SERVICE CARDS */}
        <div className="services-grid">

          {services.map((service) => (

            <article
              className="service-card"
              key={service.title}
            >

              {/* IMAGE */}
              <div className="service-image">

                <img
                  src={service.image}
                  alt={service.title}
                />

              </div>


              {/* CONTENT */}
              <div className="service-card-content">

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.text}
                </p>

                <a href={service.link}>
                  Explore Service →
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