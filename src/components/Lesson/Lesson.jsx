// libs
import { useEffect, useState, useRef } from 'react';
import { CiClock2 } from "react-icons/ci";
import { IoTimerOutline } from "react-icons/io5";

// utils
import timerFormat from '../../utils/timerFormat';
import getDateTime from '../../utils/getDateTime'

// custom hooks
import useSettingsOption from '../../customHooks/useSettingsOption';

// constants
import settings from '../../constants/settings'; 
import lessonStatuses from '../../constants/lessonStatuses';

// styles
import classes from './styles.module.css';

export default function Lesson({ data }) {
  const title = data?.title;
  const teacher = data?.teacher;
  const room = data?.room;
  const start = data?.start;
  const end = data?.end;
  const status = data?.status;
  const type = data?.type;
  const group = data?.subGroup;
  const tempRoom = data?.tempRoom;

  const [timer, setTimer] = useState(() => {
    if (status === lessonStatuses.CURRENT) {
      const currentDate = new Date();
      const currentTime = currentDate.getTime();
      const endTime = getDateTime(end);

      return Math.floor((endTime - currentTime) / 1000);
    } else {
      return null;
    }
  });

  const { optionsValues } = settings;

  const interval = useRef(null);
  const [isDisabledGradientLine] = useSettingsOption(optionsValues.lessonLineDisabled);

  useEffect(() => {
    if (timer === null) { return; }

    interval.current = setTimeout(() => {
      setTimer(prev => prev - 1)
    }, 1000);

    window.addEventListener("visibilitychange", () => {
      const currentDate = new Date();
      const currentTime = currentDate.getTime();
      const endTime = getDateTime(end);
      const newTimer = Math.floor((endTime - currentTime) / 1000);

      setTimer(newTimer);
    });

    return () => {
      clearTimeout(interval.current);
    }
  }, []);

  useEffect(() => {
    if (timer < 1) {
      clearTimeout(interval.current);
    } else {
      interval.current = setTimeout(() => {
        setTimer(prev => prev - 1)
      }, 1000);
    }

    return () => {
      clearTimeout(interval.current);
    }
  }, [timer]);

  return (
    <div className={`${classes.root} ${status === lessonStatuses.CURRENT && classes.rootCurrent} ${status === lessonStatuses.COMPLETED && classes.rootCompleted}`}>
      <div className={classes.titleBox}>
        <p className={classes.title}>{title} {type && type } {group > 0 && group }</p>
      </div>

      <div className={classes.teacherBox}>
        <p className={classes.teacher}>{teacher}</p>
      </div>

      <div className={classes.room}>
        {
          tempRoom ? 
          <p><s>{room}</s> {tempRoom}</p> :
          <p>{room}</p>
        }
      </div>

      <div className={classes.footer}>
        <div className={classes.timeBox}> 
          <CiClock2 size={17} />
          <p className={classes.time}>{start} - {end}</p>
        </div>
        {
          status === lessonStatuses.CURRENT &&
          <p className={classes.timer}>
            <IoTimerOutline size={17} /> {timerFormat(timer)}
          </p>
        }
      </div>
      {
        !isDisabledGradientLine &&
        <div className={classes.line}></div>
      }
    </div>
  )
}