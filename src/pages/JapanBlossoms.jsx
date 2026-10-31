import { Link } from "react-router-dom";
import "../styles/JapanBlossoms.css";

const images = {
  hero: "https://www.yoursilvergenie.com/wp-content/uploads/2025/01/Walking-Backwards-Through-Blossoms-Our-Story-in-Japan.png",
  gallery: [
    "https://www.yoursilvergenie.com/wp-content/uploads/2025/01/Walking-Backwards-Through-Blossoms-Our-Story-in-Japan-3-800x800.jpeg",
    "https://www.yoursilvergenie.com/wp-content/uploads/2025/01/Walking-Backwards-Through-Blossoms-Our-Story-in-Japan-1-800x800.jpeg",
    "https://www.yoursilvergenie.com/wp-content/uploads/2025/01/Walking-Backwards-Through-Blossoms-Our-Story-in-Japan-2-800x800.jpeg",
  ],
  curators: [
    "https://www.yoursilvergenie.com/wp-content/uploads/2025/01/Picture1.png",
    "https://www.yoursilvergenie.com/wp-content/uploads/2025/01/Picture2.png",
  ],
};

function ArticlePhoto({ src, alt }) {
  return (
    <figure className="japan-blossoms__photo">
      <img src={src} alt={alt} loading="lazy" />
      <figcaption>Photos by Author</figcaption>
    </figure>
  );
}

export default function JapanBlossoms() {
  return (
    <main className="japan-blossoms">
      <header className="japan-blossoms__hero">
        <img
          className="japan-blossoms__hero-image"
          src={images.hero}
          alt="Cherry blossoms in Japan"
        />
        <div className="japan-blossoms__hero-overlay" />

        <div className="japan-blossoms__hero-content">
          <p className="japan-blossoms__eyebrow">
            Asia, Africa and Europe Diaries
          </p>

          <h1>Walking Backwards Through Blossoms: Our Story in Japan</h1>

          <p className="japan-blossoms__meta">
            April 13, 2026 <span aria-hidden="true">•</span> By Wanderlust
            Diaries
          </p>
        </div>
      </header>

      <article className="japan-blossoms__article">
        <p className="japan-blossoms__lead">
          おはよう (Ohayō). Good morning. That phrase lodged in our brain from
          day one in Japan. Even now, a week later, it kicks off our day like an
          echo from the trip.
        </p>

        <p>
          We arrived in Tokyo with that unmistakable first-time excitement,
          beginning at Tokyo DisneySea—a place where joy came easily and
          strangers began to feel familiar. The group moved with a kind of
          shared rhythm, sometimes splitting, sometimes coming back together,
          but always held together by an underlying sense of ease. It was a
          lively start, yet everything—from pickups to movement—felt quietly
          well-managed, allowing us to simply be present.
        </p>

        <p>
          The city unfolded through moments—standing at Hachikō Memorial Statue,
          crossing the tide at Shibuya Crossing—before we stepped into something
          entirely different at teamLab Planets.
        </p>

        <ArticlePhoto
          src={images.gallery[0]}
          alt="Cherry blossom walkway in Japan"
        />

        <p>
          At TeamLab, the experience felt almost unreal. We walked through
          spaces where light moved with us, flowers bloomed and dissolved around
          us, and reflections shifted with every step. For a while, the outside
          world disappeared. The group spread out into different rooms, yet kept
          finding their way back—pointing, laughing, trying to describe what we
          had just seen, often failing because some experiences are simply meant
          to be felt.
        </p>

        <p>
          It was immersive, but also thoughtfully navigated—assisted movement,
          clear pathways, and gentle pacing ensured that even in a sensory-heavy
          environment, comfort was never compromised.
        </p>

        <p>But somewhere along the way, the journey shifted.</p>

        <p>It was when we boarded the Shinkansen.</p>

        <p>
          There is something almost poetic about the Shinkansen. As it glided
          effortlessly from Tokyo to Kyoto, then onward to Osaka and Hiroshima,
          it carried us not just across cities, but through the heart of the
          Sakura season. Outside the window, cherry blossoms appeared like
          fleeting whispers—lining rivers, softening towns, and dissolving into
          the horizon before we could fully hold onto them.
        </p>

        <p>
          Inside, everything was calm, precise, and comfortable—minimal effort,
          smooth boarding, no rush—making long journeys feel light, almost
          meditative.
        </p>

        <p>
          Before leaving Tokyo behind, we found ourselves standing in front of
          Mount Fuji.
        </p>

        <blockquote className="japan-blossoms__quote">
          It did not demand attention—it simply held it.
        </blockquote>

        <p>
          Framed by soft pink budding blossoms, Fuji stood still and certain,
          while around it the Sakura moved gently with the wind. There was no
          hurry here. We paused longer, walked slower, and simply looked. The
          experience was not crowded with activity, but thoughtfully
          spaced—allowing everyone to take it in, at their own pace.
        </p>

        <p>
          Not far from there, at Oshino Hakkai, the experience turned almost
          surreal.
        </p>

        <p>
          The ponds—clear, still, almost unreal—held perfect reflections of the
          sky and the blossoms above. Sakura petals floated on the surface,
          barely disturbing the water. The group, usually animated, grew quieter
          here. We moved gently, almost instinctively, as if the place asked for
          it. It wasn’t something to rush through. It was something to sit with.
          And the way the day was structured—unhurried, accessible, with natural
          pauses—allowed exactly that.
        </p>

        <p>
          Kyoto carried this stillness forward. Temples, pathways, and shrines
          softened by falling petals made time feel slower. The journey here was
          never about covering ground quickly, but about moving comfortably,
          resting when needed, and absorbing fully.
        </p>

        <p>
          Then came moments like Nara Deer Park—where laughter returned easily.
          Deer wandering freely, bowing gently, sometimes mischievous, sometimes
          calm, brought out joy in everyone. Under cherry blossoms and ancient
          lanterns, we found ourselves simply standing, watching, smiling—caught
          between playfulness and quiet.
        </p>

        <p>
          Osaka brought energy back—lights, food, and the hum of the streets—but
          what stayed with us were the people. The driver’s warm smile, the
          quiet pride of workers, the simple act of saying thank you each
          day—these became small rituals that grounded us. They were not planned
          highlights, but they became some of the most meaningful parts of the
          journey.
        </p>

        <p>And then, the final stretch—to Hiroshima Peace Memorial Park.</p>

        <ArticlePhoto
          src={images.gallery[1]}
          alt="Scenic cherry blossom view in Japan"
        />

        <p>
          The Shinkansen ride felt quieter. The Sakura still followed us, but
          softer now. By the time we arrived, the group had changed.
          Conversations slowed, steps softened. The silence at Hiroshima was not
          empty—it was full. Full of history, reflection, and an unspoken
          understanding. The time given here, the space to simply stand and
          absorb, was perhaps one of the most important forms of care in the
          entire journey.
        </p>

        <p>
          By the end, what had started as a group of strangers had become
          something closer—an extended circle. We had walked thousands of steps,
          shared meals, passed water bottles, laughed at small moments, and
          slowed down when it mattered.
        </p>

        <ArticlePhoto
          src={images.gallery[2]}
          alt="Blossom trees pathway in Japan"
        />

        <p>
          The cherry blossoms, blooming across cities, became more than a visual
          memory.
        </p>

        <p>They became a way of experiencing the journey itself.</p>

        <p className="japan-blossoms__short-line">
          Gentle. Fleeting. Meant to be noticed.
        </p>

        <p>
          And through it all, what remained constant was not just where we
          went—but how we moved:
        </p>

        <ul className="japan-blossoms__list">
          <li>With ease, not urgency</li>
          <li>With pauses, not pressure</li>
          <li>With support, not strain</li>
        </ul>

        <p>Japan gave us Sakura, landscapes, and stories.</p>

        <p>But what stayed with us was something quieter—</p>

        <p className="japan-blossoms__closing">
          The feeling of being cared for, even in motion.
        </p>

        <p>
          ありがとうございました (Arigatō gozaimasu). For the group glue, for
          the lessons, and for the quiet that stays with you long after the
          petals fall.
        </p>

        <section className="japan-blossoms__curators">
          <h2>About The Curators</h2>

          <div className="japan-blossoms__curator-grid">
            <article className="japan-blossoms__curator">
              <img src={images.curators[0]} alt="Rema Sundar" loading="lazy" />
              <div>
                <h3>Rema Sundar</h3>
                <p>
                  Rema Sundar is a communications and development sector
                  professional who believes in the power of positive
                  communication to bring about change. As a caregiver herself,
                  she is currently in the process of understanding the care
                  economy, and how communication can transform the care
                  ecosystem in the country.
                </p>
              </div>
            </article>

            <article className="japan-blossoms__curator">
              <img
                src={images.curators[1]}
                alt="Sansita Sahoo"
                loading="lazy"
              />
              <div>
                <h3>Sansita Sahoo</h3>
                <p>
                  Sansita Sahoo is a prolific writer who loves expressing the
                  stories of seniors and their travels and has been a part of
                  most of the Wanderlust Diaries.
                </p>
              </div>
            </article>
          </div>
        </section>

        <div className="japan-blossoms__tags">
          <strong>Tags:</strong>
          <a
            href="https://www.yoursilvergenie.com/tag/asia-africa-and-europe-diaries/"
            target="_blank"
            rel="noreferrer"
          >
            Asia Africa And Europe Diaries
          </a>
        </div>

        <aside className="japan-blossoms__disclaimer">
          <strong>Disclaimer</strong>
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

        <nav className="japan-blossoms__related" aria-label="Related articles">
          <Link to="/wanderlust/tripura-shaktipeeth">
            <span>Previous article</span>
            Shaktipeeth Stories: Exploring Faith, Dynasty, and Tradition in
            Tripura
          </Link>

          <Link to="/bhutan-through-the-comfort-of-care">
            <span>Next article</span>
            Bhutan Through the Comfort of Care
          </Link>
        </nav>
      </article>
    </main>
  );
}
