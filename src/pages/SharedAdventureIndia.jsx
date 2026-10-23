import React from "react";
import { Link } from "react-router-dom";
import "../styles/WanderlustDiaries.css";

const SharedAdventureIndia = () => {
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
            Heart of Bharat Diaries
          </span>

          <h1>
            A Shared Adventure: Slow Exploration and Friendship in India
          </h1>

          <p>
            A memorable journey from Canada to India, bringing
            together lifelong friends, remarkable heritage,
            vibrant cities and the joy of discovering a new
            country at a comfortable pace.
          </p>

          <div className="wanderlust-story-meta">
            <span>March 18, 2026</span>
            <span>By Wanderlust Diaries</span>
            <span>India</span>
          </div>

        </div>
      </section>

      {/* FEATURED IMAGE */}
      <section className="wanderlust-story-featured-image">
        <img
          src={`${imageBase}shared-adventure-india.png`}
          alt="Friends discovering India's heritage and culture together"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </section>

      {/* ARTICLE LAYOUT */}
      <section className="wanderlust-story-layout">

        <article className="wanderlust-story-content">

          <p className="wanderlust-story-lead">
            This journey from Canada to India was years in the
            making — a trip planned by a group of long-time
            friends, eager to experience a country new to most
            of them.
          </p>

          <p>
            With the careful planning of SilverGenie Wanderlust,
            the experience was designed around comfortable,
            slow exploration, allowing the group to absorb
            the richness of each destination without feeling
            rushed.
          </p>

          <p>
            Travelling together made the experience even more
            meaningful. Every destination offered new things
            to discover, discuss and remember as friends.
          </p>

          {/* SECTION 1 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              STOP 01 · MUMBAI
            </span>

            <h2>Welcome to the Vibrant City of Mumbai</h2>

            <p>
              Mumbai was the group's introduction to India.
              From the moment they arrived, the city felt
              alive with vibrant streets, movement and warm
              interactions.
            </p>

            <p>
              Airport assistance, comfortable transportation
              and clear coordination helped the travellers
              settle into their journey.
            </p>

            <p>
              Instead of worrying about the practical details,
              the group could focus on experiencing the city
              and sharing their first impressions of India.
            </p>

            <p>
              Exploring together made even the everyday
              sights along the road interesting. Friends
              exchanged reactions, pointed out details
              and continued discussing their discoveries
              over dinner.
            </p>

          </section>

          {/* SECTION 2 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              STOP 02 · AURANGABAD
            </span>

            <h2>Discovering India's Ancient Heritage</h2>

            <p>
              From modern city life, the journey moved
              towards the historic region of Aurangabad.
            </p>

            <p>
              Visiting ancient cave complexes and historical
              sites introduced the group to centuries of
              artistic expression, spirituality and
              craftsmanship carved into stone.
            </p>

            <p>
              Knowledgeable local guides helped bring the
              history to life, explaining the significance
              of the places and the stories behind them.
            </p>

            <p>
              These conversations continued after the tours.
              The friends reflected on the remarkable skill
              and effort required to create such extraordinary
              structures.
            </p>

            <p>
              The experience provided an opportunity to
              appreciate India's heritage beyond what could
              be understood through photographs alone.
            </p>

          </section>

          {/* SECTION 3 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              STOP 03 · KOLKATA
            </span>

            <h2>Experiencing Kolkata's Cultural Rhythm</h2>

            <p>
              The next destination was Kolkata, a city with
              a distinctive cultural character and a more
              reflective pace.
            </p>

            <p>
              After several days of travel, this slower
              rhythm gave the group an opportunity to
              appreciate their surroundings without
              feeling pressed for time.
            </p>

            <p>
              Comfortable transportation, thoughtful
              coordination and flexibility helped make
              the experience relaxed.
            </p>

            <p>
              Kolkata became another chapter in the group's
              exploration of India's history, culture and
              everyday life.
            </p>

          </section>

          {/* SECTION 4 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              STOP 04 · INDIA'S HERITAGE
            </span>

            <h2>The Golden Triangle and Beyond</h2>

            <p>
              The next major phase of the journey explored
              India's historic destinations, including
              Agra, Jaipur, Jaisalmer and surrounding areas,
              before concluding in Delhi.
            </p>

            <p>
              Standing before the Taj Mahal was an
              undeniable emotional highlight.
            </p>

            <p>
              Yet the journey was about much more than
              famous monuments. Colourful markets, narrow
              streets, quiet temples and traditional
              courtyards offered glimpses of everyday life.
            </p>

            <p>
              Each place revealed another dimension of
              India's cultural and historical richness.
            </p>

          </section>

          {/* SECTION 5 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              STOP 05 · JAISALMER
            </span>

            <h2>An Evening in the Golden Desert</h2>

            <p>
              Jaisalmer introduced the group to the vast
              desert landscape and the changing colours
              of the surroundings at sunset.
            </p>

            <p>
              The desert offered a different atmosphere
              from India's bustling cities and historic
              urban centres.
            </p>

            <p>
              It was another opportunity to pause, observe
              and appreciate how dramatically the landscape
              changes from one region to another.
            </p>

          </section>

          {/* SECTION 6 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              STOP 06 · JAIPUR
            </span>

            <h2>Jaipur's Architecture, Crafts and Traditions</h2>

            <p>
              Jaipur added another layer to the journey
              through its vibrant crafts, distinctive
              architecture and local traditions.
            </p>

            <p>
              Exploring the city offered opportunities
              to observe the artistic details and cultural
              expressions that contribute to its identity.
            </p>

            <p>
              Every city brought its own stories, making
              the trip a varied introduction to India's
              heritage and living culture.
            </p>

          </section>

          {/* SECTION 7 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              THE JOY OF FRIENDSHIP
            </span>

            <h2>The Moments Between Destinations</h2>

            <p>
              Some of the most meaningful moments happened
              away from the main sightseeing locations.
            </p>

            <p>
              Evenings became opportunities to share meals,
              discuss the day's discoveries and simply
              spend time together.
            </p>

            <p>
              Conversations about historical sites,
              cultural encounters and unexpected details
              helped turn individual experiences into
              shared memories.
            </p>

            <p>
              Long drives, laughter and the excitement of
              discovering something new became important
              parts of the adventure.
            </p>

            <p>
              Travelling with friends gave the group a
              chance to see India through one another's
              eyes as well as their own.
            </p>

          </section>

          {/* SECTION 8 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              THOUGHTFUL TRAVEL
            </span>

            <h2>Exploring India at a Comfortable Pace</h2>

            <p>
              One of the defining features of the journey
              was the attention given to comfort and
              thoughtful coordination.
            </p>

            <p>
              Well-planned travel days, knowledgeable
              guides and flexibility helped the group
              explore with greater confidence.
            </p>

            <p>
              Assistance, explanations and guidance
              made navigating an unfamiliar country
              feel more manageable.
            </p>

            <p>
              This approach allowed the travellers to
              spend more time appreciating each location
              and less time worrying about the logistics.
            </p>

            <p>
              The journey demonstrated how a carefully
              organised itinerary can create room for
              discovery, relaxation and spontaneous
              conversations.
            </p>

          </section>

          {/* SECTION 9 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              THE FINAL STOP · DELHI
            </span>

            <h2>Bringing the Adventure to a Close</h2>

            <p>
              The adventure concluded in Delhi, where
              the friends spent their final days reflecting
              on everything they had experienced.
            </p>

            <p>
              By this point, the journey had become much
              more than a sightseeing holiday.
            </p>

            <p>
              It had become a shared exploration of India's
              history, culture, heritage and everyday life,
              strengthened by the friendships that brought
              the group together.
            </p>

          </section>

          {/* CONCLUSION */}
          <section className="wanderlust-story-section">

            <h2>India, Friendship and Memories That Last</h2>

            <p>
              Looking back, the strongest memory was not
              any single monument or destination. It was
              the shared experience of discovering India
              together.
            </p>

            <p>
              The laughter during long drives, the historical
              discussions, the quiet moments of wonder and
              the beauty of each place all contributed
              to the journey.
            </p>

            <p>
              India introduced the group to an extraordinary
              world of heritage and living culture.
              Experiencing it together, with the thoughtful
              support of SilverGenie Wanderlust, made the
              journey meaningful and comfortable.
            </p>

            <p>
              Ultimately, this was an adventure about both
              incredible destinations and the people with
              whom those discoveries were shared.
            </p>

          </section>

          {/* TAGS */}
          <div className="wanderlust-story-tags">
            <span>India</span>
            <span>Friendship</span>
            <span>Slow Travel</span>
            <span>Mumbai</span>
            <span>Aurangabad</span>
            <span>Kolkata</span>
            <span>Agra</span>
            <span>Jaipur</span>
            <span>Jaisalmer</span>
            <span>Delhi</span>
            <span>SilverGenie Wanderlust</span>
          </div>

          {/* STORY NAVIGATION */}
          <div className="wanderlust-story-navigation">

            <Link to="/wanderlust/meghalaya">
              ← Previous Story
            </Link>

            <Link to="/wanderlust/sundarbans">
              Next Story →
            </Link>

          </div>

        </article>

        {/* SIDEBAR */}
        <aside className="wanderlust-story-sidebar">

          <div className="wanderlust-sidebar-card">

            <span className="wanderlust-eyebrow">
              JOURNEY HIGHLIGHTS
            </span>

            <h3>Discover India Together</h3>

            <ul>
              <li>Mumbai's vibrant city life</li>
              <li>Aurangabad's ancient heritage</li>
              <li>Kolkata's cultural character</li>
              <li>The Taj Mahal in Agra</li>
              <li>Jaipur's architecture and crafts</li>
              <li>Jaisalmer's desert landscapes</li>
              <li>Delhi and the final reflections</li>
              <li>Friendship and shared discoveries</li>
            </ul>

          </div>

          <div className="wanderlust-sidebar-card">

            <span className="wanderlust-eyebrow">
              HEART OF BHARAT
            </span>

            <h3>Explore More Indian Journeys</h3>

            <p>
              Discover more stories celebrating India's
              cultural heritage, landscapes, traditions
              and unforgettable travel experiences.
            </p>

            <Link
              to="/wanderlust-diaries"
              className="wanderlust-sidebar-button"
            >
              Explore All Diaries
            </Link>

          </div>

          <div className="wanderlust-sidebar-card">

            <span className="wanderlust-eyebrow">
              TRAVEL WITH CARE
            </span>

            <h3>Your Next Travel Story</h3>

            <p>
              Explore thoughtfully planned journeys
              that combine discovery, comfort and
              meaningful experiences.
            </p>

            <Link
              to="/travel-with-care"
              className="wanderlust-sidebar-button"
            >
              Explore Travel With Care
            </Link>

          </div>

        </aside>

      </section>

    </main>
  );
};

export default SharedAdventureIndia;