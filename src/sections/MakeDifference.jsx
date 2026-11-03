import "../styles/MakeDifference.css";

const points = [
  {
    title: ["Compassionate", "Human Intervention"],
    description:
      "Driven by compassion and a commitment to helping senior citizens.",
    image: "image/difference/compassionate-care.jpeg",
  },
  {
    title: ["Clinical", "Analytics"],
    description: "Using real-time data to generate actionable insights.",
    image: "image/difference/clinical-analytics.png",
  },
  {
    title: ["Competent", "Technology"],
    description: "Using innovative technology to deliver high-quality care.",
    image: "image/difference/healthcare-technology.jpeg",
  },
  {
    title: ["Continuous", "Wellness Support"],
    description:
      "Providing round-the-clock support for physical and mental well-being.",
    image: "image/difference/continuous-wellness.jpeg",
  },
  {
    title: ["Consistent Delivery", "of Services"],
    description:
      "Delivering holistic support to meet the varied needs of older adults.",
    image: "image/difference/service-delivery.png",
  },
];

function MakeDifference() {
  return (
    <section className="difference-section" id="make-difference">
      <div className="difference-container">
        <div className="difference-heading">
          <span className="difference-label">CARVING OUT A NICHE</span>

          <h2>Committed to revolutionising senior care in India</h2>

          <div className="difference-copy">
            SilverGenie is a full-stack, broad-spectrum smart-aging startup
            committed to revolutionising senior care in India. We are
            SilverGenie, but we do not claim to have a magic potion for the
            challenges of old age. When we talk about revolutionising senior
            care, we mean helping seniors ease some of their most pressing
            challenges. We continually train our team to help older adults
            approach life&apos;s changes with confidence and a smile. We
            understand that a one-size-fits-all approach will not work. That is
            why we stay flexible and open to evolving needs. Our services range
            from companionship to help ease loneliness to clinical care during
            illness. We shape our technology and travel solutions around
            seniors&apos; need for dignity and independence. Our services and
            products must continue to evolve with time and changing trends.
          </div>
        </div>

        <div className="difference-grid">
          {points.map((point, index) => (
            <article
              className="difference-card"
              key={point.title.join(" ")}
              style={{
                "--difference-delay": `${index * 0.08}s`,
              }}
            >
              <div className="difference-image">
                <img
                  src={`${import.meta.env.BASE_URL}${point.image}`}
                  alt={`SilverGenie ${point.title.join(" ")}`}
                  loading="lazy"
                />
              </div>

              <div className="difference-card-content">
                <h3>
                  {point.title[0]}
                  <br />
                  {point.title[1]}
                </h3>

                <p>{point.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MakeDifference;
