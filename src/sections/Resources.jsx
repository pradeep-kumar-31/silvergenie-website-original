function Resources() {
  const resources = [
    {
      type: "DOCUMENT",
      title: "SilverGenie Brochure",
      description:
        "Know more about SilverGenie, our services, care solutions and offerings.",
      button: "View Brochure",
      link:
        "https://www.yoursilvergenie.com/wp-content/uploads/2020/10/SilverGenie_Brochure_New.pdf",
      icon: "▣",
    },

    {
      type: "DOCUMENT",
      title: "Chunauti 2.0",
      description:
        "Explore more about SilverGenie and our vision towards better elder care.",
      button: "Read Document",
      link:
        "https://www.yoursilvergenie.com/wp-content/themes/silvergenie/pdfs/Chunauti.pdf",
      icon: "✦",
    },
  ];

  return (
    <section className="resources-section" id="resources">

      <div className="resources-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="resources-heading">

          <span className="section-label">
            KNOW MORE ABOUT SILVERGENIE
          </span>

          <h2>
            Explore Our
            <span> Resources</span>
          </h2>

          <p>
            Get to know more about SilverGenie, our services,
            offerings, care solutions and our approach towards
            supporting seniors and their families.
          </p>

        </div>


        {/* =================================================
            RESOURCE CARDS
        ================================================= */}

        <div className="resources-grid">

          {resources.map((resource) => (

            <a
              key={resource.title}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="resource-card"
            >

              {/* ICON */}

              <div className="resource-icon">
                {resource.icon}
              </div>


              {/* CONTENT */}

              <div className="resource-content">

                <span className="resource-type">
                  {resource.type}
                </span>

                <h3>
                  {resource.title}
                </h3>

                <p>
                  {resource.description}
                </p>

                <span className="resource-button">
                  {resource.button}
                  <span className="resource-arrow">
                    →
                  </span>
                </span>

              </div>


              {/* TOP ARROW */}

              <span className="resource-card-arrow">
                ↗
              </span>

            </a>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Resources;