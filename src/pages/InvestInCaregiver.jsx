import "../styles/BlogArticle.css";

function InvestInCaregiver() {
  const goToContact = () => {
    window.location.href = "/silvergenie-website-original/#contact";
  };

  return (
    <main className="blog-article-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="blog-article-hero">

        <div className="blog-article-container">

          <span className="blog-article-category">
            SENIOR CARE
          </span>

          <h1>
            Invest in a Caregiver
          </h1>

          <div className="blog-article-meta">
            <span>October 28, 2025</span>
            <span>•</span>
            <span>By Ms. Rema Sundar</span>
          </div>

        </div>

      </section>


      {/* =====================================================
          ARTICLE
      ===================================================== */}

      <article className="blog-article-content">

        <div className="blog-article-container">

          {/* =================================================
              FEATURE IMAGE
          ================================================= */}

          <div className="blog-article-visual">

            <img
              src={`${import.meta.env.BASE_URL}image/blog/blogs.png`}
              alt="Invest in a Caregiver"
            />

          </div>


          {/* =================================================
              AUTHOR
          ================================================= */}

          <div className="blog-author-card">

            <div className="blog-author-image">

              <img
                src={`${import.meta.env.BASE_URL}image/blog/rema-sundar.png`}
                alt="Ms. Rema Sundar"
              />

            </div>

            <div className="blog-author-info">

              <span className="blog-author-label">
                AUTHOR
              </span>

              <h3>
                Ms. Rema Sundar
              </h3>

              <p>
                Grants and Impact Anchor at SilverGenie
              </p>

            </div>

          </div>


          {/* =================================================
              ARTICLE INTRO
          ================================================= */}

          <p className="article-intro">
            Sreeja is a soon-to-be octogenarian living with her
            well-off, middle-class family in Bangalore. The elderly
            lady has two sons and a daughter, all of whom are busy
            with their careers and the demands of daily life.
          </p>


          <p>
            The 80th birthday is a major milestone in any human
            being's life, a moment to be commemorated and celebrated.
          </p>

          <p>
            Ahead of Sreeja's birthday, her children connect over
            a conference call to decide how to make the day special.
            Each one offers their own ideas: hosting a party with
            close family and friends, gifting pieces of jewellery
            their mother would like, and creating a video featuring
            thoughts and wishes from extended family.
          </p>

          <p>
            Each suggestion has its own merit, and all are
            well-meaning.
          </p>

          <p>
            After discussion, the siblings decide to do all three,
            hoping to make their mother happy.
          </p>


          {/* =================================================
              STORY
          ================================================= */}

          <h2>
            A Celebration Filled With Love
          </h2>

          <p>
            Over the next fortnight, hectic preparations unfold,
            with grandchildren chipping in. Except for a few
            snippets, the entire affair is kept a surprise from
            Sreeja.
          </p>

          <p>
            She is encouraged to look forward to the big day.
          </p>

          <p>
            Finally, the big day arrives, and the entire family
            is excited. However, Sreeja feels lonely inside,
            yearning for companionship she cannot express to
            her children.
          </p>

          <p>
            She is dressed in new clothes, a cake is arranged,
            and friends and family sing birthday wishes.
          </p>


          {/* =================================================
              THE MISSING LINK
          ================================================= */}

          <h2>
            The Missing Link: Companionship
          </h2>

          <p>
            Here's the missing link: The family, caught up in
            preparations, has little time for their mother,
            leaving her alone in her room for long hours.
          </p>

          <p>
            Once the celebrations are over, Sreeja returns to
            her room, all by herself.
          </p>

          <p>
            The event costs the family Rs 4 lakhs, covering gifts,
            the party venue, guest accommodation, and various
            direct and indirect expenses.
          </p>


          {/* =================================================
              IMPORTANT QUESTION
          ================================================= */}

          <div className="blog-article-highlight">

            <span className="blog-article-highlight-label">
              A QUESTION WORTH ASKING
            </span>

            <p>
              Do the elderly truly need gifts of gold and silver,
              or do they need compassion, empathy, and care?
            </p>

          </div>


          <h2>
            Invest in Sustained Care
          </h2>

          <p>
            This story raises an important question about what
            truly makes a difference in the life of an ageing
            loved one.
          </p>

          <p>
            Would it not have been wiser for the family to invest
            in the services of a caregiver who could spend
            one-on-one time with their mother?
          </p>

          <p>
            A caregiver can provide companionship, everyday
            assistance and the human connection that seniors
            often need.
          </p>

          <p>
            It can also create an opportunity to support a young
            person with meaningful employment while providing
            valuable support to an ageing family member.
          </p>


          {/* =================================================
              CAREGIVER COST
          ================================================= */}

          <div className="blog-feature-card">

            <span className="blog-feature-number">
              CARE
            </span>

            <h3>
              Understanding the Investment
            </h3>

            <p>
              A trained caregiver in Bangalore typically costs
              between Rs 20,000 and Rs 40,000 per month,
              depending on qualifications and experience.
            </p>

          </div>


          {/* =================================================
              FINAL THOUGHT
          ================================================= */}

          <h2>
            What Truly Makes Sense?
          </h2>

          <p>
            To all well-meaning and loving children: Take a moment
            to reflect on what truly makes sense.
          </p>

          <p>
            Is it better to spend on a day's celebration or to
            invest in sustained care and comfort?
          </p>

          <p>
            For many seniors, meaningful companionship,
            personalised assistance and consistent care can be
            more valuable than a single day of celebration.
          </p>


          {/* =================================================
              CTA
          ================================================= */}

          <section className="blog-article-cta">

            <div>

              <span className="blog-article-cta-label">
                NEED HELP WITH ELDER CARE?
              </span>

              <h2>
                Let's make ageing
                <span> easier together.</span>
              </h2>

              <p>
                SilverGenie helps seniors and families access
                personalised care and support for everyday
                ageing needs.
              </p>

            </div>

            <button
              type="button"
              onClick={goToContact}
            >
              Connect With Us
              <span>→</span>
            </button>

          </section>

        </div>

      </article>

    </main>
  );
}

export default InvestInCaregiver;