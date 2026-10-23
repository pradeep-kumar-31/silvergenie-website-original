import { useState } from "react";

const GOOGLE_SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbwjAHceJb2lyBk0ecOJLUKP74Zfl5OVQS6_DW3fC3yorQsY_tHU3c1o5PdjwK9DJ_hTyA/exec"
function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    services: [],
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleServiceChange = (event) => {
    const { checked, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      services: checked
        ? [...previous.services, value]
        : previous.services.filter((service) => service !== value),
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("");

    if (!formData.name.trim() || !formData.phone.trim()) {
      setStatus("Please enter your name and phone number.");
      return;
    }

    if (
  !GOOGLE_SCRIPT_URL.startsWith("https://script.google.com/") ||
  !GOOGLE_SCRIPT_URL.endsWith("/exec")
) {
  setStatus("Please check your Google Apps Script Web App URL.");
  return;
}

    setIsSubmitting(true);

    const sourceUrl = window.location.href;

    const payload = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      services: formData.services.join(", "),
      sourcePage: document.title || window.location.pathname,
      sourceUrl,
      tourName: "",
      tourUrl: "",
      message: formData.message.trim(),
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      setStatus(
        "Your enquiry has been submitted. If you do not hear from us, please contact our team."
      );

      setFormData({
        name: "",
        phone: "",
        email: "",
        services: [],
        message: "",
      });
    } catch (error) {
      console.error("Enquiry submission error:", error);
      setStatus(
        "We could not submit your enquiry. Please try again or call 1800 203 0527."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* LEFT CONTENT */}
        <div className="contact-info">
          <span className="section-label">ENQUIRE NOW</span>

          <h2>
            To know more about our
            <span> products and services</span>
          </h2>

          <p>
            Fill the form below and our team will get back
            to you at the earliest.
          </p>

          {/* PHONE */}
          <div className="contact-phone">
            <span>Call us at</span>

            <a href="tel:18002030527">1800 203 0527</a>
          </div>

          {/* EMAIL */}
          <div className="contact-email">
            <span>Email us at</span>

            <a href="mailto:info@yoursilvergenie.com">
              info@yoursilvergenie.com
            </a>
          </div>

          {/* INSTAGRAM */}
          <div className="contact-social">
            <span>Follow us on Instagram</span>

            <a
              href="https://www.instagram.com/yoursilvergenie/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @yoursilvergenie
            </a>
          </div>
        </div>

        {/* FORM */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            {/* NAME */}
            <div className="form-group">
              <label htmlFor="contact-name">Full Name</label>

              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />
            </div>

            {/* PHONE */}
            <div className="form-group">
              <label htmlFor="contact-phone">Phone Number</label>

              <input
                id="contact-phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                autoComplete="tel"
                required
              />
            </div>

            {/* EMAIL */}
            <div className="form-group">
              <label htmlFor="contact-email">Email ID</label>

              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="Enter your email ID"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </div>

            {/* SERVICE */}
            <div className="form-group">
              <label>I need more Information On</label>

              <div className="checkbox-grid">
                {[
                  "Allied Care",
                  "Corporate Care",
                  "Elder Care",
                  "Home Care",
                  "Emergency Care",
                  "Wellness Services",
                ].map((service) => (
                  <label key={service}>
                    <input
                      type="checkbox"
                      name="services"
                      value={service}
                      checked={formData.services.includes(service)}
                      onChange={handleServiceChange}
                    />

                    <span>{service}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* MESSAGE */}
            <div className="form-group">
              <label htmlFor="contact-message">Message</label>

              <textarea
                id="contact-message"
                name="message"
                rows="4"
                placeholder="Tell us how we can help you..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            {/* STATUS */}
            {status && (
              <p role="status" aria-live="polite">
                {status}
              </p>
            )}

            {/* BUTTON */}
            <button
              type="submit"
              className="contact-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Enquiry"}
              <span>→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;