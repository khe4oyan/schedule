// libs
import { PiCircleHalfTiltFill } from "react-icons/pi";
import { BsCalendar4Week } from "react-icons/bs";
// import { MdOutlineGroups2 } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

// custom hooks
import useVersion from '../../customHooks/useVersion';

// components
import NotificationCircle from '../NotificationCircle';

// styles
import classes from './styles.module.css';

export default function Panel({ tab, setTab }) {
  const [isThemeUpdated, updateTheme] = useVersion("theme", 5);
  const [isSettingsUpdated, updateSettings] = useVersion("settings", 1);
  // const [isPracticesUpdated, updatePractices] = useVersion("practice", 2);

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

  // const onClickPractices = () => {
  //   onClick(3);
  //   localStorage.setItem("tab", 3);
  //   updatePractices();
  // };

  return (
    <div className={classes.panel}>
      <button onClick={onClickSettings} className={`${classes.button} ${tab === 2 && classes.activeTab}`}>
        <IoSettingsOutline />
        {isSettingsUpdated && <NotificationCircle />}
      </button>
{/* 
      <button onClick={onClickPractices} className={`${classes.button} ${tab == 3 && classes.activeTab}`}>
        <MdOutlineGroups2 />
        {isPracticesUpdated && <NotificationCircle />}
      </button> */}

      <button onClick={onClickLessons} className={`${classes.button} ${tab === 1 && classes.activeTab}`}>
        <BsCalendar4Week size={36}/>
      </button>

      <button onClick={onClickThemes} className={`${classes.button} ${tab === 0 && classes.activeTab}`}>
        <PiCircleHalfTiltFill />
        {isThemeUpdated && <NotificationCircle />}
      </button>
    </div>
  )
}