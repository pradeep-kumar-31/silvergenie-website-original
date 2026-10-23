import React from "react";
import { Link } from "react-router-dom";
import "../styles/WanderlustDiaries.css";

const imageBase = `${import.meta.env.BASE_URL}image/blog/`;

function Japan() {
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
            Walking Backwards Through Blossoms:
            <br />
            Our Story in Japan
          </h1>

          <p className="wanderlust-story-lead">
            From the excitement of Tokyo DisneySea to the beauty
            of Japanese blossoms, discover a journey of shared
            experiences, cultural discoveries and connections
            that last beyond the trip.
          </p>

          <div className="wanderlust-story-meta">
            <span>📅 April 13, 2026</span>
            <span>✍️ By Wanderlust Diaries</span>
          </div>

          <a
            href="#japan-story"
            className="wanderlust-sidebar-button"
          >
            Explore the Journey ↓
          </a>

        </div>
      </section>

      {/* FEATURED IMAGE */}
      <section className="wanderlust-story-featured-image">
        <img
          src={`${imageBase}japan.png`}
          alt="Japanese cherry blossoms during spring"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </section>

      {/* MAIN STORY */}
      <section
        className="wanderlust-story-layout"
        id="japan-story"
      >

        <article className="wanderlust-story-content">

          <p className="wanderlust-story-lead">
            おはよう (Ohayō). Good morning.

            That simple Japanese greeting stayed with us from
            our very first day in Japan. Even a week after
            returning, it continued to echo through our mornings,
            bringing back memories of a journey filled with
            discovery, laughter and togetherness.
          </p>

          {/* INTRODUCTION */}
          <section className="wanderlust-story-section">
            <h2>A Journey That Began with Excitement</h2>

            <p>
              Arriving in Japan brought the unmistakable excitement
              of experiencing a new country together. There was
              so much to discover, from its distinctive culture
              and everyday customs to the attractions that make
              Japan special.
            </p>

            <p>
              The journey was not simply about visiting places.
              It was also about learning to move together as a
              group, sharing discoveries and allowing friendships
              to grow naturally along the way.
            </p>

            <p>
              Sometimes group members explored separately;
              at other times, everyone came together again.
              That flexible rhythm became part of the experience.
            </p>
          </section>

          {/* TOKYO DISNEYSEA */}
          <section className="wanderlust-story-section">
            <h2>01. Tokyo DisneySea — Where Joy Brought Us Together</h2>

            <p>
              Our Japanese adventure began at Tokyo DisneySea,
              a destination where excitement came easily.
              The atmosphere encouraged everyone to embrace
              the moment and enjoy the experience.
            </p>

            <p>
              What made the day especially memorable was the
              way strangers gradually began to feel familiar.
              Shared excitement created natural opportunities
              for conversation, laughter and companionship.
            </p>

            <p>
              Group members moved at their own pace, sometimes
              separating to enjoy different experiences before
              meeting again. Despite these individual choices,
              a shared sense of connection held the group together.
            </p>
          </section>

          {/* SHARED EXPERIENCES */}
          <section className="wanderlust-story-section">
            <h2>02. Discovering Japan Together</h2>

            <p>
              Exploring an unfamiliar country as a group creates
              opportunities to see a destination through different
              perspectives. Each person notices something unique,
              asks different questions and brings their own
              experiences into the conversation.
            </p>

            <p>
              These exchanges can transform ordinary sightseeing
              into something more meaningful. A place becomes
              memorable not only because of what we see, but
              also because of the people with whom we experience it.
            </p>

            <p>
              Japan gave the group opportunities to build those
              connections while discovering a culture different
              from their own.
            </p>
          </section>

          {/* JAPANESE CULTURE */}
          <section className="wanderlust-story-section">
            <h2>03. Little Moments of Cultural Discovery</h2>

            <p>
              Travelling in another country often begins with
              small observations: the words people use to greet
              one another, the rhythm of daily life and the
              customs that shape everyday interactions.
            </p>

            <p>
              In Japan, even a simple greeting such as
              <em> Ohayō </em> became a memorable part of the
              journey. Repeating the word brought a little piece
              of Japan into each new morning.
            </p>

            <p>
              These small cultural discoveries are part of what
              makes travel rewarding. They stay with us long
              after photographs have been put away.
            </p>
          </section>

          {/* BLOSSOMS */}
          <section className="wanderlust-story-section">
            <h2>04. Walking Backwards Through Blossoms</h2>

            <p>
              Blossoms evoke a special feeling in Japan.
              Their delicate beauty reminds us to notice
              moments that may last only a short time.
            </p>

            <p>
              The image of walking backwards through blossoms
              captures the reflective spirit of this journey:
              looking back at experiences that have already
              passed while carrying their memories into
              the days ahead.
            </p>

            <p>
              Travel often works this way. We move forward
              through unfamiliar places, only to discover
              later that some of the most important moments
              are the ones we keep revisiting in our minds.
            </p>
          </section>

          {/* GROUP CONNECTION */}
          <section className="wanderlust-story-section">
            <h2>05. From Strangers to Travel Companions</h2>

            <p>
              One of the most meaningful aspects of a group
              journey is watching people become more comfortable
              with one another.
            </p>

            <p>
              Shared experiences create common memories.
              Conversations become easier, familiar faces
              begin to feel reassuring, and the group develops
              its own rhythm.
            </p>

            <p>
              In Japan, the balance between individual
              exploration and coming together helped create
              a sense of companionship without requiring
              everyone to experience every moment in exactly
              the same way.
            </p>
          </section>

          {/* REFLECTION */}
          <section className="wanderlust-story-section">
            <h2>06. The Memories That Travel Home with Us</h2>

            <p>
              A journey does not end when the flight home
              lands. Experiences often continue to shape
              our everyday lives through the memories,
              habits and feelings we carry back.
            </p>

            <p>
              For our group, the greeting heard on the first
              day continued to return a week after leaving Japan.
              It became a small reminder of the people,
              discoveries and moments that had made the
              journey special.
            </p>

            <p>
              Sometimes, one familiar word is enough to bring
              an entire travel experience back to life.
            </p>
          </section>

          {/* SILVERGENIE */}
          <section className="wanderlust-story-section">
            <h2>The Spirit of SilverGenie Wanderlust</h2>

            <p>
              Thoughtful travel is about more than reaching
              a destination. It creates opportunities for
              people to explore, learn and form meaningful
              connections at a comfortable pace.
            </p>

            <p>
              SilverGenie's Wanderlust experiences aim to
              make journeys more comfortable through planning,
              coordination and attention to travellers'
              individual requirements.
            </p>

            <p>
              The Japan story reminds us that the value of
              a journey is found not only in its famous
              attractions, but also in the shared moments
              that make the experience personal.
            </p>
          </section>

          {/* CONCLUSION */}
          <section className="wanderlust-story-section">
            <h2>Ohayō — Until the Next Adventure</h2>

            <p>
              Japan left us with more than memories of
              destinations. It left us with a greeting
              that continued to bring the journey back
              into our mornings.
            </p>

            <p>
              The excitement of Tokyo DisneySea, the bonds
              formed along the way and the reflections
              that followed became part of a story worth
              remembering.
            </p>

            <p>
              Every journey eventually becomes a collection
              of moments we revisit. Sometimes, all it takes
              to return to them is a simple word:
              <strong> Ohayō.</strong>
            </p>
          </section>

          {/* TAGS */}
          <div className="wanderlust-story-tags">
            <span>Japan</span>
            <span>Tokyo</span>
            <span>Tokyo DisneySea</span>
            <span>Cherry Blossoms</span>
            <span>Japanese Culture</span>
            <span>Group Travel</span>
            <span>SilverGenie Wanderlust</span>
          </div>

          {/* PREVIOUS / NEXT */}
          <div className="wanderlust-story-navigation">

            <Link to="/wanderlust/egypt">
              <span>← Previous Story</span>
              <strong>
                Egypt: Stories of and from People Who Have Walked with Time
              </strong>
            </Link>

            <Link to="/wanderlust/bhutan">
              <span>Next Story →</span>
              <strong>Bhutan Through the Comfort of Care</strong>
            </Link>

          </div>
        </article>

        {/* SIDEBAR */}
        <aside className="wanderlust-story-sidebar">

          <div className="wanderlust-sidebar-card">
            <span className="wanderlust-eyebrow">
              DISCOVER JAPAN
            </span>

            <h3>A Journey of Culture and Connection</h3>

            <p>
              Discover a travel experience shaped by cultural
              exploration, shared memories and the joy of
              discovering somewhere new.
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
              Explore meaningful travel stories from Asia,
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

export default Japan;