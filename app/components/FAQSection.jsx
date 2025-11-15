import { useState } from "react";

export default function FAQSection() {
  const faqs = [
    {
      question: "What technologies do you specialize in?",
      answer:
        "I specialize in front-end development using React, JavaScript, Tailwind CSS, and modern frameworks. I also work with WordPress, Shopify, and backend integrations using PHP.",
    },
    {
      question: "Do you offer freelance or remote work?",
      answer:
        "Yes! I’m available for freelance and remote projects — from landing pages and e-commerce websites to full-scale web apps.",
    },
    {
      question: "Can you redesign or optimize an existing website?",
      answer:
        "Absolutely. I love improving performance, enhancing UI/UX, and refactoring code to make sites faster, more responsive, and user-friendly.",
    },
    {
      question: "How can I contact you for a project?",
      answer:
        "You can reach out through my contact form or connect with me on LinkedIn and email. Let’s discuss your idea and bring it to life!",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="faq-section">
      <h2 className="faq-title">💬 Frequently Asked Questions</h2>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="faq-question">
              {faq.question}
              <span className="faq-toggle">{openIndex === index ? "−" : "+"}</span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
