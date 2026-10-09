import { Link, useParams } from "react-router-dom";
import "../styles/BlogArticle.css";

/* =========================================================
   BLOG DATA
========================================================= */

const articles = {
  "invest-in-a-caregiver": {
    title: "Invest in a Caregiver",
    date: "October 28, 2025",
    author: "Ms. Rema Sundar",
    category: "Senior Care",

    intro:
      "A thoughtful perspective on the importance of dependable caregiving and supporting seniors with dignity, companionship and personalised care.",

    sections: [
      {
        heading: "",
        paragraphs: [
          "Sreeja is a soon-to-be octogenarian living with her well-off, middle-class family in Bangalore. The elderly lady has two sons and a daughter, all of whom are busy with their careers and the demands of daily life.",

          "The 80th birthday is a major milestone in any human being’s life, a moment to be commemorated and celebrated.",

          "Ahead of Sreeja’s birthday, her children connect over a conference call to decide how to make the day special. Each one offers their own ideas: hosting a party with close family and friends, gifting pieces of jewellery their mother would like, and creating a video featuring thoughts and wishes from extended family.",

          "Each suggestion has its own merit, and all are well-meaning."
        ]
      },

      {
        heading: "A Celebration Filled With Love",
        paragraphs: [
          "After discussion, the siblings decide to do all three, hoping to make their mother happy.",

          "Over the next fortnight, hectic preparations unfold, with grandchildren chipping in. Except for a few snippets, the entire affair is kept a surprise from Sreeja. She is encouraged to look forward to the big day.",

          "Here’s the missing link: the family, caught up in preparations, has little time for their mother, leaving her alone in her room for long hours."
        ]
      },

      {
        heading: "The Big Day",
        paragraphs: [
          "Finally, the big day arrives, and the entire family is excited. However, Sreeja feels lonely inside, yearning for companionship she cannot express to her children.",

          "She is dressed in new clothes, a cake is arranged, and friends and family sing birthday wishes.",

          "The event costs the family Rs 4 lakhs, covering gifts, the party venue, guest accommodation, and various direct and indirect expenses.",

          "Once the day concludes, Sreeja returns to her room, all by herself."
        ]
      },

      {
        heading: "What Do Seniors Really Need?",
        paragraphs: [
          "The children feel satisfied that they have managed to return a part of what their mother did for them and gratefully accept compliments for organizing such a thoughtful event.",

          "This story raises an important question: Do the elderly truly need gifts of gold and silver, or do they need compassion, empathy, and care?",

          "Would it not have been wiser for the family to invest in the services of a caregiver who could spend one-on-one time with their mother?",

          "Isn’t it economically sensible to support a youth in need by providing employment and benefiting the family as well?"
        ]
      },

      {
        heading: "The Value of Sustained Care",
        paragraphs: [
          "A trained caregiver in Bangalore typically costs between Rs 20,000 and 40,000 per month, depending on qualifications and experience.",

          "For families managing the needs of ageing parents, dependable caregiving can provide companionship, everyday assistance and a greater sense of comfort."
        ]
      },

      {
        heading: "A Thought for Every Family",
        paragraphs: [
          "To all well-meaning and loving children: Take a moment to reflect on what truly makes sense.",

          "Is it better to spend on a day’s celebration or to invest in sustained care and comfort?"
        ]
      }
    ],

    authorBio: {
      name: "Ms. Rema Sundar",
      text:
        "Hi, I am Rema Sundar. As the Grants and Impact Anchor at SilverGenie, I lead grant initiatives and oversee impact measurement to ensure that our work creates real and lasting outcomes on the ground."
    }
  },

  "elder-care-and-home-health-care-understanding-the-difference": {
    title:
      "Elder Care and Home Health Care: Understanding the Difference",
    date: "February 7, 2025",
    author: "SilverGenie",
    category: "Elder Care",

    intro:
      "Understanding the difference between elder care and home health care can help families choose the right kind of support for their loved ones.",

    sections: [
      {
        heading: "Understanding Elder Care and Home Health Care",
        paragraphs: [
          "Our loved senior family members in their silver years deserve dignified ageing, and hence, it’s important to explore senior care services with partners that best offer personalised services.",

          "Elder and home health care serve unique purposes and cater to specific requirements.",

          "Here, we’ll break down the features, services, and benefits of elder and home health care, helping families make a well-informed choice."
        ]
      },

      {
        heading: "What is Home Health Care?",
        paragraphs: [
          "Home health care provides a range of medical services for seniors recovering from surgery at home.",

          "These services may include in-home nursing care to recover a person from surgery, an accident, or an illness that has impacted their graceful ageing.",

          "These services aim to promote recovery and well-being in a familiar environment."
        ]
      },

      {
        heading: "Key Features of Home Health Care",
        bullets: [
          "Delivered by trained healthcare professionals such as nurses and therapists.",
          "Includes services like medication management, wound care and physical therapy.",
          "Focuses on short-term recovery or managing specific health conditions."
        ]
      },

      {
        heading: "What is Elder Care?",
        paragraphs: [
          "Elder care focuses on providing non-medical support to seniors to ensure their well-being and dignified ageing without dependence.",

          "It includes assistance with daily living activities, companionship, social engagement and needed physical activity."
        ]
      },

      {
        heading: "Key Features of Elder Care",
        bullets: [
          "Offers emotional and social support.",
          "Includes services like meal preparation, housekeeping and personal care.",
          "Provides longer-term support focused on quality of life."
        ]
      },

      {
        heading: "Elder Care vs Home Health Care",
        comparison: true
      },

      {
        heading: "Benefits of Home Health Care",
        bullets: [
          "Comfort and familiarity by allowing seniors to remain at home.",
          "Professional nursing care, therapy and medicine management.",
          "Support for recovery and improved health outcomes."
        ]
      },

      {
        heading: "Benefits of Elder Care",
        bullets: [
          "Companionship and social engagement.",
          "Personalised care according to individual needs.",
          "Support for physical, emotional and social well-being.",
          "Helping seniors maintain independence."
        ]
      },

      {
        heading: "What Should You Look for in a Service Provider?",
        paragraphs: [
          "Cultural relevance is an important consideration when selecting a service provider for either home health care or elder care.",

          "A senior care partner that understands the cultural background, language, customs and preferences of seniors can help make the care experience more comfortable and acceptable."
        ]
      },

      {
        heading: "Frequently Asked Questions",
        faqs: [
          {
            question: "Who needs home health care?",
            answer:
              "Home health care is ideal for seniors recovering from surgery, managing chronic illnesses or needing short-term medical assistance at home."
          },
          {
            question: "What are the costs associated with elder care?",
            answer:
              "The cost varies based on the type of service and duration. Non-medical elder care is typically more affordable than professional medical services."
          },
          {
            question:
              "How do I know which service my loved one needs?",
            answer:
              "It depends on the specific needs of your loved one. Elder care may be appropriate for daily activities and companionship, while home health care may be more suitable when medical support is required."
          }
        ]
      },

      {
        heading: "Conclusion",
        paragraphs: [
          "Elder care and home health care each play a vital role in catering to seniors’ needs.",

          "By understanding the differences between these options, families can make informed decisions and ensure their loved ones receive the support they deserve."
        ]
      }
    ]
  },

  "the-big-difference-understanding-the-role-of-certified-caregivers-vs-domestic-maids": {
    title:
      "The Big Difference: Understanding the Role of Certified Caregivers vs. Domestic Maids in India’s Home Healthcare Sector",
    date: "January 20, 2025",
    author: "SilverGenie",
    category: "Caregiving",

    intro:
      "Many families in India face the decision of whether to hire a certified caregiver or a domestic maid. Understanding the difference is important when arranging support for a family member.",

    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "Many families in India are faced with the consideration of whether to hire a certified caregiver or a domestic maid as the demand for home caregivers surges.",

          "Both roles are important, however, understanding their differences can help families choose the right kind of support when a family member is ill or recovering.",

          "The right decision can help protect peace of mind while ensuring that the family member receives appropriate support."
        ]
      },

      {
        heading: "Making the Right Care Decision",
        paragraphs: [
          "The desire to provide comfort and dignity and enhance one’s quality of life can be emotional.",

          "Providing skilled support, tending to an individual’s physical and emotional needs and ensuring they stay well is the responsibility of a trained caregiver.",

          "A combination of household assistance and professional caregiving may sometimes be appropriate depending on the individual’s needs."
        ]
      },

      {
        heading:
          "Key Differences Between Certified Caregivers and Domestic Maids",
        numbered: [
          {
            title: "Education and Certification",
            text:
              "Certified caregivers complete formal training that addresses caregiving requirements. Domestic maids primarily focus on household tasks such as cleaning, cooking and washing clothes."
          },
          {
            title: "Assignment and Duties",
            text:
              "Certified caregivers may monitor health indicators, support mobility and provide professional assistance. Domestic maids generally focus on household chores and basic personal assistance."
          },
          {
            title: "Legal and Professional Standards",
            text:
              "Certified caregivers work within professional standards and training requirements, while domestic help may not have equivalent healthcare qualifications."
          },
          {
            title: "Social and Emotional Support",
            text:
              "Caregivers can provide companionship and emotional support, particularly for seniors living with chronic conditions or recovering from illness."
          },
          {
            title: "Financial Considerations",
            text:
              "Certified caregivers generally cost more because of their specialised training and caregiving responsibilities."
          }
        ]
      },

      {
        heading: "Comparison: Certified Caregiver vs Domestic Maid",
        comparisonCaregiver: true
      },

      {
        heading: "Frequently Asked Questions",
        faqs: [
          {
            question:
              "When should I choose between a caregiver or a maid?",
            answer:
              "When medical assistance, personal care or emotional support is required, a trained caregiver may be more appropriate. A domestic maid is generally suitable for household tasks."
          },
          {
            question:
              "Is a caregiver more expensive than a maid?",
            answer:
              "A caregiver is usually more expensive because of specialised training and healthcare-related responsibilities."
          },
          {
            question:
              "Can a maid take care of a person?",
            answer:
              "A maid may assist with basic daily activities, but domestic help generally does not have the specialised training required for professional caregiving."
          }
        ]
      },

      {
        heading: "Conclusion",
        paragraphs: [
          "Choosing between a trained caregiver and domestic help involves considering both the physical care and emotional well-being of the family member.",

          "Families should align the decision with the specific needs of their loved one so that they can receive appropriate support, dignity and peace of mind."
        ]
      }
    ]
  }
};

