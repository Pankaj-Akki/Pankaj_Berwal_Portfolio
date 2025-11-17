import { useEffect, useState } from "react";

export default function WelcomePopup() {
  const [show, setShow] = useState(true);
  const [purpose, setPurpose] = useState("");

  // Show popup every time page loads
  useEffect(() => {
    setShow(true);
  }, []);

  const handleClose = () => setShow(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const purposeValue = form.purpose.value;
    const otherDescription = form.otherDescription?.value.trim();

    if (!name || !email || !purposeValue) {
      alert("Please fill out all required fields.");
      return;
    }

    if (purposeValue === "Other" && !otherDescription) {
      alert("Please describe your purpose.");
      return;
    }

    alert("Form submitted successfully!");
    form.reset();
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="close-btn" onClick={handleClose}>×</button>

        <h2 className="popup-title">Connect With Me</h2>

        <form onSubmit={handleSubmit} className="popup-form">
          <label>Full Name *</label>
          <input type="text" name="name" required />

          <label>Email *</label>
          <input type="email" name="email" required />

          <label>Purpose *</label>
          <select
            name="purpose"
            required
            onChange={(e) => setPurpose(e.target.value)}
          >
            <option value="">Select Purpose</option>
            <option value="Hiring">Hiring</option>
            <option value="Freelance">Freelance Work</option>
            <option value="Other">Other</option>
          </select>

          {purpose === "Other" && (
            <>
              <label>Describe your purpose *</label>
              <input
                type="text"
                name="otherDescription"
                placeholder="Please describe..."
                required
              />
            </>
          )}

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>

      {/* CSS inside same file */}
      <style jsx>{`
        .popup-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }
        .popup {
          background: #fff;
          color: #000;
          padding: 30px;
          border-radius: 10px;
          width: 350px;
          position: relative;
          animation: fadeIn 0.3s ease-in-out;
        }
        .close-btn {
          position: absolute;
          top: 10px;
          right: 12px;
          background: none;
          border: none;
          font-size: 22px;
          cursor: pointer;
        }
        .popup-title {
          text-align: center;
          margin-bottom: 15px;
          font-size: 22px;
          font-weight: bold;
        }
        .popup-form label {
          font-weight: 600;
          margin-top: 10px;
          display: block;
        }
        .popup-form input,
        .popup-form select {
          width: 100%;
          padding: 8px;
          margin-top: 5px;
          border-radius: 6px;
          border: 1px solid #ccc;
        }
        .submit-btn {
          width: 100%;
          margin-top: 15px;
          padding: 10px;
          background: #4CAF50;
          color: #fff;
          font-size: 16px;
          border-radius: 6px;
          cursor: pointer;
          border: none;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
