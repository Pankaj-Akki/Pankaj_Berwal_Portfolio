import React, { useState, useEffect } from "react";

export default function WelcomePopup({ open, onClose }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const resetMessages = () => {
    setStatusMessage("");
    setStatusType("");
  };

  const validate = () => {
    if (!fullName.trim() || !email.trim()) {
      setStatusType("error");
      setStatusMessage("Please fill Name and Email.");
      return false;
    }
    if (!purpose) {
      setStatusType("error");
      setStatusMessage("Please select a purpose.");
      return false;
    }
    if (purpose === "Other" && !description.trim()) {
      setStatusType("error");
      setStatusMessage("Please describe your purpose.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    resetMessages();

    if (!validate()) return;

    setLoading(true);

    const payload = {
      fullName: fullName.trim(),
      email: email.trim(),
      purpose,
      description: description.trim() || "",
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwsHsQh87mBGWjOn_1B5JLHLCYJTNsjHn3ZU5qdS9uS55-yYgaSfLCd63W-INnZqU7S/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      setStatusType("success");
      setStatusMessage("✔️ Submitted successfully!");
      setSubmitted(true);

      setFullName("");
      setEmail("");
      setPurpose("");
      setDescription("");

      setTimeout(() => {
        setStatusMessage("");
        setStatusType("");
        setSubmitted(false);
        onClose && onClose();
      }, 1400);
    } catch (err) {
      console.error("Submit error:", err);
      setStatusType("error");
      setStatusMessage("❌ Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <>
      {/* ====================== FIXED + MERGED GLASS CSS ====================== */}
      <style>{`
        .popup-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.56);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

        .popup-box {
          width: 92%;
          max-width: 500px;
          padding: 22px;
          position: relative;
          border-radius: 12px;

          -webkit-backdrop-filter: blur(12px)!important;
          backdrop-filter: blur(12px)!important;

          background: linear-gradient(135deg, #ffffff0d, #fff0)!important;
          border: 1px solid rgba(255, 255, 255, .18)!important;
          box-shadow: 0 8px 25px #00000040!important;
        }

        .popup-box h2 {
          margin: 0 0 12px 0;
          text-align: center;
          font-size: 20px;
          font-weight: 400!important;
          color: #fff!important;
        }

        .inline-msg {
          text-align: center;
          margin-bottom: 10px;
          font-weight: 400!important;
        }

        .inline-msg.success { color: #9cee69!important; }
        .inline-msg.error { color: #9cee69!important; }

        .popup-box input,
        .popup-box select,
        .popup-box textarea {
          width: 100%;
          padding: 10px 12px;
          margin: 8px 0 12px 0;
          background: rgba(255,255,255,0.15)!important;
          border: 1px solid rgba(255,255,255,0.35)!important;
          border-radius: 8px!important;
          color: #fff!important;
          outline: none!important;
        }

        .popup-box input::placeholder,
        .popup-box textarea::placeholder {
          color: #ffffff8a!important;
        }

        .popup-box select option {
          background: #0f0f0f!important;
          color: #fff!important;
        }

        .popup-box textarea { 
          min-height: 90px; 
          resize: vertical; 
        }

     .submit-btn {
    width: 100%;
    padding: 12px;
    background: #9dee6a !important;
    color: #000000;
    border: none;
    border-style: solid!important;
    box-shadow: 4px 3px #fff!important;
    font-weight: 400!important;
    cursor: pointer;
}

        .submit-btn[disabled] { opacity: 0.6; cursor: not-allowed; }

        .close-btn {
          position: absolute;
          top: 10px;
          right: 12px;
          font-size: 22px;
          background: transparent;
          border: none;
          cursor: pointer;
          color: #fff!important;
        }
      `}</style>

      {/* ====================== POPUP UI ====================== */}
      <div className="popup-overlay" role="dialog" aria-modal="true">
        <div className="popup-box">
          <button
            className="close-btn"
            onClick={() => {
              resetMessages();
              onClose && onClose();
            }}
          >
            ×
          </button>

          <h2>Connect With Me</h2>

          {statusMessage && (
            <div className={`inline-msg ${statusType === "success" ? "success" : "error"}`}>
              {statusMessage}
            </div>
          )}

          {!submitted ? (
            <form onSubmit={handleSubmit} noValidate>
              <input
                name="fullName"
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />

              <input
                name="email"
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <select
                name="purpose"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                required
              >
                <option value="">Select Purpose</option>
                <option value="Hiring">Hiring</option>
                <option value="Freelance Work">Freelance Work</option>
                <option value="Other">Other</option>
              </select>

              {purpose === "Other" && (
                <textarea
                  name="description"
                  placeholder="Describe your purpose"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              )}

              <button className="submit-btn" type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          ) : (
            <div style={{ textAlign: "center", padding: "6px 0", color: "#0a8a2b", fontWeight: 600 }}>
              Thanks — closing...
            </div>
          )}
        </div>
      </div>
    </>
  );
}
