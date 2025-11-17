import React, { useState } from "react";

export default function PopupForm({ open, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    purpose: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwsHsQh87mBGWjOn_1B5JLHLCYJTNsjHn3ZU5qdS9uS55-yYgaSfLCd63W-INnZqU7S/exec",
      {
        method: "POST",
        body: JSON.stringify(formData),
      }
    );

    const result = await response.json();

    if (result.success) {
      alert("Form submitted successfully!");
      onClose();
    } else {
      alert("Failed to submit.");
    }
  };

  if (!open) return null;

  return (
    <>
      {/* INLINE CSS */}
      <style>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .popup-box {
          width: 400px;
          background: #fff;
          padding: 25px;
          border-radius: 14px;
          position: relative;
          animation: popupFade 0.3s ease;
        }

        @keyframes popupFade {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .close-btn {
          position: absolute;
          top: 8px;
          right: 12px;
          font-size: 28px;
          border: none;
          background: transparent;
          cursor: pointer;
          color: #333;
        }

        .popup-form input,
        .popup-form textarea,
        .popup-form select {
          width: 100%;
          padding: 12px;
          margin-top: 12px;
          border-radius: 8px;
          border: 1px solid #ccc;
          font-size: 15px;
        }

        .popup-form textarea {
          height: 90px;
          resize: vertical;
        }

        .submit-btn {
          margin-top: 18px;
          width: 100%;
          padding: 12px;
          background: #0070f3;
          border: none;
          color: #fff;
          cursor: pointer;
          border-radius: 8px;
          font-size: 16px;
        }

        .submit-btn:hover {
          background: #005ad1;
        }
      `}</style>

      {/* POPUP CONTENT */}
      <div className="popup-overlay">
        <div className="popup-box">
          <button className="close-btn" onClick={onClose}>×</button>

          <h2>Connect With Me</h2>

          <form onSubmit={handleSubmit} className="popup-form">

            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
            />

            <select
              name="purpose"
              onChange={handleChange}
              required
            >
              <option value="">Select Purpose</option>
              <option value="Hiring">Hiring</option>
              <option value="Freelance Work">Freelance Work</option>
              <option value="Other">Other</option>
            </select>

            {formData.purpose === "Other" && (
              <textarea
                name="description"
                placeholder="Describe your purpose"
                onChange={handleChange}
                required
              ></textarea>
            )}

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
