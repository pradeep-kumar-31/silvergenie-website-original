function MakeDifference() {
  const points = [
    {
      title: "Compassionate Human Intervention",
      description:
        "Driven by compassion and zeal to help senior citizens in need",
      image: "/image/difference/compassionate-care.jpeg",
    },
    {
      title: "Clinical Analytics",
      description:
        "Harnessing the power of real-time data to generate actionable insights",
      image: "/image/difference/clinical-analytics.png",
    },
    {
      title: "Competent Technology",
      description:
        "Backed by innovative technology to provide best-in-class care",
      image: "/image/difference/healthcare-technology.png",
    },
    {
      title: "Continuous Wellness Support",
      description:
        "Providing round-the-clock support for physical and mental well-being needs",
      image: "/image/difference/continuous-wellness.png",
    },
    {
      title: "Consistent Delivery of Services",
      description:
        "Delivering holistic support and care for elders to cater to their every need",
      image: "/image/difference/service-delivery.png",
    },
  ];

  return (
    <section className="difference-section">
      <div className="difference-container">

        {/* SECTION HEADING */}
        <div className="difference-heading">

          <span className="section-label">
            MAKE A DIFFERENCE
          </span>

          <h2>
            SilverGenie is committed to
            <span> revolutionize elder care management in India.</span>
          </h2>

          <p>
            We aim to help seniors cope with needs that come with
            ageing at a touch of a button.
          </p>

          <p>
            Our comprehensive and seamless healthcare platform is
            designed to provide senior citizens with an array of
            services and experts to help them discover a new way of
            managing their healthcare needs.
          </p>

        </div>


        {/* FIVE CARDS */}
        <div className="difference-grid">

          {points.map((point, index) => (

            <div className="difference-card" key={point.title}>

              {/* IMAGE */}
              <div className="difference-image">

                <img
                  src={point.image}
                  alt={point.title}
                />

                {/* <div className="difference-number">
                  0{index + 1}
                </div> */}

              </div>


              {/* CONTENT */}
              <div className="difference-card-content">

                <h3>
                  {point.title}
                </h3>

                <p>
                  {point.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default MakeDifference;