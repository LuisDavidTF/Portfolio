// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Bootstrap JS
import "@fortawesome/fontawesome-free/css/all.min.css"; // FontAwesome
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css"; // Tu CSS personalizado

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
