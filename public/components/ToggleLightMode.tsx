import React from "react";
import { useState, useEffect } from "react";

interface Props {
  // Optional prop types
}

const ToggleLightMode: React.FC<Props> = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const isDark = window.localStorage.getItem("darkMode") === "true";
    setDarkMode(isDark);
  }, []);

  const toggleLightMode = () => {
    setDarkMode(!darkMode);
    window.localStorage.setItem("darkMode", !darkMode);
  };

  return (
    <button onClick={toggleLightMode}>
      {darkMode ? "Light" : "Dark"} Mode
    </button>
  );
};

export default ToggleLightMode;
