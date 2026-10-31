import { Link } from "react-router-dom";
import "../styles/JagdhatriPujo.css";
const story = {
  title: "From Spirit to Celebration: Our Jagadhatri Pujo Experience",
  category: "Wanderlust Diaries",
  date: "November 1, 2025",
  author: "Wanderlust Diaries",
  location: "Chandannagar, West Bengal",
  heroImage:
    "https://www.yoursilvergenie.com/wp-content/uploads/2025/11/jagadhatri-pujo.png",
  articleImage:
    "https://www.yoursilvergenie.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-01-at-19.28.13_bbd6c9a9.jpg",
};

const paragraphs = [
  "The SilverGenie Wanderlust group travelled to Chandannagar to experience Jagadhatri Pujo, a celebration that brings together devotion and local culture. Jagadhatri is understood as the goddess who sustains the universe.",
  "The day began with tea at Ahare Bahare, followed by visits to several neighbourhood pandals. Brahmanpara Jagarani welcomed the group with lively community spirit; Shitala Tala Sarbojanin offered a warm reception, and the golden display at Kolpukur Dhar made a strong impression. The group continued to Khalisani before stopping for lunch.",
  "The afternoon brought more pandal visits, including Fotikgora, Moddhanchal Sarbojanin and Beniyapukur. With careful guidance throughout the route, the group completed its parikrama at Bagbazar Sarbojanin.",
  "The experience was thoughtfully paced, with comfortable travel intervals, refreshments and time to enjoy each stop. The team helped everyone feel included and supported, even amid the busy festival crowds.",
  "For the travellers, the day became a shared celebration of faith, friendship and tradition. The care put into the arrangements allowed everyone to experience Chandannagar’s Jagadhatri Puja at their own pace.",
];

function StoryHero() {
  return (
    <section className="wanderlust-story-hero">
      <img
        src={story.heroImage}
        alt="Jagadhatri Puja celebration in Chandannagar"
        className="wanderlust-story-hero-image"
      />

      <div className="wanderlust-story-hero-overlay">
        <span className="wanderlust-story-hero-category">{story.category}</span>
        <h1>{story.title}</h1>
      </div>
    </section>
  );
}

export default function JagadhatriPujo() {
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
              A festive day in Chandannagar brings together Jagadhatri Pujo,
              neighbourhood pandals and the warmth of travelling as a group.
            </p>
          </header>

          <div className="wanderlust-story-body">
            <section className="wanderlust-story-content-section">
              <h2>Jagadhatri Pujo in Chandannagar</h2>

              {paragraphs.slice(0, 2).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>

            <figure className="wanderlust-story-inline-image">
              <img
                src={story.articleImage}
                alt="A moment from the Chandannagar Jagadhatri Puja journey"
                loading="lazy"
              />
              <figcaption>
                A moment from the Chandannagar Jagadhatri Puja experience.
              </figcaption>
            </figure>

            <section className="wanderlust-story-content-section">
              <h2>A Day of Pandal Visits</h2>

              {paragraphs.slice(2).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>

            <p className="wanderlust-story-closing">
              A celebration of faith, companionship and care.
            </p>
          </div>

          <section className="wanderlust-story-tags" aria-label="Story tags">
            <h3>Tags</h3>
            <div className="wanderlust-story-tags-list">
              <span className="wanderlust-story-tag">PujoWithCare</span>
              <span className="wanderlust-story-tag">Wanderlust Diaries</span>
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
            <Link to="/no-wonder-its-a-wonder-my-solo-travel-story-at-the-taj-mahal">
              No wonder, it’s a wonder: My Solo Travel Story at the Taj Mahal
            </Link>

            <Link to="/trip-to-neora-valley-and-east-sikkim-via-the-silk-route">
              Trip to Neora Valley and East Sikkim via the Silk Route
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
