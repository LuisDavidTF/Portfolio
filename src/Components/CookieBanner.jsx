import { useState, useEffect } from "react";
import { FaCookieBite } from "react-icons/fa";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("cookiesSeen");
    if (!seen) setVisible(true);
  }, []);

  const enableAnalytics = () => {
    // Insertar script de Google Analytics
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-X50BSFS1NL";
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-X50BSFS1NL');
    };
  };

  const dismissBanner = () => {
    localStorage.setItem("cookiesSeen", "true");
    setVisible(false);
    enableAnalytics(); // Activar Analytics solo después de aceptar
  };

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed",
      bottom: "20px",
      right: "20px",
      backgroundColor: "rgba(0,0,0,0.85)",
      color: "#fff",
      padding: "15px 20px",
      display: "flex",
      alignItems: "center",
      fontSize: "0.95rem",
      zIndex: 1000,
      boxShadow: "0 2px 10px rgba(0,0,0,0.4)",
      borderRadius: "12px",
      maxWidth: "320px"
    }} className="cookie-banner">
      <FaCookieBite style={{ marginRight: "10px", fontSize: "1.5rem", color: "#FFD700" }} />
      <span style={{ flex: 1 }}>
        Este sitio usa Google Analytics para medir visitas y mejorar tu experiencia.
      </span>
      <button 
        onClick={dismissBanner} 
        style={{
          marginLeft: "15px",
          padding: "6px 14px",
          backgroundColor: "#4CAF50",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        Aceptar
      </button>
    </div>
  );
}
