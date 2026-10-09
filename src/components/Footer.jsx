import "../styles/Footer.css";
import SilverGenieLogo from "../assets/SilverGenieLogo.png";

function Footer() {
  return (
    <footer className="sg-footer">

      {/* =====================================================
          FOOTER MAIN
      ===================================================== */}
      <div className="sg-footer-main">

        <div className="sg-footer-container">

          {/* BRAND */}
          <div className="sg-footer-brand">

            <img
              src={SilverGenieLogo}
              alt="SilverGenie"
              className="sg-footer-logo"
            />

            <p className="sg-footer-description">
              Advanced healthcare assistance for seniors,
              delivered with compassion, technology and trust.
            </p>

            {/* SOCIAL ICONS */}
            <div className="sg-footer-socials">

              {/* WHATSAPP */}
              <a
                href="https://wa.me/9118002030527"
                target="_blank"
                rel="noopener noreferrer"
                className="sg-social whatsapp"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.52 3.48A11.78 11.78 0 0 0 12.14 0C5.61 0 .3 5.3.3 11.83c0 2.08.54 4.11 1.57 5.9L.2 24l6.42-1.68a11.82 11.82 0 0 0 5.51 1.4h.01c6.52 0 11.83-5.31 11.83-11.84 0-3.16-1.23-6.13-3.45-8.4ZM12.14 21.7h-.01a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.81 1 1.02-3.72-.23-.38a9.82 9.82 0 1 1 8.4 4.68Zm5.39-7.37c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                </svg>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:ceo.office@yoursilvergenie.com"
                className="sg-social email"
                aria-label="Email"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.5l9 5.5 9-5.5V7H3Zm18 10V9.85l-8.48 5.18a1 1 0 0 1-1.04 0L3 9.85V17h18Z" />
                </svg>
              </a>

              {/* PHONE */}
              <a
                href="tel:18002030527"
                className="sg-social phone"
                aria-label="Call SilverGenie"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.03-.24c1.12.37 2.33.57 3.56.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C11.16 21 3 12.84 3 3a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.23.2 2.44.57 3.56a1 1 0 0 1-.25 1.03l-2.2 2.2Z" />
                </svg>
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="sg-social instagram"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    ry="5"
                  />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    className="instagram-dot"
                  />
                </svg>
              </a>

            </div>
          </div>


          {/* QUICK LINKS */}
          <div className="sg-footer-column">

            <h3>Quick Links</h3>

            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/#services">Services</a>
            <a href="/subscription-plans">Care Plans</a>
            <a href="/travel-with-care">Travel With Care</a>
            <a href="/#resources">Resources</a>
            <a href="/#contact">Contact Us</a>

          </div>


          {/* SERVICES */}
          <div className="sg-footer-column">

            <h3>Our Services</h3>

            <a href="/elder-care">
              Elder Care
            </a>

            <a href="/home-care">
              Home Care
            </a>

            <a href="/#services">
              Emergency Care
            </a>

            <a href="/#services">
              Care Management
            </a>

            <a href="/#services">
              Wellness Services
            </a>

            <a href="/#services">
              Diabetes Management
            </a>

            <a href="/#services">
              Healthcare Manpower
            </a>

            <a href="/#services">
              Healthcare Convenience
            </a>

          </div>


          {/* CONTACT */}
          <div className="sg-footer-contact">

            <h3>Contact Information</h3>


            <div className="sg-contact-item">

              <div className="sg-contact-icon">

                <svg viewBox="0 0 24 24">
                  <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
                </svg>

              </div>

              <div>
                <strong>We Are Located At</strong>

                <p>
                  Agartala · Delhi · Faridabad ·
                  Gurugram · Kolkata · Noida · Bangalore
                </p>
              </div>

            </div>


            <div className="sg-contact-item">

              <div className="sg-contact-icon">

                <svg viewBox="0 0 24 24">
                  <path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.5l9 5.5 9-5.5V7H3Zm18 10V9.85l-8.48 5.18a1 1 0 0 1-1.04 0L3 9.85V17h18Z" />
                </svg>

              </div>

              <div>
                <strong>Email</strong>

                <a href="mailto:ceo.office@yoursilvergenie.com">
                  ceo.office@yoursilvergenie.com
                </a>
              </div>

            </div>


            <div className="sg-contact-item">

              <div className="sg-contact-icon">

                <svg viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.03-.24c1.12.37 2.33.57 3.56.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C11.16 21 3 12.84 3 3a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.23.2 2.44.57 3.56a1 1 0 0 1-.25 1.03l-2.2 2.2Z" />
                </svg>

              </div>

              <div>
                <strong>Call Us</strong>

                <a href="tel:18002030527">
                  1800 203 0527
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>


      {/* =====================================================
          CTA — CONTENT STYLE, NOT A HUGE BUTTON
      ===================================================== */}
      <section className="sg-footer-cta">

        <div className="sg-footer-cta-container">

          <div>
            <span>WE'RE HERE TO HELP</span>

            <h2>
              Let’s make healthcare easier.
            </h2>

            <p>
              Talk to our care team and discover the right
              support for you or your loved ones.
            </p>
          </div>

          <a
            href="/#contact"
            className="sg-footer-cta-link"
          >
            Enquire Now
            <span>→</span>
          </a>

        </div>

      </section>


      {/* =====================================================
          BOTTOM BAR
      ===================================================== */}
      <div className="sg-footer-bottom">

        <div className="sg-footer-bottom-container">

          <p>
            © 2026 SilverGenie. All Rights Reserved.
          </p>

          <div className="sg-footer-legal">

            <a href="/privacy-policy">
              Privacy Policy
            </a>

            <span>|</span>

            <a href="/refund-policy">
              Refund Policy
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;