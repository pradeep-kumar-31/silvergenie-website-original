import { Link } from "react-router-dom";
import "../styles/VietnamCambodia.css";

const images = {
  hero: "https://www.yoursilvergenie.com/wp-content/uploads/2025/10/Banner-Image-Blogs.png",
  article:
    "https://www.yoursilvergenie.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-01-at-19.28.13_80809251.jpg",
  author: "https://www.yoursilvergenie.com/wp-content/uploads/2020/10/kuhu.jpg",
};

export default function VietnamCambodia() {
  return (
    <main className="vietnam-cambodia">
      <header className="vietnam-cambodia__hero">
        <img
          className="vietnam-cambodia__hero-image"
          src={images.hero}
          alt="Vietnam and Cambodia travel journey"
        />
        <div className="vietnam-cambodia__hero-overlay" />

        <div className="vietnam-cambodia__hero-content">
          <p className="vietnam-cambodia__eyebrow">
            Asia, Africa and Europe Diaries
          </p>
          <h1>Under the Same Sky: Notes from Vietnam and Cambodia</h1>
          <p className="vietnam-cambodia__meta">
            October 27, 2025 <span aria-hidden="true">•</span> By Kuhu Adhikary
          </p>
        </div>
      </header>

      <article className="vietnam-cambodia__article">
        <p className="vietnam-cambodia__lead">
          Hanoi woke softly, bathed in gold. At a little café called Noted, time
          seemed to slow. Strong coffee, quiet chatter, and the warmth of a new
          beginning filled the morning. Around the corner, the French Opera
          House stood with quiet dignity, a reminder that grace can be simple.
          SilverGenie had planned the beginning of the trip with accessible
          local walks, shorter transfers, and trusted partners who understood
          how pre-seniors travel, with comfort and not rush.
        </p>

        <p>
          Train Street came next, that narrow stretch where trains brush past
          doorsteps. Locals barely blinked while we, wide-eyed, held our breath.
          SilverGenie’s Care Coach guided us safely to the viewing point,
          ensuring every photograph and every heartbeat was captured with
          confidence. Dinner that night was curated, nothing too grand but
          simple, in a cozy local eatery with balanced meals, soft seating, and
          patient servers who understood our pace. Sometimes, the best luxury is
          thoughtfulness.
        </p>

        <p>
          Beyond Hanoi, Ninh Binh opened wide with fields like silk, cliffs like
          stone guardians, and water mirroring the sky. Our boat journey was
          pre-checked for easy access, assisted boarding, and restroom breaks
          mapped by the team. Inside the caves, the silence felt sacred and
          knowing that everything was taken care of allowed us to simply be.
        </p>

        <p>
          Ha Long Bay shimmered in mist and myth. SilverGenie’s on-ground
          partner ensured seamless boarding, accessible cabins, and safety
          briefings that reassured. Dinner on deck was slow and soulful, framed
          by views that words could never hold.
        </p>

        <p>
          In Da Nang, city and sea met like old friends. The Golden Bridge,
          those vast stone hands holding the sky, became more than a photo stop.
          The team had arranged priority cable car boarding, shaded rest points,
          and personalized assistance for anyone needing support. Inside the
          Marble Mountains, our guide, briefed in advance, ensured that even
          those preferring gentler climbs could experience the shrines and the
          light filtering through the stone.
        </p>

        <p>
          Hoi An felt like poetry come alive, with lanterns swaying by the river
          and gentle music in the air. The team had reserved an early slot to
          avoid the crowd, arranged wheel-assisted access, and even included a
          local craft demonstration so no one was left watching from the side.
          “A date with the lanterns,” someone said, and it truly was intimate,
          unhurried, and unforgettable.
        </p>

        <p>
          Saigon pulsed with energy, full of scooters, laughter, and rhythm, yet
          every detail had been coordinated. SilverGenie’s partner guide
          balanced the pace, alternating vibrant city tours with restful tea
          sessions and wellness breaks. In the Mekong Delta, boats were selected
          for easy boarding, and meals were allergen-checked in advance. Between
          honey tea, folk songs, and temple chants, care and culture blended
          seamlessly.
        </p>

        <figure className="vietnam-cambodia__photo">
          <img
            src={images.article}
            alt="A travel moment from Vietnam and Cambodia"
            loading="lazy"
          />
          <figcaption>Vietnam and Cambodia — Photos by Author</figcaption>
        </figure>

        <p>
          Crossing into Cambodia felt like stepping between worlds. Siem Reap
          held an older calm. Our evenings featured accessible cultural
          performances, and the team ensured all transfers and temple visits
          aligned with comfort and stamina levels.
        </p>

        <p>
          Before dawn, we stood before Angkor Wat, not jostling in crowds but in
          a quiet zone, the team had pre-booked for sunrise viewing. As the
          temple unfurled with the light, someone whispered, “The world is awake
          again.” Later that evening, during the Apsara dance, we understood
          that travel isn’t about how far you go but how deeply you feel.
        </p>

        <p>
          From Hanoi’s first cup of coffee to Angkor’s awakening stones, every
          moment was made smoother, safer, and more soulful through thoughtful
          coordination, with care woven into every itinerary and inclusivity
          built into every plan.
        </p>

        <p className="vietnam-cambodia__closing">
          That is the #SilverGenieAdvantage: journeys curated for Care,
          Accessibility, and Inclusivity, coordinated with precision and empathy
          so every traveller feels supported. Every itinerary is truly #Bespoke,
          crafted around comfort, culture, and connection, reminding us that
          wonder does not need to be chased. Sometimes, it finds us exactly
          where we stand.
        </p>

        <section className="vietnam-cambodia__author">
          <img src={images.author} alt="Kuhu Adhikary" loading="lazy" />
          <div>
            <p className="vietnam-cambodia__author-label">Author</p>
            <h2>Kuhu Adhikary</h2>
            <p>
              Kuhu Adhikary sees travel as a way of discovering both the world
              and herself, one ordinary yet unforgettable moment at a time. What
              began as a small experiment in writing soon became a trusted way
              to capture memories and quirky historical insights from her
              journeys.
            </p>
            <p>
              She finds joy in coffee-fuelled mornings and spontaneous
              adventures, often blending the two whenever possible. Reading
              brings her comfort, while trying new experiences, whether a new
              city or even a bold coffee order, excites her curiosity. She
              approaches life with an open heart, always ready for the
              unexpected.
            </p>
            <p>
              Along the way, she has come to believe that life offers more
              surprises than a classic film, and she embraces laughter as her
              way of navigating it. Turning mishaps into stories, she continues
              forward with a simple philosophy: stay grateful, keep moving, and
              savour every moment.
            </p>
          </div>
        </section>

        <div className="vietnam-cambodia__tags">
          <strong>Tags:</strong>
          <a
            href="https://www.yoursilvergenie.com/tag/asia-africa-and-europe-diaries/"
            target="_blank"
            rel="noreferrer"
          >
            Asia Africa And Europe Diaries
          </a>
        </div>

        <aside className="vietnam-cambodia__disclaimer">
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

        <nav
          className="vietnam-cambodia__related"
          aria-label="Related articles"
        >
          <Link to="/from-devotion-to-delight-our-durgapujowithcare-experience">
            <span>Previous article</span>
            From Devotion to Delight: Our #DurgaPujoWithCare Experience
          </Link>

          <Link to="/invest-in-a-caregiver">
            <span>Next article</span>
            Invest in a Caregiver
          </Link>
        </nav>
      </article>
    </main>
  );
}
