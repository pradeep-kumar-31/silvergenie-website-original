import React from "react";
import "../styles/RefundPolicy.css";

function RefundPolicy() {
  return (
    <main className="refund-policy-page">
      <header className="refund-policy-header">
        <p className="refund-policy-eyebrow">SilverGenie</p>
        <h1>Refund Policy</h1>
        <p>
          Please review the refund terms applicable to each service category
          below.
        </p>
      </header>

      <div className="refund-policy-content">
        <section className="refund-policy-section">
          <h2>Homecare Refund Policy</h2>
          <ul>
            <li>
              <strong>Minimum Lock-in Period:</strong> 5 days. No refund is
              available within this period.
            </li>
            <li>
              <strong>Exception:</strong> A refund may be considered in case of
              patient demise, purely on a goodwill basis.
            </li>
            <li>
              <strong>Cancellation:</strong> Cancellation is allowed at any
              time.
              <ul>
                <li>No refund if cancelled within the first 5 days.</li>
                <li>
                  After 5 days, a pro-rata refund may be processed, subject to
                  Site Leader approval and a valid reason documented in the
                  customer request form.
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="refund-policy-section">
          <h2>Eldercare Refund Policy</h2>

          <div className="refund-policy-subsection">
            <h3>1. Emergency Genie, Emergency Genie +, and Care Genie</h3>
            <ul>
              <li>No refund policy applies.</li>
              <li>
                Due to the lower ticket size and upfront customer acquisition
                and onboarding costs, refunds are not financially viable.
              </li>
              <li>
                No refunds will be issued in the event of an elder’s demise.
              </li>
              <li>Any exception requires strict management approval.</li>
            </ul>
          </div>

          <div className="refund-policy-subsection">
            <h3>2. Health Genie and Holistic Genie</h3>
            <ul>
              <li>
                Refunds are available only for plans purchased for a full
                one-year duration.
              </li>
              <li>Refunds are calculated on a quarterly pro-rata basis.</li>
              <li>
                A minimum deduction of one full quarter (3 months) applies.
              </li>
              <li>
                <strong>Example:</strong> If enrolled in April 2026 and
                cancelled in May 2026, the first quarter will be charged fully
                and the remaining balance refunded.
              </li>
            </ul>
          </div>
        </section>

        <section className="refund-policy-section">
          <h2>Travel With Care Refund Policy</h2>

          <div className="refund-policy-subsection">
            <h3>1. Non-Refundable Components</h3>
            <ul>
              <li>Flights</li>
              <li>Train tickets</li>
              <li>Visas (if issued)</li>
              <li>Travel insurance premiums</li>
              <li>Hotel bookings with non-refundable clauses</li>
              <li>Peak season / special surcharge costs</li>
            </ul>
          </div>

          <div className="refund-policy-subsection">
            <h3>2. Cancellation Charges</h3>
            <ul>
              <li>
                30+ days prior: 10% of package cost or booking deposit,
                whichever is higher.
              </li>
              <li>15–29 days prior: 30% of package cost.</li>
              <li>7–14 days prior: 50% of package cost.</li>
              <li>Less than 7 days / No Show: 100% (no refund).</li>
            </ul>
          </div>

          <div className="refund-policy-subsection">
            <h3>3. Refund Process</h3>
            <ul>
              <li>
                Refund requests will be processed within 14–21 working days.
              </li>
              <li>
                Refunds after deductions may take longer depending on vendor
                timelines.
              </li>
              <li>
                The amount will be credited through the original payment mode.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}

export default RefundPolicy;
