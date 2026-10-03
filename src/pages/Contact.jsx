function Contact() {
  return (
    <main className="contact-page">

      {/* HERO */}
      <section className="contact-page-hero">
        <div className="contact-page-container">

          <span className="section-label">
            CONTACT SILVERGENIE
          </span>

          <h1>
            We are here to
            <span> help you.</span>
          </h1>

          <p>
            Get in touch with SilverGenie for information about our
            healthcare, elder care and support services.
          </p>

        </div>
      </section>


      {/* CONTACT CONTENT */}
      <section className="contact-page-section">

        <div className="contact-page-container contact-page-grid">

          {/* LEFT */}
          <div className="contact-page-info">

            <span className="section-label">
              GET IN TOUCH
            </span>

            <h2>
              Let's talk about
              <span> your care needs.</span>
            </h2>

            <p>
              Our team is available to help you understand our services
              and find the right support for your healthcare and elder
              care requirements.
            </p>


            {/* PHONE */}
            <div className="contact-detail">

              <div className="contact-detail-icon">
                ☎
              </div>

              <div>
                <span>Call Us</span>

                <a href="tel:18002030527">
                  1800 203 0527
                </a>
              </div>

            </div>


            {/* EMAIL */}
            <div className="contact-detail">

              <div className="contact-detail-icon">
                @
              </div>

              <div>
                <span>Email Us</span>

                <a href="mailto:info@yoursilvergenie.com">
                  info@yoursilvergenie.com
                </a>
              </div>

            </div>


            {/* WEBSITE */}
            <div className="contact-detail">

              <div className="contact-detail-icon">
                ↗
              </div>

              <div>
                <span>Website</span>

                <a
                  href="https://www.yoursilvergenie.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.yoursilvergenie.com
                </a>
              </div>

            </div>


            {/* INSTAGRAM */}
            <div className="contact-detail">

              <div className="contact-detail-icon">
                ◎
              </div>

              <div>
                <span>Instagram</span>

                <a
                  href="https://www.instagram.com/yoursilvergenie/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @yoursilvergenie
                </a>
              </div>

            </div>

          </div>


          {/* RIGHT FORM */}
          <div className="contact-page-form">

            <h3>
              Send us an enquiry
            </h3>

            <p>
              Fill in your details and our team will get back to you.
            </p>

            <form>

              <div className="contact-form-row">

                <div className="form-group">
                  <label>Full Name</label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>

                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                  />
                </div>

              </div>


              <div className="form-group">
                <label>Email ID</label>

                <input
                  type="email"
                  placeholder="Enter your email ID"
                />
              </div>


              <div className="form-group">
                <label>
                  I need information about
                </label>

                <select defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="elder-care">
                    Elder Care
                  </option>

                  <option value="home-care">
                    Home Care
                  </option>

                  <option value="emergency-care">
                    Emergency Care
                  </option>

                  <option value="wellness">
                    Wellness Services
                  </option>

                  <option value="health-management">
                    Health & Care Management
                  </option>

                  <option value="diabetes">
                    NCD / Diabetes Management
                  </option>

                  <option value="manpower">
                    Healthcare Manpower
                  </option>

                  <option value="convenience">
                    Healthcare Convenience Services
                  </option>
                </select>
              </div>


              <div className="form-group">
                <label>Message</label>

                <textarea
                  rows="5"
                  placeholder="Tell us how we can help..."
                />
              </div>


              <button type="submit">
                Send Enquiry →
              </button>

            </form>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;