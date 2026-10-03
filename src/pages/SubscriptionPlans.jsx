function SubscriptionPlans() {
  const plans = [
    {
      title: "Essential Care",
      subtitle: "Everyday support for seniors",
      description:
        "A flexible care option for seniors who need dependable assistance with their everyday care and support needs.",
      features: [
        "Personalised care support",
        "Assistance with daily activities",
        "Family coordination",
        "Regular care follow-up",
      ],
    },
    {
      title: "Comprehensive Care",
      subtitle: "Coordinated support for ongoing needs",
      description:
        "A more comprehensive approach for families looking for coordinated healthcare and care support.",
      features: [
        "Personalised care planning",
        "Healthcare coordination",
        "Caregiver support",
        "Ongoing family communication",
      ],
    },
    {
      title: "Complete Care",
      subtitle: "Holistic support for changing needs",
      description:
        "A coordinated care approach designed around the evolving healthcare, wellness and support needs of seniors.",
      features: [
        "Comprehensive care coordination",
        "Healthcare support",
        "Wellness assistance",
        "Personalised care management",
      ],
    },
  ];

  return (
    <main className="care-plans-page">

      {/* HERO */}
      <section className="care-plans-hero">
        <div className="care-plans-container">
          <div className="care-plans-hero-content">
            <span className="section-label">SILVERGENIE CARE PLANS</span>

            <h1>
              Care designed
              <span> around your needs.</span>
            </h1>

            <p>
              SilverGenie Care Plans bring together personalised support,
              healthcare coordination and dependable care to help seniors
              and their families manage care with greater confidence.
            </p>

            <a href="/#contact" className="care-plans-button">
              Enquire Now →
            </a>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section className="care-plans-section">
        <div className="care-plans-container">
          <div className="care-plans-heading">
            <span className="section-label">OUR CARE OPTIONS</span>

            <h2>
              Choose care that fits
              <span> your needs.</span>
            </h2>

            <p>
              Every family has different care requirements. Explore the
              different levels of support and connect with SilverGenie
              to understand which option is suitable for your needs.
            </p>
          </div>

          <div className="care-plans-grid">
            {plans.map((plan) => (
              <article className="care-plan-card" key={plan.title}>
                <div className="care-plan-card-top">
                  <h3>{plan.title}</h3>
                  <p className="care-plan-subtitle">{plan.subtitle}</p>
                </div>

                <p className="care-plan-description">{plan.description}</p>

                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a href="/#contact">Enquire About This Plan →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="care-plans-process">
        <div className="care-plans-container">
          <div className="care-plans-heading">
            <span className="section-label">HOW IT WORKS</span>
            <h2>Getting started is simple.</h2>
          </div>

          <div className="care-process-grid">
            <div className="care-process-card">
              <span>01</span>
              <h3>Tell Us Your Needs</h3>
              <p>Share your family's care requirements with our team.</p>
            </div>

            <div className="care-process-card">
              <span>02</span>
              <h3>Get a Care Plan</h3>
              <p>
                Our team understands your requirements and helps identify
                the appropriate care support.
              </p>
            </div>

            <div className="care-process-card">
              <span>03</span>
              <h3>Start Care</h3>
              <p>
                Get dependable support with ongoing coordination from
                SilverGenie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="care-plans-cta">
        <div className="care-plans-container">
          <div>
            <span className="section-label">NEED HELP CHOOSING?</span>

            <h2>
              Let's find the right care
              <span> for your family.</span>
            </h2>

            <p>
              Talk to SilverGenie about your care requirements and
              understand the available options.
            </p>
          </div>

          <a href="/#contact" className="care-plans-button">
            Talk to Us →
          </a>
        </div>
      </section>

    </main>
  );
}

export default SubscriptionPlans;