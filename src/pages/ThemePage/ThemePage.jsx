// components
import ThemeButton from '../../components/ThemeButton';

// constants
import themesData from '../../constants/themes.js';

// styles
import classes from './styles.module.css';

export default function ThemePage({ newTheme }) {
  const buttons = themesData;

  const onClickTheme = (className) => {
    newTheme(className);
  }

  return (
    <div className={classes.root}>
      {
        buttons.map(themeData =>
          <ThemeButton
            key={themeData.theme}
            themeData={themeData}
            onClickTheme={onClickTheme}
          />
        )
      }
    </div>
  )
}
