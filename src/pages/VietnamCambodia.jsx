import React from "react";
import { Link } from "react-router-dom";
import "../styles/WanderlustDiaries.css";

const imageBase = `${import.meta.env.BASE_URL}image/blog/`;

function VietnamCambodia() {
  return (
    <main className="wanderlust-story-page">

      {/* HERO SECTION */}
      <section className="wanderlust-story-hero">
        <div className="wanderlust-story-hero-content">

          <span className="wanderlust-eyebrow">
            SILVERGENIE WANDERLUST DIARIES
          </span>

          <span className="wanderlust-story-category">
            ASIA, AFRICA & EUROPE
          </span>

          <h1>
            Under the Same Sky:
            <br />
            Notes from Vietnam and Cambodia
          </h1>

          <p className="wanderlust-story-lead">
            From Hanoi's charming streets and Ha Long Bay's misty
            waters to Hoi An's glowing lanterns and the ancient
            temples of Angkor — a journey where culture, connection
            and thoughtful care came together.
          </p>

          <div className="wanderlust-story-meta">
            <span>📅 October 27, 2025</span>
            <span>✍️ By Kuhu Adhikary</span>
          </div>

          <a
            href="#vietnam-cambodia-story"
            className="wanderlust-sidebar-button"
          >
            Explore the Journey ↓
          </a>

        </div>
      </section>

      {/* FEATURED IMAGE */}
      <section className="wanderlust-story-featured-image">
        <img
          src={`${imageBase}vietnam-cambodia.png`}
          alt="A journey through Vietnam and Cambodia"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </section>

      {/* MAIN STORY */}
      <section
        className="wanderlust-story-layout"
        id="vietnam-cambodia-story"
      >

        <article className="wanderlust-story-content">

          <p className="wanderlust-story-lead">
            Some journeys are remembered for the places we visit.
            Others stay with us because of the feelings they create.
            This journey through Vietnam and Cambodia brought
            together historic landmarks, local culture, memorable
            food and moments made special by thoughtful planning.
          </p>

          {/* HANOI */}
          <section className="wanderlust-story-section">
            <h2>01. Hanoi — A Morning of Coffee and Discovery</h2>

            <p>
              Hanoi welcomed the travellers with golden morning
              light and the relaxed atmosphere of a local café
              called Noted. Strong coffee, quiet conversations
              and the excitement of a new destination created
              a lovely beginning.
            </p>

            <p>
              Nearby, the French Opera House stood as a reminder
              of the city's architectural heritage.
            </p>

            <p>
              The itinerary included accessible local walks,
              shorter transfers and trusted local partners.
              These arrangements allowed the travellers to
              explore comfortably without feeling rushed.
            </p>
          </section>

          {/* TRAIN STREET */}
          <section className="wanderlust-story-section">
            <h2>02. Hanoi Train Street — An Unforgettable View</h2>

            <p>
              The next stop was Hanoi's famous Train Street,
              where railway tracks run close to the surrounding
              homes and cafés.
            </p>

            <p>
              The unusual setting captured everyone's attention.
              With guidance from SilverGenie's Care Coach,
              the group reached an appropriate viewing point
              and could enjoy the experience with greater
              confidence.
            </p>

            <p>
              It was a reminder that memorable travel experiences
              are even better when visitors can explore their
              surroundings with appropriate guidance.
            </p>
          </section>

          {/* NINH BINH */}
          <section className="wanderlust-story-section">
            <h2>03. Ninh Binh — Where Nature Opens Up</h2>

            <p>
              Beyond Hanoi, Ninh Binh revealed a landscape of
              expansive fields, towering limestone formations
              and waterways reflecting the sky.
            </p>

            <p>
              A boat journey offered an opportunity to experience
              the scenery from the water. The arrangements
              included checking access requirements, assisted
              boarding and suitable restroom breaks.
            </p>

            <p>
              Inside the caves, the atmosphere became quiet
              and reflective. With practical arrangements
              taken care of, the travellers could concentrate
              on the natural beauty around them.
            </p>
          </section>

          {/* HA LONG BAY */}
          <section className="wanderlust-story-section">
            <h2>04. Ha Long Bay — A Landscape Wrapped in Mist</h2>

            <p>
              Ha Long Bay welcomed the group with misty views
              and a landscape that seemed to emerge gradually
              from the water.
            </p>

            <p>
              Local arrangements supported a smooth boarding
              experience, with attention to accessible cabins
              and safety briefings.
            </p>

            <p>
              As evening arrived, dinner on deck provided
              a peaceful opportunity to appreciate the
              surrounding scenery and enjoy the atmosphere
              at an unhurried pace.
            </p>
          </section>

          {/* DA NANG */}
          <section className="wanderlust-story-section">
            <h2>05. Da Nang — Between Mountains and Sea</h2>

            <p>
              In Da Nang, the energy of the city met the
              beauty of the coastline. One of the memorable
              highlights was the Golden Bridge, famous for
              its enormous stone hands appearing to hold
              the bridge above the landscape.
            </p>

            <p>
              Priority cable-car boarding, shaded resting
              points and personalised assistance helped
              travellers experience the attraction more
              comfortably.
            </p>

            <p>
              At the Marble Mountains, the guide helped
              the group explore the shrines and stone
              surroundings while accommodating different
              comfort levels and preferences for climbing.
            </p>
          </section>

          {/* HOI AN */}
          <section className="wanderlust-story-section">
            <h2>06. Hoi An — A Date with the Lanterns</h2>

            <p>
              Hoi An felt like poetry brought to life.
              Lanterns swayed above the river, gentle music
              filled the air, and the town offered a different
              rhythm from the larger cities.
            </p>

            <p>
              An earlier visit helped the group avoid some
              of the crowds. Wheel-assisted access and
              a local craft demonstration made it easier
              for everyone to participate in the experience.
            </p>

            <p>
              The glowing lanterns and riverside atmosphere
              created a particularly intimate and memorable
              moment of the journey.
            </p>
          </section>

          {/* SAIGON */}
          <section className="wanderlust-story-section">
            <h2>07. Saigon — A City Full of Energy</h2>

            <p>
              Saigon brought another kind of atmosphere:
              lively streets, scooters, conversations and
              the unmistakable rhythm of a busy city.
            </p>

            <p>
              The local guide balanced sightseeing with
              quieter tea breaks and wellness pauses,
              giving the travellers time to recharge
              between activities.
            </p>

            <p>
              The itinerary demonstrated how a thoughtfully
              planned journey can include lively urban
              experiences while leaving room for rest.
            </p>
          </section>

          {/* MEKONG DELTA */}
          <section className="wanderlust-story-section">
            <h2>08. Mekong Delta — Culture Along the Water</h2>

            <p>
              The Mekong Delta offered a different perspective
              on Vietnamese life. The journey included boat
              experiences arranged with easier boarding
              in mind.
            </p>

            <p>
              Meals were checked for allergy-related
              requirements in advance. Honey tea, folk songs
              and temple chants added cultural depth to
              the experience.
            </p>

            <p>
              Here, thoughtful coordination and local
              traditions came together, allowing the
              travellers to enjoy the destination with
              greater peace of mind.
            </p>
          </section>

          {/* CAMBODIA */}
          <section className="wanderlust-story-section">
            <h2>09. Cambodia — A Different World</h2>

            <p>
              Crossing into Cambodia felt like stepping
              into another world. Siem Reap offered a
              quieter atmosphere and a sense of history
              that shaped the next chapter of the journey.
            </p>

            <p>
              Cultural performances and temple visits
              were coordinated with attention to comfort,
              individual stamina and smooth transfers.
            </p>

            <p>
              These arrangements helped the group experience
              the destination while respecting the different
              needs and preferences of its travellers.
            </p>
          </section>

          {/* ANGKOR WAT */}
          <section className="wanderlust-story-section">
            <h2>10. Angkor Wat — Watching History Awaken</h2>

            <p>
              Before dawn, the travellers gathered for
              sunrise at Angkor Wat. A pre-arranged viewing
              area helped them avoid the most crowded
              parts of the experience.
            </p>

            <p>
              As daylight gradually illuminated the ancient
              temple, the moment felt deeply moving.
              One traveller whispered, "The world is awake
              again."
            </p>

            <p>
              Later, an Apsara dance performance brought
              another dimension of Cambodian culture to life.
              The graceful movements and traditional
              storytelling made the evening memorable.
            </p>
          </section>

          {/* SILVERGENIE ADVANTAGE */}
          <section className="wanderlust-story-section">
            <h2>The SilverGenie Advantage</h2>

            <p>
              From the first cup of coffee in Hanoi to
              sunrise at Angkor Wat, the journey brought
              together thoughtful planning, local knowledge
              and attention to individual comfort.
            </p>

            <p>
              Accessible arrangements, carefully coordinated
              transfers, appropriate rest periods and
              personalised assistance helped travellers
              focus on the experience rather than the
              logistics.
            </p>

            <p>
              This reflects SilverGenie's approach to
              <strong> care, accessibility and inclusivity </strong>
              — creating bespoke travel experiences that
              respect different needs while making room
              for discovery, culture and connection.
            </p>
          </section>

          {/* CONCLUSION */}
          <section className="wanderlust-story-section">
            <h2>Wonder Is Better When Shared</h2>

            <p>
              Vietnam and Cambodia offered much more than
              beautiful scenery and historic landmarks.
              They brought together local traditions,
              meaningful encounters and moments of quiet
              reflection.
            </p>

            <p>
              The journey showed that travel does not
              need to be rushed to be extraordinary.
              With thoughtful planning and the right
              support, every traveller can have more
              opportunities to connect with a destination.
            </p>

            <p>
              Sometimes, wonder does not need to be chased.
              Sometimes, it finds us exactly where we stand.
            </p>
          </section>

          {/* TAGS */}
          <div className="wanderlust-story-tags">
            <span>Vietnam</span>
            <span>Cambodia</span>
            <span>Hanoi</span>
            <span>Ha Long Bay</span>
            <span>Hoi An</span>
            <span>Angkor Wat</span>
            <span>Accessible Travel</span>
          </div>

          {/* PREVIOUS / NEXT */}
          <div className="wanderlust-story-navigation">

            <Link to="/wanderlust/darjeeling-kalimpong-kurseong">
              <span>← Previous Story</span>
              <strong>
                Darjeeling, Kalimpong and Kurseong
              </strong>
            </Link>

            <Link to="/wanderlust/egypt">
              <span>Next Story →</span>
              <strong>
                Egypt: Stories of and from People Who Have Walked with Time
              </strong>
            </Link>

          </div>
        </article>

        {/* SIDEBAR */}
        <aside className="wanderlust-story-sidebar">

          <div className="wanderlust-sidebar-card">
            <span className="wanderlust-eyebrow">
              EXPLORE ASIA
            </span>

            <h3>
              Discover More Than Destinations
            </h3>

            <p>
              Explore journeys that bring together local
              culture, historical landmarks, meaningful
              encounters and thoughtful travel planning.
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
              Discover personal travel stories from
              India and destinations around the world.
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

export default VietnamCambodia;