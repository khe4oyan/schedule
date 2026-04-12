// libs
import { useState, useEffect } from "react";

// components
import Lesson from "../../components/Lesson";
import Weekend from "../../components/Weekend";
import BeforeClass from "../../components/BeforeClass";
import AfterClass from "../../components/AfterClass";
import Break from "../../components/Break";

// utils
import filterLessons from "../../utils/filterLessons";
import getDateTime from "../../utils/getDateTime";

// constants
import lessons from "../../constants/lessons";
import lessonStatuses from "../../constants/lessonStatuses";

// utils
import isAcademicTopLessonDay from "../../utils/isAcademicTopLessonDay.js";

// styles
import classes from "./styles.module.css";

const scenarioStatuses = {
  lesson: "LESSON",
  weekend: "WEEKEND",
  afterClass: "AFTER_CLASS",
  beforeClass: "BEFORE_CLASS",
  break: "BREAK",
};

export default function SchedulePage() {
  const [appStatus, setAppStatus] = useState(scenarioStatuses.lesson);
  const [filteredLessons, setFilteredLessons] = useState([]);
  const isTopLesson = isAcademicTopLessonDay();

  const calculateDayschedule = (inputRes) => {
    const result = [...inputRes].filter(
      (item) => item.getData(isTopLesson) !== undefined,
    );
    const currentDate = new Date();
    const currentTime = currentDate.getTime();

    for (let i = 0; i < result.length; ++i) {
      const lesson = result[i].getData(isTopLesson);
      const startTime = getDateTime(lesson.start);
      const endTime = getDateTime(lesson.end);

      // check before class start
      if (currentTime < startTime) {
        // check firts lesson
        if (i === 0) {
          setAppStatus(scenarioStatuses.beforeClass);
        } else {
          setAppStatus(scenarioStatuses.break);
        }
        break;
      } else {
        // check current lesson
        if (currentTime >= startTime && currentTime < endTime) {
          lesson.status = lessonStatuses.CURRENT;
          setAppStatus(scenarioStatuses.lesson);
          break;
        } else {
          // check last lesson
          lesson.status = lessonStatuses.COMPLETED;
          if (i === result.length - 1) {
            setAppStatus(scenarioStatuses.afterClass);
          } else {
            continue;
          }
        }
      }
    }

    setFilteredLessons(result);
  };

  const initschedule = (inputLessons) => {
    const result = filterLessons(inputLessons);

    if (result) {
      calculateDayschedule(result);
    } else {
      setAppStatus(scenarioStatuses.weekend);
    }
  };

  useEffect(() => {
    initschedule(lessons);

    window.addEventListener("visibilitychange", () => {
      initschedule(lessons);
    });
  }, []);

  useEffect(() => {
    if (
      appStatus === scenarioStatuses.afterClass ||
      appStatus === scenarioStatuses.weekend
    ) {
      return;
    }

    const now = new Date();
    const msUntilNextMinute =
      60000 - (now.getSeconds() * 1000 + now.getMilliseconds());

    const timeoutId = setTimeout(() => {
      calculateDayschedule(filteredLessons);
    }, msUntilNextMinute);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [filteredLessons]);

  const isWeekend = appStatus === scenarioStatuses.weekend;
  const isBeforeClass = appStatus === scenarioStatuses.beforeClass;
  const isAfterClass = appStatus === scenarioStatuses.afterClass;
  const isBreak = appStatus === scenarioStatuses.break;
  const isLesson = appStatus === scenarioStatuses.lesson || isBeforeClass || isBreak;

  return (
    <div className={classes.root}>
      {isWeekend && <Weekend />}
      {isBeforeClass && (
        <BeforeClass
          startedTime={filteredLessons[0]?.getData(isTopLesson)?.start}
        />
      )}
      {isAfterClass && <AfterClass />}
      {isBreak && <Break filteredLessons={filteredLessons} />}
      {isLesson &&
        filteredLessons
          .filter(
            (lessonData) =>
              lessonData.getData(isTopLesson)?.status !==
                lessonStatuses.COMPLETED && lessonData.getData(isTopLesson),
          )
          .map((lessonData, ind) => (
            <Lesson
              key={`${ind} ${JSON.stringify(lessonData)}`}
              data={lessonData.getData(isTopLesson)}
            />
          ))}
    </div>
  );
}
