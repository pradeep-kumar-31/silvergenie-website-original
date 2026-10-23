import React from "react";
import { Link } from "react-router-dom";
import "../styles/WanderlustDiaries.css";

const Assam = () => {
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
            Northeast Diaries
          </span>

          <h1>
            A Doctor’s Travel Diary: Discovering the Quiet Grace of Assam
          </h1>

          <p>
            A reflective journey through Assam, discovering the beauty
            of travel, the richness of a region and the value of seeing
            the world through fresh eyes.
          </p>

          <div className="wanderlust-story-meta">
            <span>March 10, 2026</span>
            <span>By Wanderlust Diaries</span>
            <span>Assam, Northeast India</span>
          </div>

        </div>
      </section>

      {/* FEATURED IMAGE */}
      <section className="wanderlust-story-featured-image">
        <img
          src={`${imageBase}assam.png`}
          alt="Assam landscape and natural beauty"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </section>

      {/* ARTICLE LAYOUT */}
      <section className="wanderlust-story-layout">

        <article className="wanderlust-story-content">

          <p className="wanderlust-story-lead">
            After spending more than four decades in laboratories
            and hospitals, studying cells, diagnosing disease and
            observing life through a microscope, retirement gradually
            taught me to observe the world differently.
          </p>

          <p>
            Travel, I realised, is another kind of diagnosis. You learn
            to read landscapes, people, cultures and moments. A journey
            becomes an opportunity to understand the world beyond the
            boundaries of familiar routines.
          </p>

          <p>
            Our recent journey to Assam left a lasting impression.
            It was particularly special because it was not simply
            a holiday. It was an opportunity to experience a different
            region, appreciate its character and look at life from
            another perspective.
          </p>

          {/* SECTION 1 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              A NEW PERSPECTIVE
            </span>

            <h2>When Travel Becomes a Way of Seeing</h2>

            <p>
              Working in medicine teaches you to observe carefully.
              You learn to notice small changes, look beyond appearances
              and understand how different elements come together.
            </p>

            <p>
              Retirement opened the door to another kind of observation.
              Instead of looking through a microscope, travel offered
              an opportunity to observe landscapes, local communities
              and everyday life.
            </p>

            <p>
              Assam became part of this discovery. The journey encouraged
              a slower, more thoughtful way of experiencing a destination,
              where attention to the surroundings mattered as much as
              reaching the next stop.
            </p>

          </section>

          {/* SECTION 2 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              DISCOVERING ASSAM
            </span>

            <h2>Exploring the Quiet Grace of Northeast India</h2>

            <p>
              Assam offers a distinctive setting for travellers who
              want to discover the character of Northeast India.
              Its landscapes, cultural traditions and everyday rhythms
              invite visitors to look beyond familiar travel experiences.
            </p>

            <p>
              Exploring a new region is also an exercise in patience.
              Every journey presents opportunities to notice details
              that might otherwise be overlooked.
            </p>

            <p>
              The most meaningful travel experiences are not always
              defined by how many places we visit. Sometimes, they
              come from the time we spend observing, listening and
              appreciating what makes a destination unique.
            </p>

          </section>

          {/* SECTION 3 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              TEA AND TRADITION
            </span>

            <h2>Understanding Assam Beyond the Journey</h2>

            <p>
              Assam is widely associated with tea, a product that
              connects the region's landscape with its cultural and
              economic identity.
            </p>

            <p>
              Learning about a destination through its familiar
              traditions can add depth to the travel experience.
              It encourages visitors to think about the people,
              work and history behind the things they encounter.
            </p>

            <p>
              This broader perspective is an important part of
              thoughtful travel: a destination becomes more than
              a backdrop for photographs when we take an interest
              in the life that gives it meaning.
            </p>

          </section>

          {/* SECTION 4 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              NATURE AND WILDLIFE
            </span>

            <h2>Appreciating the Natural World</h2>

            <p>
              The natural world provides another way to understand
              Assam. Its association with rich biodiversity and
              wildlife makes the region an important destination
              for people interested in nature.
            </p>

            <p>
              Observing nature encourages a different pace of travel.
              Rather than rushing from one activity to another,
              visitors can take time to appreciate the environment
              and reflect on the relationship between people and
              the places they inhabit.
            </p>

            <p>
              For a traveller accustomed to observing life through
              scientific work, these experiences can offer a fresh
              perspective on the complexity and beauty of the world.
            </p>

          </section>

          {/* SECTION 5 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              CULTURE AND CONNECTION
            </span>

            <h2>Discovering a Destination Through Its People</h2>

            <p>
              A place is shaped not only by its geography but also
              by its people, traditions and everyday interactions.
              Taking an interest in local life can make a journey
              more personal and memorable.
            </p>

            <p>
              Travel creates opportunities to step outside familiar
              surroundings and approach different experiences with
              curiosity.
            </p>

            <p>
              These encounters can stay with us long after the
              journey ends, changing the way we think about places
              and broadening our understanding of the world.
            </p>

          </section>

          {/* SECTION 6 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              A DIFFERENT RHYTHM
            </span>

            <h2>Learning to Travel Without Rushing</h2>

            <p>
              With time, the purpose of travel can change. The focus
              may move away from covering as many attractions as
              possible and towards enjoying the journey itself.
            </p>

            <p>
              A more considered pace creates room for reflection,
              observation and meaningful experiences. It allows
              travellers to appreciate what is happening around
              them rather than constantly thinking about what
              comes next.
            </p>

            <p>
              This approach is especially valuable when a journey
              is intended to offer discovery, comfort and a genuine
              connection with a destination.
            </p>

          </section>

          {/* SECTION 7 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              TRAVEL WITH CARE
            </span>

            <h2>Making Space for Meaningful Experiences</h2>

            <p>
              Thoughtful travel is about more than choosing a
              destination. The pace, arrangements and overall
              experience all influence how a journey feels.
            </p>

            <p>
              When travel is planned with attention to comfort
              and individual needs, people have more opportunity
              to focus on the destination and enjoy the experience.
            </p>

            <p>
              SilverGenie's Wanderlust philosophy places importance
              on care, comfort and meaningful discovery, helping
              travellers experience journeys with greater confidence.
            </p>

          </section>

          {/* CONCLUSION */}
          <section className="wanderlust-story-section">

            <h2>Travel as a Continuing Education</h2>

            <p>
              My professional life taught me to observe closely,
              question what I saw and search for a deeper understanding.
              Travel has offered another way to practise those habits.
            </p>

            <p>
              The journey through Assam became a reminder that learning
              does not end with retirement. New places continue to
              offer fresh perspectives, new questions and opportunities
              to appreciate the world differently.
            </p>

            <p>
              Sometimes, the greatest value of a journey lies not
              only in the places we visit but also in the way the
              experience changes how we see the world.
            </p>

          </section>

          {/* TAGS */}
          <div className="wanderlust-story-tags">
            <span>Assam</span>
            <span>Northeast India</span>
            <span>Northeast Diaries</span>
            <span>Nature and Culture</span>
            <span>Thoughtful Travel</span>
            <span>SilverGenie Wanderlust</span>
          </div>

          {/* STORY NAVIGATION */}
          <div className="wanderlust-story-navigation">

            <Link to="/wanderlust/mizoram">
              ← Previous Story
            </Link>

            <Link to="/wanderlust/hornbill-festival">
              Next Story →
            </Link>

          </div>

        </article>

        {/* SIDEBAR */}
        <aside className="wanderlust-story-sidebar">

          <div className="wanderlust-sidebar-card">

            <span className="wanderlust-eyebrow">
              STORY HIGHLIGHTS
            </span>

            <h3>Discovering Assam</h3>

            <ul>
              <li>A fresh perspective on travel</li>
              <li>Exploring Northeast India</li>
              <li>Tea and regional identity</li>
              <li>Nature and wildlife</li>
              <li>Culture and local life</li>
              <li>Slower, thoughtful exploration</li>
              <li>Meaningful travel experiences</li>
            </ul>

          </div>

          <div className="wanderlust-sidebar-card">

            <span className="wanderlust-eyebrow">
              NORTHEAST DIARIES
            </span>

            <h3>More Journeys, More Discoveries</h3>

            <p>
              Explore stories that celebrate Northeast India's
              landscapes, culture and memorable travel experiences.
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
              Discover thoughtfully planned journeys centred on
              comfort, care and meaningful experiences.
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

export default Assam;