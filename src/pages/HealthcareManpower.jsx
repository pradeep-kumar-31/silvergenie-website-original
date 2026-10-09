import "../styles/HealthcareManpower.css";

function HealthcareManpower() {
  const manpowerServices = [
    {
      number: "01",
      title: "Nursing Attendant",
      text: "Trained nursing care staff and attendants to provide consistent and quality care for elders.",
    },
    {
      number: "02",
      title: "Home Care Assistant",
      text: "Professional home care assistance to support the everyday care needs of elders.",
    },
    {
      number: "03",
      title: "Critical Care Nurses",
      text: "Experienced critical care nursing support for elders requiring specialized care.",
    },
    {
      number: "04",
      title: "Home Isolation Assistant",
      text: "Dedicated assistance for elders requiring care and support during home isolation.",
    },
    {
      number: "05",
      title: "Ambulance Services",
      text: "Emergency support and ambulance services when immediate assistance is required.",
    },
    {
      number: "06",
      title: "Caregiver Consultation & Training",
      text: "Consultation and training support to help caregivers provide better care for their loved ones.",
    },
  ];

  const benefits = [
    "Trained nursing care staff",
    "Professional elder-care workforce",
    "Critical care nursing support",
    "Home care assistance",
    "Emergency support",
    "Caregiver consultation & training",
  ];

  const faqs = [
    {
      question: "What is SilverGenie's Assistance Workforce?",
      answer:
        "SilverGenie has curated a professional and experienced workforce of trained nursing care staff who specialize in elder care.",
    },
    {
      question: "What type of manpower can SilverGenie provide?",
      answer:
        "The assistance workforce includes trained nursing care staff, attendants, critical care nurses, home care assistants and home isolation assistants.",
    },
    {
      question: "Does SilverGenie provide critical care nurses?",
      answer:
        "Yes. SilverGenie's workforce includes critical care nurses for elders requiring specialized nursing support.",
    },
    {
      question: "Does SilverGenie provide ambulance services?",
      answer:
        "Yes. SilverGenie also provides ambulance services as part of its assistance and emergency support.",
    },
    {
      question: "Does SilverGenie provide caregiver training?",
      answer:
        "Yes. SilverGenie provides patient caregiver consultation and training to support better care.",
    },
  ];

  return (
    <main className="manpower-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="manpower-hero">

        <div className="manpower-container">

          <div className="manpower-hero-content">

            <span className="manpower-label">
              SILVERGENIE CLINICALLY TRUSTED MANPOWER
            </span>

            <h1>
              Care You Can
              <span>Trust.</span>
            </h1>

            <p>
              Choose from trained critical care nursing staff,
              trained nursing staff or attendants for elders.
              SilverGenie brings together a professional and
              experienced assistance workforce for consistent,
              committed and quality care.
            </p>

            <a
              href="/silvergenie-website-original/#contact"
              className="manpower-btn"
            >
              Enquire Now →
            </a>

          </div>


          <div className="manpower-hero-image">

            <img
              src={`${import.meta.env.BASE_URL}image/services/healthcare-manpower.png`}
              alt="SilverGenie Healthcare Manpower"
            />

            <div className="manpower-floating-card">
              <strong>24/7</strong>
              <span>Care Support</span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="manpower-intro">

        <div className="manpower-container">

          <span className="manpower-label">
            ASSISTANCE WORKFORCE
          </span>

          <h2>
            Professional care,
            <span>when you need it.</span>
          </h2>

          <p>
            To provide consistent, committed and quality care
            to elders, SilverGenie has curated a professional
            and experienced workforce. The assistance workforce
            includes trained nursing care staff who specialize
            in elder care and a range of home-care and
            emergency support services.
          </p>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="manpower-services">

        <div className="manpower-container">

          <div className="manpower-heading">

            <span className="manpower-label">
              MANPOWER SERVICES
            </span>

            <h2>
              The right support for
              <span>every care need.</span>
            </h2>

            <p>
              Our workforce is designed to support elders and
              their families with professional care and assistance.
            </p>

          </div>


          <div className="manpower-grid">

            {manpowerServices.map((service) => (

              <article
                className="manpower-card"
                key={service.number}
              >

                <div className="manpower-card-top">

                  <span className="manpower-number">
                    {service.number}
                  </span>

                  <span className="manpower-arrow">
                    ↗
                  </span>

                </div>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.text}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WORKFORCE
      ===================================================== */}

      <section className="manpower-workforce">

        <div className="manpower-container">

          <div className="manpower-workforce-content">

            <span className="manpower-label">
              OUR WORKFORCE
            </span>

            <h2>
              Trained people.
              <span>Committed care.</span>
            </h2>

            <p>
              SilverGenie's assistance workforce is a dedicated
              team of trained nursing care staff, attendants,
              critical care nurses, home care assistants and
              home isolation assistants.
            </p>

            <p>
              We are also prepared for emergencies, provide
              ambulance services and support caregivers with
              consultation and training.
            </p>

            <a
              href="/silvergenie-website-original/#contact"
              className="manpower-btn"
            >
              Talk to Our Experts →
            </a>

          </div>


          <div className="manpower-workforce-list">

            <div className="manpower-list-item">
              <span>01</span>
              <strong>Trained Nursing Staff</strong>
            </div>

            <div className="manpower-list-item">
              <span>02</span>
              <strong>Attendants</strong>
            </div>

            <div className="manpower-list-item">
              <span>03</span>
              <strong>Critical Care Nurses</strong>
            </div>

            <div className="manpower-list-item">
              <span>04</span>
              <strong>Home Care Assistants</strong>
            </div>

            <div className="manpower-list-item">
              <span>05</span>
              <strong>Home Isolation Assistants</strong>
            </div>

            <div className="manpower-list-item">
              <span>06</span>
              <strong>Caregiver Support</strong>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <section className="manpower-benefits">

        <div className="manpower-container">

          <div className="manpower-heading">

            <span className="manpower-label">
              WHY SILVERGENIE
            </span>

            <h2>
              Care beyond
              <span>just manpower.</span>
            </h2>

          </div>


          <div className="manpower-benefits-grid">

            {benefits.map((benefit, index) => (

              <div
                className="manpower-benefit"
                key={benefit}
              >

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>
                  {benefit}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="manpower-cta">

        <div className="manpower-container">

          <span className="manpower-label">
            SILVERGENIE CLINICALLY TRUSTED MANPOWER
          </span>

          <h2>
            Find the right care
            <span>for your loved one.</span>
          </h2>

          <p>
            Connect with SilverGenie to understand the
            manpower and assistance support suitable for
            your care requirements.
          </p>

          <a
            href="/silvergenie-website-original/#contact"
            className="manpower-btn"
          >
            Enquire Now →
          </a>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="manpower-faq">

        <div className="manpower-container">

          <div className="manpower-heading">

            <span className="manpower-label">
              FREQUENTLY ASKED QUESTIONS
            </span>

            <h2>
              Have questions?
              <span>We've got answers.</span>
            </h2>

          </div>


          <div className="manpower-faq-list">

            {faqs.map((faq, index) => (

              <details
                className="manpower-faq-item"
                key={faq.question}
              >

                <summary>

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>
                    {faq.question}
                  </strong>

                  <b>
                    +
                  </b>

                </summary>

                <p>
                  {faq.answer}
                </p>

              </details>

            ))}

          </div>

        </div>

      </section>


    </main>
  );
}

export default HealthcareManpower;