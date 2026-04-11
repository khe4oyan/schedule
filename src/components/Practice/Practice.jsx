// libs
import { FaRegBuilding } from "react-icons/fa";
import { MdOutlineSensorDoor } from "react-icons/md";
import { TbElevator } from "react-icons/tb";
import { FaRegClock } from "react-icons/fa";
import { MdPlace } from "react-icons/md";

// components
import useSettingsOption from '../../customHooks/useSettingsOption';

// constants
import settings from '../../constants/settings';

// styles
import classes from './styles.module.css';

export default function Practice({ data }) {
  const {
    teacher,
    b, 
    f, 
    r,
    fullRoom,
    start,
    end,
  } = data;

  const { optionsValues } = settings;

  const [isNotMergeLessonNumbers] = useSettingsOption(optionsValues.notMergeLessonNumbers);

  return (
    <div className={classes.root}>
      <p className={classes.teacherName}>{teacher}</p>
      <div className={classes.time}>
        <p className={classes.time_p}><FaRegClock />{start}</p>-
        <p className={classes.time_p}><FaRegClock />{end}</p>
      </div>
      <div className={classes.room}>
        {
          isNotMergeLessonNumbers ? 
          <>
            <p className={classes.icon}><FaRegBuilding />{b}</p>
            <p className={classes.icon}><TbElevator />{f}</p>
            <p className={classes.icon}><MdOutlineSensorDoor />{r}</p>
          </>:
          <p className={classes.icon}><MdPlace />{fullRoom}</p>
        }
      </div>
    </div>
  )
}