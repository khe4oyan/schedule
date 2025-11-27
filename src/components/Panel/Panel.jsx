// libs
import { PiCircleHalfTiltFill } from "react-icons/pi";
import { BsCalendar4Week } from "react-icons/bs";
import { MdOutlineGroups2 } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

// custom hooks
import useVersion from '../../customHooks/useVersion';

// components
import NotificationCircle from '../NotificationCircle';

// styles
import classes from './styles.module.css';

export default function Panel({ setTab }) {
  const [isThemeUpdated, updateTheme] = useVersion("theme", 4);
  const [isSettingsUpdated, updateSettings] = useVersion("settings", 1);
  const [isPracticesUpdated, updatePractices] = useVersion("practice", 2);

  const onClick = (ind) => {
    window.scrollTo({ top: 0 });
    setTab(ind);
  };

  const onClickLessons = () => {
    onClick(1);
    localStorage.setItem("tab", 1);
  };

  const onClickThemes = () => {
    onClick(0);
    isThemeUpdated && updateTheme();
  };

  const onClickSettings = () => {
    onClick(2);
    updateSettings();
  };

  const onClickPractices = () => {
    onClick(3);
    localStorage.setItem("tab", 3);
    updatePractices();
  };

  return (
    <div className={classes.panel}>
      <button onClick={onClickSettings} className={`${classes.button} ${classes.settingsButton}`}>
        <IoSettingsOutline />
        {isSettingsUpdated && <NotificationCircle />}
      </button>

      <button onClick={onClickPractices} className={`${classes.button} ${classes.settingsButton}`}>
        <MdOutlineGroups2 />
        {isPracticesUpdated && <NotificationCircle />}
      </button>

      <button onClick={onClickLessons} className={`${classes.button} ${classes.lessonsButton}`}>
        <BsCalendar4Week size={36}/>
      </button>

      <button onClick={onClickThemes} className={`${classes.button} ${classes.themesButton}`}>
        <PiCircleHalfTiltFill />
        {isThemeUpdated && <NotificationCircle />}
      </button>
    </div>
  )
}