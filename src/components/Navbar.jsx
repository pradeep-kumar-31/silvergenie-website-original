import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const SilverGenieLogo = `${import.meta.env.BASE_URL}SilverGenieLogo.png`;

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  const goHome = () => {
    closeMenu();
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const goToHomeSection = (sectionId) => {
    closeMenu();
    if (location.pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  const toggleDropdown = (name) => {
    setOpenDropdown((current) => (current === name ? null : name));
  };

  const healthLinks = [
    { label: "Home Care", to: "/home-care" },
    { label: "Elder Care", to: "/elder-care" },
  ];

  const beyondHealthLinks = [
    { label: "Travel With Care", to: "/travel-with-care" },
    { label: "Adda", to: "/adda" },
    { label: "Community Connect", to: "/community-connect" },
    { label: "Retirement Readiness", to: "/retirement-readiness" },
    { label: "Custom Services", to: "/custom-services" },
  ];

  const resourceLinks = [
    { label: "Brochure", to: "/brochure" },
    { label: "Senior Care Chronicles", to: "/blog" },
    { label: "Wanderlust Diaries", to: "/wanderlust-diaries" },
    { label: "Mobile App", to: "/mobile-app" },
  ];

  const isActive = (to) =>
    location.pathname === to || location.pathname.startsWith(`${to}/`);

  const renderDropdown = (name, label, links) => {
    const isOpen = openDropdown === name;
    const dropdownIsActive = links.some((link) =>
      link.to === "/blog"
        ? location.pathname === "/blog" ||
          location.pathname.startsWith("/blog/")
        : location.pathname === link.to ||
          location.pathname.startsWith(`${link.to}/`),
    );

    return (
      <div
        className={`navbar-dropdown ${isOpen ? "dropdown-open" : ""}`}
        key={name}
      >
        <button
          type="button"
          className={`navbar-dropdown-button ${dropdownIsActive ? "active" : ""}`}
          onClick={() => toggleDropdown(name)}
          aria-expanded={isOpen}
        >
          <span>{label}</span>
          <span className={`navbar-dropdown-arrow ${isOpen ? "rotate" : ""}`}>
            ↓
          </span>
        </button>
        <div className={`navbar-dropdown-menu ${isOpen ? "show" : ""}`}>
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={isActive(link.to) ? "dropdown-active" : ""}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    );
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
          aria-label="SilverGenie Home"
        >
          <img src={SilverGenieLogo} alt="SilverGenie Logo" />
        </Link>

        <button
          type="button"
          className={`navbar-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => {
            setMenuOpen((previous) => !previous);
            setOpenDropdown(null);
          }}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <button
            type="button"
            className={`navbar-section-link ${location.pathname === "/" && !location.hash ? "active" : ""}`}
            onClick={goHome}
          >
            Home
          </button>

          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
            onClick={closeMenu}
          >
            About Us
          </Link>

          {renderDropdown("health", "Health Services", healthLinks)}
          {renderDropdown("beyond", "Beyond Health", beyondHealthLinks)}
          {renderDropdown("resources", "Resources", resourceLinks)}

          <button
            type="button"
            className="navbar-enquire"
            onClick={() => goToHomeSection("contact")}
          >
            <span>Enquiry</span>
            <span className="navbar-enquire-arrow">→</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
