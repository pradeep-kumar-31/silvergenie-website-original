import "../styles/Locations.css";

const indiaMap =
  "https://www.yoursilvergenie.com/wp-content/uploads/2025/01/contact-maps-1.png";

const offices = [
  {
    city: "Delhi & National Capital Region",
    type: "Registered Office",
    address:
      "Regus Grandeur Offices Private Limited, Level 5, Caddie Commercial Hospitality District, Aerocity, IGI Airport, New Delhi – 110037, India",
    color: "blue",
  },
  {
    city: "Kolkata",
    type: "Branch Office",
    address:
      "Corner Desk, Cabin 02, 4th Floor, 10 Raja Subodh Mullick Square, Kolkata – 700013",
    color: "peach",
  },
  {
    city: "Agartala",
    type: "Regional and Branch Office",
    address:
      "2C Chandradhara Apartments, Jail Ashram Road, Dhaleshwar, Agartala – 799007",
    color: "green",
  },
  {
    city: "Bangalore",
    type: "Remote Office",
    address: "Agasthiya Apartments, NTI Layout, RMV 2nd Stage",
    color: "blue",
  },
];

function Locations() {
  return (
    <section className="locations-section" id="we-are-located">
      <div className="locations-container">
        <header className="locations-header">
          <h1>We Are Located At</h1>
          <span className="locations-header-rule" aria-hidden="true" />
        </header>

        <div className="locations-layout">
          <div className="locations-map">
            <img
              src={indiaMap}
              alt="Map showing SilverGenie office locations in India"
              loading="lazy"
            />
          </div>

          <div className="locations-office-list">
            {offices.map((office) => (
              <article
                className={`locations-office-card locations-office-card--${office.color}`}
                key={office.city}
              >
                <h2>{office.city}</h2>
                <h3>{office.type}</h3>
                <address>{office.address}</address>

                <a href="tel:18002030527" className="locations-office-phone">
                  1800 203 0527
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Locations;