/* =========================================================
   COMPONENT
========================================================= */

function BlogArticle() {
  const { slug } = useParams();

  const article = articles[slug];

  if (!article) {
    return (
      <main className="article-not-found">
        <h1>Article Not Found</h1>

        <p>
          Sorry, the article you are looking for could not be found.
        </p>

        <Link to="/blog">
          ← Back to Blog
        </Link>
      </main>
    );
  }

  return (
    <main className="blog-article-page">

      {/* =====================================================
          ARTICLE HERO
      ===================================================== */}

      <section className="article-hero">

        <div className="article-hero-container">

          <Link
            to="/blog"
            className="article-back-link"
          >
            ← Back to Senior Care Diaries
          </Link>

          <span className="article-category">
            {article.category}
          </span>

          <h1>
            {article.title}
          </h1>

          <div className="article-meta">

            <span>{article.date}</span>

            <span>•</span>

            <span>By {article.author}</span>

          </div>

        </div>

      </section>


      {/* =====================================================
          ARTICLE CONTENT
      ===================================================== */}

      <section className="article-section">

        <div className="article-layout">

          <article className="article-content">

            {/* IMAGE PLACEHOLDER */}

            <div className="article-image-placeholder">
              <span>Article Image</span>
              <small>
                You can add the image here later
              </small>
            </div>


            {/* INTRO */}

            <p className="article-intro">
              {article.intro}
            </p>


            {/* CONTENT */}

            {article.sections.map((section, index) => (

              <section
                className="article-content-section"
                key={`${section.heading}-${index}`}
              >

                {section.heading && (
                  <h2>
                    {section.heading}
                  </h2>
                )}


                {/* PARAGRAPHS */}

                {section.paragraphs?.map(
                  (paragraph, paragraphIndex) => (
                    <p key={paragraphIndex}>
                      {paragraph}
                    </p>
                  )
                )}


                {/* BULLETS */}

                {section.bullets && (
                  <ul className="article-list">

                    {section.bullets.map(
                      (bullet, bulletIndex) => (
                        <li key={bulletIndex}>
                          {bullet}
                        </li>
                      )
                    )}

                  </ul>
                )}


                {/* NUMBERED CONTENT */}

                {section.numbered && (
                  <div className="article-numbered">

                    {section.numbered.map(
                      (item, itemIndex) => (
                        <div
                          className="article-numbered-item"
                          key={itemIndex}
                        >

                          <div className="article-number">
                            {itemIndex + 1}
                          </div>

                          <div>
                            <h3>
                              {item.title}
                            </h3>

                            <p>
                              {item.text}
                            </p>
                          </div>

                        </div>
                      )
                    )}

                  </div>
                )}


                {/* CAREGIVER COMPARISON */}

                {section.comparisonCaregiver && (
                  <div className="article-table-wrapper">

                    <table className="article-table">

                      <thead>
                        <tr>
                          <th>Aspect</th>
                          <th>Certified Caregiver</th>
                          <th>Domestic Maid</th>
                        </tr>
                      </thead>

                      <tbody>

                        <tr>
                          <td>Training</td>
                          <td>
                            Specialised caregiving training
                          </td>
                          <td>
                            Household task training
                          </td>
                        </tr>

                        <tr>
                          <td>Responsibilities</td>
                          <td>
                            Care support, health monitoring and companionship
                          </td>
                          <td>
                            Cleaning, cooking, laundry and basic assistance
                          </td>
                        </tr>

                        <tr>
                          <td>Healthcare Support</td>
                          <td>
                            Can provide trained caregiving assistance
                          </td>
                          <td>
                            Limited healthcare capability
                          </td>
                        </tr>

                        <tr>
                          <td>Emotional Support</td>
                          <td>
                            Companionship and emotional support
                          </td>
                          <td>
                            Primarily task-oriented
                          </td>
                        </tr>

                        <tr>
                          <td>Cost</td>
                          <td>
                            Higher because of specialised skills
                          </td>
                          <td>
                            Generally more affordable
                          </td>
                        </tr>

                      </tbody>

                    </table>

                  </div>
                )}


                {/* ELDER CARE COMPARISON */}

                {section.comparison && (
                  <div className="article-table-wrapper">

                    <table className="article-table">

                      <thead>
                        <tr>
                          <th>Aspect</th>
                          <th>Elder Care</th>
                          <th>Home Health Care</th>
                        </tr>
                      </thead>

                      <tbody>

                        <tr>
                          <td>Focus</td>
                          <td>
                            Non-medical assistance and companionship
                          </td>
                          <td>
                            Medical care and recovery support
                          </td>
                        </tr>

                        <tr>
                          <td>Duration</td>
                          <td>
                            Long-term quality-of-life support
                          </td>
                          <td>
                            Short-term recovery or condition management
                          </td>
                        </tr>

                        <tr>
                          <td>Services</td>
                          <td>
                            Personal care, meal preparation and companionship
                          </td>
                          <td>
                            Nursing, therapy and medication management
                          </td>
                        </tr>

                        <tr>
                          <td>Care Providers</td>
                          <td>
                            Caregivers or attendants
                          </td>
                          <td>
                            Licensed healthcare professionals
                          </td>
                        </tr>

                      </tbody>

                    </table>

                  </div>
                )}


                {/* FAQ */}

                {section.faqs && (
                  <div className="article-faq">

                    {section.faqs.map(
                      (faq, faqIndex) => (
                        <div
                          className="article-faq-item"
                          key={faqIndex}
                        >

                          <h3>
                            {faq.question}
                          </h3>

                          <p>
                            {faq.answer}
                          </p>

                        </div>
                      )
                    )}

                  </div>
                )}

              </section>

            ))}


            {/* =================================================
                AUTHOR
            ================================================= */}

            {article.authorBio && (
              <div className="article-author-box">

                <div className="author-placeholder">
                  SG
                </div>

                <div>

                  <span>
                    AUTHOR
                  </span>

                  <h3>
                    {article.authorBio.name}
                  </h3>

                  <p>
                    {article.authorBio.text}
                  </p>

                </div>

              </div>
            )}


            {/* =================================================
                BOTTOM CTA
            ================================================= */}

            <div className="article-bottom-cta">

              <span>
                NEED HELP WITH ELDER CARE?
              </span>

              <h2>
                Let’s make ageing
                <strong> easier together.</strong>
              </h2>

              <p>
                From everyday assistance to healthcare coordination,
                SilverGenie helps seniors and families access the care
                and support they need.
              </p>

              <Link
                to="/#contact"
                className="article-cta-button"
              >
                Connect With Us
                <span>→</span>
              </Link>

            </div>

          </article>


          {/* =====================================================
              SIDEBAR
          ===================================================== */}

          <aside className="article-sidebar">

            <div className="sidebar-card">

              <span>
                SILVERGENIE
              </span>

              <h3>
                Senior Care
                <br />
                Insights
              </h3>

              <p>
                Helpful perspectives on ageing, healthcare,
                caregiving and senior well-being.
              </p>

              <Link to="/blog">
                Explore More Articles →
              </Link>

            </div>


            <div className="sidebar-card sidebar-contact">

              <span>
                NEED SUPPORT?
              </span>

              <h3>
                Talk to
                <br />
                SilverGenie
              </h3>

              <p>
                Get help choosing the right care and support
                for your loved ones.
              </p>

              <Link to="/#contact">
                Contact Us →
              </Link>

            </div>

          </aside>

        </div>

      </section>

    </main>
  );
}

export default BlogArticle;