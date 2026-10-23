import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/DiabetesManagement.css";

function DiabetesManagement() {
  const navigate = useNavigate();
  const location = useLocation();

  // Home page ke Contact section par le jaane ka function
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

  // Home page par aane ke baad Contact section tak scroll karega
  useEffect(() => {
    if (location.pathname === "/" && location.hash === "#contact") {
      const scrollToContact = () => {
        const contactSection = document.getElementById("contact");

        if (contactSection) {
          contactSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };

      const timer = window.setTimeout(scrollToContact, 300);

      return () => window.clearTimeout(timer);
    }
  }, [location.pathname, location.hash]);

  const programDetails = [
    {
      title: "Cholesterol & Weight Management",
      description:
        "Personalised guidance to help manage cholesterol levels and maintain a healthy weight.",
    },
    {
      title: "Diabetes & Blood Pressure Management",
      description:
        "Support for monitoring and managing diabetes, hypertension, and related health concerns.",
    },
    {
      title: "Doctor Consultations",
      description:
        "Access to medical consultations and professional guidance for ongoing health management.",
    },
    {
      title: "Diagnostic Services",
      description:
        "Convenient diagnostic support to help members keep track of important health indicators.",
    },
    {
      title: "Expert Consultations",
      description:
        "Guidance from healthcare professionals based on individual health needs.",
    },
    {
      title: "Nutrition & Diet Management",
      description:
        "Dietary guidance to support healthier eating habits and better long-term health.",
    },
    {
      title: "Preventive Healthcare",
      description:
        "Health monitoring and preventive support to help identify concerns early.",
    },
    {
      title: "Fitness & Wellness",
      description:
        "Personalised wellness and activity guidance to support a healthier lifestyle.",
    },
    {
      title: "Engagement & Follow-ups",
      description:
        "Regular follow-ups and engagement to encourage consistency with care plans.",
    },
    {
      title: "Medicine & Diagnostic Support",
      description:
        "Assistance with accessing medicines and diagnostic services at home, where available.",
    },
  ];

  const benefits = [
    {
      title: "Blood Sugar Monitoring",
      description:
        "Keep track of blood glucose levels and discuss readings with your healthcare professional.",
    },
    {
      title: "HbA1c Awareness",
      description:
        "Monitor long-term blood sugar control with appropriate testing and medical guidance.",
    },
    {
      title: "Healthy Weight",
      description:
        "Receive guidance on maintaining a healthy weight through diet and physical activity.",
    },
    {
      title: "Cholesterol Management",
      description:
        "Understand cholesterol readings and follow a care plan recommended by your clinician.",
    },
    {
      title: "Fitness & Physical Activity",
      description:
        "Build sustainable activity habits suited to your individual health and mobility.",
    },
    {
      title: "Overall Health Management",
      description:
        "Coordinate ongoing wellness support and preventive care around your health needs.",
    },
  ];

  const whoCanBenefit = [
    "People living with diabetes who need ongoing support.",
    "Individuals managing high blood pressure or hypertension.",
    "People looking for support with cholesterol and weight management.",
    "Individuals who need help maintaining healthier lifestyle habits.",
    "Families seeking structured healthcare support for their loved ones.",
  ];

  return (
    <main className="ncd-page">
      {/* ==================== HERO SECTION ==================== */}
      <section className="ncd-hero">
        <div className="ncd-hero-content">
          <span className="ncd-eyebrow">
            SILVERGENIE HEALTHCARE
          </span>

          <h1>
            Diabetes &amp; NCD
            <br />
            Management
          </h1>

          <p>
            Personalised healthcare support to help manage diabetes,
            blood pressure, cholesterol, and other non-communicable
            health conditions.
          </p>

          <button
            type="button"
            className="ncd-btn"
            onClick={goToContact}
          >
            Know More <span aria-hidden="true">→</span>
          </button>
        </div>

        <div className="ncd-hero-image">
          <img
            src={`${import.meta.env.BASE_URL}image/services/diabetes-management.jpeg`}
            alt="Healthcare professional supporting diabetes management"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        </div>
      </section>

      {/* ==================== INTRO SECTION ==================== */}
      <section className="ncd-intro">
        <div className="ncd-container">
          <span className="ncd-eyebrow">
            BETTER HEALTH, BETTER LIVING
          </span>

          <h2>
            Take Control of Your Health with the Right Support
          </h2>

          <p>
            Managing a long-term health condition often requires
            consistent monitoring, healthy lifestyle choices, and
            professional guidance. SilverGenie aims to make healthcare
            support more accessible by helping individuals stay engaged
            with their health and wellness needs.
          </p>

          <p>
            From lifestyle guidance to consultations and monitoring
            support, the services can help individuals work towards
            better health management in coordination with their
            healthcare professionals.
          </p>
        </div>
      </section>

      {/* ==================== PROGRAM DETAILS ==================== */}
      <section className="ncd-program-section">
        <div className="ncd-container">
          <div className="ncd-section-heading">
            <span className="ncd-eyebrow">
              OUR SUPPORT
            </span>

            <h2>
              Comprehensive NCD Care Services
            </h2>

            <p>
              Support designed around individual health needs and
              ongoing wellness goals.
            </p>
          </div>

          <div className="ncd-program-grid">
            {programDetails.map((item, index) => (
              <article
                className="ncd-program-card"
                key={item.title}
              >
                <div className="ncd-card-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== HYBRID MONITORING ==================== */}
      <section className="ncd-monitoring">
        <div className="ncd-container ncd-monitoring-layout">
          <div className="ncd-monitoring-content">
            <span className="ncd-eyebrow">
              CONTINUOUS SUPPORT
            </span>

            <h2>
              Healthcare Support Beyond a Single Consultation
            </h2>

            <p>
              Long-term health management involves more than occasional
              doctor visits. Regular follow-ups, lifestyle awareness,
              and monitoring can help individuals stay connected with
              their care plan.
            </p>

            <p>
              SilverGenie can help coordinate available healthcare
              services and wellness support according to the selected
              programme and individual requirements.
            </p>

            <button
              type="button"
              className="ncd-btn"
              onClick={goToContact}
            >
              Enquire Now <span aria-hidden="true">→</span>
            </button>
          </div>

          <div className="ncd-monitoring-highlight">
            <div className="ncd-highlight-icon" aria-hidden="true">
              +
            </div>

            <h3>
              Your Health Journey Matters
            </h3>

            <p>
              Build healthier routines with appropriate professional
              guidance, follow-ups, and personalised support.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== BENEFITS ==================== */}
      <section className="ncd-benefits-section">
        <div className="ncd-container">
          <div className="ncd-section-heading">
            <span className="ncd-eyebrow">
              HEALTH &amp; WELLNESS
            </span>

            <h2>
              Focus on What Matters Most
            </h2>

            <p>
              Develop healthier habits with suitable guidance and
              consistent attention to your health.
            </p>
          </div>

          <div className="ncd-benefits-grid">
            {benefits.map((benefit, index) => (
              <article
                className="ncd-benefit-card"
                key={benefit.title}
              >
                <span className="ncd-benefit-check" aria-hidden="true">
                  ✓
                </span>

                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="ncd-disclaimer">
            Note: Healthcare services, monitoring, consultations, and
            diagnostics are subject to programme availability and
            individual requirements. This information is not a
            substitute for professional medical advice, diagnosis,
            or treatment.
          </p>
        </div>
      </section>

      {/* ==================== WHO CAN BENEFIT ==================== */}
      <section className="ncd-audience-section">
        <div className="ncd-container ncd-audience-layout">
          <div className="ncd-audience-heading">
            <span className="ncd-eyebrow">
              CARE FOR YOUR NEEDS
            </span>

            <h2>
              Who Can Benefit from NCD Care?
            </h2>

            <p>
              Support may be suitable for individuals looking for
              structured assistance with ongoing health and wellness
              management.
            </p>
          </div>

          <div className="ncd-audience-list">
            {whoCanBenefit.map((item, index) => (
              <div
                className="ncd-audience-item"
                key={item}
              >
                <span className="ncd-audience-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CONTACT CTA ==================== */}
      <section className="ncd-cta">
        <div className="ncd-container ncd-cta-content">
          <span className="ncd-eyebrow">
            WE ARE HERE TO HELP
          </span>

          <h2>
            Let’s Take the Next Step Towards Better Health
          </h2>

          <p>
            Connect with SilverGenie to learn more about available
            healthcare services and find support suited to your needs.
          </p>

          <button
            type="button"
            className="ncd-btn ncd-btn-light"
            onClick={goToContact}
          >
            Contact SilverGenie{" "}
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

export default DiabetesManagement;