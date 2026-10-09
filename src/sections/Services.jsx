import { Link } from "react-router-dom";

/* =========================================================
   SILVERGENIE — SERVICES
   Content verified from SilverGenie official website
   and official SilverGenie care offerings brochure.
========================================================= */

const services = [
  {
    title: "Senior Care",
    text:
      "Personal Health Records, Doctor Consultations, Fitness, Diet & Nutrition, Emotional & Mental Well-being, Health Coach Support & Monitoring, Engagement Activities and Health Webinars.",
    image: "elder-care.jpg",
    link: "/elder-care",
  },

  {
    title: "Home Care",
    text:
      "Senior Care Nurses, Senior Care Attendants, Doctor Tele-consultations, Medicine Delivery, Diagnostic Tests, Home Monitoring and Emergency Care.",
    image: "home-care.png",
    link: "/home-care",
  },

  {
    title: "NCD Care",
    text:
      "Monitoring with Wearables, Management of NCDs including diabetes, BP and hypertension, Diagnostic Support, Health Coach Assistance, Personalized Plans and Mental Wellbeing.",
    image: "diabetes-management.jpeg",
    link: "/diabetes-management",
  },

  {
    title: "Wellness Care",
    text:
      "Physiotherapy, Yoga & Fitness, Nutrition & Diet, Mental Health, Preventive Care, Grief Counseling, Legal Help and Documentation Assistance.",
    image: "wellness.png",
    link: "/wellness-care",
  },

  {
    title: "Emergency & Wellness",
    text:
      "24/7 Emergency Support, Emergency Preparedness, Ambulance Coordination, Care Executive Support, Care Coach Follow-up and ongoing wellness assistance.",
    image: "emergency-care.png",
    link: "/emergency-care",
  },

  {
    title: "Diagnostics",
    text:
      "Diagnostic support including full body health checkups, diagnostic sample collection and convenient healthcare services designed to support seniors at home.",
    image: "healthcare-convenience.jpg",
    link: "/healthcare-convenience",
  },

  {
    title: "Doctor Teleconsultation",
    text:
      "Doctor consultation services available remotely, helping seniors and families access healthcare guidance and medical support conveniently.",
    image: "health-care-management.jpeg",
    link: "/healthcare-convenience",
  },

  {
    title: "Home ICU Setup",
    text:
      "Comprehensive intensive care support at home with medical equipment, infrastructure setup, critical care nursing and continuous care assistance.",
    image: "healthcare-manpower.jpg",
    link: "/home-care",
  },
];

/* =========================================================
   SERVICES COMPONENT
========================================================= */

function Services() {
  return (
    <section className="services-section" id="services">

      <div className="services-container">

        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div className="services-heading">

          <span className="services-label">
            OUR SERVICES
          </span>

          <h2>
            Comprehensive Care for{" "}
            <span>Seniors</span>
          </h2>

          <p>
            SilverGenie provides proactive, personalized and
            holistic healthcare assistance designed to support
            seniors and their families through every stage of care.
          </p>

        </div>


        {/* =================================================
            SERVICES GRID
        ================================================= */}

        <div className="services-grid">

          {services.map((service, index) => (

            <article
              className="service-card"
              key={service.title}
            >

              {/* ===========================================
                  IMAGE
              =========================================== */}

              <div className="service-image">

                <img
                  src={`${import.meta.env.BASE_URL}image/services/${service.image}`}
                  alt={`SilverGenie ${service.title}`}
                  loading={index > 3 ? "lazy" : "eager"}
                />

                {/* SERVICE TAG */}

                <span className="service-tag">
                  {service.title}
                </span>

              </div>


              {/* ===========================================
                  CARD CONTENT
              =========================================== */}

              <div className="service-body">

                <p>
                  {service.text}
                </p>

                <Link
                  to={service.link}
                  className="service-link"
                >
                  <span className="service-link-text">
                    Learn More
                  </span>

                  <span
                    className="service-link-arrow"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>

              </div>

            </article>

          ))}

        </div>


        {/* =================================================
            SERVICE NOTE
        ================================================= */}

        <div className="services-note">

          <p>
            <strong>Note:</strong>{" "}
            SilverGenie's list of services is non-exhaustive.
            Packages can be curated and customized as per
            individual requirements.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Services;