import { useState } from "react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwjAHceJb2lyBk0ecOJLUKP74Zfl5OVQS6_DW3fC3yorQsY_tHU3c1o5PdjwK9DJ_hTyA/exec";

const SERVICES = ["Health Services", "Beyond Health", "Resources"];

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
    setFormData((previous) => ({ ...previous, [name]: value }));
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

    const payload = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      services: formData.services.join(", "),
      sourcePage: document.title || window.location.pathname,
      sourceUrl: window.location.href,
      tourName: "",
      tourUrl: "",
      message: formData.message.trim(),
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });

      setStatus(
        "Your enquiry has been submitted. If you do not hear from us, please contact our team.",
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
        "We could not submit your enquiry. Please try again or call 1800 203 0527.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <span className="section-label">ENQUIRE NOW</span>
          <h2>
            Know More About Our
            <span> Products and Services</span>
          </h2>
          <p>Want to know us better? Get in touch now!</p>

          <p className="contact-cities">
            Agartala | Delhi | Faridabad | Gurugram | Kolkata | Noida
          </p>

          <div className="contact-phone">
            <span>Call us at</span>
            <div className="contact-numbers">
              <p>
                <a href="tel:+17789033965">+1 (778) 903-3965</a>
                <em>(USA/Canada)</em>
              </p>
              <p>
                <a href="tel:18002030527">1800 203 0527</a>,{" "}
                <a href="tel:+919810545932">+91-9810545932</a>
                <em>(India)</em>
              </p>
            </div>
          </div>

          <div className="contact-email">
            <span>Email us at</span>
            <a href="mailto:ceo.office@yoursilvergenie.com">
              ceo.office@yoursilvergenie.com
            </a>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="contact-name">
                Full Name<span aria-hidden="true">*</span>
              </label>
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

            <div className="form-group">
              <label htmlFor="contact-phone">
                Phone Number<span aria-hidden="true">*</span>
              </label>
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

            <div className="form-group">
              <label htmlFor="contact-email">
                Email ID<span aria-hidden="true">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="Enter your email ID"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </div>

            <fieldset className="form-group service-fieldset">
              <legend>I need more information on</legend>
              <div className="checkbox-grid">
                {SERVICES.map((service) => (
                  <label className="service-option" key={service}>
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
            </fieldset>

            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                placeholder="How can we help you? Please tell us"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            {status && (
              <p className="form-status" role="status" aria-live="polite">
                {status}
              </p>
            )}

            <button
              type="submit"
              className="contact-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Enquiry"}
              <span aria-hidden="true">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
