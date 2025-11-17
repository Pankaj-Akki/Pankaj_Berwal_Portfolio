import React, { useState } from "react";

export default function WelcomePopup({ open, onClose }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState("Hiring");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); 
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    setMessage("");

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbwsHsQh87mBGWjOn_1B5JLHLCYJTNsjHn3ZU5qdS9uS55-yYgaSfLCd63W-INnZqU7S/exec",
        {
          method: "POST",
          body: JSON.stringify({
            fullName,
            email,
            purpose,
          }),
        }
      );

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setMessage("✔️ Submitted successfully!");

        setTimeout(() => {
          onClose();
        }, 1200);

        setFullName("");
        setEmail("");
        setPurpose("Hiring");
      } else {
        setStatus("error");
        setMessage("❌ Something went wrong. Please try again.");
      }

    } catch (error) {
      setStatus("error");
      setMessage("❌ Network error — please try again.");
    }

    setLoading(false);
  };

  if (!open) return null;

  return (
    <>
      {/* ⭐ POPUP CSS HERE — inside component */}
      <style>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width: 100vw;
          background: rgba(0,0,0,0.55);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .popup-box {
          background: #fff;
          width: 90%;
          max-width: 420px;
          padding: 28px;
          border-radius: 14px;
          position: relative;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          animation: slideUp 0.28s ease;
        }

        @keyframes slideUp {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .popup-box h2 {
          text-align: center;
          margin-bottom: 18px;
          font-size: 22px;
          font-weight: 600;
        }

        .popup-box input,
        .popup-box select {
          width: 100%;
          padding: 12px;
          margin-bottom: 15px;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 15px;
        }

        .popup-box button[type="submit"] {
          width: 100%;
          padding: 12px;
          background: #164DB3;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 17px;
          cursor: pointer;
          transition: 0.25s;
        }

        .popup-box button[type="submit"]:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .popup-box button[type="submit"]:hover:not(:disabled) {
          background: #0f3f8b;
        }

        .close-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          background: none;
          border: none;
          font-size: 26px;
          cursor: pointer;
          color: #555;
        }
      `}</style>

      {/* ⭐ POPUP HTML */}
      <div className="popup-overlay">
        <div className="popup-box">
          <button className="close-btn" onClick={onClose}>×</button>

          <h2>Welcome 👋</h2>

          {/* ⭐ Inline success/error message */}
          {message && (
            <p
              style={{
                color: status === "success" ? "green" : "red",
                textAlign: "center",
                marginBottom: "10px",
                fontSize: "15px",
                fontWeight: "500",
              }}
            >
              {message}
            </p>
          )}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <select
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
            >
              <option>Hiring</option>
              <option>Freelance Project</option>
              <option>Collaboration</option>
              <option>Other</option>
            </select>

            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
