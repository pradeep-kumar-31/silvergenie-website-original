import "../styles/ElderCare.css";

function ElderCare() {
  const homeCareServices = [
    "Personal Care & Hygiene",
    "Medical Care & Monitoring",
    "Mobility Support & Physical Therapy",
    "Cognitive Support",
    "Nutrition & Diet Management",
    "Emotional & Psychological Support",
    "Preventive Care",
    "Comprehensive Health Management",
  ];

  const nursingServices = [
    "Comprehensive Wound Care Management",
    "Expert Ryle's Tube and Catheter Care",
    "Range of Motion Exercises and Mobility Support",
    "Emergency Medication Management",
    "Emotional Support and Companionship",
    "Regular Vital Signs Monitoring",
    "Patient Repositioning and Fall Prevention",
    "Expert Nursing Interventions",
  ];

  const dementiaServices = [
    "Specialized Memory Care",
    "Safety Monitoring",
    "Cognitive Stimulation Activities",
    "Behavioral Management",
    "Emotional Wellness",
    "Nutritional Support",
    "Medication Management",
    "Family Education and Support",
  ];

  const atHomeServices = [
    "Doctor Consultation At Home",
    "Doctor Consultation On Call",
    "Diagnostics Sample Collection",
    "X-ray, ECG, Vitals Monitoring",
    "Physiotherapist",
    "Dieticians",
    "Psychological Counselling",
    "Emergency Support through Ambulance Network",
    "Consumables Supply",
    "Dedicated Care Manager",
  ];

  const subscriptionPlans = [
    {
      name: "HOLISTIC GENIE CARE",
      price: "Rs. 8000",
      text: "Per person per month, billed Semi-Annually",
      features: [
        "24/7 Emergency Support",
        "Coordination with Ambulance* (SILVERGENIE ALLOCATED - ALS/BLS)",
        "Ambulance Charges Covered (once in 6 months, twice in 12 months)",
        "Personal Health Record (PHR)",
        "Care Executive Visit during Emergency (Max. 4 Hours)",
        "Care Coach Telephonic Follow-up (alternate days)",
        "Monthly at Home Well-Being Visit (2 times)",
        "Monthly Doctor's Home Visits (once)",
        "Full Body Checkup (excluding radiology) (once per quarter)",
        "Nutritionist or Dietician Call (once a month)",
        "Home Safety Audit",
        "15-20% Discount on Allied Care Services",
      ],
    },
    {
      name: "HEALTH GENIE",
      price: "Rs. 4000",
      text: "Per person per month, billed Semi-Annually",
      features: [
        "24/7 Emergency Support",
        "Coordination with Ambulance* (SILVERGENIE ALLOCATED - ALS/BLS)",
        "Ambulance Charges Covered (once in 6 months, twice in 12 months)",
        "Personal Health Record (PHR)",
        "Care Executive Visit during Emergency (Max. 4 Hours)",
        "Care Coach Telephonic Follow-up (Twice a week)",
        "Monthly at Home Well-Being Visit",
        "Quarterly Doctor's Teleconsultation & Home Visit",
        "Full Body Checkup (excluding radiology) (once in 6 months, twice in 12 months)",
        "10-15% Discount on Allied Care Services",
      ],
    },
    {
      name: "CARE GENIE",
      price: "Rs. 8000",
      text: "Per person per month, billed Semi-Annually",
      features: [
        "Personal Health Record (PHR)",
        "Care Coach Telephonic Follow-up (Weekly)",
        "Monthly at Home Well-Being Visit (2 Hours/Month/Person Concierge)*",
        "Monthly Doctor's Teleconsultation (once)",
        "5-10% Discount on Allied Care Services",
      ],
    },
    {
      name: "EMERGENCY GENIE PLUS",
      price: "Rs. 800",
      text: "Per person per month, billed Semi-Annually",
      features: [
        "24/7 Emergency Support",
        "Coordination with Ambulance* (SILVERGENIE ALLOCATED - ALS/BLS)",
        "Ambulance Charges Covered (once in 6 months, twice in 12 months)",
        "Personal Health Record (PHR)",
        "Care Executive during Emergency (Max 4 Hours)",
        "Care Coach Telephonic Follow-up (twice a week)",
        "Monthly at Home Well-Being Visit",
        "Complimentary Doctor Teleconsultation (3 in 6 Months & 6 in 12 Months)",
        "5-10% Discount on Allied Care Services",
      ],
    },
    {
      name: "EMERGENCY GENIE",
      price: "Rs. 800",
      text: "Per person per month, billed Semi-Annually",
      features: [
        "24/7 Emergency Support",
        "Coordination with Ambulance* (SILVERGENIE ALLOCATED - ALS/BLS)",
        "Ambulance Charges Covered (once in 6 months, twice in 12 months)",
        "Personal Health Record (PHR)",
        "Care Executive Visits during Emergency (Max 4 Hours)",
        "Care Coach Telephonic Follow-up (fortnightly)",
      ],
    },
  ];

  const otherServices = [
    "Home Care",
    "Emergency & Wellness",
    "Diagnostics",
    "Doctor Teleconsultation",
    "Physiotherapy at home",
    "Tele-fitness",
    "Vaccinations at Home",
    "Home ICU Setup",
  ];

  const whyChoose = [
    {
      title: "24/7 Availability for Emergencies",
      text: "Seamless emergency preparedness, alert systems and management.",
    },
    {
      title: "Swift 24-Hour Substitute",
      text: "You get 24-hour substitute for homecare services.",
    },
    {
      title: "Qualified & Trained Staff",
      text: "GNM or BSc nurses and GDA certified attendants.",
    },
    {
      title: "Gender-Inclusive Care",
      text: "Equal care for all, without bias.",
    },
    {
      title: "Unwavering Reliability",
      text: "We adhere to international clinical protocols for top-notch care.",
    },
    {
      title: "Family-Like Care",
      text: "We treat your loved ones as our own.",
    },
  ];

  const faqs = [
    {
      question: "What types of services does SilverGenie offer?",
      answer:
        "We offer a comprehensive range of at-home services, including emergency and wellness subscription plans, attendants, nurses, home ICU setup, diagnostics, vaccination and more. Our services are tailored to meet the unique needs of each individual.",
    },
    {
      question:
        "How quickly can I arrange your services for my family member?",
      answer:
        "SilverGenie is committed to providing rapid assistance. We can arrange 24x7 Caregivers within a day, ensuring that your loved ones receive the care they need promptly.",
    },
    {
      question: "Are SilverGenie's caregivers trained and qualified?",
      answer:
        "Our caregivers are not only highly trained but also compassionate and qualified in their respective roles. They undergo continuous training to ensure they provide the best care possible.",
    },
    {
      question: "Do you offer gender-inclusive care services?",
      answer:
        "SilverGenie embraces diversity and inclusivity. We provide care and support that is not bound by gender, ensuring that all individuals receive the assistance they require.",
    },
    {
      question: "Can I customize the care plan for my family member?",
      answer:
        "Absolutely. SilverGenie is dedicated to tailoring care plans to meet the unique needs of your family members. We work closely with you to create a personalized care plan addressing your requirements.",
    },
    {
      question: "How can I get started with SilverGenie's services?",
      answer:
        "Initiating care with SilverGenie is simple. Contact us, and we'll guide you through the process, discussing your family's needs and preferences. We aim to ensure you receive the support and care your loved ones deserve.",
    },
  ];

  return (
    <div className="elder-care-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="elder-care-hero">

        <div className="elder-care-hero-content">

          <span className="elder-care-label">
            YOUR NEW LIFE BEGINS WITH US
          </span>

          <h1>
            Comprehensive
            <span> Senior Care Solutions</span>
          </h1>

          <p>
            SilverGenie provides advanced healthcare assistance
            and personalized care for seniors.
          </p>

          <div className="elder-care-stats">

            <div>
              <strong>100%</strong>
              <span>Peace of Mind</span>
            </div>

            <div>
              <strong>20+</strong>
              <span>Lives Saved</span>
            </div>

            <div>
              <strong>4.8/5</strong>
              <span>Star Rating</span>
            </div>

            <div>
              <strong>1000+</strong>
              <span>Registered Customers</span>
            </div>

          </div>

          <a
            href="/silvergenie-website-original/#contact"
            className="elder-care-primary-btn"
          >
            Request a Callback →
          </a>

        </div>

        <div className="elder-care-hero-image">

          <img
            src={`${import.meta.env.BASE_URL}image/services/elder-care.jpg`}
            alt="SilverGenie Elder Care"
          />

        </div>

      </section>


      {/* =====================================================
          LOCATION
      ===================================================== */}

      <section className="elder-care-location">

        <span>AVAILABLE IN</span>

        <p>
          Delhi, Gurugram, Noida & Kolkata Metropolitan Area
        </p>

      </section>


      {/* =====================================================
          SPECIALIZED CARE
      ===================================================== */}

      <section className="elder-care-specialized">

        <div className="elder-care-section-heading">

          <span>
            SPECIALIZED ELDER CARE AND SUPPORT
          </span>

          <h2>
            Select a Service
            <br />
            <em>to Get Started.</em>
          </h2>

        </div>


        <div className="elder-care-service-grid">

          {/* HOME ATTENDANT */}

          <article className="elder-care-service-card">

            <span className="elder-care-service-label">
              COMPASSIONATE COMPANIONSHIP
            </span>

            <h3>
              Certified Home Attendant Services for Seniors
            </h3>

            <strong className="elder-care-price">
              Charges from ₹ 999-1299/day*
            </strong>

            <span className="elder-care-duty">
              24/7 Duty Available
            </span>

            <ul>
              {homeCareServices.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <small>
              *Prices may vary by: Medical Condition, City,
              Customizations (if any)
            </small>

          </article>


          {/* NURSING */}

          <article className="elder-care-service-card">

            <span className="elder-care-service-label">
              HEALING HANDS
            </span>

            <h3>
              Licensed Home Care Nurses
            </h3>

            <strong className="elder-care-price">
              Nursing Care Charges start at ₹ 1699 /day
            </strong>

            <strong className="elder-care-price">
              ICU Nurse Care Charges start at ₹ 1999 /day
            </strong>

            <span className="elder-care-duty">
              24/7 Duty Available
            </span>

            <ul>
              {nursingServices.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <small>
              *Prices may vary by: Medical Condition, City,
              Customizations (if any)
            </small>

          </article>


          {/* DEMENTIA */}

          <article className="elder-care-service-card">

            <span className="elder-care-service-label">
              GENTLE GUIDANCE
            </span>

            <h3>
              Expert Care for Alzheimer's and Dementia Patients
            </h3>

            <ul>
              {dementiaServices.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

          </article>


          {/* HOLISTIC / AT HOME */}

          <article className="elder-care-service-card">

            <span className="elder-care-service-label">
              COMFORTING CARE
            </span>

            <h3>
              Dedicated Support for Effective Recovery At Home
            </h3>

            <h4>
              HOLISTIC GENIE CARE
            </h4>

            <p>
              Personalized support designed around ongoing
              care and wellness needs.
            </p>

          </article>

        </div>

      </section>


      {/* =====================================================
          AT HOME SERVICES
      ===================================================== */}

      <section className="elder-care-home-services">

        <div className="elder-care-home-heading">

          <span>AT HOME SERVICES</span>

          <h2>
            Care and support,
            <br />
            <em>at home.</em>
          </h2>

        </div>

        <div className="elder-care-home-list">

          {atHomeServices.map((service, index) => (
            <div
              className="elder-care-home-item"
              key={service}
            >
              <strong>
                {String(index + 1).padStart(2, "0")}
              </strong>

              <span>{service}</span>
            </div>
          ))}

        </div>

      </section>


      {/* =====================================================
          SUBSCRIPTION PACKAGES
      ===================================================== */}

      <section className="elder-care-plans">

        <div className="elder-care-section-heading">

          <span>
            24/7 EMERGENCY & WELLNESS
          </span>

          <h2>
            Subscription
            <br />
            <em>Packages.</em>
          </h2>

        </div>


        <div className="elder-care-plan-grid">

          {subscriptionPlans.map((plan) => (

            <article
              className="elder-care-plan-card"
              key={plan.name}
            >

              <span className="elder-care-plan-name">
                {plan.name}
              </span>

              <h3>
                {plan.price}
              </h3>

              <p className="elder-care-plan-billing">
                {plan.text}
              </p>

              <ul>

                {plan.features.map((feature) => (
                  <li key={feature}>
                    {feature}
                  </li>
                ))}

              </ul>

              <a
                href="/silvergenie-website-original/#contact"
                className="elder-care-plan-btn"
              >
                Request a Callback
              </a>

            </article>

          ))}

        </div>

        <p className="elder-care-plan-note">
          * Ambulance charges on Actuals
        </p>

      </section>


      {/* =====================================================
          OTHER SERVICES
      ===================================================== */}

      <section className="elder-care-other">

        <div className="elder-care-section-heading">

          <span>
            OTHER SERVICES FROM SILVERGENIE
          </span>

          <h2>
            More ways we
            <br />
            <em>can help.</em>
          </h2>

        </div>


        <div className="elder-care-other-grid">

          {otherServices.map((service, index) => (

            <article
              className="elder-care-other-card"
              key={service}
            >

              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{service}</h3>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          WHY CHOOSE SILVERGENIE
      ===================================================== */}

      <section className="elder-care-why">

        <div className="elder-care-section-heading">

          <span>
            WHY CHOOSE SILVERGENIE
          </span>

          <h2>
            Care you can
            <br />
            <em>rely on.</em>
          </h2>

        </div>


        <div className="elder-care-why-grid">

          {whyChoose.map((item, index) => (

            <article
              key={item.title}
              className="elder-care-why-card"
            >

              <strong>
                {String(index + 1).padStart(2, "0")}
              </strong>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="elder-care-cta">

        <span>
          PERSONALIZED CARE FOR THOSE, WHO CARED FOR US
        </span>

        <h2>
          Your New Life
          <br />
          <em>Begins With Us.</em>
        </h2>

        <p>
          Schedule a consultation today and discover how
          SilverGenie can make a difference in your loved
          one's life.
        </p>

        <a
          href="/silvergenie-website-original/#contact"
          className="elder-care-cta-btn"
        >
          Book a Free Consultation
        </a>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="elder-care-faq">

        <div className="elder-care-section-heading">

          <span>
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2>
            Frequently Asked
            <br />
            <em>Questions.</em>
          </h2>

        </div>


        <div className="elder-care-faq-list">

          {faqs.map((faq, index) => (

            <details
              className="elder-care-faq-item"
              key={faq.question}
            >

              <summary>
                <span>
                  {index + 1}. {faq.question}
                </span>

                <strong>+</strong>
              </summary>

              <p>
                {faq.answer}
              </p>

            </details>

          ))}

        </div>

      </section>


      {/* =====================================================
          FINAL MESSAGE
      ===================================================== */}

      <section className="elder-care-final">

        <h2>
          Supporting Your Loved Ones
          <br />
          in Their Golden Years
        </h2>

        <p>
          In a fast-paced world, life can get busy, and our
          parents need support and care during these precious
          years. That’s where SilverGenie steps in, offering a
          range of services tailored to your family’s needs.
        </p>

        <p>
          We understand the importance of providing
          comprehensive care through a team of highly skilled
          nurses, critical care specialists, and experienced
          attendants.
        </p>

      </section>

    </div>
  );
}

export default ElderCare;