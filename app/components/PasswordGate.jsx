import { useState, useEffect } from "react";

export default function PasswordGate({ children }) {
  const correctPassword = "Pankaj123"; // ⭐ Change your password here
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("site-auth");
    if (saved === "true") setIsAuthenticated(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === correctPassword) {
      setIsAuthenticated(true);
      localStorage.setItem("site-auth", "false"); // keep user logged in
    } else {
      alert("Incorrect password!");
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={styles.bg}>
        <form onSubmit={handleSubmit} style={styles.box}>
          <h2 style={styles.title}>Enter Password</h2>
          <input
            type="password"
            placeholder="Password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Unlock
          </button>
        </form>
      </div>
    );
  }

  return <>{children}</>;
}

const styles = {
  bg: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#0f0f0f",
  },
  box: {
    background: "#ffffff",
    padding: "30px",
    borderRadius: "10px",
    textAlign: "center",
    width: "280px",
  },
  title: {
    marginBottom: "15px",
    fontSize: "20px",
    fontWeight: "600",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    background: "#9cee69",
    border: "none",
    fontWeight: "600",
    cursor: "pointer",
  },
};
