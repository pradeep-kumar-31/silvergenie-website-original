import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomeCarePage.css";

function HomeCarePage() {
  const navigate = useNavigate();

  // =========================================================
  // NAVIGATE TO HOME PAGE CONTACT FORM
  // =========================================================

  const goToContact = () => {
    const contactSection = document.getElementById("contact");

    // If contact form is already available on the current page
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      return;
    }

    // Navigate to homepage and open the contact section
    navigate("/#contact");

    window.setTimeout(() => {
      const section = document.getElementById("contact");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 500);
  };

  // =========================================================
  // HOME CARE SERVICES
  // =========================================================

  const homeCareServices = [
    {
      number: "01",
      title: "Home Attendant Care",
      subtitle: "Compassionate Everyday Assistance",
      description:
        "Personal care and daily living assistance for seniors and individuals who need additional support at home.",
      services: [
        "Personal care and hygiene",
        "Mobility assistance",
        "Nutrition and daily routine support",
        "Emotional support and companionship",
      ],
    },
    {
      number: "02",
      title: "Professional Nursing Care",
      subtitle: "Skilled Nursing Support at Home",
      description:
        "Nursing assistance for patients who require professional care, health monitoring and support during recovery.",
      services: [
        "Regular vital signs monitoring",
        "Wound care management",
        "Catheter and Ryle's tube care",
        "Medication assistance as prescribed",
      ],
    },
    {
      number: "03",
      title: "ICU Nursing Care",
      subtitle: "Specialized Critical Care Support",
      description:
        "Specialized nursing assistance for patients requiring intensive monitoring and a higher level of care at home.",
      services: [
        "Critical care nursing assistance",
        "Continuous patient monitoring",
        "Pressure sore prevention support",
        "Coordination with the care team",
      ],
    },
    {
      number: "04",
      title: "Dementia & Alzheimer's Care",
      subtitle: "Patient and Family-Centred Care",
      description:
        "Support for individuals living with dementia or Alzheimer's, with attention to safety, comfort and daily routines.",
      services: [
        "Memory care assistance",
        "Safety and supervision",
        "Cognitive engagement activities",
        "Emotional and nutritional support",
      ],
    },
    {
      number: "05",
      title: "Recovery & Rehabilitation Support",
      subtitle: "Support During Recovery at Home",
      description:
        "Care assistance to help patients manage everyday activities and follow their prescribed recovery plans.",
      services: [
        "Mobility and rehabilitation assistance",
        "Wound care support",
        "Medication routine assistance",
        "Nutrition and emotional support",
      ],
    },
    {
      number: "06",
      title: "Home ICU Setup",
      subtitle: "Critical Care Infrastructure at Home",
      description:
        "Assistance with coordinating home critical-care requirements according to the patient's clinical needs.",
      services: [
        "Medical equipment coordination",
        "Critical care nursing arrangements",
        "Bed sore prevention support",
        "Care planning and coordination",
      ],
    },
  ];

  // =========================================================
  // ADDITIONAL HOME HEALTHCARE SUPPORT
  // =========================================================

  const additionalServices = [
    {
      number: "01",
      title: "Doctor Consultation",
      description:
        "Assistance with arranging doctor consultations at home or through available remote consultation services.",
    },
    {
      number: "02",
      title: "Diagnostic Assistance",
      description:
        "Support with coordinating diagnostic tests, home sample collection and other relevant investigations.",
    },
    {
      number: "03",
      title: "Physiotherapy & Wellness",
      description:
        "Help with coordinating physiotherapy, nutrition guidance and other wellness support when required.",
    },
    {
      number: "04",
      title: "Care Manager Support",
      description:
        "Coordination assistance to help families understand care requirements and manage related services.",
    },
    {
      number: "05",
      title: "Medical Equipment",
      description:
        "Assistance with arranging relevant medical equipment and supplies based on individual care needs.",
    },
    {
      number: "06",
      title: "Emergency Coordination",
      description:
        "Support with coordinating appropriate emergency assistance and ambulance services when required.",
    },
  ];

  // =========================================================
  // WHY CHOOSE SILVERGENIE
  // =========================================================

  const reasons = [
    {
      number: "01",
      title: "Qualified Care Professionals",
      description:
        "Access to nursing professionals and trained attendants suited to the requested care requirements.",
    },
    {
      number: "02",
      title: "Personalized Care Planning",
      description:
        "Care arrangements can be discussed according to the patient's needs, preferences and home environment.",
    },
    {
      number: "03",
      title: "Care Coordination",
      description:
        "Support in coordinating nursing requirements and related healthcare services for the family.",
    },
    {
      number: "04",
      title: "Care with Dignity",
      description:
        "A compassionate approach that respects comfort, privacy, individual preferences and independence.",
    },
  ];

  // =========================================================
  // HOW IT WORKS
  // =========================================================

  const careSteps = [
    {
      number: "01",
      title: "Consultation",
      description:
        "Share your loved one's care requirements, medical needs and preferred location with our team.",
    },
    {
      number: "02",
      title: "Care Planning",
      description:
        "Discuss suitable care options, duty requirements and the support needed at home.",
    },
    {
      number: "03",
      title: "Care Coordination",
      description:
        "Coordinate the requested care arrangements with the SilverGenie team.",
    },
    {
      number: "04",
      title: "Ongoing Support",
      description:
        "Stay connected with the team for care-related communication and coordination.",
    },
  ];

  // =========================================================
  // FAQ
  // =========================================================

  const faqs = [
    {
      question: "What home care services does SilverGenie offer?",
      answer:
        "SilverGenie lists home attendant services, nursing care, ICU nursing care, dementia and Alzheimer's support, recovery assistance and home ICU setup. Additional healthcare services may also be coordinated according to requirements.",
    },
    {
      question: "Are 24-hour nursing services available?",
      answer:
        "SilverGenie's official nursing services page lists 24-hour nursing services for Delhi-NCR and Kolkata. Availability should be confirmed with the team for your location and care requirements.",
    },
    {
      question: "Can I arrange a home attendant for an elderly family member?",
      answer:
        "You can contact the SilverGenie team to discuss home attendant requirements, personal care, hygiene support, mobility assistance and companionship for your family member.",
    },
    {
      question: "Can SilverGenie help with ICU care at home?",
      answer:
        "SilverGenie lists home ICU setup and ICU nursing care services. The appropriate arrangements depend on the patient's clinical condition, medical advice, equipment requirements and service availability.",
    },
    {
      question: "How can I enquire about service charges?",
      answer:
        "Use the Request a Callback button to reach the contact form and share your requirements. Ask the team to confirm the applicable charges, duty duration, location availability and service inclusions.",
    },
    {
      question: "Which cities are covered?",
      answer:
        "The official 24-hour nursing services page lists Delhi-NCR and Kolkata. Please confirm current service availability for your exact location before booking.",
    },
  ];

  return (
    <main className="home-care-page">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="home-care-hero">

        <div className="home-care-container home-care-hero-grid">

          <div className="home-care-hero-content">

            <span className="home-care-label">
              24-HOUR HOME NURSING & CARE
            </span>

            <h1>
              Professional Care.
              <span>Right at Home.</span>
            </h1>

            <p className="home-care-hero-subtitle">
              24-Hour Nursing Services at Home for Delhi-NCR
              and Kolkata.
            </p>

            <p className="home-care-hero-description">
              Support your loved ones with professional nursing
              assistance, patient monitoring, personal care and
              recovery support in the comfort of home.
              SilverGenie helps families coordinate care according
              to individual healthcare requirements.
            </p>

            <div className="home-care-hero-points">

              <span>
                <b aria-hidden="true">✓</b>
                Nursing Care
              </span>

              <span>
                <b aria-hidden="true">✓</b>
                Home Attendant Support
              </span>

              <span>
                <b aria-hidden="true">✓</b>
                Personalized Assistance
              </span>

            </div>

            <button
              type="button"
              className="home-care-btn"
              onClick={goToContact}
            >
              Request a Callback
              <span aria-hidden="true">→</span>
            </button>

            <p className="home-care-hero-note">
              Tell us your care requirements and preferred location.
            </p>

          </div>

          <div className="home-care-hero-visual">

            <img
              src={`${import.meta.env.BASE_URL}image/services/home-care.png`}
              alt="SilverGenie home nursing and patient care services"
              fetchPriority="high"
            />

            <div className="home-care-floating-card">

              <span className="home-care-floating-icon">
                +
              </span>

              <div>
                <strong>Care at Home</strong>
                <span>Support for your loved ones</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRODUCTION / SERVICE OVERVIEW
      ===================================================== */}

      <section className="home-care-intro">

        <div className="home-care-container">

          <span className="home-care-label">
            PERSONALIZED HOME HEALTHCARE
          </span>

          <h2>
            Care that feels like home.
            <span>Support that puts families at ease.</span>
          </h2>

          <p>
            Every patient has different care requirements.
            Whether your loved one needs daily living assistance,
            skilled nursing, critical care support or help during
            recovery, the right care plan starts with understanding
            their individual needs.
          </p>

        </div>

      </section>


      {/* =====================================================
          MAIN HOME CARE SERVICES
      ===================================================== */}

      <section className="home-care-services">

        <div className="home-care-container">

          <div className="home-care-section-heading">

            <span className="home-care-label">
              OUR HOME CARE SERVICES
            </span>

            <h2>
              Professional care,
              <span>right at home.</span>
            </h2>

            <p>
              Explore home healthcare services designed to support
              patients, seniors and families through different
              stages of care.
            </p>

          </div>


          <div className="home-care-service-grid">

            {homeCareServices.map((service) => (

              <article
                className="home-care-service-card"
                key={service.number}
              >

                <div className="home-care-service-card-top">

                  <span className="home-care-service-number">
                    {service.number}
                  </span>

                  <span
                    className="home-care-service-symbol"
                    aria-hidden="true"
                  >
                    +
                  </span>

                </div>

                <h3>
                  {service.title}
                </h3>

                <h4>
                  {service.subtitle}
                </h4>

                <p>
                  {service.description}
                </p>

                <ul>
                  {service.services.map((item) => (
                    <li key={item}>
                      <span aria-hidden="true">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className="home-care-card-btn"
                  onClick={goToContact}
                >
                  Enquire About This Service
                  <span aria-hidden="true">→</span>
                </button>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          ADDITIONAL HEALTHCARE SERVICES
      ===================================================== */}

      <section className="home-care-additional">

        <div className="home-care-container">

          <div className="home-care-section-heading">

            <span className="home-care-label">
              MORE HEALTHCARE SUPPORT
            </span>

            <h2>
              Additional support,
              <span>when you need it.</span>
            </h2>

            <p>
              Depending on individual requirements and availability,
              related healthcare services can also be coordinated
              with the care team.
            </p>

          </div>


          <div className="home-care-additional-grid">

            {additionalServices.map((service) => (

              <article
                className="home-care-additional-card"
                key={service.number}
              >

                <span className="home-care-additional-number">
                  {service.number}
                </span>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

              </article>

            ))}

          </div>

          <button
            type="button"
            className="home-care-btn"
            onClick={goToContact}
          >
            Discuss Your Requirements
            <span aria-hidden="true">→</span>
          </button>

        </div>

      </section>


      {/* =====================================================
          WHY CHOOSE SILVERGENIE
      ===================================================== */}

      <section className="home-care-why">

        <div className="home-care-container">

          <div className="home-care-why-content">

            <span className="home-care-label">
              THE SILVERGENIE APPROACH
            </span>

            <h2>
              More than care.
              <span>Support for the whole family.</span>
            </h2>

            <p>
              Coordinating care for a loved one can be challenging.
              SilverGenie helps families explore appropriate care
              arrangements while keeping comfort, dignity and
              individual requirements in focus.
            </p>

            <button
              type="button"
              className="home-care-btn"
              onClick={goToContact}
            >
              Connect With Our Team
              <span aria-hidden="true">→</span>
            </button>

          </div>


          <div className="home-care-reasons-grid">

            {reasons.map((reason) => (

              <article
                className="home-care-reason-card"
                key={reason.number}
              >

                <span>
                  {reason.number}
                </span>

                <h3>
                  {reason.title}
                </h3>

                <p>
                  {reason.description}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          HOW TO GET STARTED
      ===================================================== */}

      <section className="home-care-process">

        <div className="home-care-container">

          <div className="home-care-section-heading">

            <span className="home-care-label">
              HOW IT WORKS
            </span>

            <h2>
              Getting started
              <span>is simple.</span>
            </h2>

            <p>
              Four simple steps to discuss and coordinate
              your home care requirements.
            </p>

          </div>


          <div className="home-care-process-grid">

            {careSteps.map((step) => (

              <article
                className="home-care-process-card"
                key={step.number}
              >

                <span className="home-care-process-number">
                  {step.number}
                </span>

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.description}
                </p>

              </article>

            ))}

          </div>

          <button
            type="button"
            className="home-care-btn"
            onClick={goToContact}
          >
            Start Your Enquiry
            <span aria-hidden="true">→</span>
          </button>

        </div>

      </section>


      {/* =====================================================
          FREQUENTLY ASKED QUESTIONS
      ===================================================== */}

      <section className="home-care-faq">

        <div className="home-care-container">

          <div className="home-care-section-heading">

            <span className="home-care-label">
              FREQUENTLY ASKED QUESTIONS
            </span>

            <h2>
              Your questions,
              <span>answered.</span>
            </h2>

            <p>
              Learn more about SilverGenie's home care and
              nursing services.
            </p>

          </div>


          <div className="home-care-faq-list">

            {faqs.map((faq, index) => (

              <details
                className="home-care-faq-item"
                key={faq.question}
              >

                <summary>
                  <span className="home-care-faq-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="home-care-faq-question">
                    {faq.question}
                  </span>

                  <span
                    className="home-care-faq-toggle"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>

                <div className="home-care-faq-answer">
                  <p>
                    {faq.answer}
                  </p>
                </div>

              </details>

            ))}

          </div>

          <button
            type="button"
            className="home-care-btn"
            onClick={goToContact}
          >
            Ask Us a Question
            <span aria-hidden="true">→</span>
          </button>

        </div>

      </section>


      {/* =====================================================
          FINAL CALL TO ACTION
      ===================================================== */}

      <section className="home-care-cta">

        <div className="home-care-container home-care-cta-inner">

          <span className="home-care-label">
            WE ARE HERE TO HELP
          </span>

          <h2>
            Let us take care
            <span>of your loved ones.</span>
          </h2>

          <p>
            Tell us about your loved one's healthcare needs.
            Our team can help you explore suitable home care
            and nursing support options.
          </p>

          <button
            type="button"
            className="home-care-btn"
            onClick={goToContact}
          >
            Request a Callback
            <span aria-hidden="true">→</span>
          </button>

          <span className="home-care-cta-note">
            Service availability and charges are confirmed
            according to location and care requirements.
          </span>

        </div>

      </section>

    </main>
  );
}

export default HomeCarePage;