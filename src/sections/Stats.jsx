function Stats() {
  const stats = [
    {
      number: "5000+",
      title: "Backend",
      subtitle: "Support",
    },
    {
      number: "3rd",
      title: "Best Care Management",
      subtitle: "Service Provider",
    },
    {
      number: "200+",
      title: "Happy",
      subtitle: "Seniors",
    },
    {
      number: "94%",
      title: "Recovery Rate",
      subtitle: "After SG Services",
    },
    {
      number: "750+",
      title: "Users",
      subtitle: "On Application",
    },
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">

        <div className="stats-heading">
          <span className="section-label">
            SILVERGENIE IMPACT
          </span>

          <h2>
            Making a difference in
            <span> senior care.</span>
          </h2>
        </div>

        <div className="stats-grid">

          {stats.map((stat, index) => (
            <div className="stat-card" key={index}>

              <div className="stat-number">
                {stat.number}
              </div>

              <div className="stat-title">
                {stat.title}
              </div>

              <div className="stat-subtitle">
                {stat.subtitle}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;