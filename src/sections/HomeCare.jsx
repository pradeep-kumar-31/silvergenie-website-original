const features = [
  {
    title: "Dedicated Concierge",
    icon: (
      <>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 20c.7-3.2 3.1-5 7-5s6.3 1.8 7 5" />
        <path d="m17 7 1.4 1.4L21 5.8" />
      </>
    ),
  },
  {
    title: "24X7 Assistance",
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7v5l3.5 2" />
        <path d="M8 2.8 6.5 4M16 2.8 17.5 4" />
      </>
    ),
  },
  {
    title: "Skilled Resource Pool of Experts",
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 19c.5-3 2.3-4.5 5.5-4.5s5 1.5 5.5 4.5" />
        <path d="M16 5.5a3 3 0 0 1 0 5.8M17 14.5c2.2.5 3.4 2 3.7 4.5" />
      </>
    ),
  },
  {
    title: "Remote Monitoring",
    icon: (
      <>
        <path d="M3 12h4l2.2-5 4.2 10 2.2-5H21" />
        <path d="M4 4h16v16H4z" />
      </>
    ),
  },
  {
    title: "Quick Turnaround Time",
    icon: (
      <>
        <path d="m13.5 2.5-8 11h6l-1 8 8-12h-6z" />
      </>
    ),
  },
  {
    title: "Hassle-Free Assistance During Emergency",
    icon: (
      <>
        <path d="M12 21s8-4 8-10V5l-8-3-8 3v6c0 6 8 10 8 10Z" />
        <path d="M12 8v6M9 11h6" />
      </>
    ),
  },
];

function HomeCare() {
  return (
    <section className="homecare-section">
      <div className="homecare-container">
        <div className="homecare-content">
          <span className="section-label">BEYOND BUSINESS</span>

          <h2>
            We Bring <span>Care.</span>
          </h2>

          <p>SilverGenie&apos;s services portfolio goes beyond business!</p>

          <p>
            We care for elders, paying attention to every detail, noticing every
            change, and assessing the physical and mental well-being needs that
            come with age.
          </p>

          <p>Care is the lever and is pivotal to our scaling up!</p>
        </div>

        <div className="homecare-features">
          {features.map((feature) => (
            <article className="homecare-feature" key={feature.title}>
              <span className="homecare-feature-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {feature.icon}
                </svg>
              </span>

              <h3>{feature.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeCare;
