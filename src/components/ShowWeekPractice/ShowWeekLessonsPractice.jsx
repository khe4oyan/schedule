// libs
import React from 'react';
import { useState } from 'react';

// components
import Weekend from '../Weekend';
import Practice from '../Practice'

// constants
import practice from '../../constants/practice.js';

// styles
import classes from './styles.module.css';

export default function ShowWeekPractices() {
  const [dayscheduleNum, setDayscheduleNum] = useState(() => {
    const currentDate = new Date();
    const dayNum = currentDate.getDay() - 1;

    if (dayNum < 0 || dayNum > 4) return null;

    return dayNum;
  });

  const days = ["Երկ", "Երք", "Չրք", "Հնգ", "Ուրբ"];

  const isWeekend = dayscheduleNum === null;

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
        { isWeekend && <Weekend /> }
        
        {
          practice[dayscheduleNum]?.length === 0 ?
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
