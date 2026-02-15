// custom hooks
import useVersion from '../../customHooks/useVersion';

// components
import NotificationCircle from '../../components/NotificationCircle';

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

function ThemeButton({ themeData, onClickTheme }) {
  const [isShowNot, updateVersion] = useVersion(themeData.theme, themeData.version);

  const onClickHandler = () => {
    onClickTheme(themeData.theme);
    updateVersion();
  }

  return (
    <button
      key={themeData.theme}
      className={`${themeData.theme} ${classes.button}`}
      onClick={onClickHandler}
    >
      {isShowNot && <NotificationCircle />}

      <h2 className={classes.buttonHeaderText}>{themeData.name}</h2>
      
      <div className={classes.themePreviewCard}>
        <div className={`${classes.box} ${classes.box_1}`}>Lesson name</div>
        <div className={`${classes.box} ${classes.box_2}`}>Surname N.</div>
        <div className={classes.containerBox}>
          <div className={`${classes.box} ${classes.box_3}`}>0000</div>
          <div className={`${classes.box} ${classes.box_4}`}>xx:yy - xx:yy</div>
        </div>

        <div className={classes.line}></div>
      </div>
    </button>
  );
}