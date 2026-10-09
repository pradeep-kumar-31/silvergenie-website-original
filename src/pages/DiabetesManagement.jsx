import "../styles/DiabetesManagement.css";

function DiabetesManagement() {
  const programDetails = [
    "Cholesterol & Weight Management",
    "Diabetes & Blood Pressure Management",
    "Relevant & Regular Doctor Consultations",
    "Diagnostic Tests",
    "Health & Wellness Expert Consultations",
    "Customized Diet & Nutrition Consultations",
    "Preventive Care",
    "Fitness Sessions",
    "Member Engagement Activities",
    "Medicines & Diagnostics @ Home",
  ];

  const benefits = [
    "Significant HbA1c drop",
    "Major reduction in weight",
    "High control in cholesterol levels",
    "Improved fitness & strength",
    "Elevation of overall health",
  ];

  return (
    <main className="ncd-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="ncd-hero">

        <div className="ncd-hero-content">

          <span className="ncd-label">
            SILVERGENIE NCD MANAGEMENT
          </span>

          <h1>
            NCD Management
            <span>Program</span>
          </h1>

          <p>
            Exclusive Tech Enabled Hybrid Monitoring Program for
            Non-communicable diseases (NCDs).
          </p>

          <a
            href="/silvergenie-website-original/#contact"
            className="ncd-btn"
          >
            Know More →
          </a>

        </div>

        <div className="ncd-hero-image">
          <img
            src={`${import.meta.env.BASE_URL}image/services/diabetes-management.jpeg`}
            alt="SilverGenie NCD Management Program"
          />
        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="ncd-intro">

        <span className="ncd-section-label">
          NCD MANAGEMENT PROGRAM
        </span>

        <h2>
          Personalized care for
          <span> better health management.</span>
        </h2>

        <p>
          SilverGenie's NCD Management Program is designed to
          support the management of non-communicable diseases
          through technology-enabled hybrid monitoring and
          healthcare support.
        </p>

      </section>


      {/* =====================================================
          PROGRAM DETAILS
      ===================================================== */}
      <section className="ncd-details">

        <div className="ncd-section-heading">

          <span className="ncd-section-label">
            PROGRAM DETAILS
          </span>

          <h2>
            Comprehensive
            <span> NCD care.</span>
          </h2>

          <p>
            A holistic program designed to support diabetes,
            blood pressure, cholesterol, weight and overall
            wellness through continuous healthcare assistance.
          </p>

        </div>


        <div className="ncd-details-grid">

          {programDetails.map((item, index) => (

            <div
              className="ncd-detail-card"
              key={item}
            >

              <strong>
                {String(index + 1).padStart(2, "0")}
              </strong>

              <h3>
                {item}
              </h3>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          HYBRID MONITORING
      ===================================================== */}
      <section className="ncd-monitoring">

        <div className="ncd-monitoring-content">

          <span className="ncd-section-label">
            HYBRID MONITORING
          </span>

          <h2>
            Exclusive Smartwatch
            <span>Monitoring</span>
          </h2>

          <p>
            The program comes with an Exclusive Smartwatch
            Monitoring system as part of the technology-enabled
            hybrid monitoring approach.
          </p>

          <p>
            Continuous health monitoring helps healthcare
            professionals track relevant health parameters
            and provide timely guidance and support.
          </p>

        </div>


        <div className="ncd-monitoring-box">

          <div className="ncd-watch-icon">
            ⌚
          </div>

          <span className="ncd-monitoring-badge">
            TECHNOLOGY ENABLED
          </span>

          <h3>
            Smartwatch Monitoring
          </h3>

          <p>
            Technology-enabled monitoring to support the
            management of NCDs.
          </p>

        </div>

      </section>


      {/* =====================================================
          BENEFITS
      ===================================================== */}
      <section className="ncd-benefits">

        <div className="ncd-section-heading">

          <span className="ncd-section-label">
            PROGRAM OUTCOMES
          </span>

          <h2>
            Supporting
            <span> healthier outcomes.</span>
          </h2>

          <p>
            Consistent monitoring, expert guidance and lifestyle
            support can help members work towards better health
            outcomes.
          </p>

        </div>


        <div className="ncd-benefits-grid">

          {benefits.map((benefit, index) => (

            <div
              className="ncd-benefit-card"
              key={benefit}
            >

              <strong>
                {String(index + 1).padStart(2, "0")}
              </strong>

              <h3>
                {benefit}
              </h3>

            </div>

          ))}

        </div>


        <p className="ncd-disclaimer">
          Disclaimer: Program results & outcomes are also
          dependent on member/patient commitment & lifestyle
          changes. SilverGenie is not responsible for
          non-adherence on member/patient part.
        </p>

      </section>


      {/* =====================================================
          WHO CAN BENEFIT
      ===================================================== */}
      <section className="ncd-support">

        <div className="ncd-support-content">

          <span className="ncd-section-label">
            NCD CARE SUPPORT
          </span>

          <h2>
            Better management.
            <span>Better lifestyle.</span>
          </h2>

          <p>
            SilverGenie's NCD Management Program combines
            healthcare expertise, technology and continuous
            support to help members manage their health
            conditions more effectively.
          </p>

        </div>


        <div className="ncd-support-list">

          <div>
            <span>01</span>
            <h3>Diabetes Management</h3>
          </div>

          <div>
            <span>02</span>
            <h3>Blood Pressure Management</h3>
          </div>

          <div>
            <span>03</span>
            <h3>Cholesterol Management</h3>
          </div>

          <div>
            <span>04</span>
            <h3>Weight Management</h3>
          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="ncd-cta">

        <span className="ncd-section-label">
          NCD CARE
        </span>

        <h2>
          Know more about our
          <span>Plans & Programs.</span>
        </h2>

        <p>
          Get in touch with SilverGenie to know more about
          the NCD Management Program and available plans.
        </p>

        <a
          href="/silvergenie-website-original/#contact"
          className="ncd-btn"
        >
          Contact SilverGenie →
        </a>

      </section>

    </main>
  );
}

export default DiabetesManagement;