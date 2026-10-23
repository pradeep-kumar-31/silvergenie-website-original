import React from "react";
import { Link } from "react-router-dom";
import "../styles/WanderlustDiaries.css";

const imageBase = `${import.meta.env.BASE_URL}image/blog/`;

function Kerala() {
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

          <h1>My Kerala Diary</h1>

          <p className="wanderlust-story-lead">
            From Kochi's historic streets and Munnar's tea gardens
            to Thekkady's cultural performances and Alleppey's
            peaceful backwaters — a journey of discovery, adventure
            and unforgettable memories.
          </p>

          <div className="wanderlust-story-meta">
            <span>📅 September 14, 2025</span>
            <span>✍️ By Namita Adhikary</span>
          </div>

          <a
            href="#kerala-story"
            className="wanderlust-sidebar-button"
          >
            Explore the Story <span>↓</span>
          </a>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      <section className="wanderlust-story-featured-image">
        <img
          src={`${imageBase}kerala.png`}
          alt="Kerala's beautiful green landscapes and backwaters"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </section>

      {/* STORY LAYOUT */}
      <section
        className="wanderlust-story-layout"
        id="kerala-story"
      >
        <article className="wanderlust-story-content">
          <p className="wanderlust-story-lead">
            "I still can't believe I was in Kerala!" For Namita
            Adhikary, this journey was about more than visiting new
            places. It was an opportunity to try new adventures,
            step beyond personal boundaries and collect memories
            she had never imagined experiencing.
          </p>

          {/* KOCHI */}
          <section className="wanderlust-story-section">
            <h2>01. Kochi — Where the Adventure Began</h2>

            <p>
              The journey began when the group landed in Kochi on
              September 10. A comforting breakfast of idli, sambar
              and filter coffee provided a warm welcome and helped
              everyone recover from the journey.
            </p>

            <p>
              The exploration continued through Fort Kochi, the
              gardens of Mattancherry Palace and the historic Jewish
              streets. The iconic Chinese fishing nets offered another
              glimpse into the region's distinctive heritage.
            </p>

            <p>
              Lunch at Abad Hotel became a memorable highlight.
              Namita particularly enjoyed the flavourful fish and
              soft parottas, remembering the meal as one of the
              best she had ever experienced.
            </p>
          </section>

          {/* MUNNAR */}
          <section className="wanderlust-story-section">
            <h2>02. Munnar — Tea Gardens and Mountain Air</h2>

            <p>
              From Kochi, the journey continued towards Munnar.
              Rolling hills, expansive tea gardens and fresh
              mountain air created a peaceful change of scenery.
            </p>

            <p>
              Namita was fascinated by the variety of plants growing
              in the region, including jackfruit trees, cardamom,
              coconuts and pineapples.
            </p>

            <p>
              A scenic walk followed by an exciting speedboat ride
              became one of the highlights of her Munnar experience.
              The combination of natural beauty and adventure made
              the stop especially memorable.
            </p>
          </section>

          {/* THEKKADY */}
          <section className="wanderlust-story-section">
            <h2>03. Thekkady — Trying Something New</h2>

            <p>
              The next destination was Thekkady. On the way,
              Namita decided to try something she had never
              experienced before: an elephant ride.
            </p>

            <p>
              Although she initially felt hesitant, she embraced
              the experience with excitement. For her, it became
              a personal milestone — a reminder that trying
              something unfamiliar can lead to unexpected joy.
            </p>

            <p>
              After checking into the hotel and having lunch,
              the group headed out for another boat ride.
              The day ended with a relaxing tea break, providing
              a peaceful pause after a day full of activities.
            </p>
          </section>

          {/* CULTURE */}
          <section className="wanderlust-story-section">
            <h2>04. A Cultural Evening to Remember</h2>

            <p>
              That evening brought two remarkable performances.
              Namita finally witnessed Kalaripayattu, Kerala's
              traditional martial art, followed by a Kathakali show.
            </p>

            <p>
              Kathakali had long been something she wanted to see
              in person. Experiencing the performers' expressions,
              movements and graceful storytelling was a dream come
              true.
            </p>

            <p>
              The performance captivated her so much that she even
              found herself wishing she could join the artists on
              stage.
            </p>
          </section>

          {/* ALLEPPEY */}
          <section className="wanderlust-story-section">
            <h2>05. Alleppey — Finding Peace on the Backwaters</h2>

            <p>
              The final leg of the journey led to Alleppey after
              a four-hour drive. Here, the group boarded a houseboat
              and began gliding through Kerala's tranquil backwaters.
            </p>

            <p>
              Sitting on the upper deck with a cup of tea while
              enjoying the gentle breeze became a moment of pure
              relaxation.
            </p>

            <p>
              The experience also brought another first for Namita:
              her very first spa treatment. It was something she
              had wanted to try for a long time, making the final
              stop even more special.
            </p>
          </section>

          {/* COMPANIONSHIP */}
          <section className="wanderlust-story-section">
            <h2>06. The People Who Made the Journey Special</h2>

            <p>
              Beyond the destinations, the people travelling
              together made the experience richer. The warmth,
              laughter and companionship of the cohort members
              added another layer of happiness to every day.
            </p>

            <p>
              Shared experiences often become some of the most
              treasured parts of a holiday. In Namita's diary,
              the memories of people and places are closely
              connected.
            </p>
          </section>

          {/* CONCLUSION */}
          <section className="wanderlust-story-section">
            <h2>A Journey Etched in the Heart</h2>

            <p>
              Looking back, Namita feels grateful for every part
              of the experience — from Kerala's delicious food
              and captivating cultural performances to its green
              hills and peaceful houseboat journeys.
            </p>

            <p>
              The trip gave her opportunities to try new things,
              discover unfamiliar places and enjoy the company
              of fellow travellers.
            </p>

            <p>
              Kerala was not simply a holiday. It became a collection
              of memories that she would carry with her long after
              returning home.
            </p>
          </section>

          {/* TAGS */}
          <div className="wanderlust-story-tags">
            <span>Kerala</span>
            <span>Kochi</span>
            <span>Munnar</span>
            <span>Thekkady</span>
            <span>Alleppey</span>
            <span>Travel Experiences</span>
          </div>

          {/* PREVIOUS / NEXT */}
          <div className="wanderlust-story-navigation">
            <Link to="/wanderlust/taj-mahal">
              <span>← Previous Story</span>
              <strong>My Solo Travel Story at the Taj Mahal</strong>
            </Link>

            <Link to="/wanderlust/darjeeling-kalimpong-kurseong">
              <span>Next Story →</span>
              <strong>
                Reliving the Joy: Darjeeling, Kalimpong and Kurseong
              </strong>
            </Link>
          </div>
        </article>

        {/* SIDEBAR */}
        <aside className="wanderlust-story-sidebar">
          <div className="wanderlust-sidebar-card">
            <span className="wanderlust-eyebrow">
              DISCOVER KERALA
            </span>

            <h3>Nature, Culture and New Experiences</h3>

            <p>
              Explore a journey through historic streets, misty
              hills, traditional performances and peaceful backwaters.
            </p>

            <Link
              to="/travel-with-care"
              className="wanderlust-sidebar-button"
            >
              Explore Journeys →
            </Link>
          </div>

          <div className="wanderlust-sidebar-card">
            <h3>More Travel Stories</h3>

            <p>
              Discover more personal journeys, cultural experiences
              and memorable destinations in the SilverGenie diaries.
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

export default Kerala;