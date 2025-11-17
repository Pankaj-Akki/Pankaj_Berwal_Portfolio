import React, { useState } from "react";

export default function WelcomePopup({ open, onClose }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState("Hiring");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // success | error
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
        
        // Optionally auto-close popup after success
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
      setMessage("❌ Network error, try again.");
    }

    setLoading(false);
  };

  if (!open) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="close-btn" onClick={onClose}>×</button>

        <h2>Welcome 👋</h2>

        {/* Inline message */}
        {message && (
          <p
            style={{
              color: status === "success" ? "green" : "red",
              marginTop: "8px",
              marginBottom: "10px",
              fontSize: "14px",
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
  );
}
