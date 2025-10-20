// custom hooks
import useVersion from '../../customHooks/useVersion';

// components
import NotificationCircle from '../NotificationCircle';

// styles
import classes from './styles.module.css';

export default function Theme({ newTheme }) {
  const buttons = [
    { name: "Grass", theme: "colors_glass", version: 2, customIcon: true },
    { name: "Space", theme: "colors_space", version: 1 },
    { name: "Pink", theme: "colors_pink", version: 1 },
    { name: "Night", theme: "colors_dark", version: 1 },
    { name: "Light", theme: "colors_default", version: 0 },
  ];

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
      </div>
    </button>
  );
}