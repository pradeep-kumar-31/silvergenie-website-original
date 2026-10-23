import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/EmergencyCare.css";

function EmergencyCare() {
  const navigate = useNavigate();
  const location = useLocation();

  // =====================================================
  // CONTACT FORM NAVIGATION
  // Homepage ke Contact section par navigate karega.
  // =====================================================

  const goToContact = () => {
    if (location.pathname === "/") {
      const contactSection = document.getElementById("contact");

      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    navigate("/#contact");
  };

  // Homepage par aane ke baad Contact form tak scroll karega.
  useEffect(() => {
    if (location.pathname === "/" && location.hash === "#contact") {
      const timer = window.setTimeout(() => {
        const contactSection = document.getElementById("contact");

        if (contactSection) {
          contactSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 300);

      return () => window.clearTimeout(timer);
    }
  }, [location.pathname, location.hash]);

  // =====================================================
  // PACKAGE HIGHLIGHTS
  // Official Emergency Genie package details
  // =====================================================

  const packageHighlights = [
    {
      number: "01",
      title: "30 Minutes Emergency Support",
      text: "Emergency support in Delhi, Gurugram, Noida and Kolkata.",
    },
    {
      number: "02",
      title: "Dedicated Care Coach",
      text: "A Care Coach for every customer with regular telephonic follow-ups.",
    },
    {
      number: "03",
      title: "24×7 Assistance",
      text: "Round-the-clock emergency support with a stated 30-minute response commitment.",
    },
    {
      number: "04",
      title: "Secure Eldercare Package",
      text: "The first 30 days are used to map PHR, EPR and emergency drills.",
    },
  ];

  // =====================================================
  // PACKAGE INCLUSIONS
  // =====================================================

  const packageInclusions = [
    {
      title: "24/7 Emergency Support",
      text: "Round-the-clock emergency assistance during the subscription period.",
    },
    {
      title: "Ambulance Coordination",
      text: "Coordination with a SilverGenie-allocated ALS/BLS ambulance. Ambulance charges are additional.",
    },
    {
      title: "Personal Health Record (PHR)",
      text: "Medical history, medications, allergies, emergency contacts and other relevant health information.",
    },
    {
      title: "Care Executive During Emergency",
      text: "Care executive visits during an emergency, for a maximum of four hours.",
    },
    {
      title: "Care Coach Follow-up",
      text: "Fortnightly telephonic follow-ups from the Care Coach.",
    },
  ];

  // =====================================================
  // SENIOR CITIZEN BENEFITS
  // =====================================================

  const seniorBenefits = [
    "Independence with a safety net",
    "Regular health monitoring",
    "Emergency assistance when needed",
    "Professional healthcare coordination",
    "Reduced anxiety about living alone",
  ];

  // =====================================================
  // FAMILY BENEFITS
  // =====================================================

  const familyBenefits = [
    "Peace of mind about parents' safety",
    "A professional support system",
    "Regular updates about parents' health",
    "Emergency coordination when family lives far away",
    "An alternative to arranging full-time care",
  ];

  // =====================================================
  // WHO WOULD BENEFIT
  // =====================================================

  const beneficiaries = [
    {
      title: "Senior Couples",
      text: "For couples living independently.",
    },
    {
      title: "Adult Children",
      text: "For families caring for ageing parents.",
    },
    {
      title: "Working Professionals",
      text: "For people with elderly dependants.",
    },
    {
      title: "Post-operative Patients",
      text: "For people requiring additional monitoring and support.",
    },
    {
      title: "Patients with Chronic Conditions",
      text: "For individuals who may need help coordinating healthcare.",
    },
    {
      title: "Senior Citizens",
      text: "For seniors seeking an emergency support system.",
    },
  ];

  // =====================================================
  // EMERGENCY SCENARIOS
  // =====================================================

  const emergencyScenarios = [
    {
      title: "Medical Emergencies",
      points: [
        "Sudden chest pain requiring urgent medical attention",
        "Falls resulting in injuries",
        "Severe breathing difficulties",
        "Sudden confusion or possible stroke symptoms",
      ],
    },
    {
      title: "Family Support Situations",
      points: [
        "Children living in different cities or countries",
        "Working professionals unable to provide constant care",
        "Single seniors living alone",
        "Couples where both partners are elderly",
      ],
    },
  ];

  // =====================================================
  // ALLIED CARE SERVICES
  // Based on the official Emergency Genie package page
  // =====================================================

  const alliedServices = [
    "Nursing Short Visit",
    "Doctor Home Visit",
    "Online Doctor Teleconsultation",
    "Legal Work & Will Management",
    "Travel Planning & Assistance",
    "Diagnostics at Home",
    "Radiological Services",
    "Mental Health Support",
    "Nutritionists",
    "Online Medical Second Opinion",
    "Tele-Fitness",
    "Physiotherapy at Home",
    "Taxation Assistance",
    "Wealth Management",
    "Property & Estate Management",
    "Government Documentation Assistance",
    "Retirement Planning",
  ];

  // =====================================================
  // EMERGENCY GENIE VS EMERGENCY GENIE PLUS
  // Official package differences
  // =====================================================

  const planComparison = [
    {
      feature: "Emergency support",
      standard: "24/7 support",
      plus: "24/7 support",
    },
    {
      feature: "Ambulance charges",
      standard: "Charges are additional",
      plus: "Covered within the package limits",
    },
    {
      feature: "Care Coach follow-up",
      standard: "Fortnightly",
      plus: "Twice a week",
    },
    {
      feature: "At-home wellbeing visit",
      standard: "Not included in the standard package",
      plus: "Monthly visit",
    },
    {
      feature: "Doctor teleconsultation",
      standard: "Not included as a complimentary package benefit",
      plus: "3 in 6 months or 6 in 12 months",
    },
  ];

  // =====================================================
  // FAQ
  // =====================================================

  const faqs = [
    {
      question: "How quickly can I expect emergency support?",
      answer:
        "SilverGenie's Emergency Genie package provides 24/7 emergency assistance and states a 30-minute response commitment in its service coverage areas. Actual response and assistance depend on the situation and service availability.",
    },
    {
      question: "Are ambulance charges included in Emergency Genie?",
      answer:
        "No. The standard Emergency Genie package provides ambulance coordination, but ambulance charges are additional. Emergency Genie Plus has separate ambulance charge coverage subject to the package limits and conditions.",
    },
    {
      question: "What happens if I need ambulance services more than once?",
      answer:
        "Additional ambulance services can be arranged through network providers at applicable rates. Coverage under Emergency Genie Plus is subject to its package limits and conditions.",
    },
    {
      question: "Can I reschedule regular care visits?",
      answer:
        "Regular visits can be rescheduled with 48 hours' notice, subject to availability.",
    },
    {
      question: "Which areas does Emergency Genie cover?",
      answer:
        "The official package page identifies Delhi, Gurugram, Noida and Kolkata for 30-minute emergency support. SilverGenie also lists other service areas, including Faridabad and Ghaziabad. Contact the team to confirm availability for your specific location.",
    },
    {
      question: "Can multiple family members use one subscription?",
      answer:
        "The package is designed for an individual or a couple as the primary user. Family members can be registered as emergency contacts.",
    },
    {
      question: "What information is included in the Personal Health Record?",
      answer:
        "The PHR can include medical history, current medications, allergies, emergency contacts and ongoing treatment plans.",
    },
    {
      question: "How often does the Care Coach follow up?",
      answer:
        "The standard Emergency Genie package includes fortnightly Care Coach telephonic follow-ups. Emergency Genie Plus has a different follow-up schedule.",
    },
    {
      question: "What is the difference between Emergency Genie and Emergency Genie Plus?",
      answer:
        "Emergency Genie Plus includes additional benefits such as ambulance charge coverage within specified limits, twice-weekly Care Coach follow-ups, monthly at-home wellbeing visits and complimentary doctor teleconsultations. Refer to the current package terms for exact coverage.",
    },
    {
      question: "How can I get more information about the package?",
      answer:
        "Use the Contact SilverGenie button on this page to reach the contact form on your website and enquire about availability, package terms and service coverage.",
    },
  ];

  return (
    <main className="emergency-care-page">

      {/* =====================================================
          HERO SECTION
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
              round-the-clock emergency support and coordination
              when you need it most.
            </p>

            <div className="emergency-care-price">

              <span>Starting at</span>

              <strong>₹1,000</strong>

              <small>per month, including GST</small>

              <em>
                Billed semi-annually at ₹6,000
              </em>

            </div>

            {/* BUTTON 1: CONTACT FORM */}

            <button
              type="button"
              onClick={goToContact}
              className="emergency-care-btn"
            >
              Request a Callback <span aria-hidden="true">→</span>
            </button>

            <p className="emergency-care-price-note">
              Ambulance charges are additional in the standard
              Emergency Genie package.
            </p>

          </div>

          <div className="emergency-care-hero-image">

            <img
              src={`${import.meta.env.BASE_URL}image/services/emergency-care.png`}
              alt="SilverGenie Emergency Genie eldercare support"
            />

            <div className="emergency-care-floating-card">
              <strong>24×7</strong>

              <span>Emergency Assistance</span>
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
              Emergency Genie is designed to provide 24/7
              emergency support, ambulance coordination,
              Personal Health Record management and Care Coach
              follow-ups.
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

                <h3>{item.title}</h3>

                <p>{item.text}</p>

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
              personal health information, ambulance coordination
              and Care Coach support to help seniors and their
              families during critical situations.
            </p>

            <div className="emergency-care-important-note">
              <strong>Important package information</strong>

              <p>
                The standard Emergency Genie package includes
                ambulance coordination, not ambulance charge
                coverage. Ambulance charges are payable separately.
              </p>
            </div>

          </div>

          <div className="emergency-care-package-card">

            <div className="emergency-care-package-top">

              <span>EMERGENCY GENIE</span>

              <strong>₹1,000</strong>

              <small>per month, including GST</small>

              <em>
                Billed semi-annually at ₹6,000
              </em>

            </div>

            <div className="emergency-care-package-list">

              {packageInclusions.map((item, index) => (
                <div
                  className="emergency-care-package-item"
                  key={item.title}
                >

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>

                </div>
              ))}

            </div>

            <div className="emergency-care-package-footer">

              <button
                type="button"
                onClick={goToContact}
                className="emergency-care-btn"
              >
                Enquire About This Package{" "}
                <span aria-hidden="true">→</span>
              </button>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          WHO WOULD BENEFIT
      ===================================================== */}

      <section className="emergency-care-beneficiaries">
        <div className="emergency-care-container">

          <div className="emergency-care-section-heading">

            <span className="emergency-care-label">
              WHO WOULD BENEFIT?
            </span>

            <h2>
              Built for seniors
              <span>and their families.</span>
            </h2>

            <p>
              Emergency support for seniors who value independence
              and families who want a reliable healthcare
              coordination system.
            </p>

          </div>

          <div className="emergency-care-beneficiary-grid">

            {beneficiaries.map((person, index) => (
              <article
                className="emergency-care-beneficiary-card"
                key={person.title}
              >

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{person.title}</h3>

                <p>{person.text}</p>

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
              WHY EMERGENCY GENIE?
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

              <h3>For Senior Citizens</h3>

              <ul>
                {seniorBenefits.map((benefit) => (
                  <li key={benefit}>
                    <span aria-hidden="true">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>

            </div>

            <div className="emergency-care-benefit-column">

              <h3>For Adult Children</h3>

              <ul>
                {familyBenefits.map((benefit) => (
                  <li key={benefit}>
                    <span aria-hidden="true">✓</span>
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
            In those critical golden hours, you need a support
            system by your side. Emergency Genie focuses on
            preparedness, alert response and emergency
            coordination.
          </p>

          <button
            type="button"
            onClick={goToContact}
            className="emergency-care-btn"
          >
            Talk to Our Team <span aria-hidden="true">→</span>
          </button>

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

                <h3>{scenario.title}</h3>

                <ul>
                  {scenario.points.map((point) => (
                    <li key={point}>
                      <span aria-hidden="true">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>

              </article>
            ))}

          </div>

          <div className="emergency-care-scenario-note">
            <strong>In a life-threatening emergency</strong>

            <p>
              Contact your local emergency services immediately.
              SilverGenie provides healthcare coordination and
              package-based assistance; it should not be treated
              as a replacement for emergency medical services.
            </p>
          </div>

        </div>
      </section>


      {/* =====================================================
          ALLIED CARE SERVICES
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
              SilverGenie's official package page lists additional
              healthcare and lifestyle services. Availability,
              pricing and applicable member discounts should be
              confirmed with the team.
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

                <p>{service}</p>

              </div>
            ))}

          </div>

          <div className="emergency-care-allied-cta">

            <p>
              Interested in any of these additional services?
            </p>

            <button
              type="button"
              onClick={goToContact}
              className="emergency-care-btn"
            >
              Enquire About Services{" "}
              <span aria-hidden="true">→</span>
            </button>

          </div>

        </div>
      </section>


      {/* =====================================================
          EMERGENCY GENIE VS EMERGENCY GENIE PLUS
      ===================================================== */}

      <section className="emergency-care-comparison">
        <div className="emergency-care-container">

          <div className="emergency-care-section-heading">

            <span className="emergency-care-label">
              COMPARE THE PACKAGES
            </span>

            <h2>
              Emergency Genie
              <span>or Emergency Genie Plus?</span>
            </h2>

            <p>
              Emergency Genie Plus offers additional benefits.
              Compare the main differences below before choosing
              a package.
            </p>

          </div>

          <div className="emergency-care-comparison-table-wrap">

            <table className="emergency-care-comparison-table">

              <thead>
                <tr>
                  <th>Package Feature</th>
                  <th>Emergency Genie</th>
                  <th>Emergency Genie Plus</th>
                </tr>
              </thead>

              <tbody>
                {planComparison.map((item) => (
                  <tr key={item.feature}>
                    <th scope="row">{item.feature}</th>
                    <td>{item.standard}</td>
                    <td>{item.plus}</td>
                  </tr>
                ))}
              </tbody>

            </table>

          </div>

          <p className="emergency-care-comparison-note">
            Package inclusions, prices, eligibility and coverage
            limits may change. Confirm the current terms with
            SilverGenie before subscribing.
          </p>

          <div className="emergency-care-comparison-cta">

            <button
              type="button"
              onClick={goToContact}
              className="emergency-care-btn"
            >
              Help Me Choose a Package{" "}
              <span aria-hidden="true">→</span>
            </button>

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
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>{faq.question}</strong>

                  <b aria-hidden="true">+</b>

                </summary>

                <p>{faq.answer}</p>

              </details>
            ))}

          </div>

          <div className="emergency-care-faq-cta">

            <h3>Still have questions?</h3>

            <p>
              Contact SilverGenie to discuss package details,
              coverage areas and eligibility.
            </p>

            <button
              type="button"
              onClick={goToContact}
              className="emergency-care-btn"
            >
              Contact SilverGenie{" "}
              <span aria-hidden="true">→</span>
            </button>

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
            Get in touch with SilverGenie to learn about
            Emergency Genie, available coverage and the
            support options for your family.
          </p>

          {/* FINAL BUTTON: CONTACT FORM */}

          <button
            type="button"
            onClick={goToContact}
            className="emergency-care-btn"
          >
            Connect Now <span aria-hidden="true">→</span>
          </button>

        </div>
      </section>

    </main>
  );
}

export default EmergencyCare;