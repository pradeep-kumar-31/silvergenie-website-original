import React from "react";
import { Link } from "react-router-dom";
import "../styles/WanderlustDiaries.css";

const DurgaPujoWithCare = () => {
  const imageBase = `${import.meta.env.BASE_URL}image/blog/`;

  return (
    <main className="wanderlust-story-page">

      {/* HERO */}
      <section className="wanderlust-story-hero">
        <div className="wanderlust-story-hero-content">

          <span className="wanderlust-eyebrow">
            SILVERGENIE WANDERLUST
          </span>

          <span className="wanderlust-story-category">
            Spiritual Diaries
          </span>

          <h1>
            From Devotion to Delight: Our #DurgaPujoWithCare Experience
          </h1>

          <p>
            A journey through Kolkata's Durga Puja celebrations, filled
            with devotion, cultural discovery, companionship and thoughtful care.
          </p>

          <div className="wanderlust-story-meta">
            <span>October 8, 2025</span>
            <span>By Wanderlust Diaries</span>
            <span>Kolkata, West Bengal</span>
          </div>

        </div>
      </section>

      {/* FEATURED IMAGE */}
      <section className="wanderlust-story-featured-image">
        <img
          src={`${imageBase}durga-pujo-with-care.png`}
          alt="SilverGenie Durga Pujo With Care experience"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </section>

      {/* ARTICLE */}
      <section className="wanderlust-story-layout">

        <article className="wanderlust-story-content">

          <p className="wanderlust-story-lead">
            Durga Puja brings together the rhythmic beats of the dhak,
            the fragrance of incense and the happiness of celebrating
            with others. SilverGenie's #DurgaPujoWithCare experience
            brought these traditions together with comfort, inclusion
            and meaningful companionship.
          </p>

          <p>
            Before the journey began, some travellers wondered whether
            a long day, heavy traffic and crowded festival locations
            might become tiring. However, thoughtful arrangements helped
            the group relax and enjoy the celebrations.
          </p>

          <p>
            The experience became more than a visit to festive locations.
            It was an opportunity to reconnect with memories, appreciate
            Kolkata's culture and enjoy the warmth of travelling together.
          </p>

          {/* SECTION 1 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              DAY ONE
            </span>

            <h2>From Kalighat to Belur Math and Dakshineswar</h2>

            <p>
              The first day brought together several important spiritual
              destinations, including Kalighat, Belur Math and Dakshineswar.
              Each place offered a different atmosphere and a chance to
              experience devotion in its own way.
            </p>

            <p>
              At Kalighat, the group encountered the energy of prayer and
              worship. Belur Math offered a quieter setting for reflection,
              while Dakshineswar added the beauty of its riverside surroundings.
            </p>

            <p>
              Moving between these places allowed travellers to experience
              Kolkata's spiritual heritage without losing sight of the
              importance of comfort and a manageable pace.
            </p>

          </section>

          {/* SECTION 2 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              DAY TWO
            </span>

            <h2>Rain, Umbrellas and Shared Laughter</h2>

            <p>
              When rain arrived on the second day, it did not spoil the
              group's festive spirit. Umbrellas came out, old songs were
              shared and laughter became part of the journey.
            </p>

            <p>
              The unexpected drizzle added another memory to the experience.
              Instead of allowing changing weather to define the day,
              the group adapted and continued enjoying the celebrations.
            </p>

            <p>
              It was a reminder that a memorable journey does not have
              to follow a perfect plan. Sometimes, unexpected moments
              become the stories travellers remember most.
            </p>

          </section>

          {/* SECTION 3 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              BENGALI FOOD
            </span>

            <h2>A Comforting Lunch at Bhajohari Manna</h2>

            <p>
              For many Bengalis, Pujo and good food belong together.
              Lunch at Bhajohari Manna gave the group an opportunity to
              enjoy comforting Bengali flavours during the celebrations.
            </p>

            <p>
              The meal brought back memories of family gatherings and
              familiar traditions. It was also a chance to sit together,
              relax and share conversations before continuing the journey.
            </p>

            <p>
              Good food became an important part of the experience,
              connecting the travellers with the culinary traditions
              that make the festival special.
            </p>

          </section>

          {/* SECTION 4 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              THE PEOPLE BEHIND THE JOURNEY
            </span>

            <h2>Care That Made Everyone Feel Welcome</h2>

            <p>
              The drivers, guides and coordinators contributed to the
              journey through their patience, helpfulness and friendly
              approach. Their role went beyond managing transportation
              and logistics.
            </p>

            <p>
              Small acts of kindness helped travellers feel supported
              throughout the experience. The team accompanied the group
              with the warmth of familiar companions, making the journey
              more comfortable and enjoyable.
            </p>

            <p>
              Thoughtful planning meant there was less confusion and
              unnecessary rushing, allowing the group to focus on the
              festival itself.
            </p>

          </section>

          {/* SECTION 5 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              NORTH KOLKATA
            </span>

            <h2>Returning with Full Hearts</h2>

            <p>
              On the final evening, the group travelled back through
              North Kolkata. Rain lights glistened on the roads, bringing
              a gentle calm after days filled with celebrations and discovery.
            </p>

            <p>
              The journey ended with gratitude, happy memories and the
              hope that this kind of shared Pujo experience would become
              a yearly tradition.
            </p>

            <p>
              The memories were not limited to temples or pandals.
              They included conversations, shared songs, familiar food
              and the reassuring presence of people who helped make
              the journey possible.
            </p>

          </section>

          {/* SECTION 6 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              INCLUSION AND ACCESSIBILITY
            </span>

            <h2>Making Durga Puja More Inclusive</h2>

            <p>
              SilverGenie's #DurgaPujoWithCare initiative grew from a
              heartfelt effort to make Durga Puja more inclusive and
              accessible, inspired by community experiences and insights.
            </p>

            <p>
              The initiative developed into a city-wide journey that
              demonstrated how empathy, intention and collective effort
              can help make celebrations more welcoming.
            </p>

            <p>
              Its message centres on diversity, equity and belonging:
              festivals should create opportunities for people to feel
              welcome, connected and included in shared cultural experiences.
            </p>

          </section>

          {/* SECTION 7 */}
          <section className="wanderlust-story-section">

            <span className="wanderlust-eyebrow">
              RECOGNITION
            </span>

            <h2>Sharing the Message of Accessible Celebrations</h2>

            <p>
              The initiative's approach to accessibility and inclusion
              received coverage in The Hindu and Financial Express.
              These features highlighted the wider conversation around
              making Durga Puja celebrations more accessible and safe.
            </p>

            <p>
              The recognition reinforced the importance of thoughtful
              community participation and practical efforts to help
              more people experience the joy of the festival.
            </p>

          </section>

          {/* CONCLUSION */}
          <section className="wanderlust-story-section">

            <h2>Pujo Is About More Than Pandals</h2>

            <p>
              Durga Puja is not only about visiting pandals or following
              rituals. It is also about companionship, comfort, memories
              and the moments people share along the way.
            </p>

            <p>
              The #DurgaPujoWithCare experience brought these elements
              together through cultural exploration and thoughtful support.
              It showed how planning with empathy can help people enjoy
              a celebration with greater confidence and peace of mind.
            </p>

            <p>
              For the travellers, the journey was a celebration of devotion,
              friendship and belonging — a reminder that festivals become
              even more meaningful when everyone has the opportunity to
              participate.
            </p>

          </section>

          {/* TAGS */}
          <div className="wanderlust-story-tags">
            <span>Durga Puja</span>
            <span>Spiritual Diaries</span>
            <span>Inclusive Travel</span>
            <span>Kolkata</span>
            <span>SilverGenie Wanderlust</span>
          </div>

          {/* NAVIGATION */}
          <div className="wanderlust-story-navigation">

            <Link to="/wanderlust/jagadhatri-pujo">
              ← Previous Story
            </Link>

            <Link to="/wanderlust/mahakumbh">
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

            <h3>#DurgaPujoWithCare</h3>

            <ul>
              <li>Kalighat Temple</li>
              <li>Belur Math</li>
              <li>Dakshineswar</li>
              <li>Durga Puja celebrations</li>
              <li>Lunch at Bhajohari Manna</li>
              <li>Shared songs and memories</li>
              <li>Thoughtful travel arrangements</li>
              <li>Inclusion and accessibility</li>
            </ul>

          </div>

          <div className="wanderlust-sidebar-card">

            <span className="wanderlust-eyebrow">
              TRAVEL WITH CARE
            </span>

            <h3>Celebrate With Confidence</h3>

            <p>
              Discover thoughtful travel experiences that put comfort,
              companionship and accessibility at the heart of the journey.
            </p>

            <Link
              to="/travel-with-care"
              className="wanderlust-sidebar-button"
            >
              Explore Travel With Care
            </Link>

          </div>

          <div className="wanderlust-sidebar-card">

            <span className="wanderlust-eyebrow">
              MORE STORIES
            </span>

            <h3>Explore Wanderlust Diaries</h3>

            <p>
              Continue exploring stories of festivals, culture,
              spirituality and journeys shared with care.
            </p>

            <Link
              to="/wanderlust-diaries"
              className="wanderlust-sidebar-button"
            >
              View All Diaries
            </Link>

          </div>

        </aside>

      </section>

    </main>
  );
};

export default DurgaPujoWithCare;