import BeforeClass from '../BeforeClass';
import Weekend from '../Weekend';
import AfterClass from '../AfterClass';
import Break from '../Break';
import Header from '../Header';
import Lesson from '../Lesson';
import ShowWeekLessons from '../ShowWeekLessons';

// styles
import classes from './styles.module.css';

export default function AllComponentsPreview() {
  return (
    <div className={classes.root}>
      <ShowWeekLessons />
      <BeforeClass startedTime={"21:00"} />
      <Weekend />
      <AfterClass />
      <Break filteredLessons={[{ status: "default", start: "20:00" }]} />
      <Header />

      <Lesson data={{
        title: "Title",
        room: 40404,
        teacher: "Galoyan S",
        start: "09:00",
        end: "09:30",
        status: "default",
      }} />

      <Lesson data={{
        title: "Title",
        room: 40404,
        teacher: "Galoyan S",
        start: "06:00",
        end: "23:00",
        status: "current",
      }} />
    </div>
  )
}