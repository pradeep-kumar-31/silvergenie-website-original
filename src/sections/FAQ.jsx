import { useState } from "react";
import faqs from "../data/faq";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">

      <div className="faq-container">

        {/* HEADING */}
        <div className="faq-heading">

          <span className="section-label">
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2>
            Frequently Asked
            <span> Questions</span>
          </h2>

          <p>
            Find answers to some of the common questions
            about SilverGenie and our services.
          </p>

        </div>


        {/* FAQ LIST */}
        <div className="faq-list">

          {faqs.map((faq, index) => (

            <div
              className={`faq-item ${
                openIndex === index ? "active" : ""
              }`}
              key={faq.question}
            >

              <button
                type="button"
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >

                <span>
                  {faq.question}
                </span>

                <span className="faq-icon">
                  {openIndex === index ? "−" : "+"}
                </span>

              </button>


              {openIndex === index && (
                <div className="faq-answer">
                  <p>
                    {faq.answer}
                  </p>
                </div>
              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FAQ;