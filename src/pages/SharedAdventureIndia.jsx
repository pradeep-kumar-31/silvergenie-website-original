import { Link } from "react-router-dom";
import "../styles/SharedAdventureIndia.css";

const images = {
  hero: "https://www.yoursilvergenie.com/wp-content/uploads/2026/03/Slow-Exploration-and-Friendship-in-India.jpg",
  gallery:
    "https://www.yoursilvergenie.com/wp-content/uploads/2026/03/discovering-India.jpg",
};

export default function SharedAdventureIndia() {
  return (
    <main className="shared-adventure-page">
      <header className="shared-adventure-hero">
        <img
          className="shared-adventure-hero__image"
          src={images.hero}
          alt="Friends exploring India together"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <div className="shared-adventure-hero__shade" />

        <div className="shared-adventure-hero__content">
          <p className="shared-adventure-eyebrow">Wanderlust Diaries</p>

          <h1>A Shared Adventure: Slow Exploration and Friendship in India</h1>

          <div className="shared-adventure-meta">
            <span>March 18, 2026</span>
            <span className="shared-adventure-meta__dot" aria-hidden="true" />
            <span>By Wanderlust Diaries</span>
          </div>
        </div>
      </header>

      <article className="shared-adventure-article">
        <p className="shared-adventure-lead">
          This journey from Canada to India had been years in the making. A
          close-knit group of friends set out to discover a country that was new
          to many of them. SilverGenie Wanderlust planned the trip at a
          comfortable pace, leaving room to take in each place along the way.
        </p>

        <h2>A lively welcome in Mumbai</h2>

        <p>
          Mumbai was our introduction to India. Its busy streets, energy, and
          warm people made an immediate impression. SilverGenie Wanderlust
          coordinated airport assistance, comfortable transport, and the
          practical details, so we could focus on being present in the
          experience.
        </p>

        <p>
          Travelling with old friends made even the everyday moments special. We
          shared observations from the car, compared impressions throughout the
          day, and kept the conversations going over dinner.
        </p>

        <h2>History, art, and time to reflect</h2>

        <p>
          From the pace of Mumbai, we travelled to Aurangabad. Exploring its
          ancient caves and historic sites gave us a close look at the art,
          spirituality, and craftsmanship preserved in stone. Local guides
          helped us understand the stories behind the places, and those
          conversations carried on well after the visits.
        </p>

        <p>
          Kolkata brought a gentler rhythm to the journey. After several days on
          the move, the city gave us time to slow down and enjoy the
          surroundings. Flexible planning, attentive coordination, and
          comfortable transport made that change of pace feel natural.
        </p>

        <h2>Discovering India together</h2>

        <p>
          Our route continued through the Golden Triangle, including Agra,
          Jaipur, Jaisalmer, and Delhi. Seeing the Taj Mahal was a memorable
          moment, but the trip was shaped just as much by smaller discoveries:
          colourful markets, daily life in narrow streets, and peaceful temples
          and courtyards.
        </p>

        <p>
          In Jaisalmer, we watched the desert change colour at sunset. Jaipur
          offered another perspective through its architecture, crafts, and
          local traditions. Each destination had its own character and its own
          stories to share.
        </p>

        <figure className="shared-adventure-gallery">
          <img
            src={images.gallery}
            alt="Travel moments shared by the group during their India journey"
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
          <figcaption>
            Journey of discovering India together — photographs by the author
          </figcaption>
        </figure>

        <h2>The moments between destinations</h2>

        <p>
          Some of our favourite memories came during the quieter parts of the
          trip. Evenings gave us time to share meals, revisit the day’s
          discoveries, and enjoy one another’s company. Those conversations
          became an important part of the journey.
        </p>

        <p>
          Thoughtful care helped make the exploration comfortable. Well-paced
          travel days, knowledgeable guides, and the flexibility to adjust plans
          gave us confidence as we discovered a new country together.
        </p>

        <h2>Ending the journey in Delhi</h2>

        <p>
          We ended our adventure in Delhi, with time to reflect on everything we
          had experienced. The trip had become much more than a list of
          landmarks: it was a shared encounter with India’s history, culture,
          and everyday life.
        </p>

        <p>
          Looking back, we remember the laughter during long drives, our
          discussions about the places we visited, and the moments of quiet
          wonder along the way. Discovering India as friends, with SilverGenie
          Wanderlust’s support, made the experience deeply meaningful.
        </p>

        <p className="shared-adventure-closing">
          It was a journey shaped by the destinations we discovered and the
          friends with whom we shared them.
        </p>

        <div className="shared-adventure-tag">
          <span>Filed under</span>
          <Link to="/category/heart-of-bharat-diaries">
            Heart of Bharat Diaries
          </Link>
        </div>

        <aside className="shared-adventure-disclaimer">
          <strong>Disclaimer</strong>
          <p>
            The opinions expressed in this article belong to its author. The
            written work remains the author’s intellectual property.
            Reproduction or other use requires the author’s prior consent.
          </p>
        </aside>
      </article>

      <nav className="shared-adventure-related" aria-label="Related articles">
        <Link to="/a-doctors-travel-diary-discovering-the-quiet-grace-of-assam">
          <span>Previous article</span>A Doctor’s Travel Diary: Discovering the
          Quiet Grace of Assam
        </Link>

        <Link to="/tripura-shaktipeeth">
          <span>Next article</span>
          Shaktipeeth Stories: Exploring Faith, Dynasty, and Tradition in
          Tripura
        </Link>
      </nav>
    </main>
  );
}
