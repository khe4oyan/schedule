// libs
import { Link, useLocation } from "react-router-dom";
import { BsCalendar4Week } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { FiClock } from "react-icons/fi";
import { FiStar } from "react-icons/fi";

// custom hooks
import useVersion from '../../customHooks/useVersion';

// components
import NotificationCircle from '../NotificationCircle';

// constants
import routes from "../../constants/routes";
import VERSIONS from "../../constants/versions";

// styles
import classes from './styles.module.css';

export default function Navigation() {
  const [isEventsUpdated, updateEvents] = useVersion("events", VERSIONS.EVENTS);
  const [isThemeUpdated] = useVersion("theme", VERSIONS.THEME);
  const [isSettingsUpdated, updateSettings] = useVersion("settings", VERSIONS.SETTINGS);
  const { pathname } = useLocation();
  
  return (
    <div className={classes.root}>
      <div className={classes.panel}>
        <Link to={routes.SCHEDULE} className={`${classes.button} ${pathname === routes.SCHEDULE && classes.activeTab}`}>
          <FiClock />
        </Link>
       
        <Link to={routes.SCHEDULE_WEEK} className={`${classes.button} ${pathname === routes.SCHEDULE_WEEK && classes.activeTab}`}>
          <BsCalendar4Week size={36} />
        </Link>

        <Link to={routes.EVENTS} onClick={updateEvents} className={`${classes.button} ${pathname === routes.EVENTS && classes.activeTab}`}>
          <FiStar />
          {isEventsUpdated && <NotificationCircle />}
        </Link>
        
        <Link to={routes.SETTINGS} onClick={updateSettings} className={`${classes.button} ${pathname === routes.SETTINGS && classes.activeTab}`}>
          <IoSettingsOutline />
          {(isSettingsUpdated || isThemeUpdated ) && <NotificationCircle />}
        </Link>
      </div>
    </div>
  )
}