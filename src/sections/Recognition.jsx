import "../styles/Recognition.css";
function Recognition() {
  const recognitionImages = [
    "Group-1.png",
    "Group-2.png",
    "Group-3.png",
    "Group-4.png",
    "Group-5.png",
    "Group-6.png",
    "Group-7.png",
    "Group-8.png",
    "Group-9.png",
    "Group-10.png",
    "Group-11.jpeg",
    "microsoft-samhita-isb-oic.jpeg",
  ];

  return (
    <section className="recognition-section">

      <div className="recognition-container">

        <div className="recognition-heading">
          <span>RECOGNITION & PARTNERSHIPS</span>

          <h2>
            Recognized for Innovations
            <br />
            <strong>in Senior Care.</strong>
          </h2>

          <p>
            SilverGenie has been recognized and associated with
            leading organizations for its work and innovations
            in senior care and healthcare.
          </p>
        </div>

        <div className="recognition-grid">

          {recognitionImages.map((image, index) => (
            <div
              className="recognition-card"
              key={image}
            >
              <img
                src={`${import.meta.env.BASE_URL}image/recognition/${image}`}
                alt={`SilverGenie recognition ${index + 1}`}
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Recognition;