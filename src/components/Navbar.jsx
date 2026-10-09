import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SilverGenieLogo from "../assets/SilverGenieLogo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // =========================================================
  // CLOSE ALL MENUS
  // =========================================================

  const closeMenu = () => {
    setMenuOpen(false);
    setBlogDropdownOpen(false);
  };

  // =========================================================
  // HOME
  // =========================================================

  const goHome = () => {
    closeMenu();

    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      navigate("/");
    }
  };

  // =========================================================
  // HOME SECTION
  // =========================================================

  const goToHomeSection = (sectionId) => {
    closeMenu();

    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  // =========================================================
  // BLOG ACTIVE
  // =========================================================

  const isBlogActive =
    location.pathname === "/blog" ||
    location.pathname.startsWith("/blog/") ||
    location.pathname === "/wanderlust-diaries";

  // =========================================================
  // WANDERLUST DIARIES
  // =========================================================

  const openWanderlustDiaries = () => {
    closeMenu();

    navigate("/wanderlust-diaries");
  };

  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* =================================================
            LOGO
        ================================================= */}

        <div
          className="navbar-logo"
          onClick={goHome}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (
              event.key === "Enter" ||
              event.key === " "
            ) {
              goHome();
            }
          }}
        >
          <img
            src={SilverGenieLogo}
            alt="SilverGenie"
          />
        </div>


        {/* =================================================
            MOBILE MENU
        ================================================= */}

        <button
          type="button"
          className={`navbar-toggle ${
            menuOpen ? "active" : ""
          }`}
          onClick={() => {
            setMenuOpen((previous) => !previous);
            setBlogDropdownOpen(false);
          }}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>


        {/* =================================================
            NAVIGATION
        ================================================= */}

        <nav
          className={`navbar-menu ${
            menuOpen ? "open" : ""
          }`}
        >

          {/* =================================================
              HOME
          ================================================= */}

          <button
            type="button"
            className={`navbar-section-link ${
              location.pathname === "/" &&
              !location.hash
                ? "active"
                : ""
            }`}
            onClick={goHome}
          >
            Home
          </button>


          {/* =================================================
              SERVICES
          ================================================= */}

          <button
            type="button"
            className="navbar-section-link"
            onClick={() =>
              goToHomeSection("services")
            }
          >
            Services
          </button>


          {/* =================================================
              CARE PLAN
          ================================================= */}

          <Link
            to="/subscription-plans"
            className={
              location.pathname === "/subscription-plans"
                ? "active"
                : ""
            }
            onClick={closeMenu}
          >
            Care Plan
          </Link>


          {/* =================================================
              TRAVEL WITH CARE
          ================================================= */}

          <Link
            to="/travel-with-care"
            className={
              location.pathname === "/travel-with-care"
                ? "active"
                : ""
            }
            onClick={closeMenu}
          >
            Travel With Care
          </Link>


          {/* =================================================
              BLOGS & ARTICLES
          ================================================= */}

          <div
            className={`navbar-dropdown ${
              blogDropdownOpen
                ? "dropdown-open"
                : ""
            }`}
          >

            {/* DROPDOWN BUTTON */}

            <button
              type="button"
              className={`navbar-dropdown-button ${
                isBlogActive
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setBlogDropdownOpen(
                  (previous) => !previous
                )
              }
              aria-expanded={blogDropdownOpen}
            >
              <span>
                Blogs & Articles
              </span>

              <span
                className={`navbar-dropdown-arrow ${
                  blogDropdownOpen
                    ? "rotate"
                    : ""
                }`}
              >
                ↓
              </span>
            </button>


            {/* =================================================
                DROPDOWN
            ================================================= */}

            <div
              className={`navbar-dropdown-menu ${
                blogDropdownOpen
                  ? "show"
                  : ""
              }`}
            >

              {/* =================================================
                  SENIOR CARE CHRONICLES
              ================================================= */}

              <Link
                to="/blog"
                className={
                  location.pathname === "/blog" ||
                  location.pathname.startsWith("/blog/")
                    ? "dropdown-active"
                    : ""
                }
                onClick={closeMenu}
              >

                <span className="dropdown-icon">
                  ✦
                </span>

                <span className="dropdown-content">

                  <strong>
                    Senior Care Chronicles
                  </strong>

                  <small>
                    Senior care & ageing insights
                  </small>

                </span>

              </Link>


              {/* =================================================
                  WANDERLUST DIARIES
              ================================================= */}

              <button
                type="button"
                className={
                  location.pathname ===
                  "/wanderlust-diaries"
                    ? "dropdown-active"
                    : ""
                }
                onClick={openWanderlustDiaries}
              >

                <span className="dropdown-icon">
                  ✈
                </span>

                <span className="dropdown-content">

                  <strong>
                    Wanderlust Diaries
                  </strong>

                  <small>
                    Travel experiences with care
                  </small>

                </span>

              </button>

            </div>

          </div>


          {/* =================================================
              RESOURCES
          ================================================= */}

          <button
            type="button"
            className="navbar-section-link"
            onClick={() =>
              goToHomeSection("resources")
            }
          >
            Resources
          </button>


          {/* =================================================
              CONTACT
          ================================================= */}

          <button
            type="button"
            className="navbar-section-link"
            onClick={() =>
              goToHomeSection("contact")
            }
          >
            Contact Us
          </button>


          {/* =================================================
              ABOUT
          ================================================= */}

          <Link
            to="/about"
            className={
              location.pathname === "/about"
                ? "active"
                : ""
            }
            onClick={closeMenu}
          >
            About Us
          </Link>


          {/* =================================================
              ENQUIRE NOW
          ================================================= */}

          <button
            type="button"
            className="navbar-enquire"
            onClick={() =>
              goToHomeSection("contact")
            }
          >
            <span>
              Enquire Now
            </span>

            <span className="navbar-enquire-arrow">
              →
            </span>
          </button>

        </nav>

      </div>

    </header>
  );
}

export default Navbar;