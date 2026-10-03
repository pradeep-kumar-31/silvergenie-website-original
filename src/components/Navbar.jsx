import { useState } from "react";
import { Link } from "react-router-dom";
import SilverGenieLogo from "../assets/SilverGenieLogo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <img
            src={SilverGenieLogo}
            alt="SilverGenie"
          />
        </Link>


        {/* NAVIGATION */}
        <nav
          className={`navbar-menu ${menuOpen ? "active" : ""}`}
        >

          {/* HOME */}
          <Link
            to="/"
            onClick={closeMenu}
          >
            Home
          </Link>


          {/* SERVICES */}
          <a
            href="/#services"
            onClick={closeMenu}
          >
            Services
          </a>


          {/* RESOURCES */}
          <a
            href="/#resources"
            onClick={closeMenu}
          >
            Resources
          </a>


          {/* CARE PLANS */}
          <Link
            to="/subscription-plans"
            onClick={closeMenu}
          >
            Care Plans
          </Link>


          {/* TRAVEL WITH CARE */}
          <Link
            to="/travel-with-care"
            onClick={closeMenu}
          >
            Travel With Care
          </Link>


          {/* CONTACT */}
          <a
            href="/#contact"
            onClick={closeMenu}
          >
            Contact Us
          </a>


          {/* ABOUT US */}
          <Link
            to="/about"
            onClick={closeMenu}
          >
            About Us
          </Link>


          {/* ENQUIRE NOW */}
          <a
            href="/#contact"
            className="navbar-button"
            onClick={closeMenu}
          >
            Enquire Now
          </a>

        </nav>


        {/* MOBILE MENU */}
        <button
          className={`navbar-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          type="button"
        >
          ☰
        </button>

      </div>
    </header>
  );
}

export default Navbar;