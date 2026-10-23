import React from "react";
import { Link } from "react-router-dom";
import "../styles/WanderlustDiaries.css";

const Meghalaya = () => {
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
            Northeast Diaries
          </span>

          <h1>Meghalaya: The Abode of Clouds</h1>

          <p>
            A journey through mist-covered hills, sacred forests,
            welcoming villages, living root bridges and magnificent
            waterfalls in the beautiful landscapes of Meghalaya.
          </p>

          <div className="wanderlust-story-meta">
            <span>June 24, 2025</span>
            <span>By Paromita Sen</span>
            <span>Meghalaya, Northeast India</span>
          </div>

        </div>
      </section>

      {/* FEATURED IMAGE */}
      <section className="wanderlust-story-featured-image">
        <img
          src={`${imageBase}meghalaya.png`}
          alt="Green hills and misty landscapes of Meghalaya"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </section>

      {/* ARTICLE LAYOUT */}
      <section className="wanderlust-story-layout">

        <article className="wanderlust-story-content">

          <p className="wanderlust-story-lead">
            Meghalaya—aptly named the Abode of Clouds—is a realm
            of ethereal beauty. As I sailed through its misty veil,
            rolling hills unfolded like a canvas of emerald green,
            dotted with waterfalls cascading down like silver ribbons.
            Every turn seemed to reveal a new wonder, each more
            mesmerizing than the last.
          </p>

          <p>
            My journey through Meghalaya was an opportunity to
            experience the quiet beauty of nature, discover local
            traditions and connect with the people who make these
            landscapes so special.
          </p>

          {/* SECTION 1 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              NATURE & SPIRITUALITY
            </span>

            <h2>The Sacred Forest: A Connection with Nature</h2>

            <p>
              The Sacred Forest, nestled amidst lush green hills,
              was a mystical experience. The villagers' reverence
              for this forest, where they pray for the well-being
              of their community, was palpable.
            </p>

            <p>
              Towering trees, a thriving ecosystem and oxygen-rich
              air created a profound sense of serenity and connection
              with nature.
            </p>

            <p>
              Walking through the forest, I felt it hum with ancient
              wisdom, its secrets whispered through the rustling leaves.
            </p>

            <p>
              The experience offered a reminder that forests are
              more than beautiful landscapes. They can also hold
              deep cultural, spiritual and community significance.
            </p>

          </section>

          {/* SECTION 2 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              VILLAGE LIFE
            </span>

            <h2>Pynter Village: The Beauty of Simple Living</h2>

            <p>
              Pynter village, with its picturesque surroundings,
              embodied the essence of tranquillity.
            </p>

            <p>
              Warm smiles and heartfelt hospitality greeted me
              at every corner, making this hidden gem even more
              enchanting.
            </p>

            <p>
              Wandering through its paths, I felt as though I had
              stumbled upon a little slice of heaven, where time
              slowed and nature's beauty reigned supreme.
            </p>

            <p>
              The villagers expressed their joy through the delicious
              flavours of their traditional cuisine and the soulful
              melodies of their music.
            </p>

            <p>
              Although some traditional instruments are fading with
              time, their rhythms carried a nostalgic charm that
              made the experience particularly memorable.
            </p>

          </section>

          {/* SECTION 3 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              HUMAN INGENUITY
            </span>

            <h2>The Living Root Bridge: Nature Meets Innovation</h2>

            <p>
              The Root Bridge was another marvel to behold,
              a testament to the ingenuity and patience of the
              local people.
            </p>

            <p>
              These remarkable bridges are created by guiding
              the roots of living trees across streams and
              allowing them to grow into strong, interconnected
              structures over time.
            </p>

            <p>
              Unlike a bridge constructed in a single day,
              a living root bridge represents a relationship
              between people, plants and the passage of time.
            </p>

            <p>
              The process of nurturing roots to form a bridge
              is extraordinary—a perfect blend of nature and
              human innovation.
            </p>

            <p>
              Crossing it, I was filled with awe and gratitude
              for witnessing such a unique creation.
            </p>

          </section>

          {/* SECTION 4 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              WATERFALLS & MOUNTAINS
            </span>

            <h2>Seven Sisters Falls: A Spectacle of Natural Beauty</h2>

            <p>
              And then there were the Seven Sisters Falls,
              a spectacle of breathtaking beauty.
            </p>

            <p>
              Seven streams of milky-white water cascaded down
              in a mesmerizing display of natural power and elegance.
            </p>

            <p>
              Watching them felt like witnessing a celestial
              ballet, the water and clouds dancing in perfect harmony.
            </p>

            <p>
              The surrounding mountains, shrouded in mist,
              played hide and seek—sometimes revealing themselves,
              sometimes vanishing again into the misty veil.
            </p>

            <p>
              The changing scenery made the waterfall experience
              even more captivating, with clouds and water
              constantly transforming the landscape.
            </p>

          </section>

          {/* SECTION 5 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              THE BEAUTY OF SLOW TRAVEL
            </span>

            <h2>Finding Peace in the Abode of Clouds</h2>

            <p>
              The misty hills, cascading waterfalls and lush
              green forests all combined to create an unforgettable
              journey.
            </p>

            <p>
              Meghalaya offered moments to pause, observe and
              appreciate the natural world without rushing
              from one experience to another.
            </p>

            <p>
              The sacred forest introduced a deeper connection
              with nature, Pynter village offered warmth and
              hospitality, the Root Bridge demonstrated human
              ingenuity, and Seven Sisters Falls revealed
              the dramatic beauty of the landscape.
            </p>

            <p>
              Each experience had its own character, yet
              together they created a journey filled with
              tranquillity, discovery and wonder.
            </p>

          </section>

          {/* CONCLUSION */}
          <section className="wanderlust-story-section">

            <h2>A Journey to Remember</h2>

            <p>
              Meghalaya truly is a treasure trove of natural
              wonders—a place to reconnect with nature,
              breathe deeply and find peace.
            </p>

            <p>
              From its mystical forests and welcoming villages
              to its extraordinary root bridges and cascading
              waterfalls, the state offers experiences that
              stay with you long after you leave.
            </p>

            <p>
              For me, this journey was not simply about seeing
              beautiful places. It was about appreciating the
              relationship between people, traditions and
              the natural world.
            </p>

          </section>

          {/* AUTHOR */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              ABOUT THE AUTHOR
            </span>

            <h2>Paromita Sen</h2>

            <p>
              Paromita Sen is a homemaker and mother of two
              children who have grown up to carve their own paths.
            </p>

            <p>
              After dedicating more than 25 years to raising
              her family, she is embarking on a new chapter
              by serving the elderly community through
              SilverGenie Care.
            </p>

            <p>
              In her free time, she enjoys music, meeting
              new people and exploring new places, with a
              deep love for nature at heart.
            </p>

            <p>
              She remains grateful for her supportive family
              and inspiring friends who continue to motivate her.
            </p>

          </section>

          {/* TAGS */}
          <div className="wanderlust-story-tags">
            <span>Meghalaya</span>
            <span>Abode of Clouds</span>
            <span>Northeast India</span>
            <span>Sacred Forest</span>
            <span>Pynter Village</span>
            <span>Living Root Bridge</span>
            <span>Seven Sisters Falls</span>
            <span>SilverGenie Wanderlust</span>
          </div>

          {/* STORY NAVIGATION */}
          <div className="wanderlust-story-navigation">

            <Link to="/wanderlust/neora-valley-silk-route">
              ← Previous Story
            </Link>

            <Link to="/wanderlust/shared-adventure-india">
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

            <h3>Discover Meghalaya</h3>

            <ul>
              <li>Sacred Forest</li>
              <li>Pynter Village</li>
              <li>Living Root Bridge</li>
              <li>Seven Sisters Falls</li>
              <li>Misty green hills</li>
              <li>Traditional food and music</li>
              <li>Local culture and hospitality</li>
            </ul>

          </div>

          <div className="wanderlust-sidebar-card">

            <span className="wanderlust-eyebrow">
              NORTHEAST DIARIES
            </span>

            <h3>More Stories, More Discoveries</h3>

            <p>
              Explore more journeys through Northeast India's
              beautiful landscapes, cultural traditions and
              unforgettable experiences.
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

            <h3>Plan Your Next Journey</h3>

            <p>
              Discover thoughtfully curated travel experiences
              designed around comfort, care and meaningful
              exploration.
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

export default Meghalaya;