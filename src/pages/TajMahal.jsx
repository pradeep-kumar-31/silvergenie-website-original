import React from "react";
import { Link } from "react-router-dom";
import "../styles/WanderlustDiaries.css";

const imageBase = `${import.meta.env.BASE_URL}image/blog/`;

function TajMahal() {
  return (
    <main className="wanderlust-story-page">
      {/* HERO SECTION */}
      <section className="wanderlust-story-hero">
        <div className="wanderlust-story-hero-content">
          <span className="wanderlust-eyebrow">
            SILVERGENIE WANDERLUST DIARIES
          </span>

          <span className="wanderlust-story-category">
            HEART OF BHARAT
          </span>

          <h1>
            No wonder, it’s a wonder:
            <br />
            My Solo Travel Story at the Taj Mahal
          </h1>

          <p className="wanderlust-story-lead">
            A solo journey to Agra filled with history, discovery,
            beautiful architecture and the confidence that comes
            from travelling with care.
          </p>

          <div className="wanderlust-story-meta">
            <span>📅 October 30, 2025</span>
            <span>✍️ By Yvonne Krywyj</span>
          </div>

          <a href="#taj-mahal-story" className="wanderlust-sidebar-button">
            Explore the Story <span>↓</span>
          </a>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      <section className="wanderlust-story-featured-image">
        <img
          src={`${imageBase}taj-mahal.png`}
          alt="The magnificent Taj Mahal in Agra"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </section>

      {/* MAIN STORY */}
      <section
        className="wanderlust-story-layout"
        id="taj-mahal-story"
      >
        <article className="wanderlust-story-content">
          <p className="wanderlust-story-lead">
            Travelling solo, especially as a woman, can be a wonderful
            adventure filled with unique experiences and discoveries.
            For Yvonne Krywyj, a visit to India offered an opportunity
            to explore a world-famous monument while making safety,
            comfort and meaningful experiences a priority.
          </p>

          <section className="wanderlust-story-section">
            <h2>A Solo Journey to India</h2>

            <p>
              Working in the international development sector, Yvonne
              was already familiar with travelling independently around
              the world. Her visit to South Asia was particularly
              exciting because it was her first time exploring this
              region.
            </p>

            <p>
              While attending the Care and Climate Entrepreneurship
              Accelerator kick-off in South Asia, she decided to make
              time for a visit to Agra and experience the Taj Mahal,
              one of the world's most celebrated monuments.
            </p>

            <p>
              With only one day available, careful planning became
              essential. She wanted to make the most of her time while
              ensuring that the journey remained comfortable and secure.
            </p>
          </section>

          <section className="wanderlust-story-section">
            <h2>Getting There with Confidence</h2>

            <p>
              One of the most important parts of the trip was arranging
              reliable transportation to and from the Taj Mahal.
              Having a trusted driver organised in advance gave Yvonne
              greater peace of mind throughout the journey.
            </p>

            <p>
              The driver knew the local roads and which routes could
              help avoid traffic. This practical support helped her
              use her limited time effectively and focus on enjoying
              the experience.
            </p>

            <p>
              For a solo traveller, especially one visiting a new
              destination, dependable transport can make a meaningful
              difference to the overall travel experience.
            </p>
          </section>

          <section className="wanderlust-story-section">
            <h2>Standing Before a Wonder</h2>

            <p>
              Arriving at the Taj Mahal was a moment of wonder and
              delight. The monument's beauty felt almost ethereal,
              creating a moment to pause, look around and appreciate
              the experience.
            </p>

            <p>
              The check-in process was smooth, allowing Yvonne to
              begin exploring without unnecessary hassle. She also
              had an English-speaking guide arranged in advance.
            </p>

            <p>
              The guide helped her understand the monument's fascinating
              history and intricate artistry. Being able to communicate
              comfortably made the visit more engaging and informative.
            </p>
          </section>

          <section className="wanderlust-story-section">
            <h2>Exploring Safely as a Solo Traveller</h2>

            <p>
              Travelling independently also means staying aware of
              one's surroundings. Yvonne had been warned about the
              possibility of pickpockets in busy tourist areas.
            </p>

            <p>
              This simple precaution helped her remain alert without
              taking away from the joy of exploring the monument.
              Being prepared allowed her to enjoy the visit with
              greater confidence.
            </p>

            <p>
              And of course, there was time for photographs. Yvonne
              enjoyed clicking pictures and trying the classic Taj
              Mahal poses, finding happiness in those memorable
              travel moments.
            </p>
          </section>

          <section className="wanderlust-story-section">
            <h2>More Than Sightseeing</h2>

            <p>
              Beyond the monument's architectural beauty, the journey
              also offered opportunities to engage with local people,
              learn from the guide and observe everyday life around
              this iconic destination.
            </p>

            <p>
              These human connections added another dimension to the
              visit. The experience became more than simply seeing
              a famous landmark; it became an opportunity to learn,
              connect and discover.
            </p>

            <p>
              Travel can open doors to new perspectives. When a journey
              is planned thoughtfully, visitors can focus more on
              experiencing a destination and less on managing avoidable
              uncertainties.
            </p>
          </section>

          <section className="wanderlust-story-section">
            <h2>The Spirit of Travel Experiences with Care</h2>

            <p>
              Yvonne's solo trip to the Taj Mahal brought together
              several important elements: reliable transportation,
              thoughtful planning, an informative guide, personal
              awareness and the freedom to enjoy a new destination.
            </p>

            <p>
              Her experience reflects the idea behind
              <strong> #TravelExperiencesWithCare </strong> —
              travel that supports safety, learning, comfort and
              the joy of discovery.
            </p>

            <p>
              For solo travellers exploring unfamiliar places, good
              preparation and appropriate support can help make
              a journey feel more reassuring and empowering.
            </p>
          </section>

          {/* ARTICLE TAGS */}
          <div className="wanderlust-story-tags">
            <span>Solo Travel</span>
            <span>Agra</span>
            <span>Taj Mahal</span>
            <span>Travel with Care</span>
            <span>India Travel</span>
          </div>

          {/* PREVIOUS / NEXT */}
          <div className="wanderlust-story-navigation">
            <Link to="/wanderlust/white-rann-moon">
              <span>← Previous Story</span>
              <strong>Under the White Rann Moon</strong>
            </Link>

            <Link to="/wanderlust/kerala">
              <span>Next Story →</span>
              <strong>My Kerala Diary</strong>
            </Link>
          </div>
        </article>

        {/* SIDEBAR */}
        <aside className="wanderlust-story-sidebar">
          <div className="wanderlust-sidebar-card">
            <span className="wanderlust-eyebrow">
              TRAVEL WITH CARE
            </span>

            <h3>Discover India at Your Own Pace</h3>

            <p>
              Explore meaningful journeys designed around comfort,
              thoughtful planning and memorable experiences.
            </p>

            <Link
              to="/travel-with-care"
              className="wanderlust-sidebar-button"
            >
              Explore Journeys →
            </Link>
          </div>

          <div className="wanderlust-sidebar-card">
            <h3>More Wanderlust Stories</h3>

            <p>
              Discover journeys across India's landscapes, cultures,
              traditions and remarkable destinations.
            </p>

            <Link
              to="/wanderlust-diaries"
              className="wanderlust-sidebar-button"
            >
              View All Diaries →
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default TajMahal;