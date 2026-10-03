function Resources() {
  return (
    <section className="resources-section" id="resources">
      <div className="resources-container">

        <div className="resources-heading">
          <span className="section-label">
            KNOW MORE ABOUT SILVERGENIE
          </span>

          <h2>
            Click Below to Know More
            <span> About SilverGenie</span>
          </h2>

          <p>
            Get to know all about us, our services, offerings,
            packages and more.
          </p>
        </div>

        <div className="resources-grid">

          <a
            href="https://www.yoursilvergenie.com/wp-content/uploads/2020/10/SilverGenie_Brochure_New.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resource-card"
          >
            <div className="resource-icon">
              ↗
            </div>

            <div>
              <span>DOCUMENT</span>
              <h3>Brochure</h3>
              <p>
                Know more about SilverGenie, its services
                and offerings.
              </p>
            </div>
          </a>

          <a
            href="https://www.yoursilvergenie.com/wp-content/themes/silvergenie/pdfs/Chunauti.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resource-card"
          >
            <div className="resource-icon">
              ↗
            </div>

            <div>
              <span>DOCUMENT</span>
              <h3>Chunauti 2.0</h3>
              <p>
                Explore more about SilverGenie and its
                elder-care vision.
              </p>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Resources;