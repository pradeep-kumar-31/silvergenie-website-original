import React from "react";
import "../styles/HomeCarePage.css";

function HomeCarePage() {
  return (
    <main className="home-care-page">

      {/* HERO SECTION */}
      <section className="home-care-hero">

        <div className="home-care-hero-content">

          <span className="home-care-label">
            24 HOURS DUTY
          </span>

          <h1>
            24-Hour Nursing
            <span>Services At Home</span>
          </h1>

          <p>
            24-Hour Nursing Services At Home For Delhi-NCR & Kolkata
          </p>

          <p>
            A personal expert nurse with skills on emergency medical
            management, vital signs monitoring, wound care management
            and daily personal hygiene care etc.
          </p>

          <a
            href="/#contact"
            className="home-care-btn"
          >
            Request a Callback →
          </a>

        </div>

      </section>

      {/* SERVICES SECTION */}
      <section className="home-care-services">

        <div className="home-care-section-heading">
          <span>OUR HOME CARE SERVICES</span>

          <h2>
            Professional care,
            <span>right at home.</span>
          </h2>

          <p>
            Personalised nursing and home care support designed around
            your healthcare needs.
          </p>
        </div>

        <div className="home-care-service-grid">

          <div className="home-care-service-card">
            <h3>24-Hour Nursing Care</h3>
            <p>
              Dedicated nursing support for patients who require
              continuous care and monitoring at home.
            </p>
          </div>

          <div className="home-care-service-card">
            <h3>Emergency Medical Management</h3>
            <p>
              Trained nursing professionals equipped to provide
              immediate support during medical emergencies.
            </p>
          </div>

          <div className="home-care-service-card">
            <h3>Vital Signs Monitoring</h3>
            <p>
              Regular monitoring of important health parameters
              to support safe and effective care.
            </p>
          </div>

          <div className="home-care-service-card">
            <h3>Wound Care Management</h3>
            <p>
              Professional assistance with wound care and
              day-to-day recovery requirements.
            </p>
          </div>

          <div className="home-care-service-card">
            <h3>Personal Hygiene Care</h3>
            <p>
              Compassionate assistance with daily personal hygiene
              and routine care activities.
            </p>
          </div>

          <div className="home-care-service-card">
            <h3>Patient Support</h3>
            <p>
              Continuous assistance focused on comfort, safety
              and personalised patient needs.
            </p>
          </div>

        </div>

      </section>

      {/* CTA SECTION */}
      <section className="home-care-cta">

        <div>
          <span>NEED HOME CARE?</span>

          <h2>
            Let us take care
            <br />
            of your loved ones.
          </h2>
        </div>

        <a
          href="/#contact"
          className="home-care-btn"
        >
          Request a Callback →
        </a>

      </section>

    </main>
  );
}

export default HomeCarePage;