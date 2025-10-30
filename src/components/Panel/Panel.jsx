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

export default function Panel({ tab, setTab }) {
  const [isThemeUpdated, updateTheme] = useVersion("theme", 2);
  const [isSettingsUpdated, updateSettings] = useVersion("settings", 1);

  const onClick = (ind) => {
    window.scrollTo({top: 0});
    setTab(ind);
  };

  const themeClick = () => {
    onClick(0);
    isThemeUpdated && updateTheme();
  }

  const scheduleClick = () => {
    onClick(1);
  }

  const settingsClick = () => {
    onClick(2);
    updateSettings();
  }

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <button className={classes.button} onClick={settingsClick}>
          <IoSettingsSharp />
          {isSettingsUpdated && <NotificationCircle />}
        </button>
      </div>

      <div className={classes.content}>
        {
          tab !== 1 &&
          <button onClick={scheduleClick} className={classes.button}><BsList /></button>
        }
        
        {
          tab !== 0 &&
          <button onClick={themeClick} className={classes.button}>
            <PiCircleHalfTiltFill />
            {isThemeUpdated && <NotificationCircle />}
          </button>
        }
      </div>
    </div>
  )
}