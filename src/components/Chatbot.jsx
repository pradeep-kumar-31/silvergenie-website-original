import { useState } from "react";
import SilverGenieLogo from "../assets/SilverGenieLogo.png";
import "./Chatbot.css";

function Chatbot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Chatbot Button */}
      {!open && (
        <div className="chatbot-launcher">

          <div className="chatbot-hint">
            Need help? Chat with us
          </div>

          <button
            className="chatbot-button"
            onClick={() => setOpen(true)}
            aria-label="Open SilverGenie Chatbot"
          >
            <span className="chatbot-pulse"></span>

            <img
              src={SilverGenieLogo}
              alt="SilverGenie"
            />

            <span className="chatbot-icon">✦</span>
          </button>

        </div>
      )}

      {/* Chat Window */}
      {open && (
        <div className="chatbot-window">

          {/* Header */}
          <div className="chatbot-header">

            <div className="chatbot-brand">

              <div className="chatbot-logo-box">
                <img
                  src={SilverGenieLogo}
                  alt="SilverGenie"
                />
              </div>

              <div>
                <strong>SilverGenie</strong>
                <span>Healthcare Assistant</span>
              </div>

            </div>

            <button
              className="chatbot-close"
              onClick={() => setOpen(false)}
              aria-label="Close chatbot"
            >
              ×
            </button>

          </div>

          {/* n8n Chat */}
          <iframe
            src="https://silvergenie.app.n8n.cloud/webhook/fc6a21f1-339d-4f79-8739-052de4ed4939/chat"
            title="SilverGenie Chatbot"
            className="chatbot-frame"
          />

        </div>
      )}
    </>
  );
}

export default Chatbot;