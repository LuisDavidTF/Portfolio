import React from "react";

function Footer() {
  return (
    <footer className="text-center py-4" id="contact">
      <h4>Connect</h4>
      <p>
        <a href="https://www.linkedin.com/in/luis-david-trejo-fuentes/" target="_blank" className="me-3">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/LuisDavidTF" target="_blank" className="me-3">
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a href="mailto:luisdavidtrejofuentes@gmail.com">
          <i className="fas fa-envelope fa-2x"></i>
        </a>
      </p>
    </footer>
  );
}

export default Footer;
