import React from "react";
import { Link } from "react-router-dom";
import "../styles/WanderlustDiaries.css";

const WhiteRannMoon = () => {
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
            Under the White Rann Moon: A Journey Designed with Care
          </h1>

          <p>
            Three unforgettable days in Kutch, where the vast
            white salt desert, a luminous full moon, authentic
            Kutchi culture and thoughtful care came together
            to create a meaningful travel experience.
          </p>

          <div className="wanderlust-story-meta">
            <span>December 19, 2025</span>
            <span>By Wanderlust Diaries</span>
            <span>Kutch, Gujarat, India</span>
          </div>

        </div>
      </section>

      {/* FEATURED IMAGE */}
      <section className="wanderlust-story-featured-image">
        <img
          src={`${imageBase}white-rann-moon.png`}
          alt="Full moon illuminating the White Rann salt desert in Gujarat"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </section>

      {/* ARTICLE LAYOUT */}
      <section className="wanderlust-story-layout">

        <article className="wanderlust-story-content">

          <p className="wanderlust-story-lead">
            Some journeys do more than change geographies;
            they restore rhythm, confidence and connection.
            Our three-day journey to the White Rann with
            SilverGenie's Wanderlust Genie was designed
            precisely with this intent: to create a travel
            experience where discovery is held gently within care.
          </p>

          <p>
            We set out from Ahmedabad on December 4, 2025,
            with our senior cohort gathered in anticipation
            and assurance. From the very beginning, punctual
            pick-ups, dependable transportation and experienced
            drivers helped the journey unfold smoothly.
          </p>

          <p>
            As cultivated plains gradually gave way to the
            striking landscape of the desert, we travelled
            forward in thoughtful silence, absorbing the
            vastness around us and feeling both humbled
            and energised by the scenery.
          </p>

          {/* DAY 1 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              DAY 01 · DECEMBER 4
            </span>

            <h2>From Ahmedabad to the White Rann</h2>

            <p>
              The journey began in Ahmedabad, where the
              group gathered for the trip to Kutch.
            </p>

            <p>
              Reliable pick-ups, calm drivers familiar
              with the terrain and careful coordination
              helped everyone settle into the journey.
            </p>

            <p>
              For senior travellers, these details can
              make a meaningful difference. Knowing that
              transportation and arrangements are being
              handled carefully allows everyone to focus
              on the experience rather than the logistics.
            </p>

            <p>
              As we moved farther from the city, the
              landscape gradually opened into the
              striking, expansive terrain of Kutch.
            </p>

          </section>

          {/* TENT CITY */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              COMFORT IN THE DESERT
            </span>

            <h2>Arriving at Tent City</h2>

            <p>
              By evening, we arrived at Tent City, where
              comfort and accessibility were important
              parts of the experience.
            </p>

            <p>
              The premium tents offered a thoughtfully
              designed stay, balancing the distinctive
              atmosphere of the desert with practical
              comforts.
            </p>

            <p>
              For many members of the group, staying
              in the tents became one of the highlights
              of the journey.
            </p>

            <p>
              After settling our belongings, we explored
              the grounds at an easy pace. The SilverGenie
              team remained available and attentive
              without intruding on the travellers' independence.
            </p>

            <p>
              The experience demonstrated that comfort,
              dignity and delight can coexist, even
              in an unusual destination.
            </p>

          </section>

          {/* KUTCHI CULTURE */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              LOCAL CULTURE
            </span>

            <h2>Authentic Kutchi Cuisine and Folk Performances</h2>

            <p>
              Dinner introduced us to authentic Kutchi
              cuisine, adding a taste of the region's
              food traditions to the experience.
            </p>

            <p>
              The meal was followed by traditional folk
              performances that brought rhythm and warmth
              to the desert evening.
            </p>

            <p>
              These cultural experiences offered a
              connection to the place beyond its scenery.
              The food, music and performances made the
              evening feel welcoming and memorable.
            </p>

          </section>

          {/* FULL MOON */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              THE DEFINING MOMENT
            </span>

            <h2>The Full Moon Over the White Rann</h2>

            <p>
              The defining moment of the first evening
              came when the full moon rose over the
              White Rann.
            </p>

            <p>
              Its light bathed the salt flats in
              ethereal whites and silvery greys,
              transforming the landscape into something
              extraordinary.
            </p>

            <p>
              Time seemed to slow as we stood together,
              quietly mesmerised by the immense open
              space and the moonlight spreading across
              the white desert.
            </p>

            <p>
              It was a moment that needed very few words.
              Everyone could simply stand, observe and
              enjoy the remarkable scenery together.
            </p>

          </section>

          {/* DAY 2 SUNRISE */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              DAY 02 · DECEMBER 5
            </span>

            <h2>Returning to the Rann Before Sunrise</h2>

            <p>
              The next morning began before sunrise,
              with another visit to the White Rann.
            </p>

            <p>
              The sky gradually shifted from soft blush
              tones to brilliant daylight, spreading
              across the endless white expanse.
            </p>

            <p>
              The scene was accompanied by little more
              than the whisper of the wind, creating
              an atmosphere of stillness and reflection.
            </p>

            <p>
              After returning to Tent City, a nourishing
              breakfast and hot chai awaited us.
            </p>

            <p>
              These seemingly small details reflected
              the senior-first approach behind the
              journey: thoughtful arrangements that
              made the experience more comfortable
              without taking away its sense of adventure.
            </p>

          </section>

          {/* ROAD THROUGH HEAVEN */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              THE ROAD THROUGH HEAVEN
            </span>

            <h2>A Road Disappearing into the Horizon</h2>

            <p>
              As we journeyed towards Dholavira, we
              paused at the iconic Road through Heaven.
            </p>

            <p>
              The long, straight road seemed to disappear
              into the horizon, creating a dramatic
              contrast with the expansive landscape
              around it.
            </p>

            <p>
              Photographs, laughter and easy conversations
              followed. Insights shared along the way
              added meaning to the stop.
            </p>

            <p>
              These unrushed moments helped transform
              the trip from a sequence of destinations
              into an experience shaped by people,
              conversations and shared discovery.
            </p>

          </section>

          {/* SUNSET */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              EVENING IN KUTCH
            </span>

            <h2>The Golden Glow of Sunset</h2>

            <p>
              Later that evening, we returned to the
              White Rann to witness the sunset.
            </p>

            <p>
              As the sun dipped towards the horizon,
              the salt desert transformed into a
              vast golden canvas.
            </p>

            <p>
              Simple photographs were taken, not for
              spectacle, but to preserve memories
              of the moment.
            </p>

            <p>
              The changing light offered another
              perspective on the same landscape,
              showing how dramatically its character
              could shift throughout the day.
            </p>

          </section>

          {/* BIRTHDAY CELEBRATION */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              THE CIRCLE OF CARE
            </span>

            <h2>A Surprise Birthday Celebration Under the Desert Sky</h2>

            <p>
              That evening, back at Tent City, the
              heart of the journey revealed itself
              in a particularly touching way.
            </p>

            <p>
              The SilverGenie team had arranged a
              surprise birthday celebration for one
              of the cohort members.
            </p>

            <p>
              A cake appeared beneath the desert sky,
              its candles flickering softly as songs
              were sung and slices were shared.
            </p>

            <p>
              In that moment, fellow travellers became
              a community, connected through warmth,
              laughter and genuine care.
            </p>

            <p>
              The gesture embodied SilverGenie's
              Circle of Care. It was a reminder that
              thoughtful travel planning is not only
              about transportation, accommodation
              and sightseeing.
            </p>

            <p>
              It is also about recognising the people
              on the journey and creating opportunities
              for meaningful connection.
            </p>

          </section>

          {/* DAY 3 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              DAY 03 · DECEMBER 6
            </span>

            <h2>Smritivan: Remembering Resilience in Bhuj</h2>

            <p>
              On the final day, after breakfast and
              check-out, we visited Smritivan in Bhuj.
            </p>

            <p>
              The earthquake memorial offered a deeply
              reflective experience, bringing stories
              of loss, resilience and collective
              strength into focus.
            </p>

            <p>
              After days filled with the beauty of
              the salt desert and the warmth of shared
              celebrations, the memorial provided
              an opportunity to pause and reflect
              on the human stories connected with Kutch.
            </p>

            <p>
              The visit added a meaningful historical
              and emotional dimension to the final
              day of the trip.
            </p>

          </section>

          {/* RETURN */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              RETURN TO AHMEDABAD
            </span>

            <h2>Returning with Fuller Hearts</h2>

            <p>
              The return journey to Ahmedabad passed
              in gentle silence, punctuated by shared
              reflections on the experiences of the
              previous days.
            </p>

            <p>
              We arrived by evening, carrying memories
              of the vast Rann, the full moon, the
              sunrise, the cultural performances
              and the unexpected birthday celebration.
            </p>

            <p>
              The journey had offered both discovery
              and reassurance, with careful arrangements
              allowing the group to enjoy the experience
              at a comfortable pace.
            </p>

          </section>

          {/* CONCLUSION */}
          <section className="wanderlust-story-section">

            <h2>When Travel Is Designed with Care</h2>

            <p>
              This was not just a trip. It was an
              affirmation of what Wanderlust Genie
              by SilverGenie stands for.
            </p>

            <p>
              The vastness of the Rann, early mornings,
              thoughtfully curated stays, an unexpected
              celebration and attentive support
              throughout the journey all contributed
              to a memorable experience.
            </p>

            <p>
              The journey demonstrated how empathetic
              planning, dependable operations and
              attention to safety can make travel
              comfortable not only physically,
              but emotionally as well.
            </p>

            <p>
              At any age, journeys held with care
              can continue to awaken wonder.
              The joy of discovery does not diminish
              with age; with the right support,
              it can become even more meaningful.
            </p>

            <p>
              And perhaps that is the most important
              lesson from our time beneath the
              White Rann moon: joy travels best
              when it is shared.
            </p>

          </section>

          {/* TAGS */}
          <div className="wanderlust-story-tags">
            <span>White Rann</span>
            <span>Kutch</span>
            <span>Gujarat</span>
            <span>Full Moon</span>
            <span>Tent City</span>
            <span>Kutchi Cuisine</span>
            <span>Road Through Heaven</span>
            <span>Dholavira</span>
            <span>Smritivan</span>
            <span>Senior Travel</span>
            <span>SilverGenie Wanderlust</span>
          </div>

          {/* STORY NAVIGATION */}
          <div className="wanderlust-story-navigation">

            <Link to="/wanderlust/sundarbans">
              ← Previous Story
            </Link>

            <Link to="/wanderlust/taj-mahal">
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

            <h3>Discover the White Rann</h3>

            <ul>
              <li>Departure from Ahmedabad</li>
              <li>Premium Tent City stay</li>
              <li>Authentic Kutchi cuisine</li>
              <li>Traditional folk performances</li>
              <li>Full moon over the salt desert</li>
              <li>Sunrise at the White Rann</li>
              <li>Road through Heaven</li>
              <li>Sunset over the Rann</li>
              <li>Surprise birthday celebration</li>
              <li>Smritivan in Bhuj</li>
            </ul>

          </div>

          <div className="wanderlust-sidebar-card">

            <span className="wanderlust-eyebrow">
              HEART OF BHARAT
            </span>

            <h3>More Indian Travel Stories</h3>

            <p>
              Explore more journeys through India's
              landscapes, cultural heritage and
              memorable experiences.
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

            <h3>Discover Travel with SilverGenie</h3>

            <p>
              Experience thoughtfully planned journeys
              where comfort, safety and meaningful
              discoveries come together.
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

export default WhiteRannMoon;