import React from "react";
import { Link } from "react-router-dom";
import "../styles/WanderlustArticle.css";

const BLOG_IMAGE = `${import.meta.env.BASE_URL}image/blog/`;

function ArticleImageCard({
  image,
  alt,
  caption,
  placeholder = false,
}) {
  return (
    <figure
      className={`tripura-image-card ${
        placeholder ? "tripura-image-card-placeholder" : ""
      }`}
    >
      {placeholder ? (
        <div
          className="tripura-image-placeholder"
          role="img"
          aria-label={alt}
        >
          <div className="tripura-placeholder-icon" aria-hidden="true">
            ▧
          </div>

          <span>Image will be added later</span>
        </div>
      ) : (
        <img
          src={`${BLOG_IMAGE}${image}`}
          alt={alt}
          loading="lazy"
        />
      )}

      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

function CuratorCard({ name, description }) {
  return (
    <div className="tripura-curator-card">
      <div
        className="tripura-curator-photo"
        role="img"
        aria-label={`${name} photograph placeholder`}
      >
        <div className="tripura-placeholder-icon" aria-hidden="true">
          ▧
        </div>

        <span>Photo to be added</span>
      </div>

      <div className="tripura-curator-info">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function TripuraShaktipeeth() {
  return (
    <main className="wanderlust-article-page tripura-article-page">

      {/* BREADCRUMB */}
      <nav
        className="wanderlust-article-breadcrumb"
        aria-label="Breadcrumb"
      >
        <Link to="/">Home</Link>

        <span>/</span>

        <Link to="/wanderlust-diaries">
          Wanderlust Diaries
        </Link>

        <span>/</span>

        <span aria-current="page">Tripura</span>
      </nav>

      {/* ARTICLE HEADER */}
      <header className="wanderlust-article-header tripura-article-header">
        <span className="tripura-article-eyebrow">
          SILVERGENIE WANDERLUST DIARIES
        </span>

        <h1>
          Shaktipeeth Stories: Exploring Faith, Dynasty, and
          Tradition in Tripura
        </h1>

        <div className="wanderlust-article-meta">
          <span>April 10, 2026</span>

          <span className="wanderlust-article-meta-divider">
            |
          </span>

          <span>By Embracing Autism</span>
        </div>
      </header>

      {/* FEATURED IMAGE */}
      <div className="tripura-featured-image">
        <img
          src={`${BLOG_IMAGE}tripura-shaktipeeth.png`}
          alt="Tripura Sundari Temple, Tripura"
          fetchPriority="high"
        />

        <div className="tripura-featured-overlay">
          <span>FAITH · HERITAGE · TRADITION</span>

          <p>
            Exploring Tripura through its sacred temples,
            royal heritage and living traditions.
          </p>
        </div>
      </div>

      {/* ARTICLE CONTENT */}
      <article className="wanderlust-article-content tripura-article-content">

        <p>
          Some journeys gradually reveal a deeper story.
          A visit to Tripura during Basanti Puja became an
          opportunity to explore the region's faith, history
          and royal heritage.
        </p>

        <p>
          From ancient temples to celebrations observed
          across generations, the journey offered a glimpse
          into traditions that remain an active part of
          everyday cultural life in Tripura.
        </p>

        {/* TRIPURA SUNDARI TEMPLE */}
        <section className="tripura-article-section">
          <h2>
            Tripura Sundari Temple: A Sacred Shaktipeeth
          </h2>

          <p>
            Situated in Udaipur, Tripura Sundari Temple is
            recognised as one of the 51 Shaktipeeths. It is
            an important spiritual landmark connected with
            the religious traditions and royal history
            of Tripura.
          </p>

          <p>
            The shrine is associated with Maharaja Dhanya
            Manikya, who, according to tradition, was
            inspired by a divine dream to establish the
            temple. Hindu belief connects the sacred site
            with the right foot or leg of Goddess Sati.
          </p>

          <p>
            The temple reflects the lasting relationship
            between devotion and royal patronage. Its
            redevelopment and refurbishment were inaugurated
            by Prime Minister Narendra Modi on September 22,
            2025, under the Government of India's PRASHAD
            pilgrimage development scheme.
          </p>

          <ArticleImageCard
            image="tripura-shaktipeeth.png"
            alt="Tripura Sundari Temple in Udaipur"
            caption="Tripura Sundari Temple, an important spiritual landmark in Tripura."
          />
        </section>

        {/* KASBA KALI BARI */}
        <section className="tripura-article-section">
          <h2>
            Kasba Kali Bari: Faith Across Borders
          </h2>

          <p>
            On the journey back towards Agartala, the
            experience continued at Kasba Kali Bari near
            Kamalasagar. The temple stands beside a large
            lake, with Bangladesh visible on the opposite
            side.
          </p>

          <p>
            Its history is associated with Maharaja Dhanya
            Manikya and the royal lineage that supported
            the region's religious institutions.
          </p>

          <p>
            The temple's location also gives it historical
            significance. Despite being close to the
            international border, it remained standing
            during the 1971 Bangladesh Liberation War.
            Today, it continues to represent the region's
            cultural heritage and resilience.
          </p>

          <ArticleImageCard
            alt="Kasba Kali Bari beside Kamalasagar Lake"
            caption="Kasba Kali Bari, near Kamalasagar and the Bangladesh border."
            placeholder
          />
        </section>

        {/* BASANTI PUJA */}
        <section className="tripura-article-section">
          <h2>
            Basanti Puja: A Living Tradition
          </h2>

          <p>
            Basanti Puja during Chaitra Navratri brought
            together many of the historical and spiritual
            themes experienced throughout the journey.
            At Durga Bari, the preparations and rituals
            reflect a tradition that continues across
            generations.
          </p>

          <p>
            The goddess is worshipped in a distinctive
            two-handed form. The celebration has a strong
            connection with Tripura's royal family and
            continues to be conducted at the state level,
            carrying forward customs associated with the
            Manikya dynasty.
          </p>

          <ArticleImageCard
            alt="Basanti Puja at Durga Bari in Tripura"
            caption="Basanti Puja, a tradition maintained across generations."
            placeholder
          />
        </section>

        {/* DURGA PUJO */}
        <section className="tripura-article-section">
          <h2>
            The Warmth of Durga Pujo at Home
          </h2>

          <p>
            A visit to a patron's home for Durga Pujo
            offered a more personal experience of the
            celebrations. Rather than observing the
            festivities from a distance, the travellers
            became part of a gathering shaped by shared
            faith and hospitality.
          </p>

          <p>
            The Dhunuchi Naach brought movement, music
            and energy to the celebration. The experience
            highlighted how cultural traditions can bring
            people together and create a lasting sense
            of belonging.
          </p>

          <ArticleImageCard
            alt="Durga Pujo celebration at a family home"
            caption="Durga Pujo, experienced through community and togetherness."
            placeholder
          />
        </section>

        {/* ROYAL HERITAGE */}
        <section className="tripura-article-section">
          <h2>
            The Lasting Legacy of the Manikya Dynasty
          </h2>

          <p>
            Across the temples and celebrations, the
            influence of the Manikya dynasty remained
            a recurring theme. Royal history, religious
            practices and community traditions continue
            to intersect throughout Tripura.
          </p>

          <p>
            Experiencing these places during Basanti Puja
            offered an understanding of how historical
            customs are not simply preserved as memories
            of the past. They continue to be practised
            and passed on to new generations.
          </p>
        </section>

        {/* CONCLUSION */}
        <section className="tripura-article-section tripura-conclusion">
          <h2>A Journey to Remember</h2>

          <p>
            The journey through Tripura brought together
            sacred places, historical connections and
            celebrations that reflect the region's
            enduring spiritual heritage.
          </p>

          <p>
            Beyond the destinations themselves, the
            travellers valued the feeling of community,
            acceptance and shared devotion that emerged
            throughout the experience.
          </p>

          <p>
            The journey concluded with prayers and the
            hope of meeting again for the celebrations
            in the following year.
          </p>

          <p className="wanderlust-article-closing">
            Asche Bochor Abar Hobe.
          </p>
        </section>
      </article>

      {/* ABOUT THE CURATORS */}
      <section className="wanderlust-article-curators tripura-curators">
        <div className="tripura-section-heading">
          <span>THE PEOPLE BEHIND THE STORY</span>

          <h2>About the Curators</h2>

          <p>
            Meet the people whose experiences and perspectives
            contribute to this story.
          </p>
        </div>

        <div className="tripura-curator-list">
          <CuratorCard
            name="Mishmi"
            description="Mishmi is a young adult on the autism spectrum who enjoys design and music. She also works with neurodivergent children and shares her experiences of embracing autism."
          />

          <CuratorCard
            name="Gurpreet Kaur"
            description="Gurpreet is a dedicated special educator with 16 years of experience supporting neurodivergent children and young adults. She has worked with Mishmi for several years and is also a certified child psychologist who conducts counselling sessions for young adults."
          />
        </div>
      </section>

      {/* ARTICLE TAGS */}
      <div className="wanderlust-article-tags tripura-article-tags">
        <span>Explore:</span>

        <Link to="/wanderlust-diaries">
          Northeast Diaries
        </Link>

        <Link to="/wanderlust-diaries">
          Spiritual Diaries
        </Link>
      </div>

      {/* CONTENT SOURCE NOTE */}
      <aside className="wanderlust-article-disclaimer">
        <strong>Article:</strong>{" "}

        <a
          href="https://www.yoursilvergenie.com/shaktipeeth-stories-exploring-faith-dynasty-and-tradition-in-tripura/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Original SilverGenie Tripura story
        </a>
      </aside>
    </main>
  );
}