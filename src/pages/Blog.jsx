import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Blog.css";

const blogs = [
  {
    title: "Invest in a Caregiver",
    date: "October 28, 2025",
    author: "Ms. Rema Sundar",
    category: "Senior Care",
    image: `${import.meta.env.BASE_URL}image/blog/invest-in-caregiver.png`,
    description:
      "A thoughtful perspective on the importance of dependable caregiving and supporting seniors with dignity, companionship and personalised care.",
    link: "/blog/invest-in-a-caregiver",
  },

  {
    title:
      "Elder Care and Home Health Care: Understanding the Difference",
    date: "February 7, 2025",
    author: "SilverGenie",
    category: "Elder Care",
    image: `${import.meta.env.BASE_URL}image/blog/elder-home-health.jpeg`,
    description:
      "Understanding the difference between elder care and home health care can help families choose the right kind of support for their loved ones.",
    link: "/blog/elder-care-and-home-health-care",
  },

  {
    title:
      "The Big Difference: Understanding the Role of Certified Caregivers vs. Domestic Maids in India’s Home Healthcare Sector",
    date: "January 20, 2025",
    author: "SilverGenie",
    category: "Caregiving",
    image: `${import.meta.env.BASE_URL}image/blog/certified-caregiver.jpeg`,
    description:
      "Learn why families should understand the distinction between trained caregivers and domestic help when arranging support for seniors.",
    link: "/blog/certified-caregivers-vs-domestic-maids",
  },
];

function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const navigate = useNavigate();

  const categories = [
    "All",
    "Senior Care",
    "Elder Care",
    "Caregiving",
  ];

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter(
          (blog) => blog.category === activeCategory
        );

  // =========================================================
  // CONTACT SECTION
  // =========================================================

  const goToContact = () => {
    navigate("/");

    setTimeout(() => {
      const contactSection =
        document.getElementById("contact");

      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <main className="blog-page">

      {/* =====================================================
          BLOG HERO
      ===================================================== */}

      <section className="blog-hero">

        <div className="blog-hero-content">

          <span className="blog-eyebrow">
            SILVERGENIE • SENIOR CARE DIARIES
          </span>

          <h1>
            Insights for
            <span> Better Ageing.</span>
          </h1>

          <p>
            Helpful stories, insights and perspectives to help
            seniors and their families navigate ageing,
            healthcare and everyday well-being with confidence.
          </p>

        </div>

      </section>


      {/* =====================================================
          FEATURED BLOG
      ===================================================== */}

      <section className="featured-blog">

        {/* IMAGE */}

        <div className="featured-blog-image">

          <img
            src={`${import.meta.env.BASE_URL}image/blog/invest-in-caregiver.png`}
            alt="SilverGenie caregiver supporting a senior"
          />

        </div>


        {/* CONTENT */}

        <div className="featured-blog-content">

          <span className="blog-category">
            SENIOR CARE
          </span>

          <h2>
            Invest in a Caregiver
          </h2>

          <div className="blog-meta">

            <span>
              October 28, 2025
            </span>

            <span>•</span>

            <span>
              Ms. Rema Sundar
            </span>

          </div>

          <p>
            As families balance professional commitments and
            the changing needs of ageing parents, dependable
            caregiving can become an important part of
            supporting a fulfilling and dignified life for
            seniors.
          </p>


          <Link
            to="/blog/invest-in-a-caregiver"
            className="blog-read-button"
          >
            Read Article
            <span>→</span>
          </Link>

        </div>

      </section>


      {/* =====================================================
          LATEST BLOGS
      ===================================================== */}

      <section className="blogs-section">

        <div className="blogs-container">


          {/* =================================================
              HEADING
          ================================================= */}

          <div className="blogs-heading">

            <div>

              <span className="blog-eyebrow">
                FROM OUR DIARIES
              </span>

              <h2>
                Explore Our
                <span> Latest Insights</span>
              </h2>

            </div>

            <p>
              Explore stories and practical perspectives around
              senior care, caregiving and healthy ageing.
            </p>

          </div>


          {/* =================================================
              CATEGORY FILTER
          ================================================= */}

          <div className="blog-filters">

            {categories.map((category) => (

              <button
                type="button"
                key={category}
                className={
                  activeCategory === category
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setActiveCategory(category)
                }
              >
                {category}
              </button>

            ))}

          </div>


          {/* =================================================
              BLOG CARDS
          ================================================= */}

          <div className="blog-grid">

            {filteredBlogs.map((blog) => (

              <article
                className="blog-card"
                key={blog.title}
              >

                {/* IMAGE */}

                <div className="blog-card-image">

                  <img
                    src={blog.image}
                    alt={blog.title}
                    loading="lazy"
                  />

                  <span>
                    {blog.category}
                  </span>

                </div>


                {/* CONTENT */}

                <div className="blog-card-content">

                  <div className="blog-card-meta">

                    <span>
                      {blog.date}
                    </span>

                    <span>•</span>

                    <span>
                      {blog.author}
                    </span>

                  </div>


                  <h3>
                    {blog.title}
                  </h3>


                  <p>
                    {blog.description}
                  </p>


                  <Link
                    to={blog.link}
                    className="blog-link"
                  >
                    Read More
                    <span>→</span>
                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT CTA
      ===================================================== */}

      <section className="blog-cta">

        <div className="blog-cta-content">

          <span className="blog-eyebrow">
            NEED HELP WITH ELDER CARE?
          </span>

          <h2>
            Let’s make ageing
            <span> easier together.</span>
          </h2>

          <p>
            From everyday assistance to healthcare coordination,
            SilverGenie helps seniors and families access the
            care and support they need.
          </p>


          <button
            type="button"
            className="blog-cta-button"
            onClick={goToContact}
          >
            Connect With Us

            <span>
              →
            </span>
          </button>

        </div>

      </section>

    </main>
  );
}

export default Blog;