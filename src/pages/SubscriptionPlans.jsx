import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/SubscriptionPlans.css";

const plans = [
  {
    name: "HOLISTIC GENIE CARE",
    featured: true,
    prices: {
      individual: {
        semiAnnual: { monthly: 7500, total: 45000 },
        annual: { monthly: 7208, total: 86500 },
      },
      couple: {
        semiAnnual: { monthly: 13333, total: 80000 },
        annual: { monthly: 12792, total: 153500 },
      },
    },
    features: [
      "24/7 Emergency Support",
      "Coordination with Ambulance",
      "Ambulance Charges Covered",
      "Personal Health Record (PHR)",
      "Care Executive Visit during Emergency",
      "Care Coach Telephonic Follow-up",
      "Monthly at Home Well-Being Visits",
      "Monthly Doctor's Home Visit",
      "Full Body Checkup",
      "Nutritionist or Dietician Call",
      "Home Safety Audit",
      "15-20% Discount on Allied Care Services",
    ],
  },
  {
    name: "HEALTH GENIE",
    prices: {
      individual: {
        semiAnnual: { monthly: 5833, total: 35000 },
        annual: { monthly: 5583, total: 67000 },
      },
      couple: {
        semiAnnual: { monthly: 10000, total: 60000 },
        annual: { monthly: 9583, total: 115000 },
      },
    },
    features: [
      "24/7 Emergency Support",
      "Coordination with Ambulance",
      "Ambulance Charges Covered",
      "Personal Health Record (PHR)",
      "Care Executive Visit during Emergency",
      "Care Coach Telephonic Follow-up",
      "Monthly at Home Well-Being Visit",
      "Quarterly Doctor's Teleconsultation & Home Visit",
      "Full Body Checkup",
      "10-15% Discount on Allied Care Services",
    ],
  },
  {
    name: "CARE GENIE",
    prices: {
      individual: {
        semiAnnual: { monthly: 1500, total: 9000 },
        annual: { monthly: 1417, total: 17000 },
      },
      couple: {
        semiAnnual: { monthly: 2667, total: 16000 },
        annual: { monthly: 2500, total: 30000 },
      },
    },
    features: [
      "Personal Health Record (PHR)",
      "Care Coach Telephonic Follow-up",
      "Monthly at Home Well-Being Visit",
      "Monthly Doctor's Teleconsultation",
      "5-10% Discount on Allied Care Services",
    ],
  },
  {
    name: "EMERGENCY GENIE PLUS",
    prices: {
      individual: {
        semiAnnual: { monthly: 2500, total: 15000 },
        annual: { monthly: 2375, total: 28500 },
      },
      couple: {
        semiAnnual: { monthly: 4167, total: 25000 },
        annual: { monthly: 3750, total: 45000 },
      },
    },
    features: [
      "24/7 Emergency Support",
      "Coordination with Ambulance",
      "Ambulance Charges Covered",
      "Personal Health Record (PHR)",
      "Care Executive during Emergency",
      "Care Coach Telephonic Follow-up",
      "Monthly at Home Well-Being Visit",
      "Complimentary Doctor Teleconsultation",
      "5-10% Discount on Allied Care Services",
    ],
  },
  {
    name: "EMERGENCY GENIE",
    prices: {
      individual: {
        semiAnnual: { monthly: 1000, total: 6000 },
        annual: { monthly: 938, total: 11250 },
      },
      couple: {
        semiAnnual: { monthly: 1750, total: 10500 },
        annual: { monthly: 1688, total: 20250 },
      },
    },
    features: [
      "24/7 Emergency Support",
      "Coordination with Ambulance",
      "Personal Health Record (PHR)",
      "Care Executive Visits during Emergency",
      "Care Coach Telephonic Follow-up",
    ],
  },
];

const additionalServices = [
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
  "Property & Estate Management",
  "Government Documentation Assistance",
  "Retirement Planning",
];

const formatINR = (amount) =>
  new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(amount);

