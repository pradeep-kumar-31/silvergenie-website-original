import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/WanderlustDiaries.css";

/* =====================================================
   SILVERGENIE PVT. LTD. — WANDERLUST DIARIES

   Images:
   public/image/blog/

   Individual stories:
   /wanderlust/:slug
===================================================== */

const diaries = [
  // =====================================================
  // SPIRITUAL DIARIES
  // =====================================================
  {
    title:
      "Shaktipeeth Stories: Exploring Faith, Dynasty, and Tradition in Tripura",
    slug: "tripura-shaktipeeth",
    category: "Spiritual Diaries",
    location: "Tripura, India",
    date: "April 10, 2026",
    author: "Embracing Autism",
    image: "tripura-shaktipeeth.png",
    description:
      "Discover Tripura's spiritual heritage, sacred traditions, history and cultural stories.",
  },
  {
    title: "A Journey Through Faith, History, and Kolkata's Essence",
    slug: "kolkata-faith-history",
    category: "Spiritual Diaries",
    location: "Kolkata, West Bengal",
    date: "December 10, 2025",
    author: "Wanderlust Diaries",
    image: "kolkata-faith.png",
    description:
      "Explore Kolkata through its faith, historic landmarks, traditions and cultural identity.",
  },
  {
    title: "From Spirit to Celebration: Our Jagadhatri Pujo Experience",
    slug: "jagadhatri-pujo",
    category: "Spiritual Diaries",
    location: "West Bengal, India",
    date: "November 1, 2025",
    author: "Wanderlust Diaries",
    image: "jagadhatri-puja.jpeg",
    description:
      "Experience the devotion, celebrations and colourful traditions of Jagadhatri Pujo.",
  },
  {
    title: "From Devotion to Delight: Our #DurgaPujoWithCare Experience",
    slug: "durga-pujo-with-care",
    category: "Spiritual Diaries",
    location: "West Bengal, India",
    date: "October 8, 2025",
    author: "Wanderlust Diaries",
    image: "durga-puja.png",
    description:
      "Discover the beauty, devotion and community spirit of Durga Pujo.",
  },
  {
    title: "Through the Crowds: Experiencing the Mahakumbh",
    slug: "mahakumbh",
    category: "Spiritual Diaries",
    location: "Prayagraj, Uttar Pradesh",
    date: "February 26, 2025",
    author: "Dr. Tushar Kanti Majumdar & Dr. Dipika Majumdar",
    image: "mahakumbh.jpeg",
    description:
      "Explore the spiritual atmosphere, traditions and memorable experiences of the Mahakumbh.",
  },

  // =====================================================
  // NORTHEAST DIARIES
  // =====================================================
  {
    title: "Mizoram Through My Eyes: A Journey I Will Remember",
    slug: "mizoram",
    category: "Northeast Diaries",
    location: "Mizoram, India",
    date: "September 23, 2026",
    author: "Mr. D. B. Banerjee",
    image: "mizoram.jpg",
    description:
      "Discover Mizoram's scenic landscapes, local culture and memorable travel experiences.",
  },
  {
    title: "A Doctor's Travel Diary: Discovering the Quiet Grace of Assam",
    slug: "assam",
    category: "Northeast Diaries",
    location: "Assam, India",
    date: "March 10, 2026",
    author: "Wanderlust Diaries",
    image: "assam.png",
    description:
      "Explore the quiet beauty, culture and meaningful travel experiences of Assam.",
  },
  {
    title: "Hornbill Festival Diaries: Colours of Nagaland",
    slug: "hornbill-festival",
    category: "Northeast Diaries",
    location: "Nagaland, India",
    date: "January 7, 2026",
    author: "Krishna Ghosh",
    image: "hornbill-nagaland.png",
    description:
      "Experience Nagaland's traditional dances, music, crafts and cultural celebrations.",
  },
  {
    title: "Trip to Neora Valley and East Sikkim via the Silk Route",
    slug: "neora-valley-silk-route",
    category: "Northeast Diaries",
    location: "Sikkim, India",
    date: "December 10, 2025",
    author: "BD Chatterjee",
    image: "neora-valley-sikkim.jpg",
    description:
      "Explore mountain scenery, beautiful valleys and memorable Himalayan journeys.",
  },
  {
    title: "Meghalaya: The Abode of Clouds",
    slug: "meghalaya",
    category: "Northeast Diaries",
    location: "Meghalaya, India",
    date: "June 24, 2025",
    author: "Paromita Sen",
    image: "meghalaya.png",
    description:
      "Discover misty hills, lush green valleys, waterfalls and Meghalaya's natural beauty.",
  },

  // =====================================================
  // HEART OF BHARAT
  // =====================================================
  {
    title: "A Shared Adventure: Slow Exploration and Friendship in India",
    slug: "shared-adventure-india",
    category: "Heart of Bharat",
    location: "India",
    date: "March 18, 2026",
    author: "Wanderlust Diaries",
    image: "shared-adventure-india.jpg",
    description:
      "Celebrate friendship, meaningful experiences and the joy of discovering India together.",
  },
  {
    title: "Finding My Rhythm in the Sundarbans",
    slug: "sundarbans",
    category: "Heart of Bharat",
    location: "Sundarbans, West Bengal",
    date: "January 5, 2026",
    author: "Wanderlust Diaries",
    image: "sundarbans.jpg",
    description:
      "Experience the mangrove forests, waterways and remarkable wildlife of the Sundarbans.",
  },
  {
    title: "Under the White Rann Moon: A Journey Designed with Care",
    slug: "white-rann-moon",
    category: "Heart of Bharat",
    location: "Rann of Kutch, Gujarat",
    date: "December 19, 2025",
    author: "Wanderlust Diaries",
    image: "rann-of-kutch.jpg",
    description:
      "Discover the white salt desert, vibrant local culture and unforgettable landscapes of Kutch.",
  },
  {
    title: "No Wonder, It's a Wonder: My Solo Travel Story at the Taj Mahal",
    slug: "taj-mahal",
    category: "Heart of Bharat",
    location: "Agra, Uttar Pradesh",
    date: "October 30, 2025",
    author: "Yvonne Krywyj",
    image: "taj-mahal.png",
    description:
      "Discover the Taj Mahal's architectural beauty, rich history and unforgettable charm.",
  },
  {
    title: "My Kerala Diary",
    slug: "kerala",
    category: "Heart of Bharat",
    location: "Kerala, India",
    date: "September 14, 2025",
    author: "Namita Adhikary",
    image: "kerala.jpg",
    description:
      "Experience Kerala's peaceful backwaters, lush landscapes and rich cultural traditions.",
  },

  // =====================================================
  // ASIA, AFRICA & EUROPE
  // =====================================================
  {
    title:
      "Across Generations, Across Europe: A Winter Journey Through Italy & Switzerland",
    slug: "italy-switzerland",
    category: "Asia, Africa & Europe",
    location: "Italy and Switzerland",
    date: "September 7, 2026",
    author: "Chaha Mukherjee",
    image: "italy-switzerland.png",
    description:
      "Discover beautiful European landscapes and meaningful multigenerational travel experiences.",
  },
  {
    title: "Bhutan Through the Comfort of Care",
    slug: "bhutan",
    category: "Asia, Africa & Europe",
    location: "Bhutan",
    date: "July 6, 2026",
    author:
      "Ms. Namita Adhikary, Bhutan Summer Cohort 2 (2026) & Mr. Bhagirath Saha, Bhutan Summer Cohort 3 (2026)",
    image: "bhutan.png",
    description:
      "Discover Bhutan's peaceful monasteries, mountain landscapes and rich cultural traditions.",
  },
  {
    title: "Walking Backwards Through Blossoms: Our Story in Japan",
    slug: "japan",
    category: "Asia, Africa & Europe",
    location: "Japan",
    date: "April 13, 2026",
    author: "Wanderlust Diaries",
    image: "japan.png",
    description:
      "Explore Japan's beautiful landscapes, timeless traditions and unique cultural experiences.",
  },
  {
    title: "Egypt: Stories of and from People Who Have Walked with Time",
    slug: "egypt",
    category: "Asia, Africa & Europe",
    location: "Egypt",
    date: "March 3, 2026",
    author: "Ms. Paroma Ganguly",
    image: "egypt.png",
    description:
      "Travel through Egypt's remarkable heritage, historic landmarks and fascinating stories.",
  },
  {
    title: "Under the Same Sky: Notes from Vietnam and Cambodia",
    slug: "vietnam-cambodia",
    category: "Asia, Africa & Europe",
    location: "Vietnam and Cambodia",
    date: "October 27, 2025",
    author: "Kuhu Adhikary",
    image: "vietnam-cambodia.png",
    description:
      "Discover historic temples, vibrant cities and the distinctive cultures of Southeast Asia.",
  },
];

