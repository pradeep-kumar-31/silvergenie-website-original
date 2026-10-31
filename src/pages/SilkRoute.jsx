import { Link } from "react-router-dom";
import "../styles/SilkRoute.css";

const images = {
  hero: "https://www.yoursilvergenie.com/wp-content/uploads/2025/12/WhatsApp-Image-2026-06-20-at-12.33.08-PM.jpeg",
  kanchenjunga:
    "https://www.yoursilvergenie.com/wp-content/uploads/2020/10/Mt.-Kanchenjunga-800x435.png",
  rachela:
    "https://www.yoursilvergenie.com/wp-content/uploads/2020/10/Rachela-Peak-800x478.png",
  aritarLake:
    "https://www.yoursilvergenie.com/wp-content/uploads/2020/10/Neora-Valley-lake-800x442.png",
  eastSikkim:
    "https://www.yoursilvergenie.com/wp-content/uploads/2020/10/mountains-of-East-Sikkim-800x477.png",
  padamchen:
    "https://www.yoursilvergenie.com/wp-content/uploads/2020/10/Padamchen-800x473.png",
  sunset:
    "https://www.yoursilvergenie.com/wp-content/uploads/2020/10/beautiful-sunset-800x452.png",
  silkRouteOne:
    "https://www.yoursilvergenie.com/wp-content/uploads/2020/10/s1-800x406.png",
  silkRouteTwo:
    "https://www.yoursilvergenie.com/wp-content/uploads/2020/10/s2-800x440.png",
  babaMandir:
    "https://www.yoursilvergenie.com/wp-content/uploads/2020/10/temple-800x412.png",
  gangtok:
    "https://www.yoursilvergenie.com/wp-content/uploads/2020/10/gangtok-800x372.png",
  author:
    "https://www.yoursilvergenie.com/wp-content/uploads/2020/10/bd-chatergee.png",
};

function ArticleImage({ src, alt, caption }) {
  return (
    <figure className="silk-route-image">
      <img src={src} alt={alt} loading="lazy" />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

function SilkRouteHero() {
  return (
    <header className="silk-route-hero">
      <img
        className="silk-route-hero-image"
        src={images.hero}
        alt="Featured view from the Neora Valley and East Sikkim journey"
        onError={(event) => {
          event.currentTarget.onerror = null;
          event.currentTarget.src = images.kanchenjunga;
        }}
      />
      <div className="silk-route-hero-shade" />

      <div className="silk-route-hero-content">
        <span className="silk-route-category">Northeast Diaries</span>
        <h1>Trip to Neora Valley and East Sikkim via the Silk Route</h1>
      </div>
    </header>
  );
}

export default function SilkRoute() {
  return (
    <main className="silk-route-page">
      <SilkRouteHero />

      <div className="silk-route-container">
        <nav className="silk-route-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to="/wanderlust-diaries">Wanderlust Diaries</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">
            Trip to Neora Valley and East Sikkim via the Silk Route
          </span>
        </nav>

        <article className="silk-route-article">
          <header className="silk-route-article-header">
            <div className="silk-route-meta">
              <span>December 10, 2025</span>
              <span>By BD Chatterjee</span>
              <span>Neora Valley &amp; East Sikkim</span>
            </div>

            <p className="silk-route-intro">
              We had a six-day, five-night trip in the third week of November to
              Neora Valley National Park and East Sikkim via Zuluk through the
              Silk Route till Gangtok. This was a fabulous travel experience,
              and I will briefly touch upon these below.
            </p>
          </header>

          <div className="silk-route-body">
            <section className="silk-route-section">
              <h2>Neora Valley National Park</h2>

              <p>
                Neora Valley National Park is a sprawling reserve forest that
                spreads across an area of about 88 sq. km. It is situated near
                Lava in the Kalimpong district of West Bengal. The park is
                bordered by the forests of Sikkim on one side and by Bhutan on
                the other, with majestic Mt. Kanchenjunga in the backdrop.
              </p>

              <p>
                This was our second visit this year, and the experience has been
                mesmerizing to say the least. Rich in biodiversity and with
                spectacular mountain views, this forest is paradise on earth, as
                some of its territories are still inaccessible to human touch.
              </p>

              <p>
                We visited Rachela Peak, which is the highest point of the
                valley at 10,300 ft. From here, we experienced a breathtaking
                view of Mt. Kanchenjunga, with its pristine whiteness receiving
                the first crimson rays of the rising sun. This was an experience
                of a lifetime, as one can get a 270-degree view of the entire
                Himalayan range with Mt. Kanchenjunga at the center.
              </p>

              <ArticleImage
                src={images.kanchenjunga}
                alt="Mount Kanchenjunga seen from Neora Valley"
              />

              <p>
                After sunrise, Mt. Kanchenjunga turned golden, and it was a
                truly fascinating sight to behold.
              </p>

              <ArticleImage src={images.rachela} alt="View from Rachela Peak" />
            </section>

            <section className="silk-route-section">
              <h2>Aritar</h2>

              <p>
                From Neora Valley, we proceeded to Aritar in East Sikkim. It has
                a natural lake at an altitude of 4,600 ft., surrounded by lush
                greenery and pine forests, and a small shrine dedicated to Guru
                Padmasambhava on its banks. It was quite a pleasant experience.
              </p>

              <ArticleImage
                src={images.aritarLake}
                alt="Lake surrounded by greenery near Aritar"
              />

              <p>
                Aritar also boasts a beautiful view of a valley surrounded by
                the tall mountains of East Sikkim.
              </p>

              <ArticleImage
                src={images.eastSikkim}
                alt="Valley and mountains in East Sikkim"
              />
            </section>

            <section className="silk-route-section">
              <h2>Padamchen</h2>

              <p>
                Our next stop on our way to the Silk Route was Padamchen. It is
                a small village tucked away at 8,300 ft. It is covered with
                dense pine forests, and we witnessed a beautiful sunset at this
                altitude.
              </p>

              <div className="silk-route-image-grid">
                <ArticleImage
                  src={images.padamchen}
                  alt="Padamchen village among pine forests"
                />
                <ArticleImage
                  src={images.sunset}
                  alt="Sunset in the mountains near Padamchen"
                />
              </div>
            </section>

            <section className="silk-route-section">
              <h2>Silk Route</h2>

              <p>
                The next day, we were off to the Silk Route in East Sikkim. This
                route is famous for its zig-zag roads at a high altitude of
                12,500 ft., with stunning views of the Himalayas, including Mt.
                Kanchenjunga. This was a lifetime experience for us. A
                well-maintained road meandered through many hairpin bends and
                went past rugged mountains and some natural high-altitude lakes
                like Lake Kupup, Changu (Tsongo) Lake, and Nathang Valley.
              </p>

              <p>
                It was quite cold and windy, with blue skies, floating clouds,
                and bright sunshine. Since it was autumn, the region had not
                experienced any snowfall yet. I am told that from December to
                February, the upper reaches of East Sikkim experience heavy
                snowfall and the brownish terrain turns white.
              </p>

              <div className="silk-route-image-grid">
                <ArticleImage
                  src={images.silkRouteOne}
                  alt="Mountain road along the Silk Route"
                />
                <ArticleImage
                  src={images.silkRouteTwo}
                  alt="High-altitude scenery in East Sikkim"
                />
              </div>

              <p>
                The road went past Old Baba Mandir (Altitude: 13,123 ft.). Old
                Baba Mandir is dedicated to Baba Harbhajan Singh, the martyr of
                the 23rd Regiment of the Indian Army. It is the original bunker
                where Baba stayed during the Indo-China War in 1962. The temple
                is maintained by the Indian Army.
              </p>

              <ArticleImage
                src={images.babaMandir}
                alt="Old Baba Mandir on the Silk Route"
              />
            </section>

            <section className="silk-route-section">
              <h2>Gangtok</h2>

              <p>
                The trip ended at Gangtok, the capital of Sikkim. Here, we had
                the opportunity to visit Rumtek Monastery. It is the largest
                monastery in Sikkim and serves as a center for the study and
                practice of Buddhism. The monastery is also famous for its
                Tibetan architecture.
              </p>

              <ArticleImage
                src={images.gangtok}
                alt="Gangtok and the surrounding mountains"
              />

              <p>
                Overall, it was a memorable travel experience for us, wherein we
                had a ringside view of beautiful Sikkim, perched in the lap of
                the mighty Himalayas with its pristine beauty.
              </p>
            </section>
          </div>

          <section className="silk-route-author">
            <h2>Author</h2>

            <article className="silk-route-author-card">
              <img src={images.author} alt="BD Chatterjee" loading="lazy" />

              <div>
                <h3>BD Chatterjee</h3>
                <p>
                  BD Chatterjee is a distinguished financial expert and
                  best-selling author with over 40 years of industry experience.
                  His expertise spans financial due diligence, business
                  valuation, corporate restructuring, and risk management. As a
                  Chartered Accountant and seasoned CFO, BD Chatterjee has led
                  major corporations and shared his vast knowledge through
                  influential books. His hobbies are travel and nature
                  photography. He loves to travel to exotic locations in the
                  upper reaches of the Himalayas and the forests of India, far
                  away from the madding crowd.
                </p>
              </div>
            </article>
          </section>

          <section className="silk-route-tags" aria-label="Article tags">
            <h2>Tags</h2>
            <a
              className="silk-route-tag"
              href="https://www.yoursilvergenie.com/tag/northeast-diaries/"
            >
              Northeast Diaries
            </a>
          </section>

          <p className="silk-route-disclaimer">
            <strong>Disclaimer:</strong> The views and opinions expressed in
            this blog are solely those of the author. The blog page is protected
            under <strong>SilverGenie’s copyright</strong>, while the written
            content remains the intellectual property of the author.
            Reproduction, distribution, or use of the content in any form
            requires the author’s prior consent. Unauthorized use or
            infringement will be subject to legal action.
          </p>

          <nav className="silk-route-related" aria-label="Related stories">
            <Link to="/from-spirit-to-celebration-our-jagadhatri-pujo-experience">
              From Spirit to Celebration: Our Jagadhatri Pujo Experience
            </Link>

            <Link to="/a-journey-through-faith-history-and-kolkatas-essence">
              A Journey Through Faith, History, and Kolkata’s Essence
            </Link>
          </nav>

          <div className="silk-route-back">
            <Link to="/wanderlust-diaries">← Back to Wanderlust Diaries</Link>
          </div>
        </article>
      </div>
    </main>
  );
}
