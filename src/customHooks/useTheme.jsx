// libs
import { useState, useEffect } from "react";

// constants
import themesNames from '../constants/themesNames';

export default function useTheme(defaultTheme) {
	const [theme, setTheme] = useState(() => {
    const storageTheme = localStorage.getItem("theme") || defaultTheme;
    const isValidThemeInStorage = Object.values(themesNames).includes(storageTheme);
    
    return isValidThemeInStorage ? storageTheme : defaultTheme;
  });

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