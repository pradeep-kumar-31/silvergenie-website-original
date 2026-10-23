import React from "react";
import { Link } from "react-router-dom";
import "../../styles/WanderlustArticle.css";

const ARTICLE_IMAGE =
  `${import.meta.env.BASE_URL}image/blog/kolkata-faith.png`;

function KolkataFaithHistory() {
  return (
    <main className="wanderlust-article-page tripura-article-page">
      {/* BREADCRUMB */}
      <nav
        className="wanderlust-article-breadcrumb"
        aria-label="Breadcrumb"
      >
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/wanderlust-diaries">
          Wanderlust Diaries
        </Link>
        <span>/</span>
        <span aria-current="page">Kolkata</span>
      </nav>

      {/* ARTICLE HEADER */}
      <header className="wanderlust-article-header tripura-article-header">
        <span className="tripura-article-eyebrow">
          SILVERGENIE WANDERLUST DIARIES
        </span>

        <h1>
          A Journey Through Faith, History, and Kolkata’s Essence
        </h1>

        <div className="wanderlust-article-meta">
          <span>December 10, 2025</span>
          <span className="wanderlust-article-meta-divider">|</span>
          <span>By Wanderlust Diaries</span>
        </div>
      </header>

      {/* FEATURED IMAGE */}
      <div className="tripura-featured-image">
        <img
          src={ARTICLE_IMAGE}
          alt="A Journey Through Faith, History, and Kolkata’s Essence"
          fetchPriority="high"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <div className="tripura-featured-overlay">
          <span>FAITH · HISTORY · HERITAGE</span>
          <p>
            Discovering Kolkata through its sacred places,
            history, culture, and people.
          </p>
        </div>
      </div>

      {/* ARTICLE CONTENT */}
      <article className="wanderlust-article-content tripura-article-content">
        <p>
          “Joto Mot Toto Poth” — as many minds, so many paths —
          is a reminder I return to often. Truth does not demand
          uniformity. Each of us approaches the sacred from a
          different lived reality, and that diversity is not
          confusion but grace. We don’t need to walk identical
          roads to arrive at truth; we only need to walk our own
          with honesty. Different paths don’t dilute truth —
          they enrich it.
        </p>

        <p>
          Our Kolkata journey was an opportunity to explore
          faith, history, and the cultural spirit of a city
          whose heritage continues to shape the lives of its
          people.
        </p>

        {/* KALIGHAT */}
        <section className="tripura-article-section">
          <h2>Kalighat Temple: A Place of Devotion</h2>

          <p>
            Our journey brought us to Kalighat Temple, one of
            Kolkata’s most significant spiritual destinations.
            The temple is associated with Goddess Kali and
            attracts devotees seeking blessings and a deeper
            connection with their faith.
          </p>

          <p>
            The atmosphere around the temple reflects the
            devotion that has continued through generations.
            It offered a meaningful beginning to our exploration
            of Kolkata’s spiritual heritage.
          </p>
        </section>

        {/* SISTER NIVEDITA */}
        <section className="tripura-article-section">
          <h2>Sister Nivedita’s House: A Legacy of Service</h2>

          <p>
            We also explored places associated with Sister
            Nivedita, whose life and work remain closely
            connected with Kolkata’s history.
          </p>

          <p>
            Her commitment to education, service, and the
            betterment of society continues to inspire people.
            Visiting these heritage spaces offered an opportunity
            to reflect on the lives that have helped shape the
            city.
          </p>
        </section>

        {/* MAA ER BARI */}
        <section className="tripura-article-section">
          <h2>Baghbazar Maa-er Bari</h2>

          <p>
            Our journey continued to Baghbazar Maa-er Bari,
            associated with Sri Sarada Devi. The place holds
            special significance for devotees and visitors
            interested in the spiritual history of Bengal.
          </p>

          <p>
            The visit added another perspective to our
            exploration of faith and the people whose lives
            continue to inspire generations.
          </p>
        </section>

        {/* HERITAGE MUSEUM */}
        <section className="tripura-article-section">
          <h2>Sister Nivedita Heritage Museum</h2>

          <p>
            The Sister Nivedita Heritage Museum helped connect
            the places we visited with the wider historical
            story of Kolkata.
          </p>

          <p>
            Heritage spaces like these allow visitors to
            understand the contributions of people who worked
            for education, social change, and cultural exchange.
          </p>
        </section>

        {/* DAKSHINESWAR */}
        <section className="tripura-article-section">
          <h2>Dakshineswar Temple: Faith Beside the Ganges</h2>

          <p>
            Dakshineswar Temple was another important stop on
            our spiritual journey. Located beside the Hooghly
            River, the temple is closely associated with
            Goddess Kali and the life of Sri Ramakrishna.
          </p>

          <p>
            The temple complex and its riverside setting offer
            visitors a place to pause, reflect, and experience
            one of the best-known spiritual landmarks of Bengal.
          </p>
        </section>

        {/* BELUR MATH */}
        <section className="tripura-article-section">
          <h2>Belur Math: Aarti and Reflection</h2>

          <p>
            Our visit to Belur Math brought another dimension
            to the journey. The headquarters of the Ramakrishna
            Math and Ramakrishna Mission is known for its
            spiritual atmosphere and message of harmony.
          </p>

          <p>
            Attending the evening aarti offered a quiet moment
            of reflection after a day spent exploring Kolkata’s
            sacred and historic places.
          </p>
        </section>

        {/* FOOD AND TOGETHERNESS */}
        <section className="tripura-article-section">
          <h2>Kolkata’s Flavours and Shared Moments</h2>

          <p>
            No Kolkata experience feels complete without
            enjoying its food. Mishti and a meal at
            6 Ballygunge Place added a warm, memorable finish
            to the day.
          </p>

          <p>
            Beyond the places we visited, the shared
            conversations and experiences made the journey
            special. Exploring the city together gave us
            opportunities to appreciate its history while
            creating new memories.
          </p>
        </section>

        {/* CONCLUSION */}
        <section className="tripura-article-section tripura-conclusion">
          <h2>Carrying Kolkata in Our Hearts</h2>

          <p>
            Kolkata brought together devotion, history,
            heritage, food, and the warmth of shared
            experiences. Each place offered a different
            perspective on the city and its people.
          </p>

          <p className="wanderlust-article-closing">
            Kolkata has that gift. It doesn’t just show you
            its heritage, it lets you carry a piece of its
            heart back with you.
          </p>
        </section>
      </article>

      {/* ARTICLE TAG */}
      <div className="wanderlust-article-tags tripura-article-tags">
        <span>Explore:</span>

        <Link to="/wanderlust-diaries">
          Spiritual Diaries
        </Link>
      </div>

      {/* DISCLAIMER */}
      <aside className="wanderlust-article-disclaimer">
        <strong>Disclaimer:</strong>{" "}
        The views and opinions expressed in this blog are
        solely those of the author. The blog page is protected
        under SilverGenie’s copyright, while the written
        content remains the intellectual property of the
        author. Reproduction, distribution, or use of the
        content in any form requires the author’s prior
        consent. Unauthorized use or infringement will be
        subject to legal action.
      </aside>

      {/* RELATED ARTICLES */}
      <section className="tripura-article-section">
        <h2>Continue Exploring Wanderlust Diaries</h2>

        <div className="wanderlust-article-tags">
          <Link to="/wanderlust/neora-valley-silk-route">
            Trip to Neora Valley and East Sikkim via the Silk Route
          </Link>

          <Link to="/wanderlust/white-rann-moon">
            Under the White Rann Moon
          </Link>
        </div>
      </section>

      {/* STORY NAVIGATION IS ADDED BY App.jsx */}
    </main>
  );
}

export default KolkataFaithHistory;