// =====================================================
// CATEGORIES
// =====================================================
const categories = [
  "All",
  "Spiritual Diaries",
  "Northeast Diaries",
  "Heart of Bharat",
  "Asia, Africa & Europe",
];

// =====================================================
// DIARY CARD IMAGE
// Missing image par blank placeholder visible rahega.
// =====================================================
function DiaryImage({ diary, imageBase }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="wanderlust-diary-image">
      {!imageFailed && diary.image && (
        <img
          src={`${imageBase}${diary.image}`}
          alt={diary.title}
          loading="lazy"
          onError={() => setImageFailed(true)}
        />
      )}

      {(imageFailed || !diary.image) && (
        <div
          className="wanderlust-image-placeholder"
          aria-label={`Image placeholder for ${diary.title}`}
        >
          <span>SILVERGENIE WANDERLUST</span>
          <strong>{diary.location}</strong>
        </div>
      )}
    </div>
  );
}

// =====================================================
// WANDERLUST DIARIES PAGE
// =====================================================
function WanderlustDiaries() {
  const [activeCategory, setActiveCategory] = useState("All");

  const imageBase = `${import.meta.env.BASE_URL}image/blog/`;

  const filteredDiaries =
    activeCategory === "All"
      ? diaries
      : diaries.filter(
          (diary) => diary.category === activeCategory
        );

  return (
    <div className="wanderlust-diaries-page">

      {/* HERO */}
      <section className="wanderlust-hero">
        <div className="wanderlust-hero-content">
          <span className="wanderlust-eyebrow">
            SILVERGENIE WANDERLUST
          </span>

          <h1>
            Wanderlust
            <br />
            Diaries
          </h1>

          <p>
            Stories, destinations and experiences that inspire
            meaningful journeys and unforgettable memories.
          </p>

          <a
            href="#diary-collection"
            className="wanderlust-button"
          >
            Explore Our Diaries <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="wanderlust-intro">
        <h2>Every Journey Has a Story</h2>

        <p>
          At SilverGenie Wanderlust, we believe travel is about
          discovering new places, experiencing different cultures
          and creating memories that stay with us forever.
        </p>

        <p>
          Explore inspiring destinations, cultural celebrations,
          spiritual journeys and travel experiences from India
          and around the world.
        </p>
      </section>

      {/* TRAVEL WITH CARE */}
      <section className="wanderlust-promo">
        <div>
          <span className="wanderlust-eyebrow">
            TRAVEL WITH SILVERGENIE
          </span>

          <h2>Travel Without Worry</h2>

          <p>
            Make every journey more comfortable with thoughtfully
            planned travel experiences designed around your needs.
            Discover new destinations with greater confidence,
            comfort and peace of mind.
          </p>

          <Link
            to="/travel-with-care"
            className="wanderlust-button"
          >
            Explore Travel With Care <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* DIARY COLLECTION */}
      <section
        className="wanderlust-diary-section"
        id="diary-collection"
      >
        <div className="wanderlust-diary-heading">
          <span className="wanderlust-eyebrow">
            STORIES THAT INSPIRE
          </span>

          <h2>Explore Our Travel Diaries</h2>

          <p>
            From spiritual destinations and cultural celebrations
            to extraordinary international journeys, find
            inspiration for your next adventure.
          </p>
        </div>

        {/* CATEGORY FILTERS */}
        <div
          className="wanderlust-categories"
          aria-label="Filter travel diaries by category"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                activeCategory === category ? "active" : ""
              }
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* RESULTS COUNT */}
        <p
          className="wanderlust-results-count"
          aria-live="polite"
        >
          Showing {filteredDiaries.length}{" "}
          {filteredDiaries.length === 1 ? "story" : "stories"}
        </p>

        {/* DIARY CARDS */}
        <div className="wanderlust-diaries-grid">
          {filteredDiaries.length > 0 ? (
            filteredDiaries.map((diary) => (
              <article
                className="wanderlust-diary-card"
                key={diary.slug}
              >
                <DiaryImage
                  diary={diary}
                  imageBase={imageBase}
                />

                <div className="wanderlust-diary-content">
                  <span className="wanderlust-diary-category">
                    {diary.category}
                  </span>

                  <div className="wanderlust-diary-meta">
                    <span>{diary.location}</span>
                    <span aria-hidden="true">•</span>
                    <span>{diary.date}</span>
                  </div>

                  <h3>{diary.title}</h3>

                  <p>{diary.description}</p>

                  <p className="wanderlust-diary-author">
                    <span>By </span>
                    {diary.author}
                  </p>

                  <Link
                    to={`/wanderlust/${diary.slug}`}
                    className="wanderlust-read-story"
                    aria-label={`Read story: ${diary.title}`}
                  >
                    Read Story <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <div className="wanderlust-empty-state">
              <h3>No stories found</h3>

              <p>
                Please select another category to explore more journeys.
              </p>

              <button
                type="button"
                className="wanderlust-button"
                onClick={() => setActiveCategory("All")}
              >
                View All Stories
              </button>
            </div>
          )}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="wanderlust-bottom-cta">
        <h2>Your Next Journey Begins Here</h2>

        <p>
          Looking for a comfortable, thoughtfully planned
          travel experience? Explore SilverGenie's Travel
          With Care services and start planning your next journey.
        </p>

        <Link to="/travel-with-care">
          Discover Travel With Care <span aria-hidden="true">→</span>
        </Link>
      </section>
    </div>
  );
}

export default WanderlustDiaries;