import { Link } from "react-router-dom";
import "../styles/WhiteRannMoon.css";

const images = {
  hero: "https://www.yoursilvergenie.com/wp-content/uploads/2020/10/White-Rann-Moon-Journey.jpg",
  journey:
    "https://www.yoursilvergenie.com/wp-content/uploads/2020/10/White-Rann-Moon-Journey-Collage-by-SilverGenie.jpg",
};

export default function WhiteRannMoon() {
  return (
    <main className="white-rann-page">
      <header className="white-rann-hero">
        <img
          className="white-rann-hero__image"
          src={images.hero}
          alt="Full moon over the White Rann of Kutch"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <div className="white-rann-hero__shade" />

        <div className="white-rann-hero__content">
          <p className="white-rann-eyebrow">Heart of Bharat Diaries</p>

          <h1>Under the White Rann Moon: A Journey Designed with Care</h1>

          <div className="white-rann-meta">
            <span>December 19, 2025</span>
            <span className="white-rann-meta__dot" aria-hidden="true" />
            <span>By Wanderlust Diaries</span>
          </div>
        </div>
      </header>

      <article className="white-rann-article">
        <p className="white-rann-intro">
          This three-day journey from Ahmedabad to the White Rann was planned
          around comfortable pacing, reliable travel, and thoughtful support for
          senior travellers. The trip brought together desert landscapes, local
          culture, shared moments, and attentive care.
        </p>

        <section className="white-rann-section">
          <h2>Arrival at the White Rann</h2>

          <p>
            The group set out from Ahmedabad on December 4. Punctual pick-ups,
            experienced drivers, and well-coordinated transport helped make the
            journey feel smooth and reassuring. As the landscape opened into the
            salt desert, the group had time to take in the changing scenery
            along the way.
          </p>

          <p>
            At Tent City, comfortable and accessible accommodation gave everyone
            space to settle in. The welcome continued with Kutchi food and
            traditional folk performances, followed by the highlight of the
            evening: the full moon shining over the White Rann.
          </p>
        </section>

        <figure className="white-rann-gallery">
          <img
            src={images.journey}
            alt="Moments from the White Rann journey"
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
          <figcaption>Moments from the White Rann journey</figcaption>
        </figure>

        <section className="white-rann-section">
          <h2>Sunrise, open roads, and shared memories</h2>

          <p>
            The next morning began with an early visit to the Rann, where the
            light gradually spread across the vast white landscape. After
            breakfast and hot chai back at Tent City, the group travelled
            towards Dholavira and stopped at the well-known “Road through
            Heaven,” a long, straight road stretching towards the horizon.
          </p>

          <p>
            Later, the travellers returned to the Rann for sunset. The salt
            flats took on golden tones, making a quiet, memorable end to the
            day. Back at the camp, the team arranged a surprise birthday
            celebration for one of the guests. The evening became a warm
            gathering of songs, cake, and shared laughter.
          </p>
        </section>

        <section className="white-rann-section">
          <h2>A reflective finish in Bhuj</h2>

          <p>
            On the final day, after breakfast and check-out, the group visited
            Smritivan in Bhuj. The memorial offered time to reflect on loss,
            resilience, and community strength. The return drive to Ahmedabad
            was calm, with the travellers sharing memories from the journey.
          </p>
        </section>

        <p className="white-rann-closing">
          The trip was more than a visit to the Rann. It showed how thoughtful
          planning, safety, comfort, and companionship can make travel
          meaningful at any age.
        </p>

        <aside className="white-rann-disclaimer">
          <strong>Disclaimer</strong>
          <p>
            The views and opinions expressed in this blog belong to the author.
            The written content remains the author’s intellectual property.
            Reproduction or use requires the author’s prior consent.
          </p>
        </aside>
      </article>

      <nav className="white-rann-related" aria-label="Related articles">
        <Link to="/a-journey-through-faith-history-and-kolkatas-essence">
          <span>Previous article</span>A Journey Through Faith, History, and
          Kolkata’s Essence
        </Link>

        <Link to="/finding-my-rhythm-in-the-sundarbans">
          <span>Next article</span>
          Finding My Rhythm in the Sundarbans
        </Link>
      </nav>
    </main>
  );
}
