import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [currentTheme, setCurrentTheme] = useState("light");

  // Detectar el tema inicial (según sistema o body)
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const savedTheme = document.body.getAttribute("data-theme");

    if (savedTheme) {
      setCurrentTheme(savedTheme);
    } else {
      const systemTheme = prefersDark ? "dark" : "light";
      document.body.setAttribute("data-theme", systemTheme);
      setCurrentTheme(systemTheme);
    }
  }, []);

  // Cambiar el tema manualmente
  const handleToggleTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.body.setAttribute("data-theme", newTheme);
    setCurrentTheme(newTheme);
  };

  return (
    <button onClick={handleToggleTheme}>
      {currentTheme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
