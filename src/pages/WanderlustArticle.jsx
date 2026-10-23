import { Link, useParams } from "react-router-dom";
import { wanderlustArticles } from "../data/wanderlustArticles";
import "../styles/WanderlustArticle.css";

const imageBase = `${import.meta.env.BASE_URL}image/blog/`;

export default function WanderlustArticle() {
  const { slug } = useParams();

  const article = wanderlustArticles[slug];

  if (!article) {
    return (
      <main className="wanderlust-article-page">
        <div className="wanderlust-not-found">
          <h1>Article Not Found</h1>
          <p>Sorry, this Wanderlust story could not be found.</p>
          <Link to="/wanderlust-diaries">
            Back to Wanderlust Diaries
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="wanderlust-article-page">
      <article className="wanderlust-article">

        {/* HERO SECTION */}
        <header className="wanderlust-article-header">
          <img
            className="wanderlust-hero-image"
            src={`${imageBase}${article.image}`}
            alt={article.title}
          />

          <div className="wanderlust-article-overlay">
            <span className="wanderlust-article-category">
              SILVERGENIE WANDERLUST DIARIES
            </span>

            <h1>{article.title}</h1>

            <p className="wanderlust-article-meta">
              {article.date} | By Wanderlust Diaries
            </p>
          </div>
        </header>

        {/* ARTICLE CONTENT */}
        <div className="wanderlust-article-content">
          {article.intro && <p>{article.intro}</p>}

          {article.paragraphs?.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          {article.sections?.map((section, index) => (
            <section key={index}>
              <h2>{section.heading}</h2>

              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex}>{paragraph}</p>
              ))}
            </section>
          ))}

          {article.collage && (
            <figure className="wanderlust-article-collage">
              <img
                src={`${imageBase}${article.collage}`}
                alt={`${article.title} — travel memories`}
                loading="lazy"
              />
            </figure>
          )}

          {/* TAG */}
          <div className="wanderlust-article-tags">
            <span>Category:</span>
            <span className="wanderlust-article-tag">
              {article.category}
            </span>
          </div>

          {/* DISCLAIMER */}
          <div className="wanderlust-article-disclaimer">
            <strong>Disclaimer:</strong>{" "}
            {article.disclaimer ||
              "This article is shared for informational and travel inspiration purposes."}
          </div>

          {/* BACK BUTTON */}
          <nav className="wanderlust-article-navigation">
            <Link to="/wanderlust-diaries">
              ← Back to Wanderlust Diaries
            </Link>
          </nav>

        </div>
      </article>
    </main>
  );
}