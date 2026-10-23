import React from "react";
import { Link } from "react-router-dom";
import "../styles/WanderlustDiaries.css";

const imageBase = `${import.meta.env.BASE_URL}image/blog/`;

function DarjeelingKalimpongKurseong() {
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
            Reliving the Joy:
            <br />
            A Journey Through Darjeeling,
            <br />
            Kalimpong, and Kurseong
          </h1>

          <p className="wanderlust-story-lead">
            A heartwarming journey through the hills of Darjeeling,
            Kalimpong and Kurseong, filled with mountain air,
            shared stories, laughter and meaningful companionship.
          </p>

          <div className="wanderlust-story-meta">
            <span>📅 April 28, 2025</span>
            <span>✍️ By Debdas Chatterjee</span>
          </div>

          <a
            href="#darjeeling-story"
            className="wanderlust-sidebar-button"
          >
            Explore the Story ↓
          </a>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      <section className="wanderlust-story-featured-image">
        <img
          src={`${imageBase}darjeeling-kalimpong-kurseong.png`}
          alt="Beautiful mountain scenery in Darjeeling, Kalimpong and Kurseong"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </section>

      {/* MAIN CONTENT */}
      <section
        className="wanderlust-story-layout"
        id="darjeeling-story"
      >
        <article className="wanderlust-story-content">
          <p className="wanderlust-story-lead">
            Looking back on this journey, I cannot help but smile
            at the vivid memories we brought home. The serene
            atmosphere of Darjeeling, the charm of Kalimpong's hills
            and the peaceful surroundings of Kurseong created a
            wonderful setting for exploration and togetherness.
          </p>

          {/* INTRODUCTION */}
          <section className="wanderlust-story-section">
            <h2>A Journey Filled with Simple Joys</h2>

            <p>
              Some journeys stay with us because of the places we
              visit. Others become special because of the people
              we meet and the moments we share along the way.
            </p>

            <p>
              This journey through Darjeeling, Kalimpong and Kurseong
              brought these experiences together. The beautiful
              surroundings provided the setting, while the company
              of fellow travellers made every day more memorable.
            </p>

            <p>
              The hills offered opportunities to explore at a gentle
              pace, enjoy the fresh mountain air and appreciate the
              beauty of the surroundings without rushing from one
              attraction to another.
            </p>
          </section>

          {/* DARJEELING */}
          <section className="wanderlust-story-section">
            <h2>01. Darjeeling — Serenity in the Hills</h2>

            <p>
              Darjeeling's serene atmosphere formed an important
              part of the journey. Its mountain surroundings
              offered a welcome opportunity to slow down, take
              in the scenery and enjoy being away from everyday
              routines.
            </p>

            <p>
              The experience was not only about sightseeing.
              It was also about appreciating the pauses between
              activities, sharing conversations and allowing
              the natural rhythm of the hills to shape the day.
            </p>
          </section>

          {/* KALIMPONG */}
          <section className="wanderlust-story-section">
            <h2>02. Kalimpong — The Charm of the Mountains</h2>

            <p>
              Kalimpong added its own charm to the experience.
              Its beautiful hill surroundings offered another
              setting in which to enjoy the landscape and the
              company of fellow travellers.
            </p>

            <p>
              A thoughtful travel pace allowed everyone to
              experience the journey without making every moment
              about reaching the next destination.
            </p>

            <p>
              Sometimes, the most memorable parts of a trip are
              the quiet moments when there is time to appreciate
              the scenery and connect with the people around us.
            </p>
          </section>

          {/* KURSEONG */}
          <section className="wanderlust-story-section">
            <h2>03. Kurseong — Peaceful Moments Together</h2>

            <p>
              Kurseong completed the journey through these
              remarkable hill destinations. Its peaceful
              atmosphere contributed to the relaxed rhythm
              of the overall experience.
            </p>

            <p>
              Moving through the hills offered a reminder that
              travel does not always need to be hurried. There
              is value in taking time to enjoy a destination,
              pause for a conversation and simply be present.
            </p>
          </section>

          {/* TEA AND PAKODA */}
          <section className="wanderlust-story-section">
            <h2>Tea, Pakodas and Stories</h2>

            <p>
              Among the most memorable moments were the simple
              tea and pakoda sessions in the cosy corners of
              the hotel.
            </p>

            <p>
              These breaks became opportunities to share stories
              that ranged from humorous to wonderfully unusual.
              Conversations flowed naturally, and laughter
              brought everyone closer together.
            </p>

            <p>
              After a day of exploring and sightseeing, these
              relaxed gatherings were a special pleasure.
              They showed how a cup of tea, a plate of snacks
              and good company can become highlights of a trip.
            </p>
          </section>

          {/* FRIENDSHIP */}
          <section className="wanderlust-story-section">
            <h2>Friendship Beyond Age</h2>

            <p>
              One of the most meaningful parts of the journey
              was the companionship. Travellers from different
              backgrounds came together, sharing experiences,
              smiles and genuine connections.
            </p>

            <p>
              Despite their years, the group members brought
              remarkable energy and enthusiasm to the journey.
              Their conversations and shared laughter created
              a warm atmosphere throughout the trip.
            </p>

            <p>
              The experience offered a beautiful reminder:
              age does not take away our ability to discover
              new places, make friends and enjoy life.
            </p>
          </section>

          {/* COMFORT */}
          <section className="wanderlust-story-section">
            <h2>A Comfortable and Thoughtful Travel Pace</h2>

            <p>
              The itinerary followed a gentle rhythm, balancing
              sightseeing with time to rest, enjoy the fresh air
              and appreciate the surroundings.
            </p>

            <p>
              Small gestures of care added comfort to the journey.
              The days flowed smoothly, allowing travellers to
              focus on their experiences and the company they
              shared.
            </p>

            <p>
              From the first morning to the final drop-off at
              the residence of Tulsidas and Archana Mandal,
              the journey was remembered for its ease, laughter
              and quiet moments of reflection.
            </p>
          </section>

          {/* CONCLUSION */}
          <section className="wanderlust-story-section">
            <h2>Taking Home Memories That Last</h2>

            <p>
              Looking back, this journey was much more than
              a tour of three hill destinations. It was a
              collection of heartfelt conversations, shared
              laughter and opportunities to appreciate nature
              at a comfortable pace.
            </p>

            <p>
              Returning home with happy memories and lifted
              spirits, there was already a sense of anticipation
              for future adventures — more mountains, more
              stories and more moments of simple joy.
            </p>

            <p>
              The greatest souvenir from a journey is often
              not something we buy. It is the happiness,
              friendships and memories that we carry home.
            </p>
          </section>

          {/* TAGS */}
          <div className="wanderlust-story-tags">
            <span>Darjeeling</span>
            <span>Kalimpong</span>
            <span>Kurseong</span>
            <span>Mountain Travel</span>
            <span>Senior Travel</span>
            <span>Travel with Care</span>
          </div>

          {/* PREVIOUS AND NEXT */}
          <div className="wanderlust-story-navigation">
            <Link to="/wanderlust/kerala">
              <span>← Previous Story</span>
              <strong>My Kerala Diary</strong>
            </Link>

            <Link to="/wanderlust/vietnam-cambodia">
              <span>Next Story →</span>
              <strong>Under the Same Sky: Vietnam and Cambodia</strong>
            </Link>
          </div>
        </article>

        {/* SIDEBAR */}
        <aside className="wanderlust-story-sidebar">
          <div className="wanderlust-sidebar-card">
            <span className="wanderlust-eyebrow">
              EXPLORE THE HILLS
            </span>

            <h3>Discover the Joy of Slow Travel</h3>

            <p>
              Enjoy meaningful journeys with time for beautiful
              scenery, local experiences and connections with
              fellow travellers.
            </p>

            <Link
              to="/travel-with-care"
              className="wanderlust-sidebar-button"
            >
              Explore Journeys →
            </Link>
          </div>

          <div className="wanderlust-sidebar-card">
            <h3>More Wanderlust Diaries</h3>

            <p>
              Explore personal stories from India's mountains,
              cultural destinations and journeys around the world.
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

export default DarjeelingKalimpongKurseong;