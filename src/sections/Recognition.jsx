import "../styles/Recognition.css";

const recognitionImages = [
  "Group-1.png",
  "Group-2.png",
  "Group-3.png",
  "Group-4.png",
  "Group-5.png",
  "Group-6.png",
  "Group-7.png",
  "Group-8.png",
  "Group-9.png",
  "Group-10.png",
  "Group-11.jpeg",
  "microsoft-samhita-isb-oic.jpeg",

  // Add your four new PNG files with these names
  "Group-12.png",
  "Group-13.png",
  "Group-14.png",
  "Group-15.png",
];

function Recognition() {
  const baseUrl = import.meta.env.BASE_URL;
  const repeatedImages = [...recognitionImages, ...recognitionImages];

  return (
    <section className="recognition-section">
      <div className="recognition-container">
        <div className="recognition-heading">
          <span>CHERISHED &amp; IMPRINTS</span>

          <h2>Recognitions for Innovations in Senior Care</h2>

          <p>
            Born out of a personal pain point, SilverGenie’s journey has found
            strength through its associations with leading national and
            international organisations, and multilateral bodies.
          </p>
        </div>

        <div
          className="recognition-marquee"
          aria-label="SilverGenie recognitions and partnerships"
        >
          <div className="recognition-track">
            {repeatedImages.map((image, index) => {
              const isDuplicate = index >= recognitionImages.length;
              const originalIndex = index % recognitionImages.length;

              return (
                <div
                  className="recognition-card"
                  key={`${image}-${index}`}
                  aria-hidden={isDuplicate ? "true" : undefined}
                >
                  <img
                    src={`${baseUrl}image/recognition/${image}`}
                    alt={
                      isDuplicate
                        ? ""
                        : `SilverGenie recognition ${originalIndex + 1}`
                    }
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        /* Paragraph: fit in 2 lines on desktop */
        .recognition-section .recognition-heading {
          max-width: none !important;
          width: 100% !important;
        }

        .recognition-section .recognition-heading p {
          box-sizing: border-box;
          width: 100% !important;
          max-width: 1200px !important;
          margin: 0 auto !important;
          font-size: 18px !important;
          line-height: 1.6 !important;
          text-align: center;
          text-wrap: balance;
        }

        .recognition-marquee {
          width: 100%;
          overflow: hidden;
          margin-top: 36px;
        }

        .recognition-track {
          display: flex;
          width: max-content;
          animation: recognition-scroll-left 42s linear infinite;
          will-change: transform;
        }

        .recognition-track:hover {
          animation-play-state: paused;
        }

        .recognition-card {
          box-sizing: border-box;
          width: 190px;
          height: 120px;
          flex: 0 0 190px;
          margin-right: 20px;
          padding: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border: 1px solid #e3ece8;
          border-radius: 16px;
          background: #ffffff;
          box-shadow: 0 8px 24px rgba(24, 58, 53, 0.07);
        }

        .recognition-card img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        @keyframes recognition-scroll-left {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 600px) {
          .recognition-section .recognition-heading p {
            font-size: 15px !important;
            line-height: 1.6 !important;
          }

          .recognition-marquee {
            margin-top: 26px;
          }

          .recognition-track {
            animation-duration: 34s;
          }

          .recognition-card {
            width: 155px;
            height: 100px;
            flex-basis: 155px;
            margin-right: 14px;
            padding: 12px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .recognition-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

export default Recognition;
