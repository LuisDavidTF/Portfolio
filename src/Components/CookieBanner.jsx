import { useState, useEffect } from "react";
import { FaCookieBite } from "react-icons/fa";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  // Revisar consentimiento al cargar la página
  useEffect(() => {
    const consent = localStorage.getItem("cookiesSeen");
    if (!consent) {
      setVisible(true); // mostrar banner si no hay consentimiento
    } else {
      enableAnalytics(); // cargar GA automáticamente si ya aceptó antes
    }
  }, []);

  const enableAnalytics = () => {
    // Evitar cargar varias veces
    if (!window.gtag) {
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
    }
  };

  const handleAccept = () => {
    localStorage.setItem("cookiesSeen", "true");
    setVisible(false);
    enableAnalytics(); // cargar GA después de aceptar
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
      flexDirection: "column",
      alignItems: "flex-start",
      fontSize: "0.95rem",
      zIndex: 1000,
      boxShadow: "0 2px 10px rgba(0,0,0,0.4)",
      borderRadius: "12px",
      maxWidth: "320px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }} className="cookie-banner">
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <FaCookieBite style={{ marginRight: "10px", fontSize: "1.5rem", color: "#FFD700" }} />
        <strong>Aviso de Cookies</strong>
      </div>
      <p style={{ margin: "0 0 12px 0", lineHeight: "1.4" }}>
        Este sitio usa Google Analytics para medir visitas y mejorar tu experiencia.
      </p>
      <button 
        onClick={handleAccept} 
        style={{
          alignSelf: "flex-end",
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
