import { Link } from "react-router-dom";
import "../styles/TripuraShaktipeeth.css";

const story = {
  title:
    "Shaktipeeth Stories: Exploring Faith, Dynasty, and Tradition in Tripura",
  category: "Spiritual Diaries",
  date: "April 10, 2026",
  author: "Embracing Autism",
  location: "Tripura, India",
  cardImage: `${import.meta.env.BASE_URL}image/blog/tripura-shaktipeeth.png`,
  articleImage:
    "https://www.yoursilvergenie.com/wp-content/uploads/2026/04/image003-800x800.png",
};

const sections = [
  {
    heading: "Tripura Sundari Temple",
    paragraphs: [
      "A visit to Tripura during Basanti Puja became a journey through faith, history and the region’s royal past. At Udaipur, the Tripura Sundari Temple is revered as a Shaktipeeth and is closely associated with the Manikya dynasty.",
      "Local belief connects the temple’s founding with Maharaja Dhanya Manikya and a divine vision. For generations, devotees have visited this sacred place, whose traditions bring together worship and royal patronage.",
      "The temple complex has also undergone redevelopment intended to make the historic pilgrimage site more accessible to visitors.",
    ],
  },
  {
    heading: "Kamalasagar Kali Bari",
    paragraphs: [
      "On the journey back toward Agartala, Kasba Kali Bari at Kamalasagar offered another view of Tripura’s history. The temple sits beside a broad lake, close to the Bangladesh border, and is also linked to the Manikya rulers.",
      "Its setting and its place in memories of the 1971 Bangladesh Liberation War make it an important part of the area’s cultural story, even though it is not counted among the Shaktipeeths.",
    ],
  },
  {
    heading: "Basanti Puja and Durga Bari",
    paragraphs: [
      "Basanti Puja at Durga Bari brought the journey’s spiritual and cultural threads together. Preparations for the festival reflect customs maintained over generations, and the temple’s two-armed form of the goddess is a distinctive part of its tradition.",
      "Durga Bari has historic ties to Tripura’s royal family. The state-level puja continues as a public tradition, carrying forward practices associated with the Manikya era.",
      "A household Durga Pujo added a more personal experience. Music, Dhunuchi Naach and shared celebration made the visitors feel included in the occasion rather than simply watching it.",
    ],
  },
  {
    heading: "A Living Royal Heritage",
    paragraphs: [
      "Across temples and festival rituals, the legacy of the Manikya dynasty remains part of everyday cultural life in Tripura. Experiencing Basanti Puja showed how these customs continue to be practised and passed on.",
      "The journey ended with a feeling of community and acceptance, along with the hope of returning for the next year’s celebrations.",
    ],
  },
];

const curators = [
  {
    name: "Mishmi",
    image:
      "https://www.yoursilvergenie.com/wp-content/uploads/2025/01/Picture3.png",
    bio: "Mishmi is a young adult on the autism spectrum who enjoys design and music. She works with neurodivergent children and shares her experiences of embracing autism.",
  },
  {
    name: "Gurpreet Kaur",
    image:
      "https://www.yoursilvergenie.com/wp-content/uploads/2025/01/Picture4.png",
    bio: "Gurpreet is a special educator with 16 years of experience supporting neurodivergent children and young adults. She is also a certified child psychologist who provides counselling to young adults.",
  },
];

function StoryHero() {
  return (
    <section className="wanderlust-story-hero">
      <img
        src={story.cardImage}
        alt="Tripura Sundari Temple"
        className="wanderlust-story-hero-image"
      />
      <div className="wanderlust-story-hero-overlay">
        <span className="wanderlust-story-hero-category">{story.category}</span>
        <h1>{story.title}</h1>
      </div>
    </section>
  );
}

export default function TripuraShaktipeeth() {
  return (
    <main className="wanderlust-story-page">
      <StoryHero />

      <div className="wanderlust-story-container">
        <nav className="wanderlust-story-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/wanderlust-diaries">Wanderlust Diaries</Link>
          <span>/</span>
          <span>{story.title}</span>
        </nav>

        <article className="wanderlust-story-article">
          <header className="wanderlust-story-header">
            <div className="wanderlust-story-meta">
              <span>{story.date}</span>
              <span>By {story.author}</span>
              <span>{story.location}</span>
            </div>
            <p className="wanderlust-story-intro">
              A Basanti Puja visit opened into a deeper look at Tripura’s faith,
              history, temples and living royal traditions.
            </p>
          </header>

          <div className="wanderlust-story-body">
            {sections.map((section, index) => (
              <div key={section.heading}>
                <section className="wanderlust-story-content-section">
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>

                {index === 0 && (
                  <figure className="wanderlust-story-inline-image">
                    <img
                      src={story.articleImage}
                      alt="Tripura Sundari Temple, featured in the Tripura travel story"
                      loading="lazy"
                    />
                    <figcaption>
                      Tripura Sundari Temple — photograph by the author.
                    </figcaption>
                  </figure>
                )}
              </div>
            ))}

            <p className="wanderlust-story-closing">Asche Bochor Abar Hobe.</p>
          </div>

          <section className="wanderlust-story-curators">
            <h2>About the Curators</h2>
            <div className="wanderlust-story-curators-grid">
              {curators.map((curator) => (
                <article
                  className="wanderlust-story-curator"
                  key={curator.name}
                >
                  <img src={curator.image} alt={curator.name} loading="lazy" />
                  <div>
                    <h3>{curator.name}</h3>
                    <p>{curator.bio}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="wanderlust-story-tags">
            <h3>Tags</h3>
            <div className="wanderlust-story-tags-list">
              <span className="wanderlust-story-tag">Northeast Diaries</span>
              <span className="wanderlust-story-tag">Spiritual Diaries</span>
            </div>
          </section>

          <p className="wanderlust-story-disclaimer">
            This story reflects the author’s experience and views. Please seek
            the author’s permission before reusing their writing or photographs.
          </p>

          <nav
            className="wanderlust-story-related"
            aria-label="Related stories"
          >
            <Link to="/wanderlust/shared-adventure-india">
              A Shared Adventure: Slow Exploration and Friendship in India
            </Link>
            <Link to="/wanderlust/japan">
              Walking Backwards Through Blossoms: Our Story in Japan
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
