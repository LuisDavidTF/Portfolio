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
        bottom: "20px",
        right: "20px", // Cambiar a "left: 20px" si lo prefieres en la izquierda
        backgroundColor: "rgba(30,30,30,0.9)", // Fondo semi-transparente
        color: "#f5f5f5",
        padding: "18px 22px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        fontSize: "0.95rem",
        zIndex: 1000,
        boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
        borderRadius: "12px",
        width: "280px",
        maxWidth: "90%",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        animation: "fadeIn 0.6s ease"
      }}
      className="cookie-banner"
    >
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <span style={{ fontSize: "1.5rem", marginRight: "8px" }}>🍪</span>
        <strong>Aviso de Cookies</strong>
      </div>
      <p style={{ margin: "0 0 12px 0", lineHeight: "1.4" }}>
        Este sitio usa <strong>Google Analytics</strong> para medir visitas y mejorar la experiencia del usuario.
      </p>
      <button
        onClick={dismissBanner}
        style={{
          alignSelf: "flex-end",
          padding: "6px 14px",
          backgroundColor: "#4CAF50",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "600",
          fontSize: "0.9rem",
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
