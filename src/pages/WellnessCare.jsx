import "../styles/WellnessCare.css";

function WellnessCare() {
  const wellnessServices = [
    {
      number: "01",
      title: "Physicians",
      text: "Access to reputed physicians for healthcare guidance and consultations.",
    },
    {
      number: "02",
      title: "Dieticians & Nutritionists",
      text: "Professional diet and nutrition guidance to support healthier living.",
    },
    {
      number: "03",
      title: "Counsellors",
      text: "Support for the mental and emotional wellbeing of elders.",
    },
    {
      number: "04",
      title: "Fitness & Yoga",
      text: "Fitness and yoga support to encourage an active and healthier lifestyle.",
    },
    {
      number: "05",
      title: "Mental Health Experts",
      text: "Professional support for the mental health and wellbeing of seniors.",
    },
    {
      number: "06",
      title: "Wellness Professionals",
      text: "A skilled resource pool to support different wellness requirements.",
    },
  ];

  const wellnessAreas = [
    "Physical Wellbeing",
    "Mental Wellbeing",
    "Nutrition",
    "Fitness & Yoga",
    "Counselling",
    "Preventive Wellness",
  ];

  const faqs = [
    {
      question: "What are SilverGenie's Wellness Services?",
      answer:
        "SilverGenie's Wellness Services provide access to a skilled resource pool of reputed physicians, dieticians, counsellors and other wellness professionals to support an elder's mental and physical wellbeing.",
    },
    {
      question: "Who can use SilverGenie's Wellness Services?",
      answer:
        "SilverGenie's Wellness Services are designed to support seniors with their physical, mental and overall wellbeing.",
    },
    {
      question: "Does SilverGenie provide nutrition support?",
      answer:
        "Yes. Dieticians and nutritionists are part of the wellness resource pool available through SilverGenie's wellness offering.",
    },
    {
      question: "Does the Wellness Program include mental health support?",
      answer:
        "Yes. Counsellors and mental health experts are included in SilverGenie's wellness resource pool.",
    },
    {
      question: "Does SilverGenie offer fitness and yoga support?",
      answer:
        "Yes. Fitness and yoga instructors are part of the wellness professionals available through the Wellness Program.",
    },
  ];

  return (
    <main className="wellness-care-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="wellness-care-hero">

        <div className="wellness-care-container">

          <div className="wellness-care-hero-content">

            <span className="wellness-care-label">
              SILVERGENIE WELLNESS SERVICES
            </span>

            <h1>
              Wellness for
              <span>Better Living.</span>
            </h1>

            <p>
              Find the help you need with SilverGenie's skilled
              resource pool of reputed physicians, dieticians,
              counsellors and other wellness professionals to
              take care of an elder's mental and physical
              wellbeing.
            </p>

            <a
              href="/silvergenie-website-original/#contact"
              className="wellness-care-btn"
            >
              Know More →
            </a>

          </div>

          <div className="wellness-care-hero-visual">

            <img
              src={`${import.meta.env.BASE_URL}image/services/wellness-services.png`}
              alt="SilverGenie Wellness Services"
            />

            <div className="wellness-care-floating-card">
              <strong>360°</strong>

              <span>
                Wellness Support
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="wellness-care-intro">

        <div className="wellness-care-container">

          <span className="wellness-care-label">
            WELLNESS SERVICES
          </span>

          <h2>
            Taking care of an elder's
            <span>mental & physical wellbeing.</span>
          </h2>

          <p>
            SilverGenie provides access to a pool of wellness
            professionals from diverse fields. The Wellness
            Program brings together healthcare and wellness
            expertise to support the mental and physical
            wellbeing of elders.
          </p>

        </div>

      </section>


      {/* =====================================================
          WELLNESS RESOURCE POOL
      ===================================================== */}

      <section className="wellness-care-services">

        <div className="wellness-care-container">

          <div className="wellness-care-section-heading">

            <span className="wellness-care-label">
              OUR WELLNESS SERVICES
            </span>

            <h2>
              Experts from
              <span>diverse fields.</span>
            </h2>

            <p>
              Our skilled resource pool consists of professionals
              who can support different physical and mental
              wellness requirements.
            </p>

          </div>


          <div className="wellness-care-services-grid">

            {wellnessServices.map((service) => (

              <article
                className="wellness-care-service-card"
                key={service.number}
              >

                <span className="wellness-care-number">
                  {service.number}
                </span>

                <div>

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.text}
                  </p>

                </div>

                <span className="wellness-care-arrow">
                  →
                </span>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WELLNESS EXPERTS
      ===================================================== */}

      <section className="wellness-care-experts">

        <div className="wellness-care-container">

          <div className="wellness-care-experts-content">

            <span className="wellness-care-label">
              OUR RESOURCE POOL
            </span>

            <h2>
              A wider pool of
              <span>wellness experts.</span>
            </h2>

            <p>
              SilverGenie's Wellness Program gives seniors
              access to a pool of experts from diverse fields,
              including reputed counsellors, fitness and yoga
              instructors, dietitians and nutritionists, and
              mental health experts.
            </p>

          </div>


          <div className="wellness-care-experts-list">

            {wellnessAreas.map((area, index) => (

              <div
                className="wellness-care-expert-item"
                key={area}
              >

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p>
                  {area}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WELLNESS BENEFITS
      ===================================================== */}

      <section className="wellness-care-benefits">

        <div className="wellness-care-container">

          <div className="wellness-care-section-heading">

            <span className="wellness-care-label">
              THE WELLNESS DIFFERENCE
            </span>

            <h2>
              Supporting
              <span>overall wellbeing.</span>
            </h2>

            <p>
              Wellness is an important part of SilverGenie's
              approach towards healthy ageing.
            </p>

          </div>


          <div className="wellness-care-benefits-grid">

            <article className="wellness-care-benefit-card">

              <span>01</span>

              <h3>
                Physical Wellbeing
              </h3>

              <p>
                Support for maintaining physical health and
                everyday wellbeing.
              </p>

            </article>


            <article className="wellness-care-benefit-card">

              <span>02</span>

              <h3>
                Mental Wellbeing
              </h3>

              <p>
                Counselling and professional support for
                mental and emotional wellbeing.
              </p>

            </article>


            <article className="wellness-care-benefit-card">

              <span>03</span>

              <h3>
                Nutrition
              </h3>

              <p>
                Guidance from dieticians and nutritionists
                for healthier living.
              </p>

            </article>


            <article className="wellness-care-benefit-card">

              <span>04</span>

              <h3>
                Fitness & Yoga
              </h3>

              <p>
                Fitness and yoga support to encourage a
                healthier and more active lifestyle.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          WELLNESS FOCUS
      ===================================================== */}

      <section className="wellness-care-focus">

        <div className="wellness-care-container">

          <div className="wellness-care-focus-content">

            <span className="wellness-care-label">
              WELLNESS PROGRAM
            </span>

            <h2>
              Helping seniors
              <span>live better.</span>
            </h2>

            <p>
              SilverGenie's Wellness Services bring together
              healthcare and wellness professionals to support
              the mental and physical wellbeing of elders.
            </p>

            <a
              href="/silvergenie-website-original/#contact"
              className="wellness-care-btn"
            >
              Connect With Us →
            </a>

          </div>


          <div className="wellness-care-focus-grid">

            <div>
              <strong>01</strong>
              <span>Physicians</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Nutrition</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Mental Health</span>
            </div>

            <div>
              <strong>04</strong>
              <span>Fitness & Yoga</span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="wellness-care-faq">

        <div className="wellness-care-container">

          <div className="wellness-care-section-heading">

            <span className="wellness-care-label">
              FREQUENTLY ASKED QUESTIONS
            </span>

            <h2>
              Have questions?
              <span>We've got answers.</span>
            </h2>

          </div>


          <div className="wellness-care-faq-list">

            {faqs.map((faq, index) => (

              <details
                className="wellness-care-faq-item"
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


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="wellness-care-cta">

        <div className="wellness-care-container">

          <span className="wellness-care-label">
            SILVERGENIE WELLNESS SERVICES
          </span>

          <h2>
            Take care of
            <span>their wellbeing.</span>
          </h2>

          <p>
            Connect with SilverGenie to explore Wellness
            Services and the support available for seniors.
          </p>

          <a
            href="/silvergenie-website-original/#contact"
            className="wellness-care-btn"
          >
            Connect Now →
          </a>

        </div>

      </section>

    </main>
  );
}

export default WellnessCare;