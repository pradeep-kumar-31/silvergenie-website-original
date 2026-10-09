import "../styles/WhySilverGenie.css";

/* =========================================================
   SILVERGENIE — THE HEALING TOUCH
   Content verified from official SilverGenie website
========================================================= */

function WhySilverGenie() {
  return (
    <section className="healing-section" id="healing">

      <div className="healing-container">

        {/* =================================================
            LEFT IMAGE
        ================================================= */}

        <div className="healing-image">

          <img
            src={`${import.meta.env.BASE_URL}image/healing/healing-touch.jpeg`}
            alt="SilverGenie Elder Care"
          />

          <div className="healing-image-overlay">
            <span>SilverGenie</span>
            <small>Care • Compassion • Support</small>
          </div>

        </div>


        {/* =================================================
            RIGHT CONTENT
        ================================================= */}

        <div className="healing-content">

          {/* LABEL */}

          <span className="healing-label">
            THE HEALING TOUCH OF SILVERGENIE
          </span>


          {/* HEADING */}

          <h2>
            The Healing Touch of{" "}
            <span>SilverGenie</span>
          </h2>


          {/* OFFICIAL WEBSITE CONTENT */}

          <p>
            SilverGenie understands the importance of elder care.
            Through our services and offerings, we have helped senior
            citizens manage their day-to-day healthcare needs and
            improve their health outcomes.
          </p>

          <p>
            We have helped them rediscover the joy in their everyday
            lives and given them the taste of freedom that they deserve.
          </p>

          <p>
            Within a short time, SilverGenie has created a name for
            itself and has emerged as a force to be reckoned with in
            the senior care industry.
          </p>


          {/* =================================================
              SMALL HIGHLIGHT
              Visual only — not additional website claim
          ================================================= */}

          <div className="healing-highlight">

            <div className="healing-highlight-item">

              <span className="healing-check">✓</span>

              <div>
                <strong>Senior-Centric Care</strong>

                <small>
                  Healthcare assistance designed around the needs
                  of senior citizens.
                </small>
              </div>

            </div>


            <div className="healing-highlight-item">

              <span className="healing-check">✓</span>

              <div>
                <strong>Holistic Healthcare Support</strong>

                <small>
                  Support focused on better healthcare management
                  and improved well-being.
                </small>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhySilverGenie;