import "../styles/About.css";
function About() {
  return (
    <main className="about-page">

      {/* ABOUT HERO */}

      <section className="about-hero">
        <div className="about-container">

          <span className="section-label">
            ABOUT SILVERGENIE
          </span>

          <h1>
            Personalized Care
            <span> For Those Who Care For Us</span>
          </h1>

          <p>
            Changing the healthcare landscape for the elderly in India
          </p>

        </div>
      </section>


      {/* ABOUT SILVERGENIE */}

      <section className="about-intro">
        <div className="about-container">

          <span className="section-label">
            ABOUT SILVERGENIE
          </span>

          <h2>
            A New Era in Elder Care
          </h2>

          <p>
            SilverGenie™ is a full-stack, broad-spectrum smart aging
            startup offering advanced healthcare assistance for seniors.
          </p>

          <p>
            As a gender-inclusive service provider, we are reshaping
            the elderly healthcare landscape in India and positioning
            ourselves as a leading player in the care economy.
          </p>

        </div>
      </section>


      {/* MISSION / VISION */}

      <section className="mission-vision">

        <div className="about-container mission-grid">

          <div className="mission-card">

            <span className="section-label">
              MISSION
            </span>

            <h2>Our Mission</h2>

            <p>
              To empower and enable senior citizens to lead a full,
              healthy and independent life. We help them navigate
              the Indian healthcare eco-system with ease and provide
              continuous support to improve their health outcomes.
            </p>

          </div>


          <div className="mission-card">

            <span className="section-label">
              VISION
            </span>

            <h2>Our Vision</h2>

            <p>
              To become a leader in elder care. We bring consumer
              first technology, advanced clinical services with a
              compassionate touch on a single platform.
            </p>

            <p>
              We will always go beyond the call of duty to deliver
              exceptional concierge services to improve the lives
              of our seniors.
            </p>

          </div>

        </div>

      </section>


      {/* VALUES */}

      <section className="values-section">

        <div className="about-container">

          <div className="values-heading">

            <span className="section-label">
              OUR VALUES
            </span>

            <h2>
              Quality. Trust.
              <span> Transparency.</span>
            </h2>

            <p>
              At SilverGenie, everything we do reflects the guiding
              principles of quality, trust and transparency.
            </p>

          </div>


          <div className="values-grid">

            <div className="value-card">
              <h3>Quality</h3>

              <p>
                Our primary aim is well-being of our seniors,
                and we'll always go the extra mile to keep our
                promise of wellness for senior citizens.
              </p>
            </div>


            <div className="value-card">
              <h3>Trust</h3>

              <p>
                At SilverGenie we wish to create a world for
                elders where they feel loved and nurtured.
                We wish to forge a sense of family wherein
                there is trust and accountability.
              </p>
            </div>


            <div className="value-card">
              <h3>Transparency</h3>

              <p>
                SilverGenie strives to be transparent and make
                long-lasting and meaningful relationships to
                create reliable associations with our clients,
                partners, stakeholders, and vendors.
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default About;