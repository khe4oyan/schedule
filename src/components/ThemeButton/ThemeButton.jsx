// libs
import { FaLock } from "react-icons/fa";

// custom hooks
import useVersion from '../../customHooks/useVersion';

// components
import NotificationCircle from '../../components/NotificationCircle';

// styles
import classes from './styles.module.css';

export default function ThemeButton({ themeData, onClickTheme }) {
  const [isShowNot, updateVersion] = useVersion(themeData.theme, themeData.version);

  const onClickHandler = () => {
    onClickTheme(themeData.theme);
    updateVersion();
  }

  return (
    <button
      className={`${themeData.isDevelop ? "colors_develop" : themeData.theme} ${classes.button}`}
      onClick={onClickHandler}
      disabled={themeData.isDevelop}
    >
      {isShowNot && <NotificationCircle />}
      {themeData.isDevelop && 
        <div className={classes.develop}>
          <FaLock size={40}/>
          <p className={classes.developText}>Նախագծվում է</p>
        </div>
      }

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