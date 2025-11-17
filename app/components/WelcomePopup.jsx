import React, { useState, useEffect } from "react";

export default function WelcomePopup() {
  const [show, setShow] = useState(false);
  const [purpose, setPurpose] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    purpose: "",
    description: "",
  });

  useEffect(() => {
    setShow(true); // Show popup every page load
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.purpose ||
      (formData.purpose === "Other" && !formData.description)
    ) {
      alert("Please fill all required fields.");
      return;
    }

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwU_zTwgrpkngT4_hXqgOhEzvwt-c7IjIxA8tZO_YdmIe7MvIFziNaSlfiJdJePjXnu/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      alert("Your message has been sent!");
      setShow(false);
    } catch (err) {
      alert("Failed to send. Try again.");
    }
  };

  if (!show) return null;

  return (
    <div>
      {/* POPUP OVERLAY */}
      <div className="popup-overlay" onClick={() => setShow(false)}></div>

      {/* POPUP BOX */}
      <div className="popup-box">
        <button className="close-btn" onClick={() => setShow(false)}>✖</button>

        <img
          src="https://pankaj-berwal-portfolio.vercel.app/logo.png"
          alt="Site Logo"
          className="popup-logo"
        />

        <h2 className="popup-title">Connect With Me</h2>

        <form onSubmit={handleSubmit} className="popup-form">
          <label>Full Name *</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <label>Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Purpose *</label>
          <select
            name="purpose"
            value={formData.purpose}
            onChange={(e) => {
              handleChange(e);
              setPurpose(e.target.value);
            }}
            required
          >
            <option value="">Select</option>
            <option value="Hiring">Hiring</option>
            <option value="Freelance Work">Freelance Work</option>
            <option value="Other">Other</option>
          </select>

          {/* Show extra field if Other selected */}
          {purpose === "Other" && (
            <>
              <label>Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                required
              ></textarea>
            </>
          )}

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>

      {/* CSS INSIDE COMPONENT */}
      <style>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(3px);
          z-index: 999;
        }

        .popup-box {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: #ffffff;
          width: 90%;
          max-width: 420px;
          padding: 25px;
          border-radius: 12px;
          z-index: 1000;
          box-shadow: 0 8px 25px rgba(0,0,0,0.2);
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translate(-50%, -48%); }
          to   { opacity: 1; transform: translate(-50%, -50%); }
        }

        .close-btn {
          position: absolute;
          top: 10px;
          right: 12px;
          background: transparent;
          border: none;
          font-size: 20px;
          cursor: pointer;
        }

        .popup-logo {
          width: 70px;
          display: block;
          margin: 0 auto 10px;
        }

        .popup-title {
          text-align: center;
          margin-bottom: 15px;
          font-size: 24px;
          font-weight: bold;
          color: #333;
        }

        .popup-form label {
          font-weight: 600;
          font-size: 14px;
          margin-top: 10px;
          display: block;
        }

        .popup-form input,
        .popup-form select,
        .popup-form textarea {
          width: 100%;
          padding: 10px;
          border-radius: 6px;
          border: 1px solid #ccc;
          margin-top: 5px;
          font-size: 14px;
        }

        .submit-btn {
          margin-top: 15px;
          width: 100%;
          padding: 12px;
          background: #9cee69;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          color: #000;
        }

        .submit-btn:hover {
          background: #85d85a;
        }
      `}</style>
    </div>
  );
}
