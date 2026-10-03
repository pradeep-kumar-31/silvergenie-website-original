function Testimonials() {
  const testimonials = [
    {
      name: "Ms. Debleena Majumdar",
      role: "Author, Daughter of SilverGenie Patron, Bangalore",
      review:
        "SilverGenie team stayed with us throughout the journey, helping us from setting up tele-consultations to following up with the hospital, when we were unable to get any information, to helping find some working contacts from ambulance and oxygen, when no listed numbers were working. They were a pillar of support.",
    },
    {
      name: "Mr Ashish Akhouri",
      role: "Sales Head of MNC & Son of COVID Recovered Patron, Delhi",
      review:
        "Thanks a lot to SilverGenie Team for all the coordination and support provided. I felt SilverGenie is a part of my family. I appreciate their work and their ability. I am very grateful for the way SilverGenie Team handled everything and took best care of my mother.",
    },
    {
      name: "Mrs Kamalprova Bhattacharya",
      role: "SilverGenie Patron, Gurugram",
      review:
        "I got a Digital Personal Health Record created with SilverGenie. Now, it has my medical history, medicines & lab test reports, all in one place. I simply send this PHR to doctor/s before every tele-consultation, and the doctor/s need not ask me these details every time. I just show them my PHR! It has been very useful for me.",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">

        <div className="testimonials-heading">
          <span className="section-label">
            REVIEWS FROM ALL OVER THE WORLD
          </span>

          <h2>
            We are proud of the
            <span> difference we have been able to make so far.</span>
          </h2>

          <p>
            This is just the beginning.
          </p>
        </div>

        <div className="testimonials-grid">

          {testimonials.map((testimonial, index) => (
            <article
              className="testimonial-card"
              key={index}
            >
              <div className="quote-mark">“</div>

              <p className="testimonial-review">
                {testimonial.review}
              </p>

              <div className="testimonial-person">
                <strong>{testimonial.name}</strong>

                <span>{testimonial.role}</span>
              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;