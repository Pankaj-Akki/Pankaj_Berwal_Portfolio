import React, { useState } from "react";

export default function WelcomePopup({ open, onClose }) {
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
      alert("Your form has been submitted!");
      onClose();
    } else {
      alert("Submission failed. Try again.");
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
          z-index: 9999;
        }

        .popup-box {
          width: 400px;
          background: #fff;
          padding: 25px;
          border-radius: 14px;
          position: relative;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .close-btn {
          position: absolute;
          top: 10px;
          right: 12px;
          background: none;
          border: none;
          font-size: 30px;
          cursor: pointer;
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
          color: #fff;
          font-size: 16px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }

        .submit-btn:hover {
          background: #005ad1;
        }

        h2 {
          text-align: center;
          margin-bottom: 10px;
        }
      `}</style>

      {/* POPUP UI */}
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

            <select name="purpose" onChange={handleChange} required>
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

            <button type="submit" className="submit-btn">
              Submit
            </button>

          </form>
        </div>
      </div>
    </>
  );
}
