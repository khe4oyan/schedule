// libs
import React from 'react';
import { useCallback, useState } from 'react';

// components
import Lesson from '../Lesson';
// import DoubleLessonChanger from '../DoubleLessonChanger/DoubleLessonChanger.jsx';

// constants
import lessons from '../../constants/lessons';

// utils
import isAcademicTopLessonDay from '../../utils/isAcademicTopLessonDay.js'

// styles
import classes from './styles.module.css';

export default function ShowWeekLessons() {
  const [isTopLesson, setIsTopLesson] = React.useState(isAcademicTopLessonDay());

  const initState = useCallback(() => {
    const dayNum = new Date().getDay() - 1;

    if (dayNum < 0 || dayNum > 4) return -1;

    return dayNum;
  });

  const [dayscheduleNum, setDayscheduleNum] = useState(initState);

  const days = ["Երկ", "Երեք", "Չորք", "Հինգ", "Ուրբ"];

  return (
    <div className={classes.root}>
      <h2>Ամբողջական գրաֆիկ</h2>

      <div className={classes.buttons}>
        {
          days.map((day, ind) =>
            <button key={day} className={`${classes.button} ${ind === dayscheduleNum && classes.buttonActive}`} onClick={() => setDayscheduleNum(ind)}>{day}</button>
          )
        }
      </div>

      {/* <DoubleLessonChanger
        setIsTopLesson={setIsTopLesson}
        isTopLesson={isTopLesson}
      /> */}

      <div className={classes.lessons}>
        {
          lessons[dayscheduleNum]?.map(
            (lesson, ind) => {
              return lesson?.getData(isTopLesson) ?
                <Lesson
                  data={{ ...lesson?.getData(isTopLesson), status: "default" }}
                  key={`${lesson.title} ${ind}`}
                /> : <React.Fragment key={ind}></React.Fragment>
            }
          )
        }
      </div>
    </div>
  )
}