function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Tell Us What You Need",
      description:
        "Share a few details about the care or support you are looking for.",
    },
    {
      number: "02",
      title: "We Understand Your Needs",
      description:
        "Our team understands your requirements and helps identify the right care solution.",
    },
    {
      number: "03",
      title: "Meet Your Care Professional",
      description:
        "We help connect you with the appropriate care professional based on your requirements.",
    },
    {
      number: "04",
      title: "Care Begins",
      description:
        "Once everything is arranged, your loved one can receive dependable care and support.",
    },
  ];

  return (
    <section className="how-section">
      <div className="how-container">

        <div className="how-heading">
          <span className="section-label">
            HOW IT WORKS
          </span>

          <h2>
            Getting the right care
            <span> can be simple.</span>
          </h2>

          <p>
            We make the journey from finding care to receiving
            support straightforward and comfortable for families.
          </p>
        </div>

        <div className="how-steps">

          {steps.map((step, index) => (
            <div className="how-step" key={step.number}>

              <div className="step-number">
                {step.number}
              </div>

              <div className="step-content">
                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>

              {index !== steps.length - 1 && (
                <div className="step-line"></div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;