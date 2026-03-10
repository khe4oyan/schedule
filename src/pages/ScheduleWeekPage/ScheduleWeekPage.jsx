// copmonents
import ShowWeekLessons from '../../components/ShowWeekLessons';

// styles
import classes from './styles.module.css';

export default function ScheduleWeekPage() {
  return (
    <div className={classes.root}>
      <ShowWeekLessons />
    </div>
  )
}