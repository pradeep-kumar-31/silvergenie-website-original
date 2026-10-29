import { useEffect, useRef } from "react";
import "../styles/About.css";

const testimonials = [
  {
    quote:
      "Thanks to team SilverGenie for their timely support provided to my father in India at the time of emergency. They not only provided personal assistance to him during the treatment but also while recovering.",
    name: "Mr. & Mrs. Sarkar",
    location: "Vancouver, Canada",
    service: "Emergency Genie",
  },
  {
    quote:
      "SilverGenie is a senior care concierge service in India. They had supported my brother who has an acute medical condition. We were particularly comforted with the timely emergency care which my brother received from SilverGenie which was just in time. We are very grateful to the care service and professionalism that SilverGenie provided.",
    name: "Prof. Nandini Mashcharak",
    location: "Bay Area, California, USA",
    service: "Holistic Genie",
  },
  {
    quote:
      "I thank the SilverGenie Team for all the co-ordination & support provided to my mother during her Covid infection. I appreciate their work and great ability.",
    name: "Mr. Ashish Akhouri",
    location: "Sales Head of an MNC & Son of Covid recovered patron, New Delhi",
    service: "Care Genie",
  },
  {
    quote:
      "My father needed to send an employee to Chennai, and SilverGenie proved incredibly supportive throughout the process. They assisted with scheduling appointments, facilitating the patient's airport pickup, and escorting them to the hospital. We're grateful for SilverGenie's exceptional service.",
    name: "Prof. Nandini Mashcharak",
    location: "Bay Area, California, USA",
    service: "Emergency Genie",
  },
  {
    quote:
      "I am grateful to SilverGenie Concierge for giving me complete Remote Support for taking care of my husband's medical needs when he was infected with Covid. The team gave us care & support during our troubled times.",
    name: "Ms. Antara Chowdhury",
    location: "Renowned Singer & Spouse of Covid recovered patron, Kolkata",
  },
  {
    quote:
      "We were lucky to come across SilverGenie. The team provided an attendant who fulfilled his duties diligently thus making our daily lives less stressful. SilverGenie is doing a great job. We wish them all the best in their endeavor and aid families. I highly recommend their services.",
    name: "Mr. K.K. Khosla",
    location: "Vasant Vihar, Delhi",
    service: "Attendant",
  },
  {
    quote:
      "We are immensely grateful for the exceptional home care attendant services provided for my mother. The attentiveness, professionalism, and genuine compassion displayed by the caregiver have greatly enhanced her daily life.",
    name: "Patron details available on request",
    location: "New Delhi",
    service: "Nurse",
  },
  {
    quote:
      "I am thankful to the entire team of SilverGenie for ensuring excellent support and a comfortable stay through excellent resource like Gunjan for my ailing mother in her last few days at home. Gunjan handled her like her own mother and became part of our family within hours. I'll refer your name within my network. God bless Gunjan and the SilverGenie team.",
    name: "Patron details available on request",
    location: "New Delhi",
    service: "Critical Care Nurse",
  },
];

const testimonialVideos = [
  { id: "DsnKclYfVQU", title: "SilverGenie Video Testimonial 1" },
  { id: "AhUHhN1r1X8", title: "SilverGenie Video Testimonial 2" },
  { id: "5Mbh69y6S74", title: "SilverGenie Video Testimonial 3" },
  { id: "CikMryMZOUw", title: "SilverGenie Video Testimonial 4" },
];

