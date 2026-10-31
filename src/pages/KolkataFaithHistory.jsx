import { Link } from "react-router-dom";
import "../styles/KolkataFaithHistory.css";
const story = {
  title: "A Journey Through Faith, History, and Kolkata’s Essence",
  category: "Spiritual Diaries",
  date: "December 10, 2025",
  author: "Wanderlust Diaries",
  location: "Kolkata, India",
  image:
    "https://www.yoursilvergenie.com/wp-content/uploads/2025/12/Screenshot-2025-12-10-133205silvergenie_banner_tour.png",
};

const paragraphs = [
  "“Joto Mot Toto Poth”—many minds, many paths—captures the spirit of this journey: people may approach faith in different ways, while sharing a common search for meaning. When Poulomi, founder of SilverGenie, invited the group to explore Kolkata’s spiritual and cultural heritage in a day, the author was glad to join.",

  "The women’s group set out on November 15 for a day shaped by companionship, conversation and the chance to experience the city beyond a checklist of sights. Their first stop was Kalighat Temple, where worship, incense and the energy of the shrine offered a moment to pause and reflect.",

  "At Sister Nivedita’s House, the group learned about Margaret Noble’s work in India, including the girls’ school she opened in 1898. A meeting with Aseshprana Mataji connected the history of the house to the women who have carried its work forward.",

  "The visit to Baghbazar Maa er Bari brought a quieter moment. Sri Sarada Devi lived in this home during the final twelve years of her life. Seeing the preserved belongings and sharing prasad made the visit feel personal; the house also holds memories of Kolkata’s wider social history.",

  "Later, the Sister Nivedita Heritage Museum offered a closer look at the history of women’s education and service through its restored building, artefacts, letters and photographs.",

  "At Dakshineswar Temple, the group reflected on Rani Rashmoni’s role in building the temple in the 1850s. The nearby river and the shrine of Maa Bhavatarini made a memorable stop before the evening visit to Belur Math.",

  "The aarti at Belur Math brought the group together in a quieter moment as lamps and chants filled the riverside setting. Afterward, Bengali sweets and dinner at 6 Ballygunge Place rounded out the day.",

  "For the travellers, the day was about more than sightseeing: it was an opportunity to share Kolkata’s spiritual and cultural heritage together, and to carry home a sense of connection with the city.",
];

function StoryHero() {
  return (
    <section className="wanderlust-story-hero">
      <img
        src={story.image}
        alt="Kolkata travel experience"
        className="wanderlust-story-hero-image"
      />

      <div className="wanderlust-story-hero-overlay">
        <span className="wanderlust-story-hero-category">{story.category}</span>
        <h1>{story.title}</h1>
      </div>
    </section>
  );
}

export default function KolkataFaithHistory() {
  return (
    <main className="wanderlust-story-page">
      <StoryHero />

      <div className="wanderlust-story-container">
        <nav className="wanderlust-story-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to="/wanderlust-diaries">Wanderlust Diaries</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{story.title}</span>
        </nav>

        <article className="wanderlust-story-article">
          <header className="wanderlust-story-header">
            <div className="wanderlust-story-meta">
              <span>{story.date}</span>
              <span>By {story.author}</span>
              <span>{story.location}</span>
            </div>

            <p className="wanderlust-story-intro">
              A women’s group explores Kolkata through its temples, historic
              homes, cultural landmarks and shared moments.
            </p>
          </header>

          <div className="wanderlust-story-body">
            <section className="wanderlust-story-content-section">
              <h2>A Day Through Kolkata</h2>
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>

            <p className="wanderlust-story-closing">
              A journey through faith, history and the heart of Kolkata.
            </p>
          </div>

          <section className="wanderlust-story-tags" aria-label="Story tags">
            <h3>Tags</h3>
            <div className="wanderlust-story-tags-list">
              <span className="wanderlust-story-tag">{story.category}</span>
            </div>
          </section>

          <p className="wanderlust-story-disclaimer">
            The views and opinions expressed in this blog belong to the author.
            Please obtain the author’s permission before reusing the writing or
            photographs.
          </p>

          <nav
            className="wanderlust-story-related"
            aria-label="Related stories"
          >
            <Link to="/trip-to-neora-valley-and-east-sikkim-via-the-silk-route">
              Trip to Neora Valley and East Sikkim via the Silk Route
            </Link>

            <Link to="/under-the-white-rann-moon">
              Under the White Rann Moon: A Journey Designed with Care
            </Link>
          </nav>

          <div className="wanderlust-story-navigation">
            <Link to="/wanderlust-diaries" className="wanderlust-story-back">
              ← Back to Wanderlust Diaries
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
