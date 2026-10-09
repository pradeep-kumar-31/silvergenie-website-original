import "../styles/SubscriptionPlans.css";

const plans = [
  {
    name: "HOLISTIC GENIE CARE",
    price: "₹8,000",
    period: "Per person per month, billed Semi-Annually",
    featured: true,
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
    price: "₹4,000",
    period: "Per person per month, billed Semi-Annually",
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
    price: "₹8,000",
    period: "Per person per month, billed Semi-Annually",
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
    price: "₹800",
    period: "Per person per month, billed Semi-Annually",
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
    price: "₹800",
    period: "Per person per month, billed Semi-Annually",
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

function SubscriptionPlans() {
  return (
    <main className="subscription-page">

      {/* HERO */}
      <section className="subscription-hero">
        <div className="subscription-container">

          <span className="subscription-label">
            SILVERGENIE CARE PLANS
          </span>

          <h1>
            Care that fits
            <span>your needs.</span>
          </h1>

          <p>
            Choose from SilverGenie's subscription plans designed
            to provide the right level of healthcare support for
            seniors and their families.
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


      {/* PLANS */}
      <section className="subscription-plans">

        <div className="subscription-container">

          <div className="subscription-heading">
            <span className="subscription-label">
              SUBSCRIPTION PLANS
            </span>

            <h2>
              Choose the right
              <span>care for your loved ones.</span>
            </h2>

            <p>
              Our subscription plans are designed to provide
              healthcare assistance based on the duration and
              level of support required.
            </p>
          </div>


          <div className="subscription-grid">

            {plans.map((plan) => (
              <article
                className={`subscription-card ${
                  plan.featured ? "featured" : ""
                }`}
                key={plan.name}
              >

                {plan.featured && (
                  <div className="subscription-badge">
                    RECOMMENDED
                  </div>
                )}

                <div className="subscription-card-top">

                  <span className="subscription-card-label">
                    SILVERGENIE
                  </span>

                  <h3>
                    {plan.name}
                  </h3>

                  <div className="subscription-price">
                    {plan.price}
                  </div>

                  <p className="subscription-period">
                    {plan.period}
                  </p>

                </div>


                <div className="subscription-divider" />


                <ul className="subscription-features">

                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span className="feature-check">
                        ✓
                      </span>

                      <span>
                        {feature}
                      </span>
                    </li>
                  ))}

                </ul>


                <a
                  href="/silvergenie-website-original/#contact"
                  className="subscription-button"
                >
                  Request a Callback
                  <span>→</span>
                </a>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* ADDITIONAL SERVICES */}
      <section className="subscription-addons">

        <div className="subscription-container">

          <div className="subscription-addon-layout">

            <div className="subscription-addon-content">

              <span className="subscription-label">
                ALLIED CARE SERVICES
              </span>

              <h2>
                More support,
                <span>when you need it.</span>
              </h2>

              <p>
                SilverGenie members can also access a range of
                allied healthcare and support services.
              </p>

            </div>


            <div className="subscription-addon-grid">

              {additionalServices.map((service, index) => (
                <div
                  className="subscription-addon-item"
                  key={service}
                >
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>
                    {service}
                  </strong>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* WHY SILVERGENIE */}
      <section className="subscription-why">

        <div className="subscription-container">

          <div className="subscription-heading center">

            <span className="subscription-label">
              WHY SILVERGENIE
            </span>

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
                Support for emergencies with coordinated
                healthcare assistance.
              </p>
            </div>

            <div className="subscription-why-card">
              <span>02</span>
              <h3>Personal Health Records</h3>
              <p>
                Centralized health information to support
                continuity of care.
              </p>
            </div>

            <div className="subscription-why-card">
              <span>03</span>
              <h3>Care Coach Support</h3>
              <p>
                Regular care coach interactions to help
                monitor health and wellbeing.
              </p>
            </div>

            <div className="subscription-why-card">
              <span>04</span>
              <h3>Allied Care Benefits</h3>
              <p>
                Access to discounts and additional
                healthcare services.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="subscription-cta">

        <div className="subscription-container">

          <span className="subscription-label">
            SILVERGENIE CARE
          </span>

          <h2>
            Find the right plan
            <span>for your family.</span>
          </h2>

          <p>
            Connect with SilverGenie to understand the care
            plan that best matches your healthcare requirements.
          </p>

          <a
            href="/silvergenie-website-original/#contact"
            className="subscription-cta-button"
          >
            Enquire About a Plan →
          </a>

        </div>

      </section>

    </main>
  );
}

export default SubscriptionPlans;