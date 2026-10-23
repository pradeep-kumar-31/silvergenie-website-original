import React from "react";
import { Link } from "react-router-dom";
import "../styles/WanderlustStory.css";

const KolkataFaithHistory = () => {
  const article = {
    title: "A Journey Through Faith, History, and Kolkata’s Essence",
    date: "December 10, 2025",
    author: "Wanderlust Diaries",
    image:
      "https://www.yoursilvergenie.com/wp-content/uploads/2025/12/Screenshot-2025-12-10-133205silvergenie_banner_tour.png",
  };

  const paragraphs = [
    `‘Joto Mot Toto Poth’ — as many minds, so many paths — is a reminder I return to often. Truth does not demand uniformity. Each of us approaches the sacred from a different lived reality, and that diversity is not confusion but grace. We don’t need to walk identical roads to arrive at truth; we only need to walk our own with honesty. Different paths don’t dilute truth — they enrich it. Integrity of intent is the common thread.`,

    `So when Poulomi (founder of Silver Genie) offered to organize a trip through Calcutta in 24 hours to showcase both the spiritual as well as cultural landscape, I had to count myself in.`,

    `Travelling as a group of women has its own magic. There’s an ease, a warmth, and an unspoken understanding that comes with it. We look out for each other, we share stories without hesitation, and somehow the smallest moments feel bigger when experienced together. That’s exactly what made November 15th so special.`,

    `November 15th was one of those rare days that stays with you long after it’s over, not because we saw a lot, but because Kolkata has a way of letting you feel its soul. For our women travellers’ group, this wasn’t just an itinerary; it was a day of connection, care, and gentle rediscovery.`,

    `We began at Kalighat Temple, one of the oldest and most powerful Shakti Peethas. The moment we stepped in, the chants, the incense, the hum of devotion wrapped around us. The temple has stood here for centuries, rebuilt, reimagined, but always a symbol of strength. Offering puja to Maa Kali, we felt that grounding energy women often seek but rarely get time to embrace: the permission to pause, breathe, and be held by something Greater.`,

    `Our next stop, Sister Nivedita’s House, brought a different kind of peace, the kind that whispers rather than announces itself. This is the home where Margaret Noble first began her journey in India in 1898, opening a girls’ school and serving the community with a fierce, tender purpose. Meeting Ashapurna Mahto there made those stories feel alive, like the old walls were still carrying the strength of the women who once walked through them.`,

    `At Baghbazar Maa er Bari, the house where Sri Sarada Devi spent the last twelve years of her life, the calm is almost immediate. The home still preserves her quiet, her belonging, her rhythm, and as simple as it sounds, sharing prasad there was one of the most grounding moments of the day, a reminder of how nurturing and powerful feminine energy can be. The house also quietly preserves key moments in Kolkata’s social movements, making it more than a spiritual space; it’s a living memory of strength, resilience and care.`,

    `The afternoon took us to the Sister Nivedita Heritage Museum, housed in a beautifully restored 150-year-old building. The architecture, the preserved artefacts, the letters and photographs, all of it pulled us into a world where service and education shaped a new generation of women. Walking through the galleries, you don’t just learn; you reflect, especially as a woman, about courage, purpose, and what it means to uplift others.`,

    `As evening approached, we made our way to Dakshineswar Temple. Built by Rani Rashmoni in the 1850s, the temple’s story itself is a testament to a woman’s conviction. Standing before Maa Bhavatarini, with the river shimmering nearby, that deep calm felt almost like a blessing. And it flowed seamlessly into the magic that awaited us next.`,

    `Belur Math’s evening aarti has a way of silencing everything—the noise outside, the noise inside. As lamps glowed and chants rose in the twilight, you could feel the river, the stones, the history, all weaving themselves into a moment of pure stillness. For many of us, this was the emotional peak of the day, a shared pause, a shared breath.`,

    `And of course, Kolkata doesn’t let you end a day without sweetness. A few legendary mishti later, we settled in for dinner at 6 Ballygunge Place, where the homely Bengali flavours wrapped up the evening as gently as it began.`,

    `This wasn’t sightseeing, it was belonging. It was a day of blessings, warmth, and sisterhood, a journey through Kolkata’s spiritual and cultural heart, seen through the eyes of women who travelled together not just to explore, but to feel.`,

    `Kolkata has that gift. It doesn’t just show you its heritage, it lets you carry a piece of its heart back with you.`,
  ];

  const relatedPosts = [
    {
      title: "Trip to Neora Valley and East Sikkim via the Silk Route",
      path: "/trip-to-neora-valley-and-east-sikkim-via-the-silk-route",
    },
    {
      title: "Under the White Rann Moon: A Journey Designed with Care",
      path: "/white-rann-senior-travel-experience-silvergenie",
    },
  ];

  return (
    <main className="wl-story-page">
      {/* Article banner with title */}
      <header className="wl-story-header">
        <img
          className="wl-story-banner"
          src={article.image}
          alt={article.title}
        />

        <div className="wl-story-header-content">
          <h1>{article.title}</h1>

          <p className="wl-story-meta">
            {article.date} | By {article.author}
          </p>
        </div>
      </header>

      {/* Complete article */}
      <article className="wl-story">
        <div className="wl-story-body">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Tags */}
        <div className="wl-story-tags">
          <span>Tags: </span>
          <Link to="/tag/spiritual-diaries">
            Spiritual Diaries
          </Link>
        </div>

        {/* Disclaimer */}
        <div className="wl-story-disclaimer">
          <p>
            <strong>Disclaimer:</strong> The views and opinions
            expressed in this blog are solely those of the author.
            The blog page is protected under SilverGenie’s copyright,
            while the written content remains the intellectual
            property of the author. Reproduction, distribution, or
            use of the content in any form requires the author’s
            prior consent. Unauthorized use or infringement will be
            subject to legal action.
          </p>
        </div>

        {/* Related posts */}
        <nav className="wl-story-related">
          {relatedPosts.map((post) => (
            <Link key={post.path} to={post.path}>
              {post.title}
            </Link>
          ))}
        </nav>
      </article>
    </main>
  );
};

export default KolkataFaithHistory;