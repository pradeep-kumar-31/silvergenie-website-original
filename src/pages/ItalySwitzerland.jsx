import React from "react";
import { Link } from "react-router-dom";
import "../styles/WanderlustDiaries.css";

const imageBase = `${import.meta.env.BASE_URL}image/blog/`;

function ItalySwitzerland() {
  const imagePath = `${imageBase}italy-switzerland.png`;

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
            Across Generations, Across Europe: A Winter Journey Through
            Italy &amp; Switzerland
          </h1>

          <p className="wanderlust-story-lead">
            A winter journey through Europe, bringing generations
            together through shared experiences, cultural discovery,
            and the joy of travelling together.
          </p>

          <div className="wanderlust-story-meta">
            <span>📅 September 7, 2026</span>
            <span>📍 Italy &amp; Switzerland</span>
            <span>✍️ Chaha Mukherjee</span>
          </div>

          <a
            href="#europe-story"
            className="wanderlust-sidebar-button"
          >
            Explore the Journey ↓
          </a>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      <section className="wanderlust-story-featured-image">
        <img
          src={imagePath}
          alt="Winter travel through Italy and Switzerland"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </section>

      {/* MAIN STORY */}
      <section
        className="wanderlust-story-layout"
        id="europe-story"
      >
        <article className="wanderlust-story-content">
          {/* INTRODUCTION */}
          <div className="wanderlust-story-section">
            <span className="wanderlust-eyebrow">
              A JOURNEY ACROSS GENERATIONS
            </span>

            <h2>When Travel Brings Generations Together</h2>

            <p>
              Some journeys become special because of the destinations
              we explore. Others become unforgettable because of the
              people who share the experience with us.
            </p>

            <p>
              Travelling across generations offers a unique opportunity
              to discover the world together. Different perspectives,
              interests, and memories come together, creating experiences
              that can be enjoyed and remembered by everyone.
            </p>

            <p>
              A winter journey through Italy and Switzerland brings
              together the charm of European cities, cultural discovery,
              and the beauty of winter landscapes.
            </p>
          </div>

          {/* ITALY */}
          <div className="wanderlust-story-section">
            <h2>Italy: History, Culture and Everyday Beauty</h2>

            <p>
              Italy invites travellers to experience history not only
              through famous landmarks, but also through its streets,
              architecture, food, art, and everyday life.
            </p>

            <p>
              From historic city squares to beautiful buildings and
              traditional cafés, the country offers opportunities to
              slow down and appreciate the details that make each
              place distinctive.
            </p>

            <p>
              Exploring a destination together can also make the
              experience richer. One traveller may appreciate its
              history, another its architecture, while someone else
              may remember a memorable meal or a quiet moment shared
              with family.
            </p>
          </div>

          {/* SWITZERLAND */}
          <div className="wanderlust-story-section">
            <h2>Switzerland: The Beauty of Winter</h2>

            <p>
              Switzerland is renowned for its Alpine scenery,
              picturesque towns, mountain views, and landscapes that
              feel especially magical during winter.
            </p>

            <p>
              Snow-covered surroundings and scenic journeys can offer
              a different pace from busy city exploration. They invite
              travellers to pause, enjoy the views, and appreciate the
              natural beauty around them.
            </p>

            <p>
              For a multigenerational group, thoughtful planning helps
              everyone enjoy the experience in a way that suits their
              comfort, interests, and energy levels.
            </p>
          </div>

          {/* MULTIGENERATIONAL TRAVEL */}
          <div className="wanderlust-story-section">
            <h2>Travelling Together, at Every Age</h2>

            <p>
              A multigenerational holiday is about more than choosing
              places to visit. It is about creating an experience in
              which different age groups can feel included and enjoy
              time together.
            </p>

            <p>
              A balanced itinerary can make a difference. Combining
              sightseeing with rest, allowing enough time between
              activities, and considering individual preferences can
              help make travel more comfortable.
            </p>

            <p>
              The goal is not necessarily to see everything. Sometimes,
              the most memorable parts of a holiday are the conversations,
              shared laughter, photographs, and small discoveries that
              happen along the way.
            </p>
          </div>

          {/* THOUGHTFUL TRAVEL */}
          <div className="wanderlust-story-section">
            <h2>The Importance of Thoughtful Planning</h2>

            <p>
              Winter travel can require additional preparation.
              Weather, clothing, transport arrangements, walking
              distances, and opportunities to rest are all worth
              considering before setting out.
            </p>

            <p>
              When people of different ages travel together, planning
              around comfort and individual needs can make the journey
              easier to enjoy.
            </p>

            <p>
              SilverGenie Wanderlust follows a care-first philosophy
              that places the traveller's experience at the centre
              of the journey. Thoughtful arrangements can help people
              focus less on travel stress and more on the experiences
              they came to enjoy.
            </p>
          </div>

          {/* CONCLUSION */}
          <div className="wanderlust-story-section">
            <h2>Memories That Travel Across Generations</h2>

            <p>
              The true value of travelling together lies in the
              memories that remain long after returning home.
            </p>

            <p>
              A winter journey through Italy and Switzerland represents
              the possibility of discovering new places while
              strengthening connections with the people who matter.
            </p>

            <p>
              Because the best journeys are not measured only by the
              number of destinations visited, but also by the moments
              shared and the memories carried home.
            </p>
          </div>

          {/* TAGS */}
          <div className="wanderlust-story-tags">
            <span>#SilverGenieWanderlust</span>
            <span>#Italy</span>
            <span>#Switzerland</span>
            <span>#WinterTravel</span>
            <span>#MultigenerationalTravel</span>
            <span>#TravelWithCare</span>
          </div>

          {/* STORY NAVIGATION */}
          <div className="wanderlust-story-navigation">
            <Link to="/wanderlust/bhutan">
              ← Previous Story: Bhutan
            </Link>

            <Link to="/wanderlust/vietnam-cambodia">
              Next Story: Vietnam &amp; Cambodia →
            </Link>
          </div>
        </article>

        {/* SIDEBAR */}
        <aside className="wanderlust-story-sidebar">
          <div className="wanderlust-sidebar-card">
            <span className="wanderlust-eyebrow">
              THE DESTINATIONS
            </span>

            <h3>Italy &amp; Switzerland</h3>

            <p>
              Discover European culture, historic surroundings,
              scenic landscapes, and winter travel experiences.
            </p>
          </div>

          <div className="wanderlust-sidebar-card">
            <span className="wanderlust-eyebrow">
              STORY DETAILS
            </span>

            <h3>Across Generations, Across Europe</h3>

            <p>
              <strong>Author:</strong> Chaha Mukherjee
            </p>

            <p>
              <strong>Published:</strong> September 7, 2026
            </p>
          </div>

          <div className="wanderlust-sidebar-card">
            <h3>Explore More Diaries</h3>

            <p>
              Continue discovering stories from SilverGenie
              Wanderlust Diaries.
            </p>

            <Link
              to="/wanderlust-diaries"
              className="wanderlust-sidebar-button"
            >
              View All Diaries →
            </Link>
          </div>

          <div className="wanderlust-sidebar-card">
            <h3>Travel Without Worry</h3>

            <p>
              Explore SilverGenie's care-first approach to
              thoughtfully planned travel.
            </p>

            <a
              href="https://www.yoursilvergenie.com/elder-care/wanderlust-curated-with-care.php"
              target="_blank"
              rel="noopener noreferrer"
              className="wanderlust-sidebar-button"
            >
              Discover Wanderlust →
            </a>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default ItalySwitzerland;