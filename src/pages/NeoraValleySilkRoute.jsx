import React from "react";
import { Link } from "react-router-dom";
import "../styles/WanderlustDiaries.css";

const NeoraValleySilkRoute = () => {
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
            Trip to Neora Valley and East Sikkim via the Silk Route
          </h1>

          <p>
            From misty forests and spectacular Himalayan sunrises
            to winding mountain roads, high-altitude lakes and
            peaceful monasteries — discover a memorable journey
            through Neora Valley and East Sikkim.
          </p>

          <div className="wanderlust-story-meta">
            <span>December 10, 2025</span>
            <span>By BD Chatterjee</span>
            <span>West Bengal & Sikkim, India</span>
          </div>

        </div>
      </section>

      {/* FEATURED IMAGE */}
      <section className="wanderlust-story-featured-image">
        <img
          src={`${imageBase}neora-valley-silk-route.png`}
          alt="Himalayan landscape along the Neora Valley and East Sikkim journey"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </section>

      {/* MAIN ARTICLE */}
      <section className="wanderlust-story-layout">

        <article className="wanderlust-story-content">

          <p className="wanderlust-story-lead">
            We had a six-day, five-night trip in the third week
            of November to Neora Valley National Park and East
            Sikkim via Zuluk through the Silk Route. It was a
            fabulous travel experience, filled with mountain
            scenery, forest landscapes and unforgettable views
            of the Himalayas.
          </p>

          <p>
            The journey offered a wonderful combination of
            natural beauty and cultural experiences. From the
            forests near Lava to the winding roads of East Sikkim,
            each destination had something unique to offer.
          </p>

          {/* NEORA VALLEY */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              STOP 01 · WEST BENGAL
            </span>

            <h2>Neora Valley National Park</h2>

            <p>
              Our journey began at Neora Valley National Park,
              a sprawling reserve forest of approximately
              88 square kilometres near Lava in the Kalimpong
              district of West Bengal.
            </p>

            <p>
              The park is bordered by forests of Sikkim on one
              side and Bhutan on the other. The majestic
              Kanchenjunga range provides a spectacular backdrop
              to this biodiverse landscape.
            </p>

            <p>
              This was our second visit to Neora Valley during
              the year, and the experience was mesmerizing.
              Some areas of the forest remain difficult to access,
              preserving much of its natural character.
            </p>

            <p>
              One of the highlights was visiting Rachela Peak,
              the highest point of the valley, at approximately
              10,300 feet.
            </p>

            <p>
              From the peak, we experienced a breathtaking
              panoramic view of the Himalayan range, with
              Kanchenjunga standing prominently at the centre.
              As the first crimson rays of sunlight reached
              its snow-covered slopes, the mountain gradually
              appeared golden.
            </p>

            <p>
              Watching the sunrise over the Himalayas was
              one of those rare experiences that remain in
              your memory long after a journey ends.
            </p>

          </section>

          {/* ARITAR */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              STOP 02 · EAST SIKKIM
            </span>

            <h2>Aritar: A Lake Surrounded by Greenery</h2>

            <p>
              From Neora Valley, we proceeded towards Aritar
              in East Sikkim.
            </p>

            <p>
              Situated at approximately 4,600 feet, Aritar
              is known for its natural lake, lush greenery
              and surrounding pine forests.
            </p>

            <p>
              A small shrine dedicated to Guru Padmasambhava
              stands on the banks of the lake, adding a
              spiritual element to the peaceful surroundings.
            </p>

            <p>
              The area also offers beautiful views of valleys
              surrounded by the mountains of East Sikkim.
              It was a pleasant stop that allowed us to
              appreciate the quieter side of the region.
            </p>

          </section>

          {/* PADAMCHEN */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              STOP 03 · MOUNTAIN VILLAGE
            </span>

            <h2>Padamchen: A Beautiful Himalayan Sunset</h2>

            <p>
              Our next stop on the way to the Silk Route
              was Padamchen, a small village situated at
              approximately 8,300 feet.
            </p>

            <p>
              Dense pine forests surround the village,
              creating a peaceful mountain atmosphere.
            </p>

            <p>
              One of the memorable moments here was watching
              the sunset at this altitude. The changing light
              over the mountains provided a beautiful reminder
              of how rewarding slow travel can be.
            </p>

          </section>

          {/* SILK ROUTE */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              STOP 04 · THE SILK ROUTE
            </span>

            <h2>Through the Winding Roads of East Sikkim</h2>

            <p>
              The following day, we set out along the famous
              Silk Route in East Sikkim.
            </p>

            <p>
              Known for its winding roads, sharp hairpin bends
              and high-altitude Himalayan scenery, this route
              offered a remarkable mountain-driving experience.
              Some stretches reach approximately 12,500 feet.
            </p>

            <p>
              The road passed rugged mountains and several
              natural high-altitude lakes, including Lake
              Kupup and Changu Lake, also known as Tsongmo Lake.
            </p>

            <p>
              We also travelled through Nathang Valley, where
              the landscape opened into dramatic mountain
              views beneath wide blue skies and drifting clouds.
            </p>

            <p>
              It was cold and windy, but the bright sunshine
              made the scenery particularly striking. As it
              was autumn, the upper reaches had not yet
              experienced snowfall.
            </p>

            <p>
              We were told that the landscape often changes
              dramatically between December and February,
              when heavy snowfall can cover the upper reaches
              in white.
            </p>

          </section>

          {/* BABA MANDIR */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              STOP 05 · HISTORY AND REMEMBRANCE
            </span>

            <h2>Old Baba Mandir</h2>

            <p>
              Along the route, we passed Old Baba Mandir,
              situated at an altitude of approximately
              13,123 feet.
            </p>

            <p>
              The shrine is dedicated to Baba Harbhajan Singh,
              a soldier of the Indian Army's 23rd Regiment
              who died in 1968.
            </p>

            <p>
              The original bunker associated with Baba
              Harbhajan Singh is an important part of the
              site's history. The temple is maintained by
              the Indian Army.
            </p>

            <p>
              This stop added a historical and commemorative
              dimension to a journey otherwise dominated
              by mountains, forests and lakes.
            </p>

          </section>

          {/* GANGTOK */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              STOP 06 · SIKKIM
            </span>

            <h2>Gangtok: Ending the Journey on a Peaceful Note</h2>

            <p>
              Our trip concluded in Gangtok, the capital
              of Sikkim.
            </p>

            <p>
              One of the highlights here was a visit to
              Rumtek Monastery, the largest monastery in
              Sikkim and an important centre for the study
              and practice of Buddhism.
            </p>

            <p>
              The monastery is known for its Tibetan
              architectural style and its religious
              significance.
            </p>

            <p>
              Visiting Rumtek offered a peaceful conclusion
              to a trip that had taken us through forest
              landscapes, mountain villages, high-altitude
              lakes and the dramatic Himalayan terrain.
            </p>

          </section>

          {/* CONCLUSION */}
          <section className="wanderlust-story-section">

            <h2>A Memorable Journey Through the Himalayas</h2>

            <p>
              Overall, it was a memorable travel experience
              that offered a close view of the beauty of
              Sikkim, nestled in the lap of the mighty Himalayas.
            </p>

            <p>
              From the sunrise at Rachela Peak to the winding
              Silk Route, from the quiet beauty of Aritar
              to the cultural atmosphere of Rumtek Monastery,
              each stop contributed something different to
              the journey.
            </p>

            <p>
              The experience was a reminder that travel is
              not only about reaching a destination. It is
              also about appreciating the landscapes, stories
              and moments encountered along the way.
            </p>

          </section>

          {/* AUTHOR */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              ABOUT THE AUTHOR
            </span>

            <h2>BD Chatterjee</h2>

            <p>
              BD Chatterjee is a financial expert and
              best-selling author with more than 40 years
              of industry experience.
            </p>

            <p>
              His professional expertise includes financial
              due diligence, business valuation, corporate
              restructuring and risk management. He has
              also worked as a Chartered Accountant and
              senior finance executive.
            </p>

            <p>
              Travel and nature photography are among
              his interests. He enjoys exploring remote
              Himalayan destinations and the forests of
              India, away from crowded urban life.
            </p>

          </section>

          {/* TAGS */}
          <div className="wanderlust-story-tags">
            <span>Neora Valley</span>
            <span>East Sikkim</span>
            <span>Silk Route</span>
            <span>Kanchenjunga</span>
            <span>Rachela Peak</span>
            <span>Aritar</span>
            <span>Gangtok</span>
            <span>SilverGenie Wanderlust</span>
          </div>

          {/* STORY NAVIGATION */}
          <div className="wanderlust-story-navigation">

            <Link to="/wanderlust/hornbill-festival">
              ← Previous Story
            </Link>

            <Link to="/wanderlust/meghalaya">
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

            <h3>Explore the Himalayan Route</h3>

            <ul>
              <li>Neora Valley National Park</li>
              <li>Rachela Peak sunrise</li>
              <li>Aritar Lake</li>
              <li>Padamchen village</li>
              <li>East Sikkim Silk Route</li>
              <li>Lake Kupup</li>
              <li>Changu (Tsongmo) Lake</li>
              <li>Nathang Valley</li>
              <li>Old Baba Mandir</li>
              <li>Rumtek Monastery</li>
            </ul>

          </div>

          <div className="wanderlust-sidebar-card">

            <span className="wanderlust-eyebrow">
              NORTHEAST DIARIES
            </span>

            <h3>More Stories, More Discoveries</h3>

            <p>
              Explore journeys through Northeast India's
              mountain landscapes, cultural heritage
              and unforgettable destinations.
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
              Discover travel experiences designed to
              help you explore new places with comfort
              and thoughtful support.
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

export default NeoraValleySilkRoute;