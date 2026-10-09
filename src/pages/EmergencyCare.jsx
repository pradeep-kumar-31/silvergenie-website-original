import "../styles/EmergencyCare.css";

function EmergencyCare() {
  const packageHighlights = [
    {
      number: "01",
      title: "30 Minutes Emergency Support",
      text: "Emergency support in Delhi, Gurugram, Noida and Kolkata.",
    },
    {
      number: "02",
      title: "Care Coach",
      text: "A dedicated care coach for every customer.",
    },
    {
      number: "03",
      title: "24X7 Assistance",
      text: "Emergency assistance with support targeted within 30 minutes.",
    },
    {
      number: "04",
      title: "Secure Eldercare Package",
      text: "30 days to map PHR, EPR and emergency drills.",
    },
  ];

  const packageInclusions = [
    "24/7 Emergency Support",
    "Coordination with Ambulance* (SILVERGENIE ALLOCATED - ALS/BLS)",
    "Personal Health Record (PHR)",
    "Care Executive Visits during Emergency (Max 4 Hours)",
    "Care Coach Telephonic Follow-up (fortnightly)",
  ];

  const seniorBenefits = [
    "Independence with a safety net",
    "Regular health monitoring",
    "Immediate emergency support",
    "Professional healthcare support",
    "Reduced anxiety about living alone",
  ];

  const familyBenefits = [
    "Peace of mind about parents' safety",
    "Professional support system",
    "Regular updates about parents' health",
    "Emergency handling without geographic constraints",
    "Cost-effective alternative to full-time care",
  ];

  const beneficiaries = [
    {
      title: "Senior Couples",
      text: "Living independently",
    },
    {
      title: "Adult Children",
      text: "Of aging parents",
    },
    {
      title: "Working Professionals",
      text: "With elderly dependents",
    },
    {
      title: "Post-operative Patients",
      text: "Requiring regular monitoring",
    },
    {
      title: "Patients",
      text: "With chronic health condition(s)",
    },
    {
      title: "Senior Citizens",
      text: "Seeking healthcare support",
    },
  ];

  const emergencyScenarios = [
    {
      title: "Late-night medical emergencies",
      points: [
        "Sudden chest pain requiring immediate attention",
        "Falls resulting in injuries",
        "Severe breathing difficulties",
        "Sudden confusion or stroke symptoms",
      ],
    },
    {
      title: "Family support scenarios",
      points: [
        "Children living in different cities/countries",
        "Working professionals unable to provide constant care",
        "Single seniors living alone",
        "Couples where both partners are elderly",
      ],
    },
  ];

  const alliedServices = [
    "Nursing Short Visit",
    "Doctor Home Visit",
    "Online Doctor Teleconsultation",
    "Legal Work & Will Management",
    "Travel Planning & Assistance",
    "Diagnostics at Home",
    "Radiological Services",
    "Mental Health",
    "Nutritionists",
    "Online Medical Second Opinion",
    "Tele-Fitness",
    "Physiotherapy at Home",
    "Taxation",
    "Wealth Management",
    "Property + Estate Management",
    "Government Documentation Assistance",
    "Retirement Planning",
  ];

  const faqs = [
    {
      question: "How quickly can I expect emergency support?",
      answer:
        "Our emergency support team is available 24/7 and typically coordinates assistance within 30 minutes of receiving a call.",
    },
    {
      question: "What if I need ambulance services more than once in 6 months?",
      answer:
        "Additional ambulance services can be arranged at preferential rates with SilverGenie's network providers.",
    },
    {
      question: "Can I change the schedule of wellness visits?",
      answer:
        "Yes, visits can be rescheduled with 48 hours notice, subject to availability.",
    },
    {
      question: "Is there a limit to emergency support calls?",
      answer:
        "No. You can access 24/7 emergency support during your subscription period.",
    },
    {
      question: "What areas do you cover?",
      answer:
        "SilverGenie currently services major metropolitan areas including Delhi, Gurugram, Noida, Faridabad, Ghaziabad and Kolkata and their suburbs. Contact the team for specific coverage details.",
    },
    {
      question: "Can multiple family members use the same subscription?",
      answer:
        "The package is designed for individual or couple primary users, while family members can be registered as emergency contacts.",
    },
    {
      question: "What information is included in the Personal Health Record?",
      answer:
        "The PHR can include medical history, current medications, allergies, emergency contacts and ongoing treatment plans.",
    },
    {
      question: "How are care coach visits scheduled?",
      answer:
        "Visits can be scheduled through the app or customer care line with minimum 24 hours notice for regular visits.",
    },
  ];

  return (
    <main className="emergency-care-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="emergency-care-hero">

        <div className="emergency-care-container">

          <div className="emergency-care-hero-content">

            <span className="emergency-care-label">
              SILVERGENIE EMERGENCY GENIE
            </span>

            <h1>
              Safeguarding Your
              <span>Golden Hours.</span>
            </h1>

            <p>
              In times of crisis, every second counts. Get
              24/7 emergency support and coordination when
              you need it most.
            </p>

            <div className="emergency-care-price">

              <span>Starting at</span>

              <strong>₹1000</strong>

              <small>
                per month incl. GST
              </small>

              <em>
                Billed semi-annually at ₹6000/-
              </em>

            </div>

            <a
              href="/silvergenie-website-original/#contact"
              className="emergency-care-btn"
            >
              Request a Callback →
            </a>

          </div>


          <div className="emergency-care-hero-image">

            <img
              src={`${import.meta.env.BASE_URL}image/services/emergency-care.png`}
              alt="SilverGenie Emergency Genie"
            />

            <div className="emergency-care-floating-card">

              <strong>24X7</strong>

              <span>
                Emergency Assistance
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PACKAGE HIGHLIGHTS
      ===================================================== */}

      <section className="emergency-care-highlights">

        <div className="emergency-care-container">

          <div className="emergency-care-section-heading">

            <span className="emergency-care-label">
              EMERGENCY GENIE PACKAGE
            </span>

            <h2>
              Support when
              <span>every second matters.</span>
            </h2>

            <p>
              The Emergency Genie package is designed to provide
              24/7 emergency support and coordination with
              ambulance services when you need it most.
            </p>

          </div>


          <div className="emergency-care-highlights-grid">

            {packageHighlights.map((item) => (

              <article
                className="emergency-care-highlight-card"
                key={item.number}
              >

                <span className="emergency-care-number">
                  {item.number}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PACKAGE INCLUSIONS
      ===================================================== */}

      <section className="emergency-care-package">

        <div className="emergency-care-container">

          <div className="emergency-care-package-content">

            <span className="emergency-care-label">
              PACKAGE INCLUSIONS
            </span>

            <h2>
              Your emergency
              <span>support system.</span>
            </h2>

            <p>
              Emergency Genie combines emergency assistance,
              personal health information and care-coach support
              to help seniors and their families during critical
              situations.
            </p>

          </div>


          <div className="emergency-care-package-card">

            <div className="emergency-care-package-top">

              <span>
                EMERGENCY GENIE
              </span>

              <strong>
                ₹1000
              </strong>

              <small>
                per month incl. GST
              </small>

              <em>
                Billed semi-annually at ₹6000/-
              </em>

            </div>


            <div className="emergency-care-package-list">

              {packageInclusions.map((item, index) => (

                <div
                  className="emergency-care-package-item"
                  key={item}
                >

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p>
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHO BENEFITS
      ===================================================== */}

      <section className="emergency-care-beneficiaries">

        <div className="emergency-care-container">

          <div className="emergency-care-section-heading">

            <span className="emergency-care-label">
              WHO WOULD BENEFIT
            </span>

            <h2>
              Built for seniors
              <span>and their families.</span>
            </h2>

          </div>


          <div className="emergency-care-beneficiary-grid">

            {beneficiaries.map((person, index) => (

              <article
                className="emergency-care-beneficiary-card"
                key={person.title}
              >

                <span>
                  0{index + 1}
                </span>

                <h3>
                  {person.title}
                </h3>

                <p>
                  {person.text}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY EMERGENCY GENIE
      ===================================================== */}

      <section className="emergency-care-why">

        <div className="emergency-care-container">

          <div className="emergency-care-why-content">

            <span className="emergency-care-label">
              WHY DO I NEED EMERGENCY GENIE?
            </span>

            <h2>
              Peace of mind
              <span>when you're near or far.</span>
            </h2>

            <p>
              Emergency Genie helps elderly people live safely
              and independently while providing families with
              a professional support system during emergencies.
            </p>

          </div>


          <div className="emergency-care-benefit-columns">

            <div className="emergency-care-benefit-column">

              <h3>
                For Senior Citizens
              </h3>

              <ul>

                {seniorBenefits.map((benefit) => (

                  <li key={benefit}>
                    <span>✓</span>
                    {benefit}
                  </li>

                ))}

              </ul>

            </div>


            <div className="emergency-care-benefit-column">

              <h3>
                For Adult Children
              </h3>

              <ul>

                {familyBenefits.map((benefit) => (

                  <li key={benefit}>
                    <span>✓</span>
                    {benefit}
                  </li>

                ))}

              </ul>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          GOLDEN HOURS
      ===================================================== */}

      <section className="emergency-care-golden">

        <div className="emergency-care-container">

          <span className="emergency-care-label">
            SAFEGUARDING YOUR GOLDEN HOURS
          </span>

          <h2>
            We hold your hand
            <span>in times of crisis.</span>
          </h2>

          <p>
            In those critical golden hours, you need a guardian
            angel by your side – an emergency genie. We embody
            preparedness, alert response and expert management.
          </p>

        </div>

      </section>


      {/* =====================================================
          EMERGENCY SCENARIOS
      ===================================================== */}

      <section className="emergency-care-scenarios">

        <div className="emergency-care-container">

          <div className="emergency-care-section-heading">

            <span className="emergency-care-label">
              IN TIMES OF CRISIS
            </span>

            <h2>
              Prepared for
              <span>real-life emergencies.</span>
            </h2>

          </div>


          <div className="emergency-care-scenarios-grid">

            {emergencyScenarios.map((scenario) => (

              <article
                className="emergency-care-scenario-card"
                key={scenario.title}
              >

                <h3>
                  {scenario.title}
                </h3>

                <ul>

                  {scenario.points.map((point) => (

                    <li key={point}>
                      <span>✓</span>
                      {point}
                    </li>

                  ))}

                </ul>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          ADD-ON ALLIED CARE SERVICES
      ===================================================== */}

      <section className="emergency-care-allied">

        <div className="emergency-care-container">

          <div className="emergency-care-section-heading">

            <span className="emergency-care-label">
              ADD-ON ALLIED CARE SERVICES
            </span>

            <h2>
              More ways to support
              <span>your healthcare journey.</span>
            </h2>

            <p>
              Join the SilverGenie community to benefit from
              value-added services and exclusive member discounts.
            </p>

          </div>


          <div className="emergency-care-allied-grid">

            {alliedServices.map((service, index) => (

              <div
                className="emergency-care-allied-item"
                key={service}
              >

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p>
                  {service}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="emergency-care-faq">

        <div className="emergency-care-container">

          <div className="emergency-care-section-heading">

            <span className="emergency-care-label">
              FREQUENTLY ASKED QUESTIONS
            </span>

            <h2>
              Have questions?
              <span>We've got answers.</span>
            </h2>

          </div>


          <div className="emergency-care-faq-list">

            {faqs.map((faq, index) => (

              <details
                className="emergency-care-faq-item"
                key={faq.question}
              >

                <summary>

                  <span>
                    0{index + 1}
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

      <section className="emergency-care-cta">

        <div className="emergency-care-container">

          <span className="emergency-care-label">
            SILVERGENIE EMERGENCY GENIE
          </span>

          <h2>
            When every second
            <span>matters.</span>
          </h2>

          <p>
            Get the support and peace of mind you deserve.
            Connect with SilverGenie to know more about
            Emergency Genie.
          </p>

          <a
            href="/silvergenie-website-original/#contact"
            className="emergency-care-btn"
          >
            Connect Now →
          </a>

        </div>

      </section>

    </main>
  );
}

export default EmergencyCare;