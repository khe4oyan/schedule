// libs
import { BsList } from "react-icons/bs";
import { PiCircleHalfTiltFill } from "react-icons/pi";
import { IoSettingsSharp } from "react-icons/io5";

// custom hooks
import useVersion from '../../customHooks/useVersion';

// components
import NotificationCircle from '../NotificationCircle';

// styles
import classes from './styles.module.css';

export default function Panel({ setTab }) {
  const [isThemeUpdated, updateTheme] = useVersion("theme", 4);
  const [isSettingsUpdated, updateSettings] = useVersion("settings", 1);

  const onClick = (ind) => {
    window.scrollTo({ top: 0 });
    setTab(ind);
  };

  const onClickLessons = () => {
    onClick(1);
  };

  const onClickThemes = () => {
    onClick(0);
    isThemeUpdated && updateTheme();
  };

  const onClickSettings = () => {
    onClick(2);
    updateSettings();
  };

  return (
    <div className={classes.panel}>
      <button onClick={onClickSettings} className={`${classes.button} ${classes.settingsButton}`} data-btn="settings">
        <IoSettingsSharp />
        {isSettingsUpdated && <NotificationCircle />}
      </button>

      <button onClick={onClickLessons} className={`${classes.button} ${classes.lessonsButton}`} data-btn="lessons">
        <BsList />
      </button>

      <button onClick={onClickThemes} className={`${classes.button} ${classes.themesButton}`} data-btn="themes">
        <PiCircleHalfTiltFill />
        {isThemeUpdated && <NotificationCircle />}
      </button>
    </div>
  )
}