// libs
import { Link, useLocation } from "react-router-dom";
import { PiCircleHalfTiltFill } from "react-icons/pi";
import { BsCalendar4Week } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { BsCalendar4Event } from "react-icons/bs";

// custom hooks
import useVersion from '../../customHooks/useVersion';

// components
import NotificationCircle from '../NotificationCircle';

// constants
import routes from "../../constants/routes";

// styles
import classes from './styles.module.css';

export default function Navigation() {
  const [isEventsUpdated, updateEvents] = useVersion("events", 1);
  const [isThemeUpdated, updateTheme] = useVersion("theme", 5);
  const [isSettingsUpdated, updateSettings] = useVersion("settings", 1);
  const { pathname } = useLocation();
  
  return (
    <div className={classes.panel}>
      <Link to={routes.EVENTS} onClick={updateEvents} className={`${classes.button} ${pathname === routes.EVENTS && classes.activeTab}`}>
        <BsCalendar4Event />
        {isEventsUpdated && <NotificationCircle />}
      </Link>
      
      <Link to={routes.SETTINGS} onClick={updateSettings} className={`${classes.button} ${pathname === routes.SETTINGS && classes.activeTab}`}>
        <IoSettingsOutline />
        {isSettingsUpdated && <NotificationCircle />}
      </Link>

      <Link to={routes.SCHEDULE} className={`${classes.button} ${pathname === routes.SCHEDULE && classes.activeTab}`}>
        <BsCalendar4Week size={36}/>
      </Link>

      <Link to={routes.THEME} onClick={updateTheme} className={`${classes.button} ${pathname === routes.THEME && classes.activeTab}`}>
        <PiCircleHalfTiltFill />
        {isThemeUpdated && <NotificationCircle />}
      </Link>
    </div>
  )
}