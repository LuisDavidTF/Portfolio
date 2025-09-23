import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Esto mueve el scroll a la parte superior
  }, [location]);

  return null;
};

export default ScrollToTop;
