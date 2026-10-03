function HomeCare() {
  const features = [
    "Dedicated Concierge",
    "24X7 Assistance",
    "Skilled Resource Pool of Experts",
    "Remote Monitoring",
    "Quick Turnaround Time",
    "Hassle-Free Assistance During Emergency",
  ];

  return (
    <section className="homecare-section">
      <div className="homecare-container">

        <div className="homecare-content">

          <span className="section-label">
            MORE THAN JUST A SERVICE
          </span>

          <h2>
            We Bring
            <span> Home Care.</span>
          </h2>

          <p>
            SilverGenie goes beyond services, we care for elders and pay
            attention to every detail, notice every change and assess the
            physical and mental well-being needs that come with age.
          </p>

          <p>
            We understand life can become lonely and health demands can
            take precedence, which is why SilverGenie is there to guide
            and support you at every step of this new phase of your life.
          </p>

          <p>
            Our goal is to simplify the lives of our elders and their
            caregivers by helping them access everything they need to
            manage health better.
          </p>

        </div>

        <div className="homecare-features">

          {features.map((feature, index) => (
            <div className="homecare-feature" key={index}>

              <div className="homecare-feature-number">
                0{index + 1}
              </div>

              <h3>{feature}</h3>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default HomeCare;