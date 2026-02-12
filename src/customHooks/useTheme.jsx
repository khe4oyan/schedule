// libs
import { useState, useEffect } from "react";

// constants
import themesNames from '../constants/themesNames';

export default function useTheme(defaultTheme) {
	const [theme, setTheme] = useState(localStorage.getItem("theme") || defaultTheme);

  const toggleTheme = () => {
    if (theme === themesNames.light) { 
      setTheme(themesNames.dark);
    } else {
      setTheme(themesNames.light);
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, toggleTheme];
}