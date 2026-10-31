import { Link } from "react-router-dom";
import "../styles/Meghalaya.css";

const story = {
  title: "Meghalaya: The Abode of Clouds",
  category: "Northeast Diaries",
  date: "June 24, 2025",
  author: "Paromita Sen",
  location: "Meghalaya, India",
  heroImage:
    "https://www.yoursilvergenie.com/wp-content/uploads/2025/06/meghalaya.png",
  forestImage:
    "https://www.yoursilvergenie.com/wp-content/uploads/2025/09/photo-collage.png-2.png",
  authorImage:
    "https://www.yoursilvergenie.com/wp-content/uploads/2025/09/Picture19-1.jpg",
};

function StoryHero() {
  return (
    <header className="meghalaya-hero">
      <img
        className="meghalaya-hero-image"
        src={story.heroImage}
        alt="Cloud-covered hills and waterfalls in Meghalaya"
      />
      <div className="meghalaya-hero-shade" />

      <div className="meghalaya-hero-content">
        <span className="meghalaya-category">{story.category}</span>
        <h1>{story.title}</h1>
      </div>
    </header>
  );
}

function AuthorCard() {
  return (
    <section className="meghalaya-author">
      <h2>Author</h2>

      <article className="meghalaya-author-card">
        <img src={story.authorImage} alt="Paromita Sen" loading="lazy" />

        <div>
          <h3>Paromita Sen</h3>
          <p>
            Paromita Sen is a homemaker and mother of two. After dedicating more
            than 25 years to raising her family, she began a new chapter serving
            the elderly community through SilverGenie Care. She enjoys music,
            meeting people and exploring new places, and has a deep appreciation
            for nature.
          </p>
        </div>
      </article>
    </section>
  );
}

export default function Meghalaya() {
  return (
    <main className="meghalaya-page">
      <StoryHero />

      <div className="meghalaya-container">
        <nav className="meghalaya-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to="/wanderlust-diaries">Wanderlust Diaries</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{story.title}</span>
        </nav>

        <article className="meghalaya-article">
          <header className="meghalaya-article-header">
            <div className="meghalaya-meta">
              <span>{story.date}</span>
              <span>By {story.author}</span>
              <span>{story.location}</span>
            </div>

            <p className="meghalaya-intro">
              A journey through Meghalaya’s misty hills, sacred forest,
              welcoming villages, living root bridge and waterfalls.
            </p>
          </header>

          <div className="meghalaya-body">
            <section className="meghalaya-section">
              <h2>A Land of Clouds and Green Hills</h2>
              <p>
                Meghalaya’s rolling green hills, drifting mist and waterfalls
                create a landscape that seems to reveal a new view at every
                turn.
              </p>
              <p>
                Visiting the Sacred Forest offered a quiet encounter with a
                place cared for by local villagers. Towering trees, abundant
                plant life and the community’s respect for the forest made the
                walk feel peaceful and closely connected to nature.
              </p>
            </section>

            <section className="meghalaya-section">
              <h2>Pynter Village</h2>
              <p>
                Pynter’s scenery and warm hospitality made the village a
                memorable stop. Local food and music gave the visit a sense of
                everyday life and tradition. The melodies carried a nostalgic
                quality, even as some instruments become less common.
              </p>
            </section>

            <figure className="meghalaya-feature-image">
              <img
                src={story.forestImage}
                alt="A collage from the Meghalaya journey"
                loading="lazy"
              />
              <figcaption>Scenes from the Meghalaya journey.</figcaption>
            </figure>

            <section className="meghalaya-section">
              <h2>The Living Root Bridge</h2>
              <p>
                The living root bridge was a striking example of people working
                patiently with nature. Its living roots are guided over time to
                form a crossing, blending local ingenuity with the surrounding
                forest.
              </p>
            </section>

            <section className="meghalaya-section">
              <h2>Seven Sisters Falls</h2>
              <p>
                Seven Sisters Falls made a powerful impression, with streams
                pouring down the mountainside. Clouds and mist shifted around
                the hills, alternately revealing and hiding the landscape.
              </p>
              <p>
                Together, the forests, hills and waterfalls made the journey an
                invitation to slow down, spend time in nature and find a little
                peace.
              </p>
            </section>
          </div>

          <AuthorCard />

          <section className="meghalaya-tags" aria-label="Story tags">
            <h2>Tags</h2>
            <a
              className="meghalaya-tag"
              href="https://www.yoursilvergenie.com/tag/northeast-diaries/"
            >
              Northeast Diaries
            </a>
          </section>

          <p className="meghalaya-disclaimer">
            <strong>Disclaimer:</strong> The views and opinions expressed in
            this blog are solely those of the author. The blog page is protected
            under SilverGenie’s copyright, while the written content remains the
            intellectual property of the author. Reproduction, distribution, or
            use requires the author’s prior consent.
          </p>

          <nav className="meghalaya-related" aria-label="Related stories">
            <Link to="/darjeeling-kalimpong-kurseong-journey">
              Reliving the Joy: A Journey Through Darjeeling, Kalimpong, and
              Kurseong
            </Link>
            <Link to="/my-kerala-diary">My Kerala Diary</Link>
          </nav>

          <div className="meghalaya-back">
            <Link to="/wanderlust-diaries">← Back to Wanderlust Diaries</Link>
          </div>
        </article>
      </div>
    </main>
  );
}
