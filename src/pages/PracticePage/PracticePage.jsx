// components
import ShowWeekPractice from '../../components/ShowWeekPractice';

// styles
import classes from './styles.module.css';

export default function PracticePage() {
  return (
    <div className={classes.root}>
      <h2 className={classes.headerText}>Պրակտիկա</h2>
      <ShowWeekPractice />
    </div>
  )
}