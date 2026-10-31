import { Link } from "react-router-dom";
import "../styles/DurgaPujaWithCare.css";

const story = {
  title: "From Devotion to Delight: Our #DurgaPujoWithCare Experience",
  category: "Wanderlust with Care",
  date: "October 8, 2025",
  author: "SilverGenie",
  location: "Kolkata, West Bengal",
  heroImage:
    "https://www.yoursilvergenie.com/wp-content/uploads/2025/10/durga-pujo.png",
  firstPhoto:
    "https://www.yoursilvergenie.com/wp-content/uploads/2020/10/White-Modern-Best-Friend-Photo-Collage.png",
  secondPhoto:
    "https://www.yoursilvergenie.com/wp-content/uploads/2025/10/photo-collage.png-4.png",
};

const articleParagraphs = [
  "Durga Puja brings together the sound of dhak, the fragrance of incense and a strong sense of community. The group’s Pujo Parikrama offered a day of devotion, shared memories and new discoveries.",
  "Some travellers were initially concerned about the long day, traffic and crowds. Thoughtful arrangements helped the group settle in and enjoy each stop at a comfortable pace.",
  "The first day included Kalighat, Belur Math and Dakshineswar. Each place offered its own atmosphere, from quiet prayer to the movement of devotees along the river. Rain arrived on the second day, but umbrellas, conversation and familiar songs made it part of the experience.",
  "Lunch at Bhajohari Manna brought comforting Bengali food and memories of family gatherings. The schedule felt unhurried, with the team taking care of the details along the way.",
  "Drivers, guides and coordinators helped create a friendly atmosphere through their patience and small acts of kindness. By the final evening, rain-lit North Kolkata offered a gentle end to the journey.",
  "For the group, Pujo was about more than pandals and rituals. Companionship, comfort and shared moments were central to the experience.",
  "SilverGenie’s #DurgaPujoWithCare initiative aims to make festival experiences more inclusive and accessible. The effort grew from community experiences and highlights how empathy and collaboration can help more people feel welcome.",
  "The initiative was also featured by The Hindu and Financial Express for its focus on accessibility and inclusion during Durga Puja.",
];

const pressFeatures = [
  {
    publication: "Financial Express",
    title: "From art to access: Durga Puja evolves",
    description:
      "A feature on how art, accessibility and community are shaping a more inclusive Durga Puja.",
    href: "https://www.financialexpress.com/",
    image: "https://www.yoursilvergenie.com/wp-content/uploads/2020/10/z1.jpg",
    imageAlt: "Namita Adhikary",
  },
  {
    publication: "The Hindu",
    title: "Durga Puja pandals, accessibility & safety",
    description:
      "Coverage of accessibility, safety and inclusive measures at Kolkata’s Durga Puja pandals.",
    href: "https://www.thehindu.com/",
    image: "https://www.yoursilvergenie.com/wp-content/uploads/2020/10/z2.png",
    imageAlt: "Namita Adhikary",
  },
];

function StoryHero() {
  return (
    <section className="wanderlust-story-hero">
      <img
        src={story.heroImage}
        alt="Durga Puja celebration in Kolkata"
        className="wanderlust-story-hero-image"
      />

      <div className="wanderlust-story-hero-overlay">
        <span className="wanderlust-story-hero-category">{story.category}</span>
        <h1>{story.title}</h1>
      </div>
    </section>
  );
}

function PressFeatures() {
  return (
    <section className="wanderlust-story-content-section">
      <h2>Read more about #DurgaPujoWithCare</h2>

      <div className="wanderlust-story-curators-grid">
        {pressFeatures.map((feature) => (
          <article
            className="wanderlust-story-curator"
            key={feature.publication}
          >
            <img src={feature.image} alt={feature.imageAlt} loading="lazy" />

            <div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <a
                href={feature.href}
                target="_blank"
                rel="noreferrer"
                className="durga-pujo-press-link"
              >
                Read on {feature.publication} ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function DurgaPujaWithCare() {
  return (
    <main className="wanderlust-story-page">
      <StoryHero />

      <div className="wanderlust-story-container">
        <nav className="wanderlust-story-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to="/wanderlust-diaries">Wanderlust with Care</Link>
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
              A Durga Puja journey through devotion, Kolkata’s landmarks and the
              comfort of experiencing the festival together.
            </p>
          </header>

          <div className="wanderlust-story-body">
            <section className="wanderlust-story-content-section">
              <h2>A Pujo Parikrama to Remember</h2>

              {articleParagraphs.slice(0, 3).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>

            <figure className="wanderlust-story-inline-image">
              <img
                src={story.firstPhoto}
                alt="A collage from the Durga Puja journey"
                loading="lazy"
              />
              <figcaption>Moments from the group’s Pujo Parikrama.</figcaption>
            </figure>

            <section className="wanderlust-story-content-section">
              {articleParagraphs.slice(3, 6).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>

            <figure className="wanderlust-story-inline-image">
              <img
                src={story.secondPhoto}
                alt="Another moment from the Pujo journey"
                loading="lazy"
              />
              <figcaption>Shared moments from #DurgaPujoWithCare.</figcaption>
            </figure>

            <section className="wanderlust-story-content-section">
              {articleParagraphs.slice(6).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>

            <PressFeatures />

            <p className="wanderlust-story-closing">
              A festival journey made warmer through care, comfort and
              companionship.
            </p>
          </div>

          <section className="wanderlust-story-tags" aria-label="Story tags">
            <h3>Tags</h3>
            <div className="wanderlust-story-tags-list">
              <span className="wanderlust-story-tag">Durga Pujo With Care</span>
              <span className="wanderlust-story-tag">Wanderlust</span>
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
            <Link to="/my-kerala-diary">My Kerala Diary</Link>
            <Link to="/under-the-same-sky-notes-from-vietnam-and-cambodia">
              Under the Same Sky: Notes from Vietnam and Cambodia
            </Link>
          </nav>

          <div className="wanderlust-story-navigation">
            <Link to="/wanderlust-diaries" className="wanderlust-story-back">
              ← Back to Wanderlust with Care
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
