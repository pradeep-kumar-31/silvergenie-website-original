import React from "react";
import { Link } from "react-router-dom";
import "../styles/WanderlustDiaries.css";

const Mizoram = () => {
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

          <h1>
            Mizoram Through My Eyes: A Journey I Will Remember
          </h1>

          <p>
            From the rolling green hills of Aizawl to the beauty of
            Vantawng Falls, discover a memorable journey through Mizoram's
            landscapes, culture and warm hospitality.
          </p>

          <div className="wanderlust-story-meta">
            <span>September 23, 2026</span>
            <span>By Mr. D. B. Banerjee</span>
            <span>Mizoram, Northeast India</span>
          </div>

        </div>
      </section>

      {/* FEATURED IMAGE */}
      <section className="wanderlust-story-featured-image">
        <img
          src={`${imageBase}mizoram.png`}
          alt="Green mountains and beautiful landscapes of Mizoram"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </section>

      {/* ARTICLE LAYOUT */}
      <section className="wanderlust-story-layout">

        <article className="wanderlust-story-content">

          <p className="wanderlust-story-lead">
            I had always wanted to explore Northeast India, a region
            that felt both familiar and wonderfully distant. When the
            opportunity came for four of us to travel from Odisha to
            Mizoram, we were filled with excitement about what we
            would discover.
          </p>

          <p>
            The journey itself felt like the beginning of an adventure.
            As we travelled farther east, the landscape gradually changed.
            By the time we reached Mizoram, rolling green hills, forests
            and mountain views surrounded us.
          </p>

          <p>
            Aizawl, perched among the hills, immediately captured our
            attention. Everywhere we looked, another beautiful view
            seemed to be waiting. Our guides were also kind and hospitable,
            making us feel comfortable throughout our stay.
          </p>

          {/* SECTION 1 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              FIRST IMPRESSIONS
            </span>

            <h2>Discovering Aizawl and Its Rolling Hills</h2>

            <p>
              Aizawl offered a beautiful introduction to Mizoram.
              The city sits among green hills, with mountain views
              appearing throughout the landscape.
            </p>

            <p>
              The scenery encouraged us to slow down and appreciate
              our surroundings. Rather than focusing only on reaching
              the next destination, we enjoyed stopping, looking around
              and taking photographs.
            </p>

            <p>
              The landscape became one of the most memorable aspects
              of our journey from Odisha to Mizoram.
            </p>

          </section>

          {/* SECTION 2 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              LOCAL LIFE
            </span>

            <h2>A Culture of Courtesy and Discipline</h2>

            <p>
              What impressed us just as much as the scenery was the
              everyday behaviour of the people.
            </p>

            <p>
              We noticed it from the beginning. Passengers waited
              patiently while leaving the aircraft, without rushing
              to get ahead of others.
            </p>

            <p>
              On the roads, lane discipline was noticeable, and the
              absence of unnecessary honking made travelling through
              the city especially pleasant.
            </p>

            <p>
              These everyday observations gave us a deeper appreciation
              of Mizoram. They reminded us that the character of a
              place is often revealed through small interactions and
              the way people share public spaces.
            </p>

          </section>

          {/* SECTION 3 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              CULTURAL EXPERIENCE
            </span>

            <h2>Experiencing the Traditional Cheraw Dance</h2>

            <p>
              One of our happiest memories was experiencing the Cheraw
              dance, a traditional Mizo bamboo dance.
            </p>

            <p>
              We had watched cultural performances before, but
              experiencing the rhythm of the bamboo poles up close
              was something entirely different.
            </p>

            <p>
              Before long, the four of us were laughing and trying
              to follow the movements. We were no longer simply
              watching from the side; we were participating in the
              moment ourselves.
            </p>

            <p>
              None of us was worried about getting every step right.
              What mattered was the music, the energy and the joy
              of experiencing a tradition that was new to us.
            </p>

            <p>
              The experience became a reminder that cultural travel
              is most meaningful when we take the time to participate,
              learn and connect with the people and traditions around us.
            </p>

          </section>

          {/* SECTION 4 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              LOCAL FLAVOURS
            </span>

            <h2>Discovering Mizoram Through Food</h2>

            <p>
              Food naturally became an important part of our conversations.
              We enjoyed discovering local flavours and trying dishes
              that differed from what we usually ate.
            </p>

            <p>
              Some meals lasted longer than planned because there was
              always something to discuss. We talked about the places
              we had visited, the people we had met and the dishes
              we had enjoyed most.
            </p>

            <p>
              Looking back, those conversations around the table
              are just as much a part of the journey as the sightseeing.
              Food gave us another way to appreciate the region and
              share the experience with one another.
            </p>

          </section>

          {/* SECTION 5 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              NATURAL BEAUTY
            </span>

            <h2>Vantawng Falls: Nature at Its Best</h2>

            <p>
              Nature was everywhere during our time in Mizoram.
              Forests, waterfalls and mountain roads allowed us
              to explore beyond the city.
            </p>

            <p>
              Vantawng Falls was particularly memorable. Surrounded
              by dense greenery, the waterfall offered a striking
              view of water cascading through the forest.
            </p>

            <p>
              Standing there made us appreciate the scale and beauty
              of the landscape. It was a moment to pause, take in
              the surroundings and enjoy the natural world without
              rushing on to the next stop.
            </p>

          </section>

          {/* SECTION 6 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              CITY VIEWS
            </span>

            <h2>Aizawl Skywalk and Aizawl Peak</h2>

            <p>
              We also explored Aizawl at a leisurely pace. One
              experience that stayed with us was visiting the
              Aizawl Skywalk.
            </p>

            <p>
              The elevated viewpoint gave us another perspective
              of the city and the surrounding hills. Walking along
              the Skywalk, stopping to admire the views and taking
              photographs became simple pleasures.
            </p>

            <p>
              Our visit to Aizawl Peak added another opportunity
              to appreciate the city's beautiful setting.
            </p>

            <p>
              These experiences showed us that a destination does
              not always need a packed itinerary. Sometimes, the
              most memorable moments come from slowing down and
              enjoying the view.
            </p>

          </section>

          {/* SECTION 7 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              PEOPLE AND HOSPITALITY
            </span>

            <h2>The Kindness That Made the Journey Special</h2>

            <p>
              Our guides played an important role in making us feel
              welcome and comfortable throughout our time in Mizoram.
            </p>

            <p>
              Their hospitality, combined with the courtesy we
              observed in everyday life, became an important part
              of our experience.
            </p>

            <p>
              The journey was not memorable only because of the
              mountains, forests and waterfalls. It was also shaped
              by the people we met and the small moments of kindness
              we experienced along the way.
            </p>

          </section>

          {/* CONCLUSION */}
          <section className="wanderlust-story-section">

            <h2>A Journey I Will Always Remember</h2>

            <p>
              The four of us returned with photographs, but photographs
              alone cannot capture everything that made Mizoram special.
            </p>

            <p>
              I remember the laughter during the Cheraw dance, the
              green hills disappearing into the distance, the taste
              of unfamiliar dishes and the conversations we shared
              over meals.
            </p>

            <p>
              I also remember the kindness of our guides, the patient
              movement of traffic and the simple courtesy people
              showed one another.
            </p>

            <p>
              We travelled to Mizoram curious about a part of Northeast
              India we did not know well. We returned having experienced
              its extraordinary landscape, culture and people.
            </p>

            <p>
              For all four of us, the journey from Odisha to Mizoram
              became much more than a trip. It became a memory we
              will continue to carry with us.
            </p>

          </section>

          {/* AUTHOR */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              ABOUT THE AUTHOR
            </span>

            <h2>Mr. D. B. Banerjee</h2>

            <p>
              Mr. D. B. Banerjee shares his personal experience of
              travelling from Odisha to Mizoram with three fellow
              travellers.
            </p>

            <p>
              His account reflects the beauty of discovering a new
              region through its landscapes, cultural traditions,
              local food and the everyday kindness of its people.
            </p>

          </section>

          {/* TAGS */}
          <div className="wanderlust-story-tags">
            <span>Mizoram</span>
            <span>Northeast India</span>
            <span>Northeast Diaries</span>
            <span>Cheraw Dance</span>
            <span>Vantawng Falls</span>
            <span>SilverGenie Wanderlust</span>
          </div>

          {/* NAVIGATION */}
          <div className="wanderlust-story-navigation">

            <Link to="/wanderlust/mahakumbh">
              ← Previous Story
            </Link>

            <Link to="/wanderlust/assam">
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

            <h3>Exploring Mizoram</h3>

            <ul>
              <li>Journey from Odisha</li>
              <li>Aizawl and its rolling hills</li>
              <li>Local culture and everyday life</li>
              <li>Traditional Cheraw dance</li>
              <li>Local food experiences</li>
              <li>Vantawng Falls</li>
              <li>Aizawl Skywalk</li>
              <li>Aizawl Peak</li>
            </ul>

          </div>

          <div className="wanderlust-sidebar-card">

            <span className="wanderlust-eyebrow">
              NORTHEAST DIARIES
            </span>

            <h3>Discover Northeast India</h3>

            <p>
              Explore journeys through the region's landscapes,
              traditions, local communities and natural beauty.
            </p>

            <Link
              to="/wanderlust-diaries"
              className="wanderlust-sidebar-button"
            >
              Explore More Stories
            </Link>

          </div>

          <div className="wanderlust-sidebar-card">

            <span className="wanderlust-eyebrow">
              TRAVEL WITH CARE
            </span>

            <h3>Travel at Your Own Pace</h3>

            <p>
              Discover thoughtfully planned journeys that value
              comfort, meaningful experiences and the people
              you travel with.
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

export default Mizoram;