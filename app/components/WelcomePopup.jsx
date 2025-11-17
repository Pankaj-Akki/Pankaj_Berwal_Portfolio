import React, { useState } from "react";

export default function WelcomePopup({ open, onClose }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState("Hiring");

  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false); // ⭐ controls hiding form

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setStatus("");

    // 🔒 Validate before sending
    if (!fullName || !email) {
      setStatus("error");
      setMessage("❌ Please fill all fields.");
      setLoading(false);
      return;
    }

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
        setSubmitted(true); // ⭐ hide the form

        setTimeout(() => {
          onClose();
        }, 1300);
      } else {
        setStatus("error");
        setMessage("❌ Something went wrong. Please try again.");
      }

    } catch (err) {
      setStatus("error");
      setMessage("❌ Network error. Try again.");
    }

    setLoading(false);
  };

  if (!open) return null;

  return (
    <>
      <style>{`
        .popup-overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100vw; height: 100vh;
          background: rgba(0,0,0,0.55);
          display: flex; align-items: center; justify-content: center;
          z-index: 9999;
        }

        .popup-box {
          background: #fff;
          width: 90%; max-width: 420px;
          padding: 28px;
          border-radius: 14px;
          position: relative;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .popup-box input,
        .popup-box select {
          width: 100%;
          padding: 12px;
          margin-bottom: 15px;
          border-radius: 8px;
          border: 1px solid #ccc;
        }

        .popup-box button.submit-btn {
          width: 100%;
          padding: 12px;
          background: #164DB3;
          border: none;
          color: #fff;
          font-size: 17px;
          border-radius: 8px;
          cursor: pointer;
        }

        .close-btn {
          position: absolute;
          right: 12px;
          top: 12px;
          font-size: 26px;
          background: none;
          border: none;
          cursor: pointer;
        }
      `}</style>

      <div className="popup-overlay">
        <div className="popup-box">
          <button className="close-btn" onClick={onClose}>×</button>

          <h2 style={{ textAlign: "center", marginBottom: "18px" }}>
            Welcome 👋
          </h2>

          {/* INLINE MESSAGE */}
          {message && (
            <p
              style={{
                textAlign: "center",
                color: status === "success" ? "green" : "red",
                fontSize: "15px",
                marginBottom: "10px",
              }}
            >
              {message}
            </p>
          )}

          {/* ⭐ FORM HIDDEN AFTER SUCCESS */}
          {!submitted && (
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

              <select value={purpose} onChange={(e) => setPurpose(e.target.value)}>
                <option>Hiring</option>
                <option>Freelance Project</option>
                <option>Collaboration</option>
                <option>Other</option>
              </select>

              <button className="submit-btn" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
