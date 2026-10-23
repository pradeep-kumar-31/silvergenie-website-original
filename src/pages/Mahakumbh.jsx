import React from "react";
import { Link } from "react-router-dom";
import "../styles/WanderlustDiaries.css";

const Mahakumbh = () => {
  const imageBase = `${import.meta.env.BASE_URL}image/blog/`;

  return (
    <main className="wanderlust-story-page">

      {/* HERO SECTION */}
      <section className="wanderlust-story-hero">
        <div className="wanderlust-story-hero-content">

          <span className="wanderlust-eyebrow">
            SILVERGENIE WANDERLUST
          </span>

          <span className="wanderlust-story-category">
            Spiritual Diaries
          </span>

          <h1>
            Through the Crowds: Experiencing the Mahakumbh
          </h1>

          <p>
            An unforgettable spiritual journey shaped by faith,
            companionship and thoughtful care for senior travellers.
          </p>

          <div className="wanderlust-story-meta">
            <span>February 26, 2025</span>
            <span>Dr. Tushar Kanti Majumdar &amp; Dr. Dipika Majumdar</span>
            <span>Prayagraj, Uttar Pradesh</span>
          </div>

        </div>
      </section>

      {/* FEATURED IMAGE */}
      <section className="wanderlust-story-featured-image">
        <img
          src={`${imageBase}mahakumbh.png`}
          alt="Mahakumbh spiritual journey with SilverGenie"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </section>

      {/* ARTICLE LAYOUT */}
      <section className="wanderlust-story-layout">

        <article className="wanderlust-story-content">

          <p className="wanderlust-story-lead">
            In February 2025, an unexpected opportunity brought us to
            the Mahakumbh. What initially seemed challenging because of
            the crowds, long walks and age-related limitations became
            a memorable spiritual experience with the right support.
          </p>

          <p>
            Our elder daughter had planned to travel to the Mahakumbh
            by train with her friends from Delhi. However, the long walk
            from the station to Prayag was not practical for us, and
            some parts of the route were restricted because of health
            and age considerations.
          </p>

          <p>
            That was when we learned about SilverGenie's special
            arrangements for senior citizens. The opportunity allowed
            us to experience this important spiritual gathering while
            receiving assistance throughout the journey.
          </p>

          {/* SECTION 1 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              THE JOURNEY BEGINS
            </span>

            <h2>Setting Out for Prayagraj</h2>

            <p>
              In mid-February 2025, we flew to Delhi. At 4 a.m.,
              a SilverGenie car arrived to pick us up. Our caregiver,
              Kshitij, assisted us throughout the journey towards
              Allahabad.
            </p>

            <p>
              Under the guidance of Kuhu Adhikary, the group continued
              from Allahabad towards Mahasangam in Prayag. Three cars
              were arranged, each accompanied by a caregiver to help
              ensure the comfort and safety of the senior travellers.
            </p>

            <p>
              Having assistance available throughout the journey made
              it easier to concentrate on the purpose of the visit
              rather than the difficulties of travelling in a crowded
              environment.
            </p>

          </section>

          {/* SECTION 2 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              ARRIVAL
            </span>

            <h2>A Comfortable Stay Beside the Ganges</h2>

            <p>
              We reached Prayag around midnight and settled into
              well-maintained tents along the banks of the Ganges.
              The accommodation offered hotel-like comforts, with
              good food, arrangements that supported movement and
              attentive hospitality.
            </p>

            <p>
              The warmth and kindness of the staff made settling in
              easier after a long journey. These details helped us
              feel more comfortable as we prepared for the early
              morning experience at the ghat.
            </p>

          </section>

          {/* SECTION 3 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              THE SACRED BATH
            </span>

            <h2>Experiencing the Mahasangam</h2>

            <p>
              By 4 a.m. the following morning, we were ready to
              experience the bathing rituals at the ghat.
            </p>

            <p>
              The surroundings were extremely busy. Devotees, VIP
              vehicles, volunteers and toto drivers filled the area.
              Walking through the crowd was difficult, and at first
              the scale of the gathering made participation seem
              uncertain.
            </p>

            <p>
              Our caregivers stepped in to guide the senior travellers
              carefully down the stairs towards the Ganges. They
              supported us during the sacred bath and escorted us
              back to the tents.
            </p>

            <p>
              Their assistance helped us participate in the experience
              with greater confidence and without having to navigate
              the difficult crowd alone.
            </p>

          </section>

          {/* SECTION 4 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              SHARED MEMORIES
            </span>

            <h2>An Evening of Songs and Stories</h2>

            <p>
              After the day's spiritual experience, we gathered for
              dinner. Songs and stories brought everyone together
              and provided a gentle ending to an eventful day.
            </p>

            <p>
              Sharing the experience with fellow senior travellers
              made the journey feel more personal. The conversations
              and companionship became an important part of the
              memories we carried home.
            </p>

          </section>

          {/* SECTION 5 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              RETURN JOURNEY
            </span>

            <h2>Leaving Before the Heaviest Crowds</h2>

            <p>
              The following morning, at 3 a.m., we began our return
              journey to Delhi in three cars, aiming to avoid the
              heaviest crowds.
            </p>

            <p>
              Even at that early hour, the sheer number of people
              made the journey extraordinary. The crowds offered
              a powerful reminder of the scale of the Mahakumbh
              and the devotion that brings millions of people together.
            </p>

            <p>
              We reached Delhi late at night, tired but fulfilled
              by the experience.
            </p>

          </section>

          {/* SECTION 6 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              TRAVEL WITH CARE
            </span>

            <h2>Why Support Matters on a Spiritual Journey</h2>

            <p>
              The Mahakumbh journey brought together spirituality,
              adventure and the practical challenges of travelling
              through a very large gathering.
            </p>

            <p>
              For senior travellers, support with transportation,
              movement through crowded areas and assistance at
              important moments can make a meaningful difference.
            </p>

            <p>
              In this experience, caregivers accompanied the group
              at every stage, helping the travellers focus on their
              spiritual purpose while receiving practical support
              along the way.
            </p>

          </section>

          {/* CONCLUSION */}
          <section className="wanderlust-story-section">

            <h2>A Journey We Will Always Remember</h2>

            <p>
              This was much more than a trip to a major religious
              gathering. It was an experience that brought together
              faith, careful planning, companionship and the excitement
              of being part of an extraordinary event.
            </p>

            <p>
              Being guided at every step and sharing the journey
              with fellow senior travellers made it possible to
              participate in an experience that had initially seemed
              difficult to manage.
            </p>

            <p>
              The Mahakumbh reminded us that meaningful travel
              can remain possible when the journey is planned around
              the traveller's needs and supported with care.
            </p>

          </section>

          {/* AUTHORS */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              ABOUT THE AUTHORS
            </span>

            <h2>Dr. Tushar Kanti Majumdar &amp; Dr. Dipika Majumdar</h2>

            <p>
              This travel account is shared by Dr. Tushar Kanti
              Majumdar and Dr. Dipika Majumdar, who documented
              their experience of visiting the Mahakumbh with
              SilverGenie's support.
            </p>

            <p>
              Their story reflects the value of making important
              cultural and spiritual experiences more accessible
              to older travellers.
            </p>

          </section>

          {/* TAGS */}
          <div className="wanderlust-story-tags">
            <span>Mahakumbh</span>
            <span>Prayagraj</span>
            <span>Spiritual Diaries</span>
            <span>Senior Travel</span>
            <span>Travel With Care</span>
            <span>SilverGenie Wanderlust</span>
          </div>

          {/* NAVIGATION */}
          <div className="wanderlust-story-navigation">

            <Link to="/wanderlust/durga-pujo-with-care">
              ← Previous Story
            </Link>

            <Link to="/wanderlust-diaries">
              Explore All Diaries →
            </Link>

          </div>

        </article>

        {/* SIDEBAR */}
        <aside className="wanderlust-story-sidebar">

          <div className="wanderlust-sidebar-card">

            <span className="wanderlust-eyebrow">
              JOURNEY HIGHLIGHTS
            </span>

            <h3>The Mahakumbh Experience</h3>

            <ul>
              <li>Departure from Delhi</li>
              <li>Caregiver-supported road journey</li>
              <li>Stay near the Ganges</li>
              <li>Early morning visit to the ghat</li>
              <li>Sacred bathing rituals</li>
              <li>Evening dinner and shared stories</li>
              <li>Return journey to Delhi</li>
            </ul>

          </div>

          <div className="wanderlust-sidebar-card">

            <span className="wanderlust-eyebrow">
              TRAVEL WITH CARE
            </span>

            <h3>Meaningful Journeys, Thoughtfully Supported</h3>

            <p>
              Explore travel experiences designed with attention
              to comfort, accessibility and the needs of travellers.
            </p>

            <Link
              to="/travel-with-care"
              className="wanderlust-sidebar-button"
            >
              Explore Travel With Care
            </Link>

          </div>

          <div className="wanderlust-sidebar-card">

            <span className="wanderlust-eyebrow">
              MORE STORIES
            </span>

            <h3>Discover More Journeys</h3>

            <p>
              Continue exploring stories of spirituality, culture
              and memorable travel experiences.
            </p>

            <Link
              to="/wanderlust-diaries"
              className="wanderlust-sidebar-button"
            >
              View All Diaries
            </Link>

          </div>

        </aside>

      </section>

    </main>
  );
};

export default Mahakumbh;