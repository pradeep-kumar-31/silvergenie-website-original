import React from "react";
import { Link } from "react-router-dom";
import "../styles/WanderlustDiaries.css";

const imageBase = `${import.meta.env.BASE_URL}image/blog/`;

function Bhutan() {
  const imagePath = `${imageBase}bhutan.png`;

  return (
    <main className="wanderlust-story-page">
      {/* =========================
          HERO SECTION
      ========================= */}
      <section className="wanderlust-story-hero">
        <div className="wanderlust-story-hero-content">
          <span className="wanderlust-eyebrow">
            SILVERGENIE WANDERLUST DIARIES
          </span>

          <span className="wanderlust-story-category">
            ASIA, AFRICA & EUROPE
          </span>

          <h1>Bhutan Through the Comfort of Care</h1>

          <p className="wanderlust-story-lead">
            Discovering the beauty of Bhutan through meaningful travel,
            shared experiences, and SilverGenie's care-first approach
            to exploring the world.
          </p>

          <div className="wanderlust-story-meta">
            <span>📅 July 6, 2026</span>
            <span>🌏 Bhutan</span>
            <span>✈️ Bhutan Summer Cohorts 2026</span>
          </div>

          <a href="#bhutan-story" className="wanderlust-sidebar-button">
            Explore the Journey ↓
          </a>
        </div>
      </section>

      {/* =========================
          FEATURED IMAGE
      ========================= */}
      <section className="wanderlust-story-featured-image">
        <img
          src={imagePath}
          alt="Bhutan travel experience with SilverGenie Wanderlust"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </section>

      {/* =========================
          STORY CONTENT
      ========================= */}
      <section
        className="wanderlust-story-layout"
        id="bhutan-story"
      >
        <article className="wanderlust-story-content">
          <div className="wanderlust-story-section">
            <span className="wanderlust-eyebrow">
              A JOURNEY BEYOND SIGHTSEEING
            </span>

            <h2>More Than a Destination</h2>

            <p>
              Some journeys are remembered for the places we visit.
              Others stay with us because of the people we meet, the
              experiences we share, and the way we feel throughout the
              journey.
            </p>

            <p>
              Bhutan offers an opportunity to experience a different
              rhythm of travel. Its mountain landscapes, distinctive
              cultural traditions, and peaceful surroundings invite
              travellers to slow down and appreciate the journey
              instead of simply rushing from one attraction to another.
            </p>

            <p>
              Through SilverGenie Wanderlust, travel is approached
              with a simple principle: exploring somewhere new should
              feel meaningful, comfortable, and thoughtfully planned.
            </p>
          </div>

          <div className="wanderlust-story-section">
            <h2>Bhutan Summer Cohorts of 2026</h2>

            <p>
              The SilverGenie Wanderlust Diaries featured experiences
              from two Bhutan summer cohorts in 2026.
            </p>

            <div className="wanderlust-sidebar-card">
              <h3>Bhutan Summer Cohort 2</h3>
              <p>
                <strong>Traveller:</strong> Ms. Namita Adhikary
              </p>
            </div>

            <div className="wanderlust-sidebar-card">
              <h3>Bhutan Summer Cohort 3</h3>
              <p>
                <strong>Traveller:</strong> Mr. Bhagirath Saha
              </p>
            </div>

            <p>
              Their journeys are featured under the story
              <em> “Bhutan Through the Comfort of Care”</em>, published
              on the SilverGenie Wanderlust Diaries listing on
              July 6, 2026.
            </p>
          </div>

          <div className="wanderlust-story-section">
            <h2>Travel at a More Thoughtful Pace</h2>

            <p>
              A memorable journey is not only about reaching a
              destination. It is also about having the time and
              support to enjoy the experience along the way.
            </p>

            <p>
              Thoughtful travel planning can make a difference through
              comfortable pacing, suitable accommodation, dependable
              arrangements, and attention to individual needs.
              These considerations are especially valuable when
              travelling with older adults or people who prefer
              additional assistance.
            </p>

            <p>
              SilverGenie Wanderlust brings this care-first philosophy
              into its curated travel experiences, helping travellers
              focus on the moments that make a journey special.
            </p>
          </div>

          <div className="wanderlust-story-section">
            <h2>Experiences Worth Remembering</h2>

            <p>
              International travel creates opportunities to encounter
              different cultures, landscapes, traditions, and ways of
              life. The most meaningful memories often emerge from
              experiencing a place with curiosity and sharing those
              moments with others.
            </p>

            <p>
              Bhutan's cultural identity and Himalayan setting make it
              a distinctive destination for travellers seeking an
              experience beyond everyday routines.
            </p>

            <p>
              The SilverGenie Bhutan cohorts form part of the wider
              Wanderlust story: journeys shaped around people,
              connection, and the belief that travel can remain
              accessible and enjoyable at different stages of life.
            </p>
          </div>

          <div className="wanderlust-story-section">
            <h2>Comfort Is Part of the Journey</h2>

            <p>
              At SilverGenie, care is not meant to stop when a person
              leaves home. The same consideration for comfort,
              individual needs, and peace of mind can be carried into
              the travel experience.
            </p>

            <p>
              From thoughtful planning to support throughout a
              curated group journey, a care-first approach allows
              travellers and their families to feel more confident
              about exploring new destinations.
            </p>

            <p>
              Because travel should not simply be about seeing more
              places. It should also be about enjoying the experience
              in a way that works for you.
            </p>
          </div>

          {/* =========================
              STORY TAGS
          ========================= */}
          <div className="wanderlust-story-tags">
            <span>#SilverGenieWanderlust</span>
            <span>#Bhutan</span>
            <span>#TravelWithCare</span>
            <span>#SeniorFriendlyTravel</span>
            <span>#InternationalTravel</span>
          </div>

          {/* =========================
              NAVIGATION
          ========================= */}
          <div className="wanderlust-story-navigation">
            <Link to="/wanderlust/japan">
              ← Previous Story: Japan
            </Link>

            <Link to="/wanderlust/italy-switzerland">
              Next Story: Italy & Switzerland →
            </Link>
          </div>
        </article>

        {/* =========================
            SIDEBAR
        ========================= */}
        <aside className="wanderlust-story-sidebar">
          <div className="wanderlust-sidebar-card">
            <span className="wanderlust-eyebrow">
              THE DESTINATION
            </span>

            <h3>Bhutan</h3>

            <p>
              A Himalayan destination known for its distinctive
              cultural heritage, mountain scenery, and traditions.
            </p>
          </div>

          <div className="wanderlust-sidebar-card">
            <span className="wanderlust-eyebrow">
              FEATURED JOURNEYS
            </span>

            <h3>Bhutan Summer Cohorts 2026</h3>

            <p>
              Stories featuring Ms. Namita Adhikary and
              Mr. Bhagirath Saha.
            </p>
          </div>

          <div className="wanderlust-sidebar-card">
            <h3>Explore More Travel Stories</h3>

            <p>
              Discover more journeys from SilverGenie Wanderlust
              Diaries.
            </p>

            <Link
              to="/wanderlust-diaries"
              className="wanderlust-sidebar-button"
            >
              View All Diaries →
            </Link>
          </div>

          <div className="wanderlust-sidebar-card">
            <h3>Travel Without Worry</h3>

            <p>
              Explore SilverGenie's care-first approach to
              thoughtfully planned travel experiences.
            </p>

            <a
              href="https://yoursilvergenie.com/elder-care/wanderlust-curated-with-care.php"
              target="_blank"
              rel="noopener noreferrer"
              className="wanderlust-sidebar-button"
            >
              Discover Wanderlust →
            </a>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default Bhutan;