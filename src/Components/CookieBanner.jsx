import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("cookiesSeen");
    if (!seen) {
      setVisible(true);
    }
  }, []);

  const dismissBanner = () => {
    localStorage.setItem("cookiesSeen", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#1e1e1e",
        color: "#f5f5f5",
        padding: "16px 28px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "1rem",
        zIndex: 1000,
        boxShadow: "0 -3px 10px rgba(0,0,0,0.4)",
        borderTop: "3px solid #4CAF50",
        transform: visible ? "translateY(0)" : "translateY(100%)",
        transition: "transform 0.5s ease",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}
      className="cookie-banner"
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span style={{ fontSize: "1.5rem" }}>🍪</span>
        <span>
          Este sitio usa <strong>Google Analytics</strong> para medir visitas y
          mejorar la experiencia del usuario.
        </span>
      </div>
      <button
        onClick={dismissBanner}
        style={{
          marginLeft: "20px",
          padding: "8px 18px",
          backgroundColor: "#4CAF50",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "600",
          fontSize: "0.95rem",
          transition: "background-color 0.3s ease"
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
      >
        Entendido
      </button>
    </div>
  );
}
