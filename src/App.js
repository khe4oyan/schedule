// libs
import { useEffect } from "react";

// components
import Header from "./components/Header";
import ShowWeekLessons from "./components/ShowWeekLessons";

// custom hooks
import useTheme from "./customHooks/useTheme";

// constants
import themesNames from "./constants/themesNames";

// general styles
import "./app.css";

function App() {
  const [theme, toggleTheme] = useTheme(themesNames.light);

  useEffect(() => {
    document.body.classList = [];

    if (theme === themesNames.light) {
      document.body.classList.add("theme_light");
    } else {
      document.body.classList.add("theme_dark");
    }
  }, [theme]);

  return (
    <div className="app">
      <Header theme={theme} toggleTheme={toggleTheme}/>
      <ShowWeekLessons />
    </div>
  );
}

export default App;
