function CareManagement() {
  const careAreas = [
    {
      title: "Healing with a Touch of Care",
      text: "Personalized care and healthcare assistance designed around the individual needs of seniors.",
    },
    {
      title: "Gift of Good Health",
      text: "Support that helps seniors and their families manage healthcare needs with greater ease and confidence.",
    },
    {
      title: "COVI Home Care",
      text: "Home-based care and support designed to help seniors manage their healthcare needs from the comfort of home.",
    },
    {
      title: "Assistance Workforce",
      text: "Access to trained healthcare and caregiving resources for different care requirements.",
    },
    {
      title: "Convenience",
      text: "A coordinated approach to healthcare services that makes everyday healthcare requirements easier to manage.",
    },
    {
      title: "Subscription Plans",
      text: "Flexible care plans designed to provide ongoing healthcare assistance and support.",
    },
  ];

  return (
    <main className="service-detail-section">

      {/* HERO */}
      <section className="service-detail-hero">

        <div className="service-detail-container">

          <span className="section-label">
            CARE MANAGEMENT
          </span>

          <h1>
            Healing with a
            <span> Touch of Care</span>
          </h1>

          <p>
            SilverGenie provides personalized healthcare assistance
            and care management support to help seniors and their
            families navigate healthcare with greater ease.
          </p>

        </div>

      </section>


      {/* CARE AREAS */}
      <section className="service-detail-content-section">

        <div className="service-detail-container">

          <div className="service-detail-heading">

            <span className="section-label">
              OUR CARE MANAGEMENT
            </span>

            <h2>
              Healthcare Support
              <span> Around You</span>
            </h2>

            <p>
              Our care management approach brings together healthcare
              assistance, caregiving support and convenience services
              around the needs of seniors.
            </p>

          </div>


          <div className="service-detail-features">

            {careAreas.map((area, index) => (

              <article
                className="service-detail-card"
                key={area.title}
              >

                <span className="service-detail-number">
                  0{index + 1}
                </span>

                <h3>
                  {area.title}
                </h3>

                <p>
                  {area.text}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="service-detail-cta">

        <div className="service-detail-container">

          <h2>
            Need help managing healthcare?
          </h2>

          <p>
            Get in touch with SilverGenie to learn more about
            our care management services.
          </p>

          <a href="/#contact">
            Enquire Now →
          </a>

        </div>

      </section>

    </main>
  );
}

export default CareManagement;