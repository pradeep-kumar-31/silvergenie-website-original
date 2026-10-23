import React from "react";
import { Link } from "react-router-dom";
import "../styles/WanderlustDiaries.css";

const imageBase = `${import.meta.env.BASE_URL}image/blog/`;

function Egypt() {
  return (
    <main className="wanderlust-story-page">
      {/* HERO SECTION */}
      <section className="wanderlust-story-hero">
        <div className="wanderlust-story-hero-content">
          <span className="wanderlust-eyebrow">
            SILVERGENIE WANDERLUST DIARIES
          </span>

          <span className="wanderlust-story-category">
            ASIA, AFRICA & EUROPE
          </span>

          <h1>
            Egypt: Stories of and from People
            <br />
            Who Have Walked with Time
          </h1>

          <p className="wanderlust-story-lead">
            A journey through ancient history, generous people,
            Mediterranean coastlines and stories that reveal
            Egypt beyond its famous monuments.
          </p>

          <div className="wanderlust-story-meta">
            <span>📅 March 3, 2026</span>
            <span>✍️ By Ms. Paroma Ganguly</span>
          </div>

          <a
            href="#egypt-story"
            className="wanderlust-sidebar-button"
          >
            Explore the Journey ↓
          </a>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      <section className="wanderlust-story-featured-image">
        <img
          src={`${imageBase}egypt.png`}
          alt="The ancient pyramids of Egypt"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </section>

      {/* MAIN CONTENT */}
      <section
        className="wanderlust-story-layout"
        id="egypt-story"
      >
        <article className="wanderlust-story-content">
          <p className="wanderlust-story-lead">
            Egypt was not a destination you simply visited.
            It was a place you entered slowly, guided by people,
            history, weather and moments that felt older than
            language itself. This journey was less about ticking
            landmarks off a list and more about listening to what
            a country revealed when you let go.
          </p>

          {/* ARRIVAL */}
          <section className="wanderlust-story-section">
            <h2>01. Arrival Without Anxiety</h2>

            <p>
              My first impression of Egypt was how surprisingly
              seamless everything felt. From visas and transfers
              to hotels and the pace of the itinerary, the journey
              unfolded with an ease that can be difficult to find
              in an unfamiliar destination.
            </p>

            <p>
              There was a certain luxury in not having to think
              constantly about planning, negotiating or making
              the next decision.
            </p>

            <p>
              Good travel support made all the difference.
              We could experience the country rather than spend
              our energy managing its logistics. That freedom
              created room for observation, curiosity and presence.
            </p>
          </section>

          {/* WEATHER */}
          <section className="wanderlust-story-section">
            <h2>02. Weather That Lets You Breathe</h2>

            <p>
              Coming from the pollution and intensity of Delhi,
              Egypt's weather felt like a relief. Soft sunshine,
              clear skies and comfortable conditions made the
              days feel lighter.
            </p>

            <p>
              Weather shaped the way we moved, the places we
              noticed and the memories we formed. It encouraged
              us to walk more, spend longer outdoors and slow
              down enough to appreciate our surroundings.
            </p>

            <p>
              Sometimes, a destination's atmosphere becomes
              an important part of the travel story without
              demanding attention for itself.
            </p>
          </section>

          {/* MODERN EGYPT */}
          <section className="wanderlust-story-section">
            <h2>03. A Country on the Edge of Becoming</h2>

            <p>
              Egypt felt like a country standing at a turning
              point. There was visible growth, aspiration and
              momentum, alongside the wider geopolitical
              uncertainties affecting the region.
            </p>

            <p>
              The experience revealed a country balancing
              ancient historical significance with the
              ambitions and challenges of modern life.
            </p>

            <p>
              Travelling through Egypt felt like watching
              the future arrive gradually. The past was
              not frozen in time; it existed alongside
              contemporary change.
            </p>
          </section>

          {/* PEOPLE */}
          <section className="wanderlust-story-section">
            <h2>04. The People: Generous and Unapologetically Alive</h2>

            <p>
              Egypt did not whisper. It spoke through sound,
              laughter and conversation. The warmth of everyday
              interactions became one of the journey's lasting
              impressions.
            </p>

            <p>
              Generosity felt both instinctive and intentional.
              People welcomed us into conversations and made
              ordinary encounters feel meaningful.
            </p>

            <p>
              The people brought the country alive in ways
              that no monument alone could. Their energy,
              openness and stories added a human dimension
              to everything we saw.
            </p>
          </section>

          {/* WOMEN */}
          <section className="wanderlust-story-section">
            <h2>05. Women Who Lead, Hold and Guide</h2>

            <p>
              One of my strongest impressions was the presence
              of women as anchors in families, stories and
              everyday life.
            </p>

            <p>
              Their strength did not need to be announced.
              Leadership appeared in ordinary gestures,
              in the ways women shaped conversations,
              guided lives and held communities together.
            </p>

            <p>
              I also admired the attention many women gave
              to their personal presentation, from beautifully
              styled hair and elegant abayas to carefully
              applied makeup. It offered a reminder that
              self-expression can be an everyday pleasure.
            </p>

            <p>
              This respect for women's presence and influence
              stayed with me long after the journey ended.
            </p>
          </section>

          {/* YIAYIA AND MONA */}
          <section className="wanderlust-story-section">
            <h2>06. Yiayia and Mona: Stories That Walk Beside You</h2>

            <p>
              Being guided by Yiayia and Mona, two senior
              citizens, changed the way Egypt unfolded for us.
              They were endlessly curious, exceptionally generous
              and deeply connected to the country they knew.
            </p>

            <p>
              Their affection for Egypt was not simplistic.
              It was textured, thoughtful and shaped by lived
              experience.
            </p>

            <p>
              Through them, history became more than a series
              of dates and events. It became personal memory,
              emotion and an understanding of how the past
              continues to shape the present.
            </p>

            <p>
              They reminded us of the value of listening to
              people who have walked with time and carry
              their country's stories within them.
            </p>
          </section>

          {/* GIZA */}
          <section className="wanderlust-story-section">
            <h2>07. Giza: When History Refuses to Stay in Books</h2>

            <p>
              Nothing prepared me for the Giza Pyramids.
              The real impact came from their presence and
              proximity. Seeing them in person was completely
              different from encountering them in photographs.
            </p>

            <p>
              Their immense scale brought a feeling of silence
              and disbelief. In that moment, history stopped
              being abstract and became something tangible.
            </p>

            <p>
              Standing before the pyramids, it felt as though
              time had refused to be reduced to pages, pictures
              or familiar descriptions.
            </p>
          </section>

          {/* GRAND EGYPTIAN MUSEUM */}
          <section className="wanderlust-story-section">
            <h2>08. The Grand Egyptian Museum</h2>

            <p>
              Visiting the Grand Egyptian Museum helped put
              Egypt's extraordinary history into a broader
              context. Understanding more about the country's
              role in world history made the monuments and
              artefacts even more meaningful.
            </p>

            <p>
              One recommendation I would make is to consider
              visiting the museum before the pyramids. Building
              that historical understanding first can make
              the experience of seeing Giza even more powerful.
            </p>

            <p>
              The collection is so extensive that even spending
              eight hours a day over two months might not be
              enough to see every artefact.
            </p>

            <p>
              Locals spoke of history existing everywhere
              beneath the Egyptian landscape. Our visit
              felt like the beginning of an exploration
              rather than a complete understanding.
            </p>
          </section>

          {/* SUEZ AND NILE */}
          <section className="wanderlust-story-section">
            <h2>09. The Suez Canal and the Nile</h2>

            <p>
              Being near the Suez Canal and the Nile River
              felt like watching a childhood textbook come
              to life.
            </p>

            <p>
              These waterways have shaped trade, civilizations
              and the movement of people and goods across
              generations.
            </p>

            <p>
              Standing near them created a strange intimacy
              with forces that have influenced not only
              Egypt but also the wider world.
            </p>
          </section>

          {/* ALEXANDRIA */}
          <section className="wanderlust-story-section">
            <h2>10. Alexandria: Mediterranean Light, Egyptian Soul</h2>

            <p>
              Arriving in Alexandria brought a noticeable
              change in atmosphere. The sea air softened
              everything, and the pace felt more relaxed.
            </p>

            <p>
              The city offered a combination of Mediterranean
              ease and unmistakably Egyptian character.
              Cafés, conversations and coastal nostalgia
              created a more reflective mood.
            </p>

            <p>
              Alexandria revealed another side of Egypt:
              relaxed, thoughtful and romantic.
            </p>

            <p>
              It was also my first New Year's Eve spent
              deliberately in a foreign country. It felt
              like a treat and a gift I had given myself.
            </p>
          </section>

          {/* RETURN */}
          <section className="wanderlust-story-section">
            <h2>11. Leaving Egypt Incomplete on Purpose</h2>

            <p>
              We consciously decided to leave parts of Egypt
              unexplored, including Luxor and Aswan.
            </p>

            <p>
              At first, unfinished plans can feel like
              something missing. But travel is an ongoing
              relationship rather than a task that must
              always end with complete coverage.
            </p>

            <p>
              Leaving places unseen created a sense of
              longing, but also an invitation. Egypt
              had not ended for us. It was waiting.
            </p>
          </section>

          {/* CONCLUSION */}
          <section className="wanderlust-story-section">
            <h2>The Feeling That Lingers</h2>

            <p>
              Egypt did not overwhelm me. It stayed with me.
              Its history, its people, its changing landscapes
              and its everyday moments continued to occupy
              my thoughts long after the journey.
            </p>

            <p>
              The most honest souvenir was a feeling of
              longing — the knowledge that there was still
              so much left to discover.
            </p>

            <p>
              This journey was not a promise simply to remember
              Egypt. It was a promise to return.
            </p>
          </section>

          {/* TAGS */}
          <div className="wanderlust-story-tags">
            <span>Egypt</span>
            <span>Giza Pyramids</span>
            <span>Grand Egyptian Museum</span>
            <span>Nile River</span>
            <span>Suez Canal</span>
            <span>Alexandria</span>
            <span>Cultural Travel</span>
          </div>

          {/* PREVIOUS / NEXT */}
          <div className="wanderlust-story-navigation">
            <Link to="/wanderlust/vietnam-cambodia">
              <span>← Previous Story</span>
              <strong>Under the Same Sky: Vietnam and Cambodia</strong>
            </Link>

            <Link to="/wanderlust/japan">
              <span>Next Story →</span>
              <strong>Walking Backwards Through Blossoms: Japan</strong>
            </Link>
          </div>
        </article>

        {/* SIDEBAR */}
        <aside className="wanderlust-story-sidebar">
          <div className="wanderlust-sidebar-card">
            <span className="wanderlust-eyebrow">
              DISCOVER EGYPT
            </span>

            <h3>Walk Through History</h3>

            <p>
              Discover ancient monuments, remarkable waterways,
              Mediterranean cities and the people whose stories
              bring Egypt to life.
            </p>

            <Link
              to="/travel-with-care"
              className="wanderlust-sidebar-button"
            >
              Explore Journeys →
            </Link>
          </div>

          <div className="wanderlust-sidebar-card">
            <h3>More Wanderlust Stories</h3>

            <p>
              Explore meaningful journeys across cultures,
              continents and generations.
            </p>

            <Link
              to="/wanderlust-diaries"
              className="wanderlust-sidebar-button"
            >
              View All Diaries →
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default Egypt;