// libs
import { Link, useLocation } from "react-router-dom";
import { BsCalendar4Week } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { FiClock } from "react-icons/fi";
import { FiStar } from "react-icons/fi";
import { GoCommandPalette } from "react-icons/go";

// custom hooks
import useVersion from '../../customHooks/useVersion';

// components
import NotificationCircle from '../NotificationCircle';

// constants
import routes from "../../constants/routes";
import VERSIONS from "../../constants/versions";
import NAV_MODES from '../../constants/navigationModes';

// styles
import classes from './styles.module.css';

export default function Navigation({ mode = NAV_MODES.SCHEDULE }) {
  const [isEventsUpdated, updateEvents] = useVersion("events", VERSIONS.EVENTS);
  const [isSettingsUpdated, updateSettings] = useVersion("settings", VERSIONS.SETTINGS);
  const { pathname } = useLocation();
  
  const isScheduleMode = mode === NAV_MODES.SCHEDULE;
  const isPracticeMode = mode === NAV_MODES.PRACTICE;

  const panelGridColumns = isScheduleMode ? 4 : isPracticeMode && 3;

  const panelStyles = {
    gridTemplateColumns: `repeat(${panelGridColumns}, 1fr)`
  };

  return (
    <div className={classes.root}>
      <div className={classes.panel} style={panelStyles}>
        {
          isScheduleMode &&
          <>
            <Link to={routes.SCHEDULE} className={`${classes.button} ${pathname === routes.SCHEDULE && classes.activeTab}`}>
              <FiClock />
            </Link>

            <Link to={routes.SCHEDULE_WEEK} className={`${classes.button} ${pathname === routes.SCHEDULE_WEEK && classes.activeTab}`}>
              <BsCalendar4Week size={36} />
            </Link>
          </>
        }

        {
          isPracticeMode &&
          <Link to={routes.PRACTICE} className={`${classes.button} ${pathname === routes.PRACTICE && classes.activeTab}`}>
            <GoCommandPalette />
          </Link>
        }

        <Link to={routes.EVENTS} onClick={updateEvents} className={`${classes.button} ${pathname === routes.EVENTS && classes.activeTab}`}>
          <FiStar />
          {isEventsUpdated && <NotificationCircle />}
        </Link>
        
        <Link to={routes.SETTINGS} onClick={updateSettings} className={`${classes.button} ${pathname === routes.SETTINGS && classes.activeTab}`}>
          <IoSettingsOutline />
          {isSettingsUpdated && <NotificationCircle />}
        </Link>
      </div>
    </div>
  )
}