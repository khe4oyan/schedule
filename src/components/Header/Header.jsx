// libs
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";

// constants
import themesNames from "../../constants/themesNames";

// styles
import classes from "./styles.module.css";

export default function Header({ theme, toggleTheme }) {
  return (
    <header className={classes.root}>
      <h1 className={classes.headerText}>Դասացուցակ</h1>

      <button className={classes.themeButton} onClick={toggleTheme}>
        {theme === themesNames.light ? (
          <CiLight size={30} />
        ) : (
          <CiDark size={30} />
        )}
      </button>
    </header>
  );
}
