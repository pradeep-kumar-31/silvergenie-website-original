import { Link } from "react-router-dom";
import "../styles/Mahakumbh.css";

const story = {
  title: "Through the Crowds: Experiencing the Mahakumbh",
  category: "Spiritual Diaries",
  date: "February 26, 2025",
  authors: "Dr. Tushar Kanti Majumdar & Dr. Dipika Majumdar",
  location: "Prayagraj, Uttar Pradesh",
  heroImage:
    "https://www.yoursilvergenie.com/wp-content/uploads/2025/02/mahakumbh.jpeg",
  articleImage:
    "https://www.yoursilvergenie.com/wp-content/uploads/2025/09/photo-collage.png.png",
  authorImage:
    "https://www.yoursilvergenie.com/wp-content/uploads/2025/09/Picture2.jpg",
};

const paragraphs = [
  "In February 2025, an opportunity to attend the Mahakumbh came together for the authors and their family. Their daughter planned to travel from Delhi by train, but the long walk and access restrictions made that route difficult for the older members of the family.",
  "They learned about SilverGenie’s arrangements for senior travellers and flew to Delhi. A caregiver accompanied them on the drive to Prayagraj, while a team led by Kuhu Adhikary coordinated the group’s onward journey in three cars, each with a caregiver to support the seniors.",
  "The group reached Prayagraj around midnight and stayed in well-kept tents near the Ganges. The accommodation, meals and helpful staff made it easier to settle in before the early morning visit to the bathing ghat.",
  "The crowds initially made the route feel daunting. Caregivers helped the seniors navigate the steps to the river and return to the tents safely, making it possible for them to take part in the ritual with greater ease.",
  "That evening brought dinner, songs and conversation. The group left for Delhi early the next morning to avoid the busiest period, but the vast number of pilgrims still made the journey an unforgettable sight.",
  "For the authors, the experience combined spiritual discovery with practical support and companionship. Being able to take part safely, alongside other senior travellers, made the Mahakumbh especially memorable.",
];

function StoryHero() {
  return (
    <section className="wanderlust-story-hero">
      <img
        src={story.heroImage}
        alt="Pilgrims gather for the Mahakumbh in Prayagraj"
        className="wanderlust-story-hero-image"
      />

      <div className="wanderlust-story-hero-overlay">
        <span className="wanderlust-story-hero-category">{story.category}</span>
        <h1>{story.title}</h1>
      </div>
    </section>
  );
}

function AuthorCard() {
  return (
    <section className="wanderlust-story-curators">
      <h2>Author</h2>

      <article className="wanderlust-story-curator">
        <img src={story.authorImage} alt="Dr. Dipika Majumdar" loading="lazy" />

        <div>
          <h3>Dr. Dipika Majumdar</h3>
          <p>
            Dr. Dipika Majumdar studied Political Science and taught at
            Muralidhar College, Rabindra Bharati University, Netaji Subhas Mukta
            University, Maulana Azad College and Basanti Devi College. She is
            now a part-time research supervisor at Seacom Skills University. She
            has authored books and articles, spoken at seminars, and has a
            longstanding interest in recitation, reading and German language and
            literature.
          </p>
        </div>
      </article>
    </section>
  );
}

export default function Mahakumbh() {
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
              <span>By {story.authors}</span>
              <span>{story.location}</span>
            </div>

            <p className="wanderlust-story-intro">
              A family’s visit to the Mahakumbh becomes possible with thoughtful
              travel arrangements and caregiver support.
            </p>
          </header>

          <div className="wanderlust-story-body">
            <section className="wanderlust-story-content-section">
              <h2>A Supported Journey to Prayagraj</h2>
              {paragraphs.slice(0, 3).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>

            <figure className="wanderlust-story-inline-image">
              <img
                src={story.articleImage}
                alt="A photo collage from the Mahakumbh journey"
                loading="lazy"
              />
              <figcaption>
                A moment from the family’s Mahakumbh experience.
              </figcaption>
            </figure>

            <section className="wanderlust-story-content-section">
              <h2>At the Sangam</h2>
              {paragraphs.slice(3).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>

            <p className="wanderlust-story-closing">
              A memorable meeting of faith, care and companionship.
            </p>
          </div>

          <AuthorCard />

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
            <Link to="/elder-care-and-home-health-care-understanding-the-difference">
              Elder Care and Home Health Care: Understanding the Difference
            </Link>

            <Link to="/darjeeling-kalimpong-kurseong-journey">
              Reliving the Joy: A Journey Through Darjeeling, Kalimpong, and
              Kurseong
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