function About() {
  const testimonialTrackRef = useRef(null);

  useEffect(() => {
    const track = testimonialTrackRef.current;
    if (!track) return undefined;

    const getStep = () => {
      const card = track.querySelector(".testimonial-card");
      if (!card) return 0;
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      return card.getBoundingClientRect().width + gap;
    };

    const timer = window.setInterval(() => {
      const step = getStep();
      const maxScroll = track.scrollWidth - track.clientWidth;
      if (!step || maxScroll <= 0) return;

      if (track.scrollLeft + step >= maxScroll - 4) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        track.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  const moveTestimonials = (direction) => {
    const track = testimonialTrackRef.current;
    if (!track) return;

    const card = track.querySelector(".testimonial-card");
    if (!card) return;

    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const step = card.getBoundingClientRect().width + gap;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const nextPosition = track.scrollLeft + direction * step;

    if (nextPosition < 0) {
      track.scrollTo({ left: maxScroll, behavior: "smooth" });
    } else if (nextPosition > maxScroll) {
      track.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      track.scrollTo({ left: nextPosition, behavior: "smooth" });
    }
  };

  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-container">
          <span className="section-label">ABOUT SILVERGENIE</span>
          <h1>
            Personalized Care
            <span> For Those Who Care For Us</span>
          </h1>
          <p>Changing the healthcare landscape for the elderly in India</p>
        </div>
      </section>

      <section className="about-intro">
        <div className="about-container">
          <span className="section-label">ABOUT SILVERGENIE</span>
          <h2>A New Era in Elder Care</h2>
          <p>
            SilverGenie™ is a full-stack, broad-spectrum smart aging startup
            offering advanced healthcare assistance for seniors.
          </p>
          <p>
            As a gender-inclusive service provider, we are reshaping the elderly
            healthcare landscape in India and positioning ourselves as a leading
            player in the care economy.
          </p>
        </div>
      </section>

      <section className="mission-vision">
        <div className="about-container mission-grid">
          <div className="mission-card">
            <span className="section-label">MISSION</span>
            <h2>Our Mission</h2>
            <p>
              To empower and enable senior citizens to lead a full, healthy and
              independent life. We help them navigate the Indian healthcare
              eco-system with ease and provide continuous support to improve
              their health outcomes.
            </p>
          </div>
          <div className="mission-card">
            <span className="section-label">VISION</span>
            <h2>Our Vision</h2>
            <p>
              To become a leader in elder care. We bring consumer first
              technology, advanced clinical services with a compassionate touch
              on a single platform.
            </p>
            <p>
              We will always go beyond the call of duty to deliver exceptional
              concierge services to improve the lives of our seniors.
            </p>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="about-container">
          <div className="values-heading">
            <span className="section-label">OUR VALUES</span>
            <h2>
              Quality. Trust.
              <span> Transparency.</span>
            </h2>
            <p>
              At SilverGenie, everything we do reflects the guiding principles
              of quality, trust and transparency.
            </p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <h3>Quality</h3>
              <p>
                Our primary aim is well-being of our seniors, and we'll always
                go the extra mile to keep our promise of wellness for senior
                citizens.
              </p>
            </div>
            <div className="value-card">
              <h3>Trust</h3>
              <p>
                At SilverGenie we wish to create a world for elders where they
                feel loved and nurtured. We wish to forge a sense of family
                wherein there is trust and accountability.
              </p>
            </div>
            <div className="value-card">
              <h3>Transparency</h3>
              <p>
                SilverGenie strives to be transparent and make long-lasting and
                meaningful relationships to create reliable associations with
                our clients, partners, stakeholders, and vendors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial cards: auto-slide one card at a time, right to left */}
      <section className="about-testimonials">
        <div className="about-container">
          <div className="testimonials-heading">
            <span className="section-label">WHAT PEOPLE SAY</span>
            <h2>Our Testimonials</h2>
            <p>
              Hear from families who have experienced SilverGenie’s care and
              support.
            </p>
          </div>

          <div className="testimonial-carousel-wrap">
            <button
              className="testimonial-arrow testimonial-arrow-prev"
              type="button"
              onClick={() => moveTestimonials(-1)}
              aria-label="Show previous testimonials"
            >
              &#8592;
            </button>

            <div
              className="testimonials-grid"
              ref={testimonialTrackRef}
              role="region"
              aria-label="SilverGenie customer testimonials"
            >
              {testimonials.map((testimonial, index) => (
                <article
                  className="testimonial-card"
                  key={`${testimonial.name}-${index}`}
                >
                  <span className="testimonial-quote-mark" aria-hidden="true">
                    “
                  </span>
                  <blockquote>{testimonial.quote}</blockquote>
                  <div className="testimonial-author">
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.location}</p>
                    {testimonial.service && (
                      <span className="testimonial-service">
                        Service: {testimonial.service}
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>

            <button
              className="testimonial-arrow testimonial-arrow-next"
              type="button"
              onClick={() => moveTestimonials(1)}
              aria-label="Show next testimonials"
            >
              &#8594;
            </button>
          </div>
        </div>
      </section>

      <section className="about-video-testimonials">
        <div className="about-container">
          <div className="testimonials-heading">
            <span className="section-label">
              REAL STORIES, REAL EXPERIENCES
            </span>
            <h2>Our Video Testimonials</h2>
            <p>Watch families share their experiences with SilverGenie.</p>
          </div>
          <div className="testimonial-videos-grid">
            {testimonialVideos.map((video) => (
              <div className="testimonial-video-card" key={video.id}>
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
