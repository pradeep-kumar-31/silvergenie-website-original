import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Footer.css";

const SilverGenieLogo = `${import.meta.env.BASE_URL}LOGO-NEW.png`;

function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const sectionId = location.hash.slice(1);

      const timer = setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.hash]);

  const goToTop = (event) => {
    if (location.pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="sg-footer">
      <div className="sg-footer-container">
        <div className="sg-footer-brand">
          <Link
            to="/"
            className="sg-footer-logo-link"
            aria-label="SilverGenie Home"
            onClick={goToTop}
          >
            <img
              src={SilverGenieLogo}
              alt="SilverGenie Logo"
              className="sg-footer-logo"
            />
          </Link>

          <h2 className="sg-footer-brand-title">SilverGenie</h2>

          <p className="sg-footer-description">
            Your trusted partner for healthcare assistance, elder care and smart
            ageing solutions. We help seniors and their families access
            compassionate care and dependable support.
          </p>

          <div className="sg-footer-socials">
            <a
              href="https://www.facebook.com/yoursilvergenie"
              target="_blank"
              rel="noopener noreferrer"
              className="sg-social facebook"
              aria-label="SilverGenie Facebook"
              title="Facebook"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.55c0-.93.26-1.56 1.6-1.56h1.7V3.13A22 22 0 0 0 14.3 3c-2.48 0-4.18 1.52-4.18 4.3v2.3H7.3v3.2h2.82V21h3.38Z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/company/silvergenie/"
              target="_blank"
              rel="noopener noreferrer"
              className="sg-social linkedin"
              aria-label="SilverGenie LinkedIn"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.5H4.97V9h2.96v9.5ZM6.45 7.7a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44ZM19 18.5h-2.96v-4.62c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.7H9.76V9h2.84v1.3h.04c.4-.75 1.36-1.54 2.8-1.54 3 0 3.56 1.97 3.56 4.53v5.21Z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/yoursilvergenie/"
              target="_blank"
              rel="noopener noreferrer"
              className="sg-social instagram"
              aria-label="SilverGenie Instagram"
              title="Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
              </svg>
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=9188897588885"
              target="_blank"
              rel="noopener noreferrer"
              className="sg-social whatsapp"
              aria-label="SilverGenie WhatsApp"
              title="WhatsApp"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M20.5 11.8a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.4-5A8.4 8.4 0 1 1 20.5 11.8Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.3 7.8c-.3.3-.7.8-.7 1.5s.5 1.7.9 2.3c.5.7 1.5 1.8 3 2.5 1.2.6 1.8.7 2.3.6.4-.1 1.1-.5 1.3-1 .2-.4.2-.8.1-.9-.1-.1-.3-.2-.6-.3l-1.4-.7c-.2-.1-.4-.1-.5.2l-.6.7c-.1.1-.3.2-.5.1-.3-.1-1-.4-1.6-1-.5-.5-.9-1.1-1-1.4-.1-.2 0-.4.1-.5l.4-.5c.1-.1.2-.3.1-.5l-.6-1.4c-.1-.3-.3-.4-.5-.4h-.2Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="sg-footer-column sg-footer-quick-links">
          <h3>Quick Links</h3>

          <Link to="/" onClick={goToTop}>
            Home
          </Link>
          <Link to="/#services">Services</Link>
          <Link to="/subscription-plans">Care Plan</Link>
          <Link to="/travel-with-care">Travel With Care</Link>
          <Link to="/blog">Blogs &amp; Articles</Link>
          <Link to="/#resources">Resources</Link>
          <Link to="/#contact">Contact Us</Link>
          <Link to="/about">About Us</Link>
        </div>

        {/* OUR SERVICES */}
        <div className="sg-footer-column">
          <h3>Our Services</h3>

          <Link to="/care-management">Care Management</Link>
          <Link to="/subscription-plans">Subscription Plans</Link>
          <Link to="/travel-with-care">Travel With Care</Link>
          <Link to="/elder-care">Elder Care</Link>
          <Link to="/home-care">Home Care</Link>
          <Link to="/healthcare-convenience">Healthcare Assistance</Link>
        </div>

        {/* CONTACT INFORMATION */}
        <div className="sg-footer-column sg-footer-contact">
          <h3>Contact Us</h3>

          <p className="sg-footer-contact-label">Call our support team</p>
          <a href="tel:18002030527">1800 203 0527</a>

          <p className="sg-footer-contact-label">Email us</p>
          <a href="mailto:ceo.office@yoursilvergenie.com">
            ceo.office@yoursilvergenie.com
          </a>

          <div className="sg-footer-location">
            <p className="sg-footer-contact-label">Our locations</p>

            <Link
              to="/locations"
              className="sg-footer-location-link"
              aria-label="View SilverGenie locations"
            >
              <svg
                className="sg-footer-location-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>

              <span>
                Agartala | Delhi | Faridabad | Gurugram | Kolkata | Noida
              </span>
            </Link>
          </div>

          <a
            href="https://api.whatsapp.com/send?phone=9810534232"
            target="_blank"
            rel="noopener noreferrer"
            className="sg-footer-cta"
          >
            <span>Talk to Our Team</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="sg-footer-bottom">
        <div className="sg-footer-bottom-inner">
          <p className="sg-footer-copyright">
            © {currentYear} SilverGenie. All rights reserved.
          </p>

          <div className="sg-footer-legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span className="sg-footer-divider">|</span>
            <Link to="/refund-policy">Refund Policy</Link>
            <span className="sg-footer-divider">|</span>
            <Link to="/terms-conditions">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
