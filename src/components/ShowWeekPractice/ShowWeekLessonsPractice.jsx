// libs
import React from 'react';
import { useCallback, useState } from 'react';
import { FaRegBuilding } from "react-icons/fa";
import { MdOutlineSensorDoor } from "react-icons/md";
import { TbElevator } from "react-icons/tb";
import { FaRegClock } from "react-icons/fa";

// constants
import practice from '../../constants/practice.js';

// styles
import classes from './styles.module.css';

export default function ShowWeekPractices() {

  const initState = useCallback(() => {
    const dayNum = new Date().getDay() - 1;

    if (dayNum < 0 || dayNum > 4) return -1;

    return dayNum;
  });

  const [dayscheduleNum, setDayscheduleNum] = useState(initState);

  const days = ["Երկ", "Երեք", "Չորք", "Հինգ", "Ուրբ"];

  return (
    <div className={classes.root}>

      <div className={classes.buttons}>
        {
          days.map((day, ind) =>
            <button key={day} className={`${classes.button} ${ind === dayscheduleNum && classes.buttonActive}`} onClick={() => setDayscheduleNum(ind)}>{day}</button>
          )
        }
      </div>

      <div className={classes.practices}>
        {
          practice[dayscheduleNum].length === 0 ?
            <p className={classes.noPracticeMsg}>Այս օրը պրակտիկա չկա</p>
            :
            practice[dayscheduleNum]?.map(
              (practice, ind) => practice ?
                <Practice
                  key={ind}
                  data={practice}
                />
                :
                <React.Fragment key={ind}></React.Fragment>
            )
        }
      </div>
    </div>
  )
}

function Practice({ data }) {
  const {
    teacher,
    b, 
    f, 
    r,
    start,
    end,
  } = data;

  return (
    <div className={classes.practice}>
      <p className={classes.teacherName}>{teacher}</p>
      <div className={classes.room}>
        <p><FaRegBuilding />{b}</p>
        <p><TbElevator />{f}</p>
        <p><MdOutlineSensorDoor />{r}</p>
      </div>
      <div className={classes.time}>
        <p className={classes.time_p}><FaRegClock />{start}</p>
        -
        <p className={classes.time_p}><FaRegClock />{end}</p>
      </div>
    </div>
  )
}