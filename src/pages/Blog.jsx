import { Link } from "react-router-dom";

function Blog() {
  const blogs = [
    {
      title: "Invest in a Caregiver",
      date: "October 28, 2025",
      author: "Ms. Rema Sundar",
      category: "Senior Care",
      description:
        "A reflection on the value of investing in trained caregiving support for senior family members and their long-term comfort and care.",
      link: "https://www.yoursilvergenie.com/invest-in-a-caregiver/",
      image: "/image/blog/caregiver.jpg",
    },
    {
      title: "Elder Care and Home Health Care: Understanding the Difference",
      date: "February 7, 2025",
      author: "SilverGenie",
      category: "Senior Care",
      description:
        "Understand the difference between elder care and home health care and the different needs each type of support can address.",
      link: "https://www.yoursilvergenie.com/elder-care-and-home-health-care-understanding-the-difference/",
      image: "/image/blog/elder-care.jpg",
    },
    {
      title:
        "The Big Difference: Understanding the Role of Certified Caregivers vs. Domestic Maids in India’s Home Healthcare Sector",
      date: "January 20, 2025",
      author: "SilverGenie",
      category: "Senior Care",
      description:
        "Explore the differences between trained caregivers and domestic maids when families are planning home healthcare support.",
      link: "https://www.yoursilvergenie.com/the-big-difference-understanding-the-role-of-certified-caregivers-vs-domestic-maids-in-indias-home-healthcare-sector/",
      image: "/image/blog/certified-caregiver.jpg",
    },
  ];

  return (
    <section className="blog-section" id="blog">
      <div className="blog-container">

        {/* HEADING */}
        <div className="blog-heading">
          <span className="section-label">
            SENIOR CARE DIARIES
          </span>

          <h2>
            Insights for
            <span> Better Senior Care</span>
          </h2>

          <p>
            Explore insights, stories and useful information
            related to elder care, home healthcare and healthy ageing.
          </p>
        </div>

        {/* BLOG CARDS */}
        <div className="blog-grid">

          {blogs.map((blog) => (
            <article className="blog-card" key={blog.title}>

              {/* IMAGE */}
              <div className="blog-image">
                <img
                  src={blog.image}
                  alt={blog.title}
                />

                <span className="blog-category">
                  {blog.category}
                </span>
              </div>

              {/* CONTENT */}
              <div className="blog-content">

                <div className="blog-meta">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.author}</span>
                </div>

                <h3>
                  {blog.title}
                </h3>

                <p>
                  {blog.description}
                </p>

                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-link"
                >
                  Read More
                  <span>→</span>
                </a>

              </div>

            </article>
          ))}

        </div>

        {/* VIEW ALL */}
        <div className="blog-button-wrapper">

          <a
            href="https://www.yoursilvergenie.com/senior-care-diaries/"
            target="_blank"
            rel="noopener noreferrer"
            className="blog-view-all"
          >
            View All Senior Care Diaries
            <span>→</span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Blog;