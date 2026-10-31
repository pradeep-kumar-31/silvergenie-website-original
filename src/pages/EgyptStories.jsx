import { Link } from "react-router-dom";
import "../styles/EgyptStories.css";

const images = {
  hero: "https://www.yoursilvergenie.com/wp-content/uploads/2026/03/Great-Sphinx-of-Giza.png",
  article:
    "https://www.yoursilvergenie.com/wp-content/uploads/2025/01/Screenshot-2026-03-03-115829.png",
  author:
    "https://www.yoursilvergenie.com/wp-content/uploads/2025/01/WhatsApp-Image-2026-03-03-at-11.42.42-AM.jpeg",
};

export default function EgyptStories() {
  return (
    <main className="egypt-stories">
      <header className="egypt-stories__hero">
        <img
          className="egypt-stories__hero-image"
          src={images.hero}
          alt="The Great Sphinx of Giza, Egypt"
        />
        <div className="egypt-stories__hero-overlay" />

        <div className="egypt-stories__hero-content">
          <p className="egypt-stories__eyebrow">
            Asia, Africa and Europe Diaries
          </p>
          <h1>Egypt: Stories of and from People Who Have Walked with Time</h1>
          <p className="egypt-stories__meta">
            March 3, 2026 <span aria-hidden="true">•</span> By Ms. Paroma
            Ganguly
          </p>
        </div>
      </header>

      <article className="egypt-stories__article">
        <p className="egypt-stories__lead">
          Egypt was not a destination you simply visited. It was a place you
          entered slowly, guided by people, history, weather, and moments that
          felt older than language itself. This journey was less about ticking
          landmarks and more about listening to what a country revealed when you
          let go.
        </p>

        <section className="egypt-stories__section">
          <h2>Arrival Without Anxiety: The Ease of Travel</h2>
          <p>
            My first impression of Egypt was how surprisingly seamless
            everything felt. From visas to transfers, hotels to pacing, the
            entire journey unfolded with an ease that was rare in unfamiliar
            geographies. There was a certain luxury in not having to think,
            plan, or negotiate. No constant decision making. No mental load.
          </p>
          <p>
            Good travel support made all the difference. We were allowed to
            experience the country rather than manage it. Travel became an act
            of surrender, and in a place as layered as Egypt, that surrender
            mattered. It opened space for observation, curiosity, and presence.
          </p>
        </section>

        <section className="egypt-stories__section">
          <h2>Weather That Lets You Breathe</h2>
          <p>
            Coming from the pollution and intensity of Delhi, the weather in
            Egypt felt like relief. Soft sun, clear skies, and an absence of
            extremes made each day feel lighter. Weather shaped mood, movement,
            and memory. Here, it allowed us to slow down, walk more, and stay
            outdoors longer. It became a steady companion to the experience.
          </p>
        </section>

        <section className="egypt-stories__section">
          <h2>A Country on the Edge of Becoming</h2>
          <p>
            Egypt felt as though it stood at a cusp. There was visible growth,
            aspiration, and momentum. At the same time, the undercurrent of
            volatile geopolitics was always present, never threatening, but
            never absent either. It was a nation balancing ancient gravity with
            modern urgency.
          </p>
          <p>
            Traveling through Egypt felt like moving through a place that was
            watching the future arrive slowly yet steadily. The past was not
            frozen there. It moved alongside ambition and change.
          </p>
        </section>

        <section className="egypt-stories__section">
          <h2>The People: Loud, Generous, Unapologetically Alive</h2>
          <p>
            Egypt did not whisper. It spoke in sound, laughter, and
            conversation. Generosity there felt instinctive, both inherent and
            intentional. Everyday interactions were warm and open. There was a
            sense of being welcomed without being watched, included without
            scrutiny. The people brought the country alive in ways no monument
            ever could.
          </p>
        </section>

        <section className="egypt-stories__section">
          <h2>Women Who Lead, Hold, and Guide</h2>
          <p>
            One of the most lasting impressions was of women as anchors in
            families, stories, and movement. Their strength carried no
            spectacle. Leadership showed up in everyday ways. It was observed
            rather than announced. There was a deep respect in how women held
            spaces, shaped narratives, and guided lives. That respect stayed
            long after the journey ended.
          </p>
          <p>
            And it was impossible to miss the glamour they brought to everyday
            life well done hair, beautiful abayas, make up at its best a quiet
            crash course in looking after oneself.
          </p>
        </section>

        <section className="egypt-stories__section">
          <h2>Yiayia and Mona: Stories That Walk Beside You</h2>
          <p>
            Being guided by Yiayia and Mona, two senior citizens, changed the
            way Egypt unfolded for us. Endlessly curious and exceptionally
            generous, they offered travel not as a checklist but as lived
            memory. Their love for Egypt was textured, critical, and deeply
            affectionate.
          </p>
          <p>
            History, through them, was narrated with lived emotion rather than
            dates. They showed us what it meant to be guided by people who had
            walked with time, people for whom the past was personal and the
            present was layered with memory.
          </p>
        </section>

        <section className="egypt-stories__section">
          <h2>Giza: When History Refuses to Stay in Books</h2>
          <p>
            Nothing prepared us for the Giza Pyramids. The shock was in the
            proximity. Seeing Giza not as an image but as presence brought
            scale, silence, and disbelief all at once. That was the moment
            history stopped being abstract. Standing there, it felt as though
            time had stood still, refusing to be reduced to pages or
            photographs.
          </p>
          <p>
            Most people went to the Grand Egyptian Museum after the pyramids,
            but I would have recommended trying it the other way around. Going
            there first helped us understand history better and made us
            appreciate the role the country played in world history. They said
            that eight hours every day for over two months might still not be
            enough to see every artefact in the museum. In fact, the locals
            believed that if you dug around even today in Egypt, you would find
            history everywhere.
          </p>
          <p>We had only just scratched the surface.</p>
        </section>

        <section className="egypt-stories__section">
          <h2>The Suez Canal and Nile: Geography That Moves the World</h2>
          <p>
            Being near the Suez Canal and the Nile River felt like watching a
            childhood textbook become real. There was a strange intimacy in
            standing next to something so consequential, something that had
            shaped trade, civilizations, and global movement for centuries.
          </p>
        </section>

        <figure className="egypt-stories__photo">
          <img
            src={images.article}
            alt="A scene from the Egypt journey"
            loading="lazy"
          />
          <figcaption>Egypt — Photos by Author</figcaption>
        </figure>

        <section className="egypt-stories__section">
          <h2>Alexandria: Mediterranean Light, Egyptian Soul</h2>
          <p>
            Arriving in Alexandria brought a clear shift in energy. The sea air
            softened everything. Rhythms slowed down. There was Mediterranean
            ease layered with an unmistakable Egyptian soul. Cafés,
            conversations, and coastal nostalgia defined the city.
          </p>
          <p>
            There, Egypt revealed another personality: relaxed, reflective, and
            romantic. That was also my first New Year’s Eve spent in a foreign
            land by design. A treat. A gift to myself.
          </p>
        </section>

        <section className="egypt-stories__section">
          <h2>Leaving Egypt Incomplete On Purpose</h2>
          <p>
            We made the conscious decision to leave parts of Egypt unexplored,
            including Luxor and Aswan. Travel, after all, was an ongoing
            relationship, not closure. There was an ache in unfinished stories,
            but also an invitation. Egypt did not end. It waited.
          </p>
        </section>

        <section className="egypt-stories__closing">
          <h2>Closing Note: The Feeling That Lingers</h2>
          <p>
            Egypt did not overwhelm. It stayed. Longing became the most honest
            souvenir. This journey was not a promise to remember, but a promise
            to return.
          </p>
        </section>

        <section className="egypt-stories__author">
          <img src={images.author} alt="Ms. Paroma Ganguly" loading="lazy" />
          <div>
            <p className="egypt-stories__author-label">Author</p>
            <h2>Ms. Paroma Ganguly</h2>
            <p>
              Paroma brings over 20 years of experience in marketing and
              communication, specializing in behavior change strategies. Her
              recent focus has been on the intersection of healthcare,
              technology, and social impact, particularly exploring how the
              pandemic has reshaped health interactions and consumer
              experiences. She is passionate about leveraging communication for
              meaningful community impact.
            </p>
          </div>
        </section>

        <div className="egypt-stories__tags">
          <strong>Tags:</strong>
          <a
            href="https://www.yoursilvergenie.com/tag/asia-africa-and-europe-diaries/"
            target="_blank"
            rel="noreferrer"
          >
            Asia Africa And Europe Diaries
          </a>
        </div>

        <aside className="egypt-stories__disclaimer">
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

        <nav className="egypt-stories__related" aria-label="Related articles">
          <Link to="/hornbill-festival-diaries-colours-of-nagaland">
            <span>Previous article</span>
            Hornbill Festival Diaries: Colours of Nagaland
          </Link>

          <Link to="/a-doctors-travel-diary-discovering-the-quiet-grace-of-assam">
            <span>Next article</span>A Doctor’s Travel Diary: Discovering the
            Quiet Grace of Assam
          </Link>
        </nav>
      </article>
    </main>
  );
}
