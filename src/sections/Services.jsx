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
    title: "Emergency Care",
    text: "Emergency preparedness, support and coordination.",
    image: "/image/services/emergency-care.png",
    link: "/emergency-care",
  },

  {
    title: "Health & Care Management",
    text: "Support for managing healthcare needs with greater convenience.",
    image: "/image/services/health-care-management.jpeg",
    link: "/care-management",
  },

  {
    title: "Wellness Services",
    text: "Support for physical and mental well-being.",
    image: "/image/services/wellness.png",
    link: "/wellness",
  },

  {
    title: "NCD / Diabetes Management",
    text: "Support for ongoing management of non-communicable health needs.",
    image: "/image/services/diabetes-management.jpeg",
    link: "/diabetes-management",
  },

  {
    title: "Healthcare Manpower",
    text: "Healthcare manpower and caregiving support for different care requirements.",
    image: "/image/services/healthcare-manpower.jpg",
    link: "/healthcare-manpower",
  },

  {
    title: "Healthcare Convenience Services",
    text: "Convenient healthcare support designed around everyday needs.",
    image: "/image/services/healthcare-convenience.jpg",
    link: "#contact",
  },
];

function Services() {
  return (
    <section className="services-section" id="services">

      <div className="services-container">

        {/* HEADING */}
        <div className="services-heading">

          <span className="services-label">
            OUR SERVICES
          </span>

          <h2>
            Comprehensive Care for{" "}
            <span>Seniors</span>
          </h2>

          <p>
            SilverGenie provides healthcare assistance and
            support for seniors through a range of care
            services.
          </p>

        </div>


        {/* SERVICES */}
        <div className="services-grid">

          {services.map((item) => (

            <article
              className="service-card"
              key={item.title}
            >

              {/* IMAGE */}
              <div className="service-image">

                <img
                  src={item.image}
                  alt={item.title}
                />

                <span className="service-tag">
                  {item.title}
                </span>

              </div>


              {/* CONTENT */}
              <div className="service-body">

                <p>
                  {item.text}
                </p>

                <a
                  href={item.link}
                  className="service-link"
                >
                  Learn More
                  <span>→</span>
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