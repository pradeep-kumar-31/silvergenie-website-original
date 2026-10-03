import travelHero from "../assets/TravelWithCare/travel-hero.jpeg";
import mountains from "../assets/TravelWithCare/mountains.jpeg";
import island from "../assets/TravelWithCare/island.jpeg";
import monsoon from "../assets/TravelWithCare/monsoon.jpeg";

import goldenTriangle from "../assets/TravelWithCare/golden-triangle.jpeg";
import westBengal from "../assets/TravelWithCare/west-bengal.jpeg";
import andaman from "../assets/TravelWithCare/andaman.jpeg";

import durgaPuja from "../assets/TravelWithCare/durga-puja.jpeg";
import rannOfKutch from "../assets/TravelWithCare/rann-of-kutch.jpeg";
import hornbillFestival from "../assets/TravelWithCare/hornbill-festival.jpeg";
import onam from "../assets/TravelWithCare/onam.jpeg";
import devDiwali from "../assets/TravelWithCare/dev-diwali.jpeg";
import jagadhatriPuja from "../assets/TravelWithCare/jagadhatri-puja.jpeg";

import varanasi from "../assets/TravelWithCare/varanasi.jpeg";
import charDham from "../assets/TravelWithCare/char-dham.jpeg";
import templeTrails from "../assets/TravelWithCare/temple-trails.jpeg";
import wellness from "../assets/TravelWithCare/wellness.jpeg";

/* =========================================================
   WHATSAPP BUTTON
========================================================= */

function WhatsAppButton({ destination }) {
  const phoneNumber = "919999999999"; // Yahan SilverGenie ka actual WhatsApp number daalna

  const message = `Hello SilverGenie, I am interested in the ${destination} travel journey. Please share more details.`;

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="travel-whatsapp-btn"
      aria-label={`WhatsApp enquiry for ${destination}`}
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="travel-whatsapp-icon"
      >
        <path
          fill="currentColor"
          d="M19.11 17.21c-.27-.14-1.59-.78-1.84-.87-.25-.09-.43-.14-.61.14-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.58-1.5-1.85-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.26s.98 2.62 1.11 2.8c.14.18 1.92 2.93 4.65 4.11.65.28 1.16.45 1.56.57.65.21 1.24.18 1.71.11.52-.08 1.59-.65 1.81-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z"
        />

        <path
          fill="currentColor"
          d="M16.02 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.39 1.63 6.24L3.1 28.8l6.74-1.72a12.73 12.73 0 0 0 6.18 1.59h.01c7.06 0 12.8-5.74 12.8-12.8S23.08 3.2 16.02 3.2zm0 23.3h-.01a10.47 10.47 0 0 1-5.34-1.46l-.38-.23-4 .99 1.07-3.9-.25-.4a10.5 10.5 0 1 1 8.91 4.99z"
        />
      </svg>

      <span>WhatsApp</span>
    </a>
  );
}
/* =========================================================
   SILVERGENIE WANDERLUST
   TRAVEL WITH CARE
========================================================= */

function TravelWithCare() {

  /* =======================================================
     MAIN JOURNEYS
  ======================================================= */

  const journeys = [
    {
      title: "Char Dham Yatra",
      image: charDham,
      location: "INDIA • SPIRITUAL HIMALAYA",
      category: "Spiritual",
      tag: "Spiritual Himalaya",
      date: "April – June 2026",
      duration: "6 Days / 5 Nights, 9 Days / 8 Nights, 12 Days / 11 Nights",
      price: "Land Packages starting at ₹28,000",
      description:
        "A thoughtfully planned pilgrimage journey through India's revered Himalayan destinations, designed around comfort, care and meaningful experiences.",
    },

    {
      title: "Shaktipeeths of North East India",
      image: templeTrails,
      location: "INDIA • NORTH EAST",
      category: "Spiritual",
      tag: "Spiritual Nature",
      date: "May – September 2026",
      duration: "6 Days",
      price: "Starting from ₹40,000",
      description:
        "Discover sacred destinations, natural beauty and cultural traditions through a carefully curated spiritual journey.",
    },

    {
      title: "Puri Dham & Shaktipeeths of Odisha",
      image: templeTrails,
      location: "INDIA • ODISHA",
      category: "Spiritual",
      tag: "Spiritual Coastal",
      date: "April – September 2026",
      duration: "4 Days / 3 Nights",
      price: "Starting from ₹18,000",
      description:
        "A spiritual and coastal journey combining sacred places, cultural experiences and thoughtful travel planning.",
    },

    {
      title: "Shaktipeeths of West Bengal",
      image: westBengal,
      location: "INDIA • WEST BENGAL",
      category: "Spiritual",
      tag: "Spiritual Temple Trail",
      date: "May – September 2026",
      duration: "5 Days / 4 Nights",
      price: "Starting from ₹28,000",
      description:
        "Explore sacred destinations and the rich spiritual heritage of Bengal through a carefully planned journey.",
    },

    {
      title: "Shaktipeeths of Himachal Pradesh",
      image: mountains,
      location: "INDIA • HIMACHAL PRADESH",
      category: "Spiritual",
      tag: "Spiritual Shaktipeeth",
      date: "April – June 2026",
      duration: "6 Days / 5 Nights",
      price: "Starting from ₹48,000",
      description:
        "Journey through Himachal's sacred landscapes with comfortable pacing and thoughtful travel support.",
    },

    {
      title: "Breathtaking Bhutan",
      image: mountains,
      location: "BHUTAN • HIMALAYA",
      category: "International",
      tag: "Spiritual Himalaya",
      date: "August 14 – November 30, 2026",
      duration: "6 Days / 5 Nights",
      price: "Price shared after understanding your needs",
      description:
        "Experience serene Himalayan landscapes, culture and mindful travel in the Kingdom of Bhutan.",
    },

    {
      title: "Kashmir: Paradise on Earth",
      image: mountains,
      location: "INDIA • KASHMIR",
      category: "Mountains",
      tag: "Mountains",
      date: "September 21 – September 25, 2026",
      duration: "5 Days / 4 Nights",
      price: "Price shared after understanding your needs",
      description:
        "Discover the beauty, culture and peaceful landscapes of Kashmir through a comfortable journey.",
    },

    {
      title: "Bali: Tropical Bliss",
      image: island,
      location: "BALI • INTERNATIONAL",
      category: "International",
      tag: "Island Serenity",
      date: "September 10 – September 16, 2026",
      duration: "7 Days / 6 Nights",
      price: "Starting from ₹59,999",
      description:
        "A relaxing island escape combining culture, nature and comfortable travel experiences.",
    },

    {
      title: "Meghalaya: Wanderlust in the Abode of Clouds",
      image: monsoon,
      location: "INDIA • NORTH EAST",
      category: "Mountains",
      tag: "Monsoon",
      date: "June 19 – June 22, 2026",
      duration: "4 Days / 3 Nights",
      price: "Price shared after understanding your needs",
      description:
        "Explore waterfalls, hills and natural beauty with a relaxed and thoughtfully paced travel experience.",
    },
  ];


  /* =======================================================
     UPCOMING EXPERIENCES
  ======================================================= */

  const upcomingJourneys = [
    {
      number: "01",
      title: "Mizoram",
      subtitle: "Land of Rolling Mountains",
      image: mountains,
      category: "NORTHEAST",
      date: "17th – 22nd September 2026",
      duration: "6 Days / 5 Nights",
      description:
        "Discover the rolling mountains, peaceful landscapes and cultural richness of Mizoram.",
    },

    {
      number: "02",
      title: "Bhutan",
      subtitle: "Breathtaking Bhutan",
      image: mountains,
      category: "INTERNATIONAL",
      date:
        "24th – 30th Sep, 2nd – 8th Oct, 16th – 22nd Oct, 9th – 15th Nov, 23rd – 29th Nov 2026",
      duration: "7 Days / 6 Nights",
      description:
        "A premium-care Himalayan experience with thoughtfully planned stays, meals and travel support.",
    },

    {
      number: "03",
      title: "Arunachal Pradesh",
      subtitle: "Land of the Dawn-Lit Mountains",
      image: mountains,
      category: "INCREDIBLE INDIA",
      date: "October 17 – October 23, 2026",
      duration: "7 Days / 6 Nights",
      description:
        "Explore the breathtaking landscapes and cultural heritage of Arunachal Pradesh through a carefully curated journey.",
    },
  ];


  /* =======================================================
     HEART OF BHARAT
  ======================================================= */

  const bharatJourneys = [
    {
      number: "01",
      title: "Golden Triangle",
      image: goldenTriangle,
      category: "CULTURE & HERITAGE",
      date: "Multiple departures till March 2027",
      description:
        "Discover Delhi, Jaipur and Agra through timeless heritage, architecture and stories.",
    },

    {
      number: "02",
      title: "West Bengal",
      image: westBengal,
      category: "CULTURE & TRADITION",
      date: "Multiple departures till March 2027",
      description:
        "Discover art, food, festivals and traditions woven into the cultural fabric of Bengal.",
    },

    {
      number: "03",
      title: "Andaman & Nicobar Islands",
      image: andaman,
      category: "ISLAND ESCAPE",
      date: "December 15, 2026 onwards",
      duration: "5 Days / 4 Nights",
      description:
        "Discover turquoise waters, island landscapes and peaceful coastal experiences.",
    },
  ];


  /* =======================================================
     FESTIVALS
  ======================================================= */

  const festivals = [
    {
      number: "01",
      title: "Durga Pujo in West Bengal",
      image: durgaPuja,
      category: "FESTIVAL EXPERIENCE",
      date: "11th – 16th October 2026",
      description:
        "Experience the energy, artistry and traditions surrounding one of India's most celebrated festivals.",
    },

    {
      number: "02",
      title: "Rann of Kutch",
      image: rannOfKutch,
      category: "SEASONAL EXPERIENCE",
      date: "22nd – 26th November 2026",
      duration: "5 Days / 4 Nights",
      description:
        "Discover the extraordinary landscape, crafts, culture and festive spirit of Gujarat.",
    },

    {
      number: "03",
      title: "Hornbill Festival",
      image: hornbillFestival,
      category: "CULTURAL FESTIVAL",
      date: "2nd – 7th December 2026",
      description:
        "Experience the vibrant cultures, traditions and artistic heritage of Nagaland.",
    },

    {
      number: "04",
      title: "Onam in Kerala",
      image: onam,
      category: "TRADITION & CULTURE",
      date: "Multiple departure dates in April 2026",
      description:
        "Explore Kerala through its traditions, food, celebrations and welcoming cultural spirit.",
    },

    {
      number: "05",
      title: "Dev Diwali",
      image: devDiwali,
      category: "SPIRITUAL CELEBRATION",
      date: "23rd November 2026",
      duration: "5 Days / 4 Nights",
      description:
        "Witness the illuminated ghats and spiritual atmosphere of Varanasi through a carefully planned journey.",
    },

    {
      number: "06",
      title: "Jagadhatri Pujo",
      image: jagadhatriPuja,
      category: "CULTURAL JOURNEY",
      date: "November 2026",
      description:
        "Discover the unique traditions and festive heritage of Bengal.",
    },
  ];


  /* =======================================================
     SPIRITUAL JOURNEYS
  ======================================================= */

  const spiritualJourneys = [
    {
      number: "01",
      title: "Varanasi",
      image: varanasi,
      category: "SPIRITUAL JOURNEY",
      description:
        "Experience the timeless spirit of the Ganga, ancient ghats and living traditions of Varanasi.",
    },

    {
      number: "02",
      title: "Puri Dham",
      image: charDham,
      category: "PILGRIMAGE EXPERIENCE",
      date: "April – September 2026",
      duration: "4 Days / 3 Nights",
      description:
        "A thoughtfully planned spiritual journey through one of India's revered pilgrimage destinations.",
    },

    {
      number: "03",
      title: "Temple Trails",
      image: templeTrails,
      category: "HERITAGE & FAITH",
      description:
        "Explore India's remarkable temples, architecture and traditions through meaningful journeys.",
    },
  ];


  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <div className="travel-page">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="travel-hero">

        <div className="travel-hero-content">

          <span className="travel-eyebrow">
            SILVERGENIE WANDERLUST
          </span>

          <h1>
            Travel Without
            <span> Boundaries.</span>
          </h1>

          <p>
            Thoughtfully curated journeys designed for seniors,
            solo women travelers, and specially-abled explorers.
            Experience India and the world with care, comfort,
            and confidence.
          </p>

          <div className="travel-hero-buttons">

            <a
              href="#journeys"
              className="travel-primary-btn"
            >
              Explore Journeys →
            </a>

            <a
              href="#travel-enquiry"
              className="travel-secondary-btn"
            >
              Plan My Journey
            </a>

          </div>


          <div className="travel-hero-stats">

            <div>
              <strong>01</strong>
              <span>Senior-Friendly</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Safe & Supported</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Accessible Travel</span>
            </div>

          </div>

        </div>


        <div className="travel-hero-visual">

          <img
            src={travelHero}
            alt="SilverGenie Travel With Care"
            className="travel-main-image"
          />

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="travel-intro">

        <div className="travel-intro-content">

          <span className="travel-section-label">
            WANDERLUST
          </span>

          <h2>
            Every journey deserves
            <span> thoughtful care.</span>
          </h2>

          <p>
            SilverGenie brings together thoughtfully planned
            travel experiences with the comfort, care and
            confidence that make every journey more enjoyable.
          </p>

        </div>

      </section>


      {/* =====================================================
          SILVERGENIE SOJOURNS
      ===================================================== */}

      <section
        className="travel-sojourns"
        id="journeys"
      >

        <div className="travel-section-heading">

          <span>
            SILVERGENIE SOJOURNS 2026
          </span>

          <h2>
            SilverGenie
            <br />
            <em>Sojourns.</em>
          </h2>

          <p>
            Carefully curated journeys for travellers who want
            to discover new places while enjoying comfort,
            thoughtful planning and care.
          </p>

        </div>


        <div className="travel-category-tabs">

          <button className="active">
            All Journeys
          </button>

          <button>
            Mountains
          </button>

          <button>
            Spiritual
          </button>

          <button>
            Culture
          </button>

          <button>
            International
          </button>

          <button>
            Wellness
          </button>

        </div>


        {/* =====================================================
    JOURNEY GRID
===================================================== */}

<div className="travel-journey-grid">

  {/* =====================================================
      CHAR DHAM YATRA
  ===================================================== */}

  <article className="travel-journey-card">

    <div className="travel-card-image">

      <img
        src={charDham}
        alt="Char Dham Yatra"
      />

      <div className="travel-card-tag">
        Spiritual
      </div>

    </div>

    <div className="travel-card-body">

      <span className="travel-card-location">
        INDIA • SPIRITUAL HIMALAYA
      </span>

      <h3>
        Char Dham Yatra
      </h3>

      <div className="travel-card-month">
        April – June 2026
      </div>

      {/* THREE DURATIONS */}

      <div className="travel-duration-multiple">

        <strong>
          6 Days / 5 Nights
        </strong>

        <strong>
          9 Days / 8 Nights
        </strong>

        <strong>
          12 Days / 11 Nights
        </strong>

      </div>

      <div className="travel-card-price">
        Land Packages starting at ₹28,000
      </div>

      <p>
        A thoughtfully planned pilgrimage journey
        through India's revered Himalayan destinations,
        designed around comfort, care and meaningful
        experiences.
      </p>

      <div className="travel-card-bottom">

        <span>
          Spiritual Himalaya
        </span>

        <div className="travel-card-actions">

          <WhatsAppButton destination="Char Dham Yatra" />

          <a href="/#contact">
            Request Callback →
          </a>

        </div>

      </div>

    </div>

  </article>


  {/* =====================================================
      SHAKTIPEETHS OF NORTH EAST INDIA
  ===================================================== */}

  <article className="travel-journey-card">

    <div className="travel-card-image">

      <img
        src={templeTrails}
        alt="Shaktipeeths of North East India"
      />

      <div className="travel-card-tag">
        Spiritual
      </div>

    </div>

    <div className="travel-card-body">

      <span className="travel-card-location">
        INDIA • NORTH EAST
      </span>

      <h3>
        Shaktipeeths of North East India
      </h3>

      <div className="travel-card-month">
        May – September 2026
      </div>

      <div className="travel-duration-multiple">

        <strong>
          6 Days
        </strong>

      </div>

      <div className="travel-card-price">
        Starting from ₹40,000
      </div>

      <p>
        Discover sacred destinations, natural beauty
        and cultural traditions through a carefully
        curated spiritual journey.
      </p>

      <div className="travel-card-bottom">

        <span>
          Spiritual Nature
        </span>

        <div className="travel-card-actions">

          <WhatsAppButton destination="Shaktipeeths of North East India" />

          <a href="/#contact">
            Request Callback →
          </a>

        </div>

      </div>

    </div>

  </article>


  {/* =====================================================
      PURI DHAM & SHAKTIPEETHS OF ODISHA
  ===================================================== */}

  <article className="travel-journey-card">

    <div className="travel-card-image">

      <img
        src={templeTrails}
        alt="Puri Dham and Shaktipeeths of Odisha"
      />

      <div className="travel-card-tag">
        Spiritual
      </div>

    </div>

    <div className="travel-card-body">

      <span className="travel-card-location">
        INDIA • ODISHA
      </span>

      <h3>
        Puri Dham &amp; Shaktipeeths of Odisha
      </h3>

      <div className="travel-card-month">
        April – September 2026
      </div>

      <div className="travel-duration-multiple">

        <strong>
          4 Days / 3 Nights
        </strong>

      </div>

      <div className="travel-card-price">
        Starting from ₹18,000
      </div>

      <p>
        A spiritual and coastal journey combining sacred
        places, cultural experiences and thoughtful travel
        planning.
      </p>

      <div className="travel-card-bottom">

        <span>
          Spiritual Coastal
        </span>

        <div className="travel-card-actions">

          <WhatsAppButton destination="Puri Dham and Shaktipeeths of Odisha" />

          <a href="/#contact">
            Request Callback →
          </a>

        </div>

      </div>

    </div>

  </article>


  {/* =====================================================
      SHAKTIPEETHS OF WEST BENGAL
  ===================================================== */}

  <article className="travel-journey-card">

    <div className="travel-card-image">

      <img
        src={westBengal}
        alt="Shaktipeeths of West Bengal"
      />

      <div className="travel-card-tag">
        Spiritual
      </div>

    </div>

    <div className="travel-card-body">

      <span className="travel-card-location">
        INDIA • WEST BENGAL
      </span>

      <h3>
        Shaktipeeths of West Bengal
      </h3>

      <div className="travel-card-month">
        May – September 2026
      </div>

      <div className="travel-duration-multiple">

        <strong>
          5 Days / 4 Nights
        </strong>

      </div>

      <div className="travel-card-price">
        Starting from ₹28,000
      </div>

      <p>
        Explore sacred destinations and the rich spiritual
        heritage of Bengal through a carefully planned journey.
      </p>

      <div className="travel-card-bottom">

        <span>
          Spiritual Temple Trail
        </span>

        <div className="travel-card-actions">

          <WhatsAppButton destination="Shaktipeeths of West Bengal" />

          <a href="/#contact">
            Request Callback →
          </a>

        </div>

      </div>

    </div>

  </article>


  {/* =====================================================
      ARUNACHAL PRADESH
  ===================================================== */}

  <article className="travel-journey-card">

    <div className="travel-card-image">

      <img
        src={mountains}
        alt="Arunachal Pradesh"
      />

      <div className="travel-card-tag">
        Spiritual
      </div>

    </div>

    <div className="travel-card-body">

      <span className="travel-card-location">
        INDIA • NORTH EAST
      </span>

      <h3>
        Arunachal Pradesh
      </h3>

      <div className="travel-card-month">
        October – April
      </div>

      <div className="travel-duration-multiple">

        <strong>
          6 Days / 5 Nights
        </strong>

      </div>

      <div className="travel-card-price">
        Starting from ₹40,000
      </div>

      <p>
        Discover beautiful Himalayan landscapes, local
        traditions and peaceful surroundings through
        a thoughtfully planned journey.
      </p>

      <div className="travel-card-bottom">

        <span>
          Himalayan Journey
        </span>

        <div className="travel-card-actions">

          <WhatsAppButton destination="Arunachal Pradesh" />

          <a href="/#contact">
            Request Callback →
          </a>

        </div>

      </div>

    </div>

  </article>


  {/* =====================================================
      BHUTAN
  ===================================================== */}

  <article className="travel-journey-card">

    <div className="travel-card-image">

      <img
        src={mountains}
        alt="Bhutan"
      />

      <div className="travel-card-tag">
        International
      </div>

    </div>

    <div className="travel-card-body">

      <span className="travel-card-location">
        BHUTAN • MOUNTAINS
      </span>

      <h3>
        Bhutan
      </h3>

      <div className="travel-card-month">
        March – June
      </div>

      <div className="travel-duration-multiple">

        <strong>
          6 Days / 5 Nights
        </strong>

      </div>

      <div className="travel-card-price">
        Starting from ₹45,000
      </div>

      <p>
        Experience serene landscapes, rich culture and
        mindful travel in the Himalayan kingdom.
      </p>

      <div className="travel-card-bottom">

        <span>
          International Journey
        </span>

        <div className="travel-card-actions">

          <WhatsAppButton destination="Bhutan" />

          <a href="/#contact">
            Request Callback →
          </a>

        </div>

      </div>

    </div>

  </article>


  {/* =====================================================
      KASHMIR
  ===================================================== */}

  <article className="travel-journey-card">

    <div className="travel-card-image">

      <img
        src={mountains}
        alt="Kashmir"
      />

      <div className="travel-card-tag">
        Mountains
      </div>

    </div>

    <div className="travel-card-body">

      <span className="travel-card-location">
        INDIA • MOUNTAINS
      </span>

      <h3>
        Kashmir
      </h3>

      <div className="travel-card-month">
        April – October
      </div>

      <div className="travel-duration-multiple">

        <strong>
          6 Days / 5 Nights
        </strong>

      </div>

      <div className="travel-card-price">
        Starting from ₹30,000
      </div>

      <p>
        Discover the beauty of Kashmir through a
        comfortable and thoughtfully planned journey.
      </p>

      <div className="travel-card-bottom">

        <span>
          Mountain Escape
        </span>

        <div className="travel-card-actions">

          <WhatsAppButton destination="Kashmir" />

          <a href="/#contact">
            Request Callback →
          </a>

        </div>

      </div>

    </div>

  </article>


  {/* =====================================================
      ANDAMAN
  ===================================================== */}

  <article className="travel-journey-card">

    <div className="travel-card-image">

      <img
        src={andaman}
        alt="Andaman"
      />

      <div className="travel-card-tag">
        International
      </div>

    </div>

    <div className="travel-card-body">

      <span className="travel-card-location">
        INDIA • ISLAND
      </span>

      <h3>
        Andaman
      </h3>

      <div className="travel-card-month">
        October – May
      </div>

      <div className="travel-duration-multiple">

        <strong>
          6 Days / 5 Nights
        </strong>

      </div>

      <div className="travel-card-price">
        Starting from ₹35,000
      </div>

      <p>
        Slow down and enjoy an island experience
        surrounded by nature, beaches and tranquillity.
      </p>

      <div className="travel-card-bottom">

        <span>
          Island Journey
        </span>

        <div className="travel-card-actions">

          <WhatsAppButton destination="Andaman" />

          <a href="/#contact">
            Request Callback →
          </a>

        </div>

      </div>

    </div>

  </article>

</div>

      </section>


      {/* =====================================================
          UPCOMING EXPERIENCES
      ===================================================== */}

      <section className="travel-upcoming">

        <div className="travel-upcoming-header">

          <div>

            <span>
              UPCOMING AUTUMN WANDERLUST EXPERIENCES
            </span>

            <h2>
              Upcoming
              <br />
              <em>Experiences.</em>
            </h2>

          </div>

          <p>
            August – November 2026. Discover new destinations,
            meaningful experiences and thoughtfully planned
            journeys with SilverGenie.
          </p>

        </div>


        <div className="travel-feature-grid">

          {upcomingJourneys.map((journey) => (

            <article
              className="travel-feature-card"
              key={journey.number}
            >

              <div className="travel-feature-image">

                <img
                  src={journey.image}
                  alt={journey.title}
                />

                <div className="travel-feature-number">
                  {journey.number}
                </div>

              </div>


              <div className="travel-feature-content">

                <span>
                  {journey.category}
                </span>

                <h3>
                  {journey.title}
                  <br />
                  <em>{journey.subtitle}</em>
                </h3>


                <div className="travel-feature-date">
                  {journey.date}
                </div>


                <strong className="travel-feature-duration">
                  {journey.duration}
                </strong>


                <p>
                  {journey.description}
                </p>


                <a href="/#contact">
                  Request Callback →
                </a>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          HEART OF BHARAT
      ===================================================== */}

      <section className="travel-bharat">

        <div className="travel-bharat-heading">

          <span>
            THE HEART OF BHARAT
          </span>

          <h2>
            Discover the
            <br />
            <em>Heart of Bharat.</em>
          </h2>

          <p>
            Experience India's diverse landscapes, living
            traditions and timeless stories through journeys
            thoughtfully curated by SilverGenie.
          </p>

        </div>


        <div className="travel-bharat-grid">

          {bharatJourneys.map((journey) => (

            <article
              className="travel-bharat-card"
              key={journey.number}
            >

              <div className="travel-bharat-image">

                <img
                  src={journey.image}
                  alt={journey.title}
                />

                <small>
                  {journey.number}
                </small>

              </div>


              <div className="travel-bharat-content">

                <span>
                  {journey.category}
                </span>

                <h3>
                  {journey.title}
                </h3>


                {journey.date && (
                  <div className="travel-card-date">
                    {journey.date}
                  </div>
                )}


                {journey.duration && (
                  <strong className="travel-feature-duration">
                    {journey.duration}
                  </strong>
                )}


                <p>
                  {journey.description}
                </p>


                <a
                  href="/#contact"
                  className="travel-explore-btn"
                >
                  Explore Experience
                  <span>→</span>
                </a>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          WHEN INDIA CELEBRATES
      ===================================================== */}

      <section className="travel-festivals">

        <div className="travel-festivals-header">

          <span>
            WHEN INDIA CELEBRATES
          </span>

          <h2>
            When India
            <em> Celebrates.</em>
          </h2>

          <p>
            Travel beyond destinations and experience India
            through its colours, celebrations, food, music
            and living traditions.
          </p>

        </div>


        <div className="travel-festival-list">

          {festivals.map((festival) => (

            <article
              className="travel-festival-item"
              key={festival.number}
            >

              <div className="travel-festival-image">

                <img
                  src={festival.image}
                  alt={festival.title}
                />

                <small>
                  {festival.number}
                </small>

              </div>


              <div className="travel-festival-content">

                <span>
                  {festival.category}
                </span>

                <h3>
                  {festival.title}
                </h3>


                <div className="travel-card-date">
                  {festival.date}
                </div>


                {festival.duration && (
                  <strong className="travel-feature-duration">
                    {festival.duration}
                  </strong>
                )}


                <p>
                  {festival.description}
                </p>


                <a
                  href="/#contact"
                  className="travel-explore-btn"
                >
                  Explore Experience
                  <span>→</span>
                </a>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          WHERE TRADITIONS THRIVE
      ===================================================== */}

      <section className="travel-traditions">

        <div className="travel-traditions-inner">

          <div className="travel-traditions-content">

            <span>
              WHERE TRADITIONS THRIVE
            </span>

            <h2>
              Where
              <br />
              <em>Traditions Thrive.</em>
            </h2>

            <p>
              Some journeys are about places. Others are about
              the people, traditions and stories that make those
              places unforgettable.
            </p>

            <a
              href="/#contact"
              className="travel-traditions-button"
            >
              Discover Cultural Journeys →
            </a>

          </div>


          <div className="travel-traditions-visual">

            <div className="travel-traditions-circle">

              <img
                src={westBengal}
                alt="Indian Culture and Traditions"
              />

            </div>


            <div className="travel-traditions-note">

              <strong>
                Culture
              </strong>

              <span>
                Connection
              </span>

              <span>
                Experience
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PATHS TO THE DIVINE
      ===================================================== */}

      <section className="travel-divine">

        <div className="travel-divine-header">

          <span>
            PATHS TO THE DIVINE
          </span>

          <h2>
            Paths to
            <br />
            <em>the Divine.</em>
          </h2>

          <p>
            Journey through India's spiritual landscapes,
            ancient traditions and places of quiet reflection,
            with care at every step.
          </p>

        </div>


        <div className="travel-divine-grid">

          {spiritualJourneys.map((journey) => (

            <article
              className="travel-divine-card"
              key={journey.number}
            >

              <div className="travel-divine-image">

                <img
                  src={journey.image}
                  alt={journey.title}
                />

                <small>
                  {journey.number}
                </small>

              </div>


              <div className="travel-divine-content">

                <span>
                  {journey.category}
                </span>

                <h3>
                  {journey.title}
                </h3>


                {journey.date && (
                  <div className="travel-card-date">
                    {journey.date}
                  </div>
                )}


                {journey.duration && (
                  <strong className="travel-feature-duration">
                    {journey.duration}
                  </strong>
                )}


                <p>
                  {journey.description}
                </p>


                <a
                  href="/#contact"
                  className="travel-explore-btn"
                >
                  Discover Journey
                  <span>→</span>
                </a>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          WELLNESS
      ===================================================== */}

      <section className="travel-wellness">

        <div className="travel-wellness-inner">

          <div className="travel-wellness-visual">

            <div className="travel-wellness-image">

              <img
                src={wellness}
                alt="Wellness Retreat"
              />

            </div>


            <div className="travel-wellness-badge">

              <strong>
                PAUSE.
              </strong>

              <span>
                RESET.
              </span>

              <span>
                RECONNECT.
              </span>

            </div>

          </div>


          <div className="travel-wellness-content">

            <span>
              FIND YOUR BALANCE
            </span>

            <h2>
              Travel slower.
              <br />
              <em>Feel better.</em>
            </h2>

            <p>
              Some journeys are designed not to fill your
              calendar, but to give you space to breathe,
              reconnect and simply be.
            </p>


            <div className="travel-wellness-points">

              <div>
                <strong>01</strong>
                <span>Peaceful destinations</span>
              </div>

              <div>
                <strong>02</strong>
                <span>Comfortable stays</span>
              </div>

              <div>
                <strong>03</strong>
                <span>Thoughtfully paced journeys</span>
              </div>

            </div>


            <a
              href="/#contact"
              className="travel-wellness-button"
            >
              Explore Wellness Journeys →
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          TRAVEL PHILOSOPHY
      ===================================================== */}

      <section className="travel-philosophy">

        <div className="travel-philosophy-inner">

          <div className="travel-philosophy-heading">

            <span>
              WHY SILVERGENIE
            </span>

            <h2>
              Travel with
              <br />
              <em>care.</em>
            </h2>

          </div>


          <div className="travel-philosophy-text">

            <p>
              At SilverGenie, travel is more than reaching a
              destination. It is about feeling comfortable,
              confident and cared for throughout the journey.
            </p>

            <p>
              Every itinerary is designed with comfort,
              health, pacing and accessibility in mind.
            </p>

          </div>

        </div>


        <div className="travel-philosophy-points">

          <div className="travel-philosophy-point">

            <strong>
              01
            </strong>

            <div>

              <h3>
                Care-first Itineraries
              </h3>

              <p>
                Journeys designed around comfort, health,
                pacing and individual requirements.
              </p>

            </div>

          </div>


          <div className="travel-philosophy-point">

            <strong>
              02
            </strong>

            <div>

              <h3>
                Premium & Accessible Stays
              </h3>

              <p>
                Carefully selected stays with accessibility
                and comfort in mind.
              </p>

            </div>

          </div>


          <div className="travel-philosophy-point">

            <strong>
              03
            </strong>

            <div>

              <h3>
                24×7 Emergency Support
              </h3>

              <p>
                Round-the-clock assistance through the
                SilverGenie care ecosystem.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        className="travel-final-cta"
        id="travel-enquiry"
      >

        <div className="travel-final-cta-inner">

          <div>

            <span>
              YOUR JOURNEY STARTS HERE
            </span>

            <h2>
              Ready to
              <br />
              <em>travel with care?</em>
            </h2>

            <p>
              Tell us where you would like to go and let us
              help you plan a journey around your comfort,
              interests and needs.
            </p>

          </div>


          <div className="travel-final-actions">

            <a
              href="/#contact"
              className="travel-final-primary"
            >
              Plan My Journey →
            </a>

            <a
              href="/#contact"
              className="travel-final-secondary"
            >
              Enquire Now
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}

export default TravelWithCare;