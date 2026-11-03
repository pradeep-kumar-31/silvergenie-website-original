function Testimonials() {
  const testimonials = [
    {
      name: "Sudeepta Ganguly",
      role: "Kolkata",
      review:
        "When my father experienced a heart attack, we were unaware that individuals with diabetes may not feel pain during that time. Thanks to the alertness of the SilverGenie nurse, who recognised the symptoms and urged us to call for an ambulance, we were able to take immediate action and ultimately save his life. We are deeply grateful for the assistance provided by SilverGenie.",
    },
    {
      name: "Mrs Kamalprova Bhattacharya",
      role: "SilverGenie Patron, Gurugram",
      review:
        "I got a Digital Personal Health Record created with SilverGenie. Now, it has my medical history, medicines and lab test reports, all in one place. I simply send this PHR to the doctor before every tele-consultation, so the doctor does not need to ask me for these details each time. I just show them my PHR! It has been very useful for me.",
    },
    {
      name: "Mrs & Mr Sarkar",
      role: "Vancouver, Canada",
      review:
        "Thanks to team SilverGenie for their timely support provided to my father in India at the time of emergency. They not only provided personal assistance to him during the treatment but also while recovering.",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-heading">
          <span className="section-label">REVIEWS FROM ALL OVER THE WORLD</span>

          <h2>
            We are proud of the
            <span> difference we have been able to make so far.</span>
          </h2>

          <p>This is just the beginning.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <div className="quote-mark" aria-hidden="true">
                “
              </div>

              <p className="testimonial-review">{testimonial.review}</p>

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
