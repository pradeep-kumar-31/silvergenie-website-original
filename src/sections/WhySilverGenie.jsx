import "../styles/WhySilverGenie.css";

function WhySilverGenie() {
  return (
    <section className="healing-section" id="healing">
      <div className="healing-container">
        <div className="healing-image">
          <img
            src={`${import.meta.env.BASE_URL}image/healing/healing-touch.jpeg`}
            alt="SilverGenie elder care"
          />

          <div className="healing-image-overlay">
            <span>SilverGenie</span>
            <small>Consistent • Compassion • Care</small>
          </div>
        </div>

        <div className="healing-content">
          {/* <span className="healing-label">
            THE HEALING TOUCH OF SILVERGENIE
          </span> */}

          <h2>
            The Healing Touch of <span>SilverGenie</span>
          </h2>

          <p>
            The foundation of our care is trust. The absolute trust that we will
            be right beside you when you need us the most.
          </p>

          <div className="healing-trust">
            <span>Don’t just take our word for it.</span>
            <strong>Over 1,000 people trust us.</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhySilverGenie;
