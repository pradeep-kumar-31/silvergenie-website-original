import React from "react";
import { Link } from "react-router-dom";
import "../styles/WanderlustDiaries.css";

const Sundarbans = () => {
  const imageBase = `${import.meta.env.BASE_URL}image/blog/`;

  return (
    <main className="wanderlust-story-page">

      {/* HERO SECTION */}
      <section className="wanderlust-story-hero">
        <div className="wanderlust-story-hero-content">

          <span className="wanderlust-eyebrow">
            SILVERGENIE WANDERLUST
          </span>

          <span className="wanderlust-story-category">
            Heart of Bharat Diaries
          </span>

          <h1>Finding My Rhythm in the Sundarbans</h1>

          <p>
            Three days among winding waterways, peaceful mangrove
            forests, fascinating wildlife and local traditions —
            a journey that reminds us that travelling slowly
            can be just as rewarding as discovering somewhere new.
          </p>

          <div className="wanderlust-story-meta">
            <span>January 5, 2026</span>
            <span>By Wanderlust Diaries</span>
            <span>Sundarbans, West Bengal</span>
          </div>

        </div>
      </section>

      {/* FEATURED IMAGE */}
      <section className="wanderlust-story-featured-image">
        <img
          src={`${imageBase}sundarbans.png`}
          alt="Mangrove waterways and natural landscapes of the Sundarbans"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </section>

      {/* ARTICLE LAYOUT */}
      <section className="wanderlust-story-layout">

        <article className="wanderlust-story-content">

          <p className="wanderlust-story-lead">
            As the years go by, the way I travel has changed.
            I still enjoy seeing new places, but I am less
            interested in rushing from one spot to another.
            What matters more now is how a journey feels while
            you are in it and how settled you feel when you
            return home.
          </p>

          <p>
            Our three days in the Sundarbans fit well into
            this rhythm. Instead of trying to do too much,
            we had time to enjoy the waterways, observe nature
            and appreciate the small experiences along the way.
          </p>

          {/* DAY 1 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              DAY 01 · 21 DECEMBER
            </span>

            <h2>An Easy Start to the Journey</h2>

            <p>
              We started at 9 in the morning from PC Chandra
              Garden. Breakfast was served in the car, which
              I appreciated more than I expected. It allowed
              us to settle into the journey without unnecessary
              stops.
            </p>

            <p>
              We paused near Gadkhali ferry jetty at a small
              roadside tea shop. The tea was hot, the place
              simple, and the break was welcome.
            </p>

            <p>
              Sometimes, these uncomplicated moments become
              an important part of a trip. There was no need
              to rush; we could enjoy the journey as it unfolded.
            </p>

          </section>

          {/* BOAT JOURNEY */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              ON THE WATER
            </span>

            <h2>Sailing Along the Matla River</h2>

            <p>
              Once we boarded the Maa Jamuna, the journey
              truly began. The Matla River stretched out
              calmly on both sides.
            </p>

            <p>
              Lunch was served on the boat, but what stayed
              with me was the steady movement of the water
              and the mangroves lining the banks.
            </p>

            <p>
              The river created a different kind of travel
              experience. Instead of watching scenery rush
              past a car window, we could sit back and observe
              the water, trees and changing light around us.
            </p>

            <p>
              In the evening, tea was served again as the
              sun slowly went down. It was quiet and very
              soothing.
            </p>

          </section>

          {/* RESORT & FOLK DANCE */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              EVENING EXPERIENCES
            </span>

            <h2>A Warm Welcome and Local Folk Dance</h2>

            <p>
              We reached the resort around four in the afternoon.
              A Ganesh temple stood at the entrance, which felt
              reassuring somehow.
            </p>

            <p>
              After resting for a while, we watched a folk-dance
              performance in the evening.
            </p>

            <p>
              The performance was pleasant and low-key, just
              right after a long day of travel. It offered
              a glimpse of local cultural expression without
              making the evening feel crowded or hurried.
            </p>

            <p>
              It was a gentle way to end the first day —
              with time to rest and enjoy the atmosphere.
            </p>

          </section>

          {/* DAY 2 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              DAY 02 · WILDLIFE
            </span>

            <h2>Time in the Forest</h2>

            <p>
              The second day had more activity, but it was
              well paced. We visited the Sajnekahli and
              Dobanki forest areas.
            </p>

            <p>
              Seeing Royal Bengal Tiger footprints was
              exciting in a very real way. There was a sense
              of respect that came with it, knowing we were
              walking through a space that belongs to
              wildlife first.
            </p>

            <p>
              The experience reminded us that the Sundarbans
              is not simply a scenic destination. It is a
              natural habitat where animals live according
              to their own rhythms.
            </p>

          </section>

          {/* WILDLIFE SIGHTINGS */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              NATURE & DISCOVERY
            </span>

            <h2>Observing the Wildlife of the Sundarbans</h2>

            <p>
              Throughout the day, we spotted deer, crocodiles,
              tortoises, birds and monkeys.
            </p>

            <p>
              Everything felt natural and surreal. The
              waterways and forest surroundings offered
              opportunities to observe wildlife in its
              own environment.
            </p>

            <p>
              The guides were patient and made sure everyone
              was comfortable, which mattered a lot to us.
            </p>

            <p>
              Having knowledgeable guides made the experience
              easier to appreciate. We could focus on our
              surroundings and enjoy the discoveries without
              feeling hurried.
            </p>

          </section>

          {/* CULTURAL EVENING */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              EVENING TOGETHER
            </span>

            <h2>Folk Songs and Shared Memories</h2>

            <p>
              In the evening, back at the resort, there was
              a folk-song performance.
            </p>

            <p>
              We sat together, listened and chatted quietly
              afterward. It felt warm and familiar, like
              an evening spent among people who had shared
              the same experiences through the day.
            </p>

            <p>
              After spending time among the forests and
              waterways, returning to the resort for music
              and conversation offered a welcome balance
              to the day's activities.
            </p>

          </section>

          {/* DAY 3 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              DAY 03 · HISTORY
            </span>

            <h2>Looking Back Before Heading Home</h2>

            <p>
              The final day was calmer. We visited
              Rabindranath Tagore's bungalow and the
              Hamilton Bungalow.
            </p>

            <p>
              These places carry history, but without
              feeling overwhelming. You could take your
              time, look around and simply absorb where
              you were.
            </p>

            <p>
              The visits provided a quieter conclusion
              to the journey, bringing together historical
              interest and the relaxed pace that had
              shaped our three days.
            </p>

          </section>

          {/* RETURN JOURNEY */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              THE JOURNEY HOME
            </span>

            <h2>A Gentle Ending to Three Days Away</h2>

            <p>
              We did a bit of shopping and had lunch on
              the boat, which felt like a fitting way
              to close the trip.
            </p>

            <p>
              The return journey was smooth, and we were
              dropped near Science City before heading home.
            </p>

            <p>
              There was no need to finish the trip feeling
              exhausted. The journey had been organised
              at a pace that left room for rest, observation
              and enjoyment.
            </p>

          </section>

          {/* CONCLUSION */}
          <section className="wanderlust-story-section">

            <h2>The Joy of Travelling at Your Own Rhythm</h2>

            <p>
              I came back feeling rested, not drained.
              That, to me, is the mark of a good trip now.
            </p>

            <p>
              The Sundarbans did not try to impress us loudly.
              It offered space, nature and a steady pace.
              Sometimes, that is more than enough.
            </p>

            <p>
              The quiet river journey, the mangroves,
              wildlife sightings, local performances and
              historical visits all came together to create
              an experience that felt balanced and meaningful.
            </p>

            <p>
              We are very grateful to the SilverGenie team
              for their tremendous efforts and their
              companionship throughout this trip.
            </p>

          </section>

          {/* TAGS */}
          <div className="wanderlust-story-tags">
            <span>Sundarbans</span>
            <span>West Bengal</span>
            <span>Slow Travel</span>
            <span>Mangrove Forests</span>
            <span>Matla River</span>
            <span>Wildlife</span>
            <span>Local Culture</span>
            <span>SilverGenie Wanderlust</span>
          </div>

          {/* STORY NAVIGATION */}
          <div className="wanderlust-story-navigation">

            <Link to="/wanderlust/shared-adventure-india">
              ← Previous Story
            </Link>

            <Link to="/wanderlust/white-rann-moon">
              Next Story →
            </Link>

          </div>

        </article>

        {/* SIDEBAR */}
        <aside className="wanderlust-story-sidebar">

          <div className="wanderlust-sidebar-card">

            <span className="wanderlust-eyebrow">
              JOURNEY HIGHLIGHTS
            </span>

            <h3>Discover the Sundarbans</h3>

            <ul>
              <li>PC Chandra Garden departure</li>
              <li>Gadkhali ferry jetty</li>
              <li>Maa Jamuna boat journey</li>
              <li>Matla River</li>
              <li>Sajnekahli forest area</li>
              <li>Dobanki forest area</li>
              <li>Wildlife sightings</li>
              <li>Local folk dance and songs</li>
              <li>Rabindranath Tagore's bungalow</li>
              <li>Hamilton Bungalow</li>
            </ul>

          </div>

          <div className="wanderlust-sidebar-card">

            <span className="wanderlust-eyebrow">
              HEART OF BHARAT
            </span>

            <h3>More Indian Travel Stories</h3>

            <p>
              Explore more journeys through India's natural
              landscapes, cultural heritage and memorable
              local experiences.
            </p>

            <Link
              to="/wanderlust-diaries"
              className="wanderlust-sidebar-button"
            >
              Explore All Diaries
            </Link>

          </div>

          <div className="wanderlust-sidebar-card">

            <span className="wanderlust-eyebrow">
              TRAVEL WITH CARE
            </span>

            <h3>Explore at Your Own Pace</h3>

            <p>
              Discover thoughtfully planned journeys
              that leave room for comfort, nature and
              meaningful experiences.
            </p>

            <Link
              to="/travel-with-care"
              className="wanderlust-sidebar-button"
            >
              Explore Travel With Care
            </Link>

          </div>

        </aside>

      </section>

    </main>
  );
};

export default Sundarbans;