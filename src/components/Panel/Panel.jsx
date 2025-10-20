// libs
import { BsList } from "react-icons/bs";
import { PiCircleHalfTiltFill } from "react-icons/pi";

// custom hooks
import useVersion from '../../customHooks/useVersion';

// components
import NotificationCircle from '../NotificationCircle';

// styles
import classes from './styles.module.css';

export default function Panel({ tab, setTab }) {
  const [isShowNot, updateVersion] = useVersion("theme", 2);
  
  const onClick = (ind) => {
    setTab(ind);
  };

  const scheduleClick = () => {
    onClick(0);
  }

  const themeClick = () => {
    onClick(1);
    isShowNot && updateVersion();
  }

  return (
    <div className={classes.root}>
      <button onClick={scheduleClick} className={`${classes.button} ${(tab === 0 && classes.active).toString()}`}><BsList /></button>
      <button onClick={themeClick} className={`${classes.button} ${(tab === 1 && classes.active).toString()}`}><PiCircleHalfTiltFill />
        {isShowNot && <NotificationCircle />}
      </button>
    </div>
  )
}