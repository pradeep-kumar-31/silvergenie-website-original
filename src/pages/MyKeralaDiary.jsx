import { Link } from "react-router-dom";
import "../styles/MyKeralaDiary.css";

const images = {
  hero: "https://www.yoursilvergenie.com/wp-content/uploads/2025/09/kerala.jpg",
  collage:
    "https://www.yoursilvergenie.com/wp-content/uploads/2025/09/photo-collage.png-1.png",
  author:
    "https://www.yoursilvergenie.com/wp-content/uploads/2020/10/Picture555.jpg",
};

export default function MyKeralaDiary() {
  return (
    <main className="kerala-diary">
      <header className="kerala-diary__hero">
        <img
          className="kerala-diary__hero-image"
          src={images.hero}
          alt="Kerala landscape"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <div className="kerala-diary__hero-shade" />

        <div className="kerala-diary__hero-content">
          <p className="kerala-diary__eyebrow">Heart of Bharat Diaries</p>
          <h1>My Kerala Diary</h1>

          <div className="kerala-diary__meta">
            <span>September 14, 2025</span>
            <span className="kerala-diary__meta-dot" aria-hidden="true" />
            <span>By Namita Adhikary</span>
          </div>
        </div>
      </header>

      <article className="kerala-diary__article">
        <p className="kerala-diary__intro">
          I still can’t believe I was in Kerala! Writing this now, I can feel
          the fondest memories come alive again. This trip wasn’t just about
          travel—it was about trying new adventures, breaking personal barriers,
          and collecting moments I never thought I would get to experience.
        </p>

        <section className="kerala-diary__section">
          <h2>Kochi: A warm welcome to Kerala</h2>

          <p>
            We landed in Kochi on the 10th of September, and the adventure began
            right away. Our first taste of Kerala was a comforting plate of
            idli, sambar, and filter coffee—simple yet so satisfying. It
            instantly erased any travel tiredness. From there, we explored Fort
            Kochi, wandered through the gardens of Mattancherry Palace, and
            soaked in the rich heritage around us. Walking along the Jewish
            streets and seeing the iconic Chinese fishing nets opened a window
            into the history and culture of the region.
          </p>

          <p>
            The real treat, however, came at lunchtime. At the Abad Hotel, I
            enjoyed what I can easily call one of the best meals of my life.
            From the flavourful fish to the softest parottas, the spread was
            unforgettable—I’m salivating even now as I recall it!
          </p>
        </section>

        <section className="kerala-diary__section">
          <h2>Munnar: Tea gardens and mountain air</h2>

          <p>
            From Kochi, our journey continued to Munnar. The hills welcomed us
            with endless tea gardens, fresh mountain air, and serene beauty. I
            was fascinated by the abundance of plants—jackfruit trees, cardamom,
            coconuts, even pineapples. The highlight of Munnar for me was a
            scenic walk followed by a thrilling speed boat ride—an adventure
            that left me exhilarated.
          </p>
        </section>

        <section className="kerala-diary__section">
          <h2>Thekkady: New adventures</h2>

          <p>
            Our next stop was Thekkady. On the way, I tried something I never
            thought I would—an elephant ride. It was my first time, and despite
            my initial hesitation, I embraced the experience with excitement. It
            felt like I broke through a personal barrier, and the joy was
            unforgettable. After checking into our hotel and a quick lunch, we
            headed out again for yet another boat ride. It was a day packed with
            adventure, ending with a calming tea break that felt like the
            perfect pause.
          </p>
        </section>

        <figure className="kerala-diary__photo">
          <img
            src={images.collage}
            alt="Scenes and experiences from the Kerala trip"
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        </figure>

        <section className="kerala-diary__section">
          <h2>Kalaripayattu and Kathakali</h2>

          <p>
            That evening brought magic. I finally witnessed a Kalaripayattu
            martial arts performance followed by a mesmerizing Kathakali show. I
            had always wanted to see Kathakali live, and being there in person
            felt surreal. Their expressions, movements, and grace transported me
            to another world—I even found myself wishing I could join them on
            stage!
          </p>
        </section>

        <section className="kerala-diary__section">
          <h2>Alleppey: A houseboat on the backwaters</h2>

          <p>
            The final leg of our journey took us to Alleppey. After a four-hour
            drive, we stepped onto our houseboat. Floating through the tranquil
            backwaters, sipping tea on the upper deck as the breeze gently
            touched my face—it was pure bliss. To top it off, I indulged in my
            very first spa experience, something I had always wanted to try. I
            can now happily say that Kerala gave me everything I hoped for, and
            so much more.
          </p>

          <p>
            And of course, this journey would not have been as special without
            the cohort members. Their warmth, laughter, and companionship made
            every moment richer and every memory brighter.
          </p>
        </section>

        <p>
          As I look back, I feel deeply grateful. From the flavours of Kerala’s
          cuisine to the rhythms of Kathakali, from tea gardens to houseboats,
          every detail was a gift.
        </p>

        <p className="kerala-diary__closing">
          This was not just a holiday—it was a memory etched in my heart
          forever.
        </p>

        <section className="kerala-diary__author">
          <p className="kerala-diary__author-label">Author</p>

          <div className="kerala-diary__author-card">
            <img
              src={images.author}
              alt="Namita Adhikary"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

            <div>
              <h2>Namita Adhikary</h2>

              <p>
                Hello, I am Namita Adhikary. I am the third daughter of Mr. Das,
                a very humble and educated man, and I grew up learning the
                values of simplicity and kindness in a Bengali household. I was
                married at the young age of 18, and since then, life has come to
                me in waves.
              </p>

              <p>
                As a mother of two children, I stood through strong headwinds,
                managing finances and responsibilities so that both of them
                could grow into professionals. Over the years, I embraced my
                role as a homemaker—caring for my family, adapting to the
                changing times, and meeting every challenge with patience and
                resilience.
              </p>

              <p>
                Today, nothing gives me more joy than doting on my grandsons and
                offering a strong shoulder to my daughter-in-law in her
                professional journey. My life has been about adapting, learning,
                and standing strong—a small but meaningful example of resilience
                and the power of care within a family.
              </p>
            </div>
          </div>
        </section>

        <div className="kerala-diary__tags">
          <strong>Tags:</strong>
          <a
            href="https://www.yoursilvergenie.com/tag/heart-of-bharat-diaries/"
            target="_blank"
            rel="noreferrer"
          >
            Heart of Bharat Diaries
          </a>
        </div>

        <aside className="kerala-diary__disclaimer">
          <strong>Disclaimer:</strong>
          <p>
            The views and opinions expressed in this blog are solely those of
            the author. The blog page is protected under{" "}
            <strong>SilverGenie’s copyright</strong>, while the written content
            remains the intellectual property of the author. Reproduction,
            distribution, or use of the content in any form requires the
            author’s prior consent. Unauthorized use or infringement will be
            subject to legal action.
          </p>
        </aside>
      </article>

      <nav className="kerala-diary__related" aria-label="Related articles">
        <Link to="/meghalaya-the-abode-of-clouds">
          <span>Previous article</span>
          Meghalaya: The Abode of Clouds
        </Link>

        <Link to="/from-devotion-to-delight-our-durgapujowithcare-experience">
          <span>Next article</span>
          From Devotion to Delight: Our #DurgaPujoWithCare Experience
        </Link>
      </nav>
    </main>
  );
}