function PlanCard({ plan, onRequestCallback }) {
  const [memberType, setMemberType] = useState("individual");
  const [billingPeriod, setBillingPeriod] = useState("semiAnnual");

  const selectedPrice = plan.prices[memberType][billingPeriod];
  const billingLabel =
    billingPeriod === "annual" ? "Annually" : "Semi-annually";

  return (
    <article className={`subscription-card ${plan.featured ? "featured" : ""}`}>
      {plan.featured && <div className="subscription-badge">RECOMMENDED</div>}

      <div className="subscription-card-top">
        <span className="subscription-card-label">SILVERGENIE</span>
        <h3>{plan.name}</h3>

        <div className="subscription-options">
          <div className="subscription-option-group">
            <span className="subscription-option-title">Choose members</span>

            <div className="subscription-option-buttons">
              <button
                type="button"
                className={`subscription-option-button ${
                  memberType === "individual" ? "active" : ""
                }`}
                aria-pressed={memberType === "individual"}
                onClick={() => setMemberType("individual")}
              >
                Individual
              </button>

              <button
                type="button"
                className={`subscription-option-button ${
                  memberType === "couple" ? "active" : ""
                }`}
                aria-pressed={memberType === "couple"}
                onClick={() => setMemberType("couple")}
              >
                Couple
              </button>
            </div>
          </div>

          <div className="subscription-option-group">
            <span className="subscription-option-title">Billing period</span>

            <div className="subscription-option-buttons">
              <button
                type="button"
                className={`subscription-option-button ${
                  billingPeriod === "semiAnnual" ? "active" : ""
                }`}
                aria-pressed={billingPeriod === "semiAnnual"}
                onClick={() => setBillingPeriod("semiAnnual")}
              >
                Semi Annual
              </button>

              <button
                type="button"
                className={`subscription-option-button ${
                  billingPeriod === "annual" ? "active" : ""
                }`}
                aria-pressed={billingPeriod === "annual"}
                onClick={() => setBillingPeriod("annual")}
              >
                Annual
              </button>
            </div>
          </div>
        </div>

        <div className="subscription-price">
          ₹{formatINR(selectedPrice.monthly)}
          <span> / month</span>
        </div>

        <p className="subscription-period">
          {memberType === "couple" ? "Couple" : "Individual"} plan ·{" "}
          {billingLabel}
        </p>

        <p className="subscription-total">
          incl. GST billed {billingLabel} at{" "}
          <strong>₹{formatINR(selectedPrice.total)}/-</strong>
        </p>
      </div>

      <div className="subscription-divider" />

      <ul className="subscription-features">
        {plan.features.map((feature) => (
          <li key={feature}>
            <span className="feature-check">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="subscription-button"
        onClick={onRequestCallback}
      >
        Request a Callback
        <span aria-hidden="true">→</span>
      </button>
    </article>
  );
}

function SubscriptionPlans() {
  const navigate = useNavigate();

  const goToContact = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    navigate("/#contact");

    window.setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 500);
  };

  return (
    <main className="subscription-page">
      <section className="subscription-hero">
        <div className="subscription-container">
          <span className="subscription-label">SILVERGENIE CARE PLANS</span>

          <h1>
            Care that fits
            <span>your needs.</span>
          </h1>

          <p>
            Choose from SilverGenie's subscription plans designed to provide the
            right level of healthcare support for seniors and their families.
          </p>

          <div className="subscription-hero-stats">
            <div>
              <strong>24/7</strong>
              <span>Emergency Support</span>
            </div>

            <div>
              <strong>5</strong>
              <span>Care Plans</span>
            </div>

            <div>
              <strong>360°</strong>
              <span>Healthcare Support</span>
            </div>
          </div>
        </div>
      </section>

      <section className="subscription-plans">
        <div className="subscription-container">
          <div className="subscription-heading">
            <span className="subscription-label">SUBSCRIPTION PLANS</span>

            <h2>
              Choose the right
              <span>care for your loved ones.</span>
            </h2>

            <p>
              Select Individual or Couple and choose a semi-annual or annual
              billing period to view the package price.
            </p>
          </div>

          <div className="subscription-grid">
            {plans.map((plan) => (
              <PlanCard
                key={plan.name}
                plan={plan}
                onRequestCallback={goToContact}
              />
            ))}
          </div>

          <p className="subscription-pricing-note">
            All displayed package totals include GST. The billing total is shown
            directly for each plan, member type, and billing period.
          </p>
        </div>
      </section>

      <section className="subscription-addons">
        <div className="subscription-container">
          <div className="subscription-addon-layout">
            <div className="subscription-addon-content">
              <span className="subscription-label">ALLIED CARE SERVICES</span>

              <h2>
                More support,
                <span>when you need it.</span>
              </h2>

              <p>
                SilverGenie members can also access a range of allied healthcare
                and support services.
              </p>
            </div>

            <div className="subscription-addon-grid">
              {additionalServices.map((service, index) => (
                <div className="subscription-addon-item" key={service}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{service}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="subscription-why">
        <div className="subscription-container">
          <div className="subscription-heading center">
            <span className="subscription-label">WHY SILVERGENIE</span>

            <h2>
              Healthcare support
              <span>you can depend on.</span>
            </h2>
          </div>

          <div className="subscription-why-grid">
            <div className="subscription-why-card">
              <span>01</span>
              <h3>24/7 Emergency Support</h3>
              <p>
                Support for emergencies with coordinated healthcare assistance.
              </p>
            </div>

            <div className="subscription-why-card">
              <span>02</span>
              <h3>Personal Health Records</h3>
              <p>
                Centralized health information to support continuity of care.
              </p>
            </div>

            <div className="subscription-why-card">
              <span>03</span>
              <h3>Care Coach Support</h3>
              <p>
                Regular care coach interactions to help monitor health and
                wellbeing.
              </p>
            </div>

            <div className="subscription-why-card">
              <span>04</span>
              <h3>Allied Care Benefits</h3>
              <p>Access to discounts and additional healthcare services.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="subscription-cta">
        <div className="subscription-container">
          <span className="subscription-label">SILVERGENIE CARE</span>

          <h2>
            Find the right plan
            <span>for your family.</span>
          </h2>

          <p>
            Connect with SilverGenie to understand the care plan that best
            matches your healthcare requirements.
          </p>

          <button
            type="button"
            className="subscription-cta-button"
            onClick={goToContact}
          >
            Enquire About a Plan →
          </button>
        </div>
      </section>
    </main>
  );
}

export default SubscriptionPlans;
