function ContactSection() {
  return (
    <section className="contact-section" id="contact">

      <div className="contact-container">

        {/* LEFT CONTENT */}
        <div className="contact-info">

          <span className="section-label">
            ENQUIRE NOW
          </span>

          <h2>
            To know more about our
            <span> products and services</span>
          </h2>

          <p>
            Fill the form below and our team will get back
            to you at the earliest.
          </p>


          {/* PHONE */}
          <div className="contact-phone">

            <span>Call us at</span>

            <a href="tel:18002030527">
              1800 203 0527
            </a>

          </div>


          {/* EMAIL */}
          <div className="contact-email">

            <span>Email us at</span>

            <a href="mailto:info@yoursilvergenie.com">
              info@yoursilvergenie.com
            </a>

          </div>


          {/* INSTAGRAM */}
          <div className="contact-social">

            <span>Follow us on Instagram</span>

            <a
              href="https://www.instagram.com/yoursilvergenie/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @yoursilvergenie
            </a>

          </div>

        </div>


        {/* FORM */}
        <div className="contact-form">

          <form>

            {/* PHONE */}
            <div className="form-group">

              <label htmlFor="phone">
                Phone Number
              </label>

              <input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
              />

            </div>


            {/* EMAIL */}
            <div className="form-group">

              <label htmlFor="email">
                Email ID
              </label>

              <input
                id="email"
                type="email"
                placeholder="Enter your email ID"
              />

            </div>


            {/* SERVICE */}
            <div className="form-group">

              <label>
                I need more Information On
              </label>

              <div className="checkbox-grid">

                <label>
                  <input type="checkbox" />
                  <span>Allied Care</span>
                </label>

                <label>
                  <input type="checkbox" />
                  <span>Corporate Care</span>
                </label>

                <label>
                  <input type="checkbox" />
                  <span>Elder Care</span>
                </label>

                <label>
                  <input type="checkbox" />
                  <span>Home Care</span>
                </label>

                <label>
                  <input type="checkbox" />
                  <span>Emergency Care</span>
                </label>

                <label>
                  <input type="checkbox" />
                  <span>Wellness Services</span>
                </label>

              </div>

            </div>


            {/* MESSAGE */}
            <div className="form-group">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                rows="4"
                placeholder="Tell us how we can help you..."
              />

            </div>


            {/* BUTTON */}
            <button
              type="submit"
              className="contact-submit"
            >
              Submit Enquiry
              <span>→</span>
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default ContactSection;