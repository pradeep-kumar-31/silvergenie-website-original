import { Link } from "react-router-dom";
import "../styles/FindingMyRhythmSundarbans.css";

const images = {
  hero: "https://www.yoursilvergenie.com/wp-content/uploads/2026/01/2.jpg",
  journey:
    "https://www.yoursilvergenie.com/wp-content/uploads/2026/01/Collageu.jpg",
};

export default function FindingMyRhythmSundarbans() {
  return (
    <main className="sundarbans-page">
      <header className="sundarbans-hero">
        <img
          className="sundarbans-hero__image"
          src={images.hero}
          alt="A journey through the Sundarbans"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <div className="sundarbans-hero__overlay" />

        <div className="sundarbans-hero__content">
          <p className="sundarbans-eyebrow">Heart of Bharat Diaries</p>

          <h1>Finding My Rhythm in the Sundarbans</h1>

          <div className="sundarbans-meta">
            <span>January 5, 2026</span>
            <span className="sundarbans-meta__dot" aria-hidden="true" />
            <span>By Wanderlust Diaries</span>
          </div>
        </div>
      </header>

      <article className="sundarbans-article">
        <p className="sundarbans-intro">
          As the years go by, the way I travel has changed. I still enjoy seeing
          new places, but I am less interested in rushing from one spot to
          another. What matters more now is how a journey feels while you are in
          it and how settled you feel when you return home. Our three days in
          the Sundarbans fit well into this rhythm.
        </p>

        <section className="sundarbans-day">
          <h2>Day 1: An Easy Start</h2>

          <p>
            We started on the 21st of December at 9 in the morning from PC
            Chandra Garden. Breakfast was served in the car, which I appreciated
            more than I expected. It allowed us to settle into the journey
            without unnecessary stops.
          </p>

          <p>
            We paused near <strong>Gadkhali ferry jetty</strong> at a small
            roadside tea shop. The tea was hot, the place simple, and the break
            was welcome.
          </p>

          <p>
            Once we boarded the <em>Maa Jamuna</em>, the journey truly began.
            The <strong>Matla River</strong> stretched out calmly on both sides.
            Lunch was served on the boat, but what stayed with me was the steady
            movement of the water and the mangroves lining the banks. In the
            evening, tea was served again as the sun slowly went down. It was
            quiet and very soothing.
          </p>

          <p>
            We reached the resort around four in the afternoon. A Ganesh temple
            stood at the entrance, which felt reassuring somehow. After resting
            for a while, we watched a <strong>folk-dance performance</strong> in
            the evening. It was pleasant and low key, just right after a long
            day of travel.
          </p>
        </section>

        <section className="sundarbans-day">
          <h2>Day 2: Time in the Forest</h2>

          <figure className="sundarbans-figure">
            <img
              src={images.journey}
              alt="Sundarbans Journey"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
            <figcaption>Sundarbans Journey</figcaption>
          </figure>

          <p>
            The second day had more activity, but it was well paced. We visited{" "}
            <strong>Sajnekahli and Dobanki forest</strong> areas. Seeing the{" "}
            <strong>Royal Bengal Tiger footprints</strong> was exciting in a
            very real way. There was a sense of respect that came with it,
            knowing we were walking through a space that belongs to wildlife
            first.
          </p>

          <p>
            We spotted{" "}
            <strong>deer, crocodiles, tortoises, birds, and monkeys</strong>{" "}
            through the day. Everything felt natural and surreal. The guides
            were patient and made sure everyone was comfortable, which mattered
            a lot to us.
          </p>

          <p>
            In the evening, back at the resort, there was a folk song
            performance. We sat together, listened, and chatted quietly
            afterward. It felt warm and familiar, like an evening spent among
            people who had shared the same experiences through the day.
          </p>
        </section>

        <section className="sundarbans-day">
          <h2>Day 3: Looking Back Before Heading Home</h2>

          <p>
            The final day was calmer. We visited{" "}
            <strong>Rabindranath Tagore’s bungalow</strong> and the{" "}
            <strong>Hamilton Bungalow</strong>. These places carry history, but
            without feeling overwhelming. You could take your time, look around,
            and simply absorb where you were.
          </p>

          <p>
            We did a bit of shopping and had lunch on the boat, which felt like
            a fitting way to close the trip. The return journey was smooth, and
            we were dropped near Science City before heading home.
          </p>
        </section>

        <p>
          I came back feeling rested, not drained. That, to me, is the mark of a
          good trip now. The Sundarbans did not try to impress us loudly. It
          offered space, nature, and a steady pace. Sometimes, that is more than
          enough. We are very grateful to the{" "}
          <a
            href="https://www.yoursilvergenie.com/"
            target="_blank"
            rel="noreferrer"
          >
            SilverGenie
          </a>{" "}
          team for their tremendous efforts and their companionship throughout
          this trip.
        </p>

        <div className="sundarbans-tags">
          <strong>Tags:</strong>
          <a
            href="https://www.yoursilvergenie.com/tag/heart-of-bharat-diaries/"
            target="_blank"
            rel="noreferrer"
          >
            Heart of Bharat Diaries
          </a>
        </div>

        <aside className="sundarbans-disclaimer">
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

      <nav className="sundarbans-related" aria-label="Related articles">
        <Link to="/white-rann-senior-travel-experience-silvergenie">
          <span>Previous article</span>
          Under the White Rann Moon: A Journey Designed with Care
        </Link>

        <Link to="/hornbill-festival-diaries-colours-of-nagaland">
          <span>Next article</span>
          Hornbill Festival Diaries: Colours of Nagaland
        </Link>
      </nav>
    </main>
  );
}
