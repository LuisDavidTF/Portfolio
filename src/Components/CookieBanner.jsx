import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("cookiesSeen");
    /*if (!seen)*/ setVisible(true);
  }, []);

  const dismissBanner = () => {
    localStorage.setItem("cookiesSeen", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed",
      bottom: "-100px",
      left: 0,
      right: 0,
      backgroundColor: "rgba(0,0,0,0.85)",
      color: "#fff",
      padding: "15px 25px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "0.95rem",
      zIndex: 1000,
      boxShadow: "0 -2px 8px rgba(0,0,0,0.3)",
      borderRadius: "8px 8px 0 0",
      transform: "translateY(100%)",
      transition: "transform 0.5s ease"
    }} className="cookie-banner">
      <span>
        Este sitio usa Google Analytics para medir visitas y mejorar la experiencia del usuario.
      </span>
      <button 
        onClick={dismissBanner} 
        style={{
          marginLeft: "15px",
          padding: "6px 14px",
          backgroundColor: "#4CAF50",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        Entendido
      </button>
    </div>
  );
};
