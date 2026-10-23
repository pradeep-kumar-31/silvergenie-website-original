import React from "react";
import { Link } from "react-router-dom";
import "../styles/WanderlustArticle.css";
const imageBase = `${import.meta.env.BASE_URL}image/blog/`;

export default function JagadhatriPujo() {
  return (
    <main className="jagadhatri-original-page">
      {/* ARTICLE CONTAINER */}
      <article className="jagadhatri-original-article">

        {/* HERO IMAGE WITH TITLE OVERLAY */}
        <header className="jagadhatri-original-header">
          <img
            src={`${imageBase}jagadhatri-pujo.png`}
            alt="Jagadhatri Pujo celebration in Chandannagar"
            className="jagadhatri-original-hero-image"
          />

          <div className="jagadhatri-original-overlay">
            <h1>
              From Spirit to Celebration: Our Jagadhatri Pujo Experience
            </h1>

            <p className="jagadhatri-original-meta">
              November 1, 2025 | By Wanderlust Diaries
            </p>
          </div>
        </header>

        {/* ARTICLE TEXT */}
        <div className="jagadhatri-original-content">
          <p>
            This festive season, our Wanderlust cohort travelled to
            Chandannagar to witness the celebration of Jagadhatri Pujo,
            a festival deeply rooted in cultural pride and spirituality.
            Jagadhatri means “Holder of the Universe.” We began our day
            with tea at Ahare Bahare before continuing our journey.
            This was a small reminder of how these small gestures of
            care and understanding truly stay with us.
          </p>

          <p>
            Our first visit was to Brahmanpara Jagarani, a glowing
            pandal filled with a vibrant neighbourhood spirit. We then
            made our way to Shitala Tala Sarbojanin, where we were
            welcomed warmly into the heart of the festivities. The
            golden beauty of the pandal at Kolpukur Dhar left everyone
            mesmerized, followed by the joy and laughter that filled
            our stop at Khalisani.
          </p>

          <p>
            After a delicious lunch at a thoughtfully chosen restaurant,
            we continued to Fotikgora, where the experience felt almost
            magical. Our next stop, Moddhanchal Sarbojanin, stood out
            with its luminous decorations and atmosphere. We then visited
            Beniyapukur, guided gently throughout, before concluding our
            parikrama at Bagbazar Sarbojanin, a serene and beautiful end
            to the day. We are deeply grateful and blessed to have
            experienced this journey together.
          </p>

          {/* ARTICLE COLLAGE IMAGE */}
          <figure className="jagadhatri-original-collage">
            <img
              src={`${imageBase}jagadhatri-pujo-collage.png`}
              alt="Moments from the SilverGenie Jagadhatri Pujo journey"
              loading="lazy"
            />
          </figure>

          <p>
            The essence of devotion, warmth of togetherness, and care in
            every detail could be experienced in each and every moment
            of Chandannagar Jagadhatri Puja Darshan. The entire journey
            was smooth right from the beginning. Travel timings were at
            appropriate intervals, the transition from one temple to
            another and from pandal to pandal was smooth, and every
            minute detail seemed to be thought over. Above all, the
            feeling of comfort and ease followed the group right through
            the day.
          </p>

          <p>
            The team led with warmth and attentiveness. They guided us
            smoothly from one stop to the next, making everyone feel
            included, supported, and unhurried. Even in busy festive
            surroundings, the arrangements never felt hurried.
            Refreshments were planned thoughtfully, pauses were given
            their place, and there was a natural flow to allow each
            person to take in the spiritual atmosphere at their own pace.
          </p>

          <p>
            It was much more than the journey itself but seemed to be
            the mutual celebration of faith and companionship. The
            experience held moments of reflection, joy, and deep
            connection with tradition. It reminded us that when care
            and intention guide the journey, the journey itself becomes
            part of the blessing.
          </p>

          {/* TAG */}
          <div className="jagadhatri-original-tags">
            <span>Tags:</span>{" "}
            <Link to="/wanderlust-diaries">Spiritual Diaries</Link>
          </div>

          {/* DISCLAIMER */}
          <div className="jagadhatri-original-disclaimer">
            <strong>Disclaimer:</strong> The views and opinions expressed
            in this blog are solely those of the author. This blog is
            protected under SilverGenie's copyright, while the written
            content remains the intellectual property of the author.
            Reproduction, distribution, or use of the content in any
            manner requires the author's prior consent.
          </div>

          {/* PREVIOUS / NEXT LINKS */}
          <nav
            className="jagadhatri-original-navigation"
            aria-label="Other Wanderlust stories"
          >
            <Link to="/wanderlust/kolkata-faith-history">
              ← No wonder, it's no wonder: My Solo Travel Story at the Taj Mahal
            </Link>

            <Link to="/wanderlust/durga-pujo-with-care">
              Trip to Assam Valley and Silk Route →
            </Link>
          </nav>
        </div>
      </article>
    </main>
  );
}