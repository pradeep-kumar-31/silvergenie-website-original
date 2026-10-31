import { Link } from "react-router-dom";
import "../styles/MizoramJourney.css";

const story = {
  title: "Mizoram Through My Eyes: A Journey I Will Remember",
  category: "Northeast Diaries",
  date: "September 23, 2026",
  author: "Mr. D. B. Banerjee",
  location: "Mizoram, India",
  heroImage:
    "https://www.yoursilvergenie.com/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-23-at-4.45.24-PM.jpeg",
};

const gallery = [
  {
    src: "https://www.yoursilvergenie.com/wp-content/uploads/2025/01/photo-collage.png-5.png",
    alt: "Travel moments from the Mizoram journey",
  },
  {
    src: "https://www.yoursilvergenie.com/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-23-at-4.43.23-PM.jpeg",
    alt: "Scenery from the Mizoram trip",
    caption: "A rainbow appears beside a waterfall.",
  },
  {
    src: "https://www.yoursilvergenie.com/wp-content/uploads/2025/01/photo-collage.png-4.png",
    alt: "Mizoram landscape and travel highlights",
  },
  {
    src: "https://www.yoursilvergenie.com/wp-content/uploads/2025/01/photo-collage.png-3.png",
    alt: "More scenes from Mizoram",
  },
];

const paragraphs = [
  "The author had long hoped to visit India’s Northeast. When a chance came for four travellers to go from Odisha to Mizoram, they looked forward to discovering a region with landscapes and traditions new to them.",
  "As the group travelled east, the scenery changed to forested slopes and green hills. Aizawl, set among the mountains, offered beautiful views, while the local guides made the visitors feel welcome.",
  "The group also noticed the everyday courtesy around them: orderly boarding, patient queues, disciplined traffic and little unnecessary honking. These small observations became part of what made the place memorable.",
  "Getting to know Mizo culture was a highlight. The travellers joined a Cheraw performance, trying to follow the dance around moving bamboo poles. Laughter and music made it an experience they could participate in, rather than only watch.",
  "Local food gave the group another way to discover the region. Meals often stretched into conversations about the day’s sights, people they had met and dishes they had enjoyed.",
  "Outside the city, forest roads, waterfalls and mountain scenery showed another side of Mizoram. Vantawng Falls, framed by thick greenery, stood out as one of the trip’s most striking natural sights.",
  "Back in Aizawl, the group explored at a relaxed pace, including the Skywalk and Aizawl Peak. Pausing for views and photographs became a pleasure in itself.",
  "The four travellers returned with photographs, but remembered much more: the Cheraw dance, distant green hills, new flavours, generous guides and the everyday courtesy they had encountered.",
  "Their trip from Odisha became a lasting memory of Mizoram’s scenery, culture and people.",
];

function StoryHero() {
  return (
    <section className="mizoram-hero">
      <img
        className="mizoram-hero-image"
        src={story.heroImage}
        alt="Mizoram hills and scenery"
      />
      <div className="mizoram-hero-shade" />

      <div className="mizoram-hero-content">
        <span className="mizoram-category">{story.category}</span>
        <h1>{story.title}</h1>
      </div>
    </section>
  );
}

function StoryGallery() {
  return (
    <div className="mizoram-gallery">
      {gallery.map((image) => (
        <figure className="mizoram-gallery-item" key={image.src}>
          <img src={image.src} alt={image.alt} loading="lazy" />
          {image.caption && <figcaption>{image.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}

export default function MizoramJourney() {
  return (
    <main className="mizoram-page">
      <StoryHero />

      <div className="mizoram-container">
        <nav className="mizoram-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to="/wanderlust-diaries">Wanderlust Diaries</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{story.title}</span>
        </nav>

        <article className="mizoram-article">
          <header className="mizoram-article-header">
            <div className="mizoram-meta">
              <span>{story.date}</span>
              <span>By {story.author}</span>
              <span>{story.location}</span>
            </div>

            <p className="mizoram-intro">
              Four travellers journey from Odisha to Mizoram, discovering
              mountain landscapes, local culture and the warmth of its people.
            </p>
          </header>

          <div className="mizoram-body">
            <section className="mizoram-section">
              <h2>From Odisha to the Northeast</h2>
              {paragraphs.slice(0, 3).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>

            <StoryGallery />

            <section className="mizoram-section">
              <h2>Culture, Food and Waterfalls</h2>
              {paragraphs.slice(3, 6).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>

            <section className="mizoram-section">
              <h2>Exploring Aizawl</h2>
              {paragraphs.slice(6).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>

            <div className="mizoram-video">
              <iframe
                src="https://www.youtube.com/embed/zuhu3AM5Dwk"
                title="Mizoram travel video"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          <section className="mizoram-tags" aria-label="Story tags">
            <h2>Tags</h2>
            <span className="mizoram-tag">{story.category}</span>
          </section>

          <p className="mizoram-disclaimer">
            The views and opinions expressed in this story belong to the author.
            Please obtain the author’s permission before reusing the writing or
            photographs.
          </p>

          <nav className="mizoram-related" aria-label="Related stories">
            <Link to="/across-generations-across-europe-a-winter-journey-through-italy-switzerland">
              Across Generations, Across Europe: A Winter Journey Through Italy
              &amp; Switzerland
            </Link>
          </nav>

          <div className="mizoram-back">
            <Link to="/wanderlust-diaries">← Back to Wanderlust Diaries</Link>
          </div>
        </article>
      </div>
    </main>
  );
}
