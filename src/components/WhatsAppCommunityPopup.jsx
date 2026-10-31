import { useEffect, useState } from "react";
import "../styles/WhatsAppCommunityPopup.css";

const COMMUNITY_LINK =
  "https://chat.whatsapp.com/E4CRF35jt8yEEl61ljNjUU?mode=wwt";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path
        fill="currentColor"
        d="M16 2.7A13.2 13.2 0 0 0 4.6 22.5L3 29l6.7-1.7A13.2 13.2 0 1 0 16 2.7Zm0 24a10.8 10.8 0 0 1-5.5-1.5l-.4-.2-4 .9 1-3.9-.3-.4A10.8 10.8 0 1 1 16 26.7Zm5.9-8.1c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6.3-.5c.1-.2 0-.4 0-.6l-1-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1.1-1.1 2.6s1.1 3 1.3 3.2c.1.2 2.2 3.4 5.3 4.7.7.3 1.3.5 1.8.6.7.2 1.4.2 1.9.1.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.3.2-1.5-.1-.1-.3-.2-.6-.4Z"
      />
    </svg>
  );
}

export default function WhatsAppCommunityPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("sg-community-popup-dismissed") === "true") {
      return undefined;
    }

    const timer = window.setTimeout(() => setIsOpen(true), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closePopup();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("sg-community-popup-open");

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("sg-community-popup-open");
    };
  }, [isOpen]);

  function closePopup() {
    sessionStorage.setItem("sg-community-popup-dismissed", "true");
    setIsOpen(false);
  }

  if (!isOpen) return null;

  return (
    <div
      className="sg-community-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closePopup();
      }}
    >
      <section
        className="sg-community-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="sg-community-title"
      >
        <button
          className="sg-community-close"
          type="button"
          onClick={closePopup}
          aria-label="Close popup"
        >
          <span aria-hidden="true">×</span>
        </button>

        <div className="sg-community-brand">
          <span className="sg-community-icon">
            <WhatsAppIcon />
          </span>
          <span className="sg-community-brand-name">SILVERGENIE</span>
        </div>

        <span className="sg-community-eyebrow">TRAVEL WITH CARE</span>

        <h2 id="sg-community-title">
          Join our
          <br />
          <span>WhatsApp Community</span>
        </h2>

        <p>
          Senior travel updates, inspiring journeys, and community news—all in
          one place.
        </p>

        <a
          className="sg-community-join"
          href={COMMUNITY_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closePopup}
        >
          <WhatsAppIcon />
          <span>Join the Community</span>
          <span className="sg-community-arrow" aria-hidden="true">
            →
          </span>
        </a>

        <small>Updates from SilverGenie. Join whenever you’re ready.</small>
      </section>
    </div>
  );
}